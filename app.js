/* EcoTravel — datos de demostración centralizados y lógica de la página.
   Todo el contenido es editable aquí. Precios/disponibilidad/testimonios son ejemplos, no reales. */
"use strict";

const IMG = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ⚙️ CONFIGURABLE: número de WhatsApp de la agencia en formato internacional sin "+" ni espacios.
   Marcador de demostración: reemplázalo por el número real (ej. "573001234567"). */
const WHATSAPP_NUMBER = "573000000000";

/* ============ DATOS ============ */
const DESTINOS = [
  { id:"cartagena", nombre:"Cartagena de Indias", pais:"Colombia", categoria:["playa","cultura"], duracion:"4 días / 3 noches", precio:"Desde $1.450.000 COP", img:IMG("photo-1568632234157-ce7aecd03d0d"), desc:"Ciudad amurallada, atardeceres en Getsemaní y escapada a las Islas del Rosario." },
  { id:"rosario", nombre:"Islas del Rosario", pais:"Colombia", categoria:["playa","naturaleza"], duracion:"Full day / 2 días", precio:"Desde $380.000 COP", img:IMG("photo-1507525428034-b723cf961d3e"), desc:"Acuario natural, snorkel en arrecifes y playas de arena blanca frente a Cartagena." },
  { id:"tayrona", nombre:"Santa Marta y Parque Tayrona", pais:"Colombia", categoria:["aventura","naturaleza","playa"], duracion:"5 días / 4 noches", precio:"Desde $1.680.000 COP", img:IMG("photo-1518509562904-e7ef99cdcc86"), desc:"Cabo San Juan, selva tropical y cultura Kogui entre la Sierra y el Caribe." },
  { id:"cafeter", nombre:"Eje Cafetero", pais:"Colombia", categoria:["naturaleza","cultura"], duracion:"4 días / 3 noches", precio:"Desde $1.190.000 COP", img:IMG("photo-1524350876685-274059332603"), desc:"Fincas cafeteras, Valle del Cocora, termales y pueblos patrimonio de Salento y Filandia." },
  { id:"patagonia", nombre:"Patagonia", pais:"Argentina y Chile", categoria:["aventura","naturaleza"], duracion:"8 días / 7 noches", precio:"Desde $1.900 USD", img:IMG("photo-1519681393784-d120267933ba"), desc:"Torres del Paine, glaciar Perito Moreno y senderismo entre lagos turquesa." },
  { id:"cancun", nombre:"Cancún y Riviera Maya", pais:"México", categoria:["playa","cultura"], duracion:"6 días / 5 noches", precio:"Desde $1.350 USD", img:IMG("photo-1512819432727-dbcb57a06f13"), desc:"Mar caribeño, cenotes sagrados, Chichén Itzá y snorkel en Tulum." },
  { id:"safari", nombre:"Safari en África", pais:"Kenia y Tanzania", categoria:["aventura","naturaleza"], duracion:"9 días / 8 noches", precio:"Desde $2.800 USD", img:IMG("photo-1516426122078-c23e76319801"), desc:"Masái Mara y Serengueti: leones, elefantes y atardeceres de sabana con guías locales." },
  { id:"alpes", nombre:"Alpes europeos", pais:"Suiza · Francia · Italia", categoria:["aventura","cultura"], duracion:"7 días / 6 noches", precio:"Desde $2.200 USD", img:IMG("photo-1464822759023-fed622ff2c3b"), desc:"Matterhorn, lagos alpinos, trenes panorámicos y pueblos de montaña." },
];

/* Mejor época general orientativa (información estacional pública, no disponibilidad). Contenido editable. */
const TEMPORADAS_INFO = {
  cartagena: "Dic – Abr · época seca", rosario: "Dic – Abr · época seca",
  tayrona: "Dic – Mar · época seca", cafeter: "Dic – Mar · menos lluvias",
  patagonia: "Nov – Mar · verano austral", cancun: "Nov – Abr · época seca",
  safari: "Jul – Oct · gran migración", alpes: "Dic – Mar · nieve · Jun – Sep · senderismo",
};
DESTINOS.forEach(d => { d.temporada = TEMPORADAS_INFO[d.id] || ""; });

const EXPERIENCIAS = [
  { id:"aventura", titulo:"Aventura y senderismo", desc:"Trekking, alta montaña y rutas que aceleran el corazón.", img:IMG("photo-1551632811-561732d1e306"), filtro:"aventura" },
  { id:"playa", titulo:"Playas y descanso", desc:"Caribe, relax total y resorts frente al mar.", img:IMG("photo-1519046904884-53103b34b206"), filtro:"playa" },
  { id:"eco", titulo:"Ecoturismo", desc:"Selvas, avistamiento y turismo de bajo impacto.", img:IMG("photo-1441974231531-c6227db76b6e"), filtro:"naturaleza" },
  { id:"cultura", titulo:"Turismo cultural", desc:"Ciudades coloniales, arqueología y tradiciones vivas.", img:IMG("photo-1530789253388-582c481c54b0"), filtro:"cultura" },
  { id:"romantico", titulo:"Viajes románticos", desc:"Escapadas en pareja, atardeceres y hoteles boutique.", img:IMG("photo-1518199266791-5375a83190b7"), filtro:"playa" },
  { id:"familiar", titulo:"Viajes familiares", desc:"Planes para todas las edades, seguros y divertidos.", img:IMG("photo-1502086223501-7ea6ecd79368"), filtro:"naturaleza" },
  { id:"gastro", titulo:"Gastronomía local", desc:"Café de origen, mercados y cocinas tradicionales.", img:IMG("photo-1414235077428-338989a2e8c0"), filtro:"cultura" },
  { id:"exclusivo", titulo:"Experiencias exclusivas", desc:"Grupos pequeños, glamping y accesos especiales.", img:IMG("photo-1540541338287-41700207dee6"), filtro:"aventura" },
];

const PAQUETES = [
  { id:"p1", nombre:"Magia Caribeña: Cartagena + Rosario", destino:"Cartagena de Indias, Colombia", destinoId:"cartagena", duracion:"4 días / 3 noches", precio:1450000, moneda:"COP", antes:1750000, img:IMG("photo-1570789210967-2cac24afeb00"), incluye:["Hotel 4★ frente al mar","City tour + Getsemaní","Full day Islas del Rosario","Traslados y asistencia"], desc:"Lo esencial del Caribe colombiano con tardes libres para perderte en la ciudad amurallada." },
  { id:"p2", nombre:"Tayrona Salvaje", destino:"Santa Marta y Tayrona, Colombia", destinoId:"tayrona", duracion:"5 días / 4 noches", precio:1680000, moneda:"COP", antes:null, img:IMG("photo-1508672019048-805c876b67e2"), incluye:["Eco-lodge en la selva","Caminata a Cabo San Juan","Snorkel guiado","Guía local certificado"], desc:"Selva, mar y montaña en un mismo parque. Ideal para amantes del senderismo." },
  { id:"p3", nombre:"Ruta del Café Premium", destino:"Eje Cafetero, Colombia", destinoId:"cafeter", duracion:"4 días / 3 noches", precio:1190000, moneda:"COP", antes:1390000, img:IMG("photo-1500937386664-56d1dfef3854"), incluye:["Finca cafetera boutique","Valle del Cocora + termales","Cata de café de origen","Transporte interno"], desc:"Paisaje Cultural Cafetero con experiencias auténticas de finca." },
  { id:"p4", nombre:"Patagonia Esencial", destino:"Patagonia, Argentina y Chile", destinoId:"patagonia", duracion:"8 días / 7 noches", precio:1900, moneda:"USD", antes:2250, img:IMG("photo-1478827536114-da961b7f86d2"), incluye:["Hoteles + refugios","Trekking Torres del Paine","Glaciar Perito Moreno","Guías de montaña"], desc:"El fin del mundo a pie: glaciares, vientos y lagos imposibles." },
  { id:"p5", nombre:"Cancún Total + Tulum", destino:"Cancún, México", destinoId:"cancun", duracion:"6 días / 5 noches", precio:1350, moneda:"USD", antes:null, img:IMG("photo-1544551763-46a013bb70d5"), incluye:["Resort todo incluido","Snorkel en Tulum","Chichén Itzá + cenote","Traslados aeropuerto"], desc:"Descanso caribeño combinado con cultura maya y aventura en cenotes." },
  { id:"p6", nombre:"Safari Masái Mara", destino:"Kenia y Tanzania", destinoId:"safari", duracion:"9 días / 8 noches", precio:2800, moneda:"USD", antes:3200, img:IMG("photo-1547471080-7cc2caa01a7e"), incluye:["Lodges de sabana","Game drives 4x4","Visita comunidad masái","Vuelos internos"], desc:"La gran migración y los cinco grandes con operadores locales responsables." },
];

/* Itinerarios orientativos de demostración (día a día). Contenido editable. */
const ITINERARIOS = {
  p1: [
    { d:"Día 1", t:"Llegada a Cartagena", x:"Recibimiento en el aeropuerto, traslado al hotel y tarde libre. Al atardecer, paseo por Getsemaní." },
    { d:"Día 2", t:"Ciudad amurallada", x:"City tour: Castillo de San Felipe, centro histórico y murallas con guía local." },
    { d:"Día 3", t:"Islas del Rosario", x:"Full day en lancha: snorkel en arrecifes, almuerzo típico y playa." },
    { d:"Día 4", t:"Mañana libre y regreso", x:"Mañana libre para compras o playa y traslado al aeropuerto." },
  ],
  p2: [
    { d:"Día 1", t:"Llegada a Santa Marta", x:"Traslado al eco-lodge, charla de bienvenida y noche entre la selva." },
    { d:"Día 2", t:"Ingreso al Tayrona", x:"Caminata guiada hasta Arrecifes con interpretación de flora y fauna." },
    { d:"Día 3", t:"Cabo San Juan", x:"Amanecer en la playa, snorkel opcional y tarde de descanso." },
    { d:"Día 4", t:"Sendero y cultura", x:"Caminata de retorno con parada en miradores y encuentro cultural." },
    { d:"Día 5", t:"Regreso", x:"Traslado a Santa Marta y fin de la experiencia." },
  ],
  p3: [
    { d:"Día 1", t:"Llegada a la finca", x:"Check-in en finca cafetera, tour del café y cata de origen al atardecer." },
    { d:"Día 2", t:"Valle del Cocora", x:"Caminata entre palmas de cera gigantes y almuerzo en Salento." },
    { d:"Día 3", t:"Termales y Filandia", x:"Mañana de termales naturales y tarde en el mirador de Filandia." },
    { d:"Día 4", t:"Despedida", x:"Mañana libre y traslado de salida." },
  ],
  p4: [
    { d:"Día 1–2", t:"El Calafate y Perito Moreno", x:"Llegada, navegación frente al glaciar y pasarelas panorámicas." },
    { d:"Día 3–4", t:"El Chaltén", x:"Trekking a la Laguna de los Tres con guías de montaña." },
    { d:"Día 5–6", t:"Torres del Paine", x:"Cruce a Chile, Base de las Torres y Lago Grey." },
    { d:"Día 7–8", t:"Cierre y regreso", x:"Día libre en Puerto Natales y vuelos de retorno." },
  ],
  p5: [
    { d:"Día 1", t:"Llegada a Cancún", x:"Traslado al resort todo incluido y tarde de playa." },
    { d:"Día 2", t:"Día de resort", x:"Descanso total: piscinas, playa y actividades del hotel." },
    { d:"Día 3", t:"Chichén Itzá", x:"Visita a la maravilla maya con nado en cenote sagrado." },
    { d:"Día 4", t:"Tulum", x:"Ruinas frente al mar y snorkel con tortugas." },
    { d:"Día 5", t:"Día libre", x:"Tour opcional o descanso en la playa." },
    { d:"Día 6", t:"Regreso", x:"Check-out y traslado al aeropuerto." },
  ],
  p6: [
    { d:"Día 1–2", t:"Nairobi y Masái Mara", x:"Llegada, vuelo interno a la sabana y primer game drive al atardecer." },
    { d:"Día 3–4", t:"La gran sabana", x:"Safaris 4x4 al amanecer y atardecer buscando los cinco grandes." },
    { d:"Día 5–6", t:"Serengueti y Ngorongoro", x:"Cruce a Tanzania, cráter del Ngorongoro y lodges de sabana." },
    { d:"Día 7–8", t:"Cultura masái", x:"Visita a una comunidad local y último safari fotográfico." },
    { d:"Día 9", t:"Regreso", x:"Vuelo a Nairobi y conexión internacional." },
  ],
};
PAQUETES.forEach(p => { p.itinerario = ITINERARIOS[p.id] || []; });

const TESTIMONIOS = [
  { nombre:"Carolina M.", viaje:"Eje Cafetero", texto:"La organización fue impecable y el guía local hizo toda la diferencia. Volvería mañana mismo.", inicial:"C" },
  { nombre:"Andrés P.", viaje:"Tayrona", texto:"Caminatas exigentes pero seguras. Todo claro desde el primer mensaje por WhatsApp.", inicial:"A" },
  { nombre:"Lucía y Jorge", viaje:"Cartagena", texto:"Perfecto para nuestra luna de miel: hotel hermoso y tiempos libres bien pensados.", inicial:"L" },
];

const FAQS = [
  { q:"¿Cómo puedo reservar un viaje?", a:"Elige un destino o paquete y pulsa «Solicitar reserva». Completa el formulario de demostración y te mostraremos un resumen. En producción este paso conectaría con nuestro sistema de reservas o correo de asesores." },
  { q:"¿Qué incluye cada paquete turístico?", a:"Cada tarjeta y ventana de detalle lista los servicios incluidos de forma orientativa (alojamiento, tours, traslados). Los servicios exactos se confirman con un asesor antes de cualquier pago." },
  { q:"¿Puedo personalizar mi itinerario?", a:"Sí. Indícanos fechas, presupuesto e intereses en el formulario de contacto y preparamos una propuesta a medida. Nada se cobra automáticamente desde esta página." },
  { q:"¿Cómo puedo solicitar información sobre los precios?", a:"Los precios mostrados son referencias de demostración en COP o USD. Usa el formulario de contacto o la solicitud de reserva para pedir una cotización actualizada." },
  { q:"¿Qué ocurre si necesito cambiar las fechas?", a:"En esta demo puedes reenviar una nueva solicitud con las fechas corregidas. En operación real, cada operador tiene sus propias condiciones de cambio, que te informaríamos por escrito." },
  { q:"¿Cómo puedo comunicarme con un asesor?", a:"Escríbenos desde el formulario de contacto o al correo hola@ecotravel.demo (marcador configurable). Respondemos en horario Lun–Vie 8:00–18:00 (ejemplo)." },
];

/* ============ HELPERS ============ */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const fmt = (p) => p.moneda === "COP"
  ? `Desde $${p.precio.toLocaleString("es-CO")} COP`
  : `Desde $${p.precio.toLocaleString("en-US")} USD`;
const toast = (msg) => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2600); };
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Imágenes con respaldo: si una URL falla, usa un degradado SVG */
function guardImg(img, label) {
  img.alt = label;
  img.loading = "lazy";
  img.addEventListener("error", () => {
    img.src = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b4332"/><stop offset="1" stop-color="#40916c"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="400" y="260" font-size="42" fill="white" text-anchor="middle" font-family="sans-serif">${label}</text></svg>`);
  }, { once: true });
}

/* ============ NAV / MENÚ / SCROLL ============ */
(function nav() {
  const ham = $("#hamburger"), menu = $("#mobileMenu"), links = $("#navLinks");
  const toggle = (force) => {
    const open = force !== undefined ? force : menu.hidden;
    menu.hidden = !open;
    ham.setAttribute("aria-expanded", String(open));
    ham.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };
  ham.addEventListener("click", () => toggle());
  $$("#mobileMenu a, #mobileMenu button").forEach(a => a.addEventListener("click", () => toggle(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") toggle(false); });
  /* Si se agranda la ventana a escritorio, cierra el menú móvil */
  addEventListener("resize", () => { if (innerWidth > 720 && !menu.hidden) toggle(false); });

  const toTop = $("#toTop");
  addEventListener("scroll", () => { toTop.hidden = scrollY < 600; }, { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ============ RENDER: DESTINOS ============ */
let activeFilter = "todos";
function destinoCard(d) {
  const el = document.createElement("article");
  el.className = "card";
  el.dataset.cats = d.categoria.join(" ");
  el.innerHTML = `
    <button class="fav-btn" data-fav="d:${d.id}" aria-pressed="false" aria-label="Guardar ${d.nombre} en favoritos" title="Guardar en favoritos">♥</button>
    <img src="${d.img}" alt="${d.nombre}, ${d.pais}">
    <div class="card-body">
      <span class="tag">${d.categoria[0]}</span>
      <h3>${d.nombre}</h3>
      <p class="loc">📍 ${d.pais}</p>
      <p class="desc">${d.desc}</p>
      <div class="meta"><span>🕘 ${d.duracion}</span><span>☀️ ${d.temporada}</span></div>
      <p class="price">${d.precio} <span class="muted" style="font-weight:400;font-size:.8rem">(ref. demo)</span></p>
      <div class="card-actions">
        <button class="btn btn-primary" data-detail="${d.id}">Ver detalles</button>
        <button class="btn btn-ghost" data-open-booking data-paquete="${d.nombre}">Reservar</button>
        <span class="share-wrap">
          <button class="btn-mini no" data-share aria-expanded="false" aria-label="Compartir ${d.nombre}">⤴ Compartir</button>
          <span class="share-pop" hidden>
            <button class="btn btn-whatsapp" data-share-wa data-name="${d.nombre}" data-price="${d.precio}">WhatsApp</button>
            <button class="btn btn-ghost" data-share-copy data-name="${d.nombre}" data-price="${d.precio}">Copiar enlace</button>
          </span>
        </span>
      </div>
    </div>`;
  guardImg(el.querySelector("img"), d.nombre);
  return el;
}
function renderDestinos(filtro = "todos") {
  activeFilter = filtro;
  const grid = $("#destinosGrid");
  grid.innerHTML = "";
  const list = DESTINOS.filter(d =>
    filtro === "todos" ? true :
    filtro === "favoritos" ? favSet.has("d:" + d.id) :
    d.categoria.includes(filtro));
  if (!list.length) {
    grid.innerHTML = filtro === "favoritos"
      ? `<div><p class="muted">Aún no tienes favoritos. Explora el catálogo y pulsa ♥ en los destinos que te enamoren.</p><button class="btn btn-ghost" id="favEmptyBtn">Ver todos los destinos</button></div>`
      : `<p class="muted">No hay destinos para este filtro. Prueba con «Todos».</p>`;
    const eb = $("#favEmptyBtn");
    if (eb) eb.addEventListener("click", () => {
      $$("[data-filter]").forEach(c => c.classList.toggle("active", c.dataset.filter === "todos"));
      renderDestinos("todos");
    });
    return;
  }
  if (filtro === "favoritos") {
    const bar = document.createElement("div");
    bar.innerHTML = `<button class="btn btn-primary" id="favQuoteBtn">Solicitar cotización de mis ${favSet.size} favorito(s)</button>`;
    grid.appendChild(bar);
    bar.querySelector("#favQuoteBtn").addEventListener("click", quoteFavorites);
  }
  list.forEach(d => grid.appendChild(destinoCard(d)));
  refreshFavUI();
}
$$("[data-filter]").forEach(ch => ch.addEventListener("click", () => {
  $$("[data-filter]").forEach(c => c.classList.remove("active"));
  ch.classList.add("active");
  renderDestinos(ch.dataset.filter);
  document.querySelector("#destinos").scrollIntoView({ behavior: "smooth", block: "start" });
}));
$$("[data-filter-link]").forEach(b => b.addEventListener("click", () => {
  $$("[data-filter]").forEach(c => c.classList.toggle("active", c.dataset.filter === b.dataset.filterLink));
  renderDestinos(b.dataset.filterLink);
  document.querySelector("#destinos").scrollIntoView({ behavior: "smooth" });
}));

/* ============ RENDER: EXPERIENCIAS / PAQUETES / TESTIMONIOS / FAQ ============ */
function renderExperiencias() {
  const grid = $("#experienciasGrid");
  EXPERIENCIAS.forEach(e => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `<img src="${e.img}" alt="${e.titulo}"><div class="card-body"><h3>${e.titulo}</h3><p class="desc">${e.desc}</p><div class="card-actions"><button class="btn btn-ghost" data-exp="${e.filtro}">Explorar</button></div></div>`;
    guardImg(el.querySelector("img"), e.titulo);
    el.querySelector("[data-exp]").addEventListener("click", (ev) => {
      $$("[data-filter]").forEach(c => c.classList.toggle("active", c.dataset.filter === ev.target.dataset.exp));
      renderDestinos(ev.target.dataset.exp);
      renderPaquetes(ev.target.dataset.exp);
      toast(`Filtrado por: ${e.titulo}`);
      document.querySelector("#destinos").scrollIntoView({ behavior: "smooth" });
    });
    grid.appendChild(el);
  });
}
function paqueteCard(p) {
  const dcto = p.antes ? Math.round((1 - p.precio / p.antes) * 100) : 0;
  const el = document.createElement("article");
  el.className = "card";
  const precioTxt = fmt(p);
  const antesTxt = p.antes ? (p.moneda === "COP" ? `$${p.antes.toLocaleString("es-CO")} COP` : `$${p.antes.toLocaleString("en-US")} USD`) : "";
  el.innerHTML = `
    <button class="fav-btn" data-fav="p:${p.id}" aria-pressed="false" aria-label="Guardar ${p.nombre} en favoritos" title="Guardar en favoritos">♥</button>
    <img src="${p.img}" alt="${p.nombre}">
    <div class="card-body">
      ${dcto ? `<span class="discount">−${dcto}% ejemplo ilustrativo</span>` : `<span class="tag">Selección EcoTravel</span>`}
      <h3>${p.nombre}</h3>
      <p class="loc">📍 ${p.destino}</p>
      <p class="desc">${p.desc}</p>
      <div class="meta"><span>🕘 ${p.duracion}</span></div>
      <ul class="includes">${p.incluye.map(i => `<li>${i}</li>`).join("")}</ul>
      <p class="price">${p.antes ? `<s>${antesTxt}</s>` : ""}${precioTxt} <small class="muted">/ persona (demo)</small></p>
      <div class="card-actions">
        <button class="btn btn-primary" data-paquete-detail="${p.id}">Consultar detalles</button>
        <button class="btn btn-ghost" data-open-booking data-paquete="${p.nombre}">Solicitar reserva</button>
        <span class="share-wrap">
          <button class="btn-mini no" data-share aria-expanded="false" aria-label="Compartir ${p.nombre}">⤴ Compartir</button>
          <span class="share-pop" hidden>
            <button class="btn btn-whatsapp" data-share-wa data-name="${p.nombre}" data-price="${precioTxt}">WhatsApp</button>
            <button class="btn btn-ghost" data-share-copy data-name="${p.nombre}" data-price="${precioTxt}">Copiar enlace</button>
          </span>
        </span>
        <button class="btn-mini no" data-compare="${p.id}" aria-pressed="false">＋ Comparar</button>
      </div>
    </div>`;
  guardImg(el.querySelector("img"), p.nombre);
  return el;
}
function renderPaquetes(filtroCat = null) {
  const grid = $("#paquetesGrid");
  grid.innerHTML = "";
  let list = PAQUETES;
  if (filtroCat && filtroCat !== "todos") {
    const ids = DESTINOS.filter(d => d.categoria.includes(filtroCat)).map(d => d.id);
    list = PAQUETES.filter(p => ids.includes(p.destinoId));
    if (!list.length) list = PAQUETES;
  }
  list.forEach(p => grid.appendChild(paqueteCard(p)));
  refreshFavUI(); updateCompareUI();
}
let OPINIONES = [];
try { OPINIONES = JSON.parse(localStorage.getItem("ecotravel_opiniones_demo") || "[]"); } catch { OPINIONES = []; }
let testiIndex = 0, testiTimer = null;
function renderTestimonios() {
  const grid = $("#testimoniosGrid");
  grid.innerHTML = "";
  [...OPINIONES, ...TESTIMONIOS].forEach(t => {
    const stars = "★".repeat(t.estrellas || 5) + "☆".repeat(5 - (t.estrellas || 5));
    const el = document.createElement("article");
    el.className = "card testi";
    el.innerHTML = `<div class="card-body"><div class="stars" aria-label="${t.estrellas || 5} de 5 estrellas">${stars}</div><blockquote>“${esc(t.texto)}”</blockquote><div class="who"><span class="avatar" aria-hidden="true">${esc(t.inicial)}</span><div><strong>${esc(t.nombre)}</strong><br><small class="muted">Viajó a ${esc(t.viaje)}${t.demo ? " · opinión de demostración" : " · demo"}</small></div></div></div>`;
    grid.appendChild(el);
  });
  testiIndex = 0;
  updateTesti();
}
function updateTesti() {
  const n = $$("#testimoniosGrid .testi").length;
  if (!n) return;
  testiIndex = ((testiIndex % n) + n) % n;
  $("#testimoniosGrid").style.transform = `translateX(-${testiIndex * 100}%)`;
  $("#testiDots").innerHTML = Array.from({ length: n }, (_, k) =>
    `<button class="dot${k === testiIndex ? " active" : ""}" data-testi="${k}" aria-label="Ver testimonio ${k + 1}"></button>`).join("");
}
function setupTesti() {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const restart = () => {
    if (testiTimer) clearInterval(testiTimer);
    if (!reduced && $$("#testimoniosGrid .testi").length > 1)
      testiTimer = setInterval(() => { testiIndex++; updateTesti(); }, 7000);
  };
  $("#testiPrev").addEventListener("click", () => { testiIndex--; updateTesti(); restart(); });
  $("#testiNext").addEventListener("click", () => { testiIndex++; updateTesti(); restart(); });
  $("#testiDots").addEventListener("click", (e) => {
    const b = e.target.closest("[data-testi]");
    if (b) { testiIndex = parseInt(b.dataset.testi, 10); updateTesti(); restart(); }
  });
  const car = $("#testiCarousel");
  car.addEventListener("mouseenter", () => { if (testiTimer) clearInterval(testiTimer); });
  car.addEventListener("mouseleave", restart);
  restart();
}
function setupOpinion() {
  $("#oDestino").innerHTML = DESTINOS.map(d => `<option>${d.nombre}</option>`).join("");
  $("#opinionForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = $("#oNombre").value.trim(), msg = $("#oMsg").value.trim();
    let ok = true;
    const set = (k, m) => { $(`[data-err="${k}"]`).textContent = m || ""; if (m) ok = false; };
    set("onombre", nombre.length < 3 ? "Escribe tu nombre." : "");
    set("omensaje", msg.length < 10 ? "Cuéntanos un poco más (mín. 10 caracteres)." : "");
    const st = $("#opinionStatus");
    if (!ok) { st.textContent = "⚠️ Revisa los campos marcados."; st.style.color = "#b91c1c"; return; }
    OPINIONES.unshift({ nombre, viaje: $("#oDestino").value, texto: msg, inicial: nombre[0].toUpperCase(), estrellas: parseInt($("#oStars").value, 10), demo: true });
    localStorage.setItem("ecotravel_opiniones_demo", JSON.stringify(OPINIONES));
    renderTestimonios();
    st.style.color = "var(--forest)";
    st.textContent = "✅ Opinión publicada en modo demostración (visible solo en tu navegador).";
    toast("Opinión demo publicada");
    e.target.reset();
  });
}

/* ============ HERO carrusel ============ */
function setupHero() {
  const slides = $$(".hero-slide"), dots = $$(".hero-dots .dot");
  if (!slides.length) return;
  let i = 0, timer = null;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const go = (n) => {
    i = ((n % slides.length) + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    dots.forEach((dt, k) => dt.classList.toggle("active", k === i));
  };
  const restart = () => {
    if (timer) clearInterval(timer);
    if (!reduced) timer = setInterval(() => go(i + 1), 6000);
  };
  dots.forEach((dt, k) => dt.addEventListener("click", () => { go(k); restart(); }));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { if (timer) clearInterval(timer); } else restart();
  });
  restart();
}
function renderFaq() {
  const wrap = $("#faqList");
  FAQS.forEach((f, i) => {
    const waText = encodeURIComponent(`Hola EcoTravel, leí la pregunta "${f.q}" en su página pero necesito más ayuda. ¿Me pueden asesorar?`);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
    const d = document.createElement("div");
    d.className = "faq-item" + (i === 0 ? " open" : "");
    d.innerHTML = `
      <button class="faq-q" aria-expanded="${i === 0}" aria-controls="faq-a-${i}" id="faq-q-${i}">
        <span>${f.q}</span><span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">
        <div class="faq-a-inner">
          <p>${f.a}</p>
          <div class="faq-feedback">
            <p>¿Te sirvió esta respuesta?</p>
            <div class="row" data-vote>
              <button type="button" class="btn-mini yes" data-vote-yes>Sí, gracias</button>
              <button type="button" class="btn-mini no" data-vote-no>No, necesito ayuda</button>
            </div>
            <p class="faq-thanks" data-thanks hidden>¡Nos alegra haberte ayudado! Si surge otra duda, estamos para ti. 🌿</p>
            <div data-help hidden>
              <p class="muted" style="margin:0 0 4px">Lamentamos que no fuera suficiente. Escríbenos y un asesor te ayuda:</p>
              <div class="faq-help-links">
                <a class="btn btn-whatsapp" href="${waUrl}" target="_blank" rel="noopener">💬 Preguntar por WhatsApp</a>
                <a class="btn btn-ghost" href="#contacto">Ir al formulario de contacto</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    const btn = d.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const willOpen = !d.classList.contains("open");
      $$(".faq-item.open", wrap).forEach(o => { o.classList.remove("open"); o.querySelector(".faq-q").setAttribute("aria-expanded", "false"); });
      if (willOpen) { d.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
    });
    d.querySelector("[data-vote-yes]").addEventListener("click", () => {
      d.querySelector("[data-vote]").hidden = true;
      d.querySelector("[data-thanks]").hidden = false;
    });
    d.querySelector("[data-vote-no]").addEventListener("click", () => {
      d.querySelector("[data-vote]").hidden = true;
      d.querySelector("[data-help]").hidden = false;
    });
    wrap.appendChild(d);
  });
}

/* ============ SELECTS DE DESTINO ============ */
function fillDestinoSelects() {
  const opts = DESTINOS.map(d => `<option value="${d.id}">${d.nombre} — ${d.pais}</option>`).join("");
  $("#fDestino").insertAdjacentHTML("beforeend", opts);
  $("#cDestino").insertAdjacentHTML("beforeend", opts);
}

/* ============ BUSCADOR ============ */
function setupSearch() {
  const form = $("#searchForm"), err = $("#searchError");
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  const iso = (d) => d.toISOString().slice(0, 10);
  $("#fSalida").min = iso(hoy);
  $("#fRegreso").min = iso(hoy);
  $("#fSalida").addEventListener("change", e => { $("#fRegreso").min = e.target.value || iso(hoy); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.hidden = true;
    const destId = $("#fDestino").value, sal = $("#fSalida").value, reg = $("#fRegreso").value;
    const viaj = parseInt($("#fViajeros").value, 10);

    if (!destId) return fail("Selecciona un destino para buscar.");
    if (!sal || !reg) return fail("Selecciona la fecha de salida y de regreso.");
    const dSal = new Date(sal + "T00:00:00"), dReg = new Date(reg + "T00:00:00");
    if (dSal < hoy) return fail("La fecha de salida no puede ser anterior a hoy.");
    if (dReg <= dSal) return fail("La fecha de regreso debe ser posterior a la salida.");
    if (!(viaj >= 1)) return fail("Indica un número válido de viajeros.");

    const d = DESTINOS.find(x => x.id === destId);
    const relacionados = PAQUETES.filter(p => p.destinoId === destId);
    const noches = Math.round((dReg - dSal) / 86400000);
    const sec = $("#resultados"), grid = $("#resultsGrid");
    sec.hidden = false; grid.innerHTML = "";
    $("#resultsTitle").textContent = `Viajes a ${d.nombre}`;
    $("#resultsMeta").textContent = `${d.pais} · ${sal} → ${reg} (${noches} noches) · ${viaj} viajero(s). Resultados del catálogo local de demostración.`;
    grid.appendChild(destinoCard(d));
    relacionados.forEach(p => grid.appendChild(paqueteCard(p)));
    refreshFavUI(); updateCompareUI();
    if (!relacionados.length) grid.insertAdjacentHTML("beforeend", `<p class="muted">Hay ${PAQUETES.length} paquetes demo en otras rutas — escríbenos y lo adaptamos.</p>`);
    sec.scrollIntoView({ behavior: "smooth" });
    toast("Búsqueda aplicada al catálogo demo");

    function fail(m) { err.textContent = "⚠️ " + m; err.hidden = false; }
  });

  $("#clearSearch").addEventListener("click", () => {
    form.reset(); $("#fViajeros").value = "2";
    $("#resultados").hidden = true;
    renderDestinos("todos"); renderPaquetes();
    $$("[data-filter]").forEach(c => c.classList.toggle("active", c.dataset.filter === "todos"));
  });
}

/* ============ MODALES ============ */
let lastFocus = null;
function openModal(id) {
  lastFocus = document.activeElement;
  const m = $(id); m.hidden = false;
  const f = m.querySelector("button, input, select, summary, a[href]"); if (f) f.focus();
  document.body.style.overflow = "hidden";
}
function closeModals() {
  $$(".modal-backdrop").forEach(m => m.hidden = true);
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
$$("[data-close]").forEach(b => b.addEventListener("click", closeModals));
$$(".modal-backdrop").forEach(b => b.addEventListener("click", e => { if (e.target === b) closeModals(); }));
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModals(); $$(".share-pop").forEach(p => p.hidden = true); } });

function showDetail({ kicker, title, meta, desc, img, imgAlt, price, includes, itinerario, bookName }) {
  $("#detailKicker").textContent = kicker;
  $("#detailTitle").textContent = title;
  $("#detailMeta").textContent = meta;
  $("#detailDesc").textContent = desc;
  const im = $("#detailImg"); im.src = img; guardImg(im, imgAlt); im.alt = imgAlt;
  $("#detailPrice").innerHTML = price;
  $("#detailIncludes").innerHTML = (includes || []).map(i => `<li>${i}</li>`).join("");
  $("#detailItin").innerHTML = (itinerario && itinerario.length)
    ? `<h3>Itinerario día a día <small class="muted" style="font-family:Inter;font-weight:400">(orientativo, demo)</small></h3><ol class="timeline">${itinerario.map(s => `<li><strong>${s.d} · ${s.t}</strong><span>${s.x}</span></li>`).join("")}</ol>`
    : "";
  $("#detailBook").onclick = () => { closeModals(); openBooking(bookName); };
  openModal("#detailModal");
}
document.addEventListener("click", (e) => {
  const closeSharePops = () => $$(".share-pop").forEach(pop => { if (!pop.hidden) { pop.hidden = true; const b = pop.parentElement.querySelector("[data-share]"); if (b) b.setAttribute("aria-expanded", "false"); } });
  if (!e.target.closest(".share-wrap")) closeSharePops();
  const sBtn = e.target.closest("[data-share]");
  if (sBtn) {
    const pop = sBtn.parentElement.querySelector(".share-pop");
    const willOpen = pop.hidden;
    closeSharePops();
    pop.hidden = !willOpen;
    sBtn.setAttribute("aria-expanded", String(willOpen));
    return;
  }
  const waBtn = e.target.closest("[data-share-wa]");
  if (waBtn) { window.open(waLink(shareText(waBtn)), "_blank", "noopener"); closeSharePops(); toast("Abriendo WhatsApp para compartir"); return; }
  const cpBtn = e.target.closest("[data-share-copy]");
  if (cpBtn) { copyShare(shareText(cpBtn)); closeSharePops(); return; }
  const dBtn = e.target.closest("[data-detail]");
  if (dBtn) {
    const d = DESTINOS.find(x => x.id === dBtn.dataset.detail);
    const rel = PAQUETES.filter(p => p.destinoId === d.id);
    showDetail({ kicker: d.categoria.join(" · "), title: d.nombre, meta: `${d.pais} · ${d.duracion} · ☀️ ${d.temporada}`, desc: d.desc, img: d.img, imgAlt: d.nombre, price: `<strong>${d.precio}</strong> <small class="muted">(precio de referencia demo)</small>`, includes: rel.length ? rel[0].incluye : ["Asesoría personalizada", "Itinerario a medida", "Acompañamiento en la reserva"], itinerario: rel.length ? (rel[0].itinerario || []) : [], bookName: d.nombre });
  }
  const pBtn = e.target.closest("[data-paquete-detail]");
  if (pBtn) {
    const p = PAQUETES.find(x => x.id === pBtn.dataset.paqueteDetail);
    const dd = DESTINOS.find(x => x.id === p.destinoId);
    showDetail({ kicker: p.destino, title: p.nombre, meta: `${p.destino} · ${p.duracion}${dd && dd.temporada ? ` · ☀️ ${dd.temporada}` : ""}`, desc: p.desc, img: p.img, imgAlt: p.nombre, price: `<strong>${fmt(p)}</strong> <small class="muted">por persona (demo)</small>`, includes: p.incluye, itinerario: p.itinerario || [], bookName: p.nombre });
  }
  const bBtn = e.target.closest("[data-open-booking]");
  if (bBtn) { closeModals(); openBooking(bBtn.dataset.paquete || "Asesoría general"); return; }
  const fBtn = e.target.closest("[data-fav]");
  if (fBtn) { toggleFav(fBtn.dataset.fav); return; }
  const cBtn = e.target.closest("[data-compare]");
  if (cBtn) { toggleCompare(cBtn.dataset.compare); return; }
});

/* ============ COMPARTIR ============ */
function shareText(btn) {
  const base = location.href.split("#")[0];
  return `Mira este viaje de EcoTravel ✈️: ${btn.dataset.name} — ${btn.dataset.price}. Más info aquí: ${base}#destinos`;
}
async function copyShare(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("Enlace copiado al portapapeles");
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); toast("Enlace copiado al portapapeles"); }
    catch { toast("No se pudo copiar. Copia el enlace manualmente."); }
    ta.remove();
  }
}
function openBooking(nombre, viajeros) {
  $("#bPaquete").value = nombre;
  if (viajeros) $("#bViajeros").value = viajeros >= 5 ? "5+" : String(viajeros);
  $("#bookingStatus").textContent = "";
  const f = $("#bFecha"); f.min = new Date().toISOString().slice(0, 10);
  openModal("#bookingModal");
}
$("#bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = $("#bNombre").value.trim(), email = $("#bEmail").value.trim(), fecha = $("#bFecha").value;
  let ok = true;
  const set = (k, msg) => { $(`[data-err="${k}"]`).textContent = msg || ""; if (msg) ok = false; };
  set("bnombre", nombre.length < 3 ? "Escribe tu nombre completo." : "");
  set("bemail", !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? "Escribe un correo válido." : "");
  set("bfecha", !fecha ? "Elige una fecha tentativa." : "");
  const st = $("#bookingStatus");
  if (!ok) { st.textContent = "Revisa los campos marcados."; st.style.color = "#b91c1c"; return; }
  st.style.color = "var(--forest)";
  st.textContent = "⏳ Guardando tu solicitud (demo)…";
  setTimeout(() => {
    const reservas = JSON.parse(localStorage.getItem("ecotravel_reservas_demo") || "[]");
    reservas.push({ paquete: $("#bPaquete").value, nombre, email, fecha, viajeros: $("#bViajeros").value, cuando: new Date().toISOString() });
    localStorage.setItem("ecotravel_reservas_demo", JSON.stringify(reservas));
    st.textContent = `✅ ¡Gracias, ${nombre.split(" ")[0]}! Registramos tu interés en «${$("#bPaquete").value}» para el ${fecha} (demostración local, sin reserva real). Te contactaríamos a ${email}.`;
    toast("Solicitud demo guardada localmente");
    e.target.querySelector("button[type=submit]").disabled = false;
  }, 700);
});

/* ============ CONTACTO ============ */
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = {
    nombre: $("#cNombre").value.trim(),
    email: $("#cEmail").value.trim(),
    tel: $("#cTel").value.trim(),
    mensaje: $("#cMsg").value.trim(),
  };
  let ok = true;
  const set = (k, msg) => { $(`[data-err="${k}"]`).textContent = msg || ""; if (msg) ok = false; };
  set("nombre", v.nombre.length < 3 ? "Escribe tu nombre completo." : "");
  set("email", !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email) ? "Escribe un correo válido." : "");
  set("telefono", v.tel.replace(/\D/g, "").length < 7 ? "Escribe un número de contacto válido." : "");
  set("mensaje", v.mensaje.length < 10 ? "Cuéntanos un poco más (mín. 10 caracteres)." : "");
  const st = $("#contactStatus");
  if (!ok) { st.textContent = "⚠️ Revisa los campos marcados en rojo."; st.style.color = "#b91c1c"; return; }
  const btn = $("#contactSubmit"); btn.disabled = true; btn.textContent = "Enviando…";
  /* DEMO honesta: sin backend. Para producción, reemplaza este bloque por fetch() a tu API/Formspree/Brevo (ver README). */
  setTimeout(() => {
    const msgs = JSON.parse(localStorage.getItem("ecotravel_contacto_demo") || "[]");
    msgs.push({ ...v, destino: $("#cDestino").value, viajeros: $("#cViajeros").value, cuando: new Date().toISOString() });
    localStorage.setItem("ecotravel_contacto_demo", JSON.stringify(msgs));
    st.style.color = "var(--forest)";
    st.textContent = "✅ Mensaje registrado en modo demostración (guardado local, no enviado a la agencia). Para producción conecta un servicio real según el README.";
    toast("Mensaje demo guardado");
    btn.disabled = false; btn.textContent = "Enviar mensaje";
    e.target.reset();
  }, 800);
});

/* Enlaces sociales configurables: evita navegación rota */
$$("[data-social]").forEach(a => a.addEventListener("click", (e) => {
  e.preventDefault();
  toast("Enlace configurable: reemplaza el href por tu red social real.");
}));

/* ============ WHATSAPP ============ */
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
function setupWaFloat() {
  $("#waFloat").href = waLink("Hola EcoTravel, quiero información sobre sus viajes. ¿Me pueden asesorar?");
}

/* ============ FAVORITOS ♥ ============ */
let favSet = new Set(JSON.parse(localStorage.getItem("ecotravel_favs") || "[]"));
function saveFavs() { localStorage.setItem("ecotravel_favs", JSON.stringify([...favSet])); }
function favName(key) {
  const [t, id] = key.split(":");
  if (t === "d") { const d = DESTINOS.find(x => x.id === id); return d ? d.nombre : id; }
  const p = PAQUETES.find(x => x.id === id); return p ? p.nombre : id;
}
function updateFavChip() { $("#favChip").textContent = `♥ Favoritos (${favSet.size})`; }
function refreshFavUI() {
  $$("[data-fav]").forEach(b => {
    const on = favSet.has(b.dataset.fav);
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", String(on));
  });
}
function toggleFav(key) {
  if (favSet.has(key)) { favSet.delete(key); toast(`♥ ${favName(key)} eliminado de favoritos`); }
  else { favSet.add(key); toast(`♥ ${favName(key)} guardado en favoritos`); }
  saveFavs(); updateFavChip(); refreshFavUI();
  if (activeFilter === "favoritos") renderDestinos("favoritos");
}
function quoteFavorites() {
  if (!favSet.size) { toast("Aún no tienes favoritos"); return; }
  const names = [...favSet].map(favName);
  openBooking("Cotización de favoritos: " + names.join(" · "));
}

/* ============ COMPARADOR ============ */
const compareSet = new Set();
const MAX_COMPARE = 3;
function toggleCompare(id) {
  if (compareSet.has(id)) compareSet.delete(id);
  else {
    if (compareSet.size >= MAX_COMPARE) { toast(`Solo puedes comparar hasta ${MAX_COMPARE} paquetes`); return; }
    compareSet.add(id);
    toast("Paquete añadido al comparador");
  }
  updateCompareUI();
}
function updateCompareUI() {
  const bar = $("#compareBar");
  bar.hidden = compareSet.size === 0;
  $("#compareCount").textContent = `Seleccionados: ${compareSet.size}/${MAX_COMPARE}`;
  $$("[data-compare]").forEach(b => {
    const on = compareSet.has(b.dataset.compare);
    b.classList.toggle("yes", on);
    b.classList.toggle("no", !on);
    b.setAttribute("aria-pressed", String(on));
    b.textContent = on ? "✓ En comparador" : "＋ Comparar";
  });
}
function money(v, moneda) {
  return moneda === "COP" ? `$${Math.round(v).toLocaleString("es-CO")} COP` : `$${v.toLocaleString("en-US", { maximumFractionDigits: 0 })} USD`;
}
function openCompare() {
  if (compareSet.size < 2) { toast("Elige al menos 2 paquetes para comparar"); return; }
  const list = [...compareSet].map(id => PAQUETES.find(p => p.id === id));
  const dctoTxt = (p) => p.antes ? `${money(p.antes, p.moneda)} (−${Math.round((1 - p.precio / p.antes) * 100)}% demo)` : "—";
  $("#compareTable").innerHTML = `
    <thead><tr><th>Criterio</th>${list.map(p => `<th><img src="${p.img}" alt="${p.nombre}"><br>${p.nombre}</th>`).join("")}</tr></thead>
    <tbody>
      <tr><th>Destino</th>${list.map(p => `<td>${p.destino}</td>`).join("")}</tr>
      <tr><th>Duración</th>${list.map(p => `<td>${p.duracion}</td>`).join("")}</tr>
      <tr><th>Precio / persona</th>${list.map(p => `<td><strong>${money(p.precio, p.moneda)}</strong> <small class="muted">(demo)</small></td>`).join("")}</tr>
      <tr><th>Precio anterior</th>${list.map(p => `<td>${dctoTxt(p)}</td>`).join("")}</tr>
      <tr><th>Incluye</th>${list.map(p => `<td><ul>${p.incluye.map(i => `<li>${i}</li>`).join("")}</ul></td>`).join("")}</tr>
      <tr><th>Acción</th>${list.map(p => `<td><button class="btn btn-primary" data-open-booking data-paquete="${p.nombre}">Solicitar reserva</button></td>`).join("")}</tr>
    </tbody>`;
  $$("#compareTable img").forEach(img => guardImg(img, "Paquete"));
  openModal("#compareModal");
}

/* ============ COTIZADOR ============ */
const NIVELES = { esencial: { label: "Esencial", mult: 1 }, confort: { label: "Confort", mult: 1.3 }, premium: { label: "Premium", mult: 1.65 } };
const TEMPORADAS = { baja: { label: "Baja", mult: 1 }, media: { label: "Media", mult: 1.1 }, alta: { label: "Alta", mult: 1.2 } };
function setupQuote() {
  const sel = $("#qPaquete");
  sel.innerHTML = PAQUETES.map(p => `<option value="${p.id}">${p.nombre} — ${fmt(p)}</option>`).join("");
  const calc = () => {
    const p = PAQUETES.find(x => x.id === sel.value);
    const viaj = parseInt($("#qViajeros").value, 10);
    const niv = NIVELES[$("#qNivel").value], tem = TEMPORADAS[$("#qTemporada").value];
    const base = p.precio * viaj;
    const total = base * niv.mult * tem.mult;
    const waMsg = `Hola EcoTravel, hice una estimación demo en su web: ${p.nombre}, ${viaj} viajero(s), nivel ${niv.label}, temporada ${tem.label}. Total estimado: ${money(total, p.moneda)}. ¿Me pueden asesorar?`;
    $("#quoteOutput").innerHTML = `
      <p class="kicker">Tu estimación · demo</p>
      <h3 style="margin-top:0">${p.nombre}</h3>
      <p class="muted" style="margin:0">${viaj} viajero(s) · Nivel ${niv.label} · Temporada ${tem.label}</p>
      <div class="quote-lines">
        <div class="line"><span>Base (${money(p.precio, p.moneda)} × ${viaj})</span><span>${money(base, p.moneda)}</span></div>
        <div class="line"><span>Ajuste nivel ${niv.label} (×${niv.mult})</span><span>${money(base * niv.mult, p.moneda)}</span></div>
        <div class="line"><span>Ajuste temporada ${tem.label} (×${tem.mult})</span><span>${money(total, p.moneda)}</span></div>
      </div>
      <p class="quote-total">${money(total, p.moneda)}</p>
      <p class="demo-note">Estimación ilustrativa por persona-grupo, no es cotización real ni reserva servicios.</p>
      <div class="quote-ctas">
        <button class="btn btn-primary" id="quoteBook">Solicitar con estos datos</button>
        <a class="btn btn-whatsapp" id="quoteWa" href="${waLink(waMsg)}" target="_blank" rel="noopener">💬 Enviar por WhatsApp</a>
      </div>`;
    $("#quoteBook").addEventListener("click", () =>
      openBooking(`${p.nombre} · ${viaj} viaj. · ${niv.label} · temp. ${tem.label}`, viaj));
  };
  $("#quoteForm").addEventListener("submit", (e) => { e.preventDefault(); calc(); toast("Estimación calculada (demo)"); });
  ["qPaquete", "qViajeros", "qNivel", "qTemporada"].forEach(id =>
    $("#" + id).addEventListener("change", calc));
}

/* ============ MAPA ============
   Las coordenadas de COORDS son APROXIMADAS de demostración, no ubicaciones verificadas.
   ⚙️ CÓMO PUBLICAR UBICACIONES REALES:
   1. Verifica la coordenada exacta de cada destino y actualízala en COORDS.
   2. Añade su id a UBICACIONES_VERIFICADAS, ej: ["cartagena", "tayrona"].
   La sección del mapa aparece AUTOMÁTICAMENTE solo con destinos verificados.
   Mientras no haya ninguno verificado, la sección se oculta por completo. */
const COORDS = {
  cartagena: [10.3910, -75.4794], rosario: [10.1780, -75.7550],
  tayrona: [11.2833, -74.1000], cafeter: [4.6379, -75.5709],
  patagonia: [-50.9423, -72.9499], cancun: [21.1619, -86.8515],
  safari: [-1.4933, 35.1439], alpes: [46.0207, 7.7491],
};
const UBICACIONES_VERIFICADAS = new Set([
  // "cartagena", "tayrona",
]);
function initMap() {
  const sec = $("#mapa"), el = $("#map");
  if (!sec || !el) return;
  const verificados = DESTINOS.filter(d => COORDS[d.id] && UBICACIONES_VERIFICADAS.has(d.id));
  if (!verificados.length || !window.L) { sec.hidden = true; return; }
  sec.hidden = false;
  const map = L.map("map", { scrollWheelZoom: false }).setView([20, -30], 2);
  map.attributionControl.setPrefix(false);
  /* CARTO basemap (gratis, con atribución): funciona abriendo la página como
     archivo local, a diferencia del servidor de mosaicos de OSM que bloquea ese uso. */
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 20, subdomains: "abcd",
    attribution: "© OpenStreetMap colaboradores © CARTO",
  }).addTo(map);
  const pts = [];
  verificados.forEach(d => {
    L.marker(COORDS[d.id]).addTo(map).bindPopup(
      `<strong>${d.nombre}</strong><br>${d.pais}<br>${d.precio}<br><button class="btn btn-primary" data-detail="${d.id}" style="margin-top:8px">Ver detalles</button>`);
    pts.push(COORDS[d.id]);
  });
  if (pts.length) map.fitBounds(pts, { padding: [45, 45] });
  el.addEventListener("focus", () => map.scrollWheelZoom.enable());
  el.addEventListener("blur", () => map.scrollWheelZoom.disable());
}

/* ============ QUIZ: encuentra tu viaje ideal ============ */
const QUIZ = [
  { q: "¿Qué paisaje te llama más?", opts: [["🏖️ Playa y mar", "playa"], ["⛰️ Montañas y aventura", "aventura"], ["🏛️ Cultura y ciudades", "cultura"], ["🌿 Selva y naturaleza", "naturaleza"]] },
  { q: "¿Cuántos días tienes?", opts: [["Escapada (2 a 4 días)", "corto"], ["Una semana (5 a 7 días)", "medio"], ["Gran viaje (8 o más días)", "largo"]] },
  { q: "¿Qué ritmo prefieres?", opts: [["Relax total", "relax"], ["Equilibrado", "equilibrio"], ["Aventura intensa", "intenso"]] },
];
let quizAns = [];
function quizDays(d) { const nums = (d.duracion.match(/\d+/g) || ["4"]).map(Number); return Math.max(...nums); }
function renderQuiz() {
  const box = $("#quizBox");
  if (!box) return;
  if (quizAns.length >= QUIZ.length) return renderQuizResult();
  const i = quizAns.length;
  $("#quizBar").style.width = `${(i / QUIZ.length) * 100}%`;
  $("#quizStep").textContent = `Pregunta ${i + 1} de ${QUIZ.length}`;
  box.innerHTML = `<h3 style="margin-top:0">${QUIZ[i].q}</h3>
    <div class="quiz-opts">${QUIZ[i].opts.map(([t, v]) => `<button class="quiz-opt" data-quiz="${v}">${t}</button>`).join("")}</div>
    ${i > 0 ? `<button class="btn btn-ghost" id="quizBack" style="margin-top:12px">← Atrás</button>` : ""}`;
  box.querySelectorAll("[data-quiz]").forEach(b => b.addEventListener("click", () => { quizAns.push(b.dataset.quiz); renderQuiz(); }));
  const back = $("#quizBack");
  if (back) back.addEventListener("click", () => { quizAns.pop(); renderQuiz(); });
}
function renderQuizResult() {
  $("#quizBar").style.width = "100%";
  $("#quizStep").textContent = "Tu recomendación (demo)";
  const [amb, dur, ritmo] = quizAns;
  const scored = DESTINOS.map(d => {
    let s = 0;
    if (d.categoria.includes(amb)) s += 2;
    const days = quizDays(d);
    if ((dur === "corto" && days <= 4) || (dur === "medio" && days >= 5 && days <= 7) || (dur === "largo" && days >= 8)) s += 1;
    if ((ritmo === "relax" && d.categoria.includes("playa")) ||
        (ritmo === "intenso" && d.categoria.includes("aventura")) ||
        (ritmo === "equilibrio" && (d.categoria.includes("cultura") || d.categoria.includes("naturaleza")))) s += 1;
    return { d, s };
  }).sort((a, b) => b.s - a.s);
  const win = scored[0].d;
  const rel = PAQUETES.find(p => p.destinoId === win.id);
  const box = $("#quizBox");
  box.innerHTML = `<div class="quiz-result">
    <p class="kicker">Tu viaje ideal · demo</p>
    <h3>${win.nombre}</h3>
    <img src="${win.img}" alt="${win.nombre}">
    <p class="muted">${win.desc}</p>
    <p class="price">${win.precio} <small class="muted">· ☀️ ${win.temporada}</small></p>
    <div class="row">
      <button class="btn btn-primary" data-detail="${win.id}">Ver detalles</button>
      ${rel ? `<button class="btn btn-ghost" id="quizQuote">Cotizar este destino</button>` : ""}
      <button class="btn btn-ghost" id="quizRestart">Reiniciar quiz</button>
    </div></div>`;
  guardImg(box.querySelector("img"), win.nombre);
  $("#quizRestart").addEventListener("click", () => { quizAns = []; renderQuiz(); });
  const qq = $("#quizQuote");
  if (qq) qq.addEventListener("click", () => {
    $("#qPaquete").value = rel.id;
    document.querySelector("#cotizador").scrollIntoView({ behavior: "smooth" });
    $("#quoteForm").requestSubmit();
  });
}

/* ============ INIT ============ */
renderDestinos();
renderExperiencias();
renderPaquetes();
renderTestimonios();
renderFaq();
fillDestinoSelects();
setupSearch();
setupWaFloat();
updateFavChip();
updateCompareUI();
$("#openCompare").addEventListener("click", openCompare);
$("#clearCompare").addEventListener("click", () => { compareSet.clear(); updateCompareUI(); });
setupQuote();
initMap();
setupHero();
setupTesti();
setupOpinion();
renderQuiz();
console.log("%cEcoTravel demo lista ✔ Sin errores. Datos editables en app.js.", "color:#1b4332;font-weight:bold");
