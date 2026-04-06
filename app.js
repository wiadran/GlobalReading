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
];

const languageSelect = document.querySelector("#language-select");
const titleNode = document.querySelector("#title");
const subtitleNode = document.querySelector("#subtitle");
const languageLabelNode = document.querySelector("#language-label");
const wordListNode = document.querySelector("#word-list");
const template = document.querySelector("#word-card-template");

let currentLanguage = "pl";
let shuffledEntries = [];
let currentIndex = 0;
let isFigureVisible = false;

function shuffle(source) {
  const cloned = [...source];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function prepareFlow() {
  shuffledEntries = shuffle(entries);
  currentIndex = 0;
  isFigureVisible = false;
}

function moveToNextWord() {
  if (currentIndex === shuffledEntries.length - 1) {
    shuffledEntries = shuffle(entries);
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }

  isFigureVisible = false;
  renderWordCard();
}

function renderWordCard() {
  wordListNode.innerHTML = "";

  const entry = shuffledEntries[currentIndex];
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
