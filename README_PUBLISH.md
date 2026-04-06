# Publikacja aplikacji (hosting darmowy + własny adres)

Ten dokument pokazuje, jak opublikować aplikację statyczną z tego repozytorium.

> Stan opcji i limity sprawdzone: **2026-04-06**.

## 1) Najprostsza opcja: GitHub Pages (darmowo)

### Co dostajesz
- darmowy hosting dla statycznej strony,
- domyślny adres: `https://<twoj-login>.github.io/<nazwa-repo>/`,
- możliwość podpięcia własnej domeny (np. `czytanie.twojadomena.pl` albo `twojadomena.pl`).

### Kroki publikacji
1. Wypchnij kod do repozytorium na GitHub.
2. Wejdź: **Settings → Pages**.
3. W sekcji **Build and deployment** ustaw:
   - **Source**: `Deploy from a branch`,
   - Branch: `main` (lub inna, której używasz), folder: `/ (root)`.
4. Zapisz ustawienia i poczekaj na publikację.
5. Otwórz wygenerowany adres `github.io`.

### Podpięcie własnego adresu (custom domain)
1. W **Settings → Pages** wpisz swoją domenę w polu **Custom domain**.
2. U swojego operatora DNS dodaj rekordy zgodnie z instrukcją GitHub Pages.
3. Włącz HTTPS (opcja **Enforce HTTPS**), gdy certyfikat będzie gotowy.

---

## 2) Alternatywa: Cloudflare Pages (darmowo)

Dobra opcja, jeśli chcesz bardzo prostą integrację domeny i DNS w jednym miejscu.

### Co dostajesz
- darmowy hosting statycznych zasobów,
- darmowy adres `*.pages.dev`,
- podpięcie własnej domeny,
- na planie Free: limit buildów i limity platformowe zależne od planu.

### Szybkie kroki
1. Załóż konto Cloudflare.
2. Wejdź w **Workers & Pages → Create application → Pages**.
3. Podłącz repozytorium GitHub i ustaw build (dla tej aplikacji: brak kroku build, publikujesz pliki statyczne).
4. Po deployu ustaw **Custom domains**.

---

## 3) Alternatywa: Vercel (darmowy plan Hobby)

### Co dostajesz
- szybki deploy z Git,
- darmowy adres `*.vercel.app`,
- własna domena (na Hobby obowiązuje limit liczby custom domains na projekt).

### Szybkie kroki
1. Zaloguj się do Vercel i zaimportuj repo.
2. Framework preset: **Other / Static**.
3. Deploy.
4. W projekcie: **Settings → Domains** i dodaj własną domenę.

---

## Którą opcję wybrać?

- Jeśli chcesz najprościej i bez dodatkowych narzędzi: **GitHub Pages**.
- Jeśli chcesz od razu wygodnie zarządzać DNS i domeną: **Cloudflare Pages**.
- Jeśli planujesz później rozbudowę i CI/CD webowe: **Vercel**.

---

## Ważne uwagi o „własnym adresie”

- „Własny adres” może znaczyć:
  - darmową subdomenę platformy (`github.io`, `pages.dev`, `vercel.app`) – bez kosztu,
  - albo własną domenę (`twojadomena.pl`) – zwykle wymaga zakupu domeny u rejestratora.
- Sam hosting może być darmowy, ale **rejestracja domeny** zazwyczaj jest płatna.

---

## Źródła oficjalne

- GitHub Pages + custom domains:
  - https://docs.github.com/articles/using-a-custom-domain-with-github-pages
  - https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Cloudflare Pages (custom domains, limity, pricing):
  - https://developers.cloudflare.com/pages/configuration/custom-domains/
  - https://developers.cloudflare.com/pages/platform/limits/
  - https://developers.cloudflare.com/pages/functions/pricing/
- Vercel Domains:
  - https://vercel.com/docs/domains/working-with-domains/add-a-domain
  - https://vercel.com/docs/domains/set-up-custom-domain
