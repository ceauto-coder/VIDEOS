import { continueRender, delayRender, staticFile } from "remotion";

// Fuentes servidas desde public/fonts/ (sin descargar de Google Fonts al renderizar).
// Para cambiar de fuente: baja el .woff2 (subset latin) a public/fonts/ y edita esta lista.
const loadLocalFont = (family: string, file: string, weight: string) => {
  if (typeof document === "undefined") return family;
  const handle = delayRender(`Cargando fuente ${family}`);
  // Registra la fuente en el documento y libera el render cuando esté lista
  new FontFace(family, `url(${staticFile(`fonts/${file}`)}) format("woff2")`, { weight })
    .load()
    .then((f) => { document.fonts.add(f); continueRender(handle); })
    .catch((e) => { console.error(e); continueRender(handle); });
  return family;
};

// Archivo es variable: un solo archivo cubre los pesos 800–900
export const TITLE = loadLocalFont("Archivo", "Archivo.woff2", "800 900");
export const BODY = loadLocalFont("Instrument Sans", "InstrumentSans.woff2", "600");

export const C = {
  bg: "#0B0A10",
  card: "rgba(21,19,28,0.92)",
  cardSolid: "#15131C",
  line: "rgba(255,255,255,0.09)",
  text: "#F4F2F8",
  muted: "#9C97AB",
  lime: "#D7F25A",
  violet: "#A77BFF",
  red: "#FF6B6B",
};

// ---------- marca (lo completa la skill en la entrevista inicial) ----------
// lime = color de acento principal · violet = acento secundario (los nombres quedan por compatibilidad).
export const MARCA = {
  handle: "@TU_USUARIO", // aparece abajo a la derecha en los videos horizontales
  ctaPalabra: "VIDEO", // reels: "Comenta VIDEO…"
  ctaTexto: "y te envío el video completo",
};
