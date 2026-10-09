# studio± – web PLUS MINUS STUDIO

Statický web (HTML + CSS + trocha JS) pro **studioplusminus.cz**, hostovaný zdarma na GitHub Pages.
Přepsáno podle původní verze na Wixu (vaseksmolik.wixsite.com/studio-plus-minus).

## Úpravy

- texty: `index.html`
- vzhled: `style.css`
- galerie: obrázky v `img/`, přidat `<img>` do `.slides` v `index.html` (počítadlo se dopočítá samo)

Nové fotky před nahráním zmenšit na šířku ~1920 px a uložit jako JPEG (kvalita ~80).

## Lokální náhled

```bash
python -m http.server 8080
```

## Nasazení

Push do `main` → GitHub Pages publikuje automaticky. Doména je v souboru `CNAME`.

DNS u Forpsi:

| Typ   | Název | Hodnota               |
|-------|-------|-----------------------|
| A     | @     | 185.199.108.153       |
| A     | @     | 185.199.109.153       |
| A     | @     | 185.199.110.153       |
| A     | @     | 185.199.111.153       |
| CNAME | www   | vaseksmolik.github.io |
