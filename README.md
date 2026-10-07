# VIDEOS

Edición de video conversacional con Claude Code usando [video-use](https://github.com/browser-use/video-use)
(vendorizado en `.claude/skills/video-use`, upstream commit `b877063`).

## Estructura

```
.claude/skills/video-use/   # skill + helpers (Claude Code la detecta automáticamente)
footage/<proyecto>/         # aquí van los clips crudos
footage/<proyecto>/edit/    # salidas: final.mp4, edl.json, transcripts/ (gitignored)
```

## Setup (una vez)

1. **API key de ElevenLabs** (Scribe hace la transcripción palabra a palabra):
   - Cloud: agrégala como variable de entorno `ELEVENLABS_API_KEY` en la configuración del entorno.
   - Local: `cp .claude/skills/video-use/.env.example .claude/skills/video-use/.env` y edítala.
2. **Dependencias**: `ffmpeg` + `pip install -r requirements.txt`.
   En el entorno cloud, añade esto al setup script del entorno:
   ```bash
   command -v ffmpeg || (apt-get update && apt-get install -y ffmpeg)
   pip install -q -r requirements.txt
   ```

## Uso

1. Sube los clips a `footage/<proyecto>/` (GitHub limita a 100 MB por archivo; para más, usa Git LFS
   o descarga con `yt-dlp` / Google Drive dentro de la sesión).
2. Abre Claude Code en este repo y pide, p. ej.:
   > edita los clips de footage/lanzamiento en un video de lanzamiento de 60s, subtítulos en español

Claude inventaría las tomas, propone estrategia, espera tu OK, renderiza y se autoevalúa.
Resultado: `footage/<proyecto>/edit/final.mp4`.

## Actualizar video-use

```bash
git clone --depth 1 https://github.com/browser-use/video-use /tmp/vu
rm -rf .claude/skills/video-use && mkdir -p .claude/skills/video-use
(cd /tmp/vu && tar --exclude=.git -cf - .) | tar -xf - -C .claude/skills/video-use
```
