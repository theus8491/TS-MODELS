// ==== AGE GATE ====
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

// ==== MODELS DATA ====
const MODELS = [
  {
    name: "RUBY",
    age: 34,
    img: "joy.jpeg",
    whatsapp: "" // será preenchido abaixo
  },
  {
    name: "SUA VAGA AQUI",
    age: 22,
    img: "ts.jpeg",
    whatsapp: "" // será preenchido abaixo
  },
  {
    name: "SUA VAGA AQUI",
    age: 21,
    img: "ts.jpeg",
    whatsapp: "#" // permanece como pediu
  }
];

// =======================
// WHATSAPP LINKS GERADOS
// =======================

// FOTO 1 → TEXTO 2 (formal)
let texto1 = encodeURIComponent(
  "Olá, vim pela TS Models e gostaria de comprar seus conteúdos. Por favor, envie sua tabela."
);
MODELS[0].whatsapp = `https://wa.me/71984373174?text=${texto1}`;

// FOTO 2 → Apenas o número (pedido anterior)
let texto2 = encodeURIComponent("Olá, vim pela TS Models.");
MODELS[1].whatsapp = `https://wa.me/71984373174?text=${texto2}`;

// FOTO 3 continua igual

// ==== GALERIA ====
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

// ==== LIGHTBOX ====
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
