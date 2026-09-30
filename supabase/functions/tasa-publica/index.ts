// Lectura pública de la tasa USD de elTOQUE, para la landing de MiPyUtil.
//
// `tasa-cambio` (pg_cron, cada hora) guarda las tasas en `tasas_cambio`, que
// solo leen usuarios con sesión. Esta función es la puerta de solo lectura
// para visitantes sin sesión: devuelve ÚNICAMENTE el dólar y su antigüedad.
// No expone EUR, MLC, USDT ni el historial, y no llama a elTOQUE: lee la fila
// más reciente que ya guardó `tasa-cambio`.
//
// Se despliega con verify_jwt: false porque la landing no tiene sesión. Lo
// único que hace es leer un dato público, así que no hay secreto que validar.
//
// Respuesta 200:
//   { "usd": 755, "dia": "2026-09-30",
//     "tomada_en": "2026-09-30T15:05:02.181+00:00", "edad_seg": 312 }
//
// `edad_seg` la calcula el servidor: los teléfonos en Cuba suelen tener la
// hora mal puesta, así que la landing no debe comparar `tomada_en` con su reloj.
// Si no hay tasa válida responde 503 { "error": "sin_tasa" }.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? ''
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

// Sitios desde los que el navegador puede leer la respuesta. CORS no protege
// el dato (es público); solo evita que otras páginas lo embeban desde el navegador.
const ORIGENES_PERMITIDOS = new Set([
  'https://mipyutil.vercel.app',
  'http://localhost:4321',
])

// Varias visitas seguidas comparten una sola lectura a la base de datos.
const MEMORIA_MS = 60_000
// El navegador reutiliza la respuesta este tiempo sin volver a pedirla.
const CACHE_NAVEGADOR_S = 300

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
})

interface FilaTasa {
  usd: number
  dia: string
  tomada_en: string
}

let memoria: { fila: FilaTasa; leidoMs: number } | null = null

Deno.serve(async (req) => {
  const origen = req.headers.get('origin')

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cabeceras(origen, false) })
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return new Response('Method not allowed', { status: 405, headers: cabeceras(origen, false) })
  }

  try {
    const fila = await ultimaTasa()
    if (!fila) {
      return new Response(JSON.stringify({ error: 'sin_tasa' }), {
        status: 503,
        headers: cabeceras(origen, false),
      })
    }
    const edadSeg = Math.max(0, Math.round((Date.now() - Date.parse(fila.tomada_en)) / 1000))
    return new Response(
      req.method === 'HEAD' ? null : JSON.stringify({ ...fila, edad_seg: edadSeg }),
      { headers: cabeceras(origen, true) },
    )
  } catch (error) {
    console.error('tasa-publica:', error)
    return new Response(JSON.stringify({ error: 'sin_tasa' }), {
      status: 503,
      headers: cabeceras(origen, false),
    })
  }
})

// La fila más reciente con un dólar válido, o null.
async function ultimaTasa(): Promise<FilaTasa | null> {
  if (memoria && Date.now() - memoria.leidoMs < MEMORIA_MS) return memoria.fila

  const { data, error } = await supabase
    .from('tasas_cambio')
    .select('dia, tasas, tomada_en')
    .order('dia', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error) throw error
  if (!data) return null

  const usd = Number(data.tasas?.USD)
  if (!Number.isFinite(usd) || usd <= 0) return null

  const fila = { usd, dia: data.dia as string, tomada_en: data.tomada_en as string }
  memoria = { fila, leidoMs: Date.now() }
  return fila
}

function cabeceras(origen: string | null, cacheable: boolean): Record<string, string> {
  const h: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': cacheable ? `public, max-age=${CACHE_NAVEGADOR_S}` : 'no-store',
    // La respuesta cambia según el origen (CORS): que ninguna caché la mezcle.
    Vary: 'Origin',
  }
  if (origen && ORIGENES_PERMITIDOS.has(origen)) {
    h['Access-Control-Allow-Origin'] = origen
    h['Access-Control-Allow-Methods'] = 'GET, HEAD, OPTIONS'
  }
  return h
}
