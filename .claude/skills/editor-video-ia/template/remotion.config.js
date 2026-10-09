import { Config } from "@remotion/cli/config";
import { existsSync } from "fs";

// Si Remotion no puede descargar su navegador (redes restringidas), usa un Chromium ya instalado.
// Prioridad: variable REMOTION_BROWSER → Chromium de Playwright → el que descarga Remotion.
const candidatos = [
  process.env.REMOTION_BROWSER,
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell",
].filter(Boolean);
const navegador = candidatos.find((p) => existsSync(p));
if (navegador) Config.setBrowserExecutable(navegador);
