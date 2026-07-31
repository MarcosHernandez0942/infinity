# Infinity — INFINITI QX55

Landing page para promover el INFINITI QX55 2025 (proyecto "Infinity" de Tyakxa).

## Estructura

- `site/` — frontend (React + Vite), 7 secciones con video de marca como fondo
  de navegación y formulario de cotización. Los clips (`site/public/videos/`,
  generados en Google Labs Flow) viven ahí porque es lo que Vite sirve.
- `referencias/` — logo y capturas de referencia del sitio de la marca.
- `deploy/` — Dockerfile, nginx.conf y docker-compose.yml para servir el
  frontend en producción.
- `paso5_video_prompts.json`, `paso6_7_secciones_contenido.txt`,
  `paso8_prompt_maestro.txt`, `prompts_paso4.txt`, `infinity_5_layouts.html` —
  documentación del proceso de diseño (hoja "Tarea" de la Plantilla de
  desarrollo).

## Desarrollo local

```bash
cd site
npm install
npm run dev
```

## Docker

```bash
cd deploy
docker compose up --build
```

Sirve el sitio en `http://localhost:8081`.

## Datos reales vs. inventados

- **Specs del QX55** (motor, potencia, transmisión, rendimiento, equipamiento):
  son las publicadas por INFINITI — confirmar contra la ficha técnica vigente
  antes de publicar, pueden variar por versión/año modelo.
- **Distribuidor, contacto y redes sociales** (`Distribuidores.jsx`,
  `Footer.jsx`): son datos de EJEMPLO inventados (dirección, teléfono, correo
  y handles ficticios) para que la demo no se vea vacía. Están marcados con un
  comentario `NOTA` en el código — **hay que reemplazarlos por los datos
  reales del cliente antes de publicar**, no son información verificada.

## Responsivo (móvil / tablet / escritorio)

El layout ya es responsivo (probado en 375/768/1280px, sin desbordes). Lo que
falta es el **encuadre del video**: los 5 clips solo existen en 16:9, así que
en pantallas verticales angostas se recorta mucho del cuadro (`object-fit:
cover` corta los lados). El código ya está listo para usar clips verticales
en cuanto existan:

- `VideoBackground.jsx` acepta un prop `srcMobile` — en pantallas ≤760px
  busca `escenaN_..._9x16.mp4` en vez del 16:9, y si ese archivo todavía no
  existe cae de vuelta al video de escritorio automáticamente (sin romper
  nada).
- Los prompts de esos 5 clips 9:16 ya están en `paso5_video_prompts.json`
  (campo `clip_prompt_9_16` de cada escena) — solo falta generarlos en Flow
  y guardarlos en `site/public/videos/` con esos nombres exactos.

## Pendiente

- Backend (Flask + PostgreSQL + Celery/RabbitMQ + Redis) para guardar
  cotizaciones reales y el panel de administrador — ver `paso8_prompt_maestro.txt`.
- Reemplazar los datos inventados de distribuidor/contacto/redes por los reales.
- Generar los 5 clips verticales (9:16) para que el video se vea bien en
  celular — ver sección "Responsivo" arriba.
