const translations = {
  pl: {
    pageTitle: "Nauka czytania globalnego",
    subtitle: "Kliknij duże słowo, aby zobaczyć obrazek i podpis.",
    languageLabel: "Język:",
    words: {
      car: "auto",
      house: "dom",
      panda: "panda",
      sun: "słońce",
    },
  },
  en: {
    pageTitle: "Global reading for kids",
    subtitle: "Click a large word to show the image and caption.",
    languageLabel: "Language:",
    words: {
      car: "car",
      house: "house",
      panda: "panda",
      sun: "sun",
    },
  },
  es: {
    pageTitle: "Lectura global para niños",
    subtitle: "Haz clic en una palabra grande para ver la imagen y el texto.",
    languageLabel: "Idioma:",
    words: {
      car: "coche",
      house: "casa",
      panda: "panda",
      sun: "sol",
    },
  },
};

const entries = [
  { key: "car", imagePath: "assets/images/car.svg" },
  { key: "house", imagePath: "assets/images/house.svg" },
  { key: "panda", imagePath: "assets/images/panda.svg" },
  { key: "sun", imagePath: "assets/images/sun.svg" },
];

const languageSelect = document.querySelector("#language-select");
const titleNode = document.querySelector("#title");
const subtitleNode = document.querySelector("#subtitle");
const languageLabelNode = document.querySelector("#language-label");
const wordListNode = document.querySelector("#word-list");
const template = document.querySelector("#word-card-template");

let currentLanguage = "pl";

function renderWordCards() {
  wordListNode.innerHTML = "";

  for (const entry of entries) {
    const card = template.content.firstElementChild.cloneNode(true);
    const button = card.querySelector(".word-button");
    const figure = card.querySelector(".word-figure");
    const image = card.querySelector(".word-image");
    const caption = card.querySelector(".word-caption");

    const localizedWord = translations[currentLanguage].words[entry.key];

    button.textContent = localizedWord;
    button.setAttribute("aria-expanded", "false");

    image.src = entry.imagePath;
    image.alt = localizedWord;

    caption.textContent = localizedWord;

    button.addEventListener("click", () => {
      const isVisible = !figure.hidden;
      figure.hidden = isVisible;
      button.setAttribute("aria-expanded", String(!isVisible));
    });

    wordListNode.append(card);
  }
}

function renderInterface() {
  const lang = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = lang.pageTitle;

  titleNode.textContent = lang.pageTitle;
  subtitleNode.textContent = lang.subtitle;
  languageLabelNode.textContent = lang.languageLabel;

  renderWordCards();
}

languageSelect.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  renderInterface();
});

renderInterface();
