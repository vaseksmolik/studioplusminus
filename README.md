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

## Písmo

Návrh (Adobe XD) počítá s písmem **Cy** od Supertype – komerční, dostupné na Adobe Fonts (jen s předplatným Creative Cloud) nebo ke koupi u Supertype.
Do vyřešení licence web používá zdarma **Manrope** (SIL OFL), uložené ve `fonts/`. Po pořízení Cy stačí přidat `@font-face` pro „Cy“ – v `--sans` je už na prvním místě.

## Náhled pro sdílení

`img/og-image.jpg` (1200×630) se ukazuje ve zprávách a na sociálních sítích. Po změně ho přegenerovat a obnovit cache v https://developers.facebook.com/tools/debug/ a https://www.linkedin.com/post-inspector/.
