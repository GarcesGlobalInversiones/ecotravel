# EcoTravel — Agencia de viajes (demo funcional)

Sitio estático listo para presentar. Solo abre `index.html` en el navegador. No requiere instalación ni build.
Única dependencia externa vía CDN: Leaflet 1.9.4 (mapa) + imágenes Unsplash + fuentes Google. Sin internet, el mapa muestra un aviso y el resto funciona.

## Ejecutar
- Opción 1 (más simple): doble clic en `index.html`.
- Opción 2 (recomendada, evita restricciones de algunos navegadores):
  ```powershell
  # desde esta carpeta
  python -m http.server 5500
  # abre http://localhost:5500
  ```
  O con Node: `npx serve .`

## Archivos
- `index.html` — estructura y todas las secciones (nav, hero carrusel + buscador, cómo funciona, destinos, mapa condicional, experiencias, ofertas + comparador, quiz, cotizador, nosotros, sostenible, testimonios + opiniones, FAQ, contacto, footer, modales).
- `styles.css` — diseño verde bosque / arena, responsive (desktop, tablet, móvil), accesible, respeta `prefers-reduced-motion`.
- `app.js` — **datos centralizados de demostración** (`DESTINOS`, `PAQUETES`, `EXPERIENCIAS`, `TESTIMONIOS`, `FAQS`) + toda la lógica: buscador con validación de fechas, filtros por categoría, modales de detalle, flujo de solicitud de reserva, formularios validados, FAQ, menú móvil, volver arriba, toasts, respaldo de imágenes rotas.

## Funcionalidades comprobadas
- Navegación suave + menú móvil + foco visible + Escape cierra modales.
- Buscador: exige destino y fechas coherentes (regreso > salida, salida ≥ hoy); filtra el catálogo local y muestra sección de resultados; botón limpiar.
- Filtros por categoría (chips + tarjetas de experiencia + botón sostenible) y filtro **♥ Favoritos** con cotización conjunta.
- **Favoritos:** corazón en cada tarjeta, persisten en `localStorage` (`ecotravel_favs`), filtro propio y botón de cotización.
- **Comparador:** marca hasta 3 paquetes, barra flotante y tabla lado a lado en modal (precio, descuento, duración, incluidos) con CTA de reserva.
- **Cotizador estimado:** paquete + viajeros + nivel (×1/×1.3/×1.65) + temporada (+0/10/20%), desglose en vivo, CTA a reserva (pre-llena viajeros) y a WhatsApp con el resumen. Todo marcado como demo.
- **Mapa (oculto hasta verificar ubicaciones):** la sección `#mapa` nace con `hidden` y `initMap()` solo la muestra si `UBICACIONES_VERIFICADAS` (en `app.js`) tiene ids. Usa mosaicos CARTO (gratis, con atribución) porque el servidor de OSM bloquea el uso desde archivos locales (error 403 "Access blocked"). Para publicar: verifica la coordenada exacta en `COORDS` y añade el id al conjunto, ej: `["cartagena", "tayrona"]` → el mapa aparece solo con esos marcadores.
- **WhatsApp flotante** y en FAQ/cotizador: usan `WHATSAPP_NUMBER` (`app.js`, marcador demo `573000000000`).
- **Cómo funciona:** franja de 3 pasos con enlaces a destinos, cotizador y contacto.
- **Mejor época:** dato estacional orientativo por destino (`TEMPORADAS_INFO` en `app.js`), visible en tarjetas y modal de detalle. No es disponibilidad.
- **Quiz:** 3 preguntas con progreso, puntaje por ambiente/duración/ritmo, tarjeta de recomendación con detalle, cotización directa (pre-llena el cotizador) y reinicio.
- **Compartir:** botón ⤴ en cada tarjeta con menú WhatsApp (texto + enlace) y copiar enlace (con respaldo sin portapapeles). Cierra con clic fuera o Escape.
- **Itinerarios día a día:** timeline en el modal de detalle (`ITINERARIOS` en `app.js`, contenido demo orientativo).
- **Hero con carrusel:** 4 fotos con fundido cada 6s, dots manuales, pausa al ocultar la pestaña y sin autoplay con movimiento reducido.
- **Testimonios en carrusel:** avance automático cada 7s (pausa al pasar el cursor), flechas y dots; **formulario de opinión demo** (nombre, destino, estrellas, mensaje) que publica la tarjeta al inicio y la guarda en `localStorage` (`ecotravel_opiniones_demo`), marcada como no verificada.
- Reserva y contacto: validación (nombre, email regex, teléfono ≥7 dígitos, mensaje ≥10), estado de carga, confirmación honesta de **demostración local** (guarda en `localStorage`: `ecotravel_reservas_demo`, `ecotravel_contacto_demo`). Sin backend real.
- Imágenes: Unsplash estables + `loading="lazy"` + `onerror` con placeholder SVG (no hay imágenes rotas).

## Conectar servicios reales (pendiente, identificado)
1. **Contacto/reservas:** reemplaza el `setTimeout` en `app.js` por `fetch("https://tu-api/reservas", {method:"POST", ...})` o un servicio como Formspree/Brevo. Hoy NO se envía nada a la agencia (se indica en la UI).
2. **Redes/contacto:** reemplaza `hola@ecotravel.demo`, `+57 (000) 000 0000` y los `href="#"` sociales por datos reales.
3. **Precios:** todo lo mostrado lleva etiqueta “demo/referencia”. Actualiza `DESTINOS`/`PAQUETES` con cotizaciones reales antes de publicar.
4. **Testimonios/stats:** marcados como demostración/descriptivos; sustitúyelos por reseñas y métricas verificadas.

## Personalizar
Edita solo `app.js` (datos) y `styles.css` (`:root` para colores). Contenido en español, precios COP/USD configurables.
