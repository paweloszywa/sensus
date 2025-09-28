# 📘 Konfiguracja Facebook Posts - Instrukcja

## 🚀 Jak uruchomić pobieranie postów z Facebook?

### 1. **Stwórz Facebook App**

1. Idź na https://developers.facebook.com/apps/
2. Kliknij "Create App"
3. Wybierz "Business" > "Next"
4. Podaj nazwę app (np. "Sensus Website")
5. Zapisz **App ID**

### 2. **Dodaj Facebook Page**

1. W dashboard Facebook App:
   - Idź do "App Settings" > "Basic"
   - Dodaj domenę swojej strony w "App Domains"
2. Dodaj produkt "Facebook Login"

### 3. **Pobierz Page Access Token**

```bash
# Opcja A: Graph API Explorer
1. Idź na https://developers.facebook.com/tools/explorer/
2. Wybierz swoją aplikację
3. Wygeneruj token z uprawnieniami: pages_read_engagement, pages_show_list
4. Zamień User Access Token na Page Access Token

# Opcja B: Ręcznie przez API
GET /me/accounts?access_token={user-access-token}
```

### 4. **Znajdź Facebook Page ID**

```bash
# Metoda 1: Z URL
https://www.facebook.com/p/Sensus-Centrum-Terapii-i-Wspomagania-Rozwoju-Dziecka-61576806726313/
# Page ID to: 61576806726313

# Metoda 2: Graph API
GET /me/accounts?access_token={access-token}
```

### 5. **Skonfiguruj zmienne środowiskowe**

Stwórz plik `.env.local` w głównym katalogu:

```bash
# .env.local
FACEBOOK_PAGE_ID=61576806726313
FACEBOOK_ACCESS_TOKEN=twoj_page_access_token_tutaj
```

### 6. **Uprawnienia Facebook**

Wymagane uprawnienia dla App:

- `pages_read_engagement` - czytanie postów
- `pages_show_list` - lista stron

### 7. **Testowanie**

```bash
# Test API endpoint
curl https://twojastrona.pl/api/facebook-posts

# Lub w przeglądarce:
https://localhost:3000/api/facebook-posts
```

## 🔧 Alternatywne rozwiązania

### **Opcja 1: Facebook Page Plugin (Najprostsze)**

```html
<!-- Dodaj do layout.js przed </body> -->
<div id="fb-root"></div>
<script
  async
  defer
  crossorigin="anonymous"
  src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v18.0&appId=TWOJ_APP_ID"
></script>

<!-- W komponencie FacebookPosts.js -->
<div
  class="fb-page"
  data-href="https://www.facebook.com/p/Sensus-Centrum-Terapii-i-Wspomagania-Rozwoju-Dziecka-61576806726313/"
  data-tabs="timeline"
  data-width="500"
  data-height="600"
  data-small-header="false"
  data-adapt-container-width="true"
  data-hide-cover="false"
  data-show-facepile="true"
></div>
```

### **Opcja 2: RSS Feed (Ograniczone)**

Facebook nie udostępnia już RSS, ale możesz użyć:

- IFTTT do przekierowania postów
- Zapier do automatyzacji
- Webhooks Facebook

### **Opcja 3: Manual CMS**

Stwórz prostego CMSa do dodawania postów ręcznie.

## 📋 Obecny stan

✅ **Już gotowe:**

- Komponent FacebookPosts
- API endpoint `/api/facebook-posts`
- Responsywny design
- Loading states
- Error handling
- Fallback na przykładowe dane

⚠️ **Do skonfigurowania:**

- Facebook App ID
- Page Access Token
- Zmienne środowiskowe

## 🎯 Następne kroki

1. **Szybkie rozwiązanie:** Użyj Facebook Page Plugin (Opcja 1)
2. **Pełna kontrola:** Skonfiguruj Facebook Graph API
3. **Alternatywa:** Dodawaj posty ręcznie przez prosty CMS

## 🔍 Debugowanie

Jeśli masz problemy:

```bash
# Sprawdź czy endpoint działa
npm run dev
# Idź na: http://localhost:3000/api/facebook-posts

# Sprawdź logi
console.log w developer tools
```

## 📞 Pomoc

Jeśli potrzebujesz pomocy z konfiguracją:

1. Sprawdź dokumentację Facebook Developers
2. Sprawdź console.log w przeglądarce
3. Sprawdź Network tab dla błędów API
