const categories = ["objects", "animals", "people", "colors"];

const translations = {
  pl: {
    pageTitle: "Nauka czytania globalnego",
    subtitle:
      "Flow: kliknij słowo, aby pokazać obrazek i podpis. Kliknij ponownie, aby przejść do następnego słowa.",
    languageLabel: "Język:",
    categoryLabel: "Kategorie:",
    allCategoriesLabel: "Wszystkie",
    words: {
      scorpion: "skorpion",
      moon: "księżyc",
      banana: "banan",
      apple: "jabłko",
      tree: "drzewo",
      ghost: "duch",
      snake: "wąż",
      sword: "miecz",
      dragon: "smok",
      dog: "pies",
      cat: "kot",
      turtle: "żółw",
      house: "dom",
      sun: "słońce",
      car: "auto",
      panda: "panda",
      shield: "tarcza",
      ball: "piłka",
      guitar: "gitara",
      lion: "lew",
      spider: "pająk",
      pirate: "pirat",
      policeman: "policjant",
      firefighter: "strażak",
      doctor: "lekarz",
      miner: "górnik",
      fish: "ryba",
      red: "czerwony",
      blue: "niebieski",
      green: "zielony",
      yellow: "żółty",
      black: "czarny",
      white: "biały",
    },
    categories: {
      objects: "Przedmioty",
      animals: "Zwierzęta",
      people: "Ludzie",
      colors: "Kolory",
    },
  },
  en: {
    pageTitle: "Global reading for kids",
    subtitle:
      "Flow: click the word to reveal image + caption. Click again to move to the next word.",
    languageLabel: "Language:",
    categoryLabel: "Categories:",
    allCategoriesLabel: "All",
    words: {
      scorpion: "scorpion",
      moon: "moon",
      banana: "banana",
      apple: "apple",
      tree: "tree",
      ghost: "ghost",
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
      shield: "shield",
      ball: "ball",
      guitar: "guitar",
      lion: "lion",
      spider: "spider",
      pirate: "pirate",
      policeman: "policeman",
      firefighter: "firefighter",
      doctor: "doctor",
      miner: "miner",
      fish: "fish",
      red: "red",
      blue: "blue",
      green: "green",
      yellow: "yellow",
      black: "black",
      white: "white",
    },
    categories: {
      objects: "Objects",
      animals: "Animals",
      people: "People",
      colors: "Colors",
    },
  },
  es: {
    pageTitle: "Lectura global para niños",
    subtitle:
      "Flujo: haz clic en la palabra para mostrar imagen y texto. Vuelve a hacer clic para la siguiente palabra.",
    languageLabel: "Idioma:",
    categoryLabel: "Categorías:",
    allCategoriesLabel: "Todas",
    words: {
      scorpion: "escorpión",
      moon: "luna",
      banana: "plátano",
      apple: "manzana",
      tree: "árbol",
      ghost: "fantasma",
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
      shield: "escudo",
      ball: "pelota",
      guitar: "guitarra",
      lion: "león",
      spider: "araña",
      pirate: "pirata",
      policeman: "policía",
      firefighter: "bombero",
      doctor: "médico",
      miner: "minero",
      fish: "pez",
      red: "rojo",
      blue: "azul",
      green: "verde",
      yellow: "amarillo",
      black: "negro",
      white: "blanco",
    },
    categories: {
      objects: "Objetos",
      animals: "Animales",
      people: "Personas",
      colors: "Colores",
    },
  },
};

const entries = [
  { key: "scorpion", imagePath: "assets/images/scorpion.svg", categories: ["animals"] },
  { key: "moon", imagePath: "assets/images/moon.svg", categories: ["objects"] },
  { key: "banana", imagePath: "assets/images/banana.svg", categories: ["objects"] },
  { key: "apple", imagePath: "assets/images/apple.svg", categories: ["objects"] },
  { key: "tree", imagePath: "assets/images/tree.svg", categories: ["objects"] },
  { key: "ghost", imagePath: "assets/images/ghost.svg", categories: ["people"] },
  { key: "snake", imagePath: "assets/images/snake.svg", categories: ["animals"] },
  { key: "sword", imagePath: "assets/images/sword.svg", categories: ["objects"] },
  { key: "dragon", imagePath: "assets/images/dragon.svg", categories: ["animals"] },
  { key: "dog", imagePath: "assets/images/dog.svg", categories: ["animals"] },
  { key: "cat", imagePath: "assets/images/cat.svg", categories: ["animals"] },
  { key: "turtle", imagePath: "assets/images/turtle.svg", categories: ["animals"] },
  { key: "house", imagePath: "assets/images/house.svg", categories: ["objects"] },
  { key: "sun", imagePath: "assets/images/sun.svg", categories: ["objects"] },
  { key: "car", imagePath: "assets/images/car.svg", categories: ["objects"] },
  { key: "panda", imagePath: "assets/images/panda.svg", categories: ["animals"] },
  { key: "shield", imagePath: "assets/images/shield.svg", categories: ["objects"] },
  { key: "ball", imagePath: "assets/images/ball.svg", categories: ["objects"] },
  { key: "guitar", imagePath: "assets/images/guitar.svg", categories: ["objects"] },
  { key: "lion", imagePath: "assets/images/lion.svg", categories: ["animals"] },
  { key: "spider", imagePath: "assets/images/spider.svg", categories: ["animals"] },
  { key: "pirate", imagePath: "assets/images/pirate.svg", categories: ["people"] },
  { key: "policeman", imagePath: "assets/images/policeman.svg", categories: ["people"] },
  { key: "firefighter", imagePath: "assets/images/firefighter.svg", categories: ["people"] },
  { key: "doctor", imagePath: "assets/images/doctor.svg", categories: ["people"] },
  { key: "miner", imagePath: "assets/images/miner.svg", categories: ["people"] },
  { key: "fish", imagePath: "assets/images/fish.svg", categories: ["animals"] },
  { key: "red", imagePath: "assets/images/red.svg", categories: ["colors"] },
  { key: "blue", imagePath: "assets/images/blue.svg", categories: ["colors"] },
  { key: "green", imagePath: "assets/images/green.svg", categories: ["colors"] },
  { key: "yellow", imagePath: "assets/images/yellow.svg", categories: ["colors"] },
  { key: "black", imagePath: "assets/images/black.svg", categories: ["colors"] },
  { key: "white", imagePath: "assets/images/white.svg", categories: ["colors"] },
];

const languageSelect = document.querySelector("#language-select");
const titleNode = document.querySelector("#title");
const subtitleNode = document.querySelector("#subtitle");
const languageLabelNode = document.querySelector("#language-label");
const categoryLabelNode = document.querySelector("#category-label");
const allCategoriesLabelNode = document.querySelector("#all-categories-label");
const categoriesNode = document.querySelector("#categories");
const allCategoriesCheckbox = document.querySelector("#category-all");
const wordListNode = document.querySelector("#word-list");
const template = document.querySelector("#word-card-template");

let currentLanguage = "pl";
let currentEntry = null;
let isFigureVisible = false;
let unseenEntries = [];
let selectedCategories = new Set(categories);

function getFilteredEntries() {
  return entries.filter((entry) =>
    entry.categories.some((category) => selectedCategories.has(category)),
  );
}

function prepareFlow() {
  const filteredEntries = getFilteredEntries();
  unseenEntries = [...filteredEntries];

  if (unseenEntries.length === 0) {
    selectedCategories = new Set(categories);
    syncCategoryInputs();
    unseenEntries = [...entries];
  }

  currentEntry = null;
  isFigureVisible = false;
  drawNextEntry();
}

function drawNextEntry() {
  if (unseenEntries.length === 0) {
    unseenEntries = [...getFilteredEntries()];
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

function buildCategoryControls() {
  categoriesNode.innerHTML = "";
  const langCategories = translations[currentLanguage].categories;

  categories.forEach((category) => {
    const id = `category-${category}`;
    const wrapper = document.createElement("label");
    wrapper.className = "category-option";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = category;
    input.id = id;
    input.checked = selectedCategories.has(category);

    input.addEventListener("change", () => {
      if (input.checked) {
        selectedCategories.add(category);
      } else {
        selectedCategories.delete(category);
      }

      if (selectedCategories.size === 0) {
        selectedCategories = new Set(categories);
      }

      syncCategoryInputs();
      prepareFlow();
      renderWordCard();
    });

    const text = document.createElement("span");
    text.textContent = langCategories[category];

    wrapper.append(input, text);
    categoriesNode.append(wrapper);
  });
}

function syncCategoryInputs() {
  allCategoriesCheckbox.checked = selectedCategories.size === categories.length;

  const categoryInputs = categoriesNode.querySelectorAll('input[type="checkbox"]');
  categoryInputs.forEach((input) => {
    input.checked = selectedCategories.has(input.value);
  });
}

function renderInterface() {
  const lang = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = lang.pageTitle;

  titleNode.textContent = lang.pageTitle;
  subtitleNode.textContent = lang.subtitle;
  languageLabelNode.textContent = lang.languageLabel;
  categoryLabelNode.textContent = lang.categoryLabel;
  allCategoriesLabelNode.textContent = lang.allCategoriesLabel;

  buildCategoryControls();
  syncCategoryInputs();
  prepareFlow();
  renderWordCard();
}

languageSelect.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  renderInterface();
});

allCategoriesCheckbox.addEventListener("change", () => {
  if (!allCategoriesCheckbox.checked) {
    syncCategoryInputs();
    return;
  }

  selectedCategories = new Set(categories);
  syncCategoryInputs();
  prepareFlow();
  renderWordCard();
});

renderInterface();
