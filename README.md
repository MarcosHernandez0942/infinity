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

## Pendiente

- Backend (Flask + PostgreSQL + Celery/RabbitMQ + Redis) para guardar
  cotizaciones reales y el panel de administrador — ver `paso8_prompt_maestro.txt`.
- Reemplazar los datos inventados de distribuidor/contacto/redes por los reales.
