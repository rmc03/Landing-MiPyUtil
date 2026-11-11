// @ts-nocheck: solo corre en el build (APIs de Node) y el proyecto no incluye @types/node.
import fs from 'node:fs';
import path from 'node:path';

export type Screen = 'resumen' | 'mi-turno' | 'cuadres' | 'confirmar-pago';

// Nombre de archivo de cada captura real: public/screens/<nombre>.png
// (o <nombre>-dark.png, que tiene prioridad porque la página es oscura).
const FILES: Record<Screen, string> = {
  'resumen': '01-resumen',
  'confirmar-pago': '03-confirmar-pago',
  'cuadres': '05-cuadres',
  'mi-turno': '06-mi-turno'
};

const DIR = path.join(process.cwd(), 'public', 'screens');

/** Archivo de la captura real de esa pantalla, o undefined si todavía no existe. */
export function realScreenshot(screen: Screen): string | undefined {
  const name = FILES[screen];
  return [`${name}-dark.png`, `${name}.png`].find((file) => fs.existsSync(path.join(DIR, file)));
}
