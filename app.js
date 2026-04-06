const translations = {
  pl: {
    pageTitle: "Nauka czytania globalnego",
    subtitle:
      "Flow: kliknij słowo, aby pokazać obrazek i podpis. Kliknij ponownie, aby przejść do następnego słowa.",
    languageLabel: "Język:",
    words: {
      snake: "wąż",
      sword: "miecz",
      dragon: "smok",
      dog: "pies",
      cat: "kot",
      turtle: "żółw",
      house: "dom",
      sun: "słońce",
      car: "samochód",
      panda: "panda",
    },
  },
  en: {
    pageTitle: "Global reading for kids",
    subtitle:
      "Flow: click the word to reveal image + caption. Click again to move to the next word.",
    languageLabel: "Language:",
    words: {
      snake: "snake",
      sword: "sword",
      dragon: "dragon",
      dog: "dog",
      cat: "cat",
      turtle: "turtle",
      house: "house",
      sun: "sun",
      car: "car",
      panda: "panda",
    },
  },
  es: {
    pageTitle: "Lectura global para niños",
    subtitle:
      "Flujo: haz clic en la palabra para mostrar imagen y texto. Vuelve a hacer clic para la siguiente palabra.",
    languageLabel: "Idioma:",
    words: {
      snake: "serpiente",
      sword: "espada",
      dragon: "dragón",
      dog: "perro",
      cat: "gato",
      turtle: "tortuga",
      house: "casa",
      sun: "sol",
      car: "coche",
      panda: "panda",
    },
  },
};

const entries = [
  { key: "snake", imagePath: "assets/images/snake.svg" },
  { key: "sword", imagePath: "assets/images/sword.svg" },
  { key: "dragon", imagePath: "assets/images/dragon.svg" },
  { key: "dog", imagePath: "assets/images/dog.svg" },
  { key: "cat", imagePath: "assets/images/cat.svg" },
  { key: "turtle", imagePath: "assets/images/turtle.svg" },
  { key: "house", imagePath: "assets/images/house.svg" },
  { key: "sun", imagePath: "assets/images/sun.svg" },
  { key: "car", imagePath: "assets/images/car.svg" },
  { key: "panda", imagePath: "assets/images/panda.svg" },
];

const languageSelect = document.querySelector("#language-select");
const titleNode = document.querySelector("#title");
const subtitleNode = document.querySelector("#subtitle");
const languageLabelNode = document.querySelector("#language-label");
const wordListNode = document.querySelector("#word-list");
const template = document.querySelector("#word-card-template");

let currentLanguage = "pl";
let currentEntry = null;
let isFigureVisible = false;
let unseenEntries = [];

function prepareFlow() {
  unseenEntries = [...entries];
  currentEntry = null;
  isFigureVisible = false;
  drawNextEntry();
}

function drawNextEntry() {
  if (unseenEntries.length === 0) {
    unseenEntries = [...entries];
  }

  const randomIndex = Math.floor(Math.random() * unseenEntries.length);
  const [nextEntry] = unseenEntries.splice(randomIndex, 1);
  currentEntry = nextEntry;
}

function moveToNextWord() {
  drawNextEntry();
  isFigureVisible = false;
  renderWordCard();
}

function renderWordCard() {
  wordListNode.innerHTML = "";

  const entry = currentEntry;
  const card = template.content.firstElementChild.cloneNode(true);
  const button = card.querySelector(".word-button");
  const figure = card.querySelector(".word-figure");
  const image = card.querySelector(".word-image");
  const caption = card.querySelector(".word-caption");

  const localizedWord = translations[currentLanguage].words[entry.key];

  button.textContent = localizedWord;
  button.setAttribute("aria-expanded", String(isFigureVisible));

  figure.hidden = !isFigureVisible;
  image.src = entry.imagePath;
  image.alt = localizedWord;
  caption.textContent = localizedWord;

  button.addEventListener("click", () => {
    if (!isFigureVisible) {
      isFigureVisible = true;
      renderWordCard();
      return;
    }

    moveToNextWord();
  });

  wordListNode.append(card);
}

function renderInterface() {
  const lang = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = lang.pageTitle;

  titleNode.textContent = lang.pageTitle;
  subtitleNode.textContent = lang.subtitle;
  languageLabelNode.textContent = lang.languageLabel;

  prepareFlow();
  renderWordCard();
}

languageSelect.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  renderInterface();
});

renderInterface();
