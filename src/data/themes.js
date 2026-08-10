// Six review directions for the homepage: palette + font pairing.
// Each theme only overrides the global CSS variables and the two font families,
// so the same homepage layout re-skins with no structural change.
// `deviates` flags where a theme steps outside the approved achromatic-serif rule
// (this gallery exists so the team can weigh those trade-offs on purpose).

const FRAUNCES = "'Fraunces Variable', Georgia, serif";
const NEWSREADER = "'Newsreader Variable', Georgia, serif";

export const themes = [
  {
    num: 1,
    id: 'ledger',
    name: 'Ledger',
    paletteLabel: 'Achromatic',
    fontLabel: 'Fraunces + Newsreader',
    note: 'The approved system (control)',
    deviates: false,
    fonts: { display: FRAUNCES, text: NEWSREADER },
    googleHref: null,
    vars: { paper: '#FBFBFB', silver: '#F2F2F2', silver2: '#EAEAEA', card: '#FFFFFF', ink: '#111111', muted: '#575757', label: '#757575', line: '#E5E5E5', line2: '#D6D6D6', hair: '#C0C0C0' },
    extraCss: '',
  },
  {
    num: 2,
    id: 'broadsheet',
    name: 'Broadsheet',
    paletteLabel: 'Pure black + white',
    fontLabel: 'Playfair Display + Spectral',
    note: 'Deviates: Playfair/Spectral type',
    deviates: true,
    fonts: { display: "'Playfair Display', Georgia, serif", text: "'Spectral', Georgia, serif" },
    googleHref: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Spectral:ital,wght@0,300;0,400;0,600;1,400&display=swap',
    vars: { paper: '#FFFFFF', silver: '#F4F4F4', silver2: '#ECECEC', card: '#FFFFFF', ink: '#0A0A0A', muted: '#4A4A4A', label: '#6E6E6E', line: '#E4E4E4', line2: '#D2D2D2', hair: '#BCBCBC' },
    extraCss: 'h1{font-weight:700;letter-spacing:-0.03em}.boxes h2,.final h2,.stakes .lead{font-weight:700}',
  },
  {
    num: 3,
    id: 'civic',
    name: 'Civic',
    paletteLabel: 'Off-white + evergreen',
    fontLabel: 'Cormorant + Newsreader',
    note: 'Deviates: evergreen accent',
    deviates: true,
    fonts: { display: "'Cormorant', Georgia, serif", text: NEWSREADER },
    googleHref: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;1,500;1,600&display=swap',
    vars: { paper: '#F6F8F6', silver: '#EAEFEA', silver2: '#E0E7E0', card: '#FFFFFF', ink: '#15201B', muted: '#46524B', label: '#5E6B63', line: '#E0E7E0', line2: '#CFDBD3', hair: '#B9C7BE' },
    extraCss: 'h1,.boxes h2,.final h2{font-weight:600}h1 em,.boxes h2 em,.final h2 em{color:#24503F}.btn{background:#24503F;border-color:#24503F}.btn:hover{background:#1C3E31}.ghost{color:#24503F;border-bottom-color:#9CB6A9}',
  },
  {
    num: 4,
    id: 'register',
    name: 'Register',
    paletteLabel: 'Cream + oxblood',
    fontLabel: 'Fraunces + Source Serif',
    note: 'Deviates: warm cream + oxblood accent',
    deviates: true,
    fonts: { display: FRAUNCES, text: "'Source Serif 4', Georgia, serif" },
    googleHref: 'https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap',
    vars: { paper: '#FBF7F2', silver: '#F1EAE1', silver2: '#E9DFD3', card: '#FFFFFF', ink: '#1B1512', muted: '#5A4F49', label: '#6E625B', line: '#E7DED4', line2: '#D8CBBD', hair: '#C3B4A4' },
    extraCss: 'h1 em,.boxes h2 em,.final h2 em{color:#6E2530}.btn{background:#6E2530;border-color:#6E2530}.btn:hover{background:#571D26}.ghost{color:#6E2530;border-bottom-color:#C9A9AE}',
  },
  {
    num: 5,
    id: 'bulletin',
    name: 'Bulletin',
    paletteLabel: 'Stark black + white',
    fontLabel: 'Space Grotesk + Inter',
    note: 'Deviates: sans-serif (no serif)',
    deviates: true,
    fonts: { display: "'Space Grotesk', system-ui, sans-serif", text: "'Inter', system-ui, sans-serif" },
    googleHref: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    vars: { paper: '#FFFFFF', silver: '#F5F5F5', silver2: '#ECECEC', card: '#FFFFFF', ink: '#111111', muted: '#555555', label: '#767676', line: '#E6E6E6', line2: '#D6D6D6', hair: '#BFBFBF' },
    extraCss: 'h1{letter-spacing:-0.03em;font-weight:600}h1 em,.boxes h2 em,.final h2 em{font-style:normal;font-weight:500}.box h3{font-weight:600}.eyebrow,.sec-head .kicker,.band-label{letter-spacing:.16em}',
  },
  {
    num: 6,
    id: 'nocturne',
    name: 'Nocturne',
    paletteLabel: 'Charcoal (dark)',
    fontLabel: 'Fraunces + Newsreader',
    note: 'Deviates: dark reading surfaces',
    deviates: true,
    fonts: { display: FRAUNCES, text: NEWSREADER },
    googleHref: null,
    vars: { paper: '#151515', silver: '#1E1E1E', silver2: '#242424', card: '#1C1C1C', ink: '#F1F1F1', muted: '#B2B2B2', label: '#8C8C8C', line: '#2A2A2A', line2: '#333333', hair: '#3A3A3A' },
    extraCss: "nav{background:rgba(21,21,21,.9);border-bottom-color:#2A2A2A}.btn{background:#F1F1F1;color:#151515;border-color:#F1F1F1}.btn:hover{background:#DCDCDC}.media-frame{border-color:#2A2A2A}.box .folio{background:linear-gradient(135deg,#2B2B2B,#3C3C3C);-webkit-background-clip:text;background-clip:text}::selection{background:#2E2E2E;color:#F1F1F1}",
  },
  {
    num: 7,
    id: 'garamond',
    name: 'Garamond',
    paletteLabel: 'Achromatic',
    fontLabel: 'EB Garamond',
    note: 'Deviates: EB Garamond throughout',
    deviates: true,
    fonts: { display: "'EB Garamond', Georgia, serif", text: "'EB Garamond', Georgia, serif" },
    googleHref: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap',
    vars: { paper: '#FBFBFA', silver: '#F2F2F0', silver2: '#EAEAE8', card: '#FFFFFF', ink: '#121211', muted: '#565654', label: '#747472', line: '#E5E5E3', line2: '#D6D6D3', hair: '#C0C0BD' },
    extraCss: 'h1,.boxes h2,.final h2{font-weight:600;letter-spacing:-0.008em}h1 em,.boxes h2 em,.final h2 em{font-weight:500}.box h3{font-weight:600}.eyebrow,.sec-head .kicker,.band-label{letter-spacing:.2em}',
  },
  {
    num: 8,
    id: 'monocle',
    name: 'Monocle',
    paletteLabel: 'Book paper + black',
    fontLabel: 'Helvetica + Plantin*',
    note: 'Monocle sans/serif system (Plantin → Newsreader substitute)',
    deviates: true,
    fonts: { display: "'Newsreader Variable', Georgia, serif", text: "'Newsreader Variable', Georgia, serif" },
    googleHref: null,
    vars: { paper: '#FAF9F6', silver: '#F0EFEA', silver2: '#E8E7E1', card: '#FFFFFF', ink: '#141414', muted: '#4C4A45', label: '#6A675F', line: '#E6E4DD', line2: '#D7D4CB', hair: '#C1BDB2' },
    // Monocle's hierarchy: Helvetica (sans) for labels/decks/captions/data + hard edges;
    // Plantin (serif, substituted by Newsreader) for headlines and body; heavy weight contrast.
    extraCss:
      ".logo{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:700;letter-spacing:-0.03em}" +
      ".logo em{font-style:normal;font-weight:700}" +
      ".nav-links a:not(.btn){font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px}" +
      ".btn{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:600;border-radius:0}" +
      ".eyebrow,.sec-head .kicker,.band-label,.stat .l,.foot-index-label{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:700;letter-spacing:.1em}" +
      ".sub{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:300}" +
      ".sub strong{font-weight:600}" +
      ".meta-line,.q,.disclosure,.media-tag .cap,.foot-bottom,.foot-links a{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}" +
      ".stat .n{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:700;letter-spacing:-0.02em}" +
      "h1,.boxes h2,.final h2,.box h3,.stakes .lead{font-weight:700}" +
      "h1 em,.boxes h2 em,.final h2 em{font-style:italic;font-weight:600}" +
      ".box{border-radius:0}",
  },
];
