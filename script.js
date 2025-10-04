/* script.js - Portafolio interactivo (versión final) */

const projects = [
  {id:1,title:"Ministerio de Industria - Instagram",thumb:"assets/geologia.webp",image:"assets/geologia.webp",link:"https://www.instagram.com/reel/DEH4XdGOWCA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Video de promoción de las investigaciones en Geología Planetaria en Catamarca",roles:"Idea;Guión;Realización;Edición"},
  {id:2,title:"Ministerio de Industria - Instagram",thumb:"assets/cierre.webp",image:"assets/cierre.webp",link:"https://www.instagram.com/reel/C11veUJrsqS/?igsh=MTh2cmQyd3M2ejRxdA%3D%3D",desc:"Video institucional de fin de gestión",roles:"Idea;Guión;Realización;Edición"},
  {id:3,title:"Catamarca Gobierno - Instagram",thumb:"assets/autonomia.webp",image:"assets/autonomia.webp",link:"https://www.instagram.com/reel/DNx3AQ2XFN_/?utm_source=ig_web_copy_link",desc:"Video institucional por la Autonomía de Catamarca",roles:"Colaboración en el guión;Locución"},
  {id:4,title:"Catamarca RTV - Instagram",thumb:"assets/valeint.webp",image:"assets/valeint.webp",link:"https://www.instagram.com/reel/DMbrFZBIdvX/?utm_source=ig_web_copy_link",desc:"Reel recopilatorio de la presentación de Valentin Vargas en el Poncho",roles:"Idea;Realización;Edición"},
  {id:5,title:"Ministerio de Industria - Instagram",thumb:"assets/agua.webp",image:"assets/agua.webp",link:"https://www.instagram.com/reel/DCB6PRhunMA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Video institucional de presentación del emprendimiento Agua Cristo Redentor",roles:"Idea;Guión;Filmación;Edición"},
  {id:6,title:"Catamarca RTV - Instagram",thumb:"assets/cartelera-patio.webp",image:"assets/cartelera-patio.webp",link:"https://www.instagram.com/p/DKKOuqdtl3Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",desc:"Carrusel informativo de la cartelera del Poncho 2025",roles:"Idea;Diseño"},
  {id:7,title:"Ministerio de Industria - Instagram",thumb:"assets/alfajores.webp",image:"assets/alfajores.webp",link:"https://www.instagram.com/reel/DH6-76xOe8U/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Video institucional por la nueva fábrica de Alfajores El Rodeo",roles:"Idea;Guión;Realización;Edición"},
  {id:8,title:"Ministerio de Industria - TikTok",thumb:"assets/longvie.webp",image:"assets/longvie.webp",link:"https://www.tiktok.com/@micecatamarca/video/7299972054156053765?is_from_webapp=1&sender_device=pc&web_id=7504670842782385719",desc:"Reel de promoción de la industria de Catamarca: Longvie",roles:"Idea;Guión;Realización;Locución;Edición"},
  {id:9,title:"Ministerio de Industria - Instagram",thumb:"assets/industria.webp",image:"assets/industria.webp",link:"https://www.instagram.com/reel/C_amMfrObn5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Video institucional por el Día de la Industria",roles:"Idea;Guión;Realización;Edición"},
  {id:10,title:"Catamarca RTV - Instagram",thumb:"assets/profeta.webp",image:"assets/profeta.webp",link:"https://www.instagram.com/reel/DMiIG9WsN58/?utm_source=ig_web_copy_link",desc:"Reel de la presentación de Damián Córdoba en El Patio Idea",roles:"Idea;Realización;Edición"},
  {id:11,title:"Catamarca RTV - Instagram",thumb:"assets/mandamas.webp",image:"assets/mandamas.webp",link:"https://www.instagram.com/reel/DMplO5esbQs/?utm_source=ig_web_copy_link",desc:"Reel de la presentación de La Mona en el Poncho",roles:"Idea;Realización;Edición"},
  {id:12,title:"Ministerio de Industria - TikTok",thumb:"assets/ra.webp",image:"assets/ra.webp",link:"https://www.tiktok.com/@micecatamarca/video/7298879783063080198?is_from_webapp=1&sender_device=pc&web_id=7504670842782385719",desc:"Video de promoción de la industria de Catamarca: RA Intertrading",roles:"Idea;Guión;Realización;Locución;Edición"},
  {id:13,title:"Ministerio de Industria - Instagram",thumb:"assets/tex-andes.webp",image:"assets/tex-andes.webp",link:"https://www.instagram.com/reel/C9NbZyJOPiH/?utm_source=ig_web_copy_link",desc:"Video de promoción del showroom de Tex Andes",roles:"Idea;Guión;Realización;Edición"},
  {id:14,title:"Catamarca RTV - Instagram",thumb:"assets/nieve-rodeo.webp",image:"assets/nieve-rodeo.webp",link:"https://www.instagram.com/reel/DLhsJBUsMS3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",desc:"Reel de las nevadas en Catamarca",roles:"Idea;Realización;Edición"},
  {id:15,title:"Ministerio de Industria - Instagram",thumb:"assets/pasantia.webp",image:"assets/pasantia.webp",link:"https://www.instagram.com/reel/C_jTMhVSGb_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Video institucional por prácticas profesionalizantes en la industria",roles:"Idea;Guión;Realización;Edición"},
  {id:16,title:"Ministerio de Industria - Instagram",thumb:"assets/havanna.webp",image:"assets/havanna.webp",link:"https://www.instagram.com/p/DGNt3dpueC7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Carrusel inauguración de comercio",roles:"Fotografía;Edición;Diseño"}
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalRoles = document.getElementById('modalRoles');
const modalLink = document.getElementById('modalLink');
const closeBtn = document.getElementById('closeBtn');
const modalBackdrop = document.getElementById('modalClose');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (!gallery || !modal || !modalImage || !modalTitle || !modalDesc || !modalRoles || !modalLink || !closeBtn) {
  console.error('Elementos del DOM faltantes. Asegúrate de que index.html contiene los IDs esperados.');
}

let currentIndex = 0;
let lastFocusedElement = null;

function renderGallery() {
  gallery.innerHTML = '';
  projects.forEach((p, i) => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = p.link || '#';
    a.dataset.index = i;
    a.setAttribute('aria-label', `${p.title} — ${p.desc}`);
    a.innerHTML = `
      <img loading="lazy" src="${p.thumb}" alt="${p.title}">
      <div class="info"><strong>${escapeHtml(p.title)}</strong> · ${escapeHtml(p.desc)}</div>
    `;
    a.addEventListener('click', onCardClick);
    gallery.appendChild(a);
  });
}

function onCardClick(e) {
  e.preventDefault();
  const idx = Number(this.dataset.index);
  if (Number.isNaN(idx) || idx < 0 || idx >= projects.length) return;
  openModal(idx);
}

function openModal(idx) {
  const p = projects[idx];
  if (!p) return;
  lastFocusedElement = document.activeElement;
  currentIndex = idx;
  showProject(p);
  modal.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-modal', 'true');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
  modalLink.setAttribute('rel', 'noopener noreferrer');
  modalLink.setAttribute('target', '_blank');
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
}

function showProject(p) {
  modalImage.src = p.image || p.thumb || '';
  modalImage.alt = p.title || '';
  modalTitle.textContent = p.title || '';
  modalDesc.textContent = p.desc || '';
  modalRoles.textContent = p.roles || '';
  if (p.link) {
    modalLink.href = p.link;
    modalLink.style.display = 'inline-block';
  } else {
    modalLink.href = '#';
    modalLink.style.display = 'none';
  }
}

/* Navegación */
function showPrev() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProject(projects[currentIndex]);
}

function showNext() {
  currentIndex = (currentIndex + 1) % projects.length;
  showProject(projects[currentIndex]);
}

/* Eventos */
closeBtn.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
if (prevBtn) prevBtn.addEventListener('click', showPrev);
if (nextBtn) nextBtn.addEventListener('click', showNext);

document.addEventListener('keydown', (e) => {
  const isOpen = modal.getAttribute('aria-hidden') === 'false';
  if (!isOpen) return;
  if (e.key === 'Escape') {
    e.preventDefault();
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    showPrev();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    showNext();
  } else if (e.key === 'Tab') {
    // Simple trap de foco dentro del modal (cierra ciclo cuando se llega al final)
    const focusable = modal.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

/* Escape HTML utility for simple injection safety in text nodes */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* Inicializar galería */
renderGallery();
