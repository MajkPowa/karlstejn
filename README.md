# Karlštejn — váš nový příběh

Veřejná realitní prezentace Service estate s.r.o. Video domu a bytu, fotografie a poptávkový formulář.

- Web: https://majkpowa.github.io/karlstejn/
- Soukromá evidence: https://karlstejn-vas-novy-pribeh.majkpowa.chatgpt.site/administrace

## Provoz

GitHub Pages publikuje připravenou složku `docs/`. Frontend je React/Vite. Formulář zapisuje přes HTTPS do stávajícího backendu Sites/Cloudflare D1; jeho CORS přijímá pouze vlastní origin a `https://majkpowa.github.io`. Repozitář neobsahuje databázi poptávek, přístupové údaje ani serverový kód.

## Aktualizace

Vyžaduje Node.js 22.13+ nebo 24:

```sh
npm ci
npm run build
npm run pages:prepare
```

Změny zdrojů a `docs/` pak commitněte a odešlete do výchozí větve. GitHub Pages se aktualizují z `/docs`.

Fotografie a videa jsou skutečné podklady nabídky. Fonty Lora a Manrope jsou hostované lokálně; licence jsou v `public/fonts/`.
