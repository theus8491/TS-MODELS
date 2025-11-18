// ==== AGE GATE (sem alterações) ====
const gate = document.getElementById("ageGate");
const enter = document.getElementById("enterBtn");
const exitBtn = document.getElementById("exitBtn");

enter.onclick = () => {
  gate.classList.add("hidden");
  document.getElementById("app").ariaHidden = "false";
};

exitBtn.onclick = () => {
  window.location = "https://google.com";
};

// ---

// ==== MODELS DATA (sem alterações nos dados iniciais) ====
const MODELS = [
  {
    name: "RUBY",
    age: 34,
    img: "joy.jpeg",
    whatsapp: "" 
  },
  {
    name: "NULL",
    age: 21,
    img: "null.jpeg",
    whatsapp: "" 
  },
  {
    name: "BIA",
    age: 37,
    img: "BIA.jpeg",
    whatsapp: "" // Pronta para ser preenchida
  }
];

// ---

// =======================
// WHATSAPP LINKS GERADOS
// =======================

// O texto é definido apenas UMA vez e reutilizado
let textoFormal = encodeURIComponent(
  "Olá, vim pela TS Models e gostaria de comprar seus conteúdos. Por favor, envie sua tabela."
);

// FOTO 1 → RUBY: 11987059169 usa o textoFormal
MODELS[0].whatsapp = `https://wa.me/11987059169?text=${textoFormal}`;

// FOTO 2 → NULL: 4185014439 usa o textoFormal
MODELS[1].whatsapp = `https://wa.me/4185014439?text=${textoFormal}`;

// FOTO 3 → BIA: 15996377715 usa o textoFormal
MODELS[2].whatsapp = `https://wa.me/15996377715?text=${textoFormal}`; 

// ---

// ==== GALERIA (sem alterações) ====
const gallery = document.getElementById("gallery");
const empty = document.getElementById("empty");

function loadModels(list) {
  gallery.innerHTML = "";
  if (list.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  list.forEach(m => {
    gallery.innerHTML += `
      <div class="card">
        <img src="${m.img}" alt="${m.name}">
        <div class="info">
          <div class="name">${m.name}</div>
          <div class="age">${m.age} anos</div>
          <a href="${m.whatsapp}" class="btn" target="_blank">WhatsApp</a>
        </div>
      </div>
    `;
  });
}

loadModels(MODELS);

// ---

// ==== LIGHTBOX (sem alterações) ====
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightboxImg");

gallery.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    lightImg.src = e.target.src;
    lightbox.style.display = "flex";
  }
});

lightbox.onclick = () => {
  lightbox.style.display = "none";
};