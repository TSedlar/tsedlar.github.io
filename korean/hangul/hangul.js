const HANGUL = [
  { kr: 'ㄱ', en: 'g' },
  { kr: 'ㄴ', en: 'n' },
  { kr: 'ㄷ', en: 'd' },
  { kr: 'ㄹ', en: 'r/l' },
  { kr: 'ㅁ', en: 'm' },
  { kr: 'ㅂ', en: 'b' },
  { kr: 'ㅅ', en: 's' },
  { kr: 'ㅇ', en: '-' },
  { kr: 'ㅈ', en: 'j' },
  { kr: 'ㅊ', en: 'ch' },
  { kr: 'ㅋ', en: 'k' },
  { kr: 'ㅌ', en: 't' },
  { kr: 'ㅍ', en: 'p' },
  { kr: 'ㅎ', en: 'h' },
  { kr: 'ㅏ', en: 'a' },
  { kr: 'ㅑ', en: 'ya' },
  { kr: 'ㅘ', en: 'wa' },
  { kr: 'ㅓ', en: 'eo' },
  { kr: 'ㅕ', en: 'yeo' },
  { kr: 'ㅝ', en: 'wo' },
  { kr: 'ㅗ', en: 'o' },
  { kr: 'ㅛ', en: 'yo' },
  { kr: 'ㅜ', en: 'u' },
  { kr: 'ㅠ', en: 'yu' },
  { kr: 'ㅡ', en: 'eu' },
  { kr: 'ㅣ', en: 'i' },
  { kr: 'ㅐ', en: 'ae' },
  { kr: 'ㅒ', en: 'yae' },
  { kr: 'ㅙ', en: 'wae' },
  { kr: 'ㅔ', en: 'e' },
  { kr: 'ㅖ', en: 'ye' },
  { kr: 'ㅞ', en: 'we' },
  { kr: 'ㅚ', en: 'oe' },
  { kr: 'ㅟ', en: 'wi' },
  { kr: 'ㅢ', en: 'ui' },
  { kr: 'ㄲ', en: 'kk' },
  { kr: 'ㄸ', en: 'tt' },
  { kr: 'ㅃ', en: 'pp' },
  { kr: 'ㅆ', en: 'ss' },
  { kr: 'ㅉ', en: 'jj' },
  { kr: 'ㄳ', en: 'gs' },
  { kr: 'ㄵ', en: 'nj' },
  { kr: 'ㄶ', en: 'nh' },
  { kr: 'ㄺ', en: 'lg' },
  { kr: 'ㄻ', en: 'lm' },
  { kr: 'ㄼ', en: 'lb' },
  { kr: 'ㄽ', en: 'ls' },
  { kr: 'ㄾ', en: 'lt' },
  { kr: 'ㄿ', en: 'lp' },
  { kr: 'ㅀ', en: 'lh' },
  { kr: 'ㅄ', en: 'bs' }
];

const HANGUL_SYLLABLES = [
  {
    "kr": "가",
    "en": "ga"
  },
  {
    "kr": "각",
    "en": "gag"
  },
  {
    "kr": "갂",
    "en": "gagg"
  },
  {
    "kr": "갃",
    "en": "gags"
  },
  {
    "kr": "간",
    "en": "gan"
  },
  {
    "kr": "갅",
    "en": "ganj"
  },
  {
    "kr": "갆",
    "en": "ganh"
  },
  {
    "kr": "갇",
    "en": "gad"
  },
  {
    "kr": "갈",
    "en": "gal"
  },
  {
    "kr": "갉",
    "en": "galg"
  },
  {
    "kr": "갊",
    "en": "galm"
  },
  {
    "kr": "갋",
    "en": "galb"
  },
  {
    "kr": "갌",
    "en": "gals"
  },
  {
    "kr": "갍",
    "en": "galt"
  },
  {
    "kr": "갎",
    "en": "galp"
  },
  {
    "kr": "갏",
    "en": "galh"
  },
  {
    "kr": "감",
    "en": "gam"
  },
  {
    "kr": "갑",
    "en": "gab"
  },
  {
    "kr": "값",
    "en": "gabs"
  },
  {
    "kr": "갓",
    "en": "gas"
  },
  {
    "kr": "갔",
    "en": "gass"
  },
  {
    "kr": "강",
    "en": "gang"
  },
  {
    "kr": "갖",
    "en": "gaj"
  },
  {
    "kr": "갗",
    "en": "gac"
  },
  {
    "kr": "갘",
    "en": "gak"
  },
  {
    "kr": "같",
    "en": "gat"
  },
  {
    "kr": "갚",
    "en": "gap"
  },
  {
    "kr": "갛",
    "en": "gah"
  },
  {
    "kr": "개",
    "en": "gae"
  },
  {
    "kr": "객",
    "en": "gaeg"
  },
  {
    "kr": "갞",
    "en": "gaegg"
  },
  {
    "kr": "갟",
    "en": "gaegs"
  },
  {
    "kr": "갠",
    "en": "gaen"
  },
  {
    "kr": "갡",
    "en": "gaenj"
  },
  {
    "kr": "갢",
    "en": "gaenh"
  },
  {
    "kr": "갣",
    "en": "gaed"
  },
  {
    "kr": "갤",
    "en": "gael"
  },
  {
    "kr": "갥",
    "en": "gaelg"
  },
  {
    "kr": "갦",
    "en": "gaelm"
  },
  {
    "kr": "갧",
    "en": "gaelb"
  },
  {
    "kr": "갨",
    "en": "gaels"
  },
  {
    "kr": "갩",
    "en": "gaelt"
  },
  {
    "kr": "갪",
    "en": "gaelp"
  },
  {
    "kr": "갫",
    "en": "gaelh"
  },
  {
    "kr": "갬",
    "en": "gaem"
  },
  {
    "kr": "갭",
    "en": "gaeb"
  },
  {
    "kr": "갮",
    "en": "gaebs"
  },
  {
    "kr": "갯",
    "en": "gaes"
  },
  {
    "kr": "갰",
    "en": "gaess"
  },
  {
    "kr": "갱",
    "en": "gaeng"
  },
  {
    "kr": "갲",
    "en": "gaej"
  },
  {
    "kr": "갳",
    "en": "gaec"
  },
  {
    "kr": "갴",
    "en": "gaek"
  },
  {
    "kr": "갵",
    "en": "gaet"
  },
  {
    "kr": "갶",
    "en": "gaep"
  },
  {
    "kr": "갷",
    "en": "gaeh"
  },
  {
    "kr": "갸",
    "en": "gya"
  },
  {
    "kr": "갹",
    "en": "gyag"
  },
  {
    "kr": "갺",
    "en": "gyagg"
  },
  {
    "kr": "갻",
    "en": "gyags"
  },
  {
    "kr": "갼",
    "en": "gyan"
  },
  {
    "kr": "갽",
    "en": "gyanj"
  },
  {
    "kr": "갾",
    "en": "gyanh"
  },
  {
    "kr": "갿",
    "en": "gyad"
  },
  {
    "kr": "걀",
    "en": "gyal"
  },
  {
    "kr": "걁",
    "en": "gyalg"
  },
  {
    "kr": "걂",
    "en": "gyalm"
  },
  {
    "kr": "걃",
    "en": "gyalb"
  },
  {
    "kr": "걄",
    "en": "gyals"
  },
  {
    "kr": "걅",
    "en": "gyalt"
  },
  {
    "kr": "걆",
    "en": "gyalp"
  },
  {
    "kr": "걇",
    "en": "gyalh"
  },
  {
    "kr": "걈",
    "en": "gyam"
  },
  {
    "kr": "걉",
    "en": "gyab"
  },
  {
    "kr": "걊",
    "en": "gyabs"
  },
  {
    "kr": "걋",
    "en": "gyas"
  },
  {
    "kr": "걌",
    "en": "gyass"
  },
  {
    "kr": "걍",
    "en": "gyang"
  },
  {
    "kr": "걎",
    "en": "gyaj"
  },
  {
    "kr": "걏",
    "en": "gyac"
  },
  {
    "kr": "걐",
    "en": "gyak"
  },
  {
    "kr": "걑",
    "en": "gyat"
  },
  {
    "kr": "걒",
    "en": "gyap"
  },
  {
    "kr": "걓",
    "en": "gyah"
  },
  {
    "kr": "걔",
    "en": "gyae"
  },
  {
    "kr": "걕",
    "en": "gyaeg"
  },
  {
    "kr": "걖",
    "en": "gyaegg"
  },
  {
    "kr": "걗",
    "en": "gyaegs"
  },
  {
    "kr": "걘",
    "en": "gyaen"
  },
  {
    "kr": "걙",
    "en": "gyaenj"
  },
  {
    "kr": "걚",
    "en": "gyaenh"
  },
  {
    "kr": "걛",
    "en": "gyaed"
  },
  {
    "kr": "걜",
    "en": "gyael"
  },
  {
    "kr": "걝",
    "en": "gyaelg"
  },
  {
    "kr": "걞",
    "en": "gyaelm"
  },
  {
    "kr": "걟",
    "en": "gyaelb"
  },
  {
    "kr": "걠",
    "en": "gyaels"
  },
  {
    "kr": "걡",
    "en": "gyaelt"
  },
  {
    "kr": "걢",
    "en": "gyaelp"
  },
  {
    "kr": "걣",
    "en": "gyaelh"
  },
  {
    "kr": "걤",
    "en": "gyaem"
  },
  {
    "kr": "걥",
    "en": "gyaeb"
  },
  {
    "kr": "걦",
    "en": "gyaebs"
  },
  {
    "kr": "걧",
    "en": "gyaes"
  },
  {
    "kr": "걨",
    "en": "gyaess"
  },
  {
    "kr": "걩",
    "en": "gyaeng"
  },
  {
    "kr": "걪",
    "en": "gyaej"
  },
  {
    "kr": "걫",
    "en": "gyaec"
  },
  {
    "kr": "걬",
    "en": "gyaek"
  },
  {
    "kr": "걭",
    "en": "gyaet"
  },
  {
    "kr": "걮",
    "en": "gyaep"
  },
  {
    "kr": "걯",
    "en": "gyaeh"
  },
  {
    "kr": "거",
    "en": "geo"
  },
  {
    "kr": "걱",
    "en": "geog"
  },
  {
    "kr": "걲",
    "en": "geogg"
  },
  {
    "kr": "걳",
    "en": "geogs"
  },
  {
    "kr": "건",
    "en": "geon"
  },
  {
    "kr": "걵",
    "en": "geonj"
  },
  {
    "kr": "걶",
    "en": "geonh"
  },
  {
    "kr": "걷",
    "en": "geod"
  },
  {
    "kr": "걸",
    "en": "geol"
  },
  {
    "kr": "걹",
    "en": "geolg"
  },
  {
    "kr": "걺",
    "en": "geolm"
  },
  {
    "kr": "걻",
    "en": "geolb"
  },
  {
    "kr": "걼",
    "en": "geols"
  },
  {
    "kr": "걽",
    "en": "geolt"
  },
  {
    "kr": "걾",
    "en": "geolp"
  },
  {
    "kr": "걿",
    "en": "geolh"
  },
  {
    "kr": "검",
    "en": "geom"
  },
  {
    "kr": "겁",
    "en": "geob"
  },
  {
    "kr": "겂",
    "en": "geobs"
  },
  {
    "kr": "것",
    "en": "geos"
  },
  {
    "kr": "겄",
    "en": "geoss"
  },
  {
    "kr": "겅",
    "en": "geong"
  },
  {
    "kr": "겆",
    "en": "geoj"
  },
  {
    "kr": "겇",
    "en": "geoc"
  },
  {
    "kr": "겈",
    "en": "geok"
  },
  {
    "kr": "겉",
    "en": "geot"
  },
  {
    "kr": "겊",
    "en": "geop"
  },
  {
    "kr": "겋",
    "en": "geoh"
  },
  {
    "kr": "게",
    "en": "ge"
  },
  {
    "kr": "겍",
    "en": "geg"
  },
  {
    "kr": "겎",
    "en": "gegg"
  },
  {
    "kr": "겏",
    "en": "gegs"
  },
  {
    "kr": "겐",
    "en": "gen"
  },
  {
    "kr": "겑",
    "en": "genj"
  },
  {
    "kr": "겒",
    "en": "genh"
  },
  {
    "kr": "겓",
    "en": "ged"
  },
  {
    "kr": "겔",
    "en": "gel"
  },
  {
    "kr": "겕",
    "en": "gelg"
  },
  {
    "kr": "겖",
    "en": "gelm"
  },
  {
    "kr": "겗",
    "en": "gelb"
  },
  {
    "kr": "겘",
    "en": "gels"
  },
  {
    "kr": "겙",
    "en": "gelt"
  },
  {
    "kr": "겚",
    "en": "gelp"
  },
  {
    "kr": "겛",
    "en": "gelh"
  },
  {
    "kr": "겜",
    "en": "gem"
  },
  {
    "kr": "겝",
    "en": "geb"
  },
  {
    "kr": "겞",
    "en": "gebs"
  },
  {
    "kr": "겟",
    "en": "ges"
  },
  {
    "kr": "겠",
    "en": "gess"
  },
  {
    "kr": "겡",
    "en": "geng"
  },
  {
    "kr": "겢",
    "en": "gej"
  },
  {
    "kr": "겣",
    "en": "gec"
  },
  {
    "kr": "겤",
    "en": "gek"
  },
  {
    "kr": "겥",
    "en": "get"
  },
  {
    "kr": "겦",
    "en": "gep"
  },
  {
    "kr": "겧",
    "en": "geh"
  },
  {
    "kr": "겨",
    "en": "gyeo"
  },
  {
    "kr": "격",
    "en": "gyeog"
  },
  {
    "kr": "겪",
    "en": "gyeogg"
  },
  {
    "kr": "겫",
    "en": "gyeogs"
  },
  {
    "kr": "견",
    "en": "gyeon"
  },
  {
    "kr": "겭",
    "en": "gyeonj"
  },
  {
    "kr": "겮",
    "en": "gyeonh"
  },
  {
    "kr": "겯",
    "en": "gyeod"
  },
  {
    "kr": "결",
    "en": "gyeol"
  },
  {
    "kr": "겱",
    "en": "gyeolg"
  },
  {
    "kr": "겲",
    "en": "gyeolm"
  },
  {
    "kr": "겳",
    "en": "gyeolb"
  },
  {
    "kr": "겴",
    "en": "gyeols"
  },
  {
    "kr": "겵",
    "en": "gyeolt"
  },
  {
    "kr": "겶",
    "en": "gyeolp"
  },
  {
    "kr": "겷",
    "en": "gyeolh"
  },
  {
    "kr": "겸",
    "en": "gyeom"
  },
  {
    "kr": "겹",
    "en": "gyeob"
  },
  {
    "kr": "겺",
    "en": "gyeobs"
  },
  {
    "kr": "겻",
    "en": "gyeos"
  },
  {
    "kr": "겼",
    "en": "gyeoss"
  },
  {
    "kr": "경",
    "en": "gyeong"
  },
  {
    "kr": "겾",
    "en": "gyeoj"
  },
  {
    "kr": "겿",
    "en": "gyeoc"
  },
  {
    "kr": "곀",
    "en": "gyeok"
  },
  {
    "kr": "곁",
    "en": "gyeot"
  },
  {
    "kr": "곂",
    "en": "gyeop"
  },
  {
    "kr": "곃",
    "en": "gyeoh"
  },
  {
    "kr": "계",
    "en": "gye"
  },
  {
    "kr": "곅",
    "en": "gyeg"
  },
  {
    "kr": "곆",
    "en": "gyegg"
  },
  {
    "kr": "곇",
    "en": "gyegs"
  },
  {
    "kr": "곈",
    "en": "gyen"
  },
  {
    "kr": "곉",
    "en": "gyenj"
  },
  {
    "kr": "곊",
    "en": "gyenh"
  },
  {
    "kr": "곋",
    "en": "gyed"
  },
  {
    "kr": "곌",
    "en": "gyel"
  },
  {
    "kr": "곍",
    "en": "gyelg"
  },
  {
    "kr": "곎",
    "en": "gyelm"
  },
  {
    "kr": "곏",
    "en": "gyelb"
  },
  {
    "kr": "곐",
    "en": "gyels"
  },
  {
    "kr": "곑",
    "en": "gyelt"
  },
  {
    "kr": "곒",
    "en": "gyelp"
  },
  {
    "kr": "곓",
    "en": "gyelh"
  },
  {
    "kr": "곔",
    "en": "gyem"
  },
  {
    "kr": "곕",
    "en": "gyeb"
  },
  {
    "kr": "곖",
    "en": "gyebs"
  },
  {
    "kr": "곗",
    "en": "gyes"
  },
  {
    "kr": "곘",
    "en": "gyess"
  },
  {
    "kr": "곙",
    "en": "gyeng"
  },
  {
    "kr": "곚",
    "en": "gyej"
  },
  {
    "kr": "곛",
    "en": "gyec"
  },
  {
    "kr": "곜",
    "en": "gyek"
  },
  {
    "kr": "곝",
    "en": "gyet"
  },
  {
    "kr": "곞",
    "en": "gyep"
  },
  {
    "kr": "곟",
    "en": "gyeh"
  },
  {
    "kr": "고",
    "en": "go"
  },
  {
    "kr": "곡",
    "en": "gog"
  },
  {
    "kr": "곢",
    "en": "gogg"
  },
  {
    "kr": "곣",
    "en": "gogs"
  },
  {
    "kr": "곤",
    "en": "gon"
  },
  {
    "kr": "곥",
    "en": "gonj"
  },
  {
    "kr": "곦",
    "en": "gonh"
  },
  {
    "kr": "곧",
    "en": "god"
  },
  {
    "kr": "골",
    "en": "gol"
  },
  {
    "kr": "곩",
    "en": "golg"
  },
  {
    "kr": "곪",
    "en": "golm"
  },
  {
    "kr": "곫",
    "en": "golb"
  },
  {
    "kr": "곬",
    "en": "gols"
  },
  {
    "kr": "곭",
    "en": "golt"
  },
  {
    "kr": "곮",
    "en": "golp"
  },
  {
    "kr": "곯",
    "en": "golh"
  },
  {
    "kr": "곰",
    "en": "gom"
  },
  {
    "kr": "곱",
    "en": "gob"
  },
  {
    "kr": "곲",
    "en": "gobs"
  },
  {
    "kr": "곳",
    "en": "gos"
  },
  {
    "kr": "곴",
    "en": "goss"
  },
  {
    "kr": "공",
    "en": "gong"
  },
  {
    "kr": "곶",
    "en": "goj"
  },
  {
    "kr": "곷",
    "en": "goc"
  },
  {
    "kr": "곸",
    "en": "gok"
  },
  {
    "kr": "곹",
    "en": "got"
  },
  {
    "kr": "곺",
    "en": "gop"
  },
  {
    "kr": "곻",
    "en": "goh"
  },
  {
    "kr": "과",
    "en": "gwa"
  },
  {
    "kr": "곽",
    "en": "gwag"
  },
  {
    "kr": "곾",
    "en": "gwagg"
  },
  {
    "kr": "곿",
    "en": "gwags"
  },
  {
    "kr": "관",
    "en": "gwan"
  },
  {
    "kr": "괁",
    "en": "gwanj"
  },
  {
    "kr": "괂",
    "en": "gwanh"
  },
  {
    "kr": "괃",
    "en": "gwad"
  },
  {
    "kr": "괄",
    "en": "gwal"
  },
  {
    "kr": "괅",
    "en": "gwalg"
  },
  {
    "kr": "괆",
    "en": "gwalm"
  },
  {
    "kr": "괇",
    "en": "gwalb"
  },
  {
    "kr": "괈",
    "en": "gwals"
  },
  {
    "kr": "괉",
    "en": "gwalt"
  },
  {
    "kr": "괊",
    "en": "gwalp"
  },
  {
    "kr": "괋",
    "en": "gwalh"
  },
  {
    "kr": "괌",
    "en": "gwam"
  },
  {
    "kr": "괍",
    "en": "gwab"
  },
  {
    "kr": "괎",
    "en": "gwabs"
  },
  {
    "kr": "괏",
    "en": "gwas"
  },
  {
    "kr": "괐",
    "en": "gwass"
  },
  {
    "kr": "광",
    "en": "gwang"
  },
  {
    "kr": "괒",
    "en": "gwaj"
  },
  {
    "kr": "괓",
    "en": "gwac"
  },
  {
    "kr": "괔",
    "en": "gwak"
  },
  {
    "kr": "괕",
    "en": "gwat"
  },
  {
    "kr": "괖",
    "en": "gwap"
  },
  {
    "kr": "괗",
    "en": "gwah"
  },
  {
    "kr": "괘",
    "en": "gwae"
  },
  {
    "kr": "괙",
    "en": "gwaeg"
  },
  {
    "kr": "괚",
    "en": "gwaegg"
  },
  {
    "kr": "괛",
    "en": "gwaegs"
  },
  {
    "kr": "괜",
    "en": "gwaen"
  },
  {
    "kr": "괝",
    "en": "gwaenj"
  },
  {
    "kr": "괞",
    "en": "gwaenh"
  },
  {
    "kr": "괟",
    "en": "gwaed"
  },
  {
    "kr": "괠",
    "en": "gwael"
  },
  {
    "kr": "괡",
    "en": "gwaelg"
  },
  {
    "kr": "괢",
    "en": "gwaelm"
  },
  {
    "kr": "괣",
    "en": "gwaelb"
  },
  {
    "kr": "괤",
    "en": "gwaels"
  },
  {
    "kr": "괥",
    "en": "gwaelt"
  },
  {
    "kr": "괦",
    "en": "gwaelp"
  },
  {
    "kr": "괧",
    "en": "gwaelh"
  },
  {
    "kr": "괨",
    "en": "gwaem"
  },
  {
    "kr": "괩",
    "en": "gwaeb"
  },
  {
    "kr": "괪",
    "en": "gwaebs"
  },
  {
    "kr": "괫",
    "en": "gwaes"
  },
  {
    "kr": "괬",
    "en": "gwaess"
  },
  {
    "kr": "괭",
    "en": "gwaeng"
  },
  {
    "kr": "괮",
    "en": "gwaej"
  },
  {
    "kr": "괯",
    "en": "gwaec"
  },
  {
    "kr": "괰",
    "en": "gwaek"
  },
  {
    "kr": "괱",
    "en": "gwaet"
  },
  {
    "kr": "괲",
    "en": "gwaep"
  },
  {
    "kr": "괳",
    "en": "gwaeh"
  },
  {
    "kr": "괴",
    "en": "goe"
  },
  {
    "kr": "괵",
    "en": "goeg"
  },
  {
    "kr": "괶",
    "en": "goegg"
  },
  {
    "kr": "괷",
    "en": "goegs"
  },
  {
    "kr": "괸",
    "en": "goen"
  },
  {
    "kr": "괹",
    "en": "goenj"
  },
  {
    "kr": "괺",
    "en": "goenh"
  },
  {
    "kr": "괻",
    "en": "goed"
  },
  {
    "kr": "괼",
    "en": "goel"
  },
  {
    "kr": "괽",
    "en": "goelg"
  },
  {
    "kr": "괾",
    "en": "goelm"
  },
  {
    "kr": "괿",
    "en": "goelb"
  },
  {
    "kr": "굀",
    "en": "goels"
  },
  {
    "kr": "굁",
    "en": "goelt"
  },
  {
    "kr": "굂",
    "en": "goelp"
  },
  {
    "kr": "굃",
    "en": "goelh"
  },
  {
    "kr": "굄",
    "en": "goem"
  },
  {
    "kr": "굅",
    "en": "goeb"
  },
  {
    "kr": "굆",
    "en": "goebs"
  },
  {
    "kr": "굇",
    "en": "goes"
  },
  {
    "kr": "굈",
    "en": "goess"
  },
  {
    "kr": "굉",
    "en": "goeng"
  },
  {
    "kr": "굊",
    "en": "goej"
  },
  {
    "kr": "굋",
    "en": "goec"
  },
  {
    "kr": "굌",
    "en": "goek"
  },
  {
    "kr": "굍",
    "en": "goet"
  },
  {
    "kr": "굎",
    "en": "goep"
  },
  {
    "kr": "굏",
    "en": "goeh"
  },
  {
    "kr": "교",
    "en": "gyo"
  },
  {
    "kr": "굑",
    "en": "gyog"
  },
  {
    "kr": "굒",
    "en": "gyogg"
  },
  {
    "kr": "굓",
    "en": "gyogs"
  },
  {
    "kr": "굔",
    "en": "gyon"
  },
  {
    "kr": "굕",
    "en": "gyonj"
  },
  {
    "kr": "굖",
    "en": "gyonh"
  },
  {
    "kr": "굗",
    "en": "gyod"
  },
  {
    "kr": "굘",
    "en": "gyol"
  },
  {
    "kr": "굙",
    "en": "gyolg"
  },
  {
    "kr": "굚",
    "en": "gyolm"
  },
  {
    "kr": "굛",
    "en": "gyolb"
  },
  {
    "kr": "굜",
    "en": "gyols"
  },
  {
    "kr": "굝",
    "en": "gyolt"
  },
  {
    "kr": "굞",
    "en": "gyolp"
  },
  {
    "kr": "굟",
    "en": "gyolh"
  },
  {
    "kr": "굠",
    "en": "gyom"
  },
  {
    "kr": "굡",
    "en": "gyob"
  },
  {
    "kr": "굢",
    "en": "gyobs"
  },
  {
    "kr": "굣",
    "en": "gyos"
  },
  {
    "kr": "굤",
    "en": "gyoss"
  },
  {
    "kr": "굥",
    "en": "gyong"
  },
  {
    "kr": "굦",
    "en": "gyoj"
  },
  {
    "kr": "굧",
    "en": "gyoc"
  },
  {
    "kr": "굨",
    "en": "gyok"
  },
  {
    "kr": "굩",
    "en": "gyot"
  },
  {
    "kr": "굪",
    "en": "gyop"
  },
  {
    "kr": "굫",
    "en": "gyoh"
  },
  {
    "kr": "구",
    "en": "gu"
  },
  {
    "kr": "국",
    "en": "gug"
  },
  {
    "kr": "굮",
    "en": "gugg"
  },
  {
    "kr": "굯",
    "en": "gugs"
  },
  {
    "kr": "군",
    "en": "gun"
  },
  {
    "kr": "굱",
    "en": "gunj"
  },
  {
    "kr": "굲",
    "en": "gunh"
  },
  {
    "kr": "굳",
    "en": "gud"
  },
  {
    "kr": "굴",
    "en": "gul"
  },
  {
    "kr": "굵",
    "en": "gulg"
  },
  {
    "kr": "굶",
    "en": "gulm"
  },
  {
    "kr": "굷",
    "en": "gulb"
  },
  {
    "kr": "굸",
    "en": "guls"
  },
  {
    "kr": "굹",
    "en": "gult"
  },
  {
    "kr": "굺",
    "en": "gulp"
  },
  {
    "kr": "굻",
    "en": "gulh"
  },
  {
    "kr": "굼",
    "en": "gum"
  },
  {
    "kr": "굽",
    "en": "gub"
  },
  {
    "kr": "굾",
    "en": "gubs"
  },
  {
    "kr": "굿",
    "en": "gus"
  },
  {
    "kr": "궀",
    "en": "guss"
  },
  {
    "kr": "궁",
    "en": "gung"
  },
  {
    "kr": "궂",
    "en": "guj"
  },
  {
    "kr": "궃",
    "en": "guc"
  },
  {
    "kr": "궄",
    "en": "guk"
  },
  {
    "kr": "궅",
    "en": "gut"
  },
  {
    "kr": "궆",
    "en": "gup"
  },
  {
    "kr": "궇",
    "en": "guh"
  },
  {
    "kr": "궈",
    "en": "gweo"
  },
  {
    "kr": "궉",
    "en": "gweog"
  },
  {
    "kr": "궊",
    "en": "gweogg"
  },
  {
    "kr": "궋",
    "en": "gweogs"
  },
  {
    "kr": "권",
    "en": "gweon"
  },
  {
    "kr": "궍",
    "en": "gweonj"
  },
  {
    "kr": "궎",
    "en": "gweonh"
  },
  {
    "kr": "궏",
    "en": "gweod"
  },
  {
    "kr": "궐",
    "en": "gweol"
  },
  {
    "kr": "궑",
    "en": "gweolg"
  },
  {
    "kr": "궒",
    "en": "gweolm"
  },
  {
    "kr": "궓",
    "en": "gweolb"
  },
  {
    "kr": "궔",
    "en": "gweols"
  },
  {
    "kr": "궕",
    "en": "gweolt"
  },
  {
    "kr": "궖",
    "en": "gweolp"
  },
  {
    "kr": "궗",
    "en": "gweolh"
  },
  {
    "kr": "궘",
    "en": "gweom"
  },
  {
    "kr": "궙",
    "en": "gweob"
  },
  {
    "kr": "궚",
    "en": "gweobs"
  },
  {
    "kr": "궛",
    "en": "gweos"
  },
  {
    "kr": "궜",
    "en": "gweoss"
  },
  {
    "kr": "궝",
    "en": "gweong"
  },
  {
    "kr": "궞",
    "en": "gweoj"
  },
  {
    "kr": "궟",
    "en": "gweoc"
  },
  {
    "kr": "궠",
    "en": "gweok"
  },
  {
    "kr": "궡",
    "en": "gweot"
  },
  {
    "kr": "궢",
    "en": "gweop"
  },
  {
    "kr": "궣",
    "en": "gweoh"
  },
  {
    "kr": "궤",
    "en": "gwe"
  },
  {
    "kr": "궥",
    "en": "gweg"
  },
  {
    "kr": "궦",
    "en": "gwegg"
  },
  {
    "kr": "궧",
    "en": "gwegs"
  },
  {
    "kr": "궨",
    "en": "gwen"
  },
  {
    "kr": "궩",
    "en": "gwenj"
  },
  {
    "kr": "궪",
    "en": "gwenh"
  },
  {
    "kr": "궫",
    "en": "gwed"
  },
  {
    "kr": "궬",
    "en": "gwel"
  },
  {
    "kr": "궭",
    "en": "gwelg"
  },
  {
    "kr": "궮",
    "en": "gwelm"
  },
  {
    "kr": "궯",
    "en": "gwelb"
  },
  {
    "kr": "궰",
    "en": "gwels"
  },
  {
    "kr": "궱",
    "en": "gwelt"
  },
  {
    "kr": "궲",
    "en": "gwelp"
  },
  {
    "kr": "궳",
    "en": "gwelh"
  },
  {
    "kr": "궴",
    "en": "gwem"
  },
  {
    "kr": "궵",
    "en": "gweb"
  },
  {
    "kr": "궶",
    "en": "gwebs"
  },
  {
    "kr": "궷",
    "en": "gwes"
  },
  {
    "kr": "궸",
    "en": "gwess"
  },
  {
    "kr": "궹",
    "en": "gweng"
  },
  {
    "kr": "궺",
    "en": "gwej"
  },
  {
    "kr": "궻",
    "en": "gwec"
  },
  {
    "kr": "궼",
    "en": "gwek"
  },
  {
    "kr": "궽",
    "en": "gwet"
  },
  {
    "kr": "궾",
    "en": "gwep"
  },
  {
    "kr": "궿",
    "en": "gweh"
  },
  {
    "kr": "귀",
    "en": "gwi"
  },
  {
    "kr": "귁",
    "en": "gwig"
  },
  {
    "kr": "귂",
    "en": "gwigg"
  },
  {
    "kr": "귃",
    "en": "gwigs"
  },
  {
    "kr": "귄",
    "en": "gwin"
  },
  {
    "kr": "귅",
    "en": "gwinj"
  },
  {
    "kr": "귆",
    "en": "gwinh"
  },
  {
    "kr": "귇",
    "en": "gwid"
  },
  {
    "kr": "귈",
    "en": "gwil"
  },
  {
    "kr": "귉",
    "en": "gwilg"
  },
  {
    "kr": "귊",
    "en": "gwilm"
  },
  {
    "kr": "귋",
    "en": "gwilb"
  },
  {
    "kr": "귌",
    "en": "gwils"
  },
  {
    "kr": "귍",
    "en": "gwilt"
  },
  {
    "kr": "귎",
    "en": "gwilp"
  },
  {
    "kr": "귏",
    "en": "gwilh"
  },
  {
    "kr": "귐",
    "en": "gwim"
  },
  {
    "kr": "귑",
    "en": "gwib"
  },
  {
    "kr": "귒",
    "en": "gwibs"
  },
  {
    "kr": "귓",
    "en": "gwis"
  },
  {
    "kr": "귔",
    "en": "gwiss"
  },
  {
    "kr": "귕",
    "en": "gwing"
  },
  {
    "kr": "귖",
    "en": "gwij"
  },
  {
    "kr": "귗",
    "en": "gwic"
  },
  {
    "kr": "귘",
    "en": "gwik"
  },
  {
    "kr": "귙",
    "en": "gwit"
  },
  {
    "kr": "귚",
    "en": "gwip"
  },
  {
    "kr": "귛",
    "en": "gwih"
  },
  {
    "kr": "규",
    "en": "gyu"
  },
  {
    "kr": "귝",
    "en": "gyug"
  },
  {
    "kr": "귞",
    "en": "gyugg"
  },
  {
    "kr": "귟",
    "en": "gyugs"
  },
  {
    "kr": "균",
    "en": "gyun"
  },
  {
    "kr": "귡",
    "en": "gyunj"
  },
  {
    "kr": "귢",
    "en": "gyunh"
  },
  {
    "kr": "귣",
    "en": "gyud"
  },
  {
    "kr": "귤",
    "en": "gyul"
  },
  {
    "kr": "귥",
    "en": "gyulg"
  },
  {
    "kr": "귦",
    "en": "gyulm"
  },
  {
    "kr": "귧",
    "en": "gyulb"
  },
  {
    "kr": "귨",
    "en": "gyuls"
  },
  {
    "kr": "귩",
    "en": "gyult"
  },
  {
    "kr": "귪",
    "en": "gyulp"
  },
  {
    "kr": "귫",
    "en": "gyulh"
  },
  {
    "kr": "귬",
    "en": "gyum"
  },
  {
    "kr": "귭",
    "en": "gyub"
  },
  {
    "kr": "귮",
    "en": "gyubs"
  },
  {
    "kr": "귯",
    "en": "gyus"
  },
  {
    "kr": "귰",
    "en": "gyuss"
  },
  {
    "kr": "귱",
    "en": "gyung"
  },
  {
    "kr": "귲",
    "en": "gyuj"
  },
  {
    "kr": "귳",
    "en": "gyuc"
  },
  {
    "kr": "귴",
    "en": "gyuk"
  },
  {
    "kr": "귵",
    "en": "gyut"
  },
  {
    "kr": "귶",
    "en": "gyup"
  },
  {
    "kr": "귷",
    "en": "gyuh"
  },
  {
    "kr": "그",
    "en": "geu"
  },
  {
    "kr": "극",
    "en": "geug"
  },
  {
    "kr": "귺",
    "en": "geugg"
  },
  {
    "kr": "귻",
    "en": "geugs"
  },
  {
    "kr": "근",
    "en": "geun"
  },
  {
    "kr": "귽",
    "en": "geunj"
  },
  {
    "kr": "귾",
    "en": "geunh"
  },
  {
    "kr": "귿",
    "en": "geud"
  },
  {
    "kr": "글",
    "en": "geul"
  },
  {
    "kr": "긁",
    "en": "geulg"
  },
  {
    "kr": "긂",
    "en": "geulm"
  },
  {
    "kr": "긃",
    "en": "geulb"
  },
  {
    "kr": "긄",
    "en": "geuls"
  },
  {
    "kr": "긅",
    "en": "geult"
  },
  {
    "kr": "긆",
    "en": "geulp"
  },
  {
    "kr": "긇",
    "en": "geulh"
  },
  {
    "kr": "금",
    "en": "geum"
  },
  {
    "kr": "급",
    "en": "geub"
  },
  {
    "kr": "긊",
    "en": "geubs"
  },
  {
    "kr": "긋",
    "en": "geus"
  },
  {
    "kr": "긌",
    "en": "geuss"
  },
  {
    "kr": "긍",
    "en": "geung"
  },
  {
    "kr": "긎",
    "en": "geuj"
  },
  {
    "kr": "긏",
    "en": "geuc"
  },
  {
    "kr": "긐",
    "en": "geuk"
  },
  {
    "kr": "긑",
    "en": "geut"
  },
  {
    "kr": "긒",
    "en": "geup"
  },
  {
    "kr": "긓",
    "en": "geuh"
  },
  {
    "kr": "긔",
    "en": "gyi"
  },
  {
    "kr": "긕",
    "en": "gyig"
  },
  {
    "kr": "긖",
    "en": "gyigg"
  },
  {
    "kr": "긗",
    "en": "gyigs"
  },
  {
    "kr": "긘",
    "en": "gyin"
  },
  {
    "kr": "긙",
    "en": "gyinj"
  },
  {
    "kr": "긚",
    "en": "gyinh"
  },
  {
    "kr": "긛",
    "en": "gyid"
  },
  {
    "kr": "긜",
    "en": "gyil"
  },
  {
    "kr": "긝",
    "en": "gyilg"
  },
  {
    "kr": "긞",
    "en": "gyilm"
  },
  {
    "kr": "긟",
    "en": "gyilb"
  },
  {
    "kr": "긠",
    "en": "gyils"
  },
  {
    "kr": "긡",
    "en": "gyilt"
  },
  {
    "kr": "긢",
    "en": "gyilp"
  },
  {
    "kr": "긣",
    "en": "gyilh"
  },
  {
    "kr": "긤",
    "en": "gyim"
  },
  {
    "kr": "긥",
    "en": "gyib"
  },
  {
    "kr": "긦",
    "en": "gyibs"
  },
  {
    "kr": "긧",
    "en": "gyis"
  },
  {
    "kr": "긨",
    "en": "gyiss"
  },
  {
    "kr": "긩",
    "en": "gying"
  },
  {
    "kr": "긪",
    "en": "gyij"
  },
  {
    "kr": "긫",
    "en": "gyic"
  },
  {
    "kr": "긬",
    "en": "gyik"
  },
  {
    "kr": "긭",
    "en": "gyit"
  },
  {
    "kr": "긮",
    "en": "gyip"
  },
  {
    "kr": "긯",
    "en": "gyih"
  },
  {
    "kr": "기",
    "en": "gi"
  },
  {
    "kr": "긱",
    "en": "gig"
  },
  {
    "kr": "긲",
    "en": "gigg"
  },
  {
    "kr": "긳",
    "en": "gigs"
  },
  {
    "kr": "긴",
    "en": "gin"
  },
  {
    "kr": "긵",
    "en": "ginj"
  },
  {
    "kr": "긶",
    "en": "ginh"
  },
  {
    "kr": "긷",
    "en": "gid"
  },
  {
    "kr": "길",
    "en": "gil"
  },
  {
    "kr": "긹",
    "en": "gilg"
  },
  {
    "kr": "긺",
    "en": "gilm"
  },
  {
    "kr": "긻",
    "en": "gilb"
  },
  {
    "kr": "긼",
    "en": "gils"
  },
  {
    "kr": "긽",
    "en": "gilt"
  },
  {
    "kr": "긾",
    "en": "gilp"
  },
  {
    "kr": "긿",
    "en": "gilh"
  },
  {
    "kr": "김",
    "en": "gim"
  },
  {
    "kr": "깁",
    "en": "gib"
  },
  {
    "kr": "깂",
    "en": "gibs"
  },
  {
    "kr": "깃",
    "en": "gis"
  },
  {
    "kr": "깄",
    "en": "giss"
  },
  {
    "kr": "깅",
    "en": "ging"
  },
  {
    "kr": "깆",
    "en": "gij"
  },
  {
    "kr": "깇",
    "en": "gic"
  },
  {
    "kr": "깈",
    "en": "gik"
  },
  {
    "kr": "깉",
    "en": "git"
  },
  {
    "kr": "깊",
    "en": "gip"
  },
  {
    "kr": "깋",
    "en": "gih"
  },
  {
    "kr": "까",
    "en": "gga"
  },
  {
    "kr": "깍",
    "en": "ggag"
  },
  {
    "kr": "깎",
    "en": "ggagg"
  },
  {
    "kr": "깏",
    "en": "ggags"
  },
  {
    "kr": "깐",
    "en": "ggan"
  },
  {
    "kr": "깑",
    "en": "gganj"
  },
  {
    "kr": "깒",
    "en": "gganh"
  },
  {
    "kr": "깓",
    "en": "ggad"
  },
  {
    "kr": "깔",
    "en": "ggal"
  },
  {
    "kr": "깕",
    "en": "ggalg"
  },
  {
    "kr": "깖",
    "en": "ggalm"
  },
  {
    "kr": "깗",
    "en": "ggalb"
  },
  {
    "kr": "깘",
    "en": "ggals"
  },
  {
    "kr": "깙",
    "en": "ggalt"
  },
  {
    "kr": "깚",
    "en": "ggalp"
  },
  {
    "kr": "깛",
    "en": "ggalh"
  },
  {
    "kr": "깜",
    "en": "ggam"
  },
  {
    "kr": "깝",
    "en": "ggab"
  },
  {
    "kr": "깞",
    "en": "ggabs"
  },
  {
    "kr": "깟",
    "en": "ggas"
  },
  {
    "kr": "깠",
    "en": "ggass"
  },
  {
    "kr": "깡",
    "en": "ggang"
  },
  {
    "kr": "깢",
    "en": "ggaj"
  },
  {
    "kr": "깣",
    "en": "ggac"
  },
  {
    "kr": "깤",
    "en": "ggak"
  },
  {
    "kr": "깥",
    "en": "ggat"
  },
  {
    "kr": "깦",
    "en": "ggap"
  },
  {
    "kr": "깧",
    "en": "ggah"
  },
  {
    "kr": "깨",
    "en": "ggae"
  },
  {
    "kr": "깩",
    "en": "ggaeg"
  },
  {
    "kr": "깪",
    "en": "ggaegg"
  },
  {
    "kr": "깫",
    "en": "ggaegs"
  },
  {
    "kr": "깬",
    "en": "ggaen"
  },
  {
    "kr": "깭",
    "en": "ggaenj"
  },
  {
    "kr": "깮",
    "en": "ggaenh"
  },
  {
    "kr": "깯",
    "en": "ggaed"
  },
  {
    "kr": "깰",
    "en": "ggael"
  },
  {
    "kr": "깱",
    "en": "ggaelg"
  },
  {
    "kr": "깲",
    "en": "ggaelm"
  },
  {
    "kr": "깳",
    "en": "ggaelb"
  },
  {
    "kr": "깴",
    "en": "ggaels"
  },
  {
    "kr": "깵",
    "en": "ggaelt"
  },
  {
    "kr": "깶",
    "en": "ggaelp"
  },
  {
    "kr": "깷",
    "en": "ggaelh"
  },
  {
    "kr": "깸",
    "en": "ggaem"
  },
  {
    "kr": "깹",
    "en": "ggaeb"
  },
  {
    "kr": "깺",
    "en": "ggaebs"
  },
  {
    "kr": "깻",
    "en": "ggaes"
  },
  {
    "kr": "깼",
    "en": "ggaess"
  },
  {
    "kr": "깽",
    "en": "ggaeng"
  },
  {
    "kr": "깾",
    "en": "ggaej"
  },
  {
    "kr": "깿",
    "en": "ggaec"
  },
  {
    "kr": "꺀",
    "en": "ggaek"
  },
  {
    "kr": "꺁",
    "en": "ggaet"
  },
  {
    "kr": "꺂",
    "en": "ggaep"
  },
  {
    "kr": "꺃",
    "en": "ggaeh"
  },
  {
    "kr": "꺄",
    "en": "ggya"
  },
  {
    "kr": "꺅",
    "en": "ggyag"
  },
  {
    "kr": "꺆",
    "en": "ggyagg"
  },
  {
    "kr": "꺇",
    "en": "ggyags"
  },
  {
    "kr": "꺈",
    "en": "ggyan"
  },
  {
    "kr": "꺉",
    "en": "ggyanj"
  },
  {
    "kr": "꺊",
    "en": "ggyanh"
  },
  {
    "kr": "꺋",
    "en": "ggyad"
  },
  {
    "kr": "꺌",
    "en": "ggyal"
  },
  {
    "kr": "꺍",
    "en": "ggyalg"
  },
  {
    "kr": "꺎",
    "en": "ggyalm"
  },
  {
    "kr": "꺏",
    "en": "ggyalb"
  },
  {
    "kr": "꺐",
    "en": "ggyals"
  },
  {
    "kr": "꺑",
    "en": "ggyalt"
  },
  {
    "kr": "꺒",
    "en": "ggyalp"
  },
  {
    "kr": "꺓",
    "en": "ggyalh"
  },
  {
    "kr": "꺔",
    "en": "ggyam"
  },
  {
    "kr": "꺕",
    "en": "ggyab"
  },
  {
    "kr": "꺖",
    "en": "ggyabs"
  },
  {
    "kr": "꺗",
    "en": "ggyas"
  },
  {
    "kr": "꺘",
    "en": "ggyass"
  },
  {
    "kr": "꺙",
    "en": "ggyang"
  },
  {
    "kr": "꺚",
    "en": "ggyaj"
  },
  {
    "kr": "꺛",
    "en": "ggyac"
  },
  {
    "kr": "꺜",
    "en": "ggyak"
  },
  {
    "kr": "꺝",
    "en": "ggyat"
  },
  {
    "kr": "꺞",
    "en": "ggyap"
  },
  {
    "kr": "꺟",
    "en": "ggyah"
  },
  {
    "kr": "꺠",
    "en": "ggyae"
  },
  {
    "kr": "꺡",
    "en": "ggyaeg"
  },
  {
    "kr": "꺢",
    "en": "ggyaegg"
  },
  {
    "kr": "꺣",
    "en": "ggyaegs"
  },
  {
    "kr": "꺤",
    "en": "ggyaen"
  },
  {
    "kr": "꺥",
    "en": "ggyaenj"
  },
  {
    "kr": "꺦",
    "en": "ggyaenh"
  },
  {
    "kr": "꺧",
    "en": "ggyaed"
  },
  {
    "kr": "꺨",
    "en": "ggyael"
  },
  {
    "kr": "꺩",
    "en": "ggyaelg"
  },
  {
    "kr": "꺪",
    "en": "ggyaelm"
  },
  {
    "kr": "꺫",
    "en": "ggyaelb"
  },
  {
    "kr": "꺬",
    "en": "ggyaels"
  },
  {
    "kr": "꺭",
    "en": "ggyaelt"
  },
  {
    "kr": "꺮",
    "en": "ggyaelp"
  },
  {
    "kr": "꺯",
    "en": "ggyaelh"
  },
  {
    "kr": "꺰",
    "en": "ggyaem"
  },
  {
    "kr": "꺱",
    "en": "ggyaeb"
  },
  {
    "kr": "꺲",
    "en": "ggyaebs"
  },
  {
    "kr": "꺳",
    "en": "ggyaes"
  },
  {
    "kr": "꺴",
    "en": "ggyaess"
  },
  {
    "kr": "꺵",
    "en": "ggyaeng"
  },
  {
    "kr": "꺶",
    "en": "ggyaej"
  },
  {
    "kr": "꺷",
    "en": "ggyaec"
  },
  {
    "kr": "꺸",
    "en": "ggyaek"
  },
  {
    "kr": "꺹",
    "en": "ggyaet"
  },
  {
    "kr": "꺺",
    "en": "ggyaep"
  },
  {
    "kr": "꺻",
    "en": "ggyaeh"
  },
  {
    "kr": "꺼",
    "en": "ggeo"
  },
  {
    "kr": "꺽",
    "en": "ggeog"
  },
  {
    "kr": "꺾",
    "en": "ggeogg"
  },
  {
    "kr": "꺿",
    "en": "ggeogs"
  },
  {
    "kr": "껀",
    "en": "ggeon"
  },
  {
    "kr": "껁",
    "en": "ggeonj"
  },
  {
    "kr": "껂",
    "en": "ggeonh"
  },
  {
    "kr": "껃",
    "en": "ggeod"
  },
  {
    "kr": "껄",
    "en": "ggeol"
  },
  {
    "kr": "껅",
    "en": "ggeolg"
  },
  {
    "kr": "껆",
    "en": "ggeolm"
  },
  {
    "kr": "껇",
    "en": "ggeolb"
  },
  {
    "kr": "껈",
    "en": "ggeols"
  },
  {
    "kr": "껉",
    "en": "ggeolt"
  },
  {
    "kr": "껊",
    "en": "ggeolp"
  },
  {
    "kr": "껋",
    "en": "ggeolh"
  },
  {
    "kr": "껌",
    "en": "ggeom"
  },
  {
    "kr": "껍",
    "en": "ggeob"
  },
  {
    "kr": "껎",
    "en": "ggeobs"
  },
  {
    "kr": "껏",
    "en": "ggeos"
  },
  {
    "kr": "껐",
    "en": "ggeoss"
  },
  {
    "kr": "껑",
    "en": "ggeong"
  },
  {
    "kr": "껒",
    "en": "ggeoj"
  },
  {
    "kr": "껓",
    "en": "ggeoc"
  },
  {
    "kr": "껔",
    "en": "ggeok"
  },
  {
    "kr": "껕",
    "en": "ggeot"
  },
  {
    "kr": "껖",
    "en": "ggeop"
  },
  {
    "kr": "껗",
    "en": "ggeoh"
  },
  {
    "kr": "께",
    "en": "gge"
  },
  {
    "kr": "껙",
    "en": "ggeg"
  },
  {
    "kr": "껚",
    "en": "ggegg"
  },
  {
    "kr": "껛",
    "en": "ggegs"
  },
  {
    "kr": "껜",
    "en": "ggen"
  },
  {
    "kr": "껝",
    "en": "ggenj"
  },
  {
    "kr": "껞",
    "en": "ggenh"
  },
  {
    "kr": "껟",
    "en": "gged"
  },
  {
    "kr": "껠",
    "en": "ggel"
  },
  {
    "kr": "껡",
    "en": "ggelg"
  },
  {
    "kr": "껢",
    "en": "ggelm"
  },
  {
    "kr": "껣",
    "en": "ggelb"
  },
  {
    "kr": "껤",
    "en": "ggels"
  },
  {
    "kr": "껥",
    "en": "ggelt"
  },
  {
    "kr": "껦",
    "en": "ggelp"
  },
  {
    "kr": "껧",
    "en": "ggelh"
  },
  {
    "kr": "껨",
    "en": "ggem"
  },
  {
    "kr": "껩",
    "en": "ggeb"
  },
  {
    "kr": "껪",
    "en": "ggebs"
  },
  {
    "kr": "껫",
    "en": "gges"
  },
  {
    "kr": "껬",
    "en": "ggess"
  },
  {
    "kr": "껭",
    "en": "ggeng"
  },
  {
    "kr": "껮",
    "en": "ggej"
  },
  {
    "kr": "껯",
    "en": "ggec"
  },
  {
    "kr": "껰",
    "en": "ggek"
  },
  {
    "kr": "껱",
    "en": "gget"
  },
  {
    "kr": "껲",
    "en": "ggep"
  },
  {
    "kr": "껳",
    "en": "ggeh"
  },
  {
    "kr": "껴",
    "en": "ggyeo"
  },
  {
    "kr": "껵",
    "en": "ggyeog"
  },
  {
    "kr": "껶",
    "en": "ggyeogg"
  },
  {
    "kr": "껷",
    "en": "ggyeogs"
  },
  {
    "kr": "껸",
    "en": "ggyeon"
  },
  {
    "kr": "껹",
    "en": "ggyeonj"
  },
  {
    "kr": "껺",
    "en": "ggyeonh"
  },
  {
    "kr": "껻",
    "en": "ggyeod"
  },
  {
    "kr": "껼",
    "en": "ggyeol"
  },
  {
    "kr": "껽",
    "en": "ggyeolg"
  },
  {
    "kr": "껾",
    "en": "ggyeolm"
  },
  {
    "kr": "껿",
    "en": "ggyeolb"
  },
  {
    "kr": "꼀",
    "en": "ggyeols"
  },
  {
    "kr": "꼁",
    "en": "ggyeolt"
  },
  {
    "kr": "꼂",
    "en": "ggyeolp"
  },
  {
    "kr": "꼃",
    "en": "ggyeolh"
  },
  {
    "kr": "꼄",
    "en": "ggyeom"
  },
  {
    "kr": "꼅",
    "en": "ggyeob"
  },
  {
    "kr": "꼆",
    "en": "ggyeobs"
  },
  {
    "kr": "꼇",
    "en": "ggyeos"
  },
  {
    "kr": "꼈",
    "en": "ggyeoss"
  },
  {
    "kr": "꼉",
    "en": "ggyeong"
  },
  {
    "kr": "꼊",
    "en": "ggyeoj"
  },
  {
    "kr": "꼋",
    "en": "ggyeoc"
  },
  {
    "kr": "꼌",
    "en": "ggyeok"
  },
  {
    "kr": "꼍",
    "en": "ggyeot"
  },
  {
    "kr": "꼎",
    "en": "ggyeop"
  },
  {
    "kr": "꼏",
    "en": "ggyeoh"
  },
  {
    "kr": "꼐",
    "en": "ggye"
  },
  {
    "kr": "꼑",
    "en": "ggyeg"
  },
  {
    "kr": "꼒",
    "en": "ggyegg"
  },
  {
    "kr": "꼓",
    "en": "ggyegs"
  },
  {
    "kr": "꼔",
    "en": "ggyen"
  },
  {
    "kr": "꼕",
    "en": "ggyenj"
  },
  {
    "kr": "꼖",
    "en": "ggyenh"
  },
  {
    "kr": "꼗",
    "en": "ggyed"
  },
  {
    "kr": "꼘",
    "en": "ggyel"
  },
  {
    "kr": "꼙",
    "en": "ggyelg"
  },
  {
    "kr": "꼚",
    "en": "ggyelm"
  },
  {
    "kr": "꼛",
    "en": "ggyelb"
  },
  {
    "kr": "꼜",
    "en": "ggyels"
  },
  {
    "kr": "꼝",
    "en": "ggyelt"
  },
  {
    "kr": "꼞",
    "en": "ggyelp"
  },
  {
    "kr": "꼟",
    "en": "ggyelh"
  },
  {
    "kr": "꼠",
    "en": "ggyem"
  },
  {
    "kr": "꼡",
    "en": "ggyeb"
  },
  {
    "kr": "꼢",
    "en": "ggyebs"
  },
  {
    "kr": "꼣",
    "en": "ggyes"
  },
  {
    "kr": "꼤",
    "en": "ggyess"
  },
  {
    "kr": "꼥",
    "en": "ggyeng"
  },
  {
    "kr": "꼦",
    "en": "ggyej"
  },
  {
    "kr": "꼧",
    "en": "ggyec"
  },
  {
    "kr": "꼨",
    "en": "ggyek"
  },
  {
    "kr": "꼩",
    "en": "ggyet"
  },
  {
    "kr": "꼪",
    "en": "ggyep"
  },
  {
    "kr": "꼫",
    "en": "ggyeh"
  },
  {
    "kr": "꼬",
    "en": "ggo"
  },
  {
    "kr": "꼭",
    "en": "ggog"
  },
  {
    "kr": "꼮",
    "en": "ggogg"
  },
  {
    "kr": "꼯",
    "en": "ggogs"
  },
  {
    "kr": "꼰",
    "en": "ggon"
  },
  {
    "kr": "꼱",
    "en": "ggonj"
  },
  {
    "kr": "꼲",
    "en": "ggonh"
  },
  {
    "kr": "꼳",
    "en": "ggod"
  },
  {
    "kr": "꼴",
    "en": "ggol"
  },
  {
    "kr": "꼵",
    "en": "ggolg"
  },
  {
    "kr": "꼶",
    "en": "ggolm"
  },
  {
    "kr": "꼷",
    "en": "ggolb"
  },
  {
    "kr": "꼸",
    "en": "ggols"
  },
  {
    "kr": "꼹",
    "en": "ggolt"
  },
  {
    "kr": "꼺",
    "en": "ggolp"
  },
  {
    "kr": "꼻",
    "en": "ggolh"
  },
  {
    "kr": "꼼",
    "en": "ggom"
  },
  {
    "kr": "꼽",
    "en": "ggob"
  },
  {
    "kr": "꼾",
    "en": "ggobs"
  },
  {
    "kr": "꼿",
    "en": "ggos"
  },
  {
    "kr": "꽀",
    "en": "ggoss"
  },
  {
    "kr": "꽁",
    "en": "ggong"
  },
  {
    "kr": "꽂",
    "en": "ggoj"
  },
  {
    "kr": "꽃",
    "en": "ggoc"
  },
  {
    "kr": "꽄",
    "en": "ggok"
  },
  {
    "kr": "꽅",
    "en": "ggot"
  },
  {
    "kr": "꽆",
    "en": "ggop"
  },
  {
    "kr": "꽇",
    "en": "ggoh"
  },
  {
    "kr": "꽈",
    "en": "ggwa"
  },
  {
    "kr": "꽉",
    "en": "ggwag"
  },
  {
    "kr": "꽊",
    "en": "ggwagg"
  },
  {
    "kr": "꽋",
    "en": "ggwags"
  },
  {
    "kr": "꽌",
    "en": "ggwan"
  },
  {
    "kr": "꽍",
    "en": "ggwanj"
  },
  {
    "kr": "꽎",
    "en": "ggwanh"
  },
  {
    "kr": "꽏",
    "en": "ggwad"
  },
  {
    "kr": "꽐",
    "en": "ggwal"
  },
  {
    "kr": "꽑",
    "en": "ggwalg"
  },
  {
    "kr": "꽒",
    "en": "ggwalm"
  },
  {
    "kr": "꽓",
    "en": "ggwalb"
  },
  {
    "kr": "꽔",
    "en": "ggwals"
  },
  {
    "kr": "꽕",
    "en": "ggwalt"
  },
  {
    "kr": "꽖",
    "en": "ggwalp"
  },
  {
    "kr": "꽗",
    "en": "ggwalh"
  },
  {
    "kr": "꽘",
    "en": "ggwam"
  },
  {
    "kr": "꽙",
    "en": "ggwab"
  },
  {
    "kr": "꽚",
    "en": "ggwabs"
  },
  {
    "kr": "꽛",
    "en": "ggwas"
  },
  {
    "kr": "꽜",
    "en": "ggwass"
  },
  {
    "kr": "꽝",
    "en": "ggwang"
  },
  {
    "kr": "꽞",
    "en": "ggwaj"
  },
  {
    "kr": "꽟",
    "en": "ggwac"
  },
  {
    "kr": "꽠",
    "en": "ggwak"
  },
  {
    "kr": "꽡",
    "en": "ggwat"
  },
  {
    "kr": "꽢",
    "en": "ggwap"
  },
  {
    "kr": "꽣",
    "en": "ggwah"
  },
  {
    "kr": "꽤",
    "en": "ggwae"
  },
  {
    "kr": "꽥",
    "en": "ggwaeg"
  },
  {
    "kr": "꽦",
    "en": "ggwaegg"
  },
  {
    "kr": "꽧",
    "en": "ggwaegs"
  },
  {
    "kr": "꽨",
    "en": "ggwaen"
  },
  {
    "kr": "꽩",
    "en": "ggwaenj"
  },
  {
    "kr": "꽪",
    "en": "ggwaenh"
  },
  {
    "kr": "꽫",
    "en": "ggwaed"
  },
  {
    "kr": "꽬",
    "en": "ggwael"
  },
  {
    "kr": "꽭",
    "en": "ggwaelg"
  },
  {
    "kr": "꽮",
    "en": "ggwaelm"
  },
  {
    "kr": "꽯",
    "en": "ggwaelb"
  },
  {
    "kr": "꽰",
    "en": "ggwaels"
  },
  {
    "kr": "꽱",
    "en": "ggwaelt"
  },
  {
    "kr": "꽲",
    "en": "ggwaelp"
  },
  {
    "kr": "꽳",
    "en": "ggwaelh"
  },
  {
    "kr": "꽴",
    "en": "ggwaem"
  },
  {
    "kr": "꽵",
    "en": "ggwaeb"
  },
  {
    "kr": "꽶",
    "en": "ggwaebs"
  },
  {
    "kr": "꽷",
    "en": "ggwaes"
  },
  {
    "kr": "꽸",
    "en": "ggwaess"
  },
  {
    "kr": "꽹",
    "en": "ggwaeng"
  },
  {
    "kr": "꽺",
    "en": "ggwaej"
  },
  {
    "kr": "꽻",
    "en": "ggwaec"
  },
  {
    "kr": "꽼",
    "en": "ggwaek"
  },
  {
    "kr": "꽽",
    "en": "ggwaet"
  },
  {
    "kr": "꽾",
    "en": "ggwaep"
  },
  {
    "kr": "꽿",
    "en": "ggwaeh"
  },
  {
    "kr": "꾀",
    "en": "ggoe"
  },
  {
    "kr": "꾁",
    "en": "ggoeg"
  },
  {
    "kr": "꾂",
    "en": "ggoegg"
  },
  {
    "kr": "꾃",
    "en": "ggoegs"
  },
  {
    "kr": "꾄",
    "en": "ggoen"
  },
  {
    "kr": "꾅",
    "en": "ggoenj"
  },
  {
    "kr": "꾆",
    "en": "ggoenh"
  },
  {
    "kr": "꾇",
    "en": "ggoed"
  },
  {
    "kr": "꾈",
    "en": "ggoel"
  },
  {
    "kr": "꾉",
    "en": "ggoelg"
  },
  {
    "kr": "꾊",
    "en": "ggoelm"
  },
  {
    "kr": "꾋",
    "en": "ggoelb"
  },
  {
    "kr": "꾌",
    "en": "ggoels"
  },
  {
    "kr": "꾍",
    "en": "ggoelt"
  },
  {
    "kr": "꾎",
    "en": "ggoelp"
  },
  {
    "kr": "꾏",
    "en": "ggoelh"
  },
  {
    "kr": "꾐",
    "en": "ggoem"
  },
  {
    "kr": "꾑",
    "en": "ggoeb"
  },
  {
    "kr": "꾒",
    "en": "ggoebs"
  },
  {
    "kr": "꾓",
    "en": "ggoes"
  },
  {
    "kr": "꾔",
    "en": "ggoess"
  },
  {
    "kr": "꾕",
    "en": "ggoeng"
  },
  {
    "kr": "꾖",
    "en": "ggoej"
  },
  {
    "kr": "꾗",
    "en": "ggoec"
  },
  {
    "kr": "꾘",
    "en": "ggoek"
  },
  {
    "kr": "꾙",
    "en": "ggoet"
  },
  {
    "kr": "꾚",
    "en": "ggoep"
  },
  {
    "kr": "꾛",
    "en": "ggoeh"
  },
  {
    "kr": "꾜",
    "en": "ggyo"
  },
  {
    "kr": "꾝",
    "en": "ggyog"
  },
  {
    "kr": "꾞",
    "en": "ggyogg"
  },
  {
    "kr": "꾟",
    "en": "ggyogs"
  },
  {
    "kr": "꾠",
    "en": "ggyon"
  },
  {
    "kr": "꾡",
    "en": "ggyonj"
  },
  {
    "kr": "꾢",
    "en": "ggyonh"
  },
  {
    "kr": "꾣",
    "en": "ggyod"
  },
  {
    "kr": "꾤",
    "en": "ggyol"
  },
  {
    "kr": "꾥",
    "en": "ggyolg"
  },
  {
    "kr": "꾦",
    "en": "ggyolm"
  },
  {
    "kr": "꾧",
    "en": "ggyolb"
  },
  {
    "kr": "꾨",
    "en": "ggyols"
  },
  {
    "kr": "꾩",
    "en": "ggyolt"
  },
  {
    "kr": "꾪",
    "en": "ggyolp"
  },
  {
    "kr": "꾫",
    "en": "ggyolh"
  },
  {
    "kr": "꾬",
    "en": "ggyom"
  },
  {
    "kr": "꾭",
    "en": "ggyob"
  },
  {
    "kr": "꾮",
    "en": "ggyobs"
  },
  {
    "kr": "꾯",
    "en": "ggyos"
  },
  {
    "kr": "꾰",
    "en": "ggyoss"
  },
  {
    "kr": "꾱",
    "en": "ggyong"
  },
  {
    "kr": "꾲",
    "en": "ggyoj"
  },
  {
    "kr": "꾳",
    "en": "ggyoc"
  },
  {
    "kr": "꾴",
    "en": "ggyok"
  },
  {
    "kr": "꾵",
    "en": "ggyot"
  },
  {
    "kr": "꾶",
    "en": "ggyop"
  },
  {
    "kr": "꾷",
    "en": "ggyoh"
  },
  {
    "kr": "꾸",
    "en": "ggu"
  },
  {
    "kr": "꾹",
    "en": "ggug"
  },
  {
    "kr": "꾺",
    "en": "ggugg"
  },
  {
    "kr": "꾻",
    "en": "ggugs"
  },
  {
    "kr": "꾼",
    "en": "ggun"
  },
  {
    "kr": "꾽",
    "en": "ggunj"
  },
  {
    "kr": "꾾",
    "en": "ggunh"
  },
  {
    "kr": "꾿",
    "en": "ggud"
  },
  {
    "kr": "꿀",
    "en": "ggul"
  },
  {
    "kr": "꿁",
    "en": "ggulg"
  },
  {
    "kr": "꿂",
    "en": "ggulm"
  },
  {
    "kr": "꿃",
    "en": "ggulb"
  },
  {
    "kr": "꿄",
    "en": "gguls"
  },
  {
    "kr": "꿅",
    "en": "ggult"
  },
  {
    "kr": "꿆",
    "en": "ggulp"
  },
  {
    "kr": "꿇",
    "en": "ggulh"
  },
  {
    "kr": "꿈",
    "en": "ggum"
  },
  {
    "kr": "꿉",
    "en": "ggub"
  },
  {
    "kr": "꿊",
    "en": "ggubs"
  },
  {
    "kr": "꿋",
    "en": "ggus"
  },
  {
    "kr": "꿌",
    "en": "gguss"
  },
  {
    "kr": "꿍",
    "en": "ggung"
  },
  {
    "kr": "꿎",
    "en": "gguj"
  },
  {
    "kr": "꿏",
    "en": "gguc"
  },
  {
    "kr": "꿐",
    "en": "gguk"
  },
  {
    "kr": "꿑",
    "en": "ggut"
  },
  {
    "kr": "꿒",
    "en": "ggup"
  },
  {
    "kr": "꿓",
    "en": "gguh"
  },
  {
    "kr": "꿔",
    "en": "ggweo"
  },
  {
    "kr": "꿕",
    "en": "ggweog"
  },
  {
    "kr": "꿖",
    "en": "ggweogg"
  },
  {
    "kr": "꿗",
    "en": "ggweogs"
  },
  {
    "kr": "꿘",
    "en": "ggweon"
  },
  {
    "kr": "꿙",
    "en": "ggweonj"
  },
  {
    "kr": "꿚",
    "en": "ggweonh"
  },
  {
    "kr": "꿛",
    "en": "ggweod"
  },
  {
    "kr": "꿜",
    "en": "ggweol"
  },
  {
    "kr": "꿝",
    "en": "ggweolg"
  },
  {
    "kr": "꿞",
    "en": "ggweolm"
  },
  {
    "kr": "꿟",
    "en": "ggweolb"
  },
  {
    "kr": "꿠",
    "en": "ggweols"
  },
  {
    "kr": "꿡",
    "en": "ggweolt"
  },
  {
    "kr": "꿢",
    "en": "ggweolp"
  },
  {
    "kr": "꿣",
    "en": "ggweolh"
  },
  {
    "kr": "꿤",
    "en": "ggweom"
  },
  {
    "kr": "꿥",
    "en": "ggweob"
  },
  {
    "kr": "꿦",
    "en": "ggweobs"
  },
  {
    "kr": "꿧",
    "en": "ggweos"
  },
  {
    "kr": "꿨",
    "en": "ggweoss"
  },
  {
    "kr": "꿩",
    "en": "ggweong"
  },
  {
    "kr": "꿪",
    "en": "ggweoj"
  },
  {
    "kr": "꿫",
    "en": "ggweoc"
  },
  {
    "kr": "꿬",
    "en": "ggweok"
  },
  {
    "kr": "꿭",
    "en": "ggweot"
  },
  {
    "kr": "꿮",
    "en": "ggweop"
  },
  {
    "kr": "꿯",
    "en": "ggweoh"
  },
  {
    "kr": "꿰",
    "en": "ggwe"
  },
  {
    "kr": "꿱",
    "en": "ggweg"
  },
  {
    "kr": "꿲",
    "en": "ggwegg"
  },
  {
    "kr": "꿳",
    "en": "ggwegs"
  },
  {
    "kr": "꿴",
    "en": "ggwen"
  },
  {
    "kr": "꿵",
    "en": "ggwenj"
  },
  {
    "kr": "꿶",
    "en": "ggwenh"
  },
  {
    "kr": "꿷",
    "en": "ggwed"
  },
  {
    "kr": "꿸",
    "en": "ggwel"
  },
  {
    "kr": "꿹",
    "en": "ggwelg"
  },
  {
    "kr": "꿺",
    "en": "ggwelm"
  },
  {
    "kr": "꿻",
    "en": "ggwelb"
  },
  {
    "kr": "꿼",
    "en": "ggwels"
  },
  {
    "kr": "꿽",
    "en": "ggwelt"
  },
  {
    "kr": "꿾",
    "en": "ggwelp"
  },
  {
    "kr": "꿿",
    "en": "ggwelh"
  },
  {
    "kr": "뀀",
    "en": "ggwem"
  },
  {
    "kr": "뀁",
    "en": "ggweb"
  },
  {
    "kr": "뀂",
    "en": "ggwebs"
  },
  {
    "kr": "뀃",
    "en": "ggwes"
  },
  {
    "kr": "뀄",
    "en": "ggwess"
  },
  {
    "kr": "뀅",
    "en": "ggweng"
  },
  {
    "kr": "뀆",
    "en": "ggwej"
  },
  {
    "kr": "뀇",
    "en": "ggwec"
  },
  {
    "kr": "뀈",
    "en": "ggwek"
  },
  {
    "kr": "뀉",
    "en": "ggwet"
  },
  {
    "kr": "뀊",
    "en": "ggwep"
  },
  {
    "kr": "뀋",
    "en": "ggweh"
  },
  {
    "kr": "뀌",
    "en": "ggwi"
  },
  {
    "kr": "뀍",
    "en": "ggwig"
  },
  {
    "kr": "뀎",
    "en": "ggwigg"
  },
  {
    "kr": "뀏",
    "en": "ggwigs"
  },
  {
    "kr": "뀐",
    "en": "ggwin"
  },
  {
    "kr": "뀑",
    "en": "ggwinj"
  },
  {
    "kr": "뀒",
    "en": "ggwinh"
  },
  {
    "kr": "뀓",
    "en": "ggwid"
  },
  {
    "kr": "뀔",
    "en": "ggwil"
  },
  {
    "kr": "뀕",
    "en": "ggwilg"
  },
  {
    "kr": "뀖",
    "en": "ggwilm"
  },
  {
    "kr": "뀗",
    "en": "ggwilb"
  },
  {
    "kr": "뀘",
    "en": "ggwils"
  },
  {
    "kr": "뀙",
    "en": "ggwilt"
  },
  {
    "kr": "뀚",
    "en": "ggwilp"
  },
  {
    "kr": "뀛",
    "en": "ggwilh"
  },
  {
    "kr": "뀜",
    "en": "ggwim"
  },
  {
    "kr": "뀝",
    "en": "ggwib"
  },
  {
    "kr": "뀞",
    "en": "ggwibs"
  },
  {
    "kr": "뀟",
    "en": "ggwis"
  },
  {
    "kr": "뀠",
    "en": "ggwiss"
  },
  {
    "kr": "뀡",
    "en": "ggwing"
  },
  {
    "kr": "뀢",
    "en": "ggwij"
  },
  {
    "kr": "뀣",
    "en": "ggwic"
  },
  {
    "kr": "뀤",
    "en": "ggwik"
  },
  {
    "kr": "뀥",
    "en": "ggwit"
  },
  {
    "kr": "뀦",
    "en": "ggwip"
  },
  {
    "kr": "뀧",
    "en": "ggwih"
  },
  {
    "kr": "뀨",
    "en": "ggyu"
  },
  {
    "kr": "뀩",
    "en": "ggyug"
  },
  {
    "kr": "뀪",
    "en": "ggyugg"
  },
  {
    "kr": "뀫",
    "en": "ggyugs"
  },
  {
    "kr": "뀬",
    "en": "ggyun"
  },
  {
    "kr": "뀭",
    "en": "ggyunj"
  },
  {
    "kr": "뀮",
    "en": "ggyunh"
  },
  {
    "kr": "뀯",
    "en": "ggyud"
  },
  {
    "kr": "뀰",
    "en": "ggyul"
  },
  {
    "kr": "뀱",
    "en": "ggyulg"
  },
  {
    "kr": "뀲",
    "en": "ggyulm"
  },
  {
    "kr": "뀳",
    "en": "ggyulb"
  },
  {
    "kr": "뀴",
    "en": "ggyuls"
  },
  {
    "kr": "뀵",
    "en": "ggyult"
  },
  {
    "kr": "뀶",
    "en": "ggyulp"
  },
  {
    "kr": "뀷",
    "en": "ggyulh"
  },
  {
    "kr": "뀸",
    "en": "ggyum"
  },
  {
    "kr": "뀹",
    "en": "ggyub"
  },
  {
    "kr": "뀺",
    "en": "ggyubs"
  },
  {
    "kr": "뀻",
    "en": "ggyus"
  },
  {
    "kr": "뀼",
    "en": "ggyuss"
  },
  {
    "kr": "뀽",
    "en": "ggyung"
  },
  {
    "kr": "뀾",
    "en": "ggyuj"
  },
  {
    "kr": "뀿",
    "en": "ggyuc"
  },
  {
    "kr": "끀",
    "en": "ggyuk"
  },
  {
    "kr": "끁",
    "en": "ggyut"
  },
  {
    "kr": "끂",
    "en": "ggyup"
  },
  {
    "kr": "끃",
    "en": "ggyuh"
  },
  {
    "kr": "끄",
    "en": "ggeu"
  },
  {
    "kr": "끅",
    "en": "ggeug"
  },
  {
    "kr": "끆",
    "en": "ggeugg"
  },
  {
    "kr": "끇",
    "en": "ggeugs"
  },
  {
    "kr": "끈",
    "en": "ggeun"
  },
  {
    "kr": "끉",
    "en": "ggeunj"
  },
  {
    "kr": "끊",
    "en": "ggeunh"
  },
  {
    "kr": "끋",
    "en": "ggeud"
  },
  {
    "kr": "끌",
    "en": "ggeul"
  },
  {
    "kr": "끍",
    "en": "ggeulg"
  },
  {
    "kr": "끎",
    "en": "ggeulm"
  },
  {
    "kr": "끏",
    "en": "ggeulb"
  },
  {
    "kr": "끐",
    "en": "ggeuls"
  },
  {
    "kr": "끑",
    "en": "ggeult"
  },
  {
    "kr": "끒",
    "en": "ggeulp"
  },
  {
    "kr": "끓",
    "en": "ggeulh"
  },
  {
    "kr": "끔",
    "en": "ggeum"
  },
  {
    "kr": "끕",
    "en": "ggeub"
  },
  {
    "kr": "끖",
    "en": "ggeubs"
  },
  {
    "kr": "끗",
    "en": "ggeus"
  },
  {
    "kr": "끘",
    "en": "ggeuss"
  },
  {
    "kr": "끙",
    "en": "ggeung"
  },
  {
    "kr": "끚",
    "en": "ggeuj"
  },
  {
    "kr": "끛",
    "en": "ggeuc"
  },
  {
    "kr": "끜",
    "en": "ggeuk"
  },
  {
    "kr": "끝",
    "en": "ggeut"
  },
  {
    "kr": "끞",
    "en": "ggeup"
  },
  {
    "kr": "끟",
    "en": "ggeuh"
  },
  {
    "kr": "끠",
    "en": "ggyi"
  },
  {
    "kr": "끡",
    "en": "ggyig"
  },
  {
    "kr": "끢",
    "en": "ggyigg"
  },
  {
    "kr": "끣",
    "en": "ggyigs"
  },
  {
    "kr": "끤",
    "en": "ggyin"
  },
  {
    "kr": "끥",
    "en": "ggyinj"
  },
  {
    "kr": "끦",
    "en": "ggyinh"
  },
  {
    "kr": "끧",
    "en": "ggyid"
  },
  {
    "kr": "끨",
    "en": "ggyil"
  },
  {
    "kr": "끩",
    "en": "ggyilg"
  },
  {
    "kr": "끪",
    "en": "ggyilm"
  },
  {
    "kr": "끫",
    "en": "ggyilb"
  },
  {
    "kr": "끬",
    "en": "ggyils"
  },
  {
    "kr": "끭",
    "en": "ggyilt"
  },
  {
    "kr": "끮",
    "en": "ggyilp"
  },
  {
    "kr": "끯",
    "en": "ggyilh"
  },
  {
    "kr": "끰",
    "en": "ggyim"
  },
  {
    "kr": "끱",
    "en": "ggyib"
  },
  {
    "kr": "끲",
    "en": "ggyibs"
  },
  {
    "kr": "끳",
    "en": "ggyis"
  },
  {
    "kr": "끴",
    "en": "ggyiss"
  },
  {
    "kr": "끵",
    "en": "ggying"
  },
  {
    "kr": "끶",
    "en": "ggyij"
  },
  {
    "kr": "끷",
    "en": "ggyic"
  },
  {
    "kr": "끸",
    "en": "ggyik"
  },
  {
    "kr": "끹",
    "en": "ggyit"
  },
  {
    "kr": "끺",
    "en": "ggyip"
  },
  {
    "kr": "끻",
    "en": "ggyih"
  },
  {
    "kr": "끼",
    "en": "ggi"
  },
  {
    "kr": "끽",
    "en": "ggig"
  },
  {
    "kr": "끾",
    "en": "ggigg"
  },
  {
    "kr": "끿",
    "en": "ggigs"
  },
  {
    "kr": "낀",
    "en": "ggin"
  },
  {
    "kr": "낁",
    "en": "gginj"
  },
  {
    "kr": "낂",
    "en": "gginh"
  },
  {
    "kr": "낃",
    "en": "ggid"
  },
  {
    "kr": "낄",
    "en": "ggil"
  },
  {
    "kr": "낅",
    "en": "ggilg"
  },
  {
    "kr": "낆",
    "en": "ggilm"
  },
  {
    "kr": "낇",
    "en": "ggilb"
  },
  {
    "kr": "낈",
    "en": "ggils"
  },
  {
    "kr": "낉",
    "en": "ggilt"
  },
  {
    "kr": "낊",
    "en": "ggilp"
  },
  {
    "kr": "낋",
    "en": "ggilh"
  },
  {
    "kr": "낌",
    "en": "ggim"
  },
  {
    "kr": "낍",
    "en": "ggib"
  },
  {
    "kr": "낎",
    "en": "ggibs"
  },
  {
    "kr": "낏",
    "en": "ggis"
  },
  {
    "kr": "낐",
    "en": "ggiss"
  },
  {
    "kr": "낑",
    "en": "gging"
  },
  {
    "kr": "낒",
    "en": "ggij"
  },
  {
    "kr": "낓",
    "en": "ggic"
  },
  {
    "kr": "낔",
    "en": "ggik"
  },
  {
    "kr": "낕",
    "en": "ggit"
  },
  {
    "kr": "낖",
    "en": "ggip"
  },
  {
    "kr": "낗",
    "en": "ggih"
  },
  {
    "kr": "나",
    "en": "na"
  },
  {
    "kr": "낙",
    "en": "nag"
  },
  {
    "kr": "낚",
    "en": "nagg"
  },
  {
    "kr": "낛",
    "en": "nags"
  },
  {
    "kr": "난",
    "en": "nan"
  },
  {
    "kr": "낝",
    "en": "nanj"
  },
  {
    "kr": "낞",
    "en": "nanh"
  },
  {
    "kr": "낟",
    "en": "nad"
  },
  {
    "kr": "날",
    "en": "nal"
  },
  {
    "kr": "낡",
    "en": "nalg"
  },
  {
    "kr": "낢",
    "en": "nalm"
  },
  {
    "kr": "낣",
    "en": "nalb"
  },
  {
    "kr": "낤",
    "en": "nals"
  },
  {
    "kr": "낥",
    "en": "nalt"
  },
  {
    "kr": "낦",
    "en": "nalp"
  },
  {
    "kr": "낧",
    "en": "nalh"
  },
  {
    "kr": "남",
    "en": "nam"
  },
  {
    "kr": "납",
    "en": "nab"
  },
  {
    "kr": "낪",
    "en": "nabs"
  },
  {
    "kr": "낫",
    "en": "nas"
  },
  {
    "kr": "났",
    "en": "nass"
  },
  {
    "kr": "낭",
    "en": "nang"
  },
  {
    "kr": "낮",
    "en": "naj"
  },
  {
    "kr": "낯",
    "en": "nac"
  },
  {
    "kr": "낰",
    "en": "nak"
  },
  {
    "kr": "낱",
    "en": "nat"
  },
  {
    "kr": "낲",
    "en": "nap"
  },
  {
    "kr": "낳",
    "en": "nah"
  },
  {
    "kr": "내",
    "en": "nae"
  },
  {
    "kr": "낵",
    "en": "naeg"
  },
  {
    "kr": "낶",
    "en": "naegg"
  },
  {
    "kr": "낷",
    "en": "naegs"
  },
  {
    "kr": "낸",
    "en": "naen"
  },
  {
    "kr": "낹",
    "en": "naenj"
  },
  {
    "kr": "낺",
    "en": "naenh"
  },
  {
    "kr": "낻",
    "en": "naed"
  },
  {
    "kr": "낼",
    "en": "nael"
  },
  {
    "kr": "낽",
    "en": "naelg"
  },
  {
    "kr": "낾",
    "en": "naelm"
  },
  {
    "kr": "낿",
    "en": "naelb"
  },
  {
    "kr": "냀",
    "en": "naels"
  },
  {
    "kr": "냁",
    "en": "naelt"
  },
  {
    "kr": "냂",
    "en": "naelp"
  },
  {
    "kr": "냃",
    "en": "naelh"
  },
  {
    "kr": "냄",
    "en": "naem"
  },
  {
    "kr": "냅",
    "en": "naeb"
  },
  {
    "kr": "냆",
    "en": "naebs"
  },
  {
    "kr": "냇",
    "en": "naes"
  },
  {
    "kr": "냈",
    "en": "naess"
  },
  {
    "kr": "냉",
    "en": "naeng"
  },
  {
    "kr": "냊",
    "en": "naej"
  },
  {
    "kr": "냋",
    "en": "naec"
  },
  {
    "kr": "냌",
    "en": "naek"
  },
  {
    "kr": "냍",
    "en": "naet"
  },
  {
    "kr": "냎",
    "en": "naep"
  },
  {
    "kr": "냏",
    "en": "naeh"
  },
  {
    "kr": "냐",
    "en": "nya"
  },
  {
    "kr": "냑",
    "en": "nyag"
  },
  {
    "kr": "냒",
    "en": "nyagg"
  },
  {
    "kr": "냓",
    "en": "nyags"
  },
  {
    "kr": "냔",
    "en": "nyan"
  },
  {
    "kr": "냕",
    "en": "nyanj"
  },
  {
    "kr": "냖",
    "en": "nyanh"
  },
  {
    "kr": "냗",
    "en": "nyad"
  },
  {
    "kr": "냘",
    "en": "nyal"
  },
  {
    "kr": "냙",
    "en": "nyalg"
  },
  {
    "kr": "냚",
    "en": "nyalm"
  },
  {
    "kr": "냛",
    "en": "nyalb"
  },
  {
    "kr": "냜",
    "en": "nyals"
  },
  {
    "kr": "냝",
    "en": "nyalt"
  },
  {
    "kr": "냞",
    "en": "nyalp"
  },
  {
    "kr": "냟",
    "en": "nyalh"
  },
  {
    "kr": "냠",
    "en": "nyam"
  },
  {
    "kr": "냡",
    "en": "nyab"
  },
  {
    "kr": "냢",
    "en": "nyabs"
  },
  {
    "kr": "냣",
    "en": "nyas"
  },
  {
    "kr": "냤",
    "en": "nyass"
  },
  {
    "kr": "냥",
    "en": "nyang"
  },
  {
    "kr": "냦",
    "en": "nyaj"
  },
  {
    "kr": "냧",
    "en": "nyac"
  },
  {
    "kr": "냨",
    "en": "nyak"
  },
  {
    "kr": "냩",
    "en": "nyat"
  },
  {
    "kr": "냪",
    "en": "nyap"
  },
  {
    "kr": "냫",
    "en": "nyah"
  },
  {
    "kr": "냬",
    "en": "nyae"
  },
  {
    "kr": "냭",
    "en": "nyaeg"
  },
  {
    "kr": "냮",
    "en": "nyaegg"
  },
  {
    "kr": "냯",
    "en": "nyaegs"
  },
  {
    "kr": "냰",
    "en": "nyaen"
  },
  {
    "kr": "냱",
    "en": "nyaenj"
  },
  {
    "kr": "냲",
    "en": "nyaenh"
  },
  {
    "kr": "냳",
    "en": "nyaed"
  },
  {
    "kr": "냴",
    "en": "nyael"
  },
  {
    "kr": "냵",
    "en": "nyaelg"
  },
  {
    "kr": "냶",
    "en": "nyaelm"
  },
  {
    "kr": "냷",
    "en": "nyaelb"
  },
  {
    "kr": "냸",
    "en": "nyaels"
  },
  {
    "kr": "냹",
    "en": "nyaelt"
  },
  {
    "kr": "냺",
    "en": "nyaelp"
  },
  {
    "kr": "냻",
    "en": "nyaelh"
  },
  {
    "kr": "냼",
    "en": "nyaem"
  },
  {
    "kr": "냽",
    "en": "nyaeb"
  },
  {
    "kr": "냾",
    "en": "nyaebs"
  },
  {
    "kr": "냿",
    "en": "nyaes"
  },
  {
    "kr": "넀",
    "en": "nyaess"
  },
  {
    "kr": "넁",
    "en": "nyaeng"
  },
  {
    "kr": "넂",
    "en": "nyaej"
  },
  {
    "kr": "넃",
    "en": "nyaec"
  },
  {
    "kr": "넄",
    "en": "nyaek"
  },
  {
    "kr": "넅",
    "en": "nyaet"
  },
  {
    "kr": "넆",
    "en": "nyaep"
  },
  {
    "kr": "넇",
    "en": "nyaeh"
  },
  {
    "kr": "너",
    "en": "neo"
  },
  {
    "kr": "넉",
    "en": "neog"
  },
  {
    "kr": "넊",
    "en": "neogg"
  },
  {
    "kr": "넋",
    "en": "neogs"
  },
  {
    "kr": "넌",
    "en": "neon"
  },
  {
    "kr": "넍",
    "en": "neonj"
  },
  {
    "kr": "넎",
    "en": "neonh"
  },
  {
    "kr": "넏",
    "en": "neod"
  },
  {
    "kr": "널",
    "en": "neol"
  },
  {
    "kr": "넑",
    "en": "neolg"
  },
  {
    "kr": "넒",
    "en": "neolm"
  },
  {
    "kr": "넓",
    "en": "neolb"
  },
  {
    "kr": "넔",
    "en": "neols"
  },
  {
    "kr": "넕",
    "en": "neolt"
  },
  {
    "kr": "넖",
    "en": "neolp"
  },
  {
    "kr": "넗",
    "en": "neolh"
  },
  {
    "kr": "넘",
    "en": "neom"
  },
  {
    "kr": "넙",
    "en": "neob"
  },
  {
    "kr": "넚",
    "en": "neobs"
  },
  {
    "kr": "넛",
    "en": "neos"
  },
  {
    "kr": "넜",
    "en": "neoss"
  },
  {
    "kr": "넝",
    "en": "neong"
  },
  {
    "kr": "넞",
    "en": "neoj"
  },
  {
    "kr": "넟",
    "en": "neoc"
  },
  {
    "kr": "넠",
    "en": "neok"
  },
  {
    "kr": "넡",
    "en": "neot"
  },
  {
    "kr": "넢",
    "en": "neop"
  },
  {
    "kr": "넣",
    "en": "neoh"
  },
  {
    "kr": "네",
    "en": "ne"
  },
  {
    "kr": "넥",
    "en": "neg"
  },
  {
    "kr": "넦",
    "en": "negg"
  },
  {
    "kr": "넧",
    "en": "negs"
  },
  {
    "kr": "넨",
    "en": "nen"
  },
  {
    "kr": "넩",
    "en": "nenj"
  },
  {
    "kr": "넪",
    "en": "nenh"
  },
  {
    "kr": "넫",
    "en": "ned"
  },
  {
    "kr": "넬",
    "en": "nel"
  },
  {
    "kr": "넭",
    "en": "nelg"
  },
  {
    "kr": "넮",
    "en": "nelm"
  },
  {
    "kr": "넯",
    "en": "nelb"
  },
  {
    "kr": "넰",
    "en": "nels"
  },
  {
    "kr": "넱",
    "en": "nelt"
  },
  {
    "kr": "넲",
    "en": "nelp"
  },
  {
    "kr": "넳",
    "en": "nelh"
  },
  {
    "kr": "넴",
    "en": "nem"
  },
  {
    "kr": "넵",
    "en": "neb"
  },
  {
    "kr": "넶",
    "en": "nebs"
  },
  {
    "kr": "넷",
    "en": "nes"
  },
  {
    "kr": "넸",
    "en": "ness"
  },
  {
    "kr": "넹",
    "en": "neng"
  },
  {
    "kr": "넺",
    "en": "nej"
  },
  {
    "kr": "넻",
    "en": "nec"
  },
  {
    "kr": "넼",
    "en": "nek"
  },
  {
    "kr": "넽",
    "en": "net"
  },
  {
    "kr": "넾",
    "en": "nep"
  },
  {
    "kr": "넿",
    "en": "neh"
  },
  {
    "kr": "녀",
    "en": "nyeo"
  },
  {
    "kr": "녁",
    "en": "nyeog"
  },
  {
    "kr": "녂",
    "en": "nyeogg"
  },
  {
    "kr": "녃",
    "en": "nyeogs"
  },
  {
    "kr": "년",
    "en": "nyeon"
  },
  {
    "kr": "녅",
    "en": "nyeonj"
  },
  {
    "kr": "녆",
    "en": "nyeonh"
  },
  {
    "kr": "녇",
    "en": "nyeod"
  },
  {
    "kr": "녈",
    "en": "nyeol"
  },
  {
    "kr": "녉",
    "en": "nyeolg"
  },
  {
    "kr": "녊",
    "en": "nyeolm"
  },
  {
    "kr": "녋",
    "en": "nyeolb"
  },
  {
    "kr": "녌",
    "en": "nyeols"
  },
  {
    "kr": "녍",
    "en": "nyeolt"
  },
  {
    "kr": "녎",
    "en": "nyeolp"
  },
  {
    "kr": "녏",
    "en": "nyeolh"
  },
  {
    "kr": "념",
    "en": "nyeom"
  },
  {
    "kr": "녑",
    "en": "nyeob"
  },
  {
    "kr": "녒",
    "en": "nyeobs"
  },
  {
    "kr": "녓",
    "en": "nyeos"
  },
  {
    "kr": "녔",
    "en": "nyeoss"
  },
  {
    "kr": "녕",
    "en": "nyeong"
  },
  {
    "kr": "녖",
    "en": "nyeoj"
  },
  {
    "kr": "녗",
    "en": "nyeoc"
  },
  {
    "kr": "녘",
    "en": "nyeok"
  },
  {
    "kr": "녙",
    "en": "nyeot"
  },
  {
    "kr": "녚",
    "en": "nyeop"
  },
  {
    "kr": "녛",
    "en": "nyeoh"
  },
  {
    "kr": "녜",
    "en": "nye"
  },
  {
    "kr": "녝",
    "en": "nyeg"
  },
  {
    "kr": "녞",
    "en": "nyegg"
  },
  {
    "kr": "녟",
    "en": "nyegs"
  },
  {
    "kr": "녠",
    "en": "nyen"
  },
  {
    "kr": "녡",
    "en": "nyenj"
  },
  {
    "kr": "녢",
    "en": "nyenh"
  },
  {
    "kr": "녣",
    "en": "nyed"
  },
  {
    "kr": "녤",
    "en": "nyel"
  },
  {
    "kr": "녥",
    "en": "nyelg"
  },
  {
    "kr": "녦",
    "en": "nyelm"
  },
  {
    "kr": "녧",
    "en": "nyelb"
  },
  {
    "kr": "녨",
    "en": "nyels"
  },
  {
    "kr": "녩",
    "en": "nyelt"
  },
  {
    "kr": "녪",
    "en": "nyelp"
  },
  {
    "kr": "녫",
    "en": "nyelh"
  },
  {
    "kr": "녬",
    "en": "nyem"
  },
  {
    "kr": "녭",
    "en": "nyeb"
  },
  {
    "kr": "녮",
    "en": "nyebs"
  },
  {
    "kr": "녯",
    "en": "nyes"
  },
  {
    "kr": "녰",
    "en": "nyess"
  },
  {
    "kr": "녱",
    "en": "nyeng"
  },
  {
    "kr": "녲",
    "en": "nyej"
  },
  {
    "kr": "녳",
    "en": "nyec"
  },
  {
    "kr": "녴",
    "en": "nyek"
  },
  {
    "kr": "녵",
    "en": "nyet"
  },
  {
    "kr": "녶",
    "en": "nyep"
  },
  {
    "kr": "녷",
    "en": "nyeh"
  },
  {
    "kr": "노",
    "en": "no"
  },
  {
    "kr": "녹",
    "en": "nog"
  },
  {
    "kr": "녺",
    "en": "nogg"
  },
  {
    "kr": "녻",
    "en": "nogs"
  },
  {
    "kr": "논",
    "en": "non"
  },
  {
    "kr": "녽",
    "en": "nonj"
  },
  {
    "kr": "녾",
    "en": "nonh"
  },
  {
    "kr": "녿",
    "en": "nod"
  },
  {
    "kr": "놀",
    "en": "nol"
  },
  {
    "kr": "놁",
    "en": "nolg"
  },
  {
    "kr": "놂",
    "en": "nolm"
  },
  {
    "kr": "놃",
    "en": "nolb"
  },
  {
    "kr": "놄",
    "en": "nols"
  },
  {
    "kr": "놅",
    "en": "nolt"
  },
  {
    "kr": "놆",
    "en": "nolp"
  },
  {
    "kr": "놇",
    "en": "nolh"
  },
  {
    "kr": "놈",
    "en": "nom"
  },
  {
    "kr": "놉",
    "en": "nob"
  },
  {
    "kr": "놊",
    "en": "nobs"
  },
  {
    "kr": "놋",
    "en": "nos"
  },
  {
    "kr": "놌",
    "en": "noss"
  },
  {
    "kr": "농",
    "en": "nong"
  },
  {
    "kr": "놎",
    "en": "noj"
  },
  {
    "kr": "놏",
    "en": "noc"
  },
  {
    "kr": "놐",
    "en": "nok"
  },
  {
    "kr": "놑",
    "en": "not"
  },
  {
    "kr": "높",
    "en": "nop"
  },
  {
    "kr": "놓",
    "en": "noh"
  },
  {
    "kr": "놔",
    "en": "nwa"
  },
  {
    "kr": "놕",
    "en": "nwag"
  },
  {
    "kr": "놖",
    "en": "nwagg"
  },
  {
    "kr": "놗",
    "en": "nwags"
  },
  {
    "kr": "놘",
    "en": "nwan"
  },
  {
    "kr": "놙",
    "en": "nwanj"
  },
  {
    "kr": "놚",
    "en": "nwanh"
  },
  {
    "kr": "놛",
    "en": "nwad"
  },
  {
    "kr": "놜",
    "en": "nwal"
  },
  {
    "kr": "놝",
    "en": "nwalg"
  },
  {
    "kr": "놞",
    "en": "nwalm"
  },
  {
    "kr": "놟",
    "en": "nwalb"
  },
  {
    "kr": "놠",
    "en": "nwals"
  },
  {
    "kr": "놡",
    "en": "nwalt"
  },
  {
    "kr": "놢",
    "en": "nwalp"
  },
  {
    "kr": "놣",
    "en": "nwalh"
  },
  {
    "kr": "놤",
    "en": "nwam"
  },
  {
    "kr": "놥",
    "en": "nwab"
  },
  {
    "kr": "놦",
    "en": "nwabs"
  },
  {
    "kr": "놧",
    "en": "nwas"
  },
  {
    "kr": "놨",
    "en": "nwass"
  },
  {
    "kr": "놩",
    "en": "nwang"
  },
  {
    "kr": "놪",
    "en": "nwaj"
  },
  {
    "kr": "놫",
    "en": "nwac"
  },
  {
    "kr": "놬",
    "en": "nwak"
  },
  {
    "kr": "놭",
    "en": "nwat"
  },
  {
    "kr": "놮",
    "en": "nwap"
  },
  {
    "kr": "놯",
    "en": "nwah"
  },
  {
    "kr": "놰",
    "en": "nwae"
  },
  {
    "kr": "놱",
    "en": "nwaeg"
  },
  {
    "kr": "놲",
    "en": "nwaegg"
  },
  {
    "kr": "놳",
    "en": "nwaegs"
  },
  {
    "kr": "놴",
    "en": "nwaen"
  },
  {
    "kr": "놵",
    "en": "nwaenj"
  },
  {
    "kr": "놶",
    "en": "nwaenh"
  },
  {
    "kr": "놷",
    "en": "nwaed"
  },
  {
    "kr": "놸",
    "en": "nwael"
  },
  {
    "kr": "놹",
    "en": "nwaelg"
  },
  {
    "kr": "놺",
    "en": "nwaelm"
  },
  {
    "kr": "놻",
    "en": "nwaelb"
  },
  {
    "kr": "놼",
    "en": "nwaels"
  },
  {
    "kr": "놽",
    "en": "nwaelt"
  },
  {
    "kr": "놾",
    "en": "nwaelp"
  },
  {
    "kr": "놿",
    "en": "nwaelh"
  },
  {
    "kr": "뇀",
    "en": "nwaem"
  },
  {
    "kr": "뇁",
    "en": "nwaeb"
  },
  {
    "kr": "뇂",
    "en": "nwaebs"
  },
  {
    "kr": "뇃",
    "en": "nwaes"
  },
  {
    "kr": "뇄",
    "en": "nwaess"
  },
  {
    "kr": "뇅",
    "en": "nwaeng"
  },
  {
    "kr": "뇆",
    "en": "nwaej"
  },
  {
    "kr": "뇇",
    "en": "nwaec"
  },
  {
    "kr": "뇈",
    "en": "nwaek"
  },
  {
    "kr": "뇉",
    "en": "nwaet"
  },
  {
    "kr": "뇊",
    "en": "nwaep"
  },
  {
    "kr": "뇋",
    "en": "nwaeh"
  },
  {
    "kr": "뇌",
    "en": "noe"
  },
  {
    "kr": "뇍",
    "en": "noeg"
  },
  {
    "kr": "뇎",
    "en": "noegg"
  },
  {
    "kr": "뇏",
    "en": "noegs"
  },
  {
    "kr": "뇐",
    "en": "noen"
  },
  {
    "kr": "뇑",
    "en": "noenj"
  },
  {
    "kr": "뇒",
    "en": "noenh"
  },
  {
    "kr": "뇓",
    "en": "noed"
  },
  {
    "kr": "뇔",
    "en": "noel"
  },
  {
    "kr": "뇕",
    "en": "noelg"
  },
  {
    "kr": "뇖",
    "en": "noelm"
  },
  {
    "kr": "뇗",
    "en": "noelb"
  },
  {
    "kr": "뇘",
    "en": "noels"
  },
  {
    "kr": "뇙",
    "en": "noelt"
  },
  {
    "kr": "뇚",
    "en": "noelp"
  },
  {
    "kr": "뇛",
    "en": "noelh"
  },
  {
    "kr": "뇜",
    "en": "noem"
  },
  {
    "kr": "뇝",
    "en": "noeb"
  },
  {
    "kr": "뇞",
    "en": "noebs"
  },
  {
    "kr": "뇟",
    "en": "noes"
  },
  {
    "kr": "뇠",
    "en": "noess"
  },
  {
    "kr": "뇡",
    "en": "noeng"
  },
  {
    "kr": "뇢",
    "en": "noej"
  },
  {
    "kr": "뇣",
    "en": "noec"
  },
  {
    "kr": "뇤",
    "en": "noek"
  },
  {
    "kr": "뇥",
    "en": "noet"
  },
  {
    "kr": "뇦",
    "en": "noep"
  },
  {
    "kr": "뇧",
    "en": "noeh"
  },
  {
    "kr": "뇨",
    "en": "nyo"
  },
  {
    "kr": "뇩",
    "en": "nyog"
  },
  {
    "kr": "뇪",
    "en": "nyogg"
  },
  {
    "kr": "뇫",
    "en": "nyogs"
  },
  {
    "kr": "뇬",
    "en": "nyon"
  },
  {
    "kr": "뇭",
    "en": "nyonj"
  },
  {
    "kr": "뇮",
    "en": "nyonh"
  },
  {
    "kr": "뇯",
    "en": "nyod"
  },
  {
    "kr": "뇰",
    "en": "nyol"
  },
  {
    "kr": "뇱",
    "en": "nyolg"
  },
  {
    "kr": "뇲",
    "en": "nyolm"
  },
  {
    "kr": "뇳",
    "en": "nyolb"
  },
  {
    "kr": "뇴",
    "en": "nyols"
  },
  {
    "kr": "뇵",
    "en": "nyolt"
  },
  {
    "kr": "뇶",
    "en": "nyolp"
  },
  {
    "kr": "뇷",
    "en": "nyolh"
  },
  {
    "kr": "뇸",
    "en": "nyom"
  },
  {
    "kr": "뇹",
    "en": "nyob"
  },
  {
    "kr": "뇺",
    "en": "nyobs"
  },
  {
    "kr": "뇻",
    "en": "nyos"
  },
  {
    "kr": "뇼",
    "en": "nyoss"
  },
  {
    "kr": "뇽",
    "en": "nyong"
  },
  {
    "kr": "뇾",
    "en": "nyoj"
  },
  {
    "kr": "뇿",
    "en": "nyoc"
  },
  {
    "kr": "눀",
    "en": "nyok"
  },
  {
    "kr": "눁",
    "en": "nyot"
  },
  {
    "kr": "눂",
    "en": "nyop"
  },
  {
    "kr": "눃",
    "en": "nyoh"
  },
  {
    "kr": "누",
    "en": "nu"
  },
  {
    "kr": "눅",
    "en": "nug"
  },
  {
    "kr": "눆",
    "en": "nugg"
  },
  {
    "kr": "눇",
    "en": "nugs"
  },
  {
    "kr": "눈",
    "en": "nun"
  },
  {
    "kr": "눉",
    "en": "nunj"
  },
  {
    "kr": "눊",
    "en": "nunh"
  },
  {
    "kr": "눋",
    "en": "nud"
  },
  {
    "kr": "눌",
    "en": "nul"
  },
  {
    "kr": "눍",
    "en": "nulg"
  },
  {
    "kr": "눎",
    "en": "nulm"
  },
  {
    "kr": "눏",
    "en": "nulb"
  },
  {
    "kr": "눐",
    "en": "nuls"
  },
  {
    "kr": "눑",
    "en": "nult"
  },
  {
    "kr": "눒",
    "en": "nulp"
  },
  {
    "kr": "눓",
    "en": "nulh"
  },
  {
    "kr": "눔",
    "en": "num"
  },
  {
    "kr": "눕",
    "en": "nub"
  },
  {
    "kr": "눖",
    "en": "nubs"
  },
  {
    "kr": "눗",
    "en": "nus"
  },
  {
    "kr": "눘",
    "en": "nuss"
  },
  {
    "kr": "눙",
    "en": "nung"
  },
  {
    "kr": "눚",
    "en": "nuj"
  },
  {
    "kr": "눛",
    "en": "nuc"
  },
  {
    "kr": "눜",
    "en": "nuk"
  },
  {
    "kr": "눝",
    "en": "nut"
  },
  {
    "kr": "눞",
    "en": "nup"
  },
  {
    "kr": "눟",
    "en": "nuh"
  },
  {
    "kr": "눠",
    "en": "nweo"
  },
  {
    "kr": "눡",
    "en": "nweog"
  },
  {
    "kr": "눢",
    "en": "nweogg"
  },
  {
    "kr": "눣",
    "en": "nweogs"
  },
  {
    "kr": "눤",
    "en": "nweon"
  },
  {
    "kr": "눥",
    "en": "nweonj"
  },
  {
    "kr": "눦",
    "en": "nweonh"
  },
  {
    "kr": "눧",
    "en": "nweod"
  },
  {
    "kr": "눨",
    "en": "nweol"
  },
  {
    "kr": "눩",
    "en": "nweolg"
  },
  {
    "kr": "눪",
    "en": "nweolm"
  },
  {
    "kr": "눫",
    "en": "nweolb"
  },
  {
    "kr": "눬",
    "en": "nweols"
  },
  {
    "kr": "눭",
    "en": "nweolt"
  },
  {
    "kr": "눮",
    "en": "nweolp"
  },
  {
    "kr": "눯",
    "en": "nweolh"
  },
  {
    "kr": "눰",
    "en": "nweom"
  },
  {
    "kr": "눱",
    "en": "nweob"
  },
  {
    "kr": "눲",
    "en": "nweobs"
  },
  {
    "kr": "눳",
    "en": "nweos"
  },
  {
    "kr": "눴",
    "en": "nweoss"
  },
  {
    "kr": "눵",
    "en": "nweong"
  },
  {
    "kr": "눶",
    "en": "nweoj"
  },
  {
    "kr": "눷",
    "en": "nweoc"
  },
  {
    "kr": "눸",
    "en": "nweok"
  },
  {
    "kr": "눹",
    "en": "nweot"
  },
  {
    "kr": "눺",
    "en": "nweop"
  },
  {
    "kr": "눻",
    "en": "nweoh"
  },
  {
    "kr": "눼",
    "en": "nwe"
  },
  {
    "kr": "눽",
    "en": "nweg"
  },
  {
    "kr": "눾",
    "en": "nwegg"
  },
  {
    "kr": "눿",
    "en": "nwegs"
  },
  {
    "kr": "뉀",
    "en": "nwen"
  },
  {
    "kr": "뉁",
    "en": "nwenj"
  },
  {
    "kr": "뉂",
    "en": "nwenh"
  },
  {
    "kr": "뉃",
    "en": "nwed"
  },
  {
    "kr": "뉄",
    "en": "nwel"
  },
  {
    "kr": "뉅",
    "en": "nwelg"
  },
  {
    "kr": "뉆",
    "en": "nwelm"
  },
  {
    "kr": "뉇",
    "en": "nwelb"
  },
  {
    "kr": "뉈",
    "en": "nwels"
  },
  {
    "kr": "뉉",
    "en": "nwelt"
  },
  {
    "kr": "뉊",
    "en": "nwelp"
  },
  {
    "kr": "뉋",
    "en": "nwelh"
  },
  {
    "kr": "뉌",
    "en": "nwem"
  },
  {
    "kr": "뉍",
    "en": "nweb"
  },
  {
    "kr": "뉎",
    "en": "nwebs"
  },
  {
    "kr": "뉏",
    "en": "nwes"
  },
  {
    "kr": "뉐",
    "en": "nwess"
  },
  {
    "kr": "뉑",
    "en": "nweng"
  },
  {
    "kr": "뉒",
    "en": "nwej"
  },
  {
    "kr": "뉓",
    "en": "nwec"
  },
  {
    "kr": "뉔",
    "en": "nwek"
  },
  {
    "kr": "뉕",
    "en": "nwet"
  },
  {
    "kr": "뉖",
    "en": "nwep"
  },
  {
    "kr": "뉗",
    "en": "nweh"
  },
  {
    "kr": "뉘",
    "en": "nwi"
  },
  {
    "kr": "뉙",
    "en": "nwig"
  },
  {
    "kr": "뉚",
    "en": "nwigg"
  },
  {
    "kr": "뉛",
    "en": "nwigs"
  },
  {
    "kr": "뉜",
    "en": "nwin"
  },
  {
    "kr": "뉝",
    "en": "nwinj"
  },
  {
    "kr": "뉞",
    "en": "nwinh"
  },
  {
    "kr": "뉟",
    "en": "nwid"
  },
  {
    "kr": "뉠",
    "en": "nwil"
  },
  {
    "kr": "뉡",
    "en": "nwilg"
  },
  {
    "kr": "뉢",
    "en": "nwilm"
  },
  {
    "kr": "뉣",
    "en": "nwilb"
  },
  {
    "kr": "뉤",
    "en": "nwils"
  },
  {
    "kr": "뉥",
    "en": "nwilt"
  },
  {
    "kr": "뉦",
    "en": "nwilp"
  },
  {
    "kr": "뉧",
    "en": "nwilh"
  },
  {
    "kr": "뉨",
    "en": "nwim"
  },
  {
    "kr": "뉩",
    "en": "nwib"
  },
  {
    "kr": "뉪",
    "en": "nwibs"
  },
  {
    "kr": "뉫",
    "en": "nwis"
  },
  {
    "kr": "뉬",
    "en": "nwiss"
  },
  {
    "kr": "뉭",
    "en": "nwing"
  },
  {
    "kr": "뉮",
    "en": "nwij"
  },
  {
    "kr": "뉯",
    "en": "nwic"
  },
  {
    "kr": "뉰",
    "en": "nwik"
  },
  {
    "kr": "뉱",
    "en": "nwit"
  },
  {
    "kr": "뉲",
    "en": "nwip"
  },
  {
    "kr": "뉳",
    "en": "nwih"
  },
  {
    "kr": "뉴",
    "en": "nyu"
  },
  {
    "kr": "뉵",
    "en": "nyug"
  },
  {
    "kr": "뉶",
    "en": "nyugg"
  },
  {
    "kr": "뉷",
    "en": "nyugs"
  },
  {
    "kr": "뉸",
    "en": "nyun"
  },
  {
    "kr": "뉹",
    "en": "nyunj"
  },
  {
    "kr": "뉺",
    "en": "nyunh"
  },
  {
    "kr": "뉻",
    "en": "nyud"
  },
  {
    "kr": "뉼",
    "en": "nyul"
  },
  {
    "kr": "뉽",
    "en": "nyulg"
  },
  {
    "kr": "뉾",
    "en": "nyulm"
  },
  {
    "kr": "뉿",
    "en": "nyulb"
  },
  {
    "kr": "늀",
    "en": "nyuls"
  },
  {
    "kr": "늁",
    "en": "nyult"
  },
  {
    "kr": "늂",
    "en": "nyulp"
  },
  {
    "kr": "늃",
    "en": "nyulh"
  },
  {
    "kr": "늄",
    "en": "nyum"
  },
  {
    "kr": "늅",
    "en": "nyub"
  },
  {
    "kr": "늆",
    "en": "nyubs"
  },
  {
    "kr": "늇",
    "en": "nyus"
  },
  {
    "kr": "늈",
    "en": "nyuss"
  },
  {
    "kr": "늉",
    "en": "nyung"
  },
  {
    "kr": "늊",
    "en": "nyuj"
  },
  {
    "kr": "늋",
    "en": "nyuc"
  },
  {
    "kr": "늌",
    "en": "nyuk"
  },
  {
    "kr": "늍",
    "en": "nyut"
  },
  {
    "kr": "늎",
    "en": "nyup"
  },
  {
    "kr": "늏",
    "en": "nyuh"
  },
  {
    "kr": "느",
    "en": "neu"
  },
  {
    "kr": "늑",
    "en": "neug"
  },
  {
    "kr": "늒",
    "en": "neugg"
  },
  {
    "kr": "늓",
    "en": "neugs"
  },
  {
    "kr": "는",
    "en": "neun"
  },
  {
    "kr": "늕",
    "en": "neunj"
  },
  {
    "kr": "늖",
    "en": "neunh"
  },
  {
    "kr": "늗",
    "en": "neud"
  },
  {
    "kr": "늘",
    "en": "neul"
  },
  {
    "kr": "늙",
    "en": "neulg"
  },
  {
    "kr": "늚",
    "en": "neulm"
  },
  {
    "kr": "늛",
    "en": "neulb"
  },
  {
    "kr": "늜",
    "en": "neuls"
  },
  {
    "kr": "늝",
    "en": "neult"
  },
  {
    "kr": "늞",
    "en": "neulp"
  },
  {
    "kr": "늟",
    "en": "neulh"
  },
  {
    "kr": "늠",
    "en": "neum"
  },
  {
    "kr": "늡",
    "en": "neub"
  },
  {
    "kr": "늢",
    "en": "neubs"
  },
  {
    "kr": "늣",
    "en": "neus"
  },
  {
    "kr": "늤",
    "en": "neuss"
  },
  {
    "kr": "능",
    "en": "neung"
  },
  {
    "kr": "늦",
    "en": "neuj"
  },
  {
    "kr": "늧",
    "en": "neuc"
  },
  {
    "kr": "늨",
    "en": "neuk"
  },
  {
    "kr": "늩",
    "en": "neut"
  },
  {
    "kr": "늪",
    "en": "neup"
  },
  {
    "kr": "늫",
    "en": "neuh"
  },
  {
    "kr": "늬",
    "en": "nyi"
  },
  {
    "kr": "늭",
    "en": "nyig"
  },
  {
    "kr": "늮",
    "en": "nyigg"
  },
  {
    "kr": "늯",
    "en": "nyigs"
  },
  {
    "kr": "늰",
    "en": "nyin"
  },
  {
    "kr": "늱",
    "en": "nyinj"
  },
  {
    "kr": "늲",
    "en": "nyinh"
  },
  {
    "kr": "늳",
    "en": "nyid"
  },
  {
    "kr": "늴",
    "en": "nyil"
  },
  {
    "kr": "늵",
    "en": "nyilg"
  },
  {
    "kr": "늶",
    "en": "nyilm"
  },
  {
    "kr": "늷",
    "en": "nyilb"
  },
  {
    "kr": "늸",
    "en": "nyils"
  },
  {
    "kr": "늹",
    "en": "nyilt"
  },
  {
    "kr": "늺",
    "en": "nyilp"
  },
  {
    "kr": "늻",
    "en": "nyilh"
  },
  {
    "kr": "늼",
    "en": "nyim"
  },
  {
    "kr": "늽",
    "en": "nyib"
  },
  {
    "kr": "늾",
    "en": "nyibs"
  },
  {
    "kr": "늿",
    "en": "nyis"
  },
  {
    "kr": "닀",
    "en": "nyiss"
  },
  {
    "kr": "닁",
    "en": "nying"
  },
  {
    "kr": "닂",
    "en": "nyij"
  },
  {
    "kr": "닃",
    "en": "nyic"
  },
  {
    "kr": "닄",
    "en": "nyik"
  },
  {
    "kr": "닅",
    "en": "nyit"
  },
  {
    "kr": "닆",
    "en": "nyip"
  },
  {
    "kr": "닇",
    "en": "nyih"
  },
  {
    "kr": "니",
    "en": "ni"
  },
  {
    "kr": "닉",
    "en": "nig"
  },
  {
    "kr": "닊",
    "en": "nigg"
  },
  {
    "kr": "닋",
    "en": "nigs"
  },
  {
    "kr": "닌",
    "en": "nin"
  },
  {
    "kr": "닍",
    "en": "ninj"
  },
  {
    "kr": "닎",
    "en": "ninh"
  },
  {
    "kr": "닏",
    "en": "nid"
  },
  {
    "kr": "닐",
    "en": "nil"
  },
  {
    "kr": "닑",
    "en": "nilg"
  },
  {
    "kr": "닒",
    "en": "nilm"
  },
  {
    "kr": "닓",
    "en": "nilb"
  },
  {
    "kr": "닔",
    "en": "nils"
  },
  {
    "kr": "닕",
    "en": "nilt"
  },
  {
    "kr": "닖",
    "en": "nilp"
  },
  {
    "kr": "닗",
    "en": "nilh"
  },
  {
    "kr": "님",
    "en": "nim"
  },
  {
    "kr": "닙",
    "en": "nib"
  },
  {
    "kr": "닚",
    "en": "nibs"
  },
  {
    "kr": "닛",
    "en": "nis"
  },
  {
    "kr": "닜",
    "en": "niss"
  },
  {
    "kr": "닝",
    "en": "ning"
  },
  {
    "kr": "닞",
    "en": "nij"
  },
  {
    "kr": "닟",
    "en": "nic"
  },
  {
    "kr": "닠",
    "en": "nik"
  },
  {
    "kr": "닡",
    "en": "nit"
  },
  {
    "kr": "닢",
    "en": "nip"
  },
  {
    "kr": "닣",
    "en": "nih"
  },
  {
    "kr": "다",
    "en": "da"
  },
  {
    "kr": "닥",
    "en": "dag"
  },
  {
    "kr": "닦",
    "en": "dagg"
  },
  {
    "kr": "닧",
    "en": "dags"
  },
  {
    "kr": "단",
    "en": "dan"
  },
  {
    "kr": "닩",
    "en": "danj"
  },
  {
    "kr": "닪",
    "en": "danh"
  },
  {
    "kr": "닫",
    "en": "dad"
  },
  {
    "kr": "달",
    "en": "dal"
  },
  {
    "kr": "닭",
    "en": "dalg"
  },
  {
    "kr": "닮",
    "en": "dalm"
  },
  {
    "kr": "닯",
    "en": "dalb"
  },
  {
    "kr": "닰",
    "en": "dals"
  },
  {
    "kr": "닱",
    "en": "dalt"
  },
  {
    "kr": "닲",
    "en": "dalp"
  },
  {
    "kr": "닳",
    "en": "dalh"
  },
  {
    "kr": "담",
    "en": "dam"
  },
  {
    "kr": "답",
    "en": "dab"
  },
  {
    "kr": "닶",
    "en": "dabs"
  },
  {
    "kr": "닷",
    "en": "das"
  },
  {
    "kr": "닸",
    "en": "dass"
  },
  {
    "kr": "당",
    "en": "dang"
  },
  {
    "kr": "닺",
    "en": "daj"
  },
  {
    "kr": "닻",
    "en": "dac"
  },
  {
    "kr": "닼",
    "en": "dak"
  },
  {
    "kr": "닽",
    "en": "dat"
  },
  {
    "kr": "닾",
    "en": "dap"
  },
  {
    "kr": "닿",
    "en": "dah"
  },
  {
    "kr": "대",
    "en": "dae"
  },
  {
    "kr": "댁",
    "en": "daeg"
  },
  {
    "kr": "댂",
    "en": "daegg"
  },
  {
    "kr": "댃",
    "en": "daegs"
  },
  {
    "kr": "댄",
    "en": "daen"
  },
  {
    "kr": "댅",
    "en": "daenj"
  },
  {
    "kr": "댆",
    "en": "daenh"
  },
  {
    "kr": "댇",
    "en": "daed"
  },
  {
    "kr": "댈",
    "en": "dael"
  },
  {
    "kr": "댉",
    "en": "daelg"
  },
  {
    "kr": "댊",
    "en": "daelm"
  },
  {
    "kr": "댋",
    "en": "daelb"
  },
  {
    "kr": "댌",
    "en": "daels"
  },
  {
    "kr": "댍",
    "en": "daelt"
  },
  {
    "kr": "댎",
    "en": "daelp"
  },
  {
    "kr": "댏",
    "en": "daelh"
  },
  {
    "kr": "댐",
    "en": "daem"
  },
  {
    "kr": "댑",
    "en": "daeb"
  },
  {
    "kr": "댒",
    "en": "daebs"
  },
  {
    "kr": "댓",
    "en": "daes"
  },
  {
    "kr": "댔",
    "en": "daess"
  },
  {
    "kr": "댕",
    "en": "daeng"
  },
  {
    "kr": "댖",
    "en": "daej"
  },
  {
    "kr": "댗",
    "en": "daec"
  },
  {
    "kr": "댘",
    "en": "daek"
  },
  {
    "kr": "댙",
    "en": "daet"
  },
  {
    "kr": "댚",
    "en": "daep"
  },
  {
    "kr": "댛",
    "en": "daeh"
  },
  {
    "kr": "댜",
    "en": "dya"
  },
  {
    "kr": "댝",
    "en": "dyag"
  },
  {
    "kr": "댞",
    "en": "dyagg"
  },
  {
    "kr": "댟",
    "en": "dyags"
  },
  {
    "kr": "댠",
    "en": "dyan"
  },
  {
    "kr": "댡",
    "en": "dyanj"
  },
  {
    "kr": "댢",
    "en": "dyanh"
  },
  {
    "kr": "댣",
    "en": "dyad"
  },
  {
    "kr": "댤",
    "en": "dyal"
  },
  {
    "kr": "댥",
    "en": "dyalg"
  },
  {
    "kr": "댦",
    "en": "dyalm"
  },
  {
    "kr": "댧",
    "en": "dyalb"
  },
  {
    "kr": "댨",
    "en": "dyals"
  },
  {
    "kr": "댩",
    "en": "dyalt"
  },
  {
    "kr": "댪",
    "en": "dyalp"
  },
  {
    "kr": "댫",
    "en": "dyalh"
  },
  {
    "kr": "댬",
    "en": "dyam"
  },
  {
    "kr": "댭",
    "en": "dyab"
  },
  {
    "kr": "댮",
    "en": "dyabs"
  },
  {
    "kr": "댯",
    "en": "dyas"
  },
  {
    "kr": "댰",
    "en": "dyass"
  },
  {
    "kr": "댱",
    "en": "dyang"
  },
  {
    "kr": "댲",
    "en": "dyaj"
  },
  {
    "kr": "댳",
    "en": "dyac"
  },
  {
    "kr": "댴",
    "en": "dyak"
  },
  {
    "kr": "댵",
    "en": "dyat"
  },
  {
    "kr": "댶",
    "en": "dyap"
  },
  {
    "kr": "댷",
    "en": "dyah"
  },
  {
    "kr": "댸",
    "en": "dyae"
  },
  {
    "kr": "댹",
    "en": "dyaeg"
  },
  {
    "kr": "댺",
    "en": "dyaegg"
  },
  {
    "kr": "댻",
    "en": "dyaegs"
  },
  {
    "kr": "댼",
    "en": "dyaen"
  },
  {
    "kr": "댽",
    "en": "dyaenj"
  },
  {
    "kr": "댾",
    "en": "dyaenh"
  },
  {
    "kr": "댿",
    "en": "dyaed"
  },
  {
    "kr": "덀",
    "en": "dyael"
  },
  {
    "kr": "덁",
    "en": "dyaelg"
  },
  {
    "kr": "덂",
    "en": "dyaelm"
  },
  {
    "kr": "덃",
    "en": "dyaelb"
  },
  {
    "kr": "덄",
    "en": "dyaels"
  },
  {
    "kr": "덅",
    "en": "dyaelt"
  },
  {
    "kr": "덆",
    "en": "dyaelp"
  },
  {
    "kr": "덇",
    "en": "dyaelh"
  },
  {
    "kr": "덈",
    "en": "dyaem"
  },
  {
    "kr": "덉",
    "en": "dyaeb"
  },
  {
    "kr": "덊",
    "en": "dyaebs"
  },
  {
    "kr": "덋",
    "en": "dyaes"
  },
  {
    "kr": "덌",
    "en": "dyaess"
  },
  {
    "kr": "덍",
    "en": "dyaeng"
  },
  {
    "kr": "덎",
    "en": "dyaej"
  },
  {
    "kr": "덏",
    "en": "dyaec"
  },
  {
    "kr": "덐",
    "en": "dyaek"
  },
  {
    "kr": "덑",
    "en": "dyaet"
  },
  {
    "kr": "덒",
    "en": "dyaep"
  },
  {
    "kr": "덓",
    "en": "dyaeh"
  },
  {
    "kr": "더",
    "en": "deo"
  },
  {
    "kr": "덕",
    "en": "deog"
  },
  {
    "kr": "덖",
    "en": "deogg"
  },
  {
    "kr": "덗",
    "en": "deogs"
  },
  {
    "kr": "던",
    "en": "deon"
  },
  {
    "kr": "덙",
    "en": "deonj"
  },
  {
    "kr": "덚",
    "en": "deonh"
  },
  {
    "kr": "덛",
    "en": "deod"
  },
  {
    "kr": "덜",
    "en": "deol"
  },
  {
    "kr": "덝",
    "en": "deolg"
  },
  {
    "kr": "덞",
    "en": "deolm"
  },
  {
    "kr": "덟",
    "en": "deolb"
  },
  {
    "kr": "덠",
    "en": "deols"
  },
  {
    "kr": "덡",
    "en": "deolt"
  },
  {
    "kr": "덢",
    "en": "deolp"
  },
  {
    "kr": "덣",
    "en": "deolh"
  },
  {
    "kr": "덤",
    "en": "deom"
  },
  {
    "kr": "덥",
    "en": "deob"
  },
  {
    "kr": "덦",
    "en": "deobs"
  },
  {
    "kr": "덧",
    "en": "deos"
  },
  {
    "kr": "덨",
    "en": "deoss"
  },
  {
    "kr": "덩",
    "en": "deong"
  },
  {
    "kr": "덪",
    "en": "deoj"
  },
  {
    "kr": "덫",
    "en": "deoc"
  },
  {
    "kr": "덬",
    "en": "deok"
  },
  {
    "kr": "덭",
    "en": "deot"
  },
  {
    "kr": "덮",
    "en": "deop"
  },
  {
    "kr": "덯",
    "en": "deoh"
  },
  {
    "kr": "데",
    "en": "de"
  },
  {
    "kr": "덱",
    "en": "deg"
  },
  {
    "kr": "덲",
    "en": "degg"
  },
  {
    "kr": "덳",
    "en": "degs"
  },
  {
    "kr": "덴",
    "en": "den"
  },
  {
    "kr": "덵",
    "en": "denj"
  },
  {
    "kr": "덶",
    "en": "denh"
  },
  {
    "kr": "덷",
    "en": "ded"
  },
  {
    "kr": "델",
    "en": "del"
  },
  {
    "kr": "덹",
    "en": "delg"
  },
  {
    "kr": "덺",
    "en": "delm"
  },
  {
    "kr": "덻",
    "en": "delb"
  },
  {
    "kr": "덼",
    "en": "dels"
  },
  {
    "kr": "덽",
    "en": "delt"
  },
  {
    "kr": "덾",
    "en": "delp"
  },
  {
    "kr": "덿",
    "en": "delh"
  },
  {
    "kr": "뎀",
    "en": "dem"
  },
  {
    "kr": "뎁",
    "en": "deb"
  },
  {
    "kr": "뎂",
    "en": "debs"
  },
  {
    "kr": "뎃",
    "en": "des"
  },
  {
    "kr": "뎄",
    "en": "dess"
  },
  {
    "kr": "뎅",
    "en": "deng"
  },
  {
    "kr": "뎆",
    "en": "dej"
  },
  {
    "kr": "뎇",
    "en": "dec"
  },
  {
    "kr": "뎈",
    "en": "dek"
  },
  {
    "kr": "뎉",
    "en": "det"
  },
  {
    "kr": "뎊",
    "en": "dep"
  },
  {
    "kr": "뎋",
    "en": "deh"
  },
  {
    "kr": "뎌",
    "en": "dyeo"
  },
  {
    "kr": "뎍",
    "en": "dyeog"
  },
  {
    "kr": "뎎",
    "en": "dyeogg"
  },
  {
    "kr": "뎏",
    "en": "dyeogs"
  },
  {
    "kr": "뎐",
    "en": "dyeon"
  },
  {
    "kr": "뎑",
    "en": "dyeonj"
  },
  {
    "kr": "뎒",
    "en": "dyeonh"
  },
  {
    "kr": "뎓",
    "en": "dyeod"
  },
  {
    "kr": "뎔",
    "en": "dyeol"
  },
  {
    "kr": "뎕",
    "en": "dyeolg"
  },
  {
    "kr": "뎖",
    "en": "dyeolm"
  },
  {
    "kr": "뎗",
    "en": "dyeolb"
  },
  {
    "kr": "뎘",
    "en": "dyeols"
  },
  {
    "kr": "뎙",
    "en": "dyeolt"
  },
  {
    "kr": "뎚",
    "en": "dyeolp"
  },
  {
    "kr": "뎛",
    "en": "dyeolh"
  },
  {
    "kr": "뎜",
    "en": "dyeom"
  },
  {
    "kr": "뎝",
    "en": "dyeob"
  },
  {
    "kr": "뎞",
    "en": "dyeobs"
  },
  {
    "kr": "뎟",
    "en": "dyeos"
  },
  {
    "kr": "뎠",
    "en": "dyeoss"
  },
  {
    "kr": "뎡",
    "en": "dyeong"
  },
  {
    "kr": "뎢",
    "en": "dyeoj"
  },
  {
    "kr": "뎣",
    "en": "dyeoc"
  },
  {
    "kr": "뎤",
    "en": "dyeok"
  },
  {
    "kr": "뎥",
    "en": "dyeot"
  },
  {
    "kr": "뎦",
    "en": "dyeop"
  },
  {
    "kr": "뎧",
    "en": "dyeoh"
  },
  {
    "kr": "뎨",
    "en": "dye"
  },
  {
    "kr": "뎩",
    "en": "dyeg"
  },
  {
    "kr": "뎪",
    "en": "dyegg"
  },
  {
    "kr": "뎫",
    "en": "dyegs"
  },
  {
    "kr": "뎬",
    "en": "dyen"
  },
  {
    "kr": "뎭",
    "en": "dyenj"
  },
  {
    "kr": "뎮",
    "en": "dyenh"
  },
  {
    "kr": "뎯",
    "en": "dyed"
  },
  {
    "kr": "뎰",
    "en": "dyel"
  },
  {
    "kr": "뎱",
    "en": "dyelg"
  },
  {
    "kr": "뎲",
    "en": "dyelm"
  },
  {
    "kr": "뎳",
    "en": "dyelb"
  },
  {
    "kr": "뎴",
    "en": "dyels"
  },
  {
    "kr": "뎵",
    "en": "dyelt"
  },
  {
    "kr": "뎶",
    "en": "dyelp"
  },
  {
    "kr": "뎷",
    "en": "dyelh"
  },
  {
    "kr": "뎸",
    "en": "dyem"
  },
  {
    "kr": "뎹",
    "en": "dyeb"
  },
  {
    "kr": "뎺",
    "en": "dyebs"
  },
  {
    "kr": "뎻",
    "en": "dyes"
  },
  {
    "kr": "뎼",
    "en": "dyess"
  },
  {
    "kr": "뎽",
    "en": "dyeng"
  },
  {
    "kr": "뎾",
    "en": "dyej"
  },
  {
    "kr": "뎿",
    "en": "dyec"
  },
  {
    "kr": "돀",
    "en": "dyek"
  },
  {
    "kr": "돁",
    "en": "dyet"
  },
  {
    "kr": "돂",
    "en": "dyep"
  },
  {
    "kr": "돃",
    "en": "dyeh"
  },
  {
    "kr": "도",
    "en": "do"
  },
  {
    "kr": "독",
    "en": "dog"
  },
  {
    "kr": "돆",
    "en": "dogg"
  },
  {
    "kr": "돇",
    "en": "dogs"
  },
  {
    "kr": "돈",
    "en": "don"
  },
  {
    "kr": "돉",
    "en": "donj"
  },
  {
    "kr": "돊",
    "en": "donh"
  },
  {
    "kr": "돋",
    "en": "dod"
  },
  {
    "kr": "돌",
    "en": "dol"
  },
  {
    "kr": "돍",
    "en": "dolg"
  },
  {
    "kr": "돎",
    "en": "dolm"
  },
  {
    "kr": "돏",
    "en": "dolb"
  },
  {
    "kr": "돐",
    "en": "dols"
  },
  {
    "kr": "돑",
    "en": "dolt"
  },
  {
    "kr": "돒",
    "en": "dolp"
  },
  {
    "kr": "돓",
    "en": "dolh"
  },
  {
    "kr": "돔",
    "en": "dom"
  },
  {
    "kr": "돕",
    "en": "dob"
  },
  {
    "kr": "돖",
    "en": "dobs"
  },
  {
    "kr": "돗",
    "en": "dos"
  },
  {
    "kr": "돘",
    "en": "doss"
  },
  {
    "kr": "동",
    "en": "dong"
  },
  {
    "kr": "돚",
    "en": "doj"
  },
  {
    "kr": "돛",
    "en": "doc"
  },
  {
    "kr": "돜",
    "en": "dok"
  },
  {
    "kr": "돝",
    "en": "dot"
  },
  {
    "kr": "돞",
    "en": "dop"
  },
  {
    "kr": "돟",
    "en": "doh"
  },
  {
    "kr": "돠",
    "en": "dwa"
  },
  {
    "kr": "돡",
    "en": "dwag"
  },
  {
    "kr": "돢",
    "en": "dwagg"
  },
  {
    "kr": "돣",
    "en": "dwags"
  },
  {
    "kr": "돤",
    "en": "dwan"
  },
  {
    "kr": "돥",
    "en": "dwanj"
  },
  {
    "kr": "돦",
    "en": "dwanh"
  },
  {
    "kr": "돧",
    "en": "dwad"
  },
  {
    "kr": "돨",
    "en": "dwal"
  },
  {
    "kr": "돩",
    "en": "dwalg"
  },
  {
    "kr": "돪",
    "en": "dwalm"
  },
  {
    "kr": "돫",
    "en": "dwalb"
  },
  {
    "kr": "돬",
    "en": "dwals"
  },
  {
    "kr": "돭",
    "en": "dwalt"
  },
  {
    "kr": "돮",
    "en": "dwalp"
  },
  {
    "kr": "돯",
    "en": "dwalh"
  },
  {
    "kr": "돰",
    "en": "dwam"
  },
  {
    "kr": "돱",
    "en": "dwab"
  },
  {
    "kr": "돲",
    "en": "dwabs"
  },
  {
    "kr": "돳",
    "en": "dwas"
  },
  {
    "kr": "돴",
    "en": "dwass"
  },
  {
    "kr": "돵",
    "en": "dwang"
  },
  {
    "kr": "돶",
    "en": "dwaj"
  },
  {
    "kr": "돷",
    "en": "dwac"
  },
  {
    "kr": "돸",
    "en": "dwak"
  },
  {
    "kr": "돹",
    "en": "dwat"
  },
  {
    "kr": "돺",
    "en": "dwap"
  },
  {
    "kr": "돻",
    "en": "dwah"
  },
  {
    "kr": "돼",
    "en": "dwae"
  },
  {
    "kr": "돽",
    "en": "dwaeg"
  },
  {
    "kr": "돾",
    "en": "dwaegg"
  },
  {
    "kr": "돿",
    "en": "dwaegs"
  },
  {
    "kr": "됀",
    "en": "dwaen"
  },
  {
    "kr": "됁",
    "en": "dwaenj"
  },
  {
    "kr": "됂",
    "en": "dwaenh"
  },
  {
    "kr": "됃",
    "en": "dwaed"
  },
  {
    "kr": "됄",
    "en": "dwael"
  },
  {
    "kr": "됅",
    "en": "dwaelg"
  },
  {
    "kr": "됆",
    "en": "dwaelm"
  },
  {
    "kr": "됇",
    "en": "dwaelb"
  },
  {
    "kr": "됈",
    "en": "dwaels"
  },
  {
    "kr": "됉",
    "en": "dwaelt"
  },
  {
    "kr": "됊",
    "en": "dwaelp"
  },
  {
    "kr": "됋",
    "en": "dwaelh"
  },
  {
    "kr": "됌",
    "en": "dwaem"
  },
  {
    "kr": "됍",
    "en": "dwaeb"
  },
  {
    "kr": "됎",
    "en": "dwaebs"
  },
  {
    "kr": "됏",
    "en": "dwaes"
  },
  {
    "kr": "됐",
    "en": "dwaess"
  },
  {
    "kr": "됑",
    "en": "dwaeng"
  },
  {
    "kr": "됒",
    "en": "dwaej"
  },
  {
    "kr": "됓",
    "en": "dwaec"
  },
  {
    "kr": "됔",
    "en": "dwaek"
  },
  {
    "kr": "됕",
    "en": "dwaet"
  },
  {
    "kr": "됖",
    "en": "dwaep"
  },
  {
    "kr": "됗",
    "en": "dwaeh"
  },
  {
    "kr": "되",
    "en": "doe"
  },
  {
    "kr": "됙",
    "en": "doeg"
  },
  {
    "kr": "됚",
    "en": "doegg"
  },
  {
    "kr": "됛",
    "en": "doegs"
  },
  {
    "kr": "된",
    "en": "doen"
  },
  {
    "kr": "됝",
    "en": "doenj"
  },
  {
    "kr": "됞",
    "en": "doenh"
  },
  {
    "kr": "됟",
    "en": "doed"
  },
  {
    "kr": "될",
    "en": "doel"
  },
  {
    "kr": "됡",
    "en": "doelg"
  },
  {
    "kr": "됢",
    "en": "doelm"
  },
  {
    "kr": "됣",
    "en": "doelb"
  },
  {
    "kr": "됤",
    "en": "doels"
  },
  {
    "kr": "됥",
    "en": "doelt"
  },
  {
    "kr": "됦",
    "en": "doelp"
  },
  {
    "kr": "됧",
    "en": "doelh"
  },
  {
    "kr": "됨",
    "en": "doem"
  },
  {
    "kr": "됩",
    "en": "doeb"
  },
  {
    "kr": "됪",
    "en": "doebs"
  },
  {
    "kr": "됫",
    "en": "does"
  },
  {
    "kr": "됬",
    "en": "doess"
  },
  {
    "kr": "됭",
    "en": "doeng"
  },
  {
    "kr": "됮",
    "en": "doej"
  },
  {
    "kr": "됯",
    "en": "doec"
  },
  {
    "kr": "됰",
    "en": "doek"
  },
  {
    "kr": "됱",
    "en": "doet"
  },
  {
    "kr": "됲",
    "en": "doep"
  },
  {
    "kr": "됳",
    "en": "doeh"
  },
  {
    "kr": "됴",
    "en": "dyo"
  },
  {
    "kr": "됵",
    "en": "dyog"
  },
  {
    "kr": "됶",
    "en": "dyogg"
  },
  {
    "kr": "됷",
    "en": "dyogs"
  },
  {
    "kr": "됸",
    "en": "dyon"
  },
  {
    "kr": "됹",
    "en": "dyonj"
  },
  {
    "kr": "됺",
    "en": "dyonh"
  },
  {
    "kr": "됻",
    "en": "dyod"
  },
  {
    "kr": "됼",
    "en": "dyol"
  },
  {
    "kr": "됽",
    "en": "dyolg"
  },
  {
    "kr": "됾",
    "en": "dyolm"
  },
  {
    "kr": "됿",
    "en": "dyolb"
  },
  {
    "kr": "둀",
    "en": "dyols"
  },
  {
    "kr": "둁",
    "en": "dyolt"
  },
  {
    "kr": "둂",
    "en": "dyolp"
  },
  {
    "kr": "둃",
    "en": "dyolh"
  },
  {
    "kr": "둄",
    "en": "dyom"
  },
  {
    "kr": "둅",
    "en": "dyob"
  },
  {
    "kr": "둆",
    "en": "dyobs"
  },
  {
    "kr": "둇",
    "en": "dyos"
  },
  {
    "kr": "둈",
    "en": "dyoss"
  },
  {
    "kr": "둉",
    "en": "dyong"
  },
  {
    "kr": "둊",
    "en": "dyoj"
  },
  {
    "kr": "둋",
    "en": "dyoc"
  },
  {
    "kr": "둌",
    "en": "dyok"
  },
  {
    "kr": "둍",
    "en": "dyot"
  },
  {
    "kr": "둎",
    "en": "dyop"
  },
  {
    "kr": "둏",
    "en": "dyoh"
  },
  {
    "kr": "두",
    "en": "du"
  },
  {
    "kr": "둑",
    "en": "dug"
  },
  {
    "kr": "둒",
    "en": "dugg"
  },
  {
    "kr": "둓",
    "en": "dugs"
  },
  {
    "kr": "둔",
    "en": "dun"
  },
  {
    "kr": "둕",
    "en": "dunj"
  },
  {
    "kr": "둖",
    "en": "dunh"
  },
  {
    "kr": "둗",
    "en": "dud"
  },
  {
    "kr": "둘",
    "en": "dul"
  },
  {
    "kr": "둙",
    "en": "dulg"
  },
  {
    "kr": "둚",
    "en": "dulm"
  },
  {
    "kr": "둛",
    "en": "dulb"
  },
  {
    "kr": "둜",
    "en": "duls"
  },
  {
    "kr": "둝",
    "en": "dult"
  },
  {
    "kr": "둞",
    "en": "dulp"
  },
  {
    "kr": "둟",
    "en": "dulh"
  },
  {
    "kr": "둠",
    "en": "dum"
  },
  {
    "kr": "둡",
    "en": "dub"
  },
  {
    "kr": "둢",
    "en": "dubs"
  },
  {
    "kr": "둣",
    "en": "dus"
  },
  {
    "kr": "둤",
    "en": "duss"
  },
  {
    "kr": "둥",
    "en": "dung"
  },
  {
    "kr": "둦",
    "en": "duj"
  },
  {
    "kr": "둧",
    "en": "duc"
  },
  {
    "kr": "둨",
    "en": "duk"
  },
  {
    "kr": "둩",
    "en": "dut"
  },
  {
    "kr": "둪",
    "en": "dup"
  },
  {
    "kr": "둫",
    "en": "duh"
  },
  {
    "kr": "둬",
    "en": "dweo"
  },
  {
    "kr": "둭",
    "en": "dweog"
  },
  {
    "kr": "둮",
    "en": "dweogg"
  },
  {
    "kr": "둯",
    "en": "dweogs"
  },
  {
    "kr": "둰",
    "en": "dweon"
  },
  {
    "kr": "둱",
    "en": "dweonj"
  },
  {
    "kr": "둲",
    "en": "dweonh"
  },
  {
    "kr": "둳",
    "en": "dweod"
  },
  {
    "kr": "둴",
    "en": "dweol"
  },
  {
    "kr": "둵",
    "en": "dweolg"
  },
  {
    "kr": "둶",
    "en": "dweolm"
  },
  {
    "kr": "둷",
    "en": "dweolb"
  },
  {
    "kr": "둸",
    "en": "dweols"
  },
  {
    "kr": "둹",
    "en": "dweolt"
  },
  {
    "kr": "둺",
    "en": "dweolp"
  },
  {
    "kr": "둻",
    "en": "dweolh"
  },
  {
    "kr": "둼",
    "en": "dweom"
  },
  {
    "kr": "둽",
    "en": "dweob"
  },
  {
    "kr": "둾",
    "en": "dweobs"
  },
  {
    "kr": "둿",
    "en": "dweos"
  },
  {
    "kr": "뒀",
    "en": "dweoss"
  },
  {
    "kr": "뒁",
    "en": "dweong"
  },
  {
    "kr": "뒂",
    "en": "dweoj"
  },
  {
    "kr": "뒃",
    "en": "dweoc"
  },
  {
    "kr": "뒄",
    "en": "dweok"
  },
  {
    "kr": "뒅",
    "en": "dweot"
  },
  {
    "kr": "뒆",
    "en": "dweop"
  },
  {
    "kr": "뒇",
    "en": "dweoh"
  },
  {
    "kr": "뒈",
    "en": "dwe"
  },
  {
    "kr": "뒉",
    "en": "dweg"
  },
  {
    "kr": "뒊",
    "en": "dwegg"
  },
  {
    "kr": "뒋",
    "en": "dwegs"
  },
  {
    "kr": "뒌",
    "en": "dwen"
  },
  {
    "kr": "뒍",
    "en": "dwenj"
  },
  {
    "kr": "뒎",
    "en": "dwenh"
  },
  {
    "kr": "뒏",
    "en": "dwed"
  },
  {
    "kr": "뒐",
    "en": "dwel"
  },
  {
    "kr": "뒑",
    "en": "dwelg"
  },
  {
    "kr": "뒒",
    "en": "dwelm"
  },
  {
    "kr": "뒓",
    "en": "dwelb"
  },
  {
    "kr": "뒔",
    "en": "dwels"
  },
  {
    "kr": "뒕",
    "en": "dwelt"
  },
  {
    "kr": "뒖",
    "en": "dwelp"
  },
  {
    "kr": "뒗",
    "en": "dwelh"
  },
  {
    "kr": "뒘",
    "en": "dwem"
  },
  {
    "kr": "뒙",
    "en": "dweb"
  },
  {
    "kr": "뒚",
    "en": "dwebs"
  },
  {
    "kr": "뒛",
    "en": "dwes"
  },
  {
    "kr": "뒜",
    "en": "dwess"
  },
  {
    "kr": "뒝",
    "en": "dweng"
  },
  {
    "kr": "뒞",
    "en": "dwej"
  },
  {
    "kr": "뒟",
    "en": "dwec"
  },
  {
    "kr": "뒠",
    "en": "dwek"
  },
  {
    "kr": "뒡",
    "en": "dwet"
  },
  {
    "kr": "뒢",
    "en": "dwep"
  },
  {
    "kr": "뒣",
    "en": "dweh"
  },
  {
    "kr": "뒤",
    "en": "dwi"
  },
  {
    "kr": "뒥",
    "en": "dwig"
  },
  {
    "kr": "뒦",
    "en": "dwigg"
  },
  {
    "kr": "뒧",
    "en": "dwigs"
  },
  {
    "kr": "뒨",
    "en": "dwin"
  },
  {
    "kr": "뒩",
    "en": "dwinj"
  },
  {
    "kr": "뒪",
    "en": "dwinh"
  },
  {
    "kr": "뒫",
    "en": "dwid"
  },
  {
    "kr": "뒬",
    "en": "dwil"
  },
  {
    "kr": "뒭",
    "en": "dwilg"
  },
  {
    "kr": "뒮",
    "en": "dwilm"
  },
  {
    "kr": "뒯",
    "en": "dwilb"
  },
  {
    "kr": "뒰",
    "en": "dwils"
  },
  {
    "kr": "뒱",
    "en": "dwilt"
  },
  {
    "kr": "뒲",
    "en": "dwilp"
  },
  {
    "kr": "뒳",
    "en": "dwilh"
  },
  {
    "kr": "뒴",
    "en": "dwim"
  },
  {
    "kr": "뒵",
    "en": "dwib"
  },
  {
    "kr": "뒶",
    "en": "dwibs"
  },
  {
    "kr": "뒷",
    "en": "dwis"
  },
  {
    "kr": "뒸",
    "en": "dwiss"
  },
  {
    "kr": "뒹",
    "en": "dwing"
  },
  {
    "kr": "뒺",
    "en": "dwij"
  },
  {
    "kr": "뒻",
    "en": "dwic"
  },
  {
    "kr": "뒼",
    "en": "dwik"
  },
  {
    "kr": "뒽",
    "en": "dwit"
  },
  {
    "kr": "뒾",
    "en": "dwip"
  },
  {
    "kr": "뒿",
    "en": "dwih"
  },
  {
    "kr": "듀",
    "en": "dyu"
  },
  {
    "kr": "듁",
    "en": "dyug"
  },
  {
    "kr": "듂",
    "en": "dyugg"
  },
  {
    "kr": "듃",
    "en": "dyugs"
  },
  {
    "kr": "듄",
    "en": "dyun"
  },
  {
    "kr": "듅",
    "en": "dyunj"
  },
  {
    "kr": "듆",
    "en": "dyunh"
  },
  {
    "kr": "듇",
    "en": "dyud"
  },
  {
    "kr": "듈",
    "en": "dyul"
  },
  {
    "kr": "듉",
    "en": "dyulg"
  },
  {
    "kr": "듊",
    "en": "dyulm"
  },
  {
    "kr": "듋",
    "en": "dyulb"
  },
  {
    "kr": "듌",
    "en": "dyuls"
  },
  {
    "kr": "듍",
    "en": "dyult"
  },
  {
    "kr": "듎",
    "en": "dyulp"
  },
  {
    "kr": "듏",
    "en": "dyulh"
  },
  {
    "kr": "듐",
    "en": "dyum"
  },
  {
    "kr": "듑",
    "en": "dyub"
  },
  {
    "kr": "듒",
    "en": "dyubs"
  },
  {
    "kr": "듓",
    "en": "dyus"
  },
  {
    "kr": "듔",
    "en": "dyuss"
  },
  {
    "kr": "듕",
    "en": "dyung"
  },
  {
    "kr": "듖",
    "en": "dyuj"
  },
  {
    "kr": "듗",
    "en": "dyuc"
  },
  {
    "kr": "듘",
    "en": "dyuk"
  },
  {
    "kr": "듙",
    "en": "dyut"
  },
  {
    "kr": "듚",
    "en": "dyup"
  },
  {
    "kr": "듛",
    "en": "dyuh"
  },
  {
    "kr": "드",
    "en": "deu"
  },
  {
    "kr": "득",
    "en": "deug"
  },
  {
    "kr": "듞",
    "en": "deugg"
  },
  {
    "kr": "듟",
    "en": "deugs"
  },
  {
    "kr": "든",
    "en": "deun"
  },
  {
    "kr": "듡",
    "en": "deunj"
  },
  {
    "kr": "듢",
    "en": "deunh"
  },
  {
    "kr": "듣",
    "en": "deud"
  },
  {
    "kr": "들",
    "en": "deul"
  },
  {
    "kr": "듥",
    "en": "deulg"
  },
  {
    "kr": "듦",
    "en": "deulm"
  },
  {
    "kr": "듧",
    "en": "deulb"
  },
  {
    "kr": "듨",
    "en": "deuls"
  },
  {
    "kr": "듩",
    "en": "deult"
  },
  {
    "kr": "듪",
    "en": "deulp"
  },
  {
    "kr": "듫",
    "en": "deulh"
  },
  {
    "kr": "듬",
    "en": "deum"
  },
  {
    "kr": "듭",
    "en": "deub"
  },
  {
    "kr": "듮",
    "en": "deubs"
  },
  {
    "kr": "듯",
    "en": "deus"
  },
  {
    "kr": "듰",
    "en": "deuss"
  },
  {
    "kr": "등",
    "en": "deung"
  },
  {
    "kr": "듲",
    "en": "deuj"
  },
  {
    "kr": "듳",
    "en": "deuc"
  },
  {
    "kr": "듴",
    "en": "deuk"
  },
  {
    "kr": "듵",
    "en": "deut"
  },
  {
    "kr": "듶",
    "en": "deup"
  },
  {
    "kr": "듷",
    "en": "deuh"
  },
  {
    "kr": "듸",
    "en": "dyi"
  },
  {
    "kr": "듹",
    "en": "dyig"
  },
  {
    "kr": "듺",
    "en": "dyigg"
  },
  {
    "kr": "듻",
    "en": "dyigs"
  },
  {
    "kr": "듼",
    "en": "dyin"
  },
  {
    "kr": "듽",
    "en": "dyinj"
  },
  {
    "kr": "듾",
    "en": "dyinh"
  },
  {
    "kr": "듿",
    "en": "dyid"
  },
  {
    "kr": "딀",
    "en": "dyil"
  },
  {
    "kr": "딁",
    "en": "dyilg"
  },
  {
    "kr": "딂",
    "en": "dyilm"
  },
  {
    "kr": "딃",
    "en": "dyilb"
  },
  {
    "kr": "딄",
    "en": "dyils"
  },
  {
    "kr": "딅",
    "en": "dyilt"
  },
  {
    "kr": "딆",
    "en": "dyilp"
  },
  {
    "kr": "딇",
    "en": "dyilh"
  },
  {
    "kr": "딈",
    "en": "dyim"
  },
  {
    "kr": "딉",
    "en": "dyib"
  },
  {
    "kr": "딊",
    "en": "dyibs"
  },
  {
    "kr": "딋",
    "en": "dyis"
  },
  {
    "kr": "딌",
    "en": "dyiss"
  },
  {
    "kr": "딍",
    "en": "dying"
  },
  {
    "kr": "딎",
    "en": "dyij"
  },
  {
    "kr": "딏",
    "en": "dyic"
  },
  {
    "kr": "딐",
    "en": "dyik"
  },
  {
    "kr": "딑",
    "en": "dyit"
  },
  {
    "kr": "딒",
    "en": "dyip"
  },
  {
    "kr": "딓",
    "en": "dyih"
  },
  {
    "kr": "디",
    "en": "di"
  },
  {
    "kr": "딕",
    "en": "dig"
  },
  {
    "kr": "딖",
    "en": "digg"
  },
  {
    "kr": "딗",
    "en": "digs"
  },
  {
    "kr": "딘",
    "en": "din"
  },
  {
    "kr": "딙",
    "en": "dinj"
  },
  {
    "kr": "딚",
    "en": "dinh"
  },
  {
    "kr": "딛",
    "en": "did"
  },
  {
    "kr": "딜",
    "en": "dil"
  },
  {
    "kr": "딝",
    "en": "dilg"
  },
  {
    "kr": "딞",
    "en": "dilm"
  },
  {
    "kr": "딟",
    "en": "dilb"
  },
  {
    "kr": "딠",
    "en": "dils"
  },
  {
    "kr": "딡",
    "en": "dilt"
  },
  {
    "kr": "딢",
    "en": "dilp"
  },
  {
    "kr": "딣",
    "en": "dilh"
  },
  {
    "kr": "딤",
    "en": "dim"
  },
  {
    "kr": "딥",
    "en": "dib"
  },
  {
    "kr": "딦",
    "en": "dibs"
  },
  {
    "kr": "딧",
    "en": "dis"
  },
  {
    "kr": "딨",
    "en": "diss"
  },
  {
    "kr": "딩",
    "en": "ding"
  },
  {
    "kr": "딪",
    "en": "dij"
  },
  {
    "kr": "딫",
    "en": "dic"
  },
  {
    "kr": "딬",
    "en": "dik"
  },
  {
    "kr": "딭",
    "en": "dit"
  },
  {
    "kr": "딮",
    "en": "dip"
  },
  {
    "kr": "딯",
    "en": "dih"
  },
  {
    "kr": "따",
    "en": "dda"
  },
  {
    "kr": "딱",
    "en": "ddag"
  },
  {
    "kr": "딲",
    "en": "ddagg"
  },
  {
    "kr": "딳",
    "en": "ddags"
  },
  {
    "kr": "딴",
    "en": "ddan"
  },
  {
    "kr": "딵",
    "en": "ddanj"
  },
  {
    "kr": "딶",
    "en": "ddanh"
  },
  {
    "kr": "딷",
    "en": "ddad"
  },
  {
    "kr": "딸",
    "en": "ddal"
  },
  {
    "kr": "딹",
    "en": "ddalg"
  },
  {
    "kr": "딺",
    "en": "ddalm"
  },
  {
    "kr": "딻",
    "en": "ddalb"
  },
  {
    "kr": "딼",
    "en": "ddals"
  },
  {
    "kr": "딽",
    "en": "ddalt"
  },
  {
    "kr": "딾",
    "en": "ddalp"
  },
  {
    "kr": "딿",
    "en": "ddalh"
  },
  {
    "kr": "땀",
    "en": "ddam"
  },
  {
    "kr": "땁",
    "en": "ddab"
  },
  {
    "kr": "땂",
    "en": "ddabs"
  },
  {
    "kr": "땃",
    "en": "ddas"
  },
  {
    "kr": "땄",
    "en": "ddass"
  },
  {
    "kr": "땅",
    "en": "ddang"
  },
  {
    "kr": "땆",
    "en": "ddaj"
  },
  {
    "kr": "땇",
    "en": "ddac"
  },
  {
    "kr": "땈",
    "en": "ddak"
  },
  {
    "kr": "땉",
    "en": "ddat"
  },
  {
    "kr": "땊",
    "en": "ddap"
  },
  {
    "kr": "땋",
    "en": "ddah"
  },
  {
    "kr": "때",
    "en": "ddae"
  },
  {
    "kr": "땍",
    "en": "ddaeg"
  },
  {
    "kr": "땎",
    "en": "ddaegg"
  },
  {
    "kr": "땏",
    "en": "ddaegs"
  },
  {
    "kr": "땐",
    "en": "ddaen"
  },
  {
    "kr": "땑",
    "en": "ddaenj"
  },
  {
    "kr": "땒",
    "en": "ddaenh"
  },
  {
    "kr": "땓",
    "en": "ddaed"
  },
  {
    "kr": "땔",
    "en": "ddael"
  },
  {
    "kr": "땕",
    "en": "ddaelg"
  },
  {
    "kr": "땖",
    "en": "ddaelm"
  },
  {
    "kr": "땗",
    "en": "ddaelb"
  },
  {
    "kr": "땘",
    "en": "ddaels"
  },
  {
    "kr": "땙",
    "en": "ddaelt"
  },
  {
    "kr": "땚",
    "en": "ddaelp"
  },
  {
    "kr": "땛",
    "en": "ddaelh"
  },
  {
    "kr": "땜",
    "en": "ddaem"
  },
  {
    "kr": "땝",
    "en": "ddaeb"
  },
  {
    "kr": "땞",
    "en": "ddaebs"
  },
  {
    "kr": "땟",
    "en": "ddaes"
  },
  {
    "kr": "땠",
    "en": "ddaess"
  },
  {
    "kr": "땡",
    "en": "ddaeng"
  },
  {
    "kr": "땢",
    "en": "ddaej"
  },
  {
    "kr": "땣",
    "en": "ddaec"
  },
  {
    "kr": "땤",
    "en": "ddaek"
  },
  {
    "kr": "땥",
    "en": "ddaet"
  },
  {
    "kr": "땦",
    "en": "ddaep"
  },
  {
    "kr": "땧",
    "en": "ddaeh"
  },
  {
    "kr": "땨",
    "en": "ddya"
  },
  {
    "kr": "땩",
    "en": "ddyag"
  },
  {
    "kr": "땪",
    "en": "ddyagg"
  },
  {
    "kr": "땫",
    "en": "ddyags"
  },
  {
    "kr": "땬",
    "en": "ddyan"
  },
  {
    "kr": "땭",
    "en": "ddyanj"
  },
  {
    "kr": "땮",
    "en": "ddyanh"
  },
  {
    "kr": "땯",
    "en": "ddyad"
  },
  {
    "kr": "땰",
    "en": "ddyal"
  },
  {
    "kr": "땱",
    "en": "ddyalg"
  },
  {
    "kr": "땲",
    "en": "ddyalm"
  },
  {
    "kr": "땳",
    "en": "ddyalb"
  },
  {
    "kr": "땴",
    "en": "ddyals"
  },
  {
    "kr": "땵",
    "en": "ddyalt"
  },
  {
    "kr": "땶",
    "en": "ddyalp"
  },
  {
    "kr": "땷",
    "en": "ddyalh"
  },
  {
    "kr": "땸",
    "en": "ddyam"
  },
  {
    "kr": "땹",
    "en": "ddyab"
  },
  {
    "kr": "땺",
    "en": "ddyabs"
  },
  {
    "kr": "땻",
    "en": "ddyas"
  },
  {
    "kr": "땼",
    "en": "ddyass"
  },
  {
    "kr": "땽",
    "en": "ddyang"
  },
  {
    "kr": "땾",
    "en": "ddyaj"
  },
  {
    "kr": "땿",
    "en": "ddyac"
  },
  {
    "kr": "떀",
    "en": "ddyak"
  },
  {
    "kr": "떁",
    "en": "ddyat"
  },
  {
    "kr": "떂",
    "en": "ddyap"
  },
  {
    "kr": "떃",
    "en": "ddyah"
  },
  {
    "kr": "떄",
    "en": "ddyae"
  },
  {
    "kr": "떅",
    "en": "ddyaeg"
  },
  {
    "kr": "떆",
    "en": "ddyaegg"
  },
  {
    "kr": "떇",
    "en": "ddyaegs"
  },
  {
    "kr": "떈",
    "en": "ddyaen"
  },
  {
    "kr": "떉",
    "en": "ddyaenj"
  },
  {
    "kr": "떊",
    "en": "ddyaenh"
  },
  {
    "kr": "떋",
    "en": "ddyaed"
  },
  {
    "kr": "떌",
    "en": "ddyael"
  },
  {
    "kr": "떍",
    "en": "ddyaelg"
  },
  {
    "kr": "떎",
    "en": "ddyaelm"
  },
  {
    "kr": "떏",
    "en": "ddyaelb"
  },
  {
    "kr": "떐",
    "en": "ddyaels"
  },
  {
    "kr": "떑",
    "en": "ddyaelt"
  },
  {
    "kr": "떒",
    "en": "ddyaelp"
  },
  {
    "kr": "떓",
    "en": "ddyaelh"
  },
  {
    "kr": "떔",
    "en": "ddyaem"
  },
  {
    "kr": "떕",
    "en": "ddyaeb"
  },
  {
    "kr": "떖",
    "en": "ddyaebs"
  },
  {
    "kr": "떗",
    "en": "ddyaes"
  },
  {
    "kr": "떘",
    "en": "ddyaess"
  },
  {
    "kr": "떙",
    "en": "ddyaeng"
  },
  {
    "kr": "떚",
    "en": "ddyaej"
  },
  {
    "kr": "떛",
    "en": "ddyaec"
  },
  {
    "kr": "떜",
    "en": "ddyaek"
  },
  {
    "kr": "떝",
    "en": "ddyaet"
  },
  {
    "kr": "떞",
    "en": "ddyaep"
  },
  {
    "kr": "떟",
    "en": "ddyaeh"
  },
  {
    "kr": "떠",
    "en": "ddeo"
  },
  {
    "kr": "떡",
    "en": "ddeog"
  },
  {
    "kr": "떢",
    "en": "ddeogg"
  },
  {
    "kr": "떣",
    "en": "ddeogs"
  },
  {
    "kr": "떤",
    "en": "ddeon"
  },
  {
    "kr": "떥",
    "en": "ddeonj"
  },
  {
    "kr": "떦",
    "en": "ddeonh"
  },
  {
    "kr": "떧",
    "en": "ddeod"
  },
  {
    "kr": "떨",
    "en": "ddeol"
  },
  {
    "kr": "떩",
    "en": "ddeolg"
  },
  {
    "kr": "떪",
    "en": "ddeolm"
  },
  {
    "kr": "떫",
    "en": "ddeolb"
  },
  {
    "kr": "떬",
    "en": "ddeols"
  },
  {
    "kr": "떭",
    "en": "ddeolt"
  },
  {
    "kr": "떮",
    "en": "ddeolp"
  },
  {
    "kr": "떯",
    "en": "ddeolh"
  },
  {
    "kr": "떰",
    "en": "ddeom"
  },
  {
    "kr": "떱",
    "en": "ddeob"
  },
  {
    "kr": "떲",
    "en": "ddeobs"
  },
  {
    "kr": "떳",
    "en": "ddeos"
  },
  {
    "kr": "떴",
    "en": "ddeoss"
  },
  {
    "kr": "떵",
    "en": "ddeong"
  },
  {
    "kr": "떶",
    "en": "ddeoj"
  },
  {
    "kr": "떷",
    "en": "ddeoc"
  },
  {
    "kr": "떸",
    "en": "ddeok"
  },
  {
    "kr": "떹",
    "en": "ddeot"
  },
  {
    "kr": "떺",
    "en": "ddeop"
  },
  {
    "kr": "떻",
    "en": "ddeoh"
  },
  {
    "kr": "떼",
    "en": "dde"
  },
  {
    "kr": "떽",
    "en": "ddeg"
  },
  {
    "kr": "떾",
    "en": "ddegg"
  },
  {
    "kr": "떿",
    "en": "ddegs"
  },
  {
    "kr": "뗀",
    "en": "dden"
  },
  {
    "kr": "뗁",
    "en": "ddenj"
  },
  {
    "kr": "뗂",
    "en": "ddenh"
  },
  {
    "kr": "뗃",
    "en": "dded"
  },
  {
    "kr": "뗄",
    "en": "ddel"
  },
  {
    "kr": "뗅",
    "en": "ddelg"
  },
  {
    "kr": "뗆",
    "en": "ddelm"
  },
  {
    "kr": "뗇",
    "en": "ddelb"
  },
  {
    "kr": "뗈",
    "en": "ddels"
  },
  {
    "kr": "뗉",
    "en": "ddelt"
  },
  {
    "kr": "뗊",
    "en": "ddelp"
  },
  {
    "kr": "뗋",
    "en": "ddelh"
  },
  {
    "kr": "뗌",
    "en": "ddem"
  },
  {
    "kr": "뗍",
    "en": "ddeb"
  },
  {
    "kr": "뗎",
    "en": "ddebs"
  },
  {
    "kr": "뗏",
    "en": "ddes"
  },
  {
    "kr": "뗐",
    "en": "ddess"
  },
  {
    "kr": "뗑",
    "en": "ddeng"
  },
  {
    "kr": "뗒",
    "en": "ddej"
  },
  {
    "kr": "뗓",
    "en": "ddec"
  },
  {
    "kr": "뗔",
    "en": "ddek"
  },
  {
    "kr": "뗕",
    "en": "ddet"
  },
  {
    "kr": "뗖",
    "en": "ddep"
  },
  {
    "kr": "뗗",
    "en": "ddeh"
  },
  {
    "kr": "뗘",
    "en": "ddyeo"
  },
  {
    "kr": "뗙",
    "en": "ddyeog"
  },
  {
    "kr": "뗚",
    "en": "ddyeogg"
  },
  {
    "kr": "뗛",
    "en": "ddyeogs"
  },
  {
    "kr": "뗜",
    "en": "ddyeon"
  },
  {
    "kr": "뗝",
    "en": "ddyeonj"
  },
  {
    "kr": "뗞",
    "en": "ddyeonh"
  },
  {
    "kr": "뗟",
    "en": "ddyeod"
  },
  {
    "kr": "뗠",
    "en": "ddyeol"
  },
  {
    "kr": "뗡",
    "en": "ddyeolg"
  },
  {
    "kr": "뗢",
    "en": "ddyeolm"
  },
  {
    "kr": "뗣",
    "en": "ddyeolb"
  },
  {
    "kr": "뗤",
    "en": "ddyeols"
  },
  {
    "kr": "뗥",
    "en": "ddyeolt"
  },
  {
    "kr": "뗦",
    "en": "ddyeolp"
  },
  {
    "kr": "뗧",
    "en": "ddyeolh"
  },
  {
    "kr": "뗨",
    "en": "ddyeom"
  },
  {
    "kr": "뗩",
    "en": "ddyeob"
  },
  {
    "kr": "뗪",
    "en": "ddyeobs"
  },
  {
    "kr": "뗫",
    "en": "ddyeos"
  },
  {
    "kr": "뗬",
    "en": "ddyeoss"
  },
  {
    "kr": "뗭",
    "en": "ddyeong"
  },
  {
    "kr": "뗮",
    "en": "ddyeoj"
  },
  {
    "kr": "뗯",
    "en": "ddyeoc"
  },
  {
    "kr": "뗰",
    "en": "ddyeok"
  },
  {
    "kr": "뗱",
    "en": "ddyeot"
  },
  {
    "kr": "뗲",
    "en": "ddyeop"
  },
  {
    "kr": "뗳",
    "en": "ddyeoh"
  },
  {
    "kr": "뗴",
    "en": "ddye"
  },
  {
    "kr": "뗵",
    "en": "ddyeg"
  },
  {
    "kr": "뗶",
    "en": "ddyegg"
  },
  {
    "kr": "뗷",
    "en": "ddyegs"
  },
  {
    "kr": "뗸",
    "en": "ddyen"
  },
  {
    "kr": "뗹",
    "en": "ddyenj"
  },
  {
    "kr": "뗺",
    "en": "ddyenh"
  },
  {
    "kr": "뗻",
    "en": "ddyed"
  },
  {
    "kr": "뗼",
    "en": "ddyel"
  },
  {
    "kr": "뗽",
    "en": "ddyelg"
  },
  {
    "kr": "뗾",
    "en": "ddyelm"
  },
  {
    "kr": "뗿",
    "en": "ddyelb"
  },
  {
    "kr": "똀",
    "en": "ddyels"
  },
  {
    "kr": "똁",
    "en": "ddyelt"
  },
  {
    "kr": "똂",
    "en": "ddyelp"
  },
  {
    "kr": "똃",
    "en": "ddyelh"
  },
  {
    "kr": "똄",
    "en": "ddyem"
  },
  {
    "kr": "똅",
    "en": "ddyeb"
  },
  {
    "kr": "똆",
    "en": "ddyebs"
  },
  {
    "kr": "똇",
    "en": "ddyes"
  },
  {
    "kr": "똈",
    "en": "ddyess"
  },
  {
    "kr": "똉",
    "en": "ddyeng"
  },
  {
    "kr": "똊",
    "en": "ddyej"
  },
  {
    "kr": "똋",
    "en": "ddyec"
  },
  {
    "kr": "똌",
    "en": "ddyek"
  },
  {
    "kr": "똍",
    "en": "ddyet"
  },
  {
    "kr": "똎",
    "en": "ddyep"
  },
  {
    "kr": "똏",
    "en": "ddyeh"
  },
  {
    "kr": "또",
    "en": "ddo"
  },
  {
    "kr": "똑",
    "en": "ddog"
  },
  {
    "kr": "똒",
    "en": "ddogg"
  },
  {
    "kr": "똓",
    "en": "ddogs"
  },
  {
    "kr": "똔",
    "en": "ddon"
  },
  {
    "kr": "똕",
    "en": "ddonj"
  },
  {
    "kr": "똖",
    "en": "ddonh"
  },
  {
    "kr": "똗",
    "en": "ddod"
  },
  {
    "kr": "똘",
    "en": "ddol"
  },
  {
    "kr": "똙",
    "en": "ddolg"
  },
  {
    "kr": "똚",
    "en": "ddolm"
  },
  {
    "kr": "똛",
    "en": "ddolb"
  },
  {
    "kr": "똜",
    "en": "ddols"
  },
  {
    "kr": "똝",
    "en": "ddolt"
  },
  {
    "kr": "똞",
    "en": "ddolp"
  },
  {
    "kr": "똟",
    "en": "ddolh"
  },
  {
    "kr": "똠",
    "en": "ddom"
  },
  {
    "kr": "똡",
    "en": "ddob"
  },
  {
    "kr": "똢",
    "en": "ddobs"
  },
  {
    "kr": "똣",
    "en": "ddos"
  },
  {
    "kr": "똤",
    "en": "ddoss"
  },
  {
    "kr": "똥",
    "en": "ddong"
  },
  {
    "kr": "똦",
    "en": "ddoj"
  },
  {
    "kr": "똧",
    "en": "ddoc"
  },
  {
    "kr": "똨",
    "en": "ddok"
  },
  {
    "kr": "똩",
    "en": "ddot"
  },
  {
    "kr": "똪",
    "en": "ddop"
  },
  {
    "kr": "똫",
    "en": "ddoh"
  },
  {
    "kr": "똬",
    "en": "ddwa"
  },
  {
    "kr": "똭",
    "en": "ddwag"
  },
  {
    "kr": "똮",
    "en": "ddwagg"
  },
  {
    "kr": "똯",
    "en": "ddwags"
  },
  {
    "kr": "똰",
    "en": "ddwan"
  },
  {
    "kr": "똱",
    "en": "ddwanj"
  },
  {
    "kr": "똲",
    "en": "ddwanh"
  },
  {
    "kr": "똳",
    "en": "ddwad"
  },
  {
    "kr": "똴",
    "en": "ddwal"
  },
  {
    "kr": "똵",
    "en": "ddwalg"
  },
  {
    "kr": "똶",
    "en": "ddwalm"
  },
  {
    "kr": "똷",
    "en": "ddwalb"
  },
  {
    "kr": "똸",
    "en": "ddwals"
  },
  {
    "kr": "똹",
    "en": "ddwalt"
  },
  {
    "kr": "똺",
    "en": "ddwalp"
  },
  {
    "kr": "똻",
    "en": "ddwalh"
  },
  {
    "kr": "똼",
    "en": "ddwam"
  },
  {
    "kr": "똽",
    "en": "ddwab"
  },
  {
    "kr": "똾",
    "en": "ddwabs"
  },
  {
    "kr": "똿",
    "en": "ddwas"
  },
  {
    "kr": "뙀",
    "en": "ddwass"
  },
  {
    "kr": "뙁",
    "en": "ddwang"
  },
  {
    "kr": "뙂",
    "en": "ddwaj"
  },
  {
    "kr": "뙃",
    "en": "ddwac"
  },
  {
    "kr": "뙄",
    "en": "ddwak"
  },
  {
    "kr": "뙅",
    "en": "ddwat"
  },
  {
    "kr": "뙆",
    "en": "ddwap"
  },
  {
    "kr": "뙇",
    "en": "ddwah"
  },
  {
    "kr": "뙈",
    "en": "ddwae"
  },
  {
    "kr": "뙉",
    "en": "ddwaeg"
  },
  {
    "kr": "뙊",
    "en": "ddwaegg"
  },
  {
    "kr": "뙋",
    "en": "ddwaegs"
  },
  {
    "kr": "뙌",
    "en": "ddwaen"
  },
  {
    "kr": "뙍",
    "en": "ddwaenj"
  },
  {
    "kr": "뙎",
    "en": "ddwaenh"
  },
  {
    "kr": "뙏",
    "en": "ddwaed"
  },
  {
    "kr": "뙐",
    "en": "ddwael"
  },
  {
    "kr": "뙑",
    "en": "ddwaelg"
  },
  {
    "kr": "뙒",
    "en": "ddwaelm"
  },
  {
    "kr": "뙓",
    "en": "ddwaelb"
  },
  {
    "kr": "뙔",
    "en": "ddwaels"
  },
  {
    "kr": "뙕",
    "en": "ddwaelt"
  },
  {
    "kr": "뙖",
    "en": "ddwaelp"
  },
  {
    "kr": "뙗",
    "en": "ddwaelh"
  },
  {
    "kr": "뙘",
    "en": "ddwaem"
  },
  {
    "kr": "뙙",
    "en": "ddwaeb"
  },
  {
    "kr": "뙚",
    "en": "ddwaebs"
  },
  {
    "kr": "뙛",
    "en": "ddwaes"
  },
  {
    "kr": "뙜",
    "en": "ddwaess"
  },
  {
    "kr": "뙝",
    "en": "ddwaeng"
  },
  {
    "kr": "뙞",
    "en": "ddwaej"
  },
  {
    "kr": "뙟",
    "en": "ddwaec"
  },
  {
    "kr": "뙠",
    "en": "ddwaek"
  },
  {
    "kr": "뙡",
    "en": "ddwaet"
  },
  {
    "kr": "뙢",
    "en": "ddwaep"
  },
  {
    "kr": "뙣",
    "en": "ddwaeh"
  },
  {
    "kr": "뙤",
    "en": "ddoe"
  },
  {
    "kr": "뙥",
    "en": "ddoeg"
  },
  {
    "kr": "뙦",
    "en": "ddoegg"
  },
  {
    "kr": "뙧",
    "en": "ddoegs"
  },
  {
    "kr": "뙨",
    "en": "ddoen"
  },
  {
    "kr": "뙩",
    "en": "ddoenj"
  },
  {
    "kr": "뙪",
    "en": "ddoenh"
  },
  {
    "kr": "뙫",
    "en": "ddoed"
  },
  {
    "kr": "뙬",
    "en": "ddoel"
  },
  {
    "kr": "뙭",
    "en": "ddoelg"
  },
  {
    "kr": "뙮",
    "en": "ddoelm"
  },
  {
    "kr": "뙯",
    "en": "ddoelb"
  },
  {
    "kr": "뙰",
    "en": "ddoels"
  },
  {
    "kr": "뙱",
    "en": "ddoelt"
  },
  {
    "kr": "뙲",
    "en": "ddoelp"
  },
  {
    "kr": "뙳",
    "en": "ddoelh"
  },
  {
    "kr": "뙴",
    "en": "ddoem"
  },
  {
    "kr": "뙵",
    "en": "ddoeb"
  },
  {
    "kr": "뙶",
    "en": "ddoebs"
  },
  {
    "kr": "뙷",
    "en": "ddoes"
  },
  {
    "kr": "뙸",
    "en": "ddoess"
  },
  {
    "kr": "뙹",
    "en": "ddoeng"
  },
  {
    "kr": "뙺",
    "en": "ddoej"
  },
  {
    "kr": "뙻",
    "en": "ddoec"
  },
  {
    "kr": "뙼",
    "en": "ddoek"
  },
  {
    "kr": "뙽",
    "en": "ddoet"
  },
  {
    "kr": "뙾",
    "en": "ddoep"
  },
  {
    "kr": "뙿",
    "en": "ddoeh"
  },
  {
    "kr": "뚀",
    "en": "ddyo"
  },
  {
    "kr": "뚁",
    "en": "ddyog"
  },
  {
    "kr": "뚂",
    "en": "ddyogg"
  },
  {
    "kr": "뚃",
    "en": "ddyogs"
  },
  {
    "kr": "뚄",
    "en": "ddyon"
  },
  {
    "kr": "뚅",
    "en": "ddyonj"
  },
  {
    "kr": "뚆",
    "en": "ddyonh"
  },
  {
    "kr": "뚇",
    "en": "ddyod"
  },
  {
    "kr": "뚈",
    "en": "ddyol"
  },
  {
    "kr": "뚉",
    "en": "ddyolg"
  },
  {
    "kr": "뚊",
    "en": "ddyolm"
  },
  {
    "kr": "뚋",
    "en": "ddyolb"
  },
  {
    "kr": "뚌",
    "en": "ddyols"
  },
  {
    "kr": "뚍",
    "en": "ddyolt"
  },
  {
    "kr": "뚎",
    "en": "ddyolp"
  },
  {
    "kr": "뚏",
    "en": "ddyolh"
  },
  {
    "kr": "뚐",
    "en": "ddyom"
  },
  {
    "kr": "뚑",
    "en": "ddyob"
  },
  {
    "kr": "뚒",
    "en": "ddyobs"
  },
  {
    "kr": "뚓",
    "en": "ddyos"
  },
  {
    "kr": "뚔",
    "en": "ddyoss"
  },
  {
    "kr": "뚕",
    "en": "ddyong"
  },
  {
    "kr": "뚖",
    "en": "ddyoj"
  },
  {
    "kr": "뚗",
    "en": "ddyoc"
  },
  {
    "kr": "뚘",
    "en": "ddyok"
  },
  {
    "kr": "뚙",
    "en": "ddyot"
  },
  {
    "kr": "뚚",
    "en": "ddyop"
  },
  {
    "kr": "뚛",
    "en": "ddyoh"
  },
  {
    "kr": "뚜",
    "en": "ddu"
  },
  {
    "kr": "뚝",
    "en": "ddug"
  },
  {
    "kr": "뚞",
    "en": "ddugg"
  },
  {
    "kr": "뚟",
    "en": "ddugs"
  },
  {
    "kr": "뚠",
    "en": "ddun"
  },
  {
    "kr": "뚡",
    "en": "ddunj"
  },
  {
    "kr": "뚢",
    "en": "ddunh"
  },
  {
    "kr": "뚣",
    "en": "ddud"
  },
  {
    "kr": "뚤",
    "en": "ddul"
  },
  {
    "kr": "뚥",
    "en": "ddulg"
  },
  {
    "kr": "뚦",
    "en": "ddulm"
  },
  {
    "kr": "뚧",
    "en": "ddulb"
  },
  {
    "kr": "뚨",
    "en": "dduls"
  },
  {
    "kr": "뚩",
    "en": "ddult"
  },
  {
    "kr": "뚪",
    "en": "ddulp"
  },
  {
    "kr": "뚫",
    "en": "ddulh"
  },
  {
    "kr": "뚬",
    "en": "ddum"
  },
  {
    "kr": "뚭",
    "en": "ddub"
  },
  {
    "kr": "뚮",
    "en": "ddubs"
  },
  {
    "kr": "뚯",
    "en": "ddus"
  },
  {
    "kr": "뚰",
    "en": "dduss"
  },
  {
    "kr": "뚱",
    "en": "ddung"
  },
  {
    "kr": "뚲",
    "en": "dduj"
  },
  {
    "kr": "뚳",
    "en": "dduc"
  },
  {
    "kr": "뚴",
    "en": "dduk"
  },
  {
    "kr": "뚵",
    "en": "ddut"
  },
  {
    "kr": "뚶",
    "en": "ddup"
  },
  {
    "kr": "뚷",
    "en": "dduh"
  },
  {
    "kr": "뚸",
    "en": "ddweo"
  },
  {
    "kr": "뚹",
    "en": "ddweog"
  },
  {
    "kr": "뚺",
    "en": "ddweogg"
  },
  {
    "kr": "뚻",
    "en": "ddweogs"
  },
  {
    "kr": "뚼",
    "en": "ddweon"
  },
  {
    "kr": "뚽",
    "en": "ddweonj"
  },
  {
    "kr": "뚾",
    "en": "ddweonh"
  },
  {
    "kr": "뚿",
    "en": "ddweod"
  },
  {
    "kr": "뛀",
    "en": "ddweol"
  },
  {
    "kr": "뛁",
    "en": "ddweolg"
  },
  {
    "kr": "뛂",
    "en": "ddweolm"
  },
  {
    "kr": "뛃",
    "en": "ddweolb"
  },
  {
    "kr": "뛄",
    "en": "ddweols"
  },
  {
    "kr": "뛅",
    "en": "ddweolt"
  },
  {
    "kr": "뛆",
    "en": "ddweolp"
  },
  {
    "kr": "뛇",
    "en": "ddweolh"
  },
  {
    "kr": "뛈",
    "en": "ddweom"
  },
  {
    "kr": "뛉",
    "en": "ddweob"
  },
  {
    "kr": "뛊",
    "en": "ddweobs"
  },
  {
    "kr": "뛋",
    "en": "ddweos"
  },
  {
    "kr": "뛌",
    "en": "ddweoss"
  },
  {
    "kr": "뛍",
    "en": "ddweong"
  },
  {
    "kr": "뛎",
    "en": "ddweoj"
  },
  {
    "kr": "뛏",
    "en": "ddweoc"
  },
  {
    "kr": "뛐",
    "en": "ddweok"
  },
  {
    "kr": "뛑",
    "en": "ddweot"
  },
  {
    "kr": "뛒",
    "en": "ddweop"
  },
  {
    "kr": "뛓",
    "en": "ddweoh"
  },
  {
    "kr": "뛔",
    "en": "ddwe"
  },
  {
    "kr": "뛕",
    "en": "ddweg"
  },
  {
    "kr": "뛖",
    "en": "ddwegg"
  },
  {
    "kr": "뛗",
    "en": "ddwegs"
  },
  {
    "kr": "뛘",
    "en": "ddwen"
  },
  {
    "kr": "뛙",
    "en": "ddwenj"
  },
  {
    "kr": "뛚",
    "en": "ddwenh"
  },
  {
    "kr": "뛛",
    "en": "ddwed"
  },
  {
    "kr": "뛜",
    "en": "ddwel"
  },
  {
    "kr": "뛝",
    "en": "ddwelg"
  },
  {
    "kr": "뛞",
    "en": "ddwelm"
  },
  {
    "kr": "뛟",
    "en": "ddwelb"
  },
  {
    "kr": "뛠",
    "en": "ddwels"
  },
  {
    "kr": "뛡",
    "en": "ddwelt"
  },
  {
    "kr": "뛢",
    "en": "ddwelp"
  },
  {
    "kr": "뛣",
    "en": "ddwelh"
  },
  {
    "kr": "뛤",
    "en": "ddwem"
  },
  {
    "kr": "뛥",
    "en": "ddweb"
  },
  {
    "kr": "뛦",
    "en": "ddwebs"
  },
  {
    "kr": "뛧",
    "en": "ddwes"
  },
  {
    "kr": "뛨",
    "en": "ddwess"
  },
  {
    "kr": "뛩",
    "en": "ddweng"
  },
  {
    "kr": "뛪",
    "en": "ddwej"
  },
  {
    "kr": "뛫",
    "en": "ddwec"
  },
  {
    "kr": "뛬",
    "en": "ddwek"
  },
  {
    "kr": "뛭",
    "en": "ddwet"
  },
  {
    "kr": "뛮",
    "en": "ddwep"
  },
  {
    "kr": "뛯",
    "en": "ddweh"
  },
  {
    "kr": "뛰",
    "en": "ddwi"
  },
  {
    "kr": "뛱",
    "en": "ddwig"
  },
  {
    "kr": "뛲",
    "en": "ddwigg"
  },
  {
    "kr": "뛳",
    "en": "ddwigs"
  },
  {
    "kr": "뛴",
    "en": "ddwin"
  },
  {
    "kr": "뛵",
    "en": "ddwinj"
  },
  {
    "kr": "뛶",
    "en": "ddwinh"
  },
  {
    "kr": "뛷",
    "en": "ddwid"
  },
  {
    "kr": "뛸",
    "en": "ddwil"
  },
  {
    "kr": "뛹",
    "en": "ddwilg"
  },
  {
    "kr": "뛺",
    "en": "ddwilm"
  },
  {
    "kr": "뛻",
    "en": "ddwilb"
  },
  {
    "kr": "뛼",
    "en": "ddwils"
  },
  {
    "kr": "뛽",
    "en": "ddwilt"
  },
  {
    "kr": "뛾",
    "en": "ddwilp"
  },
  {
    "kr": "뛿",
    "en": "ddwilh"
  },
  {
    "kr": "뜀",
    "en": "ddwim"
  },
  {
    "kr": "뜁",
    "en": "ddwib"
  },
  {
    "kr": "뜂",
    "en": "ddwibs"
  },
  {
    "kr": "뜃",
    "en": "ddwis"
  },
  {
    "kr": "뜄",
    "en": "ddwiss"
  },
  {
    "kr": "뜅",
    "en": "ddwing"
  },
  {
    "kr": "뜆",
    "en": "ddwij"
  },
  {
    "kr": "뜇",
    "en": "ddwic"
  },
  {
    "kr": "뜈",
    "en": "ddwik"
  },
  {
    "kr": "뜉",
    "en": "ddwit"
  },
  {
    "kr": "뜊",
    "en": "ddwip"
  },
  {
    "kr": "뜋",
    "en": "ddwih"
  },
  {
    "kr": "뜌",
    "en": "ddyu"
  },
  {
    "kr": "뜍",
    "en": "ddyug"
  },
  {
    "kr": "뜎",
    "en": "ddyugg"
  },
  {
    "kr": "뜏",
    "en": "ddyugs"
  },
  {
    "kr": "뜐",
    "en": "ddyun"
  },
  {
    "kr": "뜑",
    "en": "ddyunj"
  },
  {
    "kr": "뜒",
    "en": "ddyunh"
  },
  {
    "kr": "뜓",
    "en": "ddyud"
  },
  {
    "kr": "뜔",
    "en": "ddyul"
  },
  {
    "kr": "뜕",
    "en": "ddyulg"
  },
  {
    "kr": "뜖",
    "en": "ddyulm"
  },
  {
    "kr": "뜗",
    "en": "ddyulb"
  },
  {
    "kr": "뜘",
    "en": "ddyuls"
  },
  {
    "kr": "뜙",
    "en": "ddyult"
  },
  {
    "kr": "뜚",
    "en": "ddyulp"
  },
  {
    "kr": "뜛",
    "en": "ddyulh"
  },
  {
    "kr": "뜜",
    "en": "ddyum"
  },
  {
    "kr": "뜝",
    "en": "ddyub"
  },
  {
    "kr": "뜞",
    "en": "ddyubs"
  },
  {
    "kr": "뜟",
    "en": "ddyus"
  },
  {
    "kr": "뜠",
    "en": "ddyuss"
  },
  {
    "kr": "뜡",
    "en": "ddyung"
  },
  {
    "kr": "뜢",
    "en": "ddyuj"
  },
  {
    "kr": "뜣",
    "en": "ddyuc"
  },
  {
    "kr": "뜤",
    "en": "ddyuk"
  },
  {
    "kr": "뜥",
    "en": "ddyut"
  },
  {
    "kr": "뜦",
    "en": "ddyup"
  },
  {
    "kr": "뜧",
    "en": "ddyuh"
  },
  {
    "kr": "뜨",
    "en": "ddeu"
  },
  {
    "kr": "뜩",
    "en": "ddeug"
  },
  {
    "kr": "뜪",
    "en": "ddeugg"
  },
  {
    "kr": "뜫",
    "en": "ddeugs"
  },
  {
    "kr": "뜬",
    "en": "ddeun"
  },
  {
    "kr": "뜭",
    "en": "ddeunj"
  },
  {
    "kr": "뜮",
    "en": "ddeunh"
  },
  {
    "kr": "뜯",
    "en": "ddeud"
  },
  {
    "kr": "뜰",
    "en": "ddeul"
  },
  {
    "kr": "뜱",
    "en": "ddeulg"
  },
  {
    "kr": "뜲",
    "en": "ddeulm"
  },
  {
    "kr": "뜳",
    "en": "ddeulb"
  },
  {
    "kr": "뜴",
    "en": "ddeuls"
  },
  {
    "kr": "뜵",
    "en": "ddeult"
  },
  {
    "kr": "뜶",
    "en": "ddeulp"
  },
  {
    "kr": "뜷",
    "en": "ddeulh"
  },
  {
    "kr": "뜸",
    "en": "ddeum"
  },
  {
    "kr": "뜹",
    "en": "ddeub"
  },
  {
    "kr": "뜺",
    "en": "ddeubs"
  },
  {
    "kr": "뜻",
    "en": "ddeus"
  },
  {
    "kr": "뜼",
    "en": "ddeuss"
  },
  {
    "kr": "뜽",
    "en": "ddeung"
  },
  {
    "kr": "뜾",
    "en": "ddeuj"
  },
  {
    "kr": "뜿",
    "en": "ddeuc"
  },
  {
    "kr": "띀",
    "en": "ddeuk"
  },
  {
    "kr": "띁",
    "en": "ddeut"
  },
  {
    "kr": "띂",
    "en": "ddeup"
  },
  {
    "kr": "띃",
    "en": "ddeuh"
  },
  {
    "kr": "띄",
    "en": "ddyi"
  },
  {
    "kr": "띅",
    "en": "ddyig"
  },
  {
    "kr": "띆",
    "en": "ddyigg"
  },
  {
    "kr": "띇",
    "en": "ddyigs"
  },
  {
    "kr": "띈",
    "en": "ddyin"
  },
  {
    "kr": "띉",
    "en": "ddyinj"
  },
  {
    "kr": "띊",
    "en": "ddyinh"
  },
  {
    "kr": "띋",
    "en": "ddyid"
  },
  {
    "kr": "띌",
    "en": "ddyil"
  },
  {
    "kr": "띍",
    "en": "ddyilg"
  },
  {
    "kr": "띎",
    "en": "ddyilm"
  },
  {
    "kr": "띏",
    "en": "ddyilb"
  },
  {
    "kr": "띐",
    "en": "ddyils"
  },
  {
    "kr": "띑",
    "en": "ddyilt"
  },
  {
    "kr": "띒",
    "en": "ddyilp"
  },
  {
    "kr": "띓",
    "en": "ddyilh"
  },
  {
    "kr": "띔",
    "en": "ddyim"
  },
  {
    "kr": "띕",
    "en": "ddyib"
  },
  {
    "kr": "띖",
    "en": "ddyibs"
  },
  {
    "kr": "띗",
    "en": "ddyis"
  },
  {
    "kr": "띘",
    "en": "ddyiss"
  },
  {
    "kr": "띙",
    "en": "ddying"
  },
  {
    "kr": "띚",
    "en": "ddyij"
  },
  {
    "kr": "띛",
    "en": "ddyic"
  },
  {
    "kr": "띜",
    "en": "ddyik"
  },
  {
    "kr": "띝",
    "en": "ddyit"
  },
  {
    "kr": "띞",
    "en": "ddyip"
  },
  {
    "kr": "띟",
    "en": "ddyih"
  },
  {
    "kr": "띠",
    "en": "ddi"
  },
  {
    "kr": "띡",
    "en": "ddig"
  },
  {
    "kr": "띢",
    "en": "ddigg"
  },
  {
    "kr": "띣",
    "en": "ddigs"
  },
  {
    "kr": "띤",
    "en": "ddin"
  },
  {
    "kr": "띥",
    "en": "ddinj"
  },
  {
    "kr": "띦",
    "en": "ddinh"
  },
  {
    "kr": "띧",
    "en": "ddid"
  },
  {
    "kr": "띨",
    "en": "ddil"
  },
  {
    "kr": "띩",
    "en": "ddilg"
  },
  {
    "kr": "띪",
    "en": "ddilm"
  },
  {
    "kr": "띫",
    "en": "ddilb"
  },
  {
    "kr": "띬",
    "en": "ddils"
  },
  {
    "kr": "띭",
    "en": "ddilt"
  },
  {
    "kr": "띮",
    "en": "ddilp"
  },
  {
    "kr": "띯",
    "en": "ddilh"
  },
  {
    "kr": "띰",
    "en": "ddim"
  },
  {
    "kr": "띱",
    "en": "ddib"
  },
  {
    "kr": "띲",
    "en": "ddibs"
  },
  {
    "kr": "띳",
    "en": "ddis"
  },
  {
    "kr": "띴",
    "en": "ddiss"
  },
  {
    "kr": "띵",
    "en": "dding"
  },
  {
    "kr": "띶",
    "en": "ddij"
  },
  {
    "kr": "띷",
    "en": "ddic"
  },
  {
    "kr": "띸",
    "en": "ddik"
  },
  {
    "kr": "띹",
    "en": "ddit"
  },
  {
    "kr": "띺",
    "en": "ddip"
  },
  {
    "kr": "띻",
    "en": "ddih"
  },
  {
    "kr": "라",
    "en": "ra"
  },
  {
    "kr": "락",
    "en": "rag"
  },
  {
    "kr": "띾",
    "en": "ragg"
  },
  {
    "kr": "띿",
    "en": "rags"
  },
  {
    "kr": "란",
    "en": "ran"
  },
  {
    "kr": "랁",
    "en": "ranj"
  },
  {
    "kr": "랂",
    "en": "ranh"
  },
  {
    "kr": "랃",
    "en": "rad"
  },
  {
    "kr": "랄",
    "en": "ral"
  },
  {
    "kr": "랅",
    "en": "ralg"
  },
  {
    "kr": "랆",
    "en": "ralm"
  },
  {
    "kr": "랇",
    "en": "ralb"
  },
  {
    "kr": "랈",
    "en": "rals"
  },
  {
    "kr": "랉",
    "en": "ralt"
  },
  {
    "kr": "랊",
    "en": "ralp"
  },
  {
    "kr": "랋",
    "en": "ralh"
  },
  {
    "kr": "람",
    "en": "ram"
  },
  {
    "kr": "랍",
    "en": "rab"
  },
  {
    "kr": "랎",
    "en": "rabs"
  },
  {
    "kr": "랏",
    "en": "ras"
  },
  {
    "kr": "랐",
    "en": "rass"
  },
  {
    "kr": "랑",
    "en": "rang"
  },
  {
    "kr": "랒",
    "en": "raj"
  },
  {
    "kr": "랓",
    "en": "rac"
  },
  {
    "kr": "랔",
    "en": "rak"
  },
  {
    "kr": "랕",
    "en": "rat"
  },
  {
    "kr": "랖",
    "en": "rap"
  },
  {
    "kr": "랗",
    "en": "rah"
  },
  {
    "kr": "래",
    "en": "rae"
  },
  {
    "kr": "랙",
    "en": "raeg"
  },
  {
    "kr": "랚",
    "en": "raegg"
  },
  {
    "kr": "랛",
    "en": "raegs"
  },
  {
    "kr": "랜",
    "en": "raen"
  },
  {
    "kr": "랝",
    "en": "raenj"
  },
  {
    "kr": "랞",
    "en": "raenh"
  },
  {
    "kr": "랟",
    "en": "raed"
  },
  {
    "kr": "랠",
    "en": "rael"
  },
  {
    "kr": "랡",
    "en": "raelg"
  },
  {
    "kr": "랢",
    "en": "raelm"
  },
  {
    "kr": "랣",
    "en": "raelb"
  },
  {
    "kr": "랤",
    "en": "raels"
  },
  {
    "kr": "랥",
    "en": "raelt"
  },
  {
    "kr": "랦",
    "en": "raelp"
  },
  {
    "kr": "랧",
    "en": "raelh"
  },
  {
    "kr": "램",
    "en": "raem"
  },
  {
    "kr": "랩",
    "en": "raeb"
  },
  {
    "kr": "랪",
    "en": "raebs"
  },
  {
    "kr": "랫",
    "en": "raes"
  },
  {
    "kr": "랬",
    "en": "raess"
  },
  {
    "kr": "랭",
    "en": "raeng"
  },
  {
    "kr": "랮",
    "en": "raej"
  },
  {
    "kr": "랯",
    "en": "raec"
  },
  {
    "kr": "랰",
    "en": "raek"
  },
  {
    "kr": "랱",
    "en": "raet"
  },
  {
    "kr": "랲",
    "en": "raep"
  },
  {
    "kr": "랳",
    "en": "raeh"
  },
  {
    "kr": "랴",
    "en": "rya"
  },
  {
    "kr": "략",
    "en": "ryag"
  },
  {
    "kr": "랶",
    "en": "ryagg"
  },
  {
    "kr": "랷",
    "en": "ryags"
  },
  {
    "kr": "랸",
    "en": "ryan"
  },
  {
    "kr": "랹",
    "en": "ryanj"
  },
  {
    "kr": "랺",
    "en": "ryanh"
  },
  {
    "kr": "랻",
    "en": "ryad"
  },
  {
    "kr": "랼",
    "en": "ryal"
  },
  {
    "kr": "랽",
    "en": "ryalg"
  },
  {
    "kr": "랾",
    "en": "ryalm"
  },
  {
    "kr": "랿",
    "en": "ryalb"
  },
  {
    "kr": "럀",
    "en": "ryals"
  },
  {
    "kr": "럁",
    "en": "ryalt"
  },
  {
    "kr": "럂",
    "en": "ryalp"
  },
  {
    "kr": "럃",
    "en": "ryalh"
  },
  {
    "kr": "럄",
    "en": "ryam"
  },
  {
    "kr": "럅",
    "en": "ryab"
  },
  {
    "kr": "럆",
    "en": "ryabs"
  },
  {
    "kr": "럇",
    "en": "ryas"
  },
  {
    "kr": "럈",
    "en": "ryass"
  },
  {
    "kr": "량",
    "en": "ryang"
  },
  {
    "kr": "럊",
    "en": "ryaj"
  },
  {
    "kr": "럋",
    "en": "ryac"
  },
  {
    "kr": "럌",
    "en": "ryak"
  },
  {
    "kr": "럍",
    "en": "ryat"
  },
  {
    "kr": "럎",
    "en": "ryap"
  },
  {
    "kr": "럏",
    "en": "ryah"
  },
  {
    "kr": "럐",
    "en": "ryae"
  },
  {
    "kr": "럑",
    "en": "ryaeg"
  },
  {
    "kr": "럒",
    "en": "ryaegg"
  },
  {
    "kr": "럓",
    "en": "ryaegs"
  },
  {
    "kr": "럔",
    "en": "ryaen"
  },
  {
    "kr": "럕",
    "en": "ryaenj"
  },
  {
    "kr": "럖",
    "en": "ryaenh"
  },
  {
    "kr": "럗",
    "en": "ryaed"
  },
  {
    "kr": "럘",
    "en": "ryael"
  },
  {
    "kr": "럙",
    "en": "ryaelg"
  },
  {
    "kr": "럚",
    "en": "ryaelm"
  },
  {
    "kr": "럛",
    "en": "ryaelb"
  },
  {
    "kr": "럜",
    "en": "ryaels"
  },
  {
    "kr": "럝",
    "en": "ryaelt"
  },
  {
    "kr": "럞",
    "en": "ryaelp"
  },
  {
    "kr": "럟",
    "en": "ryaelh"
  },
  {
    "kr": "럠",
    "en": "ryaem"
  },
  {
    "kr": "럡",
    "en": "ryaeb"
  },
  {
    "kr": "럢",
    "en": "ryaebs"
  },
  {
    "kr": "럣",
    "en": "ryaes"
  },
  {
    "kr": "럤",
    "en": "ryaess"
  },
  {
    "kr": "럥",
    "en": "ryaeng"
  },
  {
    "kr": "럦",
    "en": "ryaej"
  },
  {
    "kr": "럧",
    "en": "ryaec"
  },
  {
    "kr": "럨",
    "en": "ryaek"
  },
  {
    "kr": "럩",
    "en": "ryaet"
  },
  {
    "kr": "럪",
    "en": "ryaep"
  },
  {
    "kr": "럫",
    "en": "ryaeh"
  },
  {
    "kr": "러",
    "en": "reo"
  },
  {
    "kr": "럭",
    "en": "reog"
  },
  {
    "kr": "럮",
    "en": "reogg"
  },
  {
    "kr": "럯",
    "en": "reogs"
  },
  {
    "kr": "런",
    "en": "reon"
  },
  {
    "kr": "럱",
    "en": "reonj"
  },
  {
    "kr": "럲",
    "en": "reonh"
  },
  {
    "kr": "럳",
    "en": "reod"
  },
  {
    "kr": "럴",
    "en": "reol"
  },
  {
    "kr": "럵",
    "en": "reolg"
  },
  {
    "kr": "럶",
    "en": "reolm"
  },
  {
    "kr": "럷",
    "en": "reolb"
  },
  {
    "kr": "럸",
    "en": "reols"
  },
  {
    "kr": "럹",
    "en": "reolt"
  },
  {
    "kr": "럺",
    "en": "reolp"
  },
  {
    "kr": "럻",
    "en": "reolh"
  },
  {
    "kr": "럼",
    "en": "reom"
  },
  {
    "kr": "럽",
    "en": "reob"
  },
  {
    "kr": "럾",
    "en": "reobs"
  },
  {
    "kr": "럿",
    "en": "reos"
  },
  {
    "kr": "렀",
    "en": "reoss"
  },
  {
    "kr": "렁",
    "en": "reong"
  },
  {
    "kr": "렂",
    "en": "reoj"
  },
  {
    "kr": "렃",
    "en": "reoc"
  },
  {
    "kr": "렄",
    "en": "reok"
  },
  {
    "kr": "렅",
    "en": "reot"
  },
  {
    "kr": "렆",
    "en": "reop"
  },
  {
    "kr": "렇",
    "en": "reoh"
  },
  {
    "kr": "레",
    "en": "re"
  },
  {
    "kr": "렉",
    "en": "reg"
  },
  {
    "kr": "렊",
    "en": "regg"
  },
  {
    "kr": "렋",
    "en": "regs"
  },
  {
    "kr": "렌",
    "en": "ren"
  },
  {
    "kr": "렍",
    "en": "renj"
  },
  {
    "kr": "렎",
    "en": "renh"
  },
  {
    "kr": "렏",
    "en": "red"
  },
  {
    "kr": "렐",
    "en": "rel"
  },
  {
    "kr": "렑",
    "en": "relg"
  },
  {
    "kr": "렒",
    "en": "relm"
  },
  {
    "kr": "렓",
    "en": "relb"
  },
  {
    "kr": "렔",
    "en": "rels"
  },
  {
    "kr": "렕",
    "en": "relt"
  },
  {
    "kr": "렖",
    "en": "relp"
  },
  {
    "kr": "렗",
    "en": "relh"
  },
  {
    "kr": "렘",
    "en": "rem"
  },
  {
    "kr": "렙",
    "en": "reb"
  },
  {
    "kr": "렚",
    "en": "rebs"
  },
  {
    "kr": "렛",
    "en": "res"
  },
  {
    "kr": "렜",
    "en": "ress"
  },
  {
    "kr": "렝",
    "en": "reng"
  },
  {
    "kr": "렞",
    "en": "rej"
  },
  {
    "kr": "렟",
    "en": "rec"
  },
  {
    "kr": "렠",
    "en": "rek"
  },
  {
    "kr": "렡",
    "en": "ret"
  },
  {
    "kr": "렢",
    "en": "rep"
  },
  {
    "kr": "렣",
    "en": "reh"
  },
  {
    "kr": "려",
    "en": "ryeo"
  },
  {
    "kr": "력",
    "en": "ryeog"
  },
  {
    "kr": "렦",
    "en": "ryeogg"
  },
  {
    "kr": "렧",
    "en": "ryeogs"
  },
  {
    "kr": "련",
    "en": "ryeon"
  },
  {
    "kr": "렩",
    "en": "ryeonj"
  },
  {
    "kr": "렪",
    "en": "ryeonh"
  },
  {
    "kr": "렫",
    "en": "ryeod"
  },
  {
    "kr": "렬",
    "en": "ryeol"
  },
  {
    "kr": "렭",
    "en": "ryeolg"
  },
  {
    "kr": "렮",
    "en": "ryeolm"
  },
  {
    "kr": "렯",
    "en": "ryeolb"
  },
  {
    "kr": "렰",
    "en": "ryeols"
  },
  {
    "kr": "렱",
    "en": "ryeolt"
  },
  {
    "kr": "렲",
    "en": "ryeolp"
  },
  {
    "kr": "렳",
    "en": "ryeolh"
  },
  {
    "kr": "렴",
    "en": "ryeom"
  },
  {
    "kr": "렵",
    "en": "ryeob"
  },
  {
    "kr": "렶",
    "en": "ryeobs"
  },
  {
    "kr": "렷",
    "en": "ryeos"
  },
  {
    "kr": "렸",
    "en": "ryeoss"
  },
  {
    "kr": "령",
    "en": "ryeong"
  },
  {
    "kr": "렺",
    "en": "ryeoj"
  },
  {
    "kr": "렻",
    "en": "ryeoc"
  },
  {
    "kr": "렼",
    "en": "ryeok"
  },
  {
    "kr": "렽",
    "en": "ryeot"
  },
  {
    "kr": "렾",
    "en": "ryeop"
  },
  {
    "kr": "렿",
    "en": "ryeoh"
  },
  {
    "kr": "례",
    "en": "rye"
  },
  {
    "kr": "롁",
    "en": "ryeg"
  },
  {
    "kr": "롂",
    "en": "ryegg"
  },
  {
    "kr": "롃",
    "en": "ryegs"
  },
  {
    "kr": "롄",
    "en": "ryen"
  },
  {
    "kr": "롅",
    "en": "ryenj"
  },
  {
    "kr": "롆",
    "en": "ryenh"
  },
  {
    "kr": "롇",
    "en": "ryed"
  },
  {
    "kr": "롈",
    "en": "ryel"
  },
  {
    "kr": "롉",
    "en": "ryelg"
  },
  {
    "kr": "롊",
    "en": "ryelm"
  },
  {
    "kr": "롋",
    "en": "ryelb"
  },
  {
    "kr": "롌",
    "en": "ryels"
  },
  {
    "kr": "롍",
    "en": "ryelt"
  },
  {
    "kr": "롎",
    "en": "ryelp"
  },
  {
    "kr": "롏",
    "en": "ryelh"
  },
  {
    "kr": "롐",
    "en": "ryem"
  },
  {
    "kr": "롑",
    "en": "ryeb"
  },
  {
    "kr": "롒",
    "en": "ryebs"
  },
  {
    "kr": "롓",
    "en": "ryes"
  },
  {
    "kr": "롔",
    "en": "ryess"
  },
  {
    "kr": "롕",
    "en": "ryeng"
  },
  {
    "kr": "롖",
    "en": "ryej"
  },
  {
    "kr": "롗",
    "en": "ryec"
  },
  {
    "kr": "롘",
    "en": "ryek"
  },
  {
    "kr": "롙",
    "en": "ryet"
  },
  {
    "kr": "롚",
    "en": "ryep"
  },
  {
    "kr": "롛",
    "en": "ryeh"
  },
  {
    "kr": "로",
    "en": "ro"
  },
  {
    "kr": "록",
    "en": "rog"
  },
  {
    "kr": "롞",
    "en": "rogg"
  },
  {
    "kr": "롟",
    "en": "rogs"
  },
  {
    "kr": "론",
    "en": "ron"
  },
  {
    "kr": "롡",
    "en": "ronj"
  },
  {
    "kr": "롢",
    "en": "ronh"
  },
  {
    "kr": "롣",
    "en": "rod"
  },
  {
    "kr": "롤",
    "en": "rol"
  },
  {
    "kr": "롥",
    "en": "rolg"
  },
  {
    "kr": "롦",
    "en": "rolm"
  },
  {
    "kr": "롧",
    "en": "rolb"
  },
  {
    "kr": "롨",
    "en": "rols"
  },
  {
    "kr": "롩",
    "en": "rolt"
  },
  {
    "kr": "롪",
    "en": "rolp"
  },
  {
    "kr": "롫",
    "en": "rolh"
  },
  {
    "kr": "롬",
    "en": "rom"
  },
  {
    "kr": "롭",
    "en": "rob"
  },
  {
    "kr": "롮",
    "en": "robs"
  },
  {
    "kr": "롯",
    "en": "ros"
  },
  {
    "kr": "롰",
    "en": "ross"
  },
  {
    "kr": "롱",
    "en": "rong"
  },
  {
    "kr": "롲",
    "en": "roj"
  },
  {
    "kr": "롳",
    "en": "roc"
  },
  {
    "kr": "롴",
    "en": "rok"
  },
  {
    "kr": "롵",
    "en": "rot"
  },
  {
    "kr": "롶",
    "en": "rop"
  },
  {
    "kr": "롷",
    "en": "roh"
  },
  {
    "kr": "롸",
    "en": "rwa"
  },
  {
    "kr": "롹",
    "en": "rwag"
  },
  {
    "kr": "롺",
    "en": "rwagg"
  },
  {
    "kr": "롻",
    "en": "rwags"
  },
  {
    "kr": "롼",
    "en": "rwan"
  },
  {
    "kr": "롽",
    "en": "rwanj"
  },
  {
    "kr": "롾",
    "en": "rwanh"
  },
  {
    "kr": "롿",
    "en": "rwad"
  },
  {
    "kr": "뢀",
    "en": "rwal"
  },
  {
    "kr": "뢁",
    "en": "rwalg"
  },
  {
    "kr": "뢂",
    "en": "rwalm"
  },
  {
    "kr": "뢃",
    "en": "rwalb"
  },
  {
    "kr": "뢄",
    "en": "rwals"
  },
  {
    "kr": "뢅",
    "en": "rwalt"
  },
  {
    "kr": "뢆",
    "en": "rwalp"
  },
  {
    "kr": "뢇",
    "en": "rwalh"
  },
  {
    "kr": "뢈",
    "en": "rwam"
  },
  {
    "kr": "뢉",
    "en": "rwab"
  },
  {
    "kr": "뢊",
    "en": "rwabs"
  },
  {
    "kr": "뢋",
    "en": "rwas"
  },
  {
    "kr": "뢌",
    "en": "rwass"
  },
  {
    "kr": "뢍",
    "en": "rwang"
  },
  {
    "kr": "뢎",
    "en": "rwaj"
  },
  {
    "kr": "뢏",
    "en": "rwac"
  },
  {
    "kr": "뢐",
    "en": "rwak"
  },
  {
    "kr": "뢑",
    "en": "rwat"
  },
  {
    "kr": "뢒",
    "en": "rwap"
  },
  {
    "kr": "뢓",
    "en": "rwah"
  },
  {
    "kr": "뢔",
    "en": "rwae"
  },
  {
    "kr": "뢕",
    "en": "rwaeg"
  },
  {
    "kr": "뢖",
    "en": "rwaegg"
  },
  {
    "kr": "뢗",
    "en": "rwaegs"
  },
  {
    "kr": "뢘",
    "en": "rwaen"
  },
  {
    "kr": "뢙",
    "en": "rwaenj"
  },
  {
    "kr": "뢚",
    "en": "rwaenh"
  },
  {
    "kr": "뢛",
    "en": "rwaed"
  },
  {
    "kr": "뢜",
    "en": "rwael"
  },
  {
    "kr": "뢝",
    "en": "rwaelg"
  },
  {
    "kr": "뢞",
    "en": "rwaelm"
  },
  {
    "kr": "뢟",
    "en": "rwaelb"
  },
  {
    "kr": "뢠",
    "en": "rwaels"
  },
  {
    "kr": "뢡",
    "en": "rwaelt"
  },
  {
    "kr": "뢢",
    "en": "rwaelp"
  },
  {
    "kr": "뢣",
    "en": "rwaelh"
  },
  {
    "kr": "뢤",
    "en": "rwaem"
  },
  {
    "kr": "뢥",
    "en": "rwaeb"
  },
  {
    "kr": "뢦",
    "en": "rwaebs"
  },
  {
    "kr": "뢧",
    "en": "rwaes"
  },
  {
    "kr": "뢨",
    "en": "rwaess"
  },
  {
    "kr": "뢩",
    "en": "rwaeng"
  },
  {
    "kr": "뢪",
    "en": "rwaej"
  },
  {
    "kr": "뢫",
    "en": "rwaec"
  },
  {
    "kr": "뢬",
    "en": "rwaek"
  },
  {
    "kr": "뢭",
    "en": "rwaet"
  },
  {
    "kr": "뢮",
    "en": "rwaep"
  },
  {
    "kr": "뢯",
    "en": "rwaeh"
  },
  {
    "kr": "뢰",
    "en": "roe"
  },
  {
    "kr": "뢱",
    "en": "roeg"
  },
  {
    "kr": "뢲",
    "en": "roegg"
  },
  {
    "kr": "뢳",
    "en": "roegs"
  },
  {
    "kr": "뢴",
    "en": "roen"
  },
  {
    "kr": "뢵",
    "en": "roenj"
  },
  {
    "kr": "뢶",
    "en": "roenh"
  },
  {
    "kr": "뢷",
    "en": "roed"
  },
  {
    "kr": "뢸",
    "en": "roel"
  },
  {
    "kr": "뢹",
    "en": "roelg"
  },
  {
    "kr": "뢺",
    "en": "roelm"
  },
  {
    "kr": "뢻",
    "en": "roelb"
  },
  {
    "kr": "뢼",
    "en": "roels"
  },
  {
    "kr": "뢽",
    "en": "roelt"
  },
  {
    "kr": "뢾",
    "en": "roelp"
  },
  {
    "kr": "뢿",
    "en": "roelh"
  },
  {
    "kr": "룀",
    "en": "roem"
  },
  {
    "kr": "룁",
    "en": "roeb"
  },
  {
    "kr": "룂",
    "en": "roebs"
  },
  {
    "kr": "룃",
    "en": "roes"
  },
  {
    "kr": "룄",
    "en": "roess"
  },
  {
    "kr": "룅",
    "en": "roeng"
  },
  {
    "kr": "룆",
    "en": "roej"
  },
  {
    "kr": "룇",
    "en": "roec"
  },
  {
    "kr": "룈",
    "en": "roek"
  },
  {
    "kr": "룉",
    "en": "roet"
  },
  {
    "kr": "룊",
    "en": "roep"
  },
  {
    "kr": "룋",
    "en": "roeh"
  },
  {
    "kr": "료",
    "en": "ryo"
  },
  {
    "kr": "룍",
    "en": "ryog"
  },
  {
    "kr": "룎",
    "en": "ryogg"
  },
  {
    "kr": "룏",
    "en": "ryogs"
  },
  {
    "kr": "룐",
    "en": "ryon"
  },
  {
    "kr": "룑",
    "en": "ryonj"
  },
  {
    "kr": "룒",
    "en": "ryonh"
  },
  {
    "kr": "룓",
    "en": "ryod"
  },
  {
    "kr": "룔",
    "en": "ryol"
  },
  {
    "kr": "룕",
    "en": "ryolg"
  },
  {
    "kr": "룖",
    "en": "ryolm"
  },
  {
    "kr": "룗",
    "en": "ryolb"
  },
  {
    "kr": "룘",
    "en": "ryols"
  },
  {
    "kr": "룙",
    "en": "ryolt"
  },
  {
    "kr": "룚",
    "en": "ryolp"
  },
  {
    "kr": "룛",
    "en": "ryolh"
  },
  {
    "kr": "룜",
    "en": "ryom"
  },
  {
    "kr": "룝",
    "en": "ryob"
  },
  {
    "kr": "룞",
    "en": "ryobs"
  },
  {
    "kr": "룟",
    "en": "ryos"
  },
  {
    "kr": "룠",
    "en": "ryoss"
  },
  {
    "kr": "룡",
    "en": "ryong"
  },
  {
    "kr": "룢",
    "en": "ryoj"
  },
  {
    "kr": "룣",
    "en": "ryoc"
  },
  {
    "kr": "룤",
    "en": "ryok"
  },
  {
    "kr": "룥",
    "en": "ryot"
  },
  {
    "kr": "룦",
    "en": "ryop"
  },
  {
    "kr": "룧",
    "en": "ryoh"
  },
  {
    "kr": "루",
    "en": "ru"
  },
  {
    "kr": "룩",
    "en": "rug"
  },
  {
    "kr": "룪",
    "en": "rugg"
  },
  {
    "kr": "룫",
    "en": "rugs"
  },
  {
    "kr": "룬",
    "en": "run"
  },
  {
    "kr": "룭",
    "en": "runj"
  },
  {
    "kr": "룮",
    "en": "runh"
  },
  {
    "kr": "룯",
    "en": "rud"
  },
  {
    "kr": "룰",
    "en": "rul"
  },
  {
    "kr": "룱",
    "en": "rulg"
  },
  {
    "kr": "룲",
    "en": "rulm"
  },
  {
    "kr": "룳",
    "en": "rulb"
  },
  {
    "kr": "룴",
    "en": "ruls"
  },
  {
    "kr": "룵",
    "en": "rult"
  },
  {
    "kr": "룶",
    "en": "rulp"
  },
  {
    "kr": "룷",
    "en": "rulh"
  },
  {
    "kr": "룸",
    "en": "rum"
  },
  {
    "kr": "룹",
    "en": "rub"
  },
  {
    "kr": "룺",
    "en": "rubs"
  },
  {
    "kr": "룻",
    "en": "rus"
  },
  {
    "kr": "룼",
    "en": "russ"
  },
  {
    "kr": "룽",
    "en": "rung"
  },
  {
    "kr": "룾",
    "en": "ruj"
  },
  {
    "kr": "룿",
    "en": "ruc"
  },
  {
    "kr": "뤀",
    "en": "ruk"
  },
  {
    "kr": "뤁",
    "en": "rut"
  },
  {
    "kr": "뤂",
    "en": "rup"
  },
  {
    "kr": "뤃",
    "en": "ruh"
  },
  {
    "kr": "뤄",
    "en": "rweo"
  },
  {
    "kr": "뤅",
    "en": "rweog"
  },
  {
    "kr": "뤆",
    "en": "rweogg"
  },
  {
    "kr": "뤇",
    "en": "rweogs"
  },
  {
    "kr": "뤈",
    "en": "rweon"
  },
  {
    "kr": "뤉",
    "en": "rweonj"
  },
  {
    "kr": "뤊",
    "en": "rweonh"
  },
  {
    "kr": "뤋",
    "en": "rweod"
  },
  {
    "kr": "뤌",
    "en": "rweol"
  },
  {
    "kr": "뤍",
    "en": "rweolg"
  },
  {
    "kr": "뤎",
    "en": "rweolm"
  },
  {
    "kr": "뤏",
    "en": "rweolb"
  },
  {
    "kr": "뤐",
    "en": "rweols"
  },
  {
    "kr": "뤑",
    "en": "rweolt"
  },
  {
    "kr": "뤒",
    "en": "rweolp"
  },
  {
    "kr": "뤓",
    "en": "rweolh"
  },
  {
    "kr": "뤔",
    "en": "rweom"
  },
  {
    "kr": "뤕",
    "en": "rweob"
  },
  {
    "kr": "뤖",
    "en": "rweobs"
  },
  {
    "kr": "뤗",
    "en": "rweos"
  },
  {
    "kr": "뤘",
    "en": "rweoss"
  },
  {
    "kr": "뤙",
    "en": "rweong"
  },
  {
    "kr": "뤚",
    "en": "rweoj"
  },
  {
    "kr": "뤛",
    "en": "rweoc"
  },
  {
    "kr": "뤜",
    "en": "rweok"
  },
  {
    "kr": "뤝",
    "en": "rweot"
  },
  {
    "kr": "뤞",
    "en": "rweop"
  },
  {
    "kr": "뤟",
    "en": "rweoh"
  },
  {
    "kr": "뤠",
    "en": "rwe"
  },
  {
    "kr": "뤡",
    "en": "rweg"
  },
  {
    "kr": "뤢",
    "en": "rwegg"
  },
  {
    "kr": "뤣",
    "en": "rwegs"
  },
  {
    "kr": "뤤",
    "en": "rwen"
  },
  {
    "kr": "뤥",
    "en": "rwenj"
  },
  {
    "kr": "뤦",
    "en": "rwenh"
  },
  {
    "kr": "뤧",
    "en": "rwed"
  },
  {
    "kr": "뤨",
    "en": "rwel"
  },
  {
    "kr": "뤩",
    "en": "rwelg"
  },
  {
    "kr": "뤪",
    "en": "rwelm"
  },
  {
    "kr": "뤫",
    "en": "rwelb"
  },
  {
    "kr": "뤬",
    "en": "rwels"
  },
  {
    "kr": "뤭",
    "en": "rwelt"
  },
  {
    "kr": "뤮",
    "en": "rwelp"
  },
  {
    "kr": "뤯",
    "en": "rwelh"
  },
  {
    "kr": "뤰",
    "en": "rwem"
  },
  {
    "kr": "뤱",
    "en": "rweb"
  },
  {
    "kr": "뤲",
    "en": "rwebs"
  },
  {
    "kr": "뤳",
    "en": "rwes"
  },
  {
    "kr": "뤴",
    "en": "rwess"
  },
  {
    "kr": "뤵",
    "en": "rweng"
  },
  {
    "kr": "뤶",
    "en": "rwej"
  },
  {
    "kr": "뤷",
    "en": "rwec"
  },
  {
    "kr": "뤸",
    "en": "rwek"
  },
  {
    "kr": "뤹",
    "en": "rwet"
  },
  {
    "kr": "뤺",
    "en": "rwep"
  },
  {
    "kr": "뤻",
    "en": "rweh"
  },
  {
    "kr": "뤼",
    "en": "rwi"
  },
  {
    "kr": "뤽",
    "en": "rwig"
  },
  {
    "kr": "뤾",
    "en": "rwigg"
  },
  {
    "kr": "뤿",
    "en": "rwigs"
  },
  {
    "kr": "륀",
    "en": "rwin"
  },
  {
    "kr": "륁",
    "en": "rwinj"
  },
  {
    "kr": "륂",
    "en": "rwinh"
  },
  {
    "kr": "륃",
    "en": "rwid"
  },
  {
    "kr": "륄",
    "en": "rwil"
  },
  {
    "kr": "륅",
    "en": "rwilg"
  },
  {
    "kr": "륆",
    "en": "rwilm"
  },
  {
    "kr": "륇",
    "en": "rwilb"
  },
  {
    "kr": "륈",
    "en": "rwils"
  },
  {
    "kr": "륉",
    "en": "rwilt"
  },
  {
    "kr": "륊",
    "en": "rwilp"
  },
  {
    "kr": "륋",
    "en": "rwilh"
  },
  {
    "kr": "륌",
    "en": "rwim"
  },
  {
    "kr": "륍",
    "en": "rwib"
  },
  {
    "kr": "륎",
    "en": "rwibs"
  },
  {
    "kr": "륏",
    "en": "rwis"
  },
  {
    "kr": "륐",
    "en": "rwiss"
  },
  {
    "kr": "륑",
    "en": "rwing"
  },
  {
    "kr": "륒",
    "en": "rwij"
  },
  {
    "kr": "륓",
    "en": "rwic"
  },
  {
    "kr": "륔",
    "en": "rwik"
  },
  {
    "kr": "륕",
    "en": "rwit"
  },
  {
    "kr": "륖",
    "en": "rwip"
  },
  {
    "kr": "륗",
    "en": "rwih"
  },
  {
    "kr": "류",
    "en": "ryu"
  },
  {
    "kr": "륙",
    "en": "ryug"
  },
  {
    "kr": "륚",
    "en": "ryugg"
  },
  {
    "kr": "륛",
    "en": "ryugs"
  },
  {
    "kr": "륜",
    "en": "ryun"
  },
  {
    "kr": "륝",
    "en": "ryunj"
  },
  {
    "kr": "륞",
    "en": "ryunh"
  },
  {
    "kr": "륟",
    "en": "ryud"
  },
  {
    "kr": "률",
    "en": "ryul"
  },
  {
    "kr": "륡",
    "en": "ryulg"
  },
  {
    "kr": "륢",
    "en": "ryulm"
  },
  {
    "kr": "륣",
    "en": "ryulb"
  },
  {
    "kr": "륤",
    "en": "ryuls"
  },
  {
    "kr": "륥",
    "en": "ryult"
  },
  {
    "kr": "륦",
    "en": "ryulp"
  },
  {
    "kr": "륧",
    "en": "ryulh"
  },
  {
    "kr": "륨",
    "en": "ryum"
  },
  {
    "kr": "륩",
    "en": "ryub"
  },
  {
    "kr": "륪",
    "en": "ryubs"
  },
  {
    "kr": "륫",
    "en": "ryus"
  },
  {
    "kr": "륬",
    "en": "ryuss"
  },
  {
    "kr": "륭",
    "en": "ryung"
  },
  {
    "kr": "륮",
    "en": "ryuj"
  },
  {
    "kr": "륯",
    "en": "ryuc"
  },
  {
    "kr": "륰",
    "en": "ryuk"
  },
  {
    "kr": "륱",
    "en": "ryut"
  },
  {
    "kr": "륲",
    "en": "ryup"
  },
  {
    "kr": "륳",
    "en": "ryuh"
  },
  {
    "kr": "르",
    "en": "reu"
  },
  {
    "kr": "륵",
    "en": "reug"
  },
  {
    "kr": "륶",
    "en": "reugg"
  },
  {
    "kr": "륷",
    "en": "reugs"
  },
  {
    "kr": "른",
    "en": "reun"
  },
  {
    "kr": "륹",
    "en": "reunj"
  },
  {
    "kr": "륺",
    "en": "reunh"
  },
  {
    "kr": "륻",
    "en": "reud"
  },
  {
    "kr": "를",
    "en": "reul"
  },
  {
    "kr": "륽",
    "en": "reulg"
  },
  {
    "kr": "륾",
    "en": "reulm"
  },
  {
    "kr": "륿",
    "en": "reulb"
  },
  {
    "kr": "릀",
    "en": "reuls"
  },
  {
    "kr": "릁",
    "en": "reult"
  },
  {
    "kr": "릂",
    "en": "reulp"
  },
  {
    "kr": "릃",
    "en": "reulh"
  },
  {
    "kr": "름",
    "en": "reum"
  },
  {
    "kr": "릅",
    "en": "reub"
  },
  {
    "kr": "릆",
    "en": "reubs"
  },
  {
    "kr": "릇",
    "en": "reus"
  },
  {
    "kr": "릈",
    "en": "reuss"
  },
  {
    "kr": "릉",
    "en": "reung"
  },
  {
    "kr": "릊",
    "en": "reuj"
  },
  {
    "kr": "릋",
    "en": "reuc"
  },
  {
    "kr": "릌",
    "en": "reuk"
  },
  {
    "kr": "릍",
    "en": "reut"
  },
  {
    "kr": "릎",
    "en": "reup"
  },
  {
    "kr": "릏",
    "en": "reuh"
  },
  {
    "kr": "릐",
    "en": "ryi"
  },
  {
    "kr": "릑",
    "en": "ryig"
  },
  {
    "kr": "릒",
    "en": "ryigg"
  },
  {
    "kr": "릓",
    "en": "ryigs"
  },
  {
    "kr": "릔",
    "en": "ryin"
  },
  {
    "kr": "릕",
    "en": "ryinj"
  },
  {
    "kr": "릖",
    "en": "ryinh"
  },
  {
    "kr": "릗",
    "en": "ryid"
  },
  {
    "kr": "릘",
    "en": "ryil"
  },
  {
    "kr": "릙",
    "en": "ryilg"
  },
  {
    "kr": "릚",
    "en": "ryilm"
  },
  {
    "kr": "릛",
    "en": "ryilb"
  },
  {
    "kr": "릜",
    "en": "ryils"
  },
  {
    "kr": "릝",
    "en": "ryilt"
  },
  {
    "kr": "릞",
    "en": "ryilp"
  },
  {
    "kr": "릟",
    "en": "ryilh"
  },
  {
    "kr": "릠",
    "en": "ryim"
  },
  {
    "kr": "릡",
    "en": "ryib"
  },
  {
    "kr": "릢",
    "en": "ryibs"
  },
  {
    "kr": "릣",
    "en": "ryis"
  },
  {
    "kr": "릤",
    "en": "ryiss"
  },
  {
    "kr": "릥",
    "en": "rying"
  },
  {
    "kr": "릦",
    "en": "ryij"
  },
  {
    "kr": "릧",
    "en": "ryic"
  },
  {
    "kr": "릨",
    "en": "ryik"
  },
  {
    "kr": "릩",
    "en": "ryit"
  },
  {
    "kr": "릪",
    "en": "ryip"
  },
  {
    "kr": "릫",
    "en": "ryih"
  },
  {
    "kr": "리",
    "en": "ri"
  },
  {
    "kr": "릭",
    "en": "rig"
  },
  {
    "kr": "릮",
    "en": "rigg"
  },
  {
    "kr": "릯",
    "en": "rigs"
  },
  {
    "kr": "린",
    "en": "rin"
  },
  {
    "kr": "릱",
    "en": "rinj"
  },
  {
    "kr": "릲",
    "en": "rinh"
  },
  {
    "kr": "릳",
    "en": "rid"
  },
  {
    "kr": "릴",
    "en": "ril"
  },
  {
    "kr": "릵",
    "en": "rilg"
  },
  {
    "kr": "릶",
    "en": "rilm"
  },
  {
    "kr": "릷",
    "en": "rilb"
  },
  {
    "kr": "릸",
    "en": "rils"
  },
  {
    "kr": "릹",
    "en": "rilt"
  },
  {
    "kr": "릺",
    "en": "rilp"
  },
  {
    "kr": "릻",
    "en": "rilh"
  },
  {
    "kr": "림",
    "en": "rim"
  },
  {
    "kr": "립",
    "en": "rib"
  },
  {
    "kr": "릾",
    "en": "ribs"
  },
  {
    "kr": "릿",
    "en": "ris"
  },
  {
    "kr": "맀",
    "en": "riss"
  },
  {
    "kr": "링",
    "en": "ring"
  },
  {
    "kr": "맂",
    "en": "rij"
  },
  {
    "kr": "맃",
    "en": "ric"
  },
  {
    "kr": "맄",
    "en": "rik"
  },
  {
    "kr": "맅",
    "en": "rit"
  },
  {
    "kr": "맆",
    "en": "rip"
  },
  {
    "kr": "맇",
    "en": "rih"
  },
  {
    "kr": "마",
    "en": "ma"
  },
  {
    "kr": "막",
    "en": "mag"
  },
  {
    "kr": "맊",
    "en": "magg"
  },
  {
    "kr": "맋",
    "en": "mags"
  },
  {
    "kr": "만",
    "en": "man"
  },
  {
    "kr": "맍",
    "en": "manj"
  },
  {
    "kr": "많",
    "en": "manh"
  },
  {
    "kr": "맏",
    "en": "mad"
  },
  {
    "kr": "말",
    "en": "mal"
  },
  {
    "kr": "맑",
    "en": "malg"
  },
  {
    "kr": "맒",
    "en": "malm"
  },
  {
    "kr": "맓",
    "en": "malb"
  },
  {
    "kr": "맔",
    "en": "mals"
  },
  {
    "kr": "맕",
    "en": "malt"
  },
  {
    "kr": "맖",
    "en": "malp"
  },
  {
    "kr": "맗",
    "en": "malh"
  },
  {
    "kr": "맘",
    "en": "mam"
  },
  {
    "kr": "맙",
    "en": "mab"
  },
  {
    "kr": "맚",
    "en": "mabs"
  },
  {
    "kr": "맛",
    "en": "mas"
  },
  {
    "kr": "맜",
    "en": "mass"
  },
  {
    "kr": "망",
    "en": "mang"
  },
  {
    "kr": "맞",
    "en": "maj"
  },
  {
    "kr": "맟",
    "en": "mac"
  },
  {
    "kr": "맠",
    "en": "mak"
  },
  {
    "kr": "맡",
    "en": "mat"
  },
  {
    "kr": "맢",
    "en": "map"
  },
  {
    "kr": "맣",
    "en": "mah"
  },
  {
    "kr": "매",
    "en": "mae"
  },
  {
    "kr": "맥",
    "en": "maeg"
  },
  {
    "kr": "맦",
    "en": "maegg"
  },
  {
    "kr": "맧",
    "en": "maegs"
  },
  {
    "kr": "맨",
    "en": "maen"
  },
  {
    "kr": "맩",
    "en": "maenj"
  },
  {
    "kr": "맪",
    "en": "maenh"
  },
  {
    "kr": "맫",
    "en": "maed"
  },
  {
    "kr": "맬",
    "en": "mael"
  },
  {
    "kr": "맭",
    "en": "maelg"
  },
  {
    "kr": "맮",
    "en": "maelm"
  },
  {
    "kr": "맯",
    "en": "maelb"
  },
  {
    "kr": "맰",
    "en": "maels"
  },
  {
    "kr": "맱",
    "en": "maelt"
  },
  {
    "kr": "맲",
    "en": "maelp"
  },
  {
    "kr": "맳",
    "en": "maelh"
  },
  {
    "kr": "맴",
    "en": "maem"
  },
  {
    "kr": "맵",
    "en": "maeb"
  },
  {
    "kr": "맶",
    "en": "maebs"
  },
  {
    "kr": "맷",
    "en": "maes"
  },
  {
    "kr": "맸",
    "en": "maess"
  },
  {
    "kr": "맹",
    "en": "maeng"
  },
  {
    "kr": "맺",
    "en": "maej"
  },
  {
    "kr": "맻",
    "en": "maec"
  },
  {
    "kr": "맼",
    "en": "maek"
  },
  {
    "kr": "맽",
    "en": "maet"
  },
  {
    "kr": "맾",
    "en": "maep"
  },
  {
    "kr": "맿",
    "en": "maeh"
  },
  {
    "kr": "먀",
    "en": "mya"
  },
  {
    "kr": "먁",
    "en": "myag"
  },
  {
    "kr": "먂",
    "en": "myagg"
  },
  {
    "kr": "먃",
    "en": "myags"
  },
  {
    "kr": "먄",
    "en": "myan"
  },
  {
    "kr": "먅",
    "en": "myanj"
  },
  {
    "kr": "먆",
    "en": "myanh"
  },
  {
    "kr": "먇",
    "en": "myad"
  },
  {
    "kr": "먈",
    "en": "myal"
  },
  {
    "kr": "먉",
    "en": "myalg"
  },
  {
    "kr": "먊",
    "en": "myalm"
  },
  {
    "kr": "먋",
    "en": "myalb"
  },
  {
    "kr": "먌",
    "en": "myals"
  },
  {
    "kr": "먍",
    "en": "myalt"
  },
  {
    "kr": "먎",
    "en": "myalp"
  },
  {
    "kr": "먏",
    "en": "myalh"
  },
  {
    "kr": "먐",
    "en": "myam"
  },
  {
    "kr": "먑",
    "en": "myab"
  },
  {
    "kr": "먒",
    "en": "myabs"
  },
  {
    "kr": "먓",
    "en": "myas"
  },
  {
    "kr": "먔",
    "en": "myass"
  },
  {
    "kr": "먕",
    "en": "myang"
  },
  {
    "kr": "먖",
    "en": "myaj"
  },
  {
    "kr": "먗",
    "en": "myac"
  },
  {
    "kr": "먘",
    "en": "myak"
  },
  {
    "kr": "먙",
    "en": "myat"
  },
  {
    "kr": "먚",
    "en": "myap"
  },
  {
    "kr": "먛",
    "en": "myah"
  },
  {
    "kr": "먜",
    "en": "myae"
  },
  {
    "kr": "먝",
    "en": "myaeg"
  },
  {
    "kr": "먞",
    "en": "myaegg"
  },
  {
    "kr": "먟",
    "en": "myaegs"
  },
  {
    "kr": "먠",
    "en": "myaen"
  },
  {
    "kr": "먡",
    "en": "myaenj"
  },
  {
    "kr": "먢",
    "en": "myaenh"
  },
  {
    "kr": "먣",
    "en": "myaed"
  },
  {
    "kr": "먤",
    "en": "myael"
  },
  {
    "kr": "먥",
    "en": "myaelg"
  },
  {
    "kr": "먦",
    "en": "myaelm"
  },
  {
    "kr": "먧",
    "en": "myaelb"
  },
  {
    "kr": "먨",
    "en": "myaels"
  },
  {
    "kr": "먩",
    "en": "myaelt"
  },
  {
    "kr": "먪",
    "en": "myaelp"
  },
  {
    "kr": "먫",
    "en": "myaelh"
  },
  {
    "kr": "먬",
    "en": "myaem"
  },
  {
    "kr": "먭",
    "en": "myaeb"
  },
  {
    "kr": "먮",
    "en": "myaebs"
  },
  {
    "kr": "먯",
    "en": "myaes"
  },
  {
    "kr": "먰",
    "en": "myaess"
  },
  {
    "kr": "먱",
    "en": "myaeng"
  },
  {
    "kr": "먲",
    "en": "myaej"
  },
  {
    "kr": "먳",
    "en": "myaec"
  },
  {
    "kr": "먴",
    "en": "myaek"
  },
  {
    "kr": "먵",
    "en": "myaet"
  },
  {
    "kr": "먶",
    "en": "myaep"
  },
  {
    "kr": "먷",
    "en": "myaeh"
  },
  {
    "kr": "머",
    "en": "meo"
  },
  {
    "kr": "먹",
    "en": "meog"
  },
  {
    "kr": "먺",
    "en": "meogg"
  },
  {
    "kr": "먻",
    "en": "meogs"
  },
  {
    "kr": "먼",
    "en": "meon"
  },
  {
    "kr": "먽",
    "en": "meonj"
  },
  {
    "kr": "먾",
    "en": "meonh"
  },
  {
    "kr": "먿",
    "en": "meod"
  },
  {
    "kr": "멀",
    "en": "meol"
  },
  {
    "kr": "멁",
    "en": "meolg"
  },
  {
    "kr": "멂",
    "en": "meolm"
  },
  {
    "kr": "멃",
    "en": "meolb"
  },
  {
    "kr": "멄",
    "en": "meols"
  },
  {
    "kr": "멅",
    "en": "meolt"
  },
  {
    "kr": "멆",
    "en": "meolp"
  },
  {
    "kr": "멇",
    "en": "meolh"
  },
  {
    "kr": "멈",
    "en": "meom"
  },
  {
    "kr": "멉",
    "en": "meob"
  },
  {
    "kr": "멊",
    "en": "meobs"
  },
  {
    "kr": "멋",
    "en": "meos"
  },
  {
    "kr": "멌",
    "en": "meoss"
  },
  {
    "kr": "멍",
    "en": "meong"
  },
  {
    "kr": "멎",
    "en": "meoj"
  },
  {
    "kr": "멏",
    "en": "meoc"
  },
  {
    "kr": "멐",
    "en": "meok"
  },
  {
    "kr": "멑",
    "en": "meot"
  },
  {
    "kr": "멒",
    "en": "meop"
  },
  {
    "kr": "멓",
    "en": "meoh"
  },
  {
    "kr": "메",
    "en": "me"
  },
  {
    "kr": "멕",
    "en": "meg"
  },
  {
    "kr": "멖",
    "en": "megg"
  },
  {
    "kr": "멗",
    "en": "megs"
  },
  {
    "kr": "멘",
    "en": "men"
  },
  {
    "kr": "멙",
    "en": "menj"
  },
  {
    "kr": "멚",
    "en": "menh"
  },
  {
    "kr": "멛",
    "en": "med"
  },
  {
    "kr": "멜",
    "en": "mel"
  },
  {
    "kr": "멝",
    "en": "melg"
  },
  {
    "kr": "멞",
    "en": "melm"
  },
  {
    "kr": "멟",
    "en": "melb"
  },
  {
    "kr": "멠",
    "en": "mels"
  },
  {
    "kr": "멡",
    "en": "melt"
  },
  {
    "kr": "멢",
    "en": "melp"
  },
  {
    "kr": "멣",
    "en": "melh"
  },
  {
    "kr": "멤",
    "en": "mem"
  },
  {
    "kr": "멥",
    "en": "meb"
  },
  {
    "kr": "멦",
    "en": "mebs"
  },
  {
    "kr": "멧",
    "en": "mes"
  },
  {
    "kr": "멨",
    "en": "mess"
  },
  {
    "kr": "멩",
    "en": "meng"
  },
  {
    "kr": "멪",
    "en": "mej"
  },
  {
    "kr": "멫",
    "en": "mec"
  },
  {
    "kr": "멬",
    "en": "mek"
  },
  {
    "kr": "멭",
    "en": "met"
  },
  {
    "kr": "멮",
    "en": "mep"
  },
  {
    "kr": "멯",
    "en": "meh"
  },
  {
    "kr": "며",
    "en": "myeo"
  },
  {
    "kr": "멱",
    "en": "myeog"
  },
  {
    "kr": "멲",
    "en": "myeogg"
  },
  {
    "kr": "멳",
    "en": "myeogs"
  },
  {
    "kr": "면",
    "en": "myeon"
  },
  {
    "kr": "멵",
    "en": "myeonj"
  },
  {
    "kr": "멶",
    "en": "myeonh"
  },
  {
    "kr": "멷",
    "en": "myeod"
  },
  {
    "kr": "멸",
    "en": "myeol"
  },
  {
    "kr": "멹",
    "en": "myeolg"
  },
  {
    "kr": "멺",
    "en": "myeolm"
  },
  {
    "kr": "멻",
    "en": "myeolb"
  },
  {
    "kr": "멼",
    "en": "myeols"
  },
  {
    "kr": "멽",
    "en": "myeolt"
  },
  {
    "kr": "멾",
    "en": "myeolp"
  },
  {
    "kr": "멿",
    "en": "myeolh"
  },
  {
    "kr": "몀",
    "en": "myeom"
  },
  {
    "kr": "몁",
    "en": "myeob"
  },
  {
    "kr": "몂",
    "en": "myeobs"
  },
  {
    "kr": "몃",
    "en": "myeos"
  },
  {
    "kr": "몄",
    "en": "myeoss"
  },
  {
    "kr": "명",
    "en": "myeong"
  },
  {
    "kr": "몆",
    "en": "myeoj"
  },
  {
    "kr": "몇",
    "en": "myeoc"
  },
  {
    "kr": "몈",
    "en": "myeok"
  },
  {
    "kr": "몉",
    "en": "myeot"
  },
  {
    "kr": "몊",
    "en": "myeop"
  },
  {
    "kr": "몋",
    "en": "myeoh"
  },
  {
    "kr": "몌",
    "en": "mye"
  },
  {
    "kr": "몍",
    "en": "myeg"
  },
  {
    "kr": "몎",
    "en": "myegg"
  },
  {
    "kr": "몏",
    "en": "myegs"
  },
  {
    "kr": "몐",
    "en": "myen"
  },
  {
    "kr": "몑",
    "en": "myenj"
  },
  {
    "kr": "몒",
    "en": "myenh"
  },
  {
    "kr": "몓",
    "en": "myed"
  },
  {
    "kr": "몔",
    "en": "myel"
  },
  {
    "kr": "몕",
    "en": "myelg"
  },
  {
    "kr": "몖",
    "en": "myelm"
  },
  {
    "kr": "몗",
    "en": "myelb"
  },
  {
    "kr": "몘",
    "en": "myels"
  },
  {
    "kr": "몙",
    "en": "myelt"
  },
  {
    "kr": "몚",
    "en": "myelp"
  },
  {
    "kr": "몛",
    "en": "myelh"
  },
  {
    "kr": "몜",
    "en": "myem"
  },
  {
    "kr": "몝",
    "en": "myeb"
  },
  {
    "kr": "몞",
    "en": "myebs"
  },
  {
    "kr": "몟",
    "en": "myes"
  },
  {
    "kr": "몠",
    "en": "myess"
  },
  {
    "kr": "몡",
    "en": "myeng"
  },
  {
    "kr": "몢",
    "en": "myej"
  },
  {
    "kr": "몣",
    "en": "myec"
  },
  {
    "kr": "몤",
    "en": "myek"
  },
  {
    "kr": "몥",
    "en": "myet"
  },
  {
    "kr": "몦",
    "en": "myep"
  },
  {
    "kr": "몧",
    "en": "myeh"
  },
  {
    "kr": "모",
    "en": "mo"
  },
  {
    "kr": "목",
    "en": "mog"
  },
  {
    "kr": "몪",
    "en": "mogg"
  },
  {
    "kr": "몫",
    "en": "mogs"
  },
  {
    "kr": "몬",
    "en": "mon"
  },
  {
    "kr": "몭",
    "en": "monj"
  },
  {
    "kr": "몮",
    "en": "monh"
  },
  {
    "kr": "몯",
    "en": "mod"
  },
  {
    "kr": "몰",
    "en": "mol"
  },
  {
    "kr": "몱",
    "en": "molg"
  },
  {
    "kr": "몲",
    "en": "molm"
  },
  {
    "kr": "몳",
    "en": "molb"
  },
  {
    "kr": "몴",
    "en": "mols"
  },
  {
    "kr": "몵",
    "en": "molt"
  },
  {
    "kr": "몶",
    "en": "molp"
  },
  {
    "kr": "몷",
    "en": "molh"
  },
  {
    "kr": "몸",
    "en": "mom"
  },
  {
    "kr": "몹",
    "en": "mob"
  },
  {
    "kr": "몺",
    "en": "mobs"
  },
  {
    "kr": "못",
    "en": "mos"
  },
  {
    "kr": "몼",
    "en": "moss"
  },
  {
    "kr": "몽",
    "en": "mong"
  },
  {
    "kr": "몾",
    "en": "moj"
  },
  {
    "kr": "몿",
    "en": "moc"
  },
  {
    "kr": "뫀",
    "en": "mok"
  },
  {
    "kr": "뫁",
    "en": "mot"
  },
  {
    "kr": "뫂",
    "en": "mop"
  },
  {
    "kr": "뫃",
    "en": "moh"
  },
  {
    "kr": "뫄",
    "en": "mwa"
  },
  {
    "kr": "뫅",
    "en": "mwag"
  },
  {
    "kr": "뫆",
    "en": "mwagg"
  },
  {
    "kr": "뫇",
    "en": "mwags"
  },
  {
    "kr": "뫈",
    "en": "mwan"
  },
  {
    "kr": "뫉",
    "en": "mwanj"
  },
  {
    "kr": "뫊",
    "en": "mwanh"
  },
  {
    "kr": "뫋",
    "en": "mwad"
  },
  {
    "kr": "뫌",
    "en": "mwal"
  },
  {
    "kr": "뫍",
    "en": "mwalg"
  },
  {
    "kr": "뫎",
    "en": "mwalm"
  },
  {
    "kr": "뫏",
    "en": "mwalb"
  },
  {
    "kr": "뫐",
    "en": "mwals"
  },
  {
    "kr": "뫑",
    "en": "mwalt"
  },
  {
    "kr": "뫒",
    "en": "mwalp"
  },
  {
    "kr": "뫓",
    "en": "mwalh"
  },
  {
    "kr": "뫔",
    "en": "mwam"
  },
  {
    "kr": "뫕",
    "en": "mwab"
  },
  {
    "kr": "뫖",
    "en": "mwabs"
  },
  {
    "kr": "뫗",
    "en": "mwas"
  },
  {
    "kr": "뫘",
    "en": "mwass"
  },
  {
    "kr": "뫙",
    "en": "mwang"
  },
  {
    "kr": "뫚",
    "en": "mwaj"
  },
  {
    "kr": "뫛",
    "en": "mwac"
  },
  {
    "kr": "뫜",
    "en": "mwak"
  },
  {
    "kr": "뫝",
    "en": "mwat"
  },
  {
    "kr": "뫞",
    "en": "mwap"
  },
  {
    "kr": "뫟",
    "en": "mwah"
  },
  {
    "kr": "뫠",
    "en": "mwae"
  },
  {
    "kr": "뫡",
    "en": "mwaeg"
  },
  {
    "kr": "뫢",
    "en": "mwaegg"
  },
  {
    "kr": "뫣",
    "en": "mwaegs"
  },
  {
    "kr": "뫤",
    "en": "mwaen"
  },
  {
    "kr": "뫥",
    "en": "mwaenj"
  },
  {
    "kr": "뫦",
    "en": "mwaenh"
  },
  {
    "kr": "뫧",
    "en": "mwaed"
  },
  {
    "kr": "뫨",
    "en": "mwael"
  },
  {
    "kr": "뫩",
    "en": "mwaelg"
  },
  {
    "kr": "뫪",
    "en": "mwaelm"
  },
  {
    "kr": "뫫",
    "en": "mwaelb"
  },
  {
    "kr": "뫬",
    "en": "mwaels"
  },
  {
    "kr": "뫭",
    "en": "mwaelt"
  },
  {
    "kr": "뫮",
    "en": "mwaelp"
  },
  {
    "kr": "뫯",
    "en": "mwaelh"
  },
  {
    "kr": "뫰",
    "en": "mwaem"
  },
  {
    "kr": "뫱",
    "en": "mwaeb"
  },
  {
    "kr": "뫲",
    "en": "mwaebs"
  },
  {
    "kr": "뫳",
    "en": "mwaes"
  },
  {
    "kr": "뫴",
    "en": "mwaess"
  },
  {
    "kr": "뫵",
    "en": "mwaeng"
  },
  {
    "kr": "뫶",
    "en": "mwaej"
  },
  {
    "kr": "뫷",
    "en": "mwaec"
  },
  {
    "kr": "뫸",
    "en": "mwaek"
  },
  {
    "kr": "뫹",
    "en": "mwaet"
  },
  {
    "kr": "뫺",
    "en": "mwaep"
  },
  {
    "kr": "뫻",
    "en": "mwaeh"
  },
  {
    "kr": "뫼",
    "en": "moe"
  },
  {
    "kr": "뫽",
    "en": "moeg"
  },
  {
    "kr": "뫾",
    "en": "moegg"
  },
  {
    "kr": "뫿",
    "en": "moegs"
  },
  {
    "kr": "묀",
    "en": "moen"
  },
  {
    "kr": "묁",
    "en": "moenj"
  },
  {
    "kr": "묂",
    "en": "moenh"
  },
  {
    "kr": "묃",
    "en": "moed"
  },
  {
    "kr": "묄",
    "en": "moel"
  },
  {
    "kr": "묅",
    "en": "moelg"
  },
  {
    "kr": "묆",
    "en": "moelm"
  },
  {
    "kr": "묇",
    "en": "moelb"
  },
  {
    "kr": "묈",
    "en": "moels"
  },
  {
    "kr": "묉",
    "en": "moelt"
  },
  {
    "kr": "묊",
    "en": "moelp"
  },
  {
    "kr": "묋",
    "en": "moelh"
  },
  {
    "kr": "묌",
    "en": "moem"
  },
  {
    "kr": "묍",
    "en": "moeb"
  },
  {
    "kr": "묎",
    "en": "moebs"
  },
  {
    "kr": "묏",
    "en": "moes"
  },
  {
    "kr": "묐",
    "en": "moess"
  },
  {
    "kr": "묑",
    "en": "moeng"
  },
  {
    "kr": "묒",
    "en": "moej"
  },
  {
    "kr": "묓",
    "en": "moec"
  },
  {
    "kr": "묔",
    "en": "moek"
  },
  {
    "kr": "묕",
    "en": "moet"
  },
  {
    "kr": "묖",
    "en": "moep"
  },
  {
    "kr": "묗",
    "en": "moeh"
  },
  {
    "kr": "묘",
    "en": "myo"
  },
  {
    "kr": "묙",
    "en": "myog"
  },
  {
    "kr": "묚",
    "en": "myogg"
  },
  {
    "kr": "묛",
    "en": "myogs"
  },
  {
    "kr": "묜",
    "en": "myon"
  },
  {
    "kr": "묝",
    "en": "myonj"
  },
  {
    "kr": "묞",
    "en": "myonh"
  },
  {
    "kr": "묟",
    "en": "myod"
  },
  {
    "kr": "묠",
    "en": "myol"
  },
  {
    "kr": "묡",
    "en": "myolg"
  },
  {
    "kr": "묢",
    "en": "myolm"
  },
  {
    "kr": "묣",
    "en": "myolb"
  },
  {
    "kr": "묤",
    "en": "myols"
  },
  {
    "kr": "묥",
    "en": "myolt"
  },
  {
    "kr": "묦",
    "en": "myolp"
  },
  {
    "kr": "묧",
    "en": "myolh"
  },
  {
    "kr": "묨",
    "en": "myom"
  },
  {
    "kr": "묩",
    "en": "myob"
  },
  {
    "kr": "묪",
    "en": "myobs"
  },
  {
    "kr": "묫",
    "en": "myos"
  },
  {
    "kr": "묬",
    "en": "myoss"
  },
  {
    "kr": "묭",
    "en": "myong"
  },
  {
    "kr": "묮",
    "en": "myoj"
  },
  {
    "kr": "묯",
    "en": "myoc"
  },
  {
    "kr": "묰",
    "en": "myok"
  },
  {
    "kr": "묱",
    "en": "myot"
  },
  {
    "kr": "묲",
    "en": "myop"
  },
  {
    "kr": "묳",
    "en": "myoh"
  },
  {
    "kr": "무",
    "en": "mu"
  },
  {
    "kr": "묵",
    "en": "mug"
  },
  {
    "kr": "묶",
    "en": "mugg"
  },
  {
    "kr": "묷",
    "en": "mugs"
  },
  {
    "kr": "문",
    "en": "mun"
  },
  {
    "kr": "묹",
    "en": "munj"
  },
  {
    "kr": "묺",
    "en": "munh"
  },
  {
    "kr": "묻",
    "en": "mud"
  },
  {
    "kr": "물",
    "en": "mul"
  },
  {
    "kr": "묽",
    "en": "mulg"
  },
  {
    "kr": "묾",
    "en": "mulm"
  },
  {
    "kr": "묿",
    "en": "mulb"
  },
  {
    "kr": "뭀",
    "en": "muls"
  },
  {
    "kr": "뭁",
    "en": "mult"
  },
  {
    "kr": "뭂",
    "en": "mulp"
  },
  {
    "kr": "뭃",
    "en": "mulh"
  },
  {
    "kr": "뭄",
    "en": "mum"
  },
  {
    "kr": "뭅",
    "en": "mub"
  },
  {
    "kr": "뭆",
    "en": "mubs"
  },
  {
    "kr": "뭇",
    "en": "mus"
  },
  {
    "kr": "뭈",
    "en": "muss"
  },
  {
    "kr": "뭉",
    "en": "mung"
  },
  {
    "kr": "뭊",
    "en": "muj"
  },
  {
    "kr": "뭋",
    "en": "muc"
  },
  {
    "kr": "뭌",
    "en": "muk"
  },
  {
    "kr": "뭍",
    "en": "mut"
  },
  {
    "kr": "뭎",
    "en": "mup"
  },
  {
    "kr": "뭏",
    "en": "muh"
  },
  {
    "kr": "뭐",
    "en": "mweo"
  },
  {
    "kr": "뭑",
    "en": "mweog"
  },
  {
    "kr": "뭒",
    "en": "mweogg"
  },
  {
    "kr": "뭓",
    "en": "mweogs"
  },
  {
    "kr": "뭔",
    "en": "mweon"
  },
  {
    "kr": "뭕",
    "en": "mweonj"
  },
  {
    "kr": "뭖",
    "en": "mweonh"
  },
  {
    "kr": "뭗",
    "en": "mweod"
  },
  {
    "kr": "뭘",
    "en": "mweol"
  },
  {
    "kr": "뭙",
    "en": "mweolg"
  },
  {
    "kr": "뭚",
    "en": "mweolm"
  },
  {
    "kr": "뭛",
    "en": "mweolb"
  },
  {
    "kr": "뭜",
    "en": "mweols"
  },
  {
    "kr": "뭝",
    "en": "mweolt"
  },
  {
    "kr": "뭞",
    "en": "mweolp"
  },
  {
    "kr": "뭟",
    "en": "mweolh"
  },
  {
    "kr": "뭠",
    "en": "mweom"
  },
  {
    "kr": "뭡",
    "en": "mweob"
  },
  {
    "kr": "뭢",
    "en": "mweobs"
  },
  {
    "kr": "뭣",
    "en": "mweos"
  },
  {
    "kr": "뭤",
    "en": "mweoss"
  },
  {
    "kr": "뭥",
    "en": "mweong"
  },
  {
    "kr": "뭦",
    "en": "mweoj"
  },
  {
    "kr": "뭧",
    "en": "mweoc"
  },
  {
    "kr": "뭨",
    "en": "mweok"
  },
  {
    "kr": "뭩",
    "en": "mweot"
  },
  {
    "kr": "뭪",
    "en": "mweop"
  },
  {
    "kr": "뭫",
    "en": "mweoh"
  },
  {
    "kr": "뭬",
    "en": "mwe"
  },
  {
    "kr": "뭭",
    "en": "mweg"
  },
  {
    "kr": "뭮",
    "en": "mwegg"
  },
  {
    "kr": "뭯",
    "en": "mwegs"
  },
  {
    "kr": "뭰",
    "en": "mwen"
  },
  {
    "kr": "뭱",
    "en": "mwenj"
  },
  {
    "kr": "뭲",
    "en": "mwenh"
  },
  {
    "kr": "뭳",
    "en": "mwed"
  },
  {
    "kr": "뭴",
    "en": "mwel"
  },
  {
    "kr": "뭵",
    "en": "mwelg"
  },
  {
    "kr": "뭶",
    "en": "mwelm"
  },
  {
    "kr": "뭷",
    "en": "mwelb"
  },
  {
    "kr": "뭸",
    "en": "mwels"
  },
  {
    "kr": "뭹",
    "en": "mwelt"
  },
  {
    "kr": "뭺",
    "en": "mwelp"
  },
  {
    "kr": "뭻",
    "en": "mwelh"
  },
  {
    "kr": "뭼",
    "en": "mwem"
  },
  {
    "kr": "뭽",
    "en": "mweb"
  },
  {
    "kr": "뭾",
    "en": "mwebs"
  },
  {
    "kr": "뭿",
    "en": "mwes"
  },
  {
    "kr": "뮀",
    "en": "mwess"
  },
  {
    "kr": "뮁",
    "en": "mweng"
  },
  {
    "kr": "뮂",
    "en": "mwej"
  },
  {
    "kr": "뮃",
    "en": "mwec"
  },
  {
    "kr": "뮄",
    "en": "mwek"
  },
  {
    "kr": "뮅",
    "en": "mwet"
  },
  {
    "kr": "뮆",
    "en": "mwep"
  },
  {
    "kr": "뮇",
    "en": "mweh"
  },
  {
    "kr": "뮈",
    "en": "mwi"
  },
  {
    "kr": "뮉",
    "en": "mwig"
  },
  {
    "kr": "뮊",
    "en": "mwigg"
  },
  {
    "kr": "뮋",
    "en": "mwigs"
  },
  {
    "kr": "뮌",
    "en": "mwin"
  },
  {
    "kr": "뮍",
    "en": "mwinj"
  },
  {
    "kr": "뮎",
    "en": "mwinh"
  },
  {
    "kr": "뮏",
    "en": "mwid"
  },
  {
    "kr": "뮐",
    "en": "mwil"
  },
  {
    "kr": "뮑",
    "en": "mwilg"
  },
  {
    "kr": "뮒",
    "en": "mwilm"
  },
  {
    "kr": "뮓",
    "en": "mwilb"
  },
  {
    "kr": "뮔",
    "en": "mwils"
  },
  {
    "kr": "뮕",
    "en": "mwilt"
  },
  {
    "kr": "뮖",
    "en": "mwilp"
  },
  {
    "kr": "뮗",
    "en": "mwilh"
  },
  {
    "kr": "뮘",
    "en": "mwim"
  },
  {
    "kr": "뮙",
    "en": "mwib"
  },
  {
    "kr": "뮚",
    "en": "mwibs"
  },
  {
    "kr": "뮛",
    "en": "mwis"
  },
  {
    "kr": "뮜",
    "en": "mwiss"
  },
  {
    "kr": "뮝",
    "en": "mwing"
  },
  {
    "kr": "뮞",
    "en": "mwij"
  },
  {
    "kr": "뮟",
    "en": "mwic"
  },
  {
    "kr": "뮠",
    "en": "mwik"
  },
  {
    "kr": "뮡",
    "en": "mwit"
  },
  {
    "kr": "뮢",
    "en": "mwip"
  },
  {
    "kr": "뮣",
    "en": "mwih"
  },
  {
    "kr": "뮤",
    "en": "myu"
  },
  {
    "kr": "뮥",
    "en": "myug"
  },
  {
    "kr": "뮦",
    "en": "myugg"
  },
  {
    "kr": "뮧",
    "en": "myugs"
  },
  {
    "kr": "뮨",
    "en": "myun"
  },
  {
    "kr": "뮩",
    "en": "myunj"
  },
  {
    "kr": "뮪",
    "en": "myunh"
  },
  {
    "kr": "뮫",
    "en": "myud"
  },
  {
    "kr": "뮬",
    "en": "myul"
  },
  {
    "kr": "뮭",
    "en": "myulg"
  },
  {
    "kr": "뮮",
    "en": "myulm"
  },
  {
    "kr": "뮯",
    "en": "myulb"
  },
  {
    "kr": "뮰",
    "en": "myuls"
  },
  {
    "kr": "뮱",
    "en": "myult"
  },
  {
    "kr": "뮲",
    "en": "myulp"
  },
  {
    "kr": "뮳",
    "en": "myulh"
  },
  {
    "kr": "뮴",
    "en": "myum"
  },
  {
    "kr": "뮵",
    "en": "myub"
  },
  {
    "kr": "뮶",
    "en": "myubs"
  },
  {
    "kr": "뮷",
    "en": "myus"
  },
  {
    "kr": "뮸",
    "en": "myuss"
  },
  {
    "kr": "뮹",
    "en": "myung"
  },
  {
    "kr": "뮺",
    "en": "myuj"
  },
  {
    "kr": "뮻",
    "en": "myuc"
  },
  {
    "kr": "뮼",
    "en": "myuk"
  },
  {
    "kr": "뮽",
    "en": "myut"
  },
  {
    "kr": "뮾",
    "en": "myup"
  },
  {
    "kr": "뮿",
    "en": "myuh"
  },
  {
    "kr": "므",
    "en": "meu"
  },
  {
    "kr": "믁",
    "en": "meug"
  },
  {
    "kr": "믂",
    "en": "meugg"
  },
  {
    "kr": "믃",
    "en": "meugs"
  },
  {
    "kr": "믄",
    "en": "meun"
  },
  {
    "kr": "믅",
    "en": "meunj"
  },
  {
    "kr": "믆",
    "en": "meunh"
  },
  {
    "kr": "믇",
    "en": "meud"
  },
  {
    "kr": "믈",
    "en": "meul"
  },
  {
    "kr": "믉",
    "en": "meulg"
  },
  {
    "kr": "믊",
    "en": "meulm"
  },
  {
    "kr": "믋",
    "en": "meulb"
  },
  {
    "kr": "믌",
    "en": "meuls"
  },
  {
    "kr": "믍",
    "en": "meult"
  },
  {
    "kr": "믎",
    "en": "meulp"
  },
  {
    "kr": "믏",
    "en": "meulh"
  },
  {
    "kr": "믐",
    "en": "meum"
  },
  {
    "kr": "믑",
    "en": "meub"
  },
  {
    "kr": "믒",
    "en": "meubs"
  },
  {
    "kr": "믓",
    "en": "meus"
  },
  {
    "kr": "믔",
    "en": "meuss"
  },
  {
    "kr": "믕",
    "en": "meung"
  },
  {
    "kr": "믖",
    "en": "meuj"
  },
  {
    "kr": "믗",
    "en": "meuc"
  },
  {
    "kr": "믘",
    "en": "meuk"
  },
  {
    "kr": "믙",
    "en": "meut"
  },
  {
    "kr": "믚",
    "en": "meup"
  },
  {
    "kr": "믛",
    "en": "meuh"
  },
  {
    "kr": "믜",
    "en": "myi"
  },
  {
    "kr": "믝",
    "en": "myig"
  },
  {
    "kr": "믞",
    "en": "myigg"
  },
  {
    "kr": "믟",
    "en": "myigs"
  },
  {
    "kr": "믠",
    "en": "myin"
  },
  {
    "kr": "믡",
    "en": "myinj"
  },
  {
    "kr": "믢",
    "en": "myinh"
  },
  {
    "kr": "믣",
    "en": "myid"
  },
  {
    "kr": "믤",
    "en": "myil"
  },
  {
    "kr": "믥",
    "en": "myilg"
  },
  {
    "kr": "믦",
    "en": "myilm"
  },
  {
    "kr": "믧",
    "en": "myilb"
  },
  {
    "kr": "믨",
    "en": "myils"
  },
  {
    "kr": "믩",
    "en": "myilt"
  },
  {
    "kr": "믪",
    "en": "myilp"
  },
  {
    "kr": "믫",
    "en": "myilh"
  },
  {
    "kr": "믬",
    "en": "myim"
  },
  {
    "kr": "믭",
    "en": "myib"
  },
  {
    "kr": "믮",
    "en": "myibs"
  },
  {
    "kr": "믯",
    "en": "myis"
  },
  {
    "kr": "믰",
    "en": "myiss"
  },
  {
    "kr": "믱",
    "en": "mying"
  },
  {
    "kr": "믲",
    "en": "myij"
  },
  {
    "kr": "믳",
    "en": "myic"
  },
  {
    "kr": "믴",
    "en": "myik"
  },
  {
    "kr": "믵",
    "en": "myit"
  },
  {
    "kr": "믶",
    "en": "myip"
  },
  {
    "kr": "믷",
    "en": "myih"
  },
  {
    "kr": "미",
    "en": "mi"
  },
  {
    "kr": "믹",
    "en": "mig"
  },
  {
    "kr": "믺",
    "en": "migg"
  },
  {
    "kr": "믻",
    "en": "migs"
  },
  {
    "kr": "민",
    "en": "min"
  },
  {
    "kr": "믽",
    "en": "minj"
  },
  {
    "kr": "믾",
    "en": "minh"
  },
  {
    "kr": "믿",
    "en": "mid"
  },
  {
    "kr": "밀",
    "en": "mil"
  },
  {
    "kr": "밁",
    "en": "milg"
  },
  {
    "kr": "밂",
    "en": "milm"
  },
  {
    "kr": "밃",
    "en": "milb"
  },
  {
    "kr": "밄",
    "en": "mils"
  },
  {
    "kr": "밅",
    "en": "milt"
  },
  {
    "kr": "밆",
    "en": "milp"
  },
  {
    "kr": "밇",
    "en": "milh"
  },
  {
    "kr": "밈",
    "en": "mim"
  },
  {
    "kr": "밉",
    "en": "mib"
  },
  {
    "kr": "밊",
    "en": "mibs"
  },
  {
    "kr": "밋",
    "en": "mis"
  },
  {
    "kr": "밌",
    "en": "miss"
  },
  {
    "kr": "밍",
    "en": "ming"
  },
  {
    "kr": "밎",
    "en": "mij"
  },
  {
    "kr": "및",
    "en": "mic"
  },
  {
    "kr": "밐",
    "en": "mik"
  },
  {
    "kr": "밑",
    "en": "mit"
  },
  {
    "kr": "밒",
    "en": "mip"
  },
  {
    "kr": "밓",
    "en": "mih"
  },
  {
    "kr": "바",
    "en": "ba"
  },
  {
    "kr": "박",
    "en": "bag"
  },
  {
    "kr": "밖",
    "en": "bagg"
  },
  {
    "kr": "밗",
    "en": "bags"
  },
  {
    "kr": "반",
    "en": "ban"
  },
  {
    "kr": "밙",
    "en": "banj"
  },
  {
    "kr": "밚",
    "en": "banh"
  },
  {
    "kr": "받",
    "en": "bad"
  },
  {
    "kr": "발",
    "en": "bal"
  },
  {
    "kr": "밝",
    "en": "balg"
  },
  {
    "kr": "밞",
    "en": "balm"
  },
  {
    "kr": "밟",
    "en": "balb"
  },
  {
    "kr": "밠",
    "en": "bals"
  },
  {
    "kr": "밡",
    "en": "balt"
  },
  {
    "kr": "밢",
    "en": "balp"
  },
  {
    "kr": "밣",
    "en": "balh"
  },
  {
    "kr": "밤",
    "en": "bam"
  },
  {
    "kr": "밥",
    "en": "bab"
  },
  {
    "kr": "밦",
    "en": "babs"
  },
  {
    "kr": "밧",
    "en": "bas"
  },
  {
    "kr": "밨",
    "en": "bass"
  },
  {
    "kr": "방",
    "en": "bang"
  },
  {
    "kr": "밪",
    "en": "baj"
  },
  {
    "kr": "밫",
    "en": "bac"
  },
  {
    "kr": "밬",
    "en": "bak"
  },
  {
    "kr": "밭",
    "en": "bat"
  },
  {
    "kr": "밮",
    "en": "bap"
  },
  {
    "kr": "밯",
    "en": "bah"
  },
  {
    "kr": "배",
    "en": "bae"
  },
  {
    "kr": "백",
    "en": "baeg"
  },
  {
    "kr": "밲",
    "en": "baegg"
  },
  {
    "kr": "밳",
    "en": "baegs"
  },
  {
    "kr": "밴",
    "en": "baen"
  },
  {
    "kr": "밵",
    "en": "baenj"
  },
  {
    "kr": "밶",
    "en": "baenh"
  },
  {
    "kr": "밷",
    "en": "baed"
  },
  {
    "kr": "밸",
    "en": "bael"
  },
  {
    "kr": "밹",
    "en": "baelg"
  },
  {
    "kr": "밺",
    "en": "baelm"
  },
  {
    "kr": "밻",
    "en": "baelb"
  },
  {
    "kr": "밼",
    "en": "baels"
  },
  {
    "kr": "밽",
    "en": "baelt"
  },
  {
    "kr": "밾",
    "en": "baelp"
  },
  {
    "kr": "밿",
    "en": "baelh"
  },
  {
    "kr": "뱀",
    "en": "baem"
  },
  {
    "kr": "뱁",
    "en": "baeb"
  },
  {
    "kr": "뱂",
    "en": "baebs"
  },
  {
    "kr": "뱃",
    "en": "baes"
  },
  {
    "kr": "뱄",
    "en": "baess"
  },
  {
    "kr": "뱅",
    "en": "baeng"
  },
  {
    "kr": "뱆",
    "en": "baej"
  },
  {
    "kr": "뱇",
    "en": "baec"
  },
  {
    "kr": "뱈",
    "en": "baek"
  },
  {
    "kr": "뱉",
    "en": "baet"
  },
  {
    "kr": "뱊",
    "en": "baep"
  },
  {
    "kr": "뱋",
    "en": "baeh"
  },
  {
    "kr": "뱌",
    "en": "bya"
  },
  {
    "kr": "뱍",
    "en": "byag"
  },
  {
    "kr": "뱎",
    "en": "byagg"
  },
  {
    "kr": "뱏",
    "en": "byags"
  },
  {
    "kr": "뱐",
    "en": "byan"
  },
  {
    "kr": "뱑",
    "en": "byanj"
  },
  {
    "kr": "뱒",
    "en": "byanh"
  },
  {
    "kr": "뱓",
    "en": "byad"
  },
  {
    "kr": "뱔",
    "en": "byal"
  },
  {
    "kr": "뱕",
    "en": "byalg"
  },
  {
    "kr": "뱖",
    "en": "byalm"
  },
  {
    "kr": "뱗",
    "en": "byalb"
  },
  {
    "kr": "뱘",
    "en": "byals"
  },
  {
    "kr": "뱙",
    "en": "byalt"
  },
  {
    "kr": "뱚",
    "en": "byalp"
  },
  {
    "kr": "뱛",
    "en": "byalh"
  },
  {
    "kr": "뱜",
    "en": "byam"
  },
  {
    "kr": "뱝",
    "en": "byab"
  },
  {
    "kr": "뱞",
    "en": "byabs"
  },
  {
    "kr": "뱟",
    "en": "byas"
  },
  {
    "kr": "뱠",
    "en": "byass"
  },
  {
    "kr": "뱡",
    "en": "byang"
  },
  {
    "kr": "뱢",
    "en": "byaj"
  },
  {
    "kr": "뱣",
    "en": "byac"
  },
  {
    "kr": "뱤",
    "en": "byak"
  },
  {
    "kr": "뱥",
    "en": "byat"
  },
  {
    "kr": "뱦",
    "en": "byap"
  },
  {
    "kr": "뱧",
    "en": "byah"
  },
  {
    "kr": "뱨",
    "en": "byae"
  },
  {
    "kr": "뱩",
    "en": "byaeg"
  },
  {
    "kr": "뱪",
    "en": "byaegg"
  },
  {
    "kr": "뱫",
    "en": "byaegs"
  },
  {
    "kr": "뱬",
    "en": "byaen"
  },
  {
    "kr": "뱭",
    "en": "byaenj"
  },
  {
    "kr": "뱮",
    "en": "byaenh"
  },
  {
    "kr": "뱯",
    "en": "byaed"
  },
  {
    "kr": "뱰",
    "en": "byael"
  },
  {
    "kr": "뱱",
    "en": "byaelg"
  },
  {
    "kr": "뱲",
    "en": "byaelm"
  },
  {
    "kr": "뱳",
    "en": "byaelb"
  },
  {
    "kr": "뱴",
    "en": "byaels"
  },
  {
    "kr": "뱵",
    "en": "byaelt"
  },
  {
    "kr": "뱶",
    "en": "byaelp"
  },
  {
    "kr": "뱷",
    "en": "byaelh"
  },
  {
    "kr": "뱸",
    "en": "byaem"
  },
  {
    "kr": "뱹",
    "en": "byaeb"
  },
  {
    "kr": "뱺",
    "en": "byaebs"
  },
  {
    "kr": "뱻",
    "en": "byaes"
  },
  {
    "kr": "뱼",
    "en": "byaess"
  },
  {
    "kr": "뱽",
    "en": "byaeng"
  },
  {
    "kr": "뱾",
    "en": "byaej"
  },
  {
    "kr": "뱿",
    "en": "byaec"
  },
  {
    "kr": "벀",
    "en": "byaek"
  },
  {
    "kr": "벁",
    "en": "byaet"
  },
  {
    "kr": "벂",
    "en": "byaep"
  },
  {
    "kr": "벃",
    "en": "byaeh"
  },
  {
    "kr": "버",
    "en": "beo"
  },
  {
    "kr": "벅",
    "en": "beog"
  },
  {
    "kr": "벆",
    "en": "beogg"
  },
  {
    "kr": "벇",
    "en": "beogs"
  },
  {
    "kr": "번",
    "en": "beon"
  },
  {
    "kr": "벉",
    "en": "beonj"
  },
  {
    "kr": "벊",
    "en": "beonh"
  },
  {
    "kr": "벋",
    "en": "beod"
  },
  {
    "kr": "벌",
    "en": "beol"
  },
  {
    "kr": "벍",
    "en": "beolg"
  },
  {
    "kr": "벎",
    "en": "beolm"
  },
  {
    "kr": "벏",
    "en": "beolb"
  },
  {
    "kr": "벐",
    "en": "beols"
  },
  {
    "kr": "벑",
    "en": "beolt"
  },
  {
    "kr": "벒",
    "en": "beolp"
  },
  {
    "kr": "벓",
    "en": "beolh"
  },
  {
    "kr": "범",
    "en": "beom"
  },
  {
    "kr": "법",
    "en": "beob"
  },
  {
    "kr": "벖",
    "en": "beobs"
  },
  {
    "kr": "벗",
    "en": "beos"
  },
  {
    "kr": "벘",
    "en": "beoss"
  },
  {
    "kr": "벙",
    "en": "beong"
  },
  {
    "kr": "벚",
    "en": "beoj"
  },
  {
    "kr": "벛",
    "en": "beoc"
  },
  {
    "kr": "벜",
    "en": "beok"
  },
  {
    "kr": "벝",
    "en": "beot"
  },
  {
    "kr": "벞",
    "en": "beop"
  },
  {
    "kr": "벟",
    "en": "beoh"
  },
  {
    "kr": "베",
    "en": "be"
  },
  {
    "kr": "벡",
    "en": "beg"
  },
  {
    "kr": "벢",
    "en": "begg"
  },
  {
    "kr": "벣",
    "en": "begs"
  },
  {
    "kr": "벤",
    "en": "ben"
  },
  {
    "kr": "벥",
    "en": "benj"
  },
  {
    "kr": "벦",
    "en": "benh"
  },
  {
    "kr": "벧",
    "en": "bed"
  },
  {
    "kr": "벨",
    "en": "bel"
  },
  {
    "kr": "벩",
    "en": "belg"
  },
  {
    "kr": "벪",
    "en": "belm"
  },
  {
    "kr": "벫",
    "en": "belb"
  },
  {
    "kr": "벬",
    "en": "bels"
  },
  {
    "kr": "벭",
    "en": "belt"
  },
  {
    "kr": "벮",
    "en": "belp"
  },
  {
    "kr": "벯",
    "en": "belh"
  },
  {
    "kr": "벰",
    "en": "bem"
  },
  {
    "kr": "벱",
    "en": "beb"
  },
  {
    "kr": "벲",
    "en": "bebs"
  },
  {
    "kr": "벳",
    "en": "bes"
  },
  {
    "kr": "벴",
    "en": "bess"
  },
  {
    "kr": "벵",
    "en": "beng"
  },
  {
    "kr": "벶",
    "en": "bej"
  },
  {
    "kr": "벷",
    "en": "bec"
  },
  {
    "kr": "벸",
    "en": "bek"
  },
  {
    "kr": "벹",
    "en": "bet"
  },
  {
    "kr": "벺",
    "en": "bep"
  },
  {
    "kr": "벻",
    "en": "beh"
  },
  {
    "kr": "벼",
    "en": "byeo"
  },
  {
    "kr": "벽",
    "en": "byeog"
  },
  {
    "kr": "벾",
    "en": "byeogg"
  },
  {
    "kr": "벿",
    "en": "byeogs"
  },
  {
    "kr": "변",
    "en": "byeon"
  },
  {
    "kr": "볁",
    "en": "byeonj"
  },
  {
    "kr": "볂",
    "en": "byeonh"
  },
  {
    "kr": "볃",
    "en": "byeod"
  },
  {
    "kr": "별",
    "en": "byeol"
  },
  {
    "kr": "볅",
    "en": "byeolg"
  },
  {
    "kr": "볆",
    "en": "byeolm"
  },
  {
    "kr": "볇",
    "en": "byeolb"
  },
  {
    "kr": "볈",
    "en": "byeols"
  },
  {
    "kr": "볉",
    "en": "byeolt"
  },
  {
    "kr": "볊",
    "en": "byeolp"
  },
  {
    "kr": "볋",
    "en": "byeolh"
  },
  {
    "kr": "볌",
    "en": "byeom"
  },
  {
    "kr": "볍",
    "en": "byeob"
  },
  {
    "kr": "볎",
    "en": "byeobs"
  },
  {
    "kr": "볏",
    "en": "byeos"
  },
  {
    "kr": "볐",
    "en": "byeoss"
  },
  {
    "kr": "병",
    "en": "byeong"
  },
  {
    "kr": "볒",
    "en": "byeoj"
  },
  {
    "kr": "볓",
    "en": "byeoc"
  },
  {
    "kr": "볔",
    "en": "byeok"
  },
  {
    "kr": "볕",
    "en": "byeot"
  },
  {
    "kr": "볖",
    "en": "byeop"
  },
  {
    "kr": "볗",
    "en": "byeoh"
  },
  {
    "kr": "볘",
    "en": "bye"
  },
  {
    "kr": "볙",
    "en": "byeg"
  },
  {
    "kr": "볚",
    "en": "byegg"
  },
  {
    "kr": "볛",
    "en": "byegs"
  },
  {
    "kr": "볜",
    "en": "byen"
  },
  {
    "kr": "볝",
    "en": "byenj"
  },
  {
    "kr": "볞",
    "en": "byenh"
  },
  {
    "kr": "볟",
    "en": "byed"
  },
  {
    "kr": "볠",
    "en": "byel"
  },
  {
    "kr": "볡",
    "en": "byelg"
  },
  {
    "kr": "볢",
    "en": "byelm"
  },
  {
    "kr": "볣",
    "en": "byelb"
  },
  {
    "kr": "볤",
    "en": "byels"
  },
  {
    "kr": "볥",
    "en": "byelt"
  },
  {
    "kr": "볦",
    "en": "byelp"
  },
  {
    "kr": "볧",
    "en": "byelh"
  },
  {
    "kr": "볨",
    "en": "byem"
  },
  {
    "kr": "볩",
    "en": "byeb"
  },
  {
    "kr": "볪",
    "en": "byebs"
  },
  {
    "kr": "볫",
    "en": "byes"
  },
  {
    "kr": "볬",
    "en": "byess"
  },
  {
    "kr": "볭",
    "en": "byeng"
  },
  {
    "kr": "볮",
    "en": "byej"
  },
  {
    "kr": "볯",
    "en": "byec"
  },
  {
    "kr": "볰",
    "en": "byek"
  },
  {
    "kr": "볱",
    "en": "byet"
  },
  {
    "kr": "볲",
    "en": "byep"
  },
  {
    "kr": "볳",
    "en": "byeh"
  },
  {
    "kr": "보",
    "en": "bo"
  },
  {
    "kr": "복",
    "en": "bog"
  },
  {
    "kr": "볶",
    "en": "bogg"
  },
  {
    "kr": "볷",
    "en": "bogs"
  },
  {
    "kr": "본",
    "en": "bon"
  },
  {
    "kr": "볹",
    "en": "bonj"
  },
  {
    "kr": "볺",
    "en": "bonh"
  },
  {
    "kr": "볻",
    "en": "bod"
  },
  {
    "kr": "볼",
    "en": "bol"
  },
  {
    "kr": "볽",
    "en": "bolg"
  },
  {
    "kr": "볾",
    "en": "bolm"
  },
  {
    "kr": "볿",
    "en": "bolb"
  },
  {
    "kr": "봀",
    "en": "bols"
  },
  {
    "kr": "봁",
    "en": "bolt"
  },
  {
    "kr": "봂",
    "en": "bolp"
  },
  {
    "kr": "봃",
    "en": "bolh"
  },
  {
    "kr": "봄",
    "en": "bom"
  },
  {
    "kr": "봅",
    "en": "bob"
  },
  {
    "kr": "봆",
    "en": "bobs"
  },
  {
    "kr": "봇",
    "en": "bos"
  },
  {
    "kr": "봈",
    "en": "boss"
  },
  {
    "kr": "봉",
    "en": "bong"
  },
  {
    "kr": "봊",
    "en": "boj"
  },
  {
    "kr": "봋",
    "en": "boc"
  },
  {
    "kr": "봌",
    "en": "bok"
  },
  {
    "kr": "봍",
    "en": "bot"
  },
  {
    "kr": "봎",
    "en": "bop"
  },
  {
    "kr": "봏",
    "en": "boh"
  },
  {
    "kr": "봐",
    "en": "bwa"
  },
  {
    "kr": "봑",
    "en": "bwag"
  },
  {
    "kr": "봒",
    "en": "bwagg"
  },
  {
    "kr": "봓",
    "en": "bwags"
  },
  {
    "kr": "봔",
    "en": "bwan"
  },
  {
    "kr": "봕",
    "en": "bwanj"
  },
  {
    "kr": "봖",
    "en": "bwanh"
  },
  {
    "kr": "봗",
    "en": "bwad"
  },
  {
    "kr": "봘",
    "en": "bwal"
  },
  {
    "kr": "봙",
    "en": "bwalg"
  },
  {
    "kr": "봚",
    "en": "bwalm"
  },
  {
    "kr": "봛",
    "en": "bwalb"
  },
  {
    "kr": "봜",
    "en": "bwals"
  },
  {
    "kr": "봝",
    "en": "bwalt"
  },
  {
    "kr": "봞",
    "en": "bwalp"
  },
  {
    "kr": "봟",
    "en": "bwalh"
  },
  {
    "kr": "봠",
    "en": "bwam"
  },
  {
    "kr": "봡",
    "en": "bwab"
  },
  {
    "kr": "봢",
    "en": "bwabs"
  },
  {
    "kr": "봣",
    "en": "bwas"
  },
  {
    "kr": "봤",
    "en": "bwass"
  },
  {
    "kr": "봥",
    "en": "bwang"
  },
  {
    "kr": "봦",
    "en": "bwaj"
  },
  {
    "kr": "봧",
    "en": "bwac"
  },
  {
    "kr": "봨",
    "en": "bwak"
  },
  {
    "kr": "봩",
    "en": "bwat"
  },
  {
    "kr": "봪",
    "en": "bwap"
  },
  {
    "kr": "봫",
    "en": "bwah"
  },
  {
    "kr": "봬",
    "en": "bwae"
  },
  {
    "kr": "봭",
    "en": "bwaeg"
  },
  {
    "kr": "봮",
    "en": "bwaegg"
  },
  {
    "kr": "봯",
    "en": "bwaegs"
  },
  {
    "kr": "봰",
    "en": "bwaen"
  },
  {
    "kr": "봱",
    "en": "bwaenj"
  },
  {
    "kr": "봲",
    "en": "bwaenh"
  },
  {
    "kr": "봳",
    "en": "bwaed"
  },
  {
    "kr": "봴",
    "en": "bwael"
  },
  {
    "kr": "봵",
    "en": "bwaelg"
  },
  {
    "kr": "봶",
    "en": "bwaelm"
  },
  {
    "kr": "봷",
    "en": "bwaelb"
  },
  {
    "kr": "봸",
    "en": "bwaels"
  },
  {
    "kr": "봹",
    "en": "bwaelt"
  },
  {
    "kr": "봺",
    "en": "bwaelp"
  },
  {
    "kr": "봻",
    "en": "bwaelh"
  },
  {
    "kr": "봼",
    "en": "bwaem"
  },
  {
    "kr": "봽",
    "en": "bwaeb"
  },
  {
    "kr": "봾",
    "en": "bwaebs"
  },
  {
    "kr": "봿",
    "en": "bwaes"
  },
  {
    "kr": "뵀",
    "en": "bwaess"
  },
  {
    "kr": "뵁",
    "en": "bwaeng"
  },
  {
    "kr": "뵂",
    "en": "bwaej"
  },
  {
    "kr": "뵃",
    "en": "bwaec"
  },
  {
    "kr": "뵄",
    "en": "bwaek"
  },
  {
    "kr": "뵅",
    "en": "bwaet"
  },
  {
    "kr": "뵆",
    "en": "bwaep"
  },
  {
    "kr": "뵇",
    "en": "bwaeh"
  },
  {
    "kr": "뵈",
    "en": "boe"
  },
  {
    "kr": "뵉",
    "en": "boeg"
  },
  {
    "kr": "뵊",
    "en": "boegg"
  },
  {
    "kr": "뵋",
    "en": "boegs"
  },
  {
    "kr": "뵌",
    "en": "boen"
  },
  {
    "kr": "뵍",
    "en": "boenj"
  },
  {
    "kr": "뵎",
    "en": "boenh"
  },
  {
    "kr": "뵏",
    "en": "boed"
  },
  {
    "kr": "뵐",
    "en": "boel"
  },
  {
    "kr": "뵑",
    "en": "boelg"
  },
  {
    "kr": "뵒",
    "en": "boelm"
  },
  {
    "kr": "뵓",
    "en": "boelb"
  },
  {
    "kr": "뵔",
    "en": "boels"
  },
  {
    "kr": "뵕",
    "en": "boelt"
  },
  {
    "kr": "뵖",
    "en": "boelp"
  },
  {
    "kr": "뵗",
    "en": "boelh"
  },
  {
    "kr": "뵘",
    "en": "boem"
  },
  {
    "kr": "뵙",
    "en": "boeb"
  },
  {
    "kr": "뵚",
    "en": "boebs"
  },
  {
    "kr": "뵛",
    "en": "boes"
  },
  {
    "kr": "뵜",
    "en": "boess"
  },
  {
    "kr": "뵝",
    "en": "boeng"
  },
  {
    "kr": "뵞",
    "en": "boej"
  },
  {
    "kr": "뵟",
    "en": "boec"
  },
  {
    "kr": "뵠",
    "en": "boek"
  },
  {
    "kr": "뵡",
    "en": "boet"
  },
  {
    "kr": "뵢",
    "en": "boep"
  },
  {
    "kr": "뵣",
    "en": "boeh"
  },
  {
    "kr": "뵤",
    "en": "byo"
  },
  {
    "kr": "뵥",
    "en": "byog"
  },
  {
    "kr": "뵦",
    "en": "byogg"
  },
  {
    "kr": "뵧",
    "en": "byogs"
  },
  {
    "kr": "뵨",
    "en": "byon"
  },
  {
    "kr": "뵩",
    "en": "byonj"
  },
  {
    "kr": "뵪",
    "en": "byonh"
  },
  {
    "kr": "뵫",
    "en": "byod"
  },
  {
    "kr": "뵬",
    "en": "byol"
  },
  {
    "kr": "뵭",
    "en": "byolg"
  },
  {
    "kr": "뵮",
    "en": "byolm"
  },
  {
    "kr": "뵯",
    "en": "byolb"
  },
  {
    "kr": "뵰",
    "en": "byols"
  },
  {
    "kr": "뵱",
    "en": "byolt"
  },
  {
    "kr": "뵲",
    "en": "byolp"
  },
  {
    "kr": "뵳",
    "en": "byolh"
  },
  {
    "kr": "뵴",
    "en": "byom"
  },
  {
    "kr": "뵵",
    "en": "byob"
  },
  {
    "kr": "뵶",
    "en": "byobs"
  },
  {
    "kr": "뵷",
    "en": "byos"
  },
  {
    "kr": "뵸",
    "en": "byoss"
  },
  {
    "kr": "뵹",
    "en": "byong"
  },
  {
    "kr": "뵺",
    "en": "byoj"
  },
  {
    "kr": "뵻",
    "en": "byoc"
  },
  {
    "kr": "뵼",
    "en": "byok"
  },
  {
    "kr": "뵽",
    "en": "byot"
  },
  {
    "kr": "뵾",
    "en": "byop"
  },
  {
    "kr": "뵿",
    "en": "byoh"
  },
  {
    "kr": "부",
    "en": "bu"
  },
  {
    "kr": "북",
    "en": "bug"
  },
  {
    "kr": "붂",
    "en": "bugg"
  },
  {
    "kr": "붃",
    "en": "bugs"
  },
  {
    "kr": "분",
    "en": "bun"
  },
  {
    "kr": "붅",
    "en": "bunj"
  },
  {
    "kr": "붆",
    "en": "bunh"
  },
  {
    "kr": "붇",
    "en": "bud"
  },
  {
    "kr": "불",
    "en": "bul"
  },
  {
    "kr": "붉",
    "en": "bulg"
  },
  {
    "kr": "붊",
    "en": "bulm"
  },
  {
    "kr": "붋",
    "en": "bulb"
  },
  {
    "kr": "붌",
    "en": "buls"
  },
  {
    "kr": "붍",
    "en": "bult"
  },
  {
    "kr": "붎",
    "en": "bulp"
  },
  {
    "kr": "붏",
    "en": "bulh"
  },
  {
    "kr": "붐",
    "en": "bum"
  },
  {
    "kr": "붑",
    "en": "bub"
  },
  {
    "kr": "붒",
    "en": "bubs"
  },
  {
    "kr": "붓",
    "en": "bus"
  },
  {
    "kr": "붔",
    "en": "buss"
  },
  {
    "kr": "붕",
    "en": "bung"
  },
  {
    "kr": "붖",
    "en": "buj"
  },
  {
    "kr": "붗",
    "en": "buc"
  },
  {
    "kr": "붘",
    "en": "buk"
  },
  {
    "kr": "붙",
    "en": "but"
  },
  {
    "kr": "붚",
    "en": "bup"
  },
  {
    "kr": "붛",
    "en": "buh"
  },
  {
    "kr": "붜",
    "en": "bweo"
  },
  {
    "kr": "붝",
    "en": "bweog"
  },
  {
    "kr": "붞",
    "en": "bweogg"
  },
  {
    "kr": "붟",
    "en": "bweogs"
  },
  {
    "kr": "붠",
    "en": "bweon"
  },
  {
    "kr": "붡",
    "en": "bweonj"
  },
  {
    "kr": "붢",
    "en": "bweonh"
  },
  {
    "kr": "붣",
    "en": "bweod"
  },
  {
    "kr": "붤",
    "en": "bweol"
  },
  {
    "kr": "붥",
    "en": "bweolg"
  },
  {
    "kr": "붦",
    "en": "bweolm"
  },
  {
    "kr": "붧",
    "en": "bweolb"
  },
  {
    "kr": "붨",
    "en": "bweols"
  },
  {
    "kr": "붩",
    "en": "bweolt"
  },
  {
    "kr": "붪",
    "en": "bweolp"
  },
  {
    "kr": "붫",
    "en": "bweolh"
  },
  {
    "kr": "붬",
    "en": "bweom"
  },
  {
    "kr": "붭",
    "en": "bweob"
  },
  {
    "kr": "붮",
    "en": "bweobs"
  },
  {
    "kr": "붯",
    "en": "bweos"
  },
  {
    "kr": "붰",
    "en": "bweoss"
  },
  {
    "kr": "붱",
    "en": "bweong"
  },
  {
    "kr": "붲",
    "en": "bweoj"
  },
  {
    "kr": "붳",
    "en": "bweoc"
  },
  {
    "kr": "붴",
    "en": "bweok"
  },
  {
    "kr": "붵",
    "en": "bweot"
  },
  {
    "kr": "붶",
    "en": "bweop"
  },
  {
    "kr": "붷",
    "en": "bweoh"
  },
  {
    "kr": "붸",
    "en": "bwe"
  },
  {
    "kr": "붹",
    "en": "bweg"
  },
  {
    "kr": "붺",
    "en": "bwegg"
  },
  {
    "kr": "붻",
    "en": "bwegs"
  },
  {
    "kr": "붼",
    "en": "bwen"
  },
  {
    "kr": "붽",
    "en": "bwenj"
  },
  {
    "kr": "붾",
    "en": "bwenh"
  },
  {
    "kr": "붿",
    "en": "bwed"
  },
  {
    "kr": "뷀",
    "en": "bwel"
  },
  {
    "kr": "뷁",
    "en": "bwelg"
  },
  {
    "kr": "뷂",
    "en": "bwelm"
  },
  {
    "kr": "뷃",
    "en": "bwelb"
  },
  {
    "kr": "뷄",
    "en": "bwels"
  },
  {
    "kr": "뷅",
    "en": "bwelt"
  },
  {
    "kr": "뷆",
    "en": "bwelp"
  },
  {
    "kr": "뷇",
    "en": "bwelh"
  },
  {
    "kr": "뷈",
    "en": "bwem"
  },
  {
    "kr": "뷉",
    "en": "bweb"
  },
  {
    "kr": "뷊",
    "en": "bwebs"
  },
  {
    "kr": "뷋",
    "en": "bwes"
  },
  {
    "kr": "뷌",
    "en": "bwess"
  },
  {
    "kr": "뷍",
    "en": "bweng"
  },
  {
    "kr": "뷎",
    "en": "bwej"
  },
  {
    "kr": "뷏",
    "en": "bwec"
  },
  {
    "kr": "뷐",
    "en": "bwek"
  },
  {
    "kr": "뷑",
    "en": "bwet"
  },
  {
    "kr": "뷒",
    "en": "bwep"
  },
  {
    "kr": "뷓",
    "en": "bweh"
  },
  {
    "kr": "뷔",
    "en": "bwi"
  },
  {
    "kr": "뷕",
    "en": "bwig"
  },
  {
    "kr": "뷖",
    "en": "bwigg"
  },
  {
    "kr": "뷗",
    "en": "bwigs"
  },
  {
    "kr": "뷘",
    "en": "bwin"
  },
  {
    "kr": "뷙",
    "en": "bwinj"
  },
  {
    "kr": "뷚",
    "en": "bwinh"
  },
  {
    "kr": "뷛",
    "en": "bwid"
  },
  {
    "kr": "뷜",
    "en": "bwil"
  },
  {
    "kr": "뷝",
    "en": "bwilg"
  },
  {
    "kr": "뷞",
    "en": "bwilm"
  },
  {
    "kr": "뷟",
    "en": "bwilb"
  },
  {
    "kr": "뷠",
    "en": "bwils"
  },
  {
    "kr": "뷡",
    "en": "bwilt"
  },
  {
    "kr": "뷢",
    "en": "bwilp"
  },
  {
    "kr": "뷣",
    "en": "bwilh"
  },
  {
    "kr": "뷤",
    "en": "bwim"
  },
  {
    "kr": "뷥",
    "en": "bwib"
  },
  {
    "kr": "뷦",
    "en": "bwibs"
  },
  {
    "kr": "뷧",
    "en": "bwis"
  },
  {
    "kr": "뷨",
    "en": "bwiss"
  },
  {
    "kr": "뷩",
    "en": "bwing"
  },
  {
    "kr": "뷪",
    "en": "bwij"
  },
  {
    "kr": "뷫",
    "en": "bwic"
  },
  {
    "kr": "뷬",
    "en": "bwik"
  },
  {
    "kr": "뷭",
    "en": "bwit"
  },
  {
    "kr": "뷮",
    "en": "bwip"
  },
  {
    "kr": "뷯",
    "en": "bwih"
  },
  {
    "kr": "뷰",
    "en": "byu"
  },
  {
    "kr": "뷱",
    "en": "byug"
  },
  {
    "kr": "뷲",
    "en": "byugg"
  },
  {
    "kr": "뷳",
    "en": "byugs"
  },
  {
    "kr": "뷴",
    "en": "byun"
  },
  {
    "kr": "뷵",
    "en": "byunj"
  },
  {
    "kr": "뷶",
    "en": "byunh"
  },
  {
    "kr": "뷷",
    "en": "byud"
  },
  {
    "kr": "뷸",
    "en": "byul"
  },
  {
    "kr": "뷹",
    "en": "byulg"
  },
  {
    "kr": "뷺",
    "en": "byulm"
  },
  {
    "kr": "뷻",
    "en": "byulb"
  },
  {
    "kr": "뷼",
    "en": "byuls"
  },
  {
    "kr": "뷽",
    "en": "byult"
  },
  {
    "kr": "뷾",
    "en": "byulp"
  },
  {
    "kr": "뷿",
    "en": "byulh"
  },
  {
    "kr": "븀",
    "en": "byum"
  },
  {
    "kr": "븁",
    "en": "byub"
  },
  {
    "kr": "븂",
    "en": "byubs"
  },
  {
    "kr": "븃",
    "en": "byus"
  },
  {
    "kr": "븄",
    "en": "byuss"
  },
  {
    "kr": "븅",
    "en": "byung"
  },
  {
    "kr": "븆",
    "en": "byuj"
  },
  {
    "kr": "븇",
    "en": "byuc"
  },
  {
    "kr": "븈",
    "en": "byuk"
  },
  {
    "kr": "븉",
    "en": "byut"
  },
  {
    "kr": "븊",
    "en": "byup"
  },
  {
    "kr": "븋",
    "en": "byuh"
  },
  {
    "kr": "브",
    "en": "beu"
  },
  {
    "kr": "븍",
    "en": "beug"
  },
  {
    "kr": "븎",
    "en": "beugg"
  },
  {
    "kr": "븏",
    "en": "beugs"
  },
  {
    "kr": "븐",
    "en": "beun"
  },
  {
    "kr": "븑",
    "en": "beunj"
  },
  {
    "kr": "븒",
    "en": "beunh"
  },
  {
    "kr": "븓",
    "en": "beud"
  },
  {
    "kr": "블",
    "en": "beul"
  },
  {
    "kr": "븕",
    "en": "beulg"
  },
  {
    "kr": "븖",
    "en": "beulm"
  },
  {
    "kr": "븗",
    "en": "beulb"
  },
  {
    "kr": "븘",
    "en": "beuls"
  },
  {
    "kr": "븙",
    "en": "beult"
  },
  {
    "kr": "븚",
    "en": "beulp"
  },
  {
    "kr": "븛",
    "en": "beulh"
  },
  {
    "kr": "븜",
    "en": "beum"
  },
  {
    "kr": "븝",
    "en": "beub"
  },
  {
    "kr": "븞",
    "en": "beubs"
  },
  {
    "kr": "븟",
    "en": "beus"
  },
  {
    "kr": "븠",
    "en": "beuss"
  },
  {
    "kr": "븡",
    "en": "beung"
  },
  {
    "kr": "븢",
    "en": "beuj"
  },
  {
    "kr": "븣",
    "en": "beuc"
  },
  {
    "kr": "븤",
    "en": "beuk"
  },
  {
    "kr": "븥",
    "en": "beut"
  },
  {
    "kr": "븦",
    "en": "beup"
  },
  {
    "kr": "븧",
    "en": "beuh"
  },
  {
    "kr": "븨",
    "en": "byi"
  },
  {
    "kr": "븩",
    "en": "byig"
  },
  {
    "kr": "븪",
    "en": "byigg"
  },
  {
    "kr": "븫",
    "en": "byigs"
  },
  {
    "kr": "븬",
    "en": "byin"
  },
  {
    "kr": "븭",
    "en": "byinj"
  },
  {
    "kr": "븮",
    "en": "byinh"
  },
  {
    "kr": "븯",
    "en": "byid"
  },
  {
    "kr": "븰",
    "en": "byil"
  },
  {
    "kr": "븱",
    "en": "byilg"
  },
  {
    "kr": "븲",
    "en": "byilm"
  },
  {
    "kr": "븳",
    "en": "byilb"
  },
  {
    "kr": "븴",
    "en": "byils"
  },
  {
    "kr": "븵",
    "en": "byilt"
  },
  {
    "kr": "븶",
    "en": "byilp"
  },
  {
    "kr": "븷",
    "en": "byilh"
  },
  {
    "kr": "븸",
    "en": "byim"
  },
  {
    "kr": "븹",
    "en": "byib"
  },
  {
    "kr": "븺",
    "en": "byibs"
  },
  {
    "kr": "븻",
    "en": "byis"
  },
  {
    "kr": "븼",
    "en": "byiss"
  },
  {
    "kr": "븽",
    "en": "bying"
  },
  {
    "kr": "븾",
    "en": "byij"
  },
  {
    "kr": "븿",
    "en": "byic"
  },
  {
    "kr": "빀",
    "en": "byik"
  },
  {
    "kr": "빁",
    "en": "byit"
  },
  {
    "kr": "빂",
    "en": "byip"
  },
  {
    "kr": "빃",
    "en": "byih"
  },
  {
    "kr": "비",
    "en": "bi"
  },
  {
    "kr": "빅",
    "en": "big"
  },
  {
    "kr": "빆",
    "en": "bigg"
  },
  {
    "kr": "빇",
    "en": "bigs"
  },
  {
    "kr": "빈",
    "en": "bin"
  },
  {
    "kr": "빉",
    "en": "binj"
  },
  {
    "kr": "빊",
    "en": "binh"
  },
  {
    "kr": "빋",
    "en": "bid"
  },
  {
    "kr": "빌",
    "en": "bil"
  },
  {
    "kr": "빍",
    "en": "bilg"
  },
  {
    "kr": "빎",
    "en": "bilm"
  },
  {
    "kr": "빏",
    "en": "bilb"
  },
  {
    "kr": "빐",
    "en": "bils"
  },
  {
    "kr": "빑",
    "en": "bilt"
  },
  {
    "kr": "빒",
    "en": "bilp"
  },
  {
    "kr": "빓",
    "en": "bilh"
  },
  {
    "kr": "빔",
    "en": "bim"
  },
  {
    "kr": "빕",
    "en": "bib"
  },
  {
    "kr": "빖",
    "en": "bibs"
  },
  {
    "kr": "빗",
    "en": "bis"
  },
  {
    "kr": "빘",
    "en": "biss"
  },
  {
    "kr": "빙",
    "en": "bing"
  },
  {
    "kr": "빚",
    "en": "bij"
  },
  {
    "kr": "빛",
    "en": "bic"
  },
  {
    "kr": "빜",
    "en": "bik"
  },
  {
    "kr": "빝",
    "en": "bit"
  },
  {
    "kr": "빞",
    "en": "bip"
  },
  {
    "kr": "빟",
    "en": "bih"
  },
  {
    "kr": "빠",
    "en": "bba"
  },
  {
    "kr": "빡",
    "en": "bbag"
  },
  {
    "kr": "빢",
    "en": "bbagg"
  },
  {
    "kr": "빣",
    "en": "bbags"
  },
  {
    "kr": "빤",
    "en": "bban"
  },
  {
    "kr": "빥",
    "en": "bbanj"
  },
  {
    "kr": "빦",
    "en": "bbanh"
  },
  {
    "kr": "빧",
    "en": "bbad"
  },
  {
    "kr": "빨",
    "en": "bbal"
  },
  {
    "kr": "빩",
    "en": "bbalg"
  },
  {
    "kr": "빪",
    "en": "bbalm"
  },
  {
    "kr": "빫",
    "en": "bbalb"
  },
  {
    "kr": "빬",
    "en": "bbals"
  },
  {
    "kr": "빭",
    "en": "bbalt"
  },
  {
    "kr": "빮",
    "en": "bbalp"
  },
  {
    "kr": "빯",
    "en": "bbalh"
  },
  {
    "kr": "빰",
    "en": "bbam"
  },
  {
    "kr": "빱",
    "en": "bbab"
  },
  {
    "kr": "빲",
    "en": "bbabs"
  },
  {
    "kr": "빳",
    "en": "bbas"
  },
  {
    "kr": "빴",
    "en": "bbass"
  },
  {
    "kr": "빵",
    "en": "bbang"
  },
  {
    "kr": "빶",
    "en": "bbaj"
  },
  {
    "kr": "빷",
    "en": "bbac"
  },
  {
    "kr": "빸",
    "en": "bbak"
  },
  {
    "kr": "빹",
    "en": "bbat"
  },
  {
    "kr": "빺",
    "en": "bbap"
  },
  {
    "kr": "빻",
    "en": "bbah"
  },
  {
    "kr": "빼",
    "en": "bbae"
  },
  {
    "kr": "빽",
    "en": "bbaeg"
  },
  {
    "kr": "빾",
    "en": "bbaegg"
  },
  {
    "kr": "빿",
    "en": "bbaegs"
  },
  {
    "kr": "뺀",
    "en": "bbaen"
  },
  {
    "kr": "뺁",
    "en": "bbaenj"
  },
  {
    "kr": "뺂",
    "en": "bbaenh"
  },
  {
    "kr": "뺃",
    "en": "bbaed"
  },
  {
    "kr": "뺄",
    "en": "bbael"
  },
  {
    "kr": "뺅",
    "en": "bbaelg"
  },
  {
    "kr": "뺆",
    "en": "bbaelm"
  },
  {
    "kr": "뺇",
    "en": "bbaelb"
  },
  {
    "kr": "뺈",
    "en": "bbaels"
  },
  {
    "kr": "뺉",
    "en": "bbaelt"
  },
  {
    "kr": "뺊",
    "en": "bbaelp"
  },
  {
    "kr": "뺋",
    "en": "bbaelh"
  },
  {
    "kr": "뺌",
    "en": "bbaem"
  },
  {
    "kr": "뺍",
    "en": "bbaeb"
  },
  {
    "kr": "뺎",
    "en": "bbaebs"
  },
  {
    "kr": "뺏",
    "en": "bbaes"
  },
  {
    "kr": "뺐",
    "en": "bbaess"
  },
  {
    "kr": "뺑",
    "en": "bbaeng"
  },
  {
    "kr": "뺒",
    "en": "bbaej"
  },
  {
    "kr": "뺓",
    "en": "bbaec"
  },
  {
    "kr": "뺔",
    "en": "bbaek"
  },
  {
    "kr": "뺕",
    "en": "bbaet"
  },
  {
    "kr": "뺖",
    "en": "bbaep"
  },
  {
    "kr": "뺗",
    "en": "bbaeh"
  },
  {
    "kr": "뺘",
    "en": "bbya"
  },
  {
    "kr": "뺙",
    "en": "bbyag"
  },
  {
    "kr": "뺚",
    "en": "bbyagg"
  },
  {
    "kr": "뺛",
    "en": "bbyags"
  },
  {
    "kr": "뺜",
    "en": "bbyan"
  },
  {
    "kr": "뺝",
    "en": "bbyanj"
  },
  {
    "kr": "뺞",
    "en": "bbyanh"
  },
  {
    "kr": "뺟",
    "en": "bbyad"
  },
  {
    "kr": "뺠",
    "en": "bbyal"
  },
  {
    "kr": "뺡",
    "en": "bbyalg"
  },
  {
    "kr": "뺢",
    "en": "bbyalm"
  },
  {
    "kr": "뺣",
    "en": "bbyalb"
  },
  {
    "kr": "뺤",
    "en": "bbyals"
  },
  {
    "kr": "뺥",
    "en": "bbyalt"
  },
  {
    "kr": "뺦",
    "en": "bbyalp"
  },
  {
    "kr": "뺧",
    "en": "bbyalh"
  },
  {
    "kr": "뺨",
    "en": "bbyam"
  },
  {
    "kr": "뺩",
    "en": "bbyab"
  },
  {
    "kr": "뺪",
    "en": "bbyabs"
  },
  {
    "kr": "뺫",
    "en": "bbyas"
  },
  {
    "kr": "뺬",
    "en": "bbyass"
  },
  {
    "kr": "뺭",
    "en": "bbyang"
  },
  {
    "kr": "뺮",
    "en": "bbyaj"
  },
  {
    "kr": "뺯",
    "en": "bbyac"
  },
  {
    "kr": "뺰",
    "en": "bbyak"
  },
  {
    "kr": "뺱",
    "en": "bbyat"
  },
  {
    "kr": "뺲",
    "en": "bbyap"
  },
  {
    "kr": "뺳",
    "en": "bbyah"
  },
  {
    "kr": "뺴",
    "en": "bbyae"
  },
  {
    "kr": "뺵",
    "en": "bbyaeg"
  },
  {
    "kr": "뺶",
    "en": "bbyaegg"
  },
  {
    "kr": "뺷",
    "en": "bbyaegs"
  },
  {
    "kr": "뺸",
    "en": "bbyaen"
  },
  {
    "kr": "뺹",
    "en": "bbyaenj"
  },
  {
    "kr": "뺺",
    "en": "bbyaenh"
  },
  {
    "kr": "뺻",
    "en": "bbyaed"
  },
  {
    "kr": "뺼",
    "en": "bbyael"
  },
  {
    "kr": "뺽",
    "en": "bbyaelg"
  },
  {
    "kr": "뺾",
    "en": "bbyaelm"
  },
  {
    "kr": "뺿",
    "en": "bbyaelb"
  },
  {
    "kr": "뻀",
    "en": "bbyaels"
  },
  {
    "kr": "뻁",
    "en": "bbyaelt"
  },
  {
    "kr": "뻂",
    "en": "bbyaelp"
  },
  {
    "kr": "뻃",
    "en": "bbyaelh"
  },
  {
    "kr": "뻄",
    "en": "bbyaem"
  },
  {
    "kr": "뻅",
    "en": "bbyaeb"
  },
  {
    "kr": "뻆",
    "en": "bbyaebs"
  },
  {
    "kr": "뻇",
    "en": "bbyaes"
  },
  {
    "kr": "뻈",
    "en": "bbyaess"
  },
  {
    "kr": "뻉",
    "en": "bbyaeng"
  },
  {
    "kr": "뻊",
    "en": "bbyaej"
  },
  {
    "kr": "뻋",
    "en": "bbyaec"
  },
  {
    "kr": "뻌",
    "en": "bbyaek"
  },
  {
    "kr": "뻍",
    "en": "bbyaet"
  },
  {
    "kr": "뻎",
    "en": "bbyaep"
  },
  {
    "kr": "뻏",
    "en": "bbyaeh"
  },
  {
    "kr": "뻐",
    "en": "bbeo"
  },
  {
    "kr": "뻑",
    "en": "bbeog"
  },
  {
    "kr": "뻒",
    "en": "bbeogg"
  },
  {
    "kr": "뻓",
    "en": "bbeogs"
  },
  {
    "kr": "뻔",
    "en": "bbeon"
  },
  {
    "kr": "뻕",
    "en": "bbeonj"
  },
  {
    "kr": "뻖",
    "en": "bbeonh"
  },
  {
    "kr": "뻗",
    "en": "bbeod"
  },
  {
    "kr": "뻘",
    "en": "bbeol"
  },
  {
    "kr": "뻙",
    "en": "bbeolg"
  },
  {
    "kr": "뻚",
    "en": "bbeolm"
  },
  {
    "kr": "뻛",
    "en": "bbeolb"
  },
  {
    "kr": "뻜",
    "en": "bbeols"
  },
  {
    "kr": "뻝",
    "en": "bbeolt"
  },
  {
    "kr": "뻞",
    "en": "bbeolp"
  },
  {
    "kr": "뻟",
    "en": "bbeolh"
  },
  {
    "kr": "뻠",
    "en": "bbeom"
  },
  {
    "kr": "뻡",
    "en": "bbeob"
  },
  {
    "kr": "뻢",
    "en": "bbeobs"
  },
  {
    "kr": "뻣",
    "en": "bbeos"
  },
  {
    "kr": "뻤",
    "en": "bbeoss"
  },
  {
    "kr": "뻥",
    "en": "bbeong"
  },
  {
    "kr": "뻦",
    "en": "bbeoj"
  },
  {
    "kr": "뻧",
    "en": "bbeoc"
  },
  {
    "kr": "뻨",
    "en": "bbeok"
  },
  {
    "kr": "뻩",
    "en": "bbeot"
  },
  {
    "kr": "뻪",
    "en": "bbeop"
  },
  {
    "kr": "뻫",
    "en": "bbeoh"
  },
  {
    "kr": "뻬",
    "en": "bbe"
  },
  {
    "kr": "뻭",
    "en": "bbeg"
  },
  {
    "kr": "뻮",
    "en": "bbegg"
  },
  {
    "kr": "뻯",
    "en": "bbegs"
  },
  {
    "kr": "뻰",
    "en": "bben"
  },
  {
    "kr": "뻱",
    "en": "bbenj"
  },
  {
    "kr": "뻲",
    "en": "bbenh"
  },
  {
    "kr": "뻳",
    "en": "bbed"
  },
  {
    "kr": "뻴",
    "en": "bbel"
  },
  {
    "kr": "뻵",
    "en": "bbelg"
  },
  {
    "kr": "뻶",
    "en": "bbelm"
  },
  {
    "kr": "뻷",
    "en": "bbelb"
  },
  {
    "kr": "뻸",
    "en": "bbels"
  },
  {
    "kr": "뻹",
    "en": "bbelt"
  },
  {
    "kr": "뻺",
    "en": "bbelp"
  },
  {
    "kr": "뻻",
    "en": "bbelh"
  },
  {
    "kr": "뻼",
    "en": "bbem"
  },
  {
    "kr": "뻽",
    "en": "bbeb"
  },
  {
    "kr": "뻾",
    "en": "bbebs"
  },
  {
    "kr": "뻿",
    "en": "bbes"
  },
  {
    "kr": "뼀",
    "en": "bbess"
  },
  {
    "kr": "뼁",
    "en": "bbeng"
  },
  {
    "kr": "뼂",
    "en": "bbej"
  },
  {
    "kr": "뼃",
    "en": "bbec"
  },
  {
    "kr": "뼄",
    "en": "bbek"
  },
  {
    "kr": "뼅",
    "en": "bbet"
  },
  {
    "kr": "뼆",
    "en": "bbep"
  },
  {
    "kr": "뼇",
    "en": "bbeh"
  },
  {
    "kr": "뼈",
    "en": "bbyeo"
  },
  {
    "kr": "뼉",
    "en": "bbyeog"
  },
  {
    "kr": "뼊",
    "en": "bbyeogg"
  },
  {
    "kr": "뼋",
    "en": "bbyeogs"
  },
  {
    "kr": "뼌",
    "en": "bbyeon"
  },
  {
    "kr": "뼍",
    "en": "bbyeonj"
  },
  {
    "kr": "뼎",
    "en": "bbyeonh"
  },
  {
    "kr": "뼏",
    "en": "bbyeod"
  },
  {
    "kr": "뼐",
    "en": "bbyeol"
  },
  {
    "kr": "뼑",
    "en": "bbyeolg"
  },
  {
    "kr": "뼒",
    "en": "bbyeolm"
  },
  {
    "kr": "뼓",
    "en": "bbyeolb"
  },
  {
    "kr": "뼔",
    "en": "bbyeols"
  },
  {
    "kr": "뼕",
    "en": "bbyeolt"
  },
  {
    "kr": "뼖",
    "en": "bbyeolp"
  },
  {
    "kr": "뼗",
    "en": "bbyeolh"
  },
  {
    "kr": "뼘",
    "en": "bbyeom"
  },
  {
    "kr": "뼙",
    "en": "bbyeob"
  },
  {
    "kr": "뼚",
    "en": "bbyeobs"
  },
  {
    "kr": "뼛",
    "en": "bbyeos"
  },
  {
    "kr": "뼜",
    "en": "bbyeoss"
  },
  {
    "kr": "뼝",
    "en": "bbyeong"
  },
  {
    "kr": "뼞",
    "en": "bbyeoj"
  },
  {
    "kr": "뼟",
    "en": "bbyeoc"
  },
  {
    "kr": "뼠",
    "en": "bbyeok"
  },
  {
    "kr": "뼡",
    "en": "bbyeot"
  },
  {
    "kr": "뼢",
    "en": "bbyeop"
  },
  {
    "kr": "뼣",
    "en": "bbyeoh"
  },
  {
    "kr": "뼤",
    "en": "bbye"
  },
  {
    "kr": "뼥",
    "en": "bbyeg"
  },
  {
    "kr": "뼦",
    "en": "bbyegg"
  },
  {
    "kr": "뼧",
    "en": "bbyegs"
  },
  {
    "kr": "뼨",
    "en": "bbyen"
  },
  {
    "kr": "뼩",
    "en": "bbyenj"
  },
  {
    "kr": "뼪",
    "en": "bbyenh"
  },
  {
    "kr": "뼫",
    "en": "bbyed"
  },
  {
    "kr": "뼬",
    "en": "bbyel"
  },
  {
    "kr": "뼭",
    "en": "bbyelg"
  },
  {
    "kr": "뼮",
    "en": "bbyelm"
  },
  {
    "kr": "뼯",
    "en": "bbyelb"
  },
  {
    "kr": "뼰",
    "en": "bbyels"
  },
  {
    "kr": "뼱",
    "en": "bbyelt"
  },
  {
    "kr": "뼲",
    "en": "bbyelp"
  },
  {
    "kr": "뼳",
    "en": "bbyelh"
  },
  {
    "kr": "뼴",
    "en": "bbyem"
  },
  {
    "kr": "뼵",
    "en": "bbyeb"
  },
  {
    "kr": "뼶",
    "en": "bbyebs"
  },
  {
    "kr": "뼷",
    "en": "bbyes"
  },
  {
    "kr": "뼸",
    "en": "bbyess"
  },
  {
    "kr": "뼹",
    "en": "bbyeng"
  },
  {
    "kr": "뼺",
    "en": "bbyej"
  },
  {
    "kr": "뼻",
    "en": "bbyec"
  },
  {
    "kr": "뼼",
    "en": "bbyek"
  },
  {
    "kr": "뼽",
    "en": "bbyet"
  },
  {
    "kr": "뼾",
    "en": "bbyep"
  },
  {
    "kr": "뼿",
    "en": "bbyeh"
  },
  {
    "kr": "뽀",
    "en": "bbo"
  },
  {
    "kr": "뽁",
    "en": "bbog"
  },
  {
    "kr": "뽂",
    "en": "bbogg"
  },
  {
    "kr": "뽃",
    "en": "bbogs"
  },
  {
    "kr": "뽄",
    "en": "bbon"
  },
  {
    "kr": "뽅",
    "en": "bbonj"
  },
  {
    "kr": "뽆",
    "en": "bbonh"
  },
  {
    "kr": "뽇",
    "en": "bbod"
  },
  {
    "kr": "뽈",
    "en": "bbol"
  },
  {
    "kr": "뽉",
    "en": "bbolg"
  },
  {
    "kr": "뽊",
    "en": "bbolm"
  },
  {
    "kr": "뽋",
    "en": "bbolb"
  },
  {
    "kr": "뽌",
    "en": "bbols"
  },
  {
    "kr": "뽍",
    "en": "bbolt"
  },
  {
    "kr": "뽎",
    "en": "bbolp"
  },
  {
    "kr": "뽏",
    "en": "bbolh"
  },
  {
    "kr": "뽐",
    "en": "bbom"
  },
  {
    "kr": "뽑",
    "en": "bbob"
  },
  {
    "kr": "뽒",
    "en": "bbobs"
  },
  {
    "kr": "뽓",
    "en": "bbos"
  },
  {
    "kr": "뽔",
    "en": "bboss"
  },
  {
    "kr": "뽕",
    "en": "bbong"
  },
  {
    "kr": "뽖",
    "en": "bboj"
  },
  {
    "kr": "뽗",
    "en": "bboc"
  },
  {
    "kr": "뽘",
    "en": "bbok"
  },
  {
    "kr": "뽙",
    "en": "bbot"
  },
  {
    "kr": "뽚",
    "en": "bbop"
  },
  {
    "kr": "뽛",
    "en": "bboh"
  },
  {
    "kr": "뽜",
    "en": "bbwa"
  },
  {
    "kr": "뽝",
    "en": "bbwag"
  },
  {
    "kr": "뽞",
    "en": "bbwagg"
  },
  {
    "kr": "뽟",
    "en": "bbwags"
  },
  {
    "kr": "뽠",
    "en": "bbwan"
  },
  {
    "kr": "뽡",
    "en": "bbwanj"
  },
  {
    "kr": "뽢",
    "en": "bbwanh"
  },
  {
    "kr": "뽣",
    "en": "bbwad"
  },
  {
    "kr": "뽤",
    "en": "bbwal"
  },
  {
    "kr": "뽥",
    "en": "bbwalg"
  },
  {
    "kr": "뽦",
    "en": "bbwalm"
  },
  {
    "kr": "뽧",
    "en": "bbwalb"
  },
  {
    "kr": "뽨",
    "en": "bbwals"
  },
  {
    "kr": "뽩",
    "en": "bbwalt"
  },
  {
    "kr": "뽪",
    "en": "bbwalp"
  },
  {
    "kr": "뽫",
    "en": "bbwalh"
  },
  {
    "kr": "뽬",
    "en": "bbwam"
  },
  {
    "kr": "뽭",
    "en": "bbwab"
  },
  {
    "kr": "뽮",
    "en": "bbwabs"
  },
  {
    "kr": "뽯",
    "en": "bbwas"
  },
  {
    "kr": "뽰",
    "en": "bbwass"
  },
  {
    "kr": "뽱",
    "en": "bbwang"
  },
  {
    "kr": "뽲",
    "en": "bbwaj"
  },
  {
    "kr": "뽳",
    "en": "bbwac"
  },
  {
    "kr": "뽴",
    "en": "bbwak"
  },
  {
    "kr": "뽵",
    "en": "bbwat"
  },
  {
    "kr": "뽶",
    "en": "bbwap"
  },
  {
    "kr": "뽷",
    "en": "bbwah"
  },
  {
    "kr": "뽸",
    "en": "bbwae"
  },
  {
    "kr": "뽹",
    "en": "bbwaeg"
  },
  {
    "kr": "뽺",
    "en": "bbwaegg"
  },
  {
    "kr": "뽻",
    "en": "bbwaegs"
  },
  {
    "kr": "뽼",
    "en": "bbwaen"
  },
  {
    "kr": "뽽",
    "en": "bbwaenj"
  },
  {
    "kr": "뽾",
    "en": "bbwaenh"
  },
  {
    "kr": "뽿",
    "en": "bbwaed"
  },
  {
    "kr": "뾀",
    "en": "bbwael"
  },
  {
    "kr": "뾁",
    "en": "bbwaelg"
  },
  {
    "kr": "뾂",
    "en": "bbwaelm"
  },
  {
    "kr": "뾃",
    "en": "bbwaelb"
  },
  {
    "kr": "뾄",
    "en": "bbwaels"
  },
  {
    "kr": "뾅",
    "en": "bbwaelt"
  },
  {
    "kr": "뾆",
    "en": "bbwaelp"
  },
  {
    "kr": "뾇",
    "en": "bbwaelh"
  },
  {
    "kr": "뾈",
    "en": "bbwaem"
  },
  {
    "kr": "뾉",
    "en": "bbwaeb"
  },
  {
    "kr": "뾊",
    "en": "bbwaebs"
  },
  {
    "kr": "뾋",
    "en": "bbwaes"
  },
  {
    "kr": "뾌",
    "en": "bbwaess"
  },
  {
    "kr": "뾍",
    "en": "bbwaeng"
  },
  {
    "kr": "뾎",
    "en": "bbwaej"
  },
  {
    "kr": "뾏",
    "en": "bbwaec"
  },
  {
    "kr": "뾐",
    "en": "bbwaek"
  },
  {
    "kr": "뾑",
    "en": "bbwaet"
  },
  {
    "kr": "뾒",
    "en": "bbwaep"
  },
  {
    "kr": "뾓",
    "en": "bbwaeh"
  },
  {
    "kr": "뾔",
    "en": "bboe"
  },
  {
    "kr": "뾕",
    "en": "bboeg"
  },
  {
    "kr": "뾖",
    "en": "bboegg"
  },
  {
    "kr": "뾗",
    "en": "bboegs"
  },
  {
    "kr": "뾘",
    "en": "bboen"
  },
  {
    "kr": "뾙",
    "en": "bboenj"
  },
  {
    "kr": "뾚",
    "en": "bboenh"
  },
  {
    "kr": "뾛",
    "en": "bboed"
  },
  {
    "kr": "뾜",
    "en": "bboel"
  },
  {
    "kr": "뾝",
    "en": "bboelg"
  },
  {
    "kr": "뾞",
    "en": "bboelm"
  },
  {
    "kr": "뾟",
    "en": "bboelb"
  },
  {
    "kr": "뾠",
    "en": "bboels"
  },
  {
    "kr": "뾡",
    "en": "bboelt"
  },
  {
    "kr": "뾢",
    "en": "bboelp"
  },
  {
    "kr": "뾣",
    "en": "bboelh"
  },
  {
    "kr": "뾤",
    "en": "bboem"
  },
  {
    "kr": "뾥",
    "en": "bboeb"
  },
  {
    "kr": "뾦",
    "en": "bboebs"
  },
  {
    "kr": "뾧",
    "en": "bboes"
  },
  {
    "kr": "뾨",
    "en": "bboess"
  },
  {
    "kr": "뾩",
    "en": "bboeng"
  },
  {
    "kr": "뾪",
    "en": "bboej"
  },
  {
    "kr": "뾫",
    "en": "bboec"
  },
  {
    "kr": "뾬",
    "en": "bboek"
  },
  {
    "kr": "뾭",
    "en": "bboet"
  },
  {
    "kr": "뾮",
    "en": "bboep"
  },
  {
    "kr": "뾯",
    "en": "bboeh"
  },
  {
    "kr": "뾰",
    "en": "bbyo"
  },
  {
    "kr": "뾱",
    "en": "bbyog"
  },
  {
    "kr": "뾲",
    "en": "bbyogg"
  },
  {
    "kr": "뾳",
    "en": "bbyogs"
  },
  {
    "kr": "뾴",
    "en": "bbyon"
  },
  {
    "kr": "뾵",
    "en": "bbyonj"
  },
  {
    "kr": "뾶",
    "en": "bbyonh"
  },
  {
    "kr": "뾷",
    "en": "bbyod"
  },
  {
    "kr": "뾸",
    "en": "bbyol"
  },
  {
    "kr": "뾹",
    "en": "bbyolg"
  },
  {
    "kr": "뾺",
    "en": "bbyolm"
  },
  {
    "kr": "뾻",
    "en": "bbyolb"
  },
  {
    "kr": "뾼",
    "en": "bbyols"
  },
  {
    "kr": "뾽",
    "en": "bbyolt"
  },
  {
    "kr": "뾾",
    "en": "bbyolp"
  },
  {
    "kr": "뾿",
    "en": "bbyolh"
  },
  {
    "kr": "뿀",
    "en": "bbyom"
  },
  {
    "kr": "뿁",
    "en": "bbyob"
  },
  {
    "kr": "뿂",
    "en": "bbyobs"
  },
  {
    "kr": "뿃",
    "en": "bbyos"
  },
  {
    "kr": "뿄",
    "en": "bbyoss"
  },
  {
    "kr": "뿅",
    "en": "bbyong"
  },
  {
    "kr": "뿆",
    "en": "bbyoj"
  },
  {
    "kr": "뿇",
    "en": "bbyoc"
  },
  {
    "kr": "뿈",
    "en": "bbyok"
  },
  {
    "kr": "뿉",
    "en": "bbyot"
  },
  {
    "kr": "뿊",
    "en": "bbyop"
  },
  {
    "kr": "뿋",
    "en": "bbyoh"
  },
  {
    "kr": "뿌",
    "en": "bbu"
  },
  {
    "kr": "뿍",
    "en": "bbug"
  },
  {
    "kr": "뿎",
    "en": "bbugg"
  },
  {
    "kr": "뿏",
    "en": "bbugs"
  },
  {
    "kr": "뿐",
    "en": "bbun"
  },
  {
    "kr": "뿑",
    "en": "bbunj"
  },
  {
    "kr": "뿒",
    "en": "bbunh"
  },
  {
    "kr": "뿓",
    "en": "bbud"
  },
  {
    "kr": "뿔",
    "en": "bbul"
  },
  {
    "kr": "뿕",
    "en": "bbulg"
  },
  {
    "kr": "뿖",
    "en": "bbulm"
  },
  {
    "kr": "뿗",
    "en": "bbulb"
  },
  {
    "kr": "뿘",
    "en": "bbuls"
  },
  {
    "kr": "뿙",
    "en": "bbult"
  },
  {
    "kr": "뿚",
    "en": "bbulp"
  },
  {
    "kr": "뿛",
    "en": "bbulh"
  },
  {
    "kr": "뿜",
    "en": "bbum"
  },
  {
    "kr": "뿝",
    "en": "bbub"
  },
  {
    "kr": "뿞",
    "en": "bbubs"
  },
  {
    "kr": "뿟",
    "en": "bbus"
  },
  {
    "kr": "뿠",
    "en": "bbuss"
  },
  {
    "kr": "뿡",
    "en": "bbung"
  },
  {
    "kr": "뿢",
    "en": "bbuj"
  },
  {
    "kr": "뿣",
    "en": "bbuc"
  },
  {
    "kr": "뿤",
    "en": "bbuk"
  },
  {
    "kr": "뿥",
    "en": "bbut"
  },
  {
    "kr": "뿦",
    "en": "bbup"
  },
  {
    "kr": "뿧",
    "en": "bbuh"
  },
  {
    "kr": "뿨",
    "en": "bbweo"
  },
  {
    "kr": "뿩",
    "en": "bbweog"
  },
  {
    "kr": "뿪",
    "en": "bbweogg"
  },
  {
    "kr": "뿫",
    "en": "bbweogs"
  },
  {
    "kr": "뿬",
    "en": "bbweon"
  },
  {
    "kr": "뿭",
    "en": "bbweonj"
  },
  {
    "kr": "뿮",
    "en": "bbweonh"
  },
  {
    "kr": "뿯",
    "en": "bbweod"
  },
  {
    "kr": "뿰",
    "en": "bbweol"
  },
  {
    "kr": "뿱",
    "en": "bbweolg"
  },
  {
    "kr": "뿲",
    "en": "bbweolm"
  },
  {
    "kr": "뿳",
    "en": "bbweolb"
  },
  {
    "kr": "뿴",
    "en": "bbweols"
  },
  {
    "kr": "뿵",
    "en": "bbweolt"
  },
  {
    "kr": "뿶",
    "en": "bbweolp"
  },
  {
    "kr": "뿷",
    "en": "bbweolh"
  },
  {
    "kr": "뿸",
    "en": "bbweom"
  },
  {
    "kr": "뿹",
    "en": "bbweob"
  },
  {
    "kr": "뿺",
    "en": "bbweobs"
  },
  {
    "kr": "뿻",
    "en": "bbweos"
  },
  {
    "kr": "뿼",
    "en": "bbweoss"
  },
  {
    "kr": "뿽",
    "en": "bbweong"
  },
  {
    "kr": "뿾",
    "en": "bbweoj"
  },
  {
    "kr": "뿿",
    "en": "bbweoc"
  },
  {
    "kr": "쀀",
    "en": "bbweok"
  },
  {
    "kr": "쀁",
    "en": "bbweot"
  },
  {
    "kr": "쀂",
    "en": "bbweop"
  },
  {
    "kr": "쀃",
    "en": "bbweoh"
  },
  {
    "kr": "쀄",
    "en": "bbwe"
  },
  {
    "kr": "쀅",
    "en": "bbweg"
  },
  {
    "kr": "쀆",
    "en": "bbwegg"
  },
  {
    "kr": "쀇",
    "en": "bbwegs"
  },
  {
    "kr": "쀈",
    "en": "bbwen"
  },
  {
    "kr": "쀉",
    "en": "bbwenj"
  },
  {
    "kr": "쀊",
    "en": "bbwenh"
  },
  {
    "kr": "쀋",
    "en": "bbwed"
  },
  {
    "kr": "쀌",
    "en": "bbwel"
  },
  {
    "kr": "쀍",
    "en": "bbwelg"
  },
  {
    "kr": "쀎",
    "en": "bbwelm"
  },
  {
    "kr": "쀏",
    "en": "bbwelb"
  },
  {
    "kr": "쀐",
    "en": "bbwels"
  },
  {
    "kr": "쀑",
    "en": "bbwelt"
  },
  {
    "kr": "쀒",
    "en": "bbwelp"
  },
  {
    "kr": "쀓",
    "en": "bbwelh"
  },
  {
    "kr": "쀔",
    "en": "bbwem"
  },
  {
    "kr": "쀕",
    "en": "bbweb"
  },
  {
    "kr": "쀖",
    "en": "bbwebs"
  },
  {
    "kr": "쀗",
    "en": "bbwes"
  },
  {
    "kr": "쀘",
    "en": "bbwess"
  },
  {
    "kr": "쀙",
    "en": "bbweng"
  },
  {
    "kr": "쀚",
    "en": "bbwej"
  },
  {
    "kr": "쀛",
    "en": "bbwec"
  },
  {
    "kr": "쀜",
    "en": "bbwek"
  },
  {
    "kr": "쀝",
    "en": "bbwet"
  },
  {
    "kr": "쀞",
    "en": "bbwep"
  },
  {
    "kr": "쀟",
    "en": "bbweh"
  },
  {
    "kr": "쀠",
    "en": "bbwi"
  },
  {
    "kr": "쀡",
    "en": "bbwig"
  },
  {
    "kr": "쀢",
    "en": "bbwigg"
  },
  {
    "kr": "쀣",
    "en": "bbwigs"
  },
  {
    "kr": "쀤",
    "en": "bbwin"
  },
  {
    "kr": "쀥",
    "en": "bbwinj"
  },
  {
    "kr": "쀦",
    "en": "bbwinh"
  },
  {
    "kr": "쀧",
    "en": "bbwid"
  },
  {
    "kr": "쀨",
    "en": "bbwil"
  },
  {
    "kr": "쀩",
    "en": "bbwilg"
  },
  {
    "kr": "쀪",
    "en": "bbwilm"
  },
  {
    "kr": "쀫",
    "en": "bbwilb"
  },
  {
    "kr": "쀬",
    "en": "bbwils"
  },
  {
    "kr": "쀭",
    "en": "bbwilt"
  },
  {
    "kr": "쀮",
    "en": "bbwilp"
  },
  {
    "kr": "쀯",
    "en": "bbwilh"
  },
  {
    "kr": "쀰",
    "en": "bbwim"
  },
  {
    "kr": "쀱",
    "en": "bbwib"
  },
  {
    "kr": "쀲",
    "en": "bbwibs"
  },
  {
    "kr": "쀳",
    "en": "bbwis"
  },
  {
    "kr": "쀴",
    "en": "bbwiss"
  },
  {
    "kr": "쀵",
    "en": "bbwing"
  },
  {
    "kr": "쀶",
    "en": "bbwij"
  },
  {
    "kr": "쀷",
    "en": "bbwic"
  },
  {
    "kr": "쀸",
    "en": "bbwik"
  },
  {
    "kr": "쀹",
    "en": "bbwit"
  },
  {
    "kr": "쀺",
    "en": "bbwip"
  },
  {
    "kr": "쀻",
    "en": "bbwih"
  },
  {
    "kr": "쀼",
    "en": "bbyu"
  },
  {
    "kr": "쀽",
    "en": "bbyug"
  },
  {
    "kr": "쀾",
    "en": "bbyugg"
  },
  {
    "kr": "쀿",
    "en": "bbyugs"
  },
  {
    "kr": "쁀",
    "en": "bbyun"
  },
  {
    "kr": "쁁",
    "en": "bbyunj"
  },
  {
    "kr": "쁂",
    "en": "bbyunh"
  },
  {
    "kr": "쁃",
    "en": "bbyud"
  },
  {
    "kr": "쁄",
    "en": "bbyul"
  },
  {
    "kr": "쁅",
    "en": "bbyulg"
  },
  {
    "kr": "쁆",
    "en": "bbyulm"
  },
  {
    "kr": "쁇",
    "en": "bbyulb"
  },
  {
    "kr": "쁈",
    "en": "bbyuls"
  },
  {
    "kr": "쁉",
    "en": "bbyult"
  },
  {
    "kr": "쁊",
    "en": "bbyulp"
  },
  {
    "kr": "쁋",
    "en": "bbyulh"
  },
  {
    "kr": "쁌",
    "en": "bbyum"
  },
  {
    "kr": "쁍",
    "en": "bbyub"
  },
  {
    "kr": "쁎",
    "en": "bbyubs"
  },
  {
    "kr": "쁏",
    "en": "bbyus"
  },
  {
    "kr": "쁐",
    "en": "bbyuss"
  },
  {
    "kr": "쁑",
    "en": "bbyung"
  },
  {
    "kr": "쁒",
    "en": "bbyuj"
  },
  {
    "kr": "쁓",
    "en": "bbyuc"
  },
  {
    "kr": "쁔",
    "en": "bbyuk"
  },
  {
    "kr": "쁕",
    "en": "bbyut"
  },
  {
    "kr": "쁖",
    "en": "bbyup"
  },
  {
    "kr": "쁗",
    "en": "bbyuh"
  },
  {
    "kr": "쁘",
    "en": "bbeu"
  },
  {
    "kr": "쁙",
    "en": "bbeug"
  },
  {
    "kr": "쁚",
    "en": "bbeugg"
  },
  {
    "kr": "쁛",
    "en": "bbeugs"
  },
  {
    "kr": "쁜",
    "en": "bbeun"
  },
  {
    "kr": "쁝",
    "en": "bbeunj"
  },
  {
    "kr": "쁞",
    "en": "bbeunh"
  },
  {
    "kr": "쁟",
    "en": "bbeud"
  },
  {
    "kr": "쁠",
    "en": "bbeul"
  },
  {
    "kr": "쁡",
    "en": "bbeulg"
  },
  {
    "kr": "쁢",
    "en": "bbeulm"
  },
  {
    "kr": "쁣",
    "en": "bbeulb"
  },
  {
    "kr": "쁤",
    "en": "bbeuls"
  },
  {
    "kr": "쁥",
    "en": "bbeult"
  },
  {
    "kr": "쁦",
    "en": "bbeulp"
  },
  {
    "kr": "쁧",
    "en": "bbeulh"
  },
  {
    "kr": "쁨",
    "en": "bbeum"
  },
  {
    "kr": "쁩",
    "en": "bbeub"
  },
  {
    "kr": "쁪",
    "en": "bbeubs"
  },
  {
    "kr": "쁫",
    "en": "bbeus"
  },
  {
    "kr": "쁬",
    "en": "bbeuss"
  },
  {
    "kr": "쁭",
    "en": "bbeung"
  },
  {
    "kr": "쁮",
    "en": "bbeuj"
  },
  {
    "kr": "쁯",
    "en": "bbeuc"
  },
  {
    "kr": "쁰",
    "en": "bbeuk"
  },
  {
    "kr": "쁱",
    "en": "bbeut"
  },
  {
    "kr": "쁲",
    "en": "bbeup"
  },
  {
    "kr": "쁳",
    "en": "bbeuh"
  },
  {
    "kr": "쁴",
    "en": "bbyi"
  },
  {
    "kr": "쁵",
    "en": "bbyig"
  },
  {
    "kr": "쁶",
    "en": "bbyigg"
  },
  {
    "kr": "쁷",
    "en": "bbyigs"
  },
  {
    "kr": "쁸",
    "en": "bbyin"
  },
  {
    "kr": "쁹",
    "en": "bbyinj"
  },
  {
    "kr": "쁺",
    "en": "bbyinh"
  },
  {
    "kr": "쁻",
    "en": "bbyid"
  },
  {
    "kr": "쁼",
    "en": "bbyil"
  },
  {
    "kr": "쁽",
    "en": "bbyilg"
  },
  {
    "kr": "쁾",
    "en": "bbyilm"
  },
  {
    "kr": "쁿",
    "en": "bbyilb"
  },
  {
    "kr": "삀",
    "en": "bbyils"
  },
  {
    "kr": "삁",
    "en": "bbyilt"
  },
  {
    "kr": "삂",
    "en": "bbyilp"
  },
  {
    "kr": "삃",
    "en": "bbyilh"
  },
  {
    "kr": "삄",
    "en": "bbyim"
  },
  {
    "kr": "삅",
    "en": "bbyib"
  },
  {
    "kr": "삆",
    "en": "bbyibs"
  },
  {
    "kr": "삇",
    "en": "bbyis"
  },
  {
    "kr": "삈",
    "en": "bbyiss"
  },
  {
    "kr": "삉",
    "en": "bbying"
  },
  {
    "kr": "삊",
    "en": "bbyij"
  },
  {
    "kr": "삋",
    "en": "bbyic"
  },
  {
    "kr": "삌",
    "en": "bbyik"
  },
  {
    "kr": "삍",
    "en": "bbyit"
  },
  {
    "kr": "삎",
    "en": "bbyip"
  },
  {
    "kr": "삏",
    "en": "bbyih"
  },
  {
    "kr": "삐",
    "en": "bbi"
  },
  {
    "kr": "삑",
    "en": "bbig"
  },
  {
    "kr": "삒",
    "en": "bbigg"
  },
  {
    "kr": "삓",
    "en": "bbigs"
  },
  {
    "kr": "삔",
    "en": "bbin"
  },
  {
    "kr": "삕",
    "en": "bbinj"
  },
  {
    "kr": "삖",
    "en": "bbinh"
  },
  {
    "kr": "삗",
    "en": "bbid"
  },
  {
    "kr": "삘",
    "en": "bbil"
  },
  {
    "kr": "삙",
    "en": "bbilg"
  },
  {
    "kr": "삚",
    "en": "bbilm"
  },
  {
    "kr": "삛",
    "en": "bbilb"
  },
  {
    "kr": "삜",
    "en": "bbils"
  },
  {
    "kr": "삝",
    "en": "bbilt"
  },
  {
    "kr": "삞",
    "en": "bbilp"
  },
  {
    "kr": "삟",
    "en": "bbilh"
  },
  {
    "kr": "삠",
    "en": "bbim"
  },
  {
    "kr": "삡",
    "en": "bbib"
  },
  {
    "kr": "삢",
    "en": "bbibs"
  },
  {
    "kr": "삣",
    "en": "bbis"
  },
  {
    "kr": "삤",
    "en": "bbiss"
  },
  {
    "kr": "삥",
    "en": "bbing"
  },
  {
    "kr": "삦",
    "en": "bbij"
  },
  {
    "kr": "삧",
    "en": "bbic"
  },
  {
    "kr": "삨",
    "en": "bbik"
  },
  {
    "kr": "삩",
    "en": "bbit"
  },
  {
    "kr": "삪",
    "en": "bbip"
  },
  {
    "kr": "삫",
    "en": "bbih"
  },
  {
    "kr": "사",
    "en": "sa"
  },
  {
    "kr": "삭",
    "en": "sag"
  },
  {
    "kr": "삮",
    "en": "sagg"
  },
  {
    "kr": "삯",
    "en": "sags"
  },
  {
    "kr": "산",
    "en": "san"
  },
  {
    "kr": "삱",
    "en": "sanj"
  },
  {
    "kr": "삲",
    "en": "sanh"
  },
  {
    "kr": "삳",
    "en": "sad"
  },
  {
    "kr": "살",
    "en": "sal"
  },
  {
    "kr": "삵",
    "en": "salg"
  },
  {
    "kr": "삶",
    "en": "salm"
  },
  {
    "kr": "삷",
    "en": "salb"
  },
  {
    "kr": "삸",
    "en": "sals"
  },
  {
    "kr": "삹",
    "en": "salt"
  },
  {
    "kr": "삺",
    "en": "salp"
  },
  {
    "kr": "삻",
    "en": "salh"
  },
  {
    "kr": "삼",
    "en": "sam"
  },
  {
    "kr": "삽",
    "en": "sab"
  },
  {
    "kr": "삾",
    "en": "sabs"
  },
  {
    "kr": "삿",
    "en": "sas"
  },
  {
    "kr": "샀",
    "en": "sass"
  },
  {
    "kr": "상",
    "en": "sang"
  },
  {
    "kr": "샂",
    "en": "saj"
  },
  {
    "kr": "샃",
    "en": "sac"
  },
  {
    "kr": "샄",
    "en": "sak"
  },
  {
    "kr": "샅",
    "en": "sat"
  },
  {
    "kr": "샆",
    "en": "sap"
  },
  {
    "kr": "샇",
    "en": "sah"
  },
  {
    "kr": "새",
    "en": "sae"
  },
  {
    "kr": "색",
    "en": "saeg"
  },
  {
    "kr": "샊",
    "en": "saegg"
  },
  {
    "kr": "샋",
    "en": "saegs"
  },
  {
    "kr": "샌",
    "en": "saen"
  },
  {
    "kr": "샍",
    "en": "saenj"
  },
  {
    "kr": "샎",
    "en": "saenh"
  },
  {
    "kr": "샏",
    "en": "saed"
  },
  {
    "kr": "샐",
    "en": "sael"
  },
  {
    "kr": "샑",
    "en": "saelg"
  },
  {
    "kr": "샒",
    "en": "saelm"
  },
  {
    "kr": "샓",
    "en": "saelb"
  },
  {
    "kr": "샔",
    "en": "saels"
  },
  {
    "kr": "샕",
    "en": "saelt"
  },
  {
    "kr": "샖",
    "en": "saelp"
  },
  {
    "kr": "샗",
    "en": "saelh"
  },
  {
    "kr": "샘",
    "en": "saem"
  },
  {
    "kr": "샙",
    "en": "saeb"
  },
  {
    "kr": "샚",
    "en": "saebs"
  },
  {
    "kr": "샛",
    "en": "saes"
  },
  {
    "kr": "샜",
    "en": "saess"
  },
  {
    "kr": "생",
    "en": "saeng"
  },
  {
    "kr": "샞",
    "en": "saej"
  },
  {
    "kr": "샟",
    "en": "saec"
  },
  {
    "kr": "샠",
    "en": "saek"
  },
  {
    "kr": "샡",
    "en": "saet"
  },
  {
    "kr": "샢",
    "en": "saep"
  },
  {
    "kr": "샣",
    "en": "saeh"
  },
  {
    "kr": "샤",
    "en": "sya"
  },
  {
    "kr": "샥",
    "en": "syag"
  },
  {
    "kr": "샦",
    "en": "syagg"
  },
  {
    "kr": "샧",
    "en": "syags"
  },
  {
    "kr": "샨",
    "en": "syan"
  },
  {
    "kr": "샩",
    "en": "syanj"
  },
  {
    "kr": "샪",
    "en": "syanh"
  },
  {
    "kr": "샫",
    "en": "syad"
  },
  {
    "kr": "샬",
    "en": "syal"
  },
  {
    "kr": "샭",
    "en": "syalg"
  },
  {
    "kr": "샮",
    "en": "syalm"
  },
  {
    "kr": "샯",
    "en": "syalb"
  },
  {
    "kr": "샰",
    "en": "syals"
  },
  {
    "kr": "샱",
    "en": "syalt"
  },
  {
    "kr": "샲",
    "en": "syalp"
  },
  {
    "kr": "샳",
    "en": "syalh"
  },
  {
    "kr": "샴",
    "en": "syam"
  },
  {
    "kr": "샵",
    "en": "syab"
  },
  {
    "kr": "샶",
    "en": "syabs"
  },
  {
    "kr": "샷",
    "en": "syas"
  },
  {
    "kr": "샸",
    "en": "syass"
  },
  {
    "kr": "샹",
    "en": "syang"
  },
  {
    "kr": "샺",
    "en": "syaj"
  },
  {
    "kr": "샻",
    "en": "syac"
  },
  {
    "kr": "샼",
    "en": "syak"
  },
  {
    "kr": "샽",
    "en": "syat"
  },
  {
    "kr": "샾",
    "en": "syap"
  },
  {
    "kr": "샿",
    "en": "syah"
  },
  {
    "kr": "섀",
    "en": "syae"
  },
  {
    "kr": "섁",
    "en": "syaeg"
  },
  {
    "kr": "섂",
    "en": "syaegg"
  },
  {
    "kr": "섃",
    "en": "syaegs"
  },
  {
    "kr": "섄",
    "en": "syaen"
  },
  {
    "kr": "섅",
    "en": "syaenj"
  },
  {
    "kr": "섆",
    "en": "syaenh"
  },
  {
    "kr": "섇",
    "en": "syaed"
  },
  {
    "kr": "섈",
    "en": "syael"
  },
  {
    "kr": "섉",
    "en": "syaelg"
  },
  {
    "kr": "섊",
    "en": "syaelm"
  },
  {
    "kr": "섋",
    "en": "syaelb"
  },
  {
    "kr": "섌",
    "en": "syaels"
  },
  {
    "kr": "섍",
    "en": "syaelt"
  },
  {
    "kr": "섎",
    "en": "syaelp"
  },
  {
    "kr": "섏",
    "en": "syaelh"
  },
  {
    "kr": "섐",
    "en": "syaem"
  },
  {
    "kr": "섑",
    "en": "syaeb"
  },
  {
    "kr": "섒",
    "en": "syaebs"
  },
  {
    "kr": "섓",
    "en": "syaes"
  },
  {
    "kr": "섔",
    "en": "syaess"
  },
  {
    "kr": "섕",
    "en": "syaeng"
  },
  {
    "kr": "섖",
    "en": "syaej"
  },
  {
    "kr": "섗",
    "en": "syaec"
  },
  {
    "kr": "섘",
    "en": "syaek"
  },
  {
    "kr": "섙",
    "en": "syaet"
  },
  {
    "kr": "섚",
    "en": "syaep"
  },
  {
    "kr": "섛",
    "en": "syaeh"
  },
  {
    "kr": "서",
    "en": "seo"
  },
  {
    "kr": "석",
    "en": "seog"
  },
  {
    "kr": "섞",
    "en": "seogg"
  },
  {
    "kr": "섟",
    "en": "seogs"
  },
  {
    "kr": "선",
    "en": "seon"
  },
  {
    "kr": "섡",
    "en": "seonj"
  },
  {
    "kr": "섢",
    "en": "seonh"
  },
  {
    "kr": "섣",
    "en": "seod"
  },
  {
    "kr": "설",
    "en": "seol"
  },
  {
    "kr": "섥",
    "en": "seolg"
  },
  {
    "kr": "섦",
    "en": "seolm"
  },
  {
    "kr": "섧",
    "en": "seolb"
  },
  {
    "kr": "섨",
    "en": "seols"
  },
  {
    "kr": "섩",
    "en": "seolt"
  },
  {
    "kr": "섪",
    "en": "seolp"
  },
  {
    "kr": "섫",
    "en": "seolh"
  },
  {
    "kr": "섬",
    "en": "seom"
  },
  {
    "kr": "섭",
    "en": "seob"
  },
  {
    "kr": "섮",
    "en": "seobs"
  },
  {
    "kr": "섯",
    "en": "seos"
  },
  {
    "kr": "섰",
    "en": "seoss"
  },
  {
    "kr": "성",
    "en": "seong"
  },
  {
    "kr": "섲",
    "en": "seoj"
  },
  {
    "kr": "섳",
    "en": "seoc"
  },
  {
    "kr": "섴",
    "en": "seok"
  },
  {
    "kr": "섵",
    "en": "seot"
  },
  {
    "kr": "섶",
    "en": "seop"
  },
  {
    "kr": "섷",
    "en": "seoh"
  },
  {
    "kr": "세",
    "en": "se"
  },
  {
    "kr": "섹",
    "en": "seg"
  },
  {
    "kr": "섺",
    "en": "segg"
  },
  {
    "kr": "섻",
    "en": "segs"
  },
  {
    "kr": "센",
    "en": "sen"
  },
  {
    "kr": "섽",
    "en": "senj"
  },
  {
    "kr": "섾",
    "en": "senh"
  },
  {
    "kr": "섿",
    "en": "sed"
  },
  {
    "kr": "셀",
    "en": "sel"
  },
  {
    "kr": "셁",
    "en": "selg"
  },
  {
    "kr": "셂",
    "en": "selm"
  },
  {
    "kr": "셃",
    "en": "selb"
  },
  {
    "kr": "셄",
    "en": "sels"
  },
  {
    "kr": "셅",
    "en": "selt"
  },
  {
    "kr": "셆",
    "en": "selp"
  },
  {
    "kr": "셇",
    "en": "selh"
  },
  {
    "kr": "셈",
    "en": "sem"
  },
  {
    "kr": "셉",
    "en": "seb"
  },
  {
    "kr": "셊",
    "en": "sebs"
  },
  {
    "kr": "셋",
    "en": "ses"
  },
  {
    "kr": "셌",
    "en": "sess"
  },
  {
    "kr": "셍",
    "en": "seng"
  },
  {
    "kr": "셎",
    "en": "sej"
  },
  {
    "kr": "셏",
    "en": "sec"
  },
  {
    "kr": "셐",
    "en": "sek"
  },
  {
    "kr": "셑",
    "en": "set"
  },
  {
    "kr": "셒",
    "en": "sep"
  },
  {
    "kr": "셓",
    "en": "seh"
  },
  {
    "kr": "셔",
    "en": "syeo"
  },
  {
    "kr": "셕",
    "en": "syeog"
  },
  {
    "kr": "셖",
    "en": "syeogg"
  },
  {
    "kr": "셗",
    "en": "syeogs"
  },
  {
    "kr": "션",
    "en": "syeon"
  },
  {
    "kr": "셙",
    "en": "syeonj"
  },
  {
    "kr": "셚",
    "en": "syeonh"
  },
  {
    "kr": "셛",
    "en": "syeod"
  },
  {
    "kr": "셜",
    "en": "syeol"
  },
  {
    "kr": "셝",
    "en": "syeolg"
  },
  {
    "kr": "셞",
    "en": "syeolm"
  },
  {
    "kr": "셟",
    "en": "syeolb"
  },
  {
    "kr": "셠",
    "en": "syeols"
  },
  {
    "kr": "셡",
    "en": "syeolt"
  },
  {
    "kr": "셢",
    "en": "syeolp"
  },
  {
    "kr": "셣",
    "en": "syeolh"
  },
  {
    "kr": "셤",
    "en": "syeom"
  },
  {
    "kr": "셥",
    "en": "syeob"
  },
  {
    "kr": "셦",
    "en": "syeobs"
  },
  {
    "kr": "셧",
    "en": "syeos"
  },
  {
    "kr": "셨",
    "en": "syeoss"
  },
  {
    "kr": "셩",
    "en": "syeong"
  },
  {
    "kr": "셪",
    "en": "syeoj"
  },
  {
    "kr": "셫",
    "en": "syeoc"
  },
  {
    "kr": "셬",
    "en": "syeok"
  },
  {
    "kr": "셭",
    "en": "syeot"
  },
  {
    "kr": "셮",
    "en": "syeop"
  },
  {
    "kr": "셯",
    "en": "syeoh"
  },
  {
    "kr": "셰",
    "en": "sye"
  },
  {
    "kr": "셱",
    "en": "syeg"
  },
  {
    "kr": "셲",
    "en": "syegg"
  },
  {
    "kr": "셳",
    "en": "syegs"
  },
  {
    "kr": "셴",
    "en": "syen"
  },
  {
    "kr": "셵",
    "en": "syenj"
  },
  {
    "kr": "셶",
    "en": "syenh"
  },
  {
    "kr": "셷",
    "en": "syed"
  },
  {
    "kr": "셸",
    "en": "syel"
  },
  {
    "kr": "셹",
    "en": "syelg"
  },
  {
    "kr": "셺",
    "en": "syelm"
  },
  {
    "kr": "셻",
    "en": "syelb"
  },
  {
    "kr": "셼",
    "en": "syels"
  },
  {
    "kr": "셽",
    "en": "syelt"
  },
  {
    "kr": "셾",
    "en": "syelp"
  },
  {
    "kr": "셿",
    "en": "syelh"
  },
  {
    "kr": "솀",
    "en": "syem"
  },
  {
    "kr": "솁",
    "en": "syeb"
  },
  {
    "kr": "솂",
    "en": "syebs"
  },
  {
    "kr": "솃",
    "en": "syes"
  },
  {
    "kr": "솄",
    "en": "syess"
  },
  {
    "kr": "솅",
    "en": "syeng"
  },
  {
    "kr": "솆",
    "en": "syej"
  },
  {
    "kr": "솇",
    "en": "syec"
  },
  {
    "kr": "솈",
    "en": "syek"
  },
  {
    "kr": "솉",
    "en": "syet"
  },
  {
    "kr": "솊",
    "en": "syep"
  },
  {
    "kr": "솋",
    "en": "syeh"
  },
  {
    "kr": "소",
    "en": "so"
  },
  {
    "kr": "속",
    "en": "sog"
  },
  {
    "kr": "솎",
    "en": "sogg"
  },
  {
    "kr": "솏",
    "en": "sogs"
  },
  {
    "kr": "손",
    "en": "son"
  },
  {
    "kr": "솑",
    "en": "sonj"
  },
  {
    "kr": "솒",
    "en": "sonh"
  },
  {
    "kr": "솓",
    "en": "sod"
  },
  {
    "kr": "솔",
    "en": "sol"
  },
  {
    "kr": "솕",
    "en": "solg"
  },
  {
    "kr": "솖",
    "en": "solm"
  },
  {
    "kr": "솗",
    "en": "solb"
  },
  {
    "kr": "솘",
    "en": "sols"
  },
  {
    "kr": "솙",
    "en": "solt"
  },
  {
    "kr": "솚",
    "en": "solp"
  },
  {
    "kr": "솛",
    "en": "solh"
  },
  {
    "kr": "솜",
    "en": "som"
  },
  {
    "kr": "솝",
    "en": "sob"
  },
  {
    "kr": "솞",
    "en": "sobs"
  },
  {
    "kr": "솟",
    "en": "sos"
  },
  {
    "kr": "솠",
    "en": "soss"
  },
  {
    "kr": "송",
    "en": "song"
  },
  {
    "kr": "솢",
    "en": "soj"
  },
  {
    "kr": "솣",
    "en": "soc"
  },
  {
    "kr": "솤",
    "en": "sok"
  },
  {
    "kr": "솥",
    "en": "sot"
  },
  {
    "kr": "솦",
    "en": "sop"
  },
  {
    "kr": "솧",
    "en": "soh"
  },
  {
    "kr": "솨",
    "en": "swa"
  },
  {
    "kr": "솩",
    "en": "swag"
  },
  {
    "kr": "솪",
    "en": "swagg"
  },
  {
    "kr": "솫",
    "en": "swags"
  },
  {
    "kr": "솬",
    "en": "swan"
  },
  {
    "kr": "솭",
    "en": "swanj"
  },
  {
    "kr": "솮",
    "en": "swanh"
  },
  {
    "kr": "솯",
    "en": "swad"
  },
  {
    "kr": "솰",
    "en": "swal"
  },
  {
    "kr": "솱",
    "en": "swalg"
  },
  {
    "kr": "솲",
    "en": "swalm"
  },
  {
    "kr": "솳",
    "en": "swalb"
  },
  {
    "kr": "솴",
    "en": "swals"
  },
  {
    "kr": "솵",
    "en": "swalt"
  },
  {
    "kr": "솶",
    "en": "swalp"
  },
  {
    "kr": "솷",
    "en": "swalh"
  },
  {
    "kr": "솸",
    "en": "swam"
  },
  {
    "kr": "솹",
    "en": "swab"
  },
  {
    "kr": "솺",
    "en": "swabs"
  },
  {
    "kr": "솻",
    "en": "swas"
  },
  {
    "kr": "솼",
    "en": "swass"
  },
  {
    "kr": "솽",
    "en": "swang"
  },
  {
    "kr": "솾",
    "en": "swaj"
  },
  {
    "kr": "솿",
    "en": "swac"
  },
  {
    "kr": "쇀",
    "en": "swak"
  },
  {
    "kr": "쇁",
    "en": "swat"
  },
  {
    "kr": "쇂",
    "en": "swap"
  },
  {
    "kr": "쇃",
    "en": "swah"
  },
  {
    "kr": "쇄",
    "en": "swae"
  },
  {
    "kr": "쇅",
    "en": "swaeg"
  },
  {
    "kr": "쇆",
    "en": "swaegg"
  },
  {
    "kr": "쇇",
    "en": "swaegs"
  },
  {
    "kr": "쇈",
    "en": "swaen"
  },
  {
    "kr": "쇉",
    "en": "swaenj"
  },
  {
    "kr": "쇊",
    "en": "swaenh"
  },
  {
    "kr": "쇋",
    "en": "swaed"
  },
  {
    "kr": "쇌",
    "en": "swael"
  },
  {
    "kr": "쇍",
    "en": "swaelg"
  },
  {
    "kr": "쇎",
    "en": "swaelm"
  },
  {
    "kr": "쇏",
    "en": "swaelb"
  },
  {
    "kr": "쇐",
    "en": "swaels"
  },
  {
    "kr": "쇑",
    "en": "swaelt"
  },
  {
    "kr": "쇒",
    "en": "swaelp"
  },
  {
    "kr": "쇓",
    "en": "swaelh"
  },
  {
    "kr": "쇔",
    "en": "swaem"
  },
  {
    "kr": "쇕",
    "en": "swaeb"
  },
  {
    "kr": "쇖",
    "en": "swaebs"
  },
  {
    "kr": "쇗",
    "en": "swaes"
  },
  {
    "kr": "쇘",
    "en": "swaess"
  },
  {
    "kr": "쇙",
    "en": "swaeng"
  },
  {
    "kr": "쇚",
    "en": "swaej"
  },
  {
    "kr": "쇛",
    "en": "swaec"
  },
  {
    "kr": "쇜",
    "en": "swaek"
  },
  {
    "kr": "쇝",
    "en": "swaet"
  },
  {
    "kr": "쇞",
    "en": "swaep"
  },
  {
    "kr": "쇟",
    "en": "swaeh"
  },
  {
    "kr": "쇠",
    "en": "soe"
  },
  {
    "kr": "쇡",
    "en": "soeg"
  },
  {
    "kr": "쇢",
    "en": "soegg"
  },
  {
    "kr": "쇣",
    "en": "soegs"
  },
  {
    "kr": "쇤",
    "en": "soen"
  },
  {
    "kr": "쇥",
    "en": "soenj"
  },
  {
    "kr": "쇦",
    "en": "soenh"
  },
  {
    "kr": "쇧",
    "en": "soed"
  },
  {
    "kr": "쇨",
    "en": "soel"
  },
  {
    "kr": "쇩",
    "en": "soelg"
  },
  {
    "kr": "쇪",
    "en": "soelm"
  },
  {
    "kr": "쇫",
    "en": "soelb"
  },
  {
    "kr": "쇬",
    "en": "soels"
  },
  {
    "kr": "쇭",
    "en": "soelt"
  },
  {
    "kr": "쇮",
    "en": "soelp"
  },
  {
    "kr": "쇯",
    "en": "soelh"
  },
  {
    "kr": "쇰",
    "en": "soem"
  },
  {
    "kr": "쇱",
    "en": "soeb"
  },
  {
    "kr": "쇲",
    "en": "soebs"
  },
  {
    "kr": "쇳",
    "en": "soes"
  },
  {
    "kr": "쇴",
    "en": "soess"
  },
  {
    "kr": "쇵",
    "en": "soeng"
  },
  {
    "kr": "쇶",
    "en": "soej"
  },
  {
    "kr": "쇷",
    "en": "soec"
  },
  {
    "kr": "쇸",
    "en": "soek"
  },
  {
    "kr": "쇹",
    "en": "soet"
  },
  {
    "kr": "쇺",
    "en": "soep"
  },
  {
    "kr": "쇻",
    "en": "soeh"
  },
  {
    "kr": "쇼",
    "en": "syo"
  },
  {
    "kr": "쇽",
    "en": "syog"
  },
  {
    "kr": "쇾",
    "en": "syogg"
  },
  {
    "kr": "쇿",
    "en": "syogs"
  },
  {
    "kr": "숀",
    "en": "syon"
  },
  {
    "kr": "숁",
    "en": "syonj"
  },
  {
    "kr": "숂",
    "en": "syonh"
  },
  {
    "kr": "숃",
    "en": "syod"
  },
  {
    "kr": "숄",
    "en": "syol"
  },
  {
    "kr": "숅",
    "en": "syolg"
  },
  {
    "kr": "숆",
    "en": "syolm"
  },
  {
    "kr": "숇",
    "en": "syolb"
  },
  {
    "kr": "숈",
    "en": "syols"
  },
  {
    "kr": "숉",
    "en": "syolt"
  },
  {
    "kr": "숊",
    "en": "syolp"
  },
  {
    "kr": "숋",
    "en": "syolh"
  },
  {
    "kr": "숌",
    "en": "syom"
  },
  {
    "kr": "숍",
    "en": "syob"
  },
  {
    "kr": "숎",
    "en": "syobs"
  },
  {
    "kr": "숏",
    "en": "syos"
  },
  {
    "kr": "숐",
    "en": "syoss"
  },
  {
    "kr": "숑",
    "en": "syong"
  },
  {
    "kr": "숒",
    "en": "syoj"
  },
  {
    "kr": "숓",
    "en": "syoc"
  },
  {
    "kr": "숔",
    "en": "syok"
  },
  {
    "kr": "숕",
    "en": "syot"
  },
  {
    "kr": "숖",
    "en": "syop"
  },
  {
    "kr": "숗",
    "en": "syoh"
  },
  {
    "kr": "수",
    "en": "su"
  },
  {
    "kr": "숙",
    "en": "sug"
  },
  {
    "kr": "숚",
    "en": "sugg"
  },
  {
    "kr": "숛",
    "en": "sugs"
  },
  {
    "kr": "순",
    "en": "sun"
  },
  {
    "kr": "숝",
    "en": "sunj"
  },
  {
    "kr": "숞",
    "en": "sunh"
  },
  {
    "kr": "숟",
    "en": "sud"
  },
  {
    "kr": "술",
    "en": "sul"
  },
  {
    "kr": "숡",
    "en": "sulg"
  },
  {
    "kr": "숢",
    "en": "sulm"
  },
  {
    "kr": "숣",
    "en": "sulb"
  },
  {
    "kr": "숤",
    "en": "suls"
  },
  {
    "kr": "숥",
    "en": "sult"
  },
  {
    "kr": "숦",
    "en": "sulp"
  },
  {
    "kr": "숧",
    "en": "sulh"
  },
  {
    "kr": "숨",
    "en": "sum"
  },
  {
    "kr": "숩",
    "en": "sub"
  },
  {
    "kr": "숪",
    "en": "subs"
  },
  {
    "kr": "숫",
    "en": "sus"
  },
  {
    "kr": "숬",
    "en": "suss"
  },
  {
    "kr": "숭",
    "en": "sung"
  },
  {
    "kr": "숮",
    "en": "suj"
  },
  {
    "kr": "숯",
    "en": "suc"
  },
  {
    "kr": "숰",
    "en": "suk"
  },
  {
    "kr": "숱",
    "en": "sut"
  },
  {
    "kr": "숲",
    "en": "sup"
  },
  {
    "kr": "숳",
    "en": "suh"
  },
  {
    "kr": "숴",
    "en": "sweo"
  },
  {
    "kr": "숵",
    "en": "sweog"
  },
  {
    "kr": "숶",
    "en": "sweogg"
  },
  {
    "kr": "숷",
    "en": "sweogs"
  },
  {
    "kr": "숸",
    "en": "sweon"
  },
  {
    "kr": "숹",
    "en": "sweonj"
  },
  {
    "kr": "숺",
    "en": "sweonh"
  },
  {
    "kr": "숻",
    "en": "sweod"
  },
  {
    "kr": "숼",
    "en": "sweol"
  },
  {
    "kr": "숽",
    "en": "sweolg"
  },
  {
    "kr": "숾",
    "en": "sweolm"
  },
  {
    "kr": "숿",
    "en": "sweolb"
  },
  {
    "kr": "쉀",
    "en": "sweols"
  },
  {
    "kr": "쉁",
    "en": "sweolt"
  },
  {
    "kr": "쉂",
    "en": "sweolp"
  },
  {
    "kr": "쉃",
    "en": "sweolh"
  },
  {
    "kr": "쉄",
    "en": "sweom"
  },
  {
    "kr": "쉅",
    "en": "sweob"
  },
  {
    "kr": "쉆",
    "en": "sweobs"
  },
  {
    "kr": "쉇",
    "en": "sweos"
  },
  {
    "kr": "쉈",
    "en": "sweoss"
  },
  {
    "kr": "쉉",
    "en": "sweong"
  },
  {
    "kr": "쉊",
    "en": "sweoj"
  },
  {
    "kr": "쉋",
    "en": "sweoc"
  },
  {
    "kr": "쉌",
    "en": "sweok"
  },
  {
    "kr": "쉍",
    "en": "sweot"
  },
  {
    "kr": "쉎",
    "en": "sweop"
  },
  {
    "kr": "쉏",
    "en": "sweoh"
  },
  {
    "kr": "쉐",
    "en": "swe"
  },
  {
    "kr": "쉑",
    "en": "sweg"
  },
  {
    "kr": "쉒",
    "en": "swegg"
  },
  {
    "kr": "쉓",
    "en": "swegs"
  },
  {
    "kr": "쉔",
    "en": "swen"
  },
  {
    "kr": "쉕",
    "en": "swenj"
  },
  {
    "kr": "쉖",
    "en": "swenh"
  },
  {
    "kr": "쉗",
    "en": "swed"
  },
  {
    "kr": "쉘",
    "en": "swel"
  },
  {
    "kr": "쉙",
    "en": "swelg"
  },
  {
    "kr": "쉚",
    "en": "swelm"
  },
  {
    "kr": "쉛",
    "en": "swelb"
  },
  {
    "kr": "쉜",
    "en": "swels"
  },
  {
    "kr": "쉝",
    "en": "swelt"
  },
  {
    "kr": "쉞",
    "en": "swelp"
  },
  {
    "kr": "쉟",
    "en": "swelh"
  },
  {
    "kr": "쉠",
    "en": "swem"
  },
  {
    "kr": "쉡",
    "en": "sweb"
  },
  {
    "kr": "쉢",
    "en": "swebs"
  },
  {
    "kr": "쉣",
    "en": "swes"
  },
  {
    "kr": "쉤",
    "en": "swess"
  },
  {
    "kr": "쉥",
    "en": "sweng"
  },
  {
    "kr": "쉦",
    "en": "swej"
  },
  {
    "kr": "쉧",
    "en": "swec"
  },
  {
    "kr": "쉨",
    "en": "swek"
  },
  {
    "kr": "쉩",
    "en": "swet"
  },
  {
    "kr": "쉪",
    "en": "swep"
  },
  {
    "kr": "쉫",
    "en": "sweh"
  },
  {
    "kr": "쉬",
    "en": "swi"
  },
  {
    "kr": "쉭",
    "en": "swig"
  },
  {
    "kr": "쉮",
    "en": "swigg"
  },
  {
    "kr": "쉯",
    "en": "swigs"
  },
  {
    "kr": "쉰",
    "en": "swin"
  },
  {
    "kr": "쉱",
    "en": "swinj"
  },
  {
    "kr": "쉲",
    "en": "swinh"
  },
  {
    "kr": "쉳",
    "en": "swid"
  },
  {
    "kr": "쉴",
    "en": "swil"
  },
  {
    "kr": "쉵",
    "en": "swilg"
  },
  {
    "kr": "쉶",
    "en": "swilm"
  },
  {
    "kr": "쉷",
    "en": "swilb"
  },
  {
    "kr": "쉸",
    "en": "swils"
  },
  {
    "kr": "쉹",
    "en": "swilt"
  },
  {
    "kr": "쉺",
    "en": "swilp"
  },
  {
    "kr": "쉻",
    "en": "swilh"
  },
  {
    "kr": "쉼",
    "en": "swim"
  },
  {
    "kr": "쉽",
    "en": "swib"
  },
  {
    "kr": "쉾",
    "en": "swibs"
  },
  {
    "kr": "쉿",
    "en": "swis"
  },
  {
    "kr": "슀",
    "en": "swiss"
  },
  {
    "kr": "슁",
    "en": "swing"
  },
  {
    "kr": "슂",
    "en": "swij"
  },
  {
    "kr": "슃",
    "en": "swic"
  },
  {
    "kr": "슄",
    "en": "swik"
  },
  {
    "kr": "슅",
    "en": "swit"
  },
  {
    "kr": "슆",
    "en": "swip"
  },
  {
    "kr": "슇",
    "en": "swih"
  },
  {
    "kr": "슈",
    "en": "syu"
  },
  {
    "kr": "슉",
    "en": "syug"
  },
  {
    "kr": "슊",
    "en": "syugg"
  },
  {
    "kr": "슋",
    "en": "syugs"
  },
  {
    "kr": "슌",
    "en": "syun"
  },
  {
    "kr": "슍",
    "en": "syunj"
  },
  {
    "kr": "슎",
    "en": "syunh"
  },
  {
    "kr": "슏",
    "en": "syud"
  },
  {
    "kr": "슐",
    "en": "syul"
  },
  {
    "kr": "슑",
    "en": "syulg"
  },
  {
    "kr": "슒",
    "en": "syulm"
  },
  {
    "kr": "슓",
    "en": "syulb"
  },
  {
    "kr": "슔",
    "en": "syuls"
  },
  {
    "kr": "슕",
    "en": "syult"
  },
  {
    "kr": "슖",
    "en": "syulp"
  },
  {
    "kr": "슗",
    "en": "syulh"
  },
  {
    "kr": "슘",
    "en": "syum"
  },
  {
    "kr": "슙",
    "en": "syub"
  },
  {
    "kr": "슚",
    "en": "syubs"
  },
  {
    "kr": "슛",
    "en": "syus"
  },
  {
    "kr": "슜",
    "en": "syuss"
  },
  {
    "kr": "슝",
    "en": "syung"
  },
  {
    "kr": "슞",
    "en": "syuj"
  },
  {
    "kr": "슟",
    "en": "syuc"
  },
  {
    "kr": "슠",
    "en": "syuk"
  },
  {
    "kr": "슡",
    "en": "syut"
  },
  {
    "kr": "슢",
    "en": "syup"
  },
  {
    "kr": "슣",
    "en": "syuh"
  },
  {
    "kr": "스",
    "en": "seu"
  },
  {
    "kr": "슥",
    "en": "seug"
  },
  {
    "kr": "슦",
    "en": "seugg"
  },
  {
    "kr": "슧",
    "en": "seugs"
  },
  {
    "kr": "슨",
    "en": "seun"
  },
  {
    "kr": "슩",
    "en": "seunj"
  },
  {
    "kr": "슪",
    "en": "seunh"
  },
  {
    "kr": "슫",
    "en": "seud"
  },
  {
    "kr": "슬",
    "en": "seul"
  },
  {
    "kr": "슭",
    "en": "seulg"
  },
  {
    "kr": "슮",
    "en": "seulm"
  },
  {
    "kr": "슯",
    "en": "seulb"
  },
  {
    "kr": "슰",
    "en": "seuls"
  },
  {
    "kr": "슱",
    "en": "seult"
  },
  {
    "kr": "슲",
    "en": "seulp"
  },
  {
    "kr": "슳",
    "en": "seulh"
  },
  {
    "kr": "슴",
    "en": "seum"
  },
  {
    "kr": "습",
    "en": "seub"
  },
  {
    "kr": "슶",
    "en": "seubs"
  },
  {
    "kr": "슷",
    "en": "seus"
  },
  {
    "kr": "슸",
    "en": "seuss"
  },
  {
    "kr": "승",
    "en": "seung"
  },
  {
    "kr": "슺",
    "en": "seuj"
  },
  {
    "kr": "슻",
    "en": "seuc"
  },
  {
    "kr": "슼",
    "en": "seuk"
  },
  {
    "kr": "슽",
    "en": "seut"
  },
  {
    "kr": "슾",
    "en": "seup"
  },
  {
    "kr": "슿",
    "en": "seuh"
  },
  {
    "kr": "싀",
    "en": "syi"
  },
  {
    "kr": "싁",
    "en": "syig"
  },
  {
    "kr": "싂",
    "en": "syigg"
  },
  {
    "kr": "싃",
    "en": "syigs"
  },
  {
    "kr": "싄",
    "en": "syin"
  },
  {
    "kr": "싅",
    "en": "syinj"
  },
  {
    "kr": "싆",
    "en": "syinh"
  },
  {
    "kr": "싇",
    "en": "syid"
  },
  {
    "kr": "싈",
    "en": "syil"
  },
  {
    "kr": "싉",
    "en": "syilg"
  },
  {
    "kr": "싊",
    "en": "syilm"
  },
  {
    "kr": "싋",
    "en": "syilb"
  },
  {
    "kr": "싌",
    "en": "syils"
  },
  {
    "kr": "싍",
    "en": "syilt"
  },
  {
    "kr": "싎",
    "en": "syilp"
  },
  {
    "kr": "싏",
    "en": "syilh"
  },
  {
    "kr": "싐",
    "en": "syim"
  },
  {
    "kr": "싑",
    "en": "syib"
  },
  {
    "kr": "싒",
    "en": "syibs"
  },
  {
    "kr": "싓",
    "en": "syis"
  },
  {
    "kr": "싔",
    "en": "syiss"
  },
  {
    "kr": "싕",
    "en": "sying"
  },
  {
    "kr": "싖",
    "en": "syij"
  },
  {
    "kr": "싗",
    "en": "syic"
  },
  {
    "kr": "싘",
    "en": "syik"
  },
  {
    "kr": "싙",
    "en": "syit"
  },
  {
    "kr": "싚",
    "en": "syip"
  },
  {
    "kr": "싛",
    "en": "syih"
  },
  {
    "kr": "시",
    "en": "si"
  },
  {
    "kr": "식",
    "en": "sig"
  },
  {
    "kr": "싞",
    "en": "sigg"
  },
  {
    "kr": "싟",
    "en": "sigs"
  },
  {
    "kr": "신",
    "en": "sin"
  },
  {
    "kr": "싡",
    "en": "sinj"
  },
  {
    "kr": "싢",
    "en": "sinh"
  },
  {
    "kr": "싣",
    "en": "sid"
  },
  {
    "kr": "실",
    "en": "sil"
  },
  {
    "kr": "싥",
    "en": "silg"
  },
  {
    "kr": "싦",
    "en": "silm"
  },
  {
    "kr": "싧",
    "en": "silb"
  },
  {
    "kr": "싨",
    "en": "sils"
  },
  {
    "kr": "싩",
    "en": "silt"
  },
  {
    "kr": "싪",
    "en": "silp"
  },
  {
    "kr": "싫",
    "en": "silh"
  },
  {
    "kr": "심",
    "en": "sim"
  },
  {
    "kr": "십",
    "en": "sib"
  },
  {
    "kr": "싮",
    "en": "sibs"
  },
  {
    "kr": "싯",
    "en": "sis"
  },
  {
    "kr": "싰",
    "en": "siss"
  },
  {
    "kr": "싱",
    "en": "sing"
  },
  {
    "kr": "싲",
    "en": "sij"
  },
  {
    "kr": "싳",
    "en": "sic"
  },
  {
    "kr": "싴",
    "en": "sik"
  },
  {
    "kr": "싵",
    "en": "sit"
  },
  {
    "kr": "싶",
    "en": "sip"
  },
  {
    "kr": "싷",
    "en": "sih"
  },
  {
    "kr": "싸",
    "en": "ssa"
  },
  {
    "kr": "싹",
    "en": "ssag"
  },
  {
    "kr": "싺",
    "en": "ssagg"
  },
  {
    "kr": "싻",
    "en": "ssags"
  },
  {
    "kr": "싼",
    "en": "ssan"
  },
  {
    "kr": "싽",
    "en": "ssanj"
  },
  {
    "kr": "싾",
    "en": "ssanh"
  },
  {
    "kr": "싿",
    "en": "ssad"
  },
  {
    "kr": "쌀",
    "en": "ssal"
  },
  {
    "kr": "쌁",
    "en": "ssalg"
  },
  {
    "kr": "쌂",
    "en": "ssalm"
  },
  {
    "kr": "쌃",
    "en": "ssalb"
  },
  {
    "kr": "쌄",
    "en": "ssals"
  },
  {
    "kr": "쌅",
    "en": "ssalt"
  },
  {
    "kr": "쌆",
    "en": "ssalp"
  },
  {
    "kr": "쌇",
    "en": "ssalh"
  },
  {
    "kr": "쌈",
    "en": "ssam"
  },
  {
    "kr": "쌉",
    "en": "ssab"
  },
  {
    "kr": "쌊",
    "en": "ssabs"
  },
  {
    "kr": "쌋",
    "en": "ssas"
  },
  {
    "kr": "쌌",
    "en": "ssass"
  },
  {
    "kr": "쌍",
    "en": "ssang"
  },
  {
    "kr": "쌎",
    "en": "ssaj"
  },
  {
    "kr": "쌏",
    "en": "ssac"
  },
  {
    "kr": "쌐",
    "en": "ssak"
  },
  {
    "kr": "쌑",
    "en": "ssat"
  },
  {
    "kr": "쌒",
    "en": "ssap"
  },
  {
    "kr": "쌓",
    "en": "ssah"
  },
  {
    "kr": "쌔",
    "en": "ssae"
  },
  {
    "kr": "쌕",
    "en": "ssaeg"
  },
  {
    "kr": "쌖",
    "en": "ssaegg"
  },
  {
    "kr": "쌗",
    "en": "ssaegs"
  },
  {
    "kr": "쌘",
    "en": "ssaen"
  },
  {
    "kr": "쌙",
    "en": "ssaenj"
  },
  {
    "kr": "쌚",
    "en": "ssaenh"
  },
  {
    "kr": "쌛",
    "en": "ssaed"
  },
  {
    "kr": "쌜",
    "en": "ssael"
  },
  {
    "kr": "쌝",
    "en": "ssaelg"
  },
  {
    "kr": "쌞",
    "en": "ssaelm"
  },
  {
    "kr": "쌟",
    "en": "ssaelb"
  },
  {
    "kr": "쌠",
    "en": "ssaels"
  },
  {
    "kr": "쌡",
    "en": "ssaelt"
  },
  {
    "kr": "쌢",
    "en": "ssaelp"
  },
  {
    "kr": "쌣",
    "en": "ssaelh"
  },
  {
    "kr": "쌤",
    "en": "ssaem"
  },
  {
    "kr": "쌥",
    "en": "ssaeb"
  },
  {
    "kr": "쌦",
    "en": "ssaebs"
  },
  {
    "kr": "쌧",
    "en": "ssaes"
  },
  {
    "kr": "쌨",
    "en": "ssaess"
  },
  {
    "kr": "쌩",
    "en": "ssaeng"
  },
  {
    "kr": "쌪",
    "en": "ssaej"
  },
  {
    "kr": "쌫",
    "en": "ssaec"
  },
  {
    "kr": "쌬",
    "en": "ssaek"
  },
  {
    "kr": "쌭",
    "en": "ssaet"
  },
  {
    "kr": "쌮",
    "en": "ssaep"
  },
  {
    "kr": "쌯",
    "en": "ssaeh"
  },
  {
    "kr": "쌰",
    "en": "ssya"
  },
  {
    "kr": "쌱",
    "en": "ssyag"
  },
  {
    "kr": "쌲",
    "en": "ssyagg"
  },
  {
    "kr": "쌳",
    "en": "ssyags"
  },
  {
    "kr": "쌴",
    "en": "ssyan"
  },
  {
    "kr": "쌵",
    "en": "ssyanj"
  },
  {
    "kr": "쌶",
    "en": "ssyanh"
  },
  {
    "kr": "쌷",
    "en": "ssyad"
  },
  {
    "kr": "쌸",
    "en": "ssyal"
  },
  {
    "kr": "쌹",
    "en": "ssyalg"
  },
  {
    "kr": "쌺",
    "en": "ssyalm"
  },
  {
    "kr": "쌻",
    "en": "ssyalb"
  },
  {
    "kr": "쌼",
    "en": "ssyals"
  },
  {
    "kr": "쌽",
    "en": "ssyalt"
  },
  {
    "kr": "쌾",
    "en": "ssyalp"
  },
  {
    "kr": "쌿",
    "en": "ssyalh"
  },
  {
    "kr": "썀",
    "en": "ssyam"
  },
  {
    "kr": "썁",
    "en": "ssyab"
  },
  {
    "kr": "썂",
    "en": "ssyabs"
  },
  {
    "kr": "썃",
    "en": "ssyas"
  },
  {
    "kr": "썄",
    "en": "ssyass"
  },
  {
    "kr": "썅",
    "en": "ssyang"
  },
  {
    "kr": "썆",
    "en": "ssyaj"
  },
  {
    "kr": "썇",
    "en": "ssyac"
  },
  {
    "kr": "썈",
    "en": "ssyak"
  },
  {
    "kr": "썉",
    "en": "ssyat"
  },
  {
    "kr": "썊",
    "en": "ssyap"
  },
  {
    "kr": "썋",
    "en": "ssyah"
  },
  {
    "kr": "썌",
    "en": "ssyae"
  },
  {
    "kr": "썍",
    "en": "ssyaeg"
  },
  {
    "kr": "썎",
    "en": "ssyaegg"
  },
  {
    "kr": "썏",
    "en": "ssyaegs"
  },
  {
    "kr": "썐",
    "en": "ssyaen"
  },
  {
    "kr": "썑",
    "en": "ssyaenj"
  },
  {
    "kr": "썒",
    "en": "ssyaenh"
  },
  {
    "kr": "썓",
    "en": "ssyaed"
  },
  {
    "kr": "썔",
    "en": "ssyael"
  },
  {
    "kr": "썕",
    "en": "ssyaelg"
  },
  {
    "kr": "썖",
    "en": "ssyaelm"
  },
  {
    "kr": "썗",
    "en": "ssyaelb"
  },
  {
    "kr": "썘",
    "en": "ssyaels"
  },
  {
    "kr": "썙",
    "en": "ssyaelt"
  },
  {
    "kr": "썚",
    "en": "ssyaelp"
  },
  {
    "kr": "썛",
    "en": "ssyaelh"
  },
  {
    "kr": "썜",
    "en": "ssyaem"
  },
  {
    "kr": "썝",
    "en": "ssyaeb"
  },
  {
    "kr": "썞",
    "en": "ssyaebs"
  },
  {
    "kr": "썟",
    "en": "ssyaes"
  },
  {
    "kr": "썠",
    "en": "ssyaess"
  },
  {
    "kr": "썡",
    "en": "ssyaeng"
  },
  {
    "kr": "썢",
    "en": "ssyaej"
  },
  {
    "kr": "썣",
    "en": "ssyaec"
  },
  {
    "kr": "썤",
    "en": "ssyaek"
  },
  {
    "kr": "썥",
    "en": "ssyaet"
  },
  {
    "kr": "썦",
    "en": "ssyaep"
  },
  {
    "kr": "썧",
    "en": "ssyaeh"
  },
  {
    "kr": "써",
    "en": "sseo"
  },
  {
    "kr": "썩",
    "en": "sseog"
  },
  {
    "kr": "썪",
    "en": "sseogg"
  },
  {
    "kr": "썫",
    "en": "sseogs"
  },
  {
    "kr": "썬",
    "en": "sseon"
  },
  {
    "kr": "썭",
    "en": "sseonj"
  },
  {
    "kr": "썮",
    "en": "sseonh"
  },
  {
    "kr": "썯",
    "en": "sseod"
  },
  {
    "kr": "썰",
    "en": "sseol"
  },
  {
    "kr": "썱",
    "en": "sseolg"
  },
  {
    "kr": "썲",
    "en": "sseolm"
  },
  {
    "kr": "썳",
    "en": "sseolb"
  },
  {
    "kr": "썴",
    "en": "sseols"
  },
  {
    "kr": "썵",
    "en": "sseolt"
  },
  {
    "kr": "썶",
    "en": "sseolp"
  },
  {
    "kr": "썷",
    "en": "sseolh"
  },
  {
    "kr": "썸",
    "en": "sseom"
  },
  {
    "kr": "썹",
    "en": "sseob"
  },
  {
    "kr": "썺",
    "en": "sseobs"
  },
  {
    "kr": "썻",
    "en": "sseos"
  },
  {
    "kr": "썼",
    "en": "sseoss"
  },
  {
    "kr": "썽",
    "en": "sseong"
  },
  {
    "kr": "썾",
    "en": "sseoj"
  },
  {
    "kr": "썿",
    "en": "sseoc"
  },
  {
    "kr": "쎀",
    "en": "sseok"
  },
  {
    "kr": "쎁",
    "en": "sseot"
  },
  {
    "kr": "쎂",
    "en": "sseop"
  },
  {
    "kr": "쎃",
    "en": "sseoh"
  },
  {
    "kr": "쎄",
    "en": "sse"
  },
  {
    "kr": "쎅",
    "en": "sseg"
  },
  {
    "kr": "쎆",
    "en": "ssegg"
  },
  {
    "kr": "쎇",
    "en": "ssegs"
  },
  {
    "kr": "쎈",
    "en": "ssen"
  },
  {
    "kr": "쎉",
    "en": "ssenj"
  },
  {
    "kr": "쎊",
    "en": "ssenh"
  },
  {
    "kr": "쎋",
    "en": "ssed"
  },
  {
    "kr": "쎌",
    "en": "ssel"
  },
  {
    "kr": "쎍",
    "en": "sselg"
  },
  {
    "kr": "쎎",
    "en": "sselm"
  },
  {
    "kr": "쎏",
    "en": "sselb"
  },
  {
    "kr": "쎐",
    "en": "ssels"
  },
  {
    "kr": "쎑",
    "en": "sselt"
  },
  {
    "kr": "쎒",
    "en": "sselp"
  },
  {
    "kr": "쎓",
    "en": "sselh"
  },
  {
    "kr": "쎔",
    "en": "ssem"
  },
  {
    "kr": "쎕",
    "en": "sseb"
  },
  {
    "kr": "쎖",
    "en": "ssebs"
  },
  {
    "kr": "쎗",
    "en": "sses"
  },
  {
    "kr": "쎘",
    "en": "ssess"
  },
  {
    "kr": "쎙",
    "en": "sseng"
  },
  {
    "kr": "쎚",
    "en": "ssej"
  },
  {
    "kr": "쎛",
    "en": "ssec"
  },
  {
    "kr": "쎜",
    "en": "ssek"
  },
  {
    "kr": "쎝",
    "en": "sset"
  },
  {
    "kr": "쎞",
    "en": "ssep"
  },
  {
    "kr": "쎟",
    "en": "sseh"
  },
  {
    "kr": "쎠",
    "en": "ssyeo"
  },
  {
    "kr": "쎡",
    "en": "ssyeog"
  },
  {
    "kr": "쎢",
    "en": "ssyeogg"
  },
  {
    "kr": "쎣",
    "en": "ssyeogs"
  },
  {
    "kr": "쎤",
    "en": "ssyeon"
  },
  {
    "kr": "쎥",
    "en": "ssyeonj"
  },
  {
    "kr": "쎦",
    "en": "ssyeonh"
  },
  {
    "kr": "쎧",
    "en": "ssyeod"
  },
  {
    "kr": "쎨",
    "en": "ssyeol"
  },
  {
    "kr": "쎩",
    "en": "ssyeolg"
  },
  {
    "kr": "쎪",
    "en": "ssyeolm"
  },
  {
    "kr": "쎫",
    "en": "ssyeolb"
  },
  {
    "kr": "쎬",
    "en": "ssyeols"
  },
  {
    "kr": "쎭",
    "en": "ssyeolt"
  },
  {
    "kr": "쎮",
    "en": "ssyeolp"
  },
  {
    "kr": "쎯",
    "en": "ssyeolh"
  },
  {
    "kr": "쎰",
    "en": "ssyeom"
  },
  {
    "kr": "쎱",
    "en": "ssyeob"
  },
  {
    "kr": "쎲",
    "en": "ssyeobs"
  },
  {
    "kr": "쎳",
    "en": "ssyeos"
  },
  {
    "kr": "쎴",
    "en": "ssyeoss"
  },
  {
    "kr": "쎵",
    "en": "ssyeong"
  },
  {
    "kr": "쎶",
    "en": "ssyeoj"
  },
  {
    "kr": "쎷",
    "en": "ssyeoc"
  },
  {
    "kr": "쎸",
    "en": "ssyeok"
  },
  {
    "kr": "쎹",
    "en": "ssyeot"
  },
  {
    "kr": "쎺",
    "en": "ssyeop"
  },
  {
    "kr": "쎻",
    "en": "ssyeoh"
  },
  {
    "kr": "쎼",
    "en": "ssye"
  },
  {
    "kr": "쎽",
    "en": "ssyeg"
  },
  {
    "kr": "쎾",
    "en": "ssyegg"
  },
  {
    "kr": "쎿",
    "en": "ssyegs"
  },
  {
    "kr": "쏀",
    "en": "ssyen"
  },
  {
    "kr": "쏁",
    "en": "ssyenj"
  },
  {
    "kr": "쏂",
    "en": "ssyenh"
  },
  {
    "kr": "쏃",
    "en": "ssyed"
  },
  {
    "kr": "쏄",
    "en": "ssyel"
  },
  {
    "kr": "쏅",
    "en": "ssyelg"
  },
  {
    "kr": "쏆",
    "en": "ssyelm"
  },
  {
    "kr": "쏇",
    "en": "ssyelb"
  },
  {
    "kr": "쏈",
    "en": "ssyels"
  },
  {
    "kr": "쏉",
    "en": "ssyelt"
  },
  {
    "kr": "쏊",
    "en": "ssyelp"
  },
  {
    "kr": "쏋",
    "en": "ssyelh"
  },
  {
    "kr": "쏌",
    "en": "ssyem"
  },
  {
    "kr": "쏍",
    "en": "ssyeb"
  },
  {
    "kr": "쏎",
    "en": "ssyebs"
  },
  {
    "kr": "쏏",
    "en": "ssyes"
  },
  {
    "kr": "쏐",
    "en": "ssyess"
  },
  {
    "kr": "쏑",
    "en": "ssyeng"
  },
  {
    "kr": "쏒",
    "en": "ssyej"
  },
  {
    "kr": "쏓",
    "en": "ssyec"
  },
  {
    "kr": "쏔",
    "en": "ssyek"
  },
  {
    "kr": "쏕",
    "en": "ssyet"
  },
  {
    "kr": "쏖",
    "en": "ssyep"
  },
  {
    "kr": "쏗",
    "en": "ssyeh"
  },
  {
    "kr": "쏘",
    "en": "sso"
  },
  {
    "kr": "쏙",
    "en": "ssog"
  },
  {
    "kr": "쏚",
    "en": "ssogg"
  },
  {
    "kr": "쏛",
    "en": "ssogs"
  },
  {
    "kr": "쏜",
    "en": "sson"
  },
  {
    "kr": "쏝",
    "en": "ssonj"
  },
  {
    "kr": "쏞",
    "en": "ssonh"
  },
  {
    "kr": "쏟",
    "en": "ssod"
  },
  {
    "kr": "쏠",
    "en": "ssol"
  },
  {
    "kr": "쏡",
    "en": "ssolg"
  },
  {
    "kr": "쏢",
    "en": "ssolm"
  },
  {
    "kr": "쏣",
    "en": "ssolb"
  },
  {
    "kr": "쏤",
    "en": "ssols"
  },
  {
    "kr": "쏥",
    "en": "ssolt"
  },
  {
    "kr": "쏦",
    "en": "ssolp"
  },
  {
    "kr": "쏧",
    "en": "ssolh"
  },
  {
    "kr": "쏨",
    "en": "ssom"
  },
  {
    "kr": "쏩",
    "en": "ssob"
  },
  {
    "kr": "쏪",
    "en": "ssobs"
  },
  {
    "kr": "쏫",
    "en": "ssos"
  },
  {
    "kr": "쏬",
    "en": "ssoss"
  },
  {
    "kr": "쏭",
    "en": "ssong"
  },
  {
    "kr": "쏮",
    "en": "ssoj"
  },
  {
    "kr": "쏯",
    "en": "ssoc"
  },
  {
    "kr": "쏰",
    "en": "ssok"
  },
  {
    "kr": "쏱",
    "en": "ssot"
  },
  {
    "kr": "쏲",
    "en": "ssop"
  },
  {
    "kr": "쏳",
    "en": "ssoh"
  },
  {
    "kr": "쏴",
    "en": "sswa"
  },
  {
    "kr": "쏵",
    "en": "sswag"
  },
  {
    "kr": "쏶",
    "en": "sswagg"
  },
  {
    "kr": "쏷",
    "en": "sswags"
  },
  {
    "kr": "쏸",
    "en": "sswan"
  },
  {
    "kr": "쏹",
    "en": "sswanj"
  },
  {
    "kr": "쏺",
    "en": "sswanh"
  },
  {
    "kr": "쏻",
    "en": "sswad"
  },
  {
    "kr": "쏼",
    "en": "sswal"
  },
  {
    "kr": "쏽",
    "en": "sswalg"
  },
  {
    "kr": "쏾",
    "en": "sswalm"
  },
  {
    "kr": "쏿",
    "en": "sswalb"
  },
  {
    "kr": "쐀",
    "en": "sswals"
  },
  {
    "kr": "쐁",
    "en": "sswalt"
  },
  {
    "kr": "쐂",
    "en": "sswalp"
  },
  {
    "kr": "쐃",
    "en": "sswalh"
  },
  {
    "kr": "쐄",
    "en": "sswam"
  },
  {
    "kr": "쐅",
    "en": "sswab"
  },
  {
    "kr": "쐆",
    "en": "sswabs"
  },
  {
    "kr": "쐇",
    "en": "sswas"
  },
  {
    "kr": "쐈",
    "en": "sswass"
  },
  {
    "kr": "쐉",
    "en": "sswang"
  },
  {
    "kr": "쐊",
    "en": "sswaj"
  },
  {
    "kr": "쐋",
    "en": "sswac"
  },
  {
    "kr": "쐌",
    "en": "sswak"
  },
  {
    "kr": "쐍",
    "en": "sswat"
  },
  {
    "kr": "쐎",
    "en": "sswap"
  },
  {
    "kr": "쐏",
    "en": "sswah"
  },
  {
    "kr": "쐐",
    "en": "sswae"
  },
  {
    "kr": "쐑",
    "en": "sswaeg"
  },
  {
    "kr": "쐒",
    "en": "sswaegg"
  },
  {
    "kr": "쐓",
    "en": "sswaegs"
  },
  {
    "kr": "쐔",
    "en": "sswaen"
  },
  {
    "kr": "쐕",
    "en": "sswaenj"
  },
  {
    "kr": "쐖",
    "en": "sswaenh"
  },
  {
    "kr": "쐗",
    "en": "sswaed"
  },
  {
    "kr": "쐘",
    "en": "sswael"
  },
  {
    "kr": "쐙",
    "en": "sswaelg"
  },
  {
    "kr": "쐚",
    "en": "sswaelm"
  },
  {
    "kr": "쐛",
    "en": "sswaelb"
  },
  {
    "kr": "쐜",
    "en": "sswaels"
  },
  {
    "kr": "쐝",
    "en": "sswaelt"
  },
  {
    "kr": "쐞",
    "en": "sswaelp"
  },
  {
    "kr": "쐟",
    "en": "sswaelh"
  },
  {
    "kr": "쐠",
    "en": "sswaem"
  },
  {
    "kr": "쐡",
    "en": "sswaeb"
  },
  {
    "kr": "쐢",
    "en": "sswaebs"
  },
  {
    "kr": "쐣",
    "en": "sswaes"
  },
  {
    "kr": "쐤",
    "en": "sswaess"
  },
  {
    "kr": "쐥",
    "en": "sswaeng"
  },
  {
    "kr": "쐦",
    "en": "sswaej"
  },
  {
    "kr": "쐧",
    "en": "sswaec"
  },
  {
    "kr": "쐨",
    "en": "sswaek"
  },
  {
    "kr": "쐩",
    "en": "sswaet"
  },
  {
    "kr": "쐪",
    "en": "sswaep"
  },
  {
    "kr": "쐫",
    "en": "sswaeh"
  },
  {
    "kr": "쐬",
    "en": "ssoe"
  },
  {
    "kr": "쐭",
    "en": "ssoeg"
  },
  {
    "kr": "쐮",
    "en": "ssoegg"
  },
  {
    "kr": "쐯",
    "en": "ssoegs"
  },
  {
    "kr": "쐰",
    "en": "ssoen"
  },
  {
    "kr": "쐱",
    "en": "ssoenj"
  },
  {
    "kr": "쐲",
    "en": "ssoenh"
  },
  {
    "kr": "쐳",
    "en": "ssoed"
  },
  {
    "kr": "쐴",
    "en": "ssoel"
  },
  {
    "kr": "쐵",
    "en": "ssoelg"
  },
  {
    "kr": "쐶",
    "en": "ssoelm"
  },
  {
    "kr": "쐷",
    "en": "ssoelb"
  },
  {
    "kr": "쐸",
    "en": "ssoels"
  },
  {
    "kr": "쐹",
    "en": "ssoelt"
  },
  {
    "kr": "쐺",
    "en": "ssoelp"
  },
  {
    "kr": "쐻",
    "en": "ssoelh"
  },
  {
    "kr": "쐼",
    "en": "ssoem"
  },
  {
    "kr": "쐽",
    "en": "ssoeb"
  },
  {
    "kr": "쐾",
    "en": "ssoebs"
  },
  {
    "kr": "쐿",
    "en": "ssoes"
  },
  {
    "kr": "쑀",
    "en": "ssoess"
  },
  {
    "kr": "쑁",
    "en": "ssoeng"
  },
  {
    "kr": "쑂",
    "en": "ssoej"
  },
  {
    "kr": "쑃",
    "en": "ssoec"
  },
  {
    "kr": "쑄",
    "en": "ssoek"
  },
  {
    "kr": "쑅",
    "en": "ssoet"
  },
  {
    "kr": "쑆",
    "en": "ssoep"
  },
  {
    "kr": "쑇",
    "en": "ssoeh"
  },
  {
    "kr": "쑈",
    "en": "ssyo"
  },
  {
    "kr": "쑉",
    "en": "ssyog"
  },
  {
    "kr": "쑊",
    "en": "ssyogg"
  },
  {
    "kr": "쑋",
    "en": "ssyogs"
  },
  {
    "kr": "쑌",
    "en": "ssyon"
  },
  {
    "kr": "쑍",
    "en": "ssyonj"
  },
  {
    "kr": "쑎",
    "en": "ssyonh"
  },
  {
    "kr": "쑏",
    "en": "ssyod"
  },
  {
    "kr": "쑐",
    "en": "ssyol"
  },
  {
    "kr": "쑑",
    "en": "ssyolg"
  },
  {
    "kr": "쑒",
    "en": "ssyolm"
  },
  {
    "kr": "쑓",
    "en": "ssyolb"
  },
  {
    "kr": "쑔",
    "en": "ssyols"
  },
  {
    "kr": "쑕",
    "en": "ssyolt"
  },
  {
    "kr": "쑖",
    "en": "ssyolp"
  },
  {
    "kr": "쑗",
    "en": "ssyolh"
  },
  {
    "kr": "쑘",
    "en": "ssyom"
  },
  {
    "kr": "쑙",
    "en": "ssyob"
  },
  {
    "kr": "쑚",
    "en": "ssyobs"
  },
  {
    "kr": "쑛",
    "en": "ssyos"
  },
  {
    "kr": "쑜",
    "en": "ssyoss"
  },
  {
    "kr": "쑝",
    "en": "ssyong"
  },
  {
    "kr": "쑞",
    "en": "ssyoj"
  },
  {
    "kr": "쑟",
    "en": "ssyoc"
  },
  {
    "kr": "쑠",
    "en": "ssyok"
  },
  {
    "kr": "쑡",
    "en": "ssyot"
  },
  {
    "kr": "쑢",
    "en": "ssyop"
  },
  {
    "kr": "쑣",
    "en": "ssyoh"
  },
  {
    "kr": "쑤",
    "en": "ssu"
  },
  {
    "kr": "쑥",
    "en": "ssug"
  },
  {
    "kr": "쑦",
    "en": "ssugg"
  },
  {
    "kr": "쑧",
    "en": "ssugs"
  },
  {
    "kr": "쑨",
    "en": "ssun"
  },
  {
    "kr": "쑩",
    "en": "ssunj"
  },
  {
    "kr": "쑪",
    "en": "ssunh"
  },
  {
    "kr": "쑫",
    "en": "ssud"
  },
  {
    "kr": "쑬",
    "en": "ssul"
  },
  {
    "kr": "쑭",
    "en": "ssulg"
  },
  {
    "kr": "쑮",
    "en": "ssulm"
  },
  {
    "kr": "쑯",
    "en": "ssulb"
  },
  {
    "kr": "쑰",
    "en": "ssuls"
  },
  {
    "kr": "쑱",
    "en": "ssult"
  },
  {
    "kr": "쑲",
    "en": "ssulp"
  },
  {
    "kr": "쑳",
    "en": "ssulh"
  },
  {
    "kr": "쑴",
    "en": "ssum"
  },
  {
    "kr": "쑵",
    "en": "ssub"
  },
  {
    "kr": "쑶",
    "en": "ssubs"
  },
  {
    "kr": "쑷",
    "en": "ssus"
  },
  {
    "kr": "쑸",
    "en": "ssuss"
  },
  {
    "kr": "쑹",
    "en": "ssung"
  },
  {
    "kr": "쑺",
    "en": "ssuj"
  },
  {
    "kr": "쑻",
    "en": "ssuc"
  },
  {
    "kr": "쑼",
    "en": "ssuk"
  },
  {
    "kr": "쑽",
    "en": "ssut"
  },
  {
    "kr": "쑾",
    "en": "ssup"
  },
  {
    "kr": "쑿",
    "en": "ssuh"
  },
  {
    "kr": "쒀",
    "en": "ssweo"
  },
  {
    "kr": "쒁",
    "en": "ssweog"
  },
  {
    "kr": "쒂",
    "en": "ssweogg"
  },
  {
    "kr": "쒃",
    "en": "ssweogs"
  },
  {
    "kr": "쒄",
    "en": "ssweon"
  },
  {
    "kr": "쒅",
    "en": "ssweonj"
  },
  {
    "kr": "쒆",
    "en": "ssweonh"
  },
  {
    "kr": "쒇",
    "en": "ssweod"
  },
  {
    "kr": "쒈",
    "en": "ssweol"
  },
  {
    "kr": "쒉",
    "en": "ssweolg"
  },
  {
    "kr": "쒊",
    "en": "ssweolm"
  },
  {
    "kr": "쒋",
    "en": "ssweolb"
  },
  {
    "kr": "쒌",
    "en": "ssweols"
  },
  {
    "kr": "쒍",
    "en": "ssweolt"
  },
  {
    "kr": "쒎",
    "en": "ssweolp"
  },
  {
    "kr": "쒏",
    "en": "ssweolh"
  },
  {
    "kr": "쒐",
    "en": "ssweom"
  },
  {
    "kr": "쒑",
    "en": "ssweob"
  },
  {
    "kr": "쒒",
    "en": "ssweobs"
  },
  {
    "kr": "쒓",
    "en": "ssweos"
  },
  {
    "kr": "쒔",
    "en": "ssweoss"
  },
  {
    "kr": "쒕",
    "en": "ssweong"
  },
  {
    "kr": "쒖",
    "en": "ssweoj"
  },
  {
    "kr": "쒗",
    "en": "ssweoc"
  },
  {
    "kr": "쒘",
    "en": "ssweok"
  },
  {
    "kr": "쒙",
    "en": "ssweot"
  },
  {
    "kr": "쒚",
    "en": "ssweop"
  },
  {
    "kr": "쒛",
    "en": "ssweoh"
  },
  {
    "kr": "쒜",
    "en": "sswe"
  },
  {
    "kr": "쒝",
    "en": "ssweg"
  },
  {
    "kr": "쒞",
    "en": "sswegg"
  },
  {
    "kr": "쒟",
    "en": "sswegs"
  },
  {
    "kr": "쒠",
    "en": "sswen"
  },
  {
    "kr": "쒡",
    "en": "sswenj"
  },
  {
    "kr": "쒢",
    "en": "sswenh"
  },
  {
    "kr": "쒣",
    "en": "sswed"
  },
  {
    "kr": "쒤",
    "en": "sswel"
  },
  {
    "kr": "쒥",
    "en": "sswelg"
  },
  {
    "kr": "쒦",
    "en": "sswelm"
  },
  {
    "kr": "쒧",
    "en": "sswelb"
  },
  {
    "kr": "쒨",
    "en": "sswels"
  },
  {
    "kr": "쒩",
    "en": "sswelt"
  },
  {
    "kr": "쒪",
    "en": "sswelp"
  },
  {
    "kr": "쒫",
    "en": "sswelh"
  },
  {
    "kr": "쒬",
    "en": "sswem"
  },
  {
    "kr": "쒭",
    "en": "ssweb"
  },
  {
    "kr": "쒮",
    "en": "sswebs"
  },
  {
    "kr": "쒯",
    "en": "sswes"
  },
  {
    "kr": "쒰",
    "en": "sswess"
  },
  {
    "kr": "쒱",
    "en": "ssweng"
  },
  {
    "kr": "쒲",
    "en": "sswej"
  },
  {
    "kr": "쒳",
    "en": "sswec"
  },
  {
    "kr": "쒴",
    "en": "sswek"
  },
  {
    "kr": "쒵",
    "en": "sswet"
  },
  {
    "kr": "쒶",
    "en": "sswep"
  },
  {
    "kr": "쒷",
    "en": "ssweh"
  },
  {
    "kr": "쒸",
    "en": "sswi"
  },
  {
    "kr": "쒹",
    "en": "sswig"
  },
  {
    "kr": "쒺",
    "en": "sswigg"
  },
  {
    "kr": "쒻",
    "en": "sswigs"
  },
  {
    "kr": "쒼",
    "en": "sswin"
  },
  {
    "kr": "쒽",
    "en": "sswinj"
  },
  {
    "kr": "쒾",
    "en": "sswinh"
  },
  {
    "kr": "쒿",
    "en": "sswid"
  },
  {
    "kr": "쓀",
    "en": "sswil"
  },
  {
    "kr": "쓁",
    "en": "sswilg"
  },
  {
    "kr": "쓂",
    "en": "sswilm"
  },
  {
    "kr": "쓃",
    "en": "sswilb"
  },
  {
    "kr": "쓄",
    "en": "sswils"
  },
  {
    "kr": "쓅",
    "en": "sswilt"
  },
  {
    "kr": "쓆",
    "en": "sswilp"
  },
  {
    "kr": "쓇",
    "en": "sswilh"
  },
  {
    "kr": "쓈",
    "en": "sswim"
  },
  {
    "kr": "쓉",
    "en": "sswib"
  },
  {
    "kr": "쓊",
    "en": "sswibs"
  },
  {
    "kr": "쓋",
    "en": "sswis"
  },
  {
    "kr": "쓌",
    "en": "sswiss"
  },
  {
    "kr": "쓍",
    "en": "sswing"
  },
  {
    "kr": "쓎",
    "en": "sswij"
  },
  {
    "kr": "쓏",
    "en": "sswic"
  },
  {
    "kr": "쓐",
    "en": "sswik"
  },
  {
    "kr": "쓑",
    "en": "sswit"
  },
  {
    "kr": "쓒",
    "en": "sswip"
  },
  {
    "kr": "쓓",
    "en": "sswih"
  },
  {
    "kr": "쓔",
    "en": "ssyu"
  },
  {
    "kr": "쓕",
    "en": "ssyug"
  },
  {
    "kr": "쓖",
    "en": "ssyugg"
  },
  {
    "kr": "쓗",
    "en": "ssyugs"
  },
  {
    "kr": "쓘",
    "en": "ssyun"
  },
  {
    "kr": "쓙",
    "en": "ssyunj"
  },
  {
    "kr": "쓚",
    "en": "ssyunh"
  },
  {
    "kr": "쓛",
    "en": "ssyud"
  },
  {
    "kr": "쓜",
    "en": "ssyul"
  },
  {
    "kr": "쓝",
    "en": "ssyulg"
  },
  {
    "kr": "쓞",
    "en": "ssyulm"
  },
  {
    "kr": "쓟",
    "en": "ssyulb"
  },
  {
    "kr": "쓠",
    "en": "ssyuls"
  },
  {
    "kr": "쓡",
    "en": "ssyult"
  },
  {
    "kr": "쓢",
    "en": "ssyulp"
  },
  {
    "kr": "쓣",
    "en": "ssyulh"
  },
  {
    "kr": "쓤",
    "en": "ssyum"
  },
  {
    "kr": "쓥",
    "en": "ssyub"
  },
  {
    "kr": "쓦",
    "en": "ssyubs"
  },
  {
    "kr": "쓧",
    "en": "ssyus"
  },
  {
    "kr": "쓨",
    "en": "ssyuss"
  },
  {
    "kr": "쓩",
    "en": "ssyung"
  },
  {
    "kr": "쓪",
    "en": "ssyuj"
  },
  {
    "kr": "쓫",
    "en": "ssyuc"
  },
  {
    "kr": "쓬",
    "en": "ssyuk"
  },
  {
    "kr": "쓭",
    "en": "ssyut"
  },
  {
    "kr": "쓮",
    "en": "ssyup"
  },
  {
    "kr": "쓯",
    "en": "ssyuh"
  },
  {
    "kr": "쓰",
    "en": "sseu"
  },
  {
    "kr": "쓱",
    "en": "sseug"
  },
  {
    "kr": "쓲",
    "en": "sseugg"
  },
  {
    "kr": "쓳",
    "en": "sseugs"
  },
  {
    "kr": "쓴",
    "en": "sseun"
  },
  {
    "kr": "쓵",
    "en": "sseunj"
  },
  {
    "kr": "쓶",
    "en": "sseunh"
  },
  {
    "kr": "쓷",
    "en": "sseud"
  },
  {
    "kr": "쓸",
    "en": "sseul"
  },
  {
    "kr": "쓹",
    "en": "sseulg"
  },
  {
    "kr": "쓺",
    "en": "sseulm"
  },
  {
    "kr": "쓻",
    "en": "sseulb"
  },
  {
    "kr": "쓼",
    "en": "sseuls"
  },
  {
    "kr": "쓽",
    "en": "sseult"
  },
  {
    "kr": "쓾",
    "en": "sseulp"
  },
  {
    "kr": "쓿",
    "en": "sseulh"
  },
  {
    "kr": "씀",
    "en": "sseum"
  },
  {
    "kr": "씁",
    "en": "sseub"
  },
  {
    "kr": "씂",
    "en": "sseubs"
  },
  {
    "kr": "씃",
    "en": "sseus"
  },
  {
    "kr": "씄",
    "en": "sseuss"
  },
  {
    "kr": "씅",
    "en": "sseung"
  },
  {
    "kr": "씆",
    "en": "sseuj"
  },
  {
    "kr": "씇",
    "en": "sseuc"
  },
  {
    "kr": "씈",
    "en": "sseuk"
  },
  {
    "kr": "씉",
    "en": "sseut"
  },
  {
    "kr": "씊",
    "en": "sseup"
  },
  {
    "kr": "씋",
    "en": "sseuh"
  },
  {
    "kr": "씌",
    "en": "ssyi"
  },
  {
    "kr": "씍",
    "en": "ssyig"
  },
  {
    "kr": "씎",
    "en": "ssyigg"
  },
  {
    "kr": "씏",
    "en": "ssyigs"
  },
  {
    "kr": "씐",
    "en": "ssyin"
  },
  {
    "kr": "씑",
    "en": "ssyinj"
  },
  {
    "kr": "씒",
    "en": "ssyinh"
  },
  {
    "kr": "씓",
    "en": "ssyid"
  },
  {
    "kr": "씔",
    "en": "ssyil"
  },
  {
    "kr": "씕",
    "en": "ssyilg"
  },
  {
    "kr": "씖",
    "en": "ssyilm"
  },
  {
    "kr": "씗",
    "en": "ssyilb"
  },
  {
    "kr": "씘",
    "en": "ssyils"
  },
  {
    "kr": "씙",
    "en": "ssyilt"
  },
  {
    "kr": "씚",
    "en": "ssyilp"
  },
  {
    "kr": "씛",
    "en": "ssyilh"
  },
  {
    "kr": "씜",
    "en": "ssyim"
  },
  {
    "kr": "씝",
    "en": "ssyib"
  },
  {
    "kr": "씞",
    "en": "ssyibs"
  },
  {
    "kr": "씟",
    "en": "ssyis"
  },
  {
    "kr": "씠",
    "en": "ssyiss"
  },
  {
    "kr": "씡",
    "en": "ssying"
  },
  {
    "kr": "씢",
    "en": "ssyij"
  },
  {
    "kr": "씣",
    "en": "ssyic"
  },
  {
    "kr": "씤",
    "en": "ssyik"
  },
  {
    "kr": "씥",
    "en": "ssyit"
  },
  {
    "kr": "씦",
    "en": "ssyip"
  },
  {
    "kr": "씧",
    "en": "ssyih"
  },
  {
    "kr": "씨",
    "en": "ssi"
  },
  {
    "kr": "씩",
    "en": "ssig"
  },
  {
    "kr": "씪",
    "en": "ssigg"
  },
  {
    "kr": "씫",
    "en": "ssigs"
  },
  {
    "kr": "씬",
    "en": "ssin"
  },
  {
    "kr": "씭",
    "en": "ssinj"
  },
  {
    "kr": "씮",
    "en": "ssinh"
  },
  {
    "kr": "씯",
    "en": "ssid"
  },
  {
    "kr": "씰",
    "en": "ssil"
  },
  {
    "kr": "씱",
    "en": "ssilg"
  },
  {
    "kr": "씲",
    "en": "ssilm"
  },
  {
    "kr": "씳",
    "en": "ssilb"
  },
  {
    "kr": "씴",
    "en": "ssils"
  },
  {
    "kr": "씵",
    "en": "ssilt"
  },
  {
    "kr": "씶",
    "en": "ssilp"
  },
  {
    "kr": "씷",
    "en": "ssilh"
  },
  {
    "kr": "씸",
    "en": "ssim"
  },
  {
    "kr": "씹",
    "en": "ssib"
  },
  {
    "kr": "씺",
    "en": "ssibs"
  },
  {
    "kr": "씻",
    "en": "ssis"
  },
  {
    "kr": "씼",
    "en": "ssiss"
  },
  {
    "kr": "씽",
    "en": "ssing"
  },
  {
    "kr": "씾",
    "en": "ssij"
  },
  {
    "kr": "씿",
    "en": "ssic"
  },
  {
    "kr": "앀",
    "en": "ssik"
  },
  {
    "kr": "앁",
    "en": "ssit"
  },
  {
    "kr": "앂",
    "en": "ssip"
  },
  {
    "kr": "앃",
    "en": "ssih"
  },
  {
    "kr": "아",
    "en": "a"
  },
  {
    "kr": "악",
    "en": "ag"
  },
  {
    "kr": "앆",
    "en": "agg"
  },
  {
    "kr": "앇",
    "en": "ags"
  },
  {
    "kr": "안",
    "en": "an"
  },
  {
    "kr": "앉",
    "en": "anj"
  },
  {
    "kr": "않",
    "en": "anh"
  },
  {
    "kr": "앋",
    "en": "ad"
  },
  {
    "kr": "알",
    "en": "al"
  },
  {
    "kr": "앍",
    "en": "alg"
  },
  {
    "kr": "앎",
    "en": "alm"
  },
  {
    "kr": "앏",
    "en": "alb"
  },
  {
    "kr": "앐",
    "en": "als"
  },
  {
    "kr": "앑",
    "en": "alt"
  },
  {
    "kr": "앒",
    "en": "alp"
  },
  {
    "kr": "앓",
    "en": "alh"
  },
  {
    "kr": "암",
    "en": "am"
  },
  {
    "kr": "압",
    "en": "ab"
  },
  {
    "kr": "앖",
    "en": "abs"
  },
  {
    "kr": "앗",
    "en": "as"
  },
  {
    "kr": "았",
    "en": "ass"
  },
  {
    "kr": "앙",
    "en": "ang"
  },
  {
    "kr": "앚",
    "en": "aj"
  },
  {
    "kr": "앛",
    "en": "ac"
  },
  {
    "kr": "앜",
    "en": "ak"
  },
  {
    "kr": "앝",
    "en": "at"
  },
  {
    "kr": "앞",
    "en": "ap"
  },
  {
    "kr": "앟",
    "en": "ah"
  },
  {
    "kr": "애",
    "en": "ae"
  },
  {
    "kr": "액",
    "en": "aeg"
  },
  {
    "kr": "앢",
    "en": "aegg"
  },
  {
    "kr": "앣",
    "en": "aegs"
  },
  {
    "kr": "앤",
    "en": "aen"
  },
  {
    "kr": "앥",
    "en": "aenj"
  },
  {
    "kr": "앦",
    "en": "aenh"
  },
  {
    "kr": "앧",
    "en": "aed"
  },
  {
    "kr": "앨",
    "en": "ael"
  },
  {
    "kr": "앩",
    "en": "aelg"
  },
  {
    "kr": "앪",
    "en": "aelm"
  },
  {
    "kr": "앫",
    "en": "aelb"
  },
  {
    "kr": "앬",
    "en": "aels"
  },
  {
    "kr": "앭",
    "en": "aelt"
  },
  {
    "kr": "앮",
    "en": "aelp"
  },
  {
    "kr": "앯",
    "en": "aelh"
  },
  {
    "kr": "앰",
    "en": "aem"
  },
  {
    "kr": "앱",
    "en": "aeb"
  },
  {
    "kr": "앲",
    "en": "aebs"
  },
  {
    "kr": "앳",
    "en": "aes"
  },
  {
    "kr": "앴",
    "en": "aess"
  },
  {
    "kr": "앵",
    "en": "aeng"
  },
  {
    "kr": "앶",
    "en": "aej"
  },
  {
    "kr": "앷",
    "en": "aec"
  },
  {
    "kr": "앸",
    "en": "aek"
  },
  {
    "kr": "앹",
    "en": "aet"
  },
  {
    "kr": "앺",
    "en": "aep"
  },
  {
    "kr": "앻",
    "en": "aeh"
  },
  {
    "kr": "야",
    "en": "ya"
  },
  {
    "kr": "약",
    "en": "yag"
  },
  {
    "kr": "앾",
    "en": "yagg"
  },
  {
    "kr": "앿",
    "en": "yags"
  },
  {
    "kr": "얀",
    "en": "yan"
  },
  {
    "kr": "얁",
    "en": "yanj"
  },
  {
    "kr": "얂",
    "en": "yanh"
  },
  {
    "kr": "얃",
    "en": "yad"
  },
  {
    "kr": "얄",
    "en": "yal"
  },
  {
    "kr": "얅",
    "en": "yalg"
  },
  {
    "kr": "얆",
    "en": "yalm"
  },
  {
    "kr": "얇",
    "en": "yalb"
  },
  {
    "kr": "얈",
    "en": "yals"
  },
  {
    "kr": "얉",
    "en": "yalt"
  },
  {
    "kr": "얊",
    "en": "yalp"
  },
  {
    "kr": "얋",
    "en": "yalh"
  },
  {
    "kr": "얌",
    "en": "yam"
  },
  {
    "kr": "얍",
    "en": "yab"
  },
  {
    "kr": "얎",
    "en": "yabs"
  },
  {
    "kr": "얏",
    "en": "yas"
  },
  {
    "kr": "얐",
    "en": "yass"
  },
  {
    "kr": "양",
    "en": "yang"
  },
  {
    "kr": "얒",
    "en": "yaj"
  },
  {
    "kr": "얓",
    "en": "yac"
  },
  {
    "kr": "얔",
    "en": "yak"
  },
  {
    "kr": "얕",
    "en": "yat"
  },
  {
    "kr": "얖",
    "en": "yap"
  },
  {
    "kr": "얗",
    "en": "yah"
  },
  {
    "kr": "얘",
    "en": "yae"
  },
  {
    "kr": "얙",
    "en": "yaeg"
  },
  {
    "kr": "얚",
    "en": "yaegg"
  },
  {
    "kr": "얛",
    "en": "yaegs"
  },
  {
    "kr": "얜",
    "en": "yaen"
  },
  {
    "kr": "얝",
    "en": "yaenj"
  },
  {
    "kr": "얞",
    "en": "yaenh"
  },
  {
    "kr": "얟",
    "en": "yaed"
  },
  {
    "kr": "얠",
    "en": "yael"
  },
  {
    "kr": "얡",
    "en": "yaelg"
  },
  {
    "kr": "얢",
    "en": "yaelm"
  },
  {
    "kr": "얣",
    "en": "yaelb"
  },
  {
    "kr": "얤",
    "en": "yaels"
  },
  {
    "kr": "얥",
    "en": "yaelt"
  },
  {
    "kr": "얦",
    "en": "yaelp"
  },
  {
    "kr": "얧",
    "en": "yaelh"
  },
  {
    "kr": "얨",
    "en": "yaem"
  },
  {
    "kr": "얩",
    "en": "yaeb"
  },
  {
    "kr": "얪",
    "en": "yaebs"
  },
  {
    "kr": "얫",
    "en": "yaes"
  },
  {
    "kr": "얬",
    "en": "yaess"
  },
  {
    "kr": "얭",
    "en": "yaeng"
  },
  {
    "kr": "얮",
    "en": "yaej"
  },
  {
    "kr": "얯",
    "en": "yaec"
  },
  {
    "kr": "얰",
    "en": "yaek"
  },
  {
    "kr": "얱",
    "en": "yaet"
  },
  {
    "kr": "얲",
    "en": "yaep"
  },
  {
    "kr": "얳",
    "en": "yaeh"
  },
  {
    "kr": "어",
    "en": "eo"
  },
  {
    "kr": "억",
    "en": "eog"
  },
  {
    "kr": "얶",
    "en": "eogg"
  },
  {
    "kr": "얷",
    "en": "eogs"
  },
  {
    "kr": "언",
    "en": "eon"
  },
  {
    "kr": "얹",
    "en": "eonj"
  },
  {
    "kr": "얺",
    "en": "eonh"
  },
  {
    "kr": "얻",
    "en": "eod"
  },
  {
    "kr": "얼",
    "en": "eol"
  },
  {
    "kr": "얽",
    "en": "eolg"
  },
  {
    "kr": "얾",
    "en": "eolm"
  },
  {
    "kr": "얿",
    "en": "eolb"
  },
  {
    "kr": "엀",
    "en": "eols"
  },
  {
    "kr": "엁",
    "en": "eolt"
  },
  {
    "kr": "엂",
    "en": "eolp"
  },
  {
    "kr": "엃",
    "en": "eolh"
  },
  {
    "kr": "엄",
    "en": "eom"
  },
  {
    "kr": "업",
    "en": "eob"
  },
  {
    "kr": "없",
    "en": "eobs"
  },
  {
    "kr": "엇",
    "en": "eos"
  },
  {
    "kr": "었",
    "en": "eoss"
  },
  {
    "kr": "엉",
    "en": "eong"
  },
  {
    "kr": "엊",
    "en": "eoj"
  },
  {
    "kr": "엋",
    "en": "eoc"
  },
  {
    "kr": "엌",
    "en": "eok"
  },
  {
    "kr": "엍",
    "en": "eot"
  },
  {
    "kr": "엎",
    "en": "eop"
  },
  {
    "kr": "엏",
    "en": "eoh"
  },
  {
    "kr": "에",
    "en": "e"
  },
  {
    "kr": "엑",
    "en": "eg"
  },
  {
    "kr": "엒",
    "en": "egg"
  },
  {
    "kr": "엓",
    "en": "egs"
  },
  {
    "kr": "엔",
    "en": "en"
  },
  {
    "kr": "엕",
    "en": "enj"
  },
  {
    "kr": "엖",
    "en": "enh"
  },
  {
    "kr": "엗",
    "en": "ed"
  },
  {
    "kr": "엘",
    "en": "el"
  },
  {
    "kr": "엙",
    "en": "elg"
  },
  {
    "kr": "엚",
    "en": "elm"
  },
  {
    "kr": "엛",
    "en": "elb"
  },
  {
    "kr": "엜",
    "en": "els"
  },
  {
    "kr": "엝",
    "en": "elt"
  },
  {
    "kr": "엞",
    "en": "elp"
  },
  {
    "kr": "엟",
    "en": "elh"
  },
  {
    "kr": "엠",
    "en": "em"
  },
  {
    "kr": "엡",
    "en": "eb"
  },
  {
    "kr": "엢",
    "en": "ebs"
  },
  {
    "kr": "엣",
    "en": "es"
  },
  {
    "kr": "엤",
    "en": "ess"
  },
  {
    "kr": "엥",
    "en": "eng"
  },
  {
    "kr": "엦",
    "en": "ej"
  },
  {
    "kr": "엧",
    "en": "ec"
  },
  {
    "kr": "엨",
    "en": "ek"
  },
  {
    "kr": "엩",
    "en": "et"
  },
  {
    "kr": "엪",
    "en": "ep"
  },
  {
    "kr": "엫",
    "en": "eh"
  },
  {
    "kr": "여",
    "en": "yeo"
  },
  {
    "kr": "역",
    "en": "yeog"
  },
  {
    "kr": "엮",
    "en": "yeogg"
  },
  {
    "kr": "엯",
    "en": "yeogs"
  },
  {
    "kr": "연",
    "en": "yeon"
  },
  {
    "kr": "엱",
    "en": "yeonj"
  },
  {
    "kr": "엲",
    "en": "yeonh"
  },
  {
    "kr": "엳",
    "en": "yeod"
  },
  {
    "kr": "열",
    "en": "yeol"
  },
  {
    "kr": "엵",
    "en": "yeolg"
  },
  {
    "kr": "엶",
    "en": "yeolm"
  },
  {
    "kr": "엷",
    "en": "yeolb"
  },
  {
    "kr": "엸",
    "en": "yeols"
  },
  {
    "kr": "엹",
    "en": "yeolt"
  },
  {
    "kr": "엺",
    "en": "yeolp"
  },
  {
    "kr": "엻",
    "en": "yeolh"
  },
  {
    "kr": "염",
    "en": "yeom"
  },
  {
    "kr": "엽",
    "en": "yeob"
  },
  {
    "kr": "엾",
    "en": "yeobs"
  },
  {
    "kr": "엿",
    "en": "yeos"
  },
  {
    "kr": "였",
    "en": "yeoss"
  },
  {
    "kr": "영",
    "en": "yeong"
  },
  {
    "kr": "옂",
    "en": "yeoj"
  },
  {
    "kr": "옃",
    "en": "yeoc"
  },
  {
    "kr": "옄",
    "en": "yeok"
  },
  {
    "kr": "옅",
    "en": "yeot"
  },
  {
    "kr": "옆",
    "en": "yeop"
  },
  {
    "kr": "옇",
    "en": "yeoh"
  },
  {
    "kr": "예",
    "en": "ye"
  },
  {
    "kr": "옉",
    "en": "yeg"
  },
  {
    "kr": "옊",
    "en": "yegg"
  },
  {
    "kr": "옋",
    "en": "yegs"
  },
  {
    "kr": "옌",
    "en": "yen"
  },
  {
    "kr": "옍",
    "en": "yenj"
  },
  {
    "kr": "옎",
    "en": "yenh"
  },
  {
    "kr": "옏",
    "en": "yed"
  },
  {
    "kr": "옐",
    "en": "yel"
  },
  {
    "kr": "옑",
    "en": "yelg"
  },
  {
    "kr": "옒",
    "en": "yelm"
  },
  {
    "kr": "옓",
    "en": "yelb"
  },
  {
    "kr": "옔",
    "en": "yels"
  },
  {
    "kr": "옕",
    "en": "yelt"
  },
  {
    "kr": "옖",
    "en": "yelp"
  },
  {
    "kr": "옗",
    "en": "yelh"
  },
  {
    "kr": "옘",
    "en": "yem"
  },
  {
    "kr": "옙",
    "en": "yeb"
  },
  {
    "kr": "옚",
    "en": "yebs"
  },
  {
    "kr": "옛",
    "en": "yes"
  },
  {
    "kr": "옜",
    "en": "yess"
  },
  {
    "kr": "옝",
    "en": "yeng"
  },
  {
    "kr": "옞",
    "en": "yej"
  },
  {
    "kr": "옟",
    "en": "yec"
  },
  {
    "kr": "옠",
    "en": "yek"
  },
  {
    "kr": "옡",
    "en": "yet"
  },
  {
    "kr": "옢",
    "en": "yep"
  },
  {
    "kr": "옣",
    "en": "yeh"
  },
  {
    "kr": "오",
    "en": "o"
  },
  {
    "kr": "옥",
    "en": "og"
  },
  {
    "kr": "옦",
    "en": "ogg"
  },
  {
    "kr": "옧",
    "en": "ogs"
  },
  {
    "kr": "온",
    "en": "on"
  },
  {
    "kr": "옩",
    "en": "onj"
  },
  {
    "kr": "옪",
    "en": "onh"
  },
  {
    "kr": "옫",
    "en": "od"
  },
  {
    "kr": "올",
    "en": "ol"
  },
  {
    "kr": "옭",
    "en": "olg"
  },
  {
    "kr": "옮",
    "en": "olm"
  },
  {
    "kr": "옯",
    "en": "olb"
  },
  {
    "kr": "옰",
    "en": "ols"
  },
  {
    "kr": "옱",
    "en": "olt"
  },
  {
    "kr": "옲",
    "en": "olp"
  },
  {
    "kr": "옳",
    "en": "olh"
  },
  {
    "kr": "옴",
    "en": "om"
  },
  {
    "kr": "옵",
    "en": "ob"
  },
  {
    "kr": "옶",
    "en": "obs"
  },
  {
    "kr": "옷",
    "en": "os"
  },
  {
    "kr": "옸",
    "en": "oss"
  },
  {
    "kr": "옹",
    "en": "ong"
  },
  {
    "kr": "옺",
    "en": "oj"
  },
  {
    "kr": "옻",
    "en": "oc"
  },
  {
    "kr": "옼",
    "en": "ok"
  },
  {
    "kr": "옽",
    "en": "ot"
  },
  {
    "kr": "옾",
    "en": "op"
  },
  {
    "kr": "옿",
    "en": "oh"
  },
  {
    "kr": "와",
    "en": "wa"
  },
  {
    "kr": "왁",
    "en": "wag"
  },
  {
    "kr": "왂",
    "en": "wagg"
  },
  {
    "kr": "왃",
    "en": "wags"
  },
  {
    "kr": "완",
    "en": "wan"
  },
  {
    "kr": "왅",
    "en": "wanj"
  },
  {
    "kr": "왆",
    "en": "wanh"
  },
  {
    "kr": "왇",
    "en": "wad"
  },
  {
    "kr": "왈",
    "en": "wal"
  },
  {
    "kr": "왉",
    "en": "walg"
  },
  {
    "kr": "왊",
    "en": "walm"
  },
  {
    "kr": "왋",
    "en": "walb"
  },
  {
    "kr": "왌",
    "en": "wals"
  },
  {
    "kr": "왍",
    "en": "walt"
  },
  {
    "kr": "왎",
    "en": "walp"
  },
  {
    "kr": "왏",
    "en": "walh"
  },
  {
    "kr": "왐",
    "en": "wam"
  },
  {
    "kr": "왑",
    "en": "wab"
  },
  {
    "kr": "왒",
    "en": "wabs"
  },
  {
    "kr": "왓",
    "en": "was"
  },
  {
    "kr": "왔",
    "en": "wass"
  },
  {
    "kr": "왕",
    "en": "wang"
  },
  {
    "kr": "왖",
    "en": "waj"
  },
  {
    "kr": "왗",
    "en": "wac"
  },
  {
    "kr": "왘",
    "en": "wak"
  },
  {
    "kr": "왙",
    "en": "wat"
  },
  {
    "kr": "왚",
    "en": "wap"
  },
  {
    "kr": "왛",
    "en": "wah"
  },
  {
    "kr": "왜",
    "en": "wae"
  },
  {
    "kr": "왝",
    "en": "waeg"
  },
  {
    "kr": "왞",
    "en": "waegg"
  },
  {
    "kr": "왟",
    "en": "waegs"
  },
  {
    "kr": "왠",
    "en": "waen"
  },
  {
    "kr": "왡",
    "en": "waenj"
  },
  {
    "kr": "왢",
    "en": "waenh"
  },
  {
    "kr": "왣",
    "en": "waed"
  },
  {
    "kr": "왤",
    "en": "wael"
  },
  {
    "kr": "왥",
    "en": "waelg"
  },
  {
    "kr": "왦",
    "en": "waelm"
  },
  {
    "kr": "왧",
    "en": "waelb"
  },
  {
    "kr": "왨",
    "en": "waels"
  },
  {
    "kr": "왩",
    "en": "waelt"
  },
  {
    "kr": "왪",
    "en": "waelp"
  },
  {
    "kr": "왫",
    "en": "waelh"
  },
  {
    "kr": "왬",
    "en": "waem"
  },
  {
    "kr": "왭",
    "en": "waeb"
  },
  {
    "kr": "왮",
    "en": "waebs"
  },
  {
    "kr": "왯",
    "en": "waes"
  },
  {
    "kr": "왰",
    "en": "waess"
  },
  {
    "kr": "왱",
    "en": "waeng"
  },
  {
    "kr": "왲",
    "en": "waej"
  },
  {
    "kr": "왳",
    "en": "waec"
  },
  {
    "kr": "왴",
    "en": "waek"
  },
  {
    "kr": "왵",
    "en": "waet"
  },
  {
    "kr": "왶",
    "en": "waep"
  },
  {
    "kr": "왷",
    "en": "waeh"
  },
  {
    "kr": "외",
    "en": "oe"
  },
  {
    "kr": "왹",
    "en": "oeg"
  },
  {
    "kr": "왺",
    "en": "oegg"
  },
  {
    "kr": "왻",
    "en": "oegs"
  },
  {
    "kr": "왼",
    "en": "oen"
  },
  {
    "kr": "왽",
    "en": "oenj"
  },
  {
    "kr": "왾",
    "en": "oenh"
  },
  {
    "kr": "왿",
    "en": "oed"
  },
  {
    "kr": "욀",
    "en": "oel"
  },
  {
    "kr": "욁",
    "en": "oelg"
  },
  {
    "kr": "욂",
    "en": "oelm"
  },
  {
    "kr": "욃",
    "en": "oelb"
  },
  {
    "kr": "욄",
    "en": "oels"
  },
  {
    "kr": "욅",
    "en": "oelt"
  },
  {
    "kr": "욆",
    "en": "oelp"
  },
  {
    "kr": "욇",
    "en": "oelh"
  },
  {
    "kr": "욈",
    "en": "oem"
  },
  {
    "kr": "욉",
    "en": "oeb"
  },
  {
    "kr": "욊",
    "en": "oebs"
  },
  {
    "kr": "욋",
    "en": "oes"
  },
  {
    "kr": "욌",
    "en": "oess"
  },
  {
    "kr": "욍",
    "en": "oeng"
  },
  {
    "kr": "욎",
    "en": "oej"
  },
  {
    "kr": "욏",
    "en": "oec"
  },
  {
    "kr": "욐",
    "en": "oek"
  },
  {
    "kr": "욑",
    "en": "oet"
  },
  {
    "kr": "욒",
    "en": "oep"
  },
  {
    "kr": "욓",
    "en": "oeh"
  },
  {
    "kr": "요",
    "en": "yo"
  },
  {
    "kr": "욕",
    "en": "yog"
  },
  {
    "kr": "욖",
    "en": "yogg"
  },
  {
    "kr": "욗",
    "en": "yogs"
  },
  {
    "kr": "욘",
    "en": "yon"
  },
  {
    "kr": "욙",
    "en": "yonj"
  },
  {
    "kr": "욚",
    "en": "yonh"
  },
  {
    "kr": "욛",
    "en": "yod"
  },
  {
    "kr": "욜",
    "en": "yol"
  },
  {
    "kr": "욝",
    "en": "yolg"
  },
  {
    "kr": "욞",
    "en": "yolm"
  },
  {
    "kr": "욟",
    "en": "yolb"
  },
  {
    "kr": "욠",
    "en": "yols"
  },
  {
    "kr": "욡",
    "en": "yolt"
  },
  {
    "kr": "욢",
    "en": "yolp"
  },
  {
    "kr": "욣",
    "en": "yolh"
  },
  {
    "kr": "욤",
    "en": "yom"
  },
  {
    "kr": "욥",
    "en": "yob"
  },
  {
    "kr": "욦",
    "en": "yobs"
  },
  {
    "kr": "욧",
    "en": "yos"
  },
  {
    "kr": "욨",
    "en": "yoss"
  },
  {
    "kr": "용",
    "en": "yong"
  },
  {
    "kr": "욪",
    "en": "yoj"
  },
  {
    "kr": "욫",
    "en": "yoc"
  },
  {
    "kr": "욬",
    "en": "yok"
  },
  {
    "kr": "욭",
    "en": "yot"
  },
  {
    "kr": "욮",
    "en": "yop"
  },
  {
    "kr": "욯",
    "en": "yoh"
  },
  {
    "kr": "우",
    "en": "u"
  },
  {
    "kr": "욱",
    "en": "ug"
  },
  {
    "kr": "욲",
    "en": "ugg"
  },
  {
    "kr": "욳",
    "en": "ugs"
  },
  {
    "kr": "운",
    "en": "un"
  },
  {
    "kr": "욵",
    "en": "unj"
  },
  {
    "kr": "욶",
    "en": "unh"
  },
  {
    "kr": "욷",
    "en": "ud"
  },
  {
    "kr": "울",
    "en": "ul"
  },
  {
    "kr": "욹",
    "en": "ulg"
  },
  {
    "kr": "욺",
    "en": "ulm"
  },
  {
    "kr": "욻",
    "en": "ulb"
  },
  {
    "kr": "욼",
    "en": "uls"
  },
  {
    "kr": "욽",
    "en": "ult"
  },
  {
    "kr": "욾",
    "en": "ulp"
  },
  {
    "kr": "욿",
    "en": "ulh"
  },
  {
    "kr": "움",
    "en": "um"
  },
  {
    "kr": "웁",
    "en": "ub"
  },
  {
    "kr": "웂",
    "en": "ubs"
  },
  {
    "kr": "웃",
    "en": "us"
  },
  {
    "kr": "웄",
    "en": "uss"
  },
  {
    "kr": "웅",
    "en": "ung"
  },
  {
    "kr": "웆",
    "en": "uj"
  },
  {
    "kr": "웇",
    "en": "uc"
  },
  {
    "kr": "웈",
    "en": "uk"
  },
  {
    "kr": "웉",
    "en": "ut"
  },
  {
    "kr": "웊",
    "en": "up"
  },
  {
    "kr": "웋",
    "en": "uh"
  },
  {
    "kr": "워",
    "en": "weo"
  },
  {
    "kr": "웍",
    "en": "weog"
  },
  {
    "kr": "웎",
    "en": "weogg"
  },
  {
    "kr": "웏",
    "en": "weogs"
  },
  {
    "kr": "원",
    "en": "weon"
  },
  {
    "kr": "웑",
    "en": "weonj"
  },
  {
    "kr": "웒",
    "en": "weonh"
  },
  {
    "kr": "웓",
    "en": "weod"
  },
  {
    "kr": "월",
    "en": "weol"
  },
  {
    "kr": "웕",
    "en": "weolg"
  },
  {
    "kr": "웖",
    "en": "weolm"
  },
  {
    "kr": "웗",
    "en": "weolb"
  },
  {
    "kr": "웘",
    "en": "weols"
  },
  {
    "kr": "웙",
    "en": "weolt"
  },
  {
    "kr": "웚",
    "en": "weolp"
  },
  {
    "kr": "웛",
    "en": "weolh"
  },
  {
    "kr": "웜",
    "en": "weom"
  },
  {
    "kr": "웝",
    "en": "weob"
  },
  {
    "kr": "웞",
    "en": "weobs"
  },
  {
    "kr": "웟",
    "en": "weos"
  },
  {
    "kr": "웠",
    "en": "weoss"
  },
  {
    "kr": "웡",
    "en": "weong"
  },
  {
    "kr": "웢",
    "en": "weoj"
  },
  {
    "kr": "웣",
    "en": "weoc"
  },
  {
    "kr": "웤",
    "en": "weok"
  },
  {
    "kr": "웥",
    "en": "weot"
  },
  {
    "kr": "웦",
    "en": "weop"
  },
  {
    "kr": "웧",
    "en": "weoh"
  },
  {
    "kr": "웨",
    "en": "we"
  },
  {
    "kr": "웩",
    "en": "weg"
  },
  {
    "kr": "웪",
    "en": "wegg"
  },
  {
    "kr": "웫",
    "en": "wegs"
  },
  {
    "kr": "웬",
    "en": "wen"
  },
  {
    "kr": "웭",
    "en": "wenj"
  },
  {
    "kr": "웮",
    "en": "wenh"
  },
  {
    "kr": "웯",
    "en": "wed"
  },
  {
    "kr": "웰",
    "en": "wel"
  },
  {
    "kr": "웱",
    "en": "welg"
  },
  {
    "kr": "웲",
    "en": "welm"
  },
  {
    "kr": "웳",
    "en": "welb"
  },
  {
    "kr": "웴",
    "en": "wels"
  },
  {
    "kr": "웵",
    "en": "welt"
  },
  {
    "kr": "웶",
    "en": "welp"
  },
  {
    "kr": "웷",
    "en": "welh"
  },
  {
    "kr": "웸",
    "en": "wem"
  },
  {
    "kr": "웹",
    "en": "web"
  },
  {
    "kr": "웺",
    "en": "webs"
  },
  {
    "kr": "웻",
    "en": "wes"
  },
  {
    "kr": "웼",
    "en": "wess"
  },
  {
    "kr": "웽",
    "en": "weng"
  },
  {
    "kr": "웾",
    "en": "wej"
  },
  {
    "kr": "웿",
    "en": "wec"
  },
  {
    "kr": "윀",
    "en": "wek"
  },
  {
    "kr": "윁",
    "en": "wet"
  },
  {
    "kr": "윂",
    "en": "wep"
  },
  {
    "kr": "윃",
    "en": "weh"
  },
  {
    "kr": "위",
    "en": "wi"
  },
  {
    "kr": "윅",
    "en": "wig"
  },
  {
    "kr": "윆",
    "en": "wigg"
  },
  {
    "kr": "윇",
    "en": "wigs"
  },
  {
    "kr": "윈",
    "en": "win"
  },
  {
    "kr": "윉",
    "en": "winj"
  },
  {
    "kr": "윊",
    "en": "winh"
  },
  {
    "kr": "윋",
    "en": "wid"
  },
  {
    "kr": "윌",
    "en": "wil"
  },
  {
    "kr": "윍",
    "en": "wilg"
  },
  {
    "kr": "윎",
    "en": "wilm"
  },
  {
    "kr": "윏",
    "en": "wilb"
  },
  {
    "kr": "윐",
    "en": "wils"
  },
  {
    "kr": "윑",
    "en": "wilt"
  },
  {
    "kr": "윒",
    "en": "wilp"
  },
  {
    "kr": "윓",
    "en": "wilh"
  },
  {
    "kr": "윔",
    "en": "wim"
  },
  {
    "kr": "윕",
    "en": "wib"
  },
  {
    "kr": "윖",
    "en": "wibs"
  },
  {
    "kr": "윗",
    "en": "wis"
  },
  {
    "kr": "윘",
    "en": "wiss"
  },
  {
    "kr": "윙",
    "en": "wing"
  },
  {
    "kr": "윚",
    "en": "wij"
  },
  {
    "kr": "윛",
    "en": "wic"
  },
  {
    "kr": "윜",
    "en": "wik"
  },
  {
    "kr": "윝",
    "en": "wit"
  },
  {
    "kr": "윞",
    "en": "wip"
  },
  {
    "kr": "윟",
    "en": "wih"
  },
  {
    "kr": "유",
    "en": "yu"
  },
  {
    "kr": "육",
    "en": "yug"
  },
  {
    "kr": "윢",
    "en": "yugg"
  },
  {
    "kr": "윣",
    "en": "yugs"
  },
  {
    "kr": "윤",
    "en": "yun"
  },
  {
    "kr": "윥",
    "en": "yunj"
  },
  {
    "kr": "윦",
    "en": "yunh"
  },
  {
    "kr": "윧",
    "en": "yud"
  },
  {
    "kr": "율",
    "en": "yul"
  },
  {
    "kr": "윩",
    "en": "yulg"
  },
  {
    "kr": "윪",
    "en": "yulm"
  },
  {
    "kr": "윫",
    "en": "yulb"
  },
  {
    "kr": "윬",
    "en": "yuls"
  },
  {
    "kr": "윭",
    "en": "yult"
  },
  {
    "kr": "윮",
    "en": "yulp"
  },
  {
    "kr": "윯",
    "en": "yulh"
  },
  {
    "kr": "윰",
    "en": "yum"
  },
  {
    "kr": "윱",
    "en": "yub"
  },
  {
    "kr": "윲",
    "en": "yubs"
  },
  {
    "kr": "윳",
    "en": "yus"
  },
  {
    "kr": "윴",
    "en": "yuss"
  },
  {
    "kr": "융",
    "en": "yung"
  },
  {
    "kr": "윶",
    "en": "yuj"
  },
  {
    "kr": "윷",
    "en": "yuc"
  },
  {
    "kr": "윸",
    "en": "yuk"
  },
  {
    "kr": "윹",
    "en": "yut"
  },
  {
    "kr": "윺",
    "en": "yup"
  },
  {
    "kr": "윻",
    "en": "yuh"
  },
  {
    "kr": "으",
    "en": "eu"
  },
  {
    "kr": "윽",
    "en": "eug"
  },
  {
    "kr": "윾",
    "en": "eugg"
  },
  {
    "kr": "윿",
    "en": "eugs"
  },
  {
    "kr": "은",
    "en": "eun"
  },
  {
    "kr": "읁",
    "en": "eunj"
  },
  {
    "kr": "읂",
    "en": "eunh"
  },
  {
    "kr": "읃",
    "en": "eud"
  },
  {
    "kr": "을",
    "en": "eul"
  },
  {
    "kr": "읅",
    "en": "eulg"
  },
  {
    "kr": "읆",
    "en": "eulm"
  },
  {
    "kr": "읇",
    "en": "eulb"
  },
  {
    "kr": "읈",
    "en": "euls"
  },
  {
    "kr": "읉",
    "en": "eult"
  },
  {
    "kr": "읊",
    "en": "eulp"
  },
  {
    "kr": "읋",
    "en": "eulh"
  },
  {
    "kr": "음",
    "en": "eum"
  },
  {
    "kr": "읍",
    "en": "eub"
  },
  {
    "kr": "읎",
    "en": "eubs"
  },
  {
    "kr": "읏",
    "en": "eus"
  },
  {
    "kr": "읐",
    "en": "euss"
  },
  {
    "kr": "응",
    "en": "eung"
  },
  {
    "kr": "읒",
    "en": "euj"
  },
  {
    "kr": "읓",
    "en": "euc"
  },
  {
    "kr": "읔",
    "en": "euk"
  },
  {
    "kr": "읕",
    "en": "eut"
  },
  {
    "kr": "읖",
    "en": "eup"
  },
  {
    "kr": "읗",
    "en": "euh"
  },
  {
    "kr": "의",
    "en": "yi"
  },
  {
    "kr": "읙",
    "en": "yig"
  },
  {
    "kr": "읚",
    "en": "yigg"
  },
  {
    "kr": "읛",
    "en": "yigs"
  },
  {
    "kr": "읜",
    "en": "yin"
  },
  {
    "kr": "읝",
    "en": "yinj"
  },
  {
    "kr": "읞",
    "en": "yinh"
  },
  {
    "kr": "읟",
    "en": "yid"
  },
  {
    "kr": "읠",
    "en": "yil"
  },
  {
    "kr": "읡",
    "en": "yilg"
  },
  {
    "kr": "읢",
    "en": "yilm"
  },
  {
    "kr": "읣",
    "en": "yilb"
  },
  {
    "kr": "읤",
    "en": "yils"
  },
  {
    "kr": "읥",
    "en": "yilt"
  },
  {
    "kr": "읦",
    "en": "yilp"
  },
  {
    "kr": "읧",
    "en": "yilh"
  },
  {
    "kr": "읨",
    "en": "yim"
  },
  {
    "kr": "읩",
    "en": "yib"
  },
  {
    "kr": "읪",
    "en": "yibs"
  },
  {
    "kr": "읫",
    "en": "yis"
  },
  {
    "kr": "읬",
    "en": "yiss"
  },
  {
    "kr": "읭",
    "en": "ying"
  },
  {
    "kr": "읮",
    "en": "yij"
  },
  {
    "kr": "읯",
    "en": "yic"
  },
  {
    "kr": "읰",
    "en": "yik"
  },
  {
    "kr": "읱",
    "en": "yit"
  },
  {
    "kr": "읲",
    "en": "yip"
  },
  {
    "kr": "읳",
    "en": "yih"
  },
  {
    "kr": "이",
    "en": "i"
  },
  {
    "kr": "익",
    "en": "ig"
  },
  {
    "kr": "읶",
    "en": "igg"
  },
  {
    "kr": "읷",
    "en": "igs"
  },
  {
    "kr": "인",
    "en": "in"
  },
  {
    "kr": "읹",
    "en": "inj"
  },
  {
    "kr": "읺",
    "en": "inh"
  },
  {
    "kr": "읻",
    "en": "id"
  },
  {
    "kr": "일",
    "en": "il"
  },
  {
    "kr": "읽",
    "en": "ilg"
  },
  {
    "kr": "읾",
    "en": "ilm"
  },
  {
    "kr": "읿",
    "en": "ilb"
  },
  {
    "kr": "잀",
    "en": "ils"
  },
  {
    "kr": "잁",
    "en": "ilt"
  },
  {
    "kr": "잂",
    "en": "ilp"
  },
  {
    "kr": "잃",
    "en": "ilh"
  },
  {
    "kr": "임",
    "en": "im"
  },
  {
    "kr": "입",
    "en": "ib"
  },
  {
    "kr": "잆",
    "en": "ibs"
  },
  {
    "kr": "잇",
    "en": "is"
  },
  {
    "kr": "있",
    "en": "iss"
  },
  {
    "kr": "잉",
    "en": "ing"
  },
  {
    "kr": "잊",
    "en": "ij"
  },
  {
    "kr": "잋",
    "en": "ic"
  },
  {
    "kr": "잌",
    "en": "ik"
  },
  {
    "kr": "잍",
    "en": "it"
  },
  {
    "kr": "잎",
    "en": "ip"
  },
  {
    "kr": "잏",
    "en": "ih"
  },
  {
    "kr": "자",
    "en": "ja"
  },
  {
    "kr": "작",
    "en": "jag"
  },
  {
    "kr": "잒",
    "en": "jagg"
  },
  {
    "kr": "잓",
    "en": "jags"
  },
  {
    "kr": "잔",
    "en": "jan"
  },
  {
    "kr": "잕",
    "en": "janj"
  },
  {
    "kr": "잖",
    "en": "janh"
  },
  {
    "kr": "잗",
    "en": "jad"
  },
  {
    "kr": "잘",
    "en": "jal"
  },
  {
    "kr": "잙",
    "en": "jalg"
  },
  {
    "kr": "잚",
    "en": "jalm"
  },
  {
    "kr": "잛",
    "en": "jalb"
  },
  {
    "kr": "잜",
    "en": "jals"
  },
  {
    "kr": "잝",
    "en": "jalt"
  },
  {
    "kr": "잞",
    "en": "jalp"
  },
  {
    "kr": "잟",
    "en": "jalh"
  },
  {
    "kr": "잠",
    "en": "jam"
  },
  {
    "kr": "잡",
    "en": "jab"
  },
  {
    "kr": "잢",
    "en": "jabs"
  },
  {
    "kr": "잣",
    "en": "jas"
  },
  {
    "kr": "잤",
    "en": "jass"
  },
  {
    "kr": "장",
    "en": "jang"
  },
  {
    "kr": "잦",
    "en": "jaj"
  },
  {
    "kr": "잧",
    "en": "jac"
  },
  {
    "kr": "잨",
    "en": "jak"
  },
  {
    "kr": "잩",
    "en": "jat"
  },
  {
    "kr": "잪",
    "en": "jap"
  },
  {
    "kr": "잫",
    "en": "jah"
  },
  {
    "kr": "재",
    "en": "jae"
  },
  {
    "kr": "잭",
    "en": "jaeg"
  },
  {
    "kr": "잮",
    "en": "jaegg"
  },
  {
    "kr": "잯",
    "en": "jaegs"
  },
  {
    "kr": "잰",
    "en": "jaen"
  },
  {
    "kr": "잱",
    "en": "jaenj"
  },
  {
    "kr": "잲",
    "en": "jaenh"
  },
  {
    "kr": "잳",
    "en": "jaed"
  },
  {
    "kr": "잴",
    "en": "jael"
  },
  {
    "kr": "잵",
    "en": "jaelg"
  },
  {
    "kr": "잶",
    "en": "jaelm"
  },
  {
    "kr": "잷",
    "en": "jaelb"
  },
  {
    "kr": "잸",
    "en": "jaels"
  },
  {
    "kr": "잹",
    "en": "jaelt"
  },
  {
    "kr": "잺",
    "en": "jaelp"
  },
  {
    "kr": "잻",
    "en": "jaelh"
  },
  {
    "kr": "잼",
    "en": "jaem"
  },
  {
    "kr": "잽",
    "en": "jaeb"
  },
  {
    "kr": "잾",
    "en": "jaebs"
  },
  {
    "kr": "잿",
    "en": "jaes"
  },
  {
    "kr": "쟀",
    "en": "jaess"
  },
  {
    "kr": "쟁",
    "en": "jaeng"
  },
  {
    "kr": "쟂",
    "en": "jaej"
  },
  {
    "kr": "쟃",
    "en": "jaec"
  },
  {
    "kr": "쟄",
    "en": "jaek"
  },
  {
    "kr": "쟅",
    "en": "jaet"
  },
  {
    "kr": "쟆",
    "en": "jaep"
  },
  {
    "kr": "쟇",
    "en": "jaeh"
  },
  {
    "kr": "쟈",
    "en": "jya"
  },
  {
    "kr": "쟉",
    "en": "jyag"
  },
  {
    "kr": "쟊",
    "en": "jyagg"
  },
  {
    "kr": "쟋",
    "en": "jyags"
  },
  {
    "kr": "쟌",
    "en": "jyan"
  },
  {
    "kr": "쟍",
    "en": "jyanj"
  },
  {
    "kr": "쟎",
    "en": "jyanh"
  },
  {
    "kr": "쟏",
    "en": "jyad"
  },
  {
    "kr": "쟐",
    "en": "jyal"
  },
  {
    "kr": "쟑",
    "en": "jyalg"
  },
  {
    "kr": "쟒",
    "en": "jyalm"
  },
  {
    "kr": "쟓",
    "en": "jyalb"
  },
  {
    "kr": "쟔",
    "en": "jyals"
  },
  {
    "kr": "쟕",
    "en": "jyalt"
  },
  {
    "kr": "쟖",
    "en": "jyalp"
  },
  {
    "kr": "쟗",
    "en": "jyalh"
  },
  {
    "kr": "쟘",
    "en": "jyam"
  },
  {
    "kr": "쟙",
    "en": "jyab"
  },
  {
    "kr": "쟚",
    "en": "jyabs"
  },
  {
    "kr": "쟛",
    "en": "jyas"
  },
  {
    "kr": "쟜",
    "en": "jyass"
  },
  {
    "kr": "쟝",
    "en": "jyang"
  },
  {
    "kr": "쟞",
    "en": "jyaj"
  },
  {
    "kr": "쟟",
    "en": "jyac"
  },
  {
    "kr": "쟠",
    "en": "jyak"
  },
  {
    "kr": "쟡",
    "en": "jyat"
  },
  {
    "kr": "쟢",
    "en": "jyap"
  },
  {
    "kr": "쟣",
    "en": "jyah"
  },
  {
    "kr": "쟤",
    "en": "jyae"
  },
  {
    "kr": "쟥",
    "en": "jyaeg"
  },
  {
    "kr": "쟦",
    "en": "jyaegg"
  },
  {
    "kr": "쟧",
    "en": "jyaegs"
  },
  {
    "kr": "쟨",
    "en": "jyaen"
  },
  {
    "kr": "쟩",
    "en": "jyaenj"
  },
  {
    "kr": "쟪",
    "en": "jyaenh"
  },
  {
    "kr": "쟫",
    "en": "jyaed"
  },
  {
    "kr": "쟬",
    "en": "jyael"
  },
  {
    "kr": "쟭",
    "en": "jyaelg"
  },
  {
    "kr": "쟮",
    "en": "jyaelm"
  },
  {
    "kr": "쟯",
    "en": "jyaelb"
  },
  {
    "kr": "쟰",
    "en": "jyaels"
  },
  {
    "kr": "쟱",
    "en": "jyaelt"
  },
  {
    "kr": "쟲",
    "en": "jyaelp"
  },
  {
    "kr": "쟳",
    "en": "jyaelh"
  },
  {
    "kr": "쟴",
    "en": "jyaem"
  },
  {
    "kr": "쟵",
    "en": "jyaeb"
  },
  {
    "kr": "쟶",
    "en": "jyaebs"
  },
  {
    "kr": "쟷",
    "en": "jyaes"
  },
  {
    "kr": "쟸",
    "en": "jyaess"
  },
  {
    "kr": "쟹",
    "en": "jyaeng"
  },
  {
    "kr": "쟺",
    "en": "jyaej"
  },
  {
    "kr": "쟻",
    "en": "jyaec"
  },
  {
    "kr": "쟼",
    "en": "jyaek"
  },
  {
    "kr": "쟽",
    "en": "jyaet"
  },
  {
    "kr": "쟾",
    "en": "jyaep"
  },
  {
    "kr": "쟿",
    "en": "jyaeh"
  },
  {
    "kr": "저",
    "en": "jeo"
  },
  {
    "kr": "적",
    "en": "jeog"
  },
  {
    "kr": "젂",
    "en": "jeogg"
  },
  {
    "kr": "젃",
    "en": "jeogs"
  },
  {
    "kr": "전",
    "en": "jeon"
  },
  {
    "kr": "젅",
    "en": "jeonj"
  },
  {
    "kr": "젆",
    "en": "jeonh"
  },
  {
    "kr": "젇",
    "en": "jeod"
  },
  {
    "kr": "절",
    "en": "jeol"
  },
  {
    "kr": "젉",
    "en": "jeolg"
  },
  {
    "kr": "젊",
    "en": "jeolm"
  },
  {
    "kr": "젋",
    "en": "jeolb"
  },
  {
    "kr": "젌",
    "en": "jeols"
  },
  {
    "kr": "젍",
    "en": "jeolt"
  },
  {
    "kr": "젎",
    "en": "jeolp"
  },
  {
    "kr": "젏",
    "en": "jeolh"
  },
  {
    "kr": "점",
    "en": "jeom"
  },
  {
    "kr": "접",
    "en": "jeob"
  },
  {
    "kr": "젒",
    "en": "jeobs"
  },
  {
    "kr": "젓",
    "en": "jeos"
  },
  {
    "kr": "젔",
    "en": "jeoss"
  },
  {
    "kr": "정",
    "en": "jeong"
  },
  {
    "kr": "젖",
    "en": "jeoj"
  },
  {
    "kr": "젗",
    "en": "jeoc"
  },
  {
    "kr": "젘",
    "en": "jeok"
  },
  {
    "kr": "젙",
    "en": "jeot"
  },
  {
    "kr": "젚",
    "en": "jeop"
  },
  {
    "kr": "젛",
    "en": "jeoh"
  },
  {
    "kr": "제",
    "en": "je"
  },
  {
    "kr": "젝",
    "en": "jeg"
  },
  {
    "kr": "젞",
    "en": "jegg"
  },
  {
    "kr": "젟",
    "en": "jegs"
  },
  {
    "kr": "젠",
    "en": "jen"
  },
  {
    "kr": "젡",
    "en": "jenj"
  },
  {
    "kr": "젢",
    "en": "jenh"
  },
  {
    "kr": "젣",
    "en": "jed"
  },
  {
    "kr": "젤",
    "en": "jel"
  },
  {
    "kr": "젥",
    "en": "jelg"
  },
  {
    "kr": "젦",
    "en": "jelm"
  },
  {
    "kr": "젧",
    "en": "jelb"
  },
  {
    "kr": "젨",
    "en": "jels"
  },
  {
    "kr": "젩",
    "en": "jelt"
  },
  {
    "kr": "젪",
    "en": "jelp"
  },
  {
    "kr": "젫",
    "en": "jelh"
  },
  {
    "kr": "젬",
    "en": "jem"
  },
  {
    "kr": "젭",
    "en": "jeb"
  },
  {
    "kr": "젮",
    "en": "jebs"
  },
  {
    "kr": "젯",
    "en": "jes"
  },
  {
    "kr": "젰",
    "en": "jess"
  },
  {
    "kr": "젱",
    "en": "jeng"
  },
  {
    "kr": "젲",
    "en": "jej"
  },
  {
    "kr": "젳",
    "en": "jec"
  },
  {
    "kr": "젴",
    "en": "jek"
  },
  {
    "kr": "젵",
    "en": "jet"
  },
  {
    "kr": "젶",
    "en": "jep"
  },
  {
    "kr": "젷",
    "en": "jeh"
  },
  {
    "kr": "져",
    "en": "jyeo"
  },
  {
    "kr": "젹",
    "en": "jyeog"
  },
  {
    "kr": "젺",
    "en": "jyeogg"
  },
  {
    "kr": "젻",
    "en": "jyeogs"
  },
  {
    "kr": "젼",
    "en": "jyeon"
  },
  {
    "kr": "젽",
    "en": "jyeonj"
  },
  {
    "kr": "젾",
    "en": "jyeonh"
  },
  {
    "kr": "젿",
    "en": "jyeod"
  },
  {
    "kr": "졀",
    "en": "jyeol"
  },
  {
    "kr": "졁",
    "en": "jyeolg"
  },
  {
    "kr": "졂",
    "en": "jyeolm"
  },
  {
    "kr": "졃",
    "en": "jyeolb"
  },
  {
    "kr": "졄",
    "en": "jyeols"
  },
  {
    "kr": "졅",
    "en": "jyeolt"
  },
  {
    "kr": "졆",
    "en": "jyeolp"
  },
  {
    "kr": "졇",
    "en": "jyeolh"
  },
  {
    "kr": "졈",
    "en": "jyeom"
  },
  {
    "kr": "졉",
    "en": "jyeob"
  },
  {
    "kr": "졊",
    "en": "jyeobs"
  },
  {
    "kr": "졋",
    "en": "jyeos"
  },
  {
    "kr": "졌",
    "en": "jyeoss"
  },
  {
    "kr": "졍",
    "en": "jyeong"
  },
  {
    "kr": "졎",
    "en": "jyeoj"
  },
  {
    "kr": "졏",
    "en": "jyeoc"
  },
  {
    "kr": "졐",
    "en": "jyeok"
  },
  {
    "kr": "졑",
    "en": "jyeot"
  },
  {
    "kr": "졒",
    "en": "jyeop"
  },
  {
    "kr": "졓",
    "en": "jyeoh"
  },
  {
    "kr": "졔",
    "en": "jye"
  },
  {
    "kr": "졕",
    "en": "jyeg"
  },
  {
    "kr": "졖",
    "en": "jyegg"
  },
  {
    "kr": "졗",
    "en": "jyegs"
  },
  {
    "kr": "졘",
    "en": "jyen"
  },
  {
    "kr": "졙",
    "en": "jyenj"
  },
  {
    "kr": "졚",
    "en": "jyenh"
  },
  {
    "kr": "졛",
    "en": "jyed"
  },
  {
    "kr": "졜",
    "en": "jyel"
  },
  {
    "kr": "졝",
    "en": "jyelg"
  },
  {
    "kr": "졞",
    "en": "jyelm"
  },
  {
    "kr": "졟",
    "en": "jyelb"
  },
  {
    "kr": "졠",
    "en": "jyels"
  },
  {
    "kr": "졡",
    "en": "jyelt"
  },
  {
    "kr": "졢",
    "en": "jyelp"
  },
  {
    "kr": "졣",
    "en": "jyelh"
  },
  {
    "kr": "졤",
    "en": "jyem"
  },
  {
    "kr": "졥",
    "en": "jyeb"
  },
  {
    "kr": "졦",
    "en": "jyebs"
  },
  {
    "kr": "졧",
    "en": "jyes"
  },
  {
    "kr": "졨",
    "en": "jyess"
  },
  {
    "kr": "졩",
    "en": "jyeng"
  },
  {
    "kr": "졪",
    "en": "jyej"
  },
  {
    "kr": "졫",
    "en": "jyec"
  },
  {
    "kr": "졬",
    "en": "jyek"
  },
  {
    "kr": "졭",
    "en": "jyet"
  },
  {
    "kr": "졮",
    "en": "jyep"
  },
  {
    "kr": "졯",
    "en": "jyeh"
  },
  {
    "kr": "조",
    "en": "jo"
  },
  {
    "kr": "족",
    "en": "jog"
  },
  {
    "kr": "졲",
    "en": "jogg"
  },
  {
    "kr": "졳",
    "en": "jogs"
  },
  {
    "kr": "존",
    "en": "jon"
  },
  {
    "kr": "졵",
    "en": "jonj"
  },
  {
    "kr": "졶",
    "en": "jonh"
  },
  {
    "kr": "졷",
    "en": "jod"
  },
  {
    "kr": "졸",
    "en": "jol"
  },
  {
    "kr": "졹",
    "en": "jolg"
  },
  {
    "kr": "졺",
    "en": "jolm"
  },
  {
    "kr": "졻",
    "en": "jolb"
  },
  {
    "kr": "졼",
    "en": "jols"
  },
  {
    "kr": "졽",
    "en": "jolt"
  },
  {
    "kr": "졾",
    "en": "jolp"
  },
  {
    "kr": "졿",
    "en": "jolh"
  },
  {
    "kr": "좀",
    "en": "jom"
  },
  {
    "kr": "좁",
    "en": "job"
  },
  {
    "kr": "좂",
    "en": "jobs"
  },
  {
    "kr": "좃",
    "en": "jos"
  },
  {
    "kr": "좄",
    "en": "joss"
  },
  {
    "kr": "종",
    "en": "jong"
  },
  {
    "kr": "좆",
    "en": "joj"
  },
  {
    "kr": "좇",
    "en": "joc"
  },
  {
    "kr": "좈",
    "en": "jok"
  },
  {
    "kr": "좉",
    "en": "jot"
  },
  {
    "kr": "좊",
    "en": "jop"
  },
  {
    "kr": "좋",
    "en": "joh"
  },
  {
    "kr": "좌",
    "en": "jwa"
  },
  {
    "kr": "좍",
    "en": "jwag"
  },
  {
    "kr": "좎",
    "en": "jwagg"
  },
  {
    "kr": "좏",
    "en": "jwags"
  },
  {
    "kr": "좐",
    "en": "jwan"
  },
  {
    "kr": "좑",
    "en": "jwanj"
  },
  {
    "kr": "좒",
    "en": "jwanh"
  },
  {
    "kr": "좓",
    "en": "jwad"
  },
  {
    "kr": "좔",
    "en": "jwal"
  },
  {
    "kr": "좕",
    "en": "jwalg"
  },
  {
    "kr": "좖",
    "en": "jwalm"
  },
  {
    "kr": "좗",
    "en": "jwalb"
  },
  {
    "kr": "좘",
    "en": "jwals"
  },
  {
    "kr": "좙",
    "en": "jwalt"
  },
  {
    "kr": "좚",
    "en": "jwalp"
  },
  {
    "kr": "좛",
    "en": "jwalh"
  },
  {
    "kr": "좜",
    "en": "jwam"
  },
  {
    "kr": "좝",
    "en": "jwab"
  },
  {
    "kr": "좞",
    "en": "jwabs"
  },
  {
    "kr": "좟",
    "en": "jwas"
  },
  {
    "kr": "좠",
    "en": "jwass"
  },
  {
    "kr": "좡",
    "en": "jwang"
  },
  {
    "kr": "좢",
    "en": "jwaj"
  },
  {
    "kr": "좣",
    "en": "jwac"
  },
  {
    "kr": "좤",
    "en": "jwak"
  },
  {
    "kr": "좥",
    "en": "jwat"
  },
  {
    "kr": "좦",
    "en": "jwap"
  },
  {
    "kr": "좧",
    "en": "jwah"
  },
  {
    "kr": "좨",
    "en": "jwae"
  },
  {
    "kr": "좩",
    "en": "jwaeg"
  },
  {
    "kr": "좪",
    "en": "jwaegg"
  },
  {
    "kr": "좫",
    "en": "jwaegs"
  },
  {
    "kr": "좬",
    "en": "jwaen"
  },
  {
    "kr": "좭",
    "en": "jwaenj"
  },
  {
    "kr": "좮",
    "en": "jwaenh"
  },
  {
    "kr": "좯",
    "en": "jwaed"
  },
  {
    "kr": "좰",
    "en": "jwael"
  },
  {
    "kr": "좱",
    "en": "jwaelg"
  },
  {
    "kr": "좲",
    "en": "jwaelm"
  },
  {
    "kr": "좳",
    "en": "jwaelb"
  },
  {
    "kr": "좴",
    "en": "jwaels"
  },
  {
    "kr": "좵",
    "en": "jwaelt"
  },
  {
    "kr": "좶",
    "en": "jwaelp"
  },
  {
    "kr": "좷",
    "en": "jwaelh"
  },
  {
    "kr": "좸",
    "en": "jwaem"
  },
  {
    "kr": "좹",
    "en": "jwaeb"
  },
  {
    "kr": "좺",
    "en": "jwaebs"
  },
  {
    "kr": "좻",
    "en": "jwaes"
  },
  {
    "kr": "좼",
    "en": "jwaess"
  },
  {
    "kr": "좽",
    "en": "jwaeng"
  },
  {
    "kr": "좾",
    "en": "jwaej"
  },
  {
    "kr": "좿",
    "en": "jwaec"
  },
  {
    "kr": "죀",
    "en": "jwaek"
  },
  {
    "kr": "죁",
    "en": "jwaet"
  },
  {
    "kr": "죂",
    "en": "jwaep"
  },
  {
    "kr": "죃",
    "en": "jwaeh"
  },
  {
    "kr": "죄",
    "en": "joe"
  },
  {
    "kr": "죅",
    "en": "joeg"
  },
  {
    "kr": "죆",
    "en": "joegg"
  },
  {
    "kr": "죇",
    "en": "joegs"
  },
  {
    "kr": "죈",
    "en": "joen"
  },
  {
    "kr": "죉",
    "en": "joenj"
  },
  {
    "kr": "죊",
    "en": "joenh"
  },
  {
    "kr": "죋",
    "en": "joed"
  },
  {
    "kr": "죌",
    "en": "joel"
  },
  {
    "kr": "죍",
    "en": "joelg"
  },
  {
    "kr": "죎",
    "en": "joelm"
  },
  {
    "kr": "죏",
    "en": "joelb"
  },
  {
    "kr": "죐",
    "en": "joels"
  },
  {
    "kr": "죑",
    "en": "joelt"
  },
  {
    "kr": "죒",
    "en": "joelp"
  },
  {
    "kr": "죓",
    "en": "joelh"
  },
  {
    "kr": "죔",
    "en": "joem"
  },
  {
    "kr": "죕",
    "en": "joeb"
  },
  {
    "kr": "죖",
    "en": "joebs"
  },
  {
    "kr": "죗",
    "en": "joes"
  },
  {
    "kr": "죘",
    "en": "joess"
  },
  {
    "kr": "죙",
    "en": "joeng"
  },
  {
    "kr": "죚",
    "en": "joej"
  },
  {
    "kr": "죛",
    "en": "joec"
  },
  {
    "kr": "죜",
    "en": "joek"
  },
  {
    "kr": "죝",
    "en": "joet"
  },
  {
    "kr": "죞",
    "en": "joep"
  },
  {
    "kr": "죟",
    "en": "joeh"
  },
  {
    "kr": "죠",
    "en": "jyo"
  },
  {
    "kr": "죡",
    "en": "jyog"
  },
  {
    "kr": "죢",
    "en": "jyogg"
  },
  {
    "kr": "죣",
    "en": "jyogs"
  },
  {
    "kr": "죤",
    "en": "jyon"
  },
  {
    "kr": "죥",
    "en": "jyonj"
  },
  {
    "kr": "죦",
    "en": "jyonh"
  },
  {
    "kr": "죧",
    "en": "jyod"
  },
  {
    "kr": "죨",
    "en": "jyol"
  },
  {
    "kr": "죩",
    "en": "jyolg"
  },
  {
    "kr": "죪",
    "en": "jyolm"
  },
  {
    "kr": "죫",
    "en": "jyolb"
  },
  {
    "kr": "죬",
    "en": "jyols"
  },
  {
    "kr": "죭",
    "en": "jyolt"
  },
  {
    "kr": "죮",
    "en": "jyolp"
  },
  {
    "kr": "죯",
    "en": "jyolh"
  },
  {
    "kr": "죰",
    "en": "jyom"
  },
  {
    "kr": "죱",
    "en": "jyob"
  },
  {
    "kr": "죲",
    "en": "jyobs"
  },
  {
    "kr": "죳",
    "en": "jyos"
  },
  {
    "kr": "죴",
    "en": "jyoss"
  },
  {
    "kr": "죵",
    "en": "jyong"
  },
  {
    "kr": "죶",
    "en": "jyoj"
  },
  {
    "kr": "죷",
    "en": "jyoc"
  },
  {
    "kr": "죸",
    "en": "jyok"
  },
  {
    "kr": "죹",
    "en": "jyot"
  },
  {
    "kr": "죺",
    "en": "jyop"
  },
  {
    "kr": "죻",
    "en": "jyoh"
  },
  {
    "kr": "주",
    "en": "ju"
  },
  {
    "kr": "죽",
    "en": "jug"
  },
  {
    "kr": "죾",
    "en": "jugg"
  },
  {
    "kr": "죿",
    "en": "jugs"
  },
  {
    "kr": "준",
    "en": "jun"
  },
  {
    "kr": "줁",
    "en": "junj"
  },
  {
    "kr": "줂",
    "en": "junh"
  },
  {
    "kr": "줃",
    "en": "jud"
  },
  {
    "kr": "줄",
    "en": "jul"
  },
  {
    "kr": "줅",
    "en": "julg"
  },
  {
    "kr": "줆",
    "en": "julm"
  },
  {
    "kr": "줇",
    "en": "julb"
  },
  {
    "kr": "줈",
    "en": "juls"
  },
  {
    "kr": "줉",
    "en": "jult"
  },
  {
    "kr": "줊",
    "en": "julp"
  },
  {
    "kr": "줋",
    "en": "julh"
  },
  {
    "kr": "줌",
    "en": "jum"
  },
  {
    "kr": "줍",
    "en": "jub"
  },
  {
    "kr": "줎",
    "en": "jubs"
  },
  {
    "kr": "줏",
    "en": "jus"
  },
  {
    "kr": "줐",
    "en": "juss"
  },
  {
    "kr": "중",
    "en": "jung"
  },
  {
    "kr": "줒",
    "en": "juj"
  },
  {
    "kr": "줓",
    "en": "juc"
  },
  {
    "kr": "줔",
    "en": "juk"
  },
  {
    "kr": "줕",
    "en": "jut"
  },
  {
    "kr": "줖",
    "en": "jup"
  },
  {
    "kr": "줗",
    "en": "juh"
  },
  {
    "kr": "줘",
    "en": "jweo"
  },
  {
    "kr": "줙",
    "en": "jweog"
  },
  {
    "kr": "줚",
    "en": "jweogg"
  },
  {
    "kr": "줛",
    "en": "jweogs"
  },
  {
    "kr": "줜",
    "en": "jweon"
  },
  {
    "kr": "줝",
    "en": "jweonj"
  },
  {
    "kr": "줞",
    "en": "jweonh"
  },
  {
    "kr": "줟",
    "en": "jweod"
  },
  {
    "kr": "줠",
    "en": "jweol"
  },
  {
    "kr": "줡",
    "en": "jweolg"
  },
  {
    "kr": "줢",
    "en": "jweolm"
  },
  {
    "kr": "줣",
    "en": "jweolb"
  },
  {
    "kr": "줤",
    "en": "jweols"
  },
  {
    "kr": "줥",
    "en": "jweolt"
  },
  {
    "kr": "줦",
    "en": "jweolp"
  },
  {
    "kr": "줧",
    "en": "jweolh"
  },
  {
    "kr": "줨",
    "en": "jweom"
  },
  {
    "kr": "줩",
    "en": "jweob"
  },
  {
    "kr": "줪",
    "en": "jweobs"
  },
  {
    "kr": "줫",
    "en": "jweos"
  },
  {
    "kr": "줬",
    "en": "jweoss"
  },
  {
    "kr": "줭",
    "en": "jweong"
  },
  {
    "kr": "줮",
    "en": "jweoj"
  },
  {
    "kr": "줯",
    "en": "jweoc"
  },
  {
    "kr": "줰",
    "en": "jweok"
  },
  {
    "kr": "줱",
    "en": "jweot"
  },
  {
    "kr": "줲",
    "en": "jweop"
  },
  {
    "kr": "줳",
    "en": "jweoh"
  },
  {
    "kr": "줴",
    "en": "jwe"
  },
  {
    "kr": "줵",
    "en": "jweg"
  },
  {
    "kr": "줶",
    "en": "jwegg"
  },
  {
    "kr": "줷",
    "en": "jwegs"
  },
  {
    "kr": "줸",
    "en": "jwen"
  },
  {
    "kr": "줹",
    "en": "jwenj"
  },
  {
    "kr": "줺",
    "en": "jwenh"
  },
  {
    "kr": "줻",
    "en": "jwed"
  },
  {
    "kr": "줼",
    "en": "jwel"
  },
  {
    "kr": "줽",
    "en": "jwelg"
  },
  {
    "kr": "줾",
    "en": "jwelm"
  },
  {
    "kr": "줿",
    "en": "jwelb"
  },
  {
    "kr": "쥀",
    "en": "jwels"
  },
  {
    "kr": "쥁",
    "en": "jwelt"
  },
  {
    "kr": "쥂",
    "en": "jwelp"
  },
  {
    "kr": "쥃",
    "en": "jwelh"
  },
  {
    "kr": "쥄",
    "en": "jwem"
  },
  {
    "kr": "쥅",
    "en": "jweb"
  },
  {
    "kr": "쥆",
    "en": "jwebs"
  },
  {
    "kr": "쥇",
    "en": "jwes"
  },
  {
    "kr": "쥈",
    "en": "jwess"
  },
  {
    "kr": "쥉",
    "en": "jweng"
  },
  {
    "kr": "쥊",
    "en": "jwej"
  },
  {
    "kr": "쥋",
    "en": "jwec"
  },
  {
    "kr": "쥌",
    "en": "jwek"
  },
  {
    "kr": "쥍",
    "en": "jwet"
  },
  {
    "kr": "쥎",
    "en": "jwep"
  },
  {
    "kr": "쥏",
    "en": "jweh"
  },
  {
    "kr": "쥐",
    "en": "jwi"
  },
  {
    "kr": "쥑",
    "en": "jwig"
  },
  {
    "kr": "쥒",
    "en": "jwigg"
  },
  {
    "kr": "쥓",
    "en": "jwigs"
  },
  {
    "kr": "쥔",
    "en": "jwin"
  },
  {
    "kr": "쥕",
    "en": "jwinj"
  },
  {
    "kr": "쥖",
    "en": "jwinh"
  },
  {
    "kr": "쥗",
    "en": "jwid"
  },
  {
    "kr": "쥘",
    "en": "jwil"
  },
  {
    "kr": "쥙",
    "en": "jwilg"
  },
  {
    "kr": "쥚",
    "en": "jwilm"
  },
  {
    "kr": "쥛",
    "en": "jwilb"
  },
  {
    "kr": "쥜",
    "en": "jwils"
  },
  {
    "kr": "쥝",
    "en": "jwilt"
  },
  {
    "kr": "쥞",
    "en": "jwilp"
  },
  {
    "kr": "쥟",
    "en": "jwilh"
  },
  {
    "kr": "쥠",
    "en": "jwim"
  },
  {
    "kr": "쥡",
    "en": "jwib"
  },
  {
    "kr": "쥢",
    "en": "jwibs"
  },
  {
    "kr": "쥣",
    "en": "jwis"
  },
  {
    "kr": "쥤",
    "en": "jwiss"
  },
  {
    "kr": "쥥",
    "en": "jwing"
  },
  {
    "kr": "쥦",
    "en": "jwij"
  },
  {
    "kr": "쥧",
    "en": "jwic"
  },
  {
    "kr": "쥨",
    "en": "jwik"
  },
  {
    "kr": "쥩",
    "en": "jwit"
  },
  {
    "kr": "쥪",
    "en": "jwip"
  },
  {
    "kr": "쥫",
    "en": "jwih"
  },
  {
    "kr": "쥬",
    "en": "jyu"
  },
  {
    "kr": "쥭",
    "en": "jyug"
  },
  {
    "kr": "쥮",
    "en": "jyugg"
  },
  {
    "kr": "쥯",
    "en": "jyugs"
  },
  {
    "kr": "쥰",
    "en": "jyun"
  },
  {
    "kr": "쥱",
    "en": "jyunj"
  },
  {
    "kr": "쥲",
    "en": "jyunh"
  },
  {
    "kr": "쥳",
    "en": "jyud"
  },
  {
    "kr": "쥴",
    "en": "jyul"
  },
  {
    "kr": "쥵",
    "en": "jyulg"
  },
  {
    "kr": "쥶",
    "en": "jyulm"
  },
  {
    "kr": "쥷",
    "en": "jyulb"
  },
  {
    "kr": "쥸",
    "en": "jyuls"
  },
  {
    "kr": "쥹",
    "en": "jyult"
  },
  {
    "kr": "쥺",
    "en": "jyulp"
  },
  {
    "kr": "쥻",
    "en": "jyulh"
  },
  {
    "kr": "쥼",
    "en": "jyum"
  },
  {
    "kr": "쥽",
    "en": "jyub"
  },
  {
    "kr": "쥾",
    "en": "jyubs"
  },
  {
    "kr": "쥿",
    "en": "jyus"
  },
  {
    "kr": "즀",
    "en": "jyuss"
  },
  {
    "kr": "즁",
    "en": "jyung"
  },
  {
    "kr": "즂",
    "en": "jyuj"
  },
  {
    "kr": "즃",
    "en": "jyuc"
  },
  {
    "kr": "즄",
    "en": "jyuk"
  },
  {
    "kr": "즅",
    "en": "jyut"
  },
  {
    "kr": "즆",
    "en": "jyup"
  },
  {
    "kr": "즇",
    "en": "jyuh"
  },
  {
    "kr": "즈",
    "en": "jeu"
  },
  {
    "kr": "즉",
    "en": "jeug"
  },
  {
    "kr": "즊",
    "en": "jeugg"
  },
  {
    "kr": "즋",
    "en": "jeugs"
  },
  {
    "kr": "즌",
    "en": "jeun"
  },
  {
    "kr": "즍",
    "en": "jeunj"
  },
  {
    "kr": "즎",
    "en": "jeunh"
  },
  {
    "kr": "즏",
    "en": "jeud"
  },
  {
    "kr": "즐",
    "en": "jeul"
  },
  {
    "kr": "즑",
    "en": "jeulg"
  },
  {
    "kr": "즒",
    "en": "jeulm"
  },
  {
    "kr": "즓",
    "en": "jeulb"
  },
  {
    "kr": "즔",
    "en": "jeuls"
  },
  {
    "kr": "즕",
    "en": "jeult"
  },
  {
    "kr": "즖",
    "en": "jeulp"
  },
  {
    "kr": "즗",
    "en": "jeulh"
  },
  {
    "kr": "즘",
    "en": "jeum"
  },
  {
    "kr": "즙",
    "en": "jeub"
  },
  {
    "kr": "즚",
    "en": "jeubs"
  },
  {
    "kr": "즛",
    "en": "jeus"
  },
  {
    "kr": "즜",
    "en": "jeuss"
  },
  {
    "kr": "증",
    "en": "jeung"
  },
  {
    "kr": "즞",
    "en": "jeuj"
  },
  {
    "kr": "즟",
    "en": "jeuc"
  },
  {
    "kr": "즠",
    "en": "jeuk"
  },
  {
    "kr": "즡",
    "en": "jeut"
  },
  {
    "kr": "즢",
    "en": "jeup"
  },
  {
    "kr": "즣",
    "en": "jeuh"
  },
  {
    "kr": "즤",
    "en": "jyi"
  },
  {
    "kr": "즥",
    "en": "jyig"
  },
  {
    "kr": "즦",
    "en": "jyigg"
  },
  {
    "kr": "즧",
    "en": "jyigs"
  },
  {
    "kr": "즨",
    "en": "jyin"
  },
  {
    "kr": "즩",
    "en": "jyinj"
  },
  {
    "kr": "즪",
    "en": "jyinh"
  },
  {
    "kr": "즫",
    "en": "jyid"
  },
  {
    "kr": "즬",
    "en": "jyil"
  },
  {
    "kr": "즭",
    "en": "jyilg"
  },
  {
    "kr": "즮",
    "en": "jyilm"
  },
  {
    "kr": "즯",
    "en": "jyilb"
  },
  {
    "kr": "즰",
    "en": "jyils"
  },
  {
    "kr": "즱",
    "en": "jyilt"
  },
  {
    "kr": "즲",
    "en": "jyilp"
  },
  {
    "kr": "즳",
    "en": "jyilh"
  },
  {
    "kr": "즴",
    "en": "jyim"
  },
  {
    "kr": "즵",
    "en": "jyib"
  },
  {
    "kr": "즶",
    "en": "jyibs"
  },
  {
    "kr": "즷",
    "en": "jyis"
  },
  {
    "kr": "즸",
    "en": "jyiss"
  },
  {
    "kr": "즹",
    "en": "jying"
  },
  {
    "kr": "즺",
    "en": "jyij"
  },
  {
    "kr": "즻",
    "en": "jyic"
  },
  {
    "kr": "즼",
    "en": "jyik"
  },
  {
    "kr": "즽",
    "en": "jyit"
  },
  {
    "kr": "즾",
    "en": "jyip"
  },
  {
    "kr": "즿",
    "en": "jyih"
  },
  {
    "kr": "지",
    "en": "ji"
  },
  {
    "kr": "직",
    "en": "jig"
  },
  {
    "kr": "짂",
    "en": "jigg"
  },
  {
    "kr": "짃",
    "en": "jigs"
  },
  {
    "kr": "진",
    "en": "jin"
  },
  {
    "kr": "짅",
    "en": "jinj"
  },
  {
    "kr": "짆",
    "en": "jinh"
  },
  {
    "kr": "짇",
    "en": "jid"
  },
  {
    "kr": "질",
    "en": "jil"
  },
  {
    "kr": "짉",
    "en": "jilg"
  },
  {
    "kr": "짊",
    "en": "jilm"
  },
  {
    "kr": "짋",
    "en": "jilb"
  },
  {
    "kr": "짌",
    "en": "jils"
  },
  {
    "kr": "짍",
    "en": "jilt"
  },
  {
    "kr": "짎",
    "en": "jilp"
  },
  {
    "kr": "짏",
    "en": "jilh"
  },
  {
    "kr": "짐",
    "en": "jim"
  },
  {
    "kr": "집",
    "en": "jib"
  },
  {
    "kr": "짒",
    "en": "jibs"
  },
  {
    "kr": "짓",
    "en": "jis"
  },
  {
    "kr": "짔",
    "en": "jiss"
  },
  {
    "kr": "징",
    "en": "jing"
  },
  {
    "kr": "짖",
    "en": "jij"
  },
  {
    "kr": "짗",
    "en": "jic"
  },
  {
    "kr": "짘",
    "en": "jik"
  },
  {
    "kr": "짙",
    "en": "jit"
  },
  {
    "kr": "짚",
    "en": "jip"
  },
  {
    "kr": "짛",
    "en": "jih"
  },
  {
    "kr": "짜",
    "en": "jja"
  },
  {
    "kr": "짝",
    "en": "jjag"
  },
  {
    "kr": "짞",
    "en": "jjagg"
  },
  {
    "kr": "짟",
    "en": "jjags"
  },
  {
    "kr": "짠",
    "en": "jjan"
  },
  {
    "kr": "짡",
    "en": "jjanj"
  },
  {
    "kr": "짢",
    "en": "jjanh"
  },
  {
    "kr": "짣",
    "en": "jjad"
  },
  {
    "kr": "짤",
    "en": "jjal"
  },
  {
    "kr": "짥",
    "en": "jjalg"
  },
  {
    "kr": "짦",
    "en": "jjalm"
  },
  {
    "kr": "짧",
    "en": "jjalb"
  },
  {
    "kr": "짨",
    "en": "jjals"
  },
  {
    "kr": "짩",
    "en": "jjalt"
  },
  {
    "kr": "짪",
    "en": "jjalp"
  },
  {
    "kr": "짫",
    "en": "jjalh"
  },
  {
    "kr": "짬",
    "en": "jjam"
  },
  {
    "kr": "짭",
    "en": "jjab"
  },
  {
    "kr": "짮",
    "en": "jjabs"
  },
  {
    "kr": "짯",
    "en": "jjas"
  },
  {
    "kr": "짰",
    "en": "jjass"
  },
  {
    "kr": "짱",
    "en": "jjang"
  },
  {
    "kr": "짲",
    "en": "jjaj"
  },
  {
    "kr": "짳",
    "en": "jjac"
  },
  {
    "kr": "짴",
    "en": "jjak"
  },
  {
    "kr": "짵",
    "en": "jjat"
  },
  {
    "kr": "짶",
    "en": "jjap"
  },
  {
    "kr": "짷",
    "en": "jjah"
  },
  {
    "kr": "째",
    "en": "jjae"
  },
  {
    "kr": "짹",
    "en": "jjaeg"
  },
  {
    "kr": "짺",
    "en": "jjaegg"
  },
  {
    "kr": "짻",
    "en": "jjaegs"
  },
  {
    "kr": "짼",
    "en": "jjaen"
  },
  {
    "kr": "짽",
    "en": "jjaenj"
  },
  {
    "kr": "짾",
    "en": "jjaenh"
  },
  {
    "kr": "짿",
    "en": "jjaed"
  },
  {
    "kr": "쨀",
    "en": "jjael"
  },
  {
    "kr": "쨁",
    "en": "jjaelg"
  },
  {
    "kr": "쨂",
    "en": "jjaelm"
  },
  {
    "kr": "쨃",
    "en": "jjaelb"
  },
  {
    "kr": "쨄",
    "en": "jjaels"
  },
  {
    "kr": "쨅",
    "en": "jjaelt"
  },
  {
    "kr": "쨆",
    "en": "jjaelp"
  },
  {
    "kr": "쨇",
    "en": "jjaelh"
  },
  {
    "kr": "쨈",
    "en": "jjaem"
  },
  {
    "kr": "쨉",
    "en": "jjaeb"
  },
  {
    "kr": "쨊",
    "en": "jjaebs"
  },
  {
    "kr": "쨋",
    "en": "jjaes"
  },
  {
    "kr": "쨌",
    "en": "jjaess"
  },
  {
    "kr": "쨍",
    "en": "jjaeng"
  },
  {
    "kr": "쨎",
    "en": "jjaej"
  },
  {
    "kr": "쨏",
    "en": "jjaec"
  },
  {
    "kr": "쨐",
    "en": "jjaek"
  },
  {
    "kr": "쨑",
    "en": "jjaet"
  },
  {
    "kr": "쨒",
    "en": "jjaep"
  },
  {
    "kr": "쨓",
    "en": "jjaeh"
  },
  {
    "kr": "쨔",
    "en": "jjya"
  },
  {
    "kr": "쨕",
    "en": "jjyag"
  },
  {
    "kr": "쨖",
    "en": "jjyagg"
  },
  {
    "kr": "쨗",
    "en": "jjyags"
  },
  {
    "kr": "쨘",
    "en": "jjyan"
  },
  {
    "kr": "쨙",
    "en": "jjyanj"
  },
  {
    "kr": "쨚",
    "en": "jjyanh"
  },
  {
    "kr": "쨛",
    "en": "jjyad"
  },
  {
    "kr": "쨜",
    "en": "jjyal"
  },
  {
    "kr": "쨝",
    "en": "jjyalg"
  },
  {
    "kr": "쨞",
    "en": "jjyalm"
  },
  {
    "kr": "쨟",
    "en": "jjyalb"
  },
  {
    "kr": "쨠",
    "en": "jjyals"
  },
  {
    "kr": "쨡",
    "en": "jjyalt"
  },
  {
    "kr": "쨢",
    "en": "jjyalp"
  },
  {
    "kr": "쨣",
    "en": "jjyalh"
  },
  {
    "kr": "쨤",
    "en": "jjyam"
  },
  {
    "kr": "쨥",
    "en": "jjyab"
  },
  {
    "kr": "쨦",
    "en": "jjyabs"
  },
  {
    "kr": "쨧",
    "en": "jjyas"
  },
  {
    "kr": "쨨",
    "en": "jjyass"
  },
  {
    "kr": "쨩",
    "en": "jjyang"
  },
  {
    "kr": "쨪",
    "en": "jjyaj"
  },
  {
    "kr": "쨫",
    "en": "jjyac"
  },
  {
    "kr": "쨬",
    "en": "jjyak"
  },
  {
    "kr": "쨭",
    "en": "jjyat"
  },
  {
    "kr": "쨮",
    "en": "jjyap"
  },
  {
    "kr": "쨯",
    "en": "jjyah"
  },
  {
    "kr": "쨰",
    "en": "jjyae"
  },
  {
    "kr": "쨱",
    "en": "jjyaeg"
  },
  {
    "kr": "쨲",
    "en": "jjyaegg"
  },
  {
    "kr": "쨳",
    "en": "jjyaegs"
  },
  {
    "kr": "쨴",
    "en": "jjyaen"
  },
  {
    "kr": "쨵",
    "en": "jjyaenj"
  },
  {
    "kr": "쨶",
    "en": "jjyaenh"
  },
  {
    "kr": "쨷",
    "en": "jjyaed"
  },
  {
    "kr": "쨸",
    "en": "jjyael"
  },
  {
    "kr": "쨹",
    "en": "jjyaelg"
  },
  {
    "kr": "쨺",
    "en": "jjyaelm"
  },
  {
    "kr": "쨻",
    "en": "jjyaelb"
  },
  {
    "kr": "쨼",
    "en": "jjyaels"
  },
  {
    "kr": "쨽",
    "en": "jjyaelt"
  },
  {
    "kr": "쨾",
    "en": "jjyaelp"
  },
  {
    "kr": "쨿",
    "en": "jjyaelh"
  },
  {
    "kr": "쩀",
    "en": "jjyaem"
  },
  {
    "kr": "쩁",
    "en": "jjyaeb"
  },
  {
    "kr": "쩂",
    "en": "jjyaebs"
  },
  {
    "kr": "쩃",
    "en": "jjyaes"
  },
  {
    "kr": "쩄",
    "en": "jjyaess"
  },
  {
    "kr": "쩅",
    "en": "jjyaeng"
  },
  {
    "kr": "쩆",
    "en": "jjyaej"
  },
  {
    "kr": "쩇",
    "en": "jjyaec"
  },
  {
    "kr": "쩈",
    "en": "jjyaek"
  },
  {
    "kr": "쩉",
    "en": "jjyaet"
  },
  {
    "kr": "쩊",
    "en": "jjyaep"
  },
  {
    "kr": "쩋",
    "en": "jjyaeh"
  },
  {
    "kr": "쩌",
    "en": "jjeo"
  },
  {
    "kr": "쩍",
    "en": "jjeog"
  },
  {
    "kr": "쩎",
    "en": "jjeogg"
  },
  {
    "kr": "쩏",
    "en": "jjeogs"
  },
  {
    "kr": "쩐",
    "en": "jjeon"
  },
  {
    "kr": "쩑",
    "en": "jjeonj"
  },
  {
    "kr": "쩒",
    "en": "jjeonh"
  },
  {
    "kr": "쩓",
    "en": "jjeod"
  },
  {
    "kr": "쩔",
    "en": "jjeol"
  },
  {
    "kr": "쩕",
    "en": "jjeolg"
  },
  {
    "kr": "쩖",
    "en": "jjeolm"
  },
  {
    "kr": "쩗",
    "en": "jjeolb"
  },
  {
    "kr": "쩘",
    "en": "jjeols"
  },
  {
    "kr": "쩙",
    "en": "jjeolt"
  },
  {
    "kr": "쩚",
    "en": "jjeolp"
  },
  {
    "kr": "쩛",
    "en": "jjeolh"
  },
  {
    "kr": "쩜",
    "en": "jjeom"
  },
  {
    "kr": "쩝",
    "en": "jjeob"
  },
  {
    "kr": "쩞",
    "en": "jjeobs"
  },
  {
    "kr": "쩟",
    "en": "jjeos"
  },
  {
    "kr": "쩠",
    "en": "jjeoss"
  },
  {
    "kr": "쩡",
    "en": "jjeong"
  },
  {
    "kr": "쩢",
    "en": "jjeoj"
  },
  {
    "kr": "쩣",
    "en": "jjeoc"
  },
  {
    "kr": "쩤",
    "en": "jjeok"
  },
  {
    "kr": "쩥",
    "en": "jjeot"
  },
  {
    "kr": "쩦",
    "en": "jjeop"
  },
  {
    "kr": "쩧",
    "en": "jjeoh"
  },
  {
    "kr": "쩨",
    "en": "jje"
  },
  {
    "kr": "쩩",
    "en": "jjeg"
  },
  {
    "kr": "쩪",
    "en": "jjegg"
  },
  {
    "kr": "쩫",
    "en": "jjegs"
  },
  {
    "kr": "쩬",
    "en": "jjen"
  },
  {
    "kr": "쩭",
    "en": "jjenj"
  },
  {
    "kr": "쩮",
    "en": "jjenh"
  },
  {
    "kr": "쩯",
    "en": "jjed"
  },
  {
    "kr": "쩰",
    "en": "jjel"
  },
  {
    "kr": "쩱",
    "en": "jjelg"
  },
  {
    "kr": "쩲",
    "en": "jjelm"
  },
  {
    "kr": "쩳",
    "en": "jjelb"
  },
  {
    "kr": "쩴",
    "en": "jjels"
  },
  {
    "kr": "쩵",
    "en": "jjelt"
  },
  {
    "kr": "쩶",
    "en": "jjelp"
  },
  {
    "kr": "쩷",
    "en": "jjelh"
  },
  {
    "kr": "쩸",
    "en": "jjem"
  },
  {
    "kr": "쩹",
    "en": "jjeb"
  },
  {
    "kr": "쩺",
    "en": "jjebs"
  },
  {
    "kr": "쩻",
    "en": "jjes"
  },
  {
    "kr": "쩼",
    "en": "jjess"
  },
  {
    "kr": "쩽",
    "en": "jjeng"
  },
  {
    "kr": "쩾",
    "en": "jjej"
  },
  {
    "kr": "쩿",
    "en": "jjec"
  },
  {
    "kr": "쪀",
    "en": "jjek"
  },
  {
    "kr": "쪁",
    "en": "jjet"
  },
  {
    "kr": "쪂",
    "en": "jjep"
  },
  {
    "kr": "쪃",
    "en": "jjeh"
  },
  {
    "kr": "쪄",
    "en": "jjyeo"
  },
  {
    "kr": "쪅",
    "en": "jjyeog"
  },
  {
    "kr": "쪆",
    "en": "jjyeogg"
  },
  {
    "kr": "쪇",
    "en": "jjyeogs"
  },
  {
    "kr": "쪈",
    "en": "jjyeon"
  },
  {
    "kr": "쪉",
    "en": "jjyeonj"
  },
  {
    "kr": "쪊",
    "en": "jjyeonh"
  },
  {
    "kr": "쪋",
    "en": "jjyeod"
  },
  {
    "kr": "쪌",
    "en": "jjyeol"
  },
  {
    "kr": "쪍",
    "en": "jjyeolg"
  },
  {
    "kr": "쪎",
    "en": "jjyeolm"
  },
  {
    "kr": "쪏",
    "en": "jjyeolb"
  },
  {
    "kr": "쪐",
    "en": "jjyeols"
  },
  {
    "kr": "쪑",
    "en": "jjyeolt"
  },
  {
    "kr": "쪒",
    "en": "jjyeolp"
  },
  {
    "kr": "쪓",
    "en": "jjyeolh"
  },
  {
    "kr": "쪔",
    "en": "jjyeom"
  },
  {
    "kr": "쪕",
    "en": "jjyeob"
  },
  {
    "kr": "쪖",
    "en": "jjyeobs"
  },
  {
    "kr": "쪗",
    "en": "jjyeos"
  },
  {
    "kr": "쪘",
    "en": "jjyeoss"
  },
  {
    "kr": "쪙",
    "en": "jjyeong"
  },
  {
    "kr": "쪚",
    "en": "jjyeoj"
  },
  {
    "kr": "쪛",
    "en": "jjyeoc"
  },
  {
    "kr": "쪜",
    "en": "jjyeok"
  },
  {
    "kr": "쪝",
    "en": "jjyeot"
  },
  {
    "kr": "쪞",
    "en": "jjyeop"
  },
  {
    "kr": "쪟",
    "en": "jjyeoh"
  },
  {
    "kr": "쪠",
    "en": "jjye"
  },
  {
    "kr": "쪡",
    "en": "jjyeg"
  },
  {
    "kr": "쪢",
    "en": "jjyegg"
  },
  {
    "kr": "쪣",
    "en": "jjyegs"
  },
  {
    "kr": "쪤",
    "en": "jjyen"
  },
  {
    "kr": "쪥",
    "en": "jjyenj"
  },
  {
    "kr": "쪦",
    "en": "jjyenh"
  },
  {
    "kr": "쪧",
    "en": "jjyed"
  },
  {
    "kr": "쪨",
    "en": "jjyel"
  },
  {
    "kr": "쪩",
    "en": "jjyelg"
  },
  {
    "kr": "쪪",
    "en": "jjyelm"
  },
  {
    "kr": "쪫",
    "en": "jjyelb"
  },
  {
    "kr": "쪬",
    "en": "jjyels"
  },
  {
    "kr": "쪭",
    "en": "jjyelt"
  },
  {
    "kr": "쪮",
    "en": "jjyelp"
  },
  {
    "kr": "쪯",
    "en": "jjyelh"
  },
  {
    "kr": "쪰",
    "en": "jjyem"
  },
  {
    "kr": "쪱",
    "en": "jjyeb"
  },
  {
    "kr": "쪲",
    "en": "jjyebs"
  },
  {
    "kr": "쪳",
    "en": "jjyes"
  },
  {
    "kr": "쪴",
    "en": "jjyess"
  },
  {
    "kr": "쪵",
    "en": "jjyeng"
  },
  {
    "kr": "쪶",
    "en": "jjyej"
  },
  {
    "kr": "쪷",
    "en": "jjyec"
  },
  {
    "kr": "쪸",
    "en": "jjyek"
  },
  {
    "kr": "쪹",
    "en": "jjyet"
  },
  {
    "kr": "쪺",
    "en": "jjyep"
  },
  {
    "kr": "쪻",
    "en": "jjyeh"
  },
  {
    "kr": "쪼",
    "en": "jjo"
  },
  {
    "kr": "쪽",
    "en": "jjog"
  },
  {
    "kr": "쪾",
    "en": "jjogg"
  },
  {
    "kr": "쪿",
    "en": "jjogs"
  },
  {
    "kr": "쫀",
    "en": "jjon"
  },
  {
    "kr": "쫁",
    "en": "jjonj"
  },
  {
    "kr": "쫂",
    "en": "jjonh"
  },
  {
    "kr": "쫃",
    "en": "jjod"
  },
  {
    "kr": "쫄",
    "en": "jjol"
  },
  {
    "kr": "쫅",
    "en": "jjolg"
  },
  {
    "kr": "쫆",
    "en": "jjolm"
  },
  {
    "kr": "쫇",
    "en": "jjolb"
  },
  {
    "kr": "쫈",
    "en": "jjols"
  },
  {
    "kr": "쫉",
    "en": "jjolt"
  },
  {
    "kr": "쫊",
    "en": "jjolp"
  },
  {
    "kr": "쫋",
    "en": "jjolh"
  },
  {
    "kr": "쫌",
    "en": "jjom"
  },
  {
    "kr": "쫍",
    "en": "jjob"
  },
  {
    "kr": "쫎",
    "en": "jjobs"
  },
  {
    "kr": "쫏",
    "en": "jjos"
  },
  {
    "kr": "쫐",
    "en": "jjoss"
  },
  {
    "kr": "쫑",
    "en": "jjong"
  },
  {
    "kr": "쫒",
    "en": "jjoj"
  },
  {
    "kr": "쫓",
    "en": "jjoc"
  },
  {
    "kr": "쫔",
    "en": "jjok"
  },
  {
    "kr": "쫕",
    "en": "jjot"
  },
  {
    "kr": "쫖",
    "en": "jjop"
  },
  {
    "kr": "쫗",
    "en": "jjoh"
  },
  {
    "kr": "쫘",
    "en": "jjwa"
  },
  {
    "kr": "쫙",
    "en": "jjwag"
  },
  {
    "kr": "쫚",
    "en": "jjwagg"
  },
  {
    "kr": "쫛",
    "en": "jjwags"
  },
  {
    "kr": "쫜",
    "en": "jjwan"
  },
  {
    "kr": "쫝",
    "en": "jjwanj"
  },
  {
    "kr": "쫞",
    "en": "jjwanh"
  },
  {
    "kr": "쫟",
    "en": "jjwad"
  },
  {
    "kr": "쫠",
    "en": "jjwal"
  },
  {
    "kr": "쫡",
    "en": "jjwalg"
  },
  {
    "kr": "쫢",
    "en": "jjwalm"
  },
  {
    "kr": "쫣",
    "en": "jjwalb"
  },
  {
    "kr": "쫤",
    "en": "jjwals"
  },
  {
    "kr": "쫥",
    "en": "jjwalt"
  },
  {
    "kr": "쫦",
    "en": "jjwalp"
  },
  {
    "kr": "쫧",
    "en": "jjwalh"
  },
  {
    "kr": "쫨",
    "en": "jjwam"
  },
  {
    "kr": "쫩",
    "en": "jjwab"
  },
  {
    "kr": "쫪",
    "en": "jjwabs"
  },
  {
    "kr": "쫫",
    "en": "jjwas"
  },
  {
    "kr": "쫬",
    "en": "jjwass"
  },
  {
    "kr": "쫭",
    "en": "jjwang"
  },
  {
    "kr": "쫮",
    "en": "jjwaj"
  },
  {
    "kr": "쫯",
    "en": "jjwac"
  },
  {
    "kr": "쫰",
    "en": "jjwak"
  },
  {
    "kr": "쫱",
    "en": "jjwat"
  },
  {
    "kr": "쫲",
    "en": "jjwap"
  },
  {
    "kr": "쫳",
    "en": "jjwah"
  },
  {
    "kr": "쫴",
    "en": "jjwae"
  },
  {
    "kr": "쫵",
    "en": "jjwaeg"
  },
  {
    "kr": "쫶",
    "en": "jjwaegg"
  },
  {
    "kr": "쫷",
    "en": "jjwaegs"
  },
  {
    "kr": "쫸",
    "en": "jjwaen"
  },
  {
    "kr": "쫹",
    "en": "jjwaenj"
  },
  {
    "kr": "쫺",
    "en": "jjwaenh"
  },
  {
    "kr": "쫻",
    "en": "jjwaed"
  },
  {
    "kr": "쫼",
    "en": "jjwael"
  },
  {
    "kr": "쫽",
    "en": "jjwaelg"
  },
  {
    "kr": "쫾",
    "en": "jjwaelm"
  },
  {
    "kr": "쫿",
    "en": "jjwaelb"
  },
  {
    "kr": "쬀",
    "en": "jjwaels"
  },
  {
    "kr": "쬁",
    "en": "jjwaelt"
  },
  {
    "kr": "쬂",
    "en": "jjwaelp"
  },
  {
    "kr": "쬃",
    "en": "jjwaelh"
  },
  {
    "kr": "쬄",
    "en": "jjwaem"
  },
  {
    "kr": "쬅",
    "en": "jjwaeb"
  },
  {
    "kr": "쬆",
    "en": "jjwaebs"
  },
  {
    "kr": "쬇",
    "en": "jjwaes"
  },
  {
    "kr": "쬈",
    "en": "jjwaess"
  },
  {
    "kr": "쬉",
    "en": "jjwaeng"
  },
  {
    "kr": "쬊",
    "en": "jjwaej"
  },
  {
    "kr": "쬋",
    "en": "jjwaec"
  },
  {
    "kr": "쬌",
    "en": "jjwaek"
  },
  {
    "kr": "쬍",
    "en": "jjwaet"
  },
  {
    "kr": "쬎",
    "en": "jjwaep"
  },
  {
    "kr": "쬏",
    "en": "jjwaeh"
  },
  {
    "kr": "쬐",
    "en": "jjoe"
  },
  {
    "kr": "쬑",
    "en": "jjoeg"
  },
  {
    "kr": "쬒",
    "en": "jjoegg"
  },
  {
    "kr": "쬓",
    "en": "jjoegs"
  },
  {
    "kr": "쬔",
    "en": "jjoen"
  },
  {
    "kr": "쬕",
    "en": "jjoenj"
  },
  {
    "kr": "쬖",
    "en": "jjoenh"
  },
  {
    "kr": "쬗",
    "en": "jjoed"
  },
  {
    "kr": "쬘",
    "en": "jjoel"
  },
  {
    "kr": "쬙",
    "en": "jjoelg"
  },
  {
    "kr": "쬚",
    "en": "jjoelm"
  },
  {
    "kr": "쬛",
    "en": "jjoelb"
  },
  {
    "kr": "쬜",
    "en": "jjoels"
  },
  {
    "kr": "쬝",
    "en": "jjoelt"
  },
  {
    "kr": "쬞",
    "en": "jjoelp"
  },
  {
    "kr": "쬟",
    "en": "jjoelh"
  },
  {
    "kr": "쬠",
    "en": "jjoem"
  },
  {
    "kr": "쬡",
    "en": "jjoeb"
  },
  {
    "kr": "쬢",
    "en": "jjoebs"
  },
  {
    "kr": "쬣",
    "en": "jjoes"
  },
  {
    "kr": "쬤",
    "en": "jjoess"
  },
  {
    "kr": "쬥",
    "en": "jjoeng"
  },
  {
    "kr": "쬦",
    "en": "jjoej"
  },
  {
    "kr": "쬧",
    "en": "jjoec"
  },
  {
    "kr": "쬨",
    "en": "jjoek"
  },
  {
    "kr": "쬩",
    "en": "jjoet"
  },
  {
    "kr": "쬪",
    "en": "jjoep"
  },
  {
    "kr": "쬫",
    "en": "jjoeh"
  },
  {
    "kr": "쬬",
    "en": "jjyo"
  },
  {
    "kr": "쬭",
    "en": "jjyog"
  },
  {
    "kr": "쬮",
    "en": "jjyogg"
  },
  {
    "kr": "쬯",
    "en": "jjyogs"
  },
  {
    "kr": "쬰",
    "en": "jjyon"
  },
  {
    "kr": "쬱",
    "en": "jjyonj"
  },
  {
    "kr": "쬲",
    "en": "jjyonh"
  },
  {
    "kr": "쬳",
    "en": "jjyod"
  },
  {
    "kr": "쬴",
    "en": "jjyol"
  },
  {
    "kr": "쬵",
    "en": "jjyolg"
  },
  {
    "kr": "쬶",
    "en": "jjyolm"
  },
  {
    "kr": "쬷",
    "en": "jjyolb"
  },
  {
    "kr": "쬸",
    "en": "jjyols"
  },
  {
    "kr": "쬹",
    "en": "jjyolt"
  },
  {
    "kr": "쬺",
    "en": "jjyolp"
  },
  {
    "kr": "쬻",
    "en": "jjyolh"
  },
  {
    "kr": "쬼",
    "en": "jjyom"
  },
  {
    "kr": "쬽",
    "en": "jjyob"
  },
  {
    "kr": "쬾",
    "en": "jjyobs"
  },
  {
    "kr": "쬿",
    "en": "jjyos"
  },
  {
    "kr": "쭀",
    "en": "jjyoss"
  },
  {
    "kr": "쭁",
    "en": "jjyong"
  },
  {
    "kr": "쭂",
    "en": "jjyoj"
  },
  {
    "kr": "쭃",
    "en": "jjyoc"
  },
  {
    "kr": "쭄",
    "en": "jjyok"
  },
  {
    "kr": "쭅",
    "en": "jjyot"
  },
  {
    "kr": "쭆",
    "en": "jjyop"
  },
  {
    "kr": "쭇",
    "en": "jjyoh"
  },
  {
    "kr": "쭈",
    "en": "jju"
  },
  {
    "kr": "쭉",
    "en": "jjug"
  },
  {
    "kr": "쭊",
    "en": "jjugg"
  },
  {
    "kr": "쭋",
    "en": "jjugs"
  },
  {
    "kr": "쭌",
    "en": "jjun"
  },
  {
    "kr": "쭍",
    "en": "jjunj"
  },
  {
    "kr": "쭎",
    "en": "jjunh"
  },
  {
    "kr": "쭏",
    "en": "jjud"
  },
  {
    "kr": "쭐",
    "en": "jjul"
  },
  {
    "kr": "쭑",
    "en": "jjulg"
  },
  {
    "kr": "쭒",
    "en": "jjulm"
  },
  {
    "kr": "쭓",
    "en": "jjulb"
  },
  {
    "kr": "쭔",
    "en": "jjuls"
  },
  {
    "kr": "쭕",
    "en": "jjult"
  },
  {
    "kr": "쭖",
    "en": "jjulp"
  },
  {
    "kr": "쭗",
    "en": "jjulh"
  },
  {
    "kr": "쭘",
    "en": "jjum"
  },
  {
    "kr": "쭙",
    "en": "jjub"
  },
  {
    "kr": "쭚",
    "en": "jjubs"
  },
  {
    "kr": "쭛",
    "en": "jjus"
  },
  {
    "kr": "쭜",
    "en": "jjuss"
  },
  {
    "kr": "쭝",
    "en": "jjung"
  },
  {
    "kr": "쭞",
    "en": "jjuj"
  },
  {
    "kr": "쭟",
    "en": "jjuc"
  },
  {
    "kr": "쭠",
    "en": "jjuk"
  },
  {
    "kr": "쭡",
    "en": "jjut"
  },
  {
    "kr": "쭢",
    "en": "jjup"
  },
  {
    "kr": "쭣",
    "en": "jjuh"
  },
  {
    "kr": "쭤",
    "en": "jjweo"
  },
  {
    "kr": "쭥",
    "en": "jjweog"
  },
  {
    "kr": "쭦",
    "en": "jjweogg"
  },
  {
    "kr": "쭧",
    "en": "jjweogs"
  },
  {
    "kr": "쭨",
    "en": "jjweon"
  },
  {
    "kr": "쭩",
    "en": "jjweonj"
  },
  {
    "kr": "쭪",
    "en": "jjweonh"
  },
  {
    "kr": "쭫",
    "en": "jjweod"
  },
  {
    "kr": "쭬",
    "en": "jjweol"
  },
  {
    "kr": "쭭",
    "en": "jjweolg"
  },
  {
    "kr": "쭮",
    "en": "jjweolm"
  },
  {
    "kr": "쭯",
    "en": "jjweolb"
  },
  {
    "kr": "쭰",
    "en": "jjweols"
  },
  {
    "kr": "쭱",
    "en": "jjweolt"
  },
  {
    "kr": "쭲",
    "en": "jjweolp"
  },
  {
    "kr": "쭳",
    "en": "jjweolh"
  },
  {
    "kr": "쭴",
    "en": "jjweom"
  },
  {
    "kr": "쭵",
    "en": "jjweob"
  },
  {
    "kr": "쭶",
    "en": "jjweobs"
  },
  {
    "kr": "쭷",
    "en": "jjweos"
  },
  {
    "kr": "쭸",
    "en": "jjweoss"
  },
  {
    "kr": "쭹",
    "en": "jjweong"
  },
  {
    "kr": "쭺",
    "en": "jjweoj"
  },
  {
    "kr": "쭻",
    "en": "jjweoc"
  },
  {
    "kr": "쭼",
    "en": "jjweok"
  },
  {
    "kr": "쭽",
    "en": "jjweot"
  },
  {
    "kr": "쭾",
    "en": "jjweop"
  },
  {
    "kr": "쭿",
    "en": "jjweoh"
  },
  {
    "kr": "쮀",
    "en": "jjwe"
  },
  {
    "kr": "쮁",
    "en": "jjweg"
  },
  {
    "kr": "쮂",
    "en": "jjwegg"
  },
  {
    "kr": "쮃",
    "en": "jjwegs"
  },
  {
    "kr": "쮄",
    "en": "jjwen"
  },
  {
    "kr": "쮅",
    "en": "jjwenj"
  },
  {
    "kr": "쮆",
    "en": "jjwenh"
  },
  {
    "kr": "쮇",
    "en": "jjwed"
  },
  {
    "kr": "쮈",
    "en": "jjwel"
  },
  {
    "kr": "쮉",
    "en": "jjwelg"
  },
  {
    "kr": "쮊",
    "en": "jjwelm"
  },
  {
    "kr": "쮋",
    "en": "jjwelb"
  },
  {
    "kr": "쮌",
    "en": "jjwels"
  },
  {
    "kr": "쮍",
    "en": "jjwelt"
  },
  {
    "kr": "쮎",
    "en": "jjwelp"
  },
  {
    "kr": "쮏",
    "en": "jjwelh"
  },
  {
    "kr": "쮐",
    "en": "jjwem"
  },
  {
    "kr": "쮑",
    "en": "jjweb"
  },
  {
    "kr": "쮒",
    "en": "jjwebs"
  },
  {
    "kr": "쮓",
    "en": "jjwes"
  },
  {
    "kr": "쮔",
    "en": "jjwess"
  },
  {
    "kr": "쮕",
    "en": "jjweng"
  },
  {
    "kr": "쮖",
    "en": "jjwej"
  },
  {
    "kr": "쮗",
    "en": "jjwec"
  },
  {
    "kr": "쮘",
    "en": "jjwek"
  },
  {
    "kr": "쮙",
    "en": "jjwet"
  },
  {
    "kr": "쮚",
    "en": "jjwep"
  },
  {
    "kr": "쮛",
    "en": "jjweh"
  },
  {
    "kr": "쮜",
    "en": "jjwi"
  },
  {
    "kr": "쮝",
    "en": "jjwig"
  },
  {
    "kr": "쮞",
    "en": "jjwigg"
  },
  {
    "kr": "쮟",
    "en": "jjwigs"
  },
  {
    "kr": "쮠",
    "en": "jjwin"
  },
  {
    "kr": "쮡",
    "en": "jjwinj"
  },
  {
    "kr": "쮢",
    "en": "jjwinh"
  },
  {
    "kr": "쮣",
    "en": "jjwid"
  },
  {
    "kr": "쮤",
    "en": "jjwil"
  },
  {
    "kr": "쮥",
    "en": "jjwilg"
  },
  {
    "kr": "쮦",
    "en": "jjwilm"
  },
  {
    "kr": "쮧",
    "en": "jjwilb"
  },
  {
    "kr": "쮨",
    "en": "jjwils"
  },
  {
    "kr": "쮩",
    "en": "jjwilt"
  },
  {
    "kr": "쮪",
    "en": "jjwilp"
  },
  {
    "kr": "쮫",
    "en": "jjwilh"
  },
  {
    "kr": "쮬",
    "en": "jjwim"
  },
  {
    "kr": "쮭",
    "en": "jjwib"
  },
  {
    "kr": "쮮",
    "en": "jjwibs"
  },
  {
    "kr": "쮯",
    "en": "jjwis"
  },
  {
    "kr": "쮰",
    "en": "jjwiss"
  },
  {
    "kr": "쮱",
    "en": "jjwing"
  },
  {
    "kr": "쮲",
    "en": "jjwij"
  },
  {
    "kr": "쮳",
    "en": "jjwic"
  },
  {
    "kr": "쮴",
    "en": "jjwik"
  },
  {
    "kr": "쮵",
    "en": "jjwit"
  },
  {
    "kr": "쮶",
    "en": "jjwip"
  },
  {
    "kr": "쮷",
    "en": "jjwih"
  },
  {
    "kr": "쮸",
    "en": "jjyu"
  },
  {
    "kr": "쮹",
    "en": "jjyug"
  },
  {
    "kr": "쮺",
    "en": "jjyugg"
  },
  {
    "kr": "쮻",
    "en": "jjyugs"
  },
  {
    "kr": "쮼",
    "en": "jjyun"
  },
  {
    "kr": "쮽",
    "en": "jjyunj"
  },
  {
    "kr": "쮾",
    "en": "jjyunh"
  },
  {
    "kr": "쮿",
    "en": "jjyud"
  },
  {
    "kr": "쯀",
    "en": "jjyul"
  },
  {
    "kr": "쯁",
    "en": "jjyulg"
  },
  {
    "kr": "쯂",
    "en": "jjyulm"
  },
  {
    "kr": "쯃",
    "en": "jjyulb"
  },
  {
    "kr": "쯄",
    "en": "jjyuls"
  },
  {
    "kr": "쯅",
    "en": "jjyult"
  },
  {
    "kr": "쯆",
    "en": "jjyulp"
  },
  {
    "kr": "쯇",
    "en": "jjyulh"
  },
  {
    "kr": "쯈",
    "en": "jjyum"
  },
  {
    "kr": "쯉",
    "en": "jjyub"
  },
  {
    "kr": "쯊",
    "en": "jjyubs"
  },
  {
    "kr": "쯋",
    "en": "jjyus"
  },
  {
    "kr": "쯌",
    "en": "jjyuss"
  },
  {
    "kr": "쯍",
    "en": "jjyung"
  },
  {
    "kr": "쯎",
    "en": "jjyuj"
  },
  {
    "kr": "쯏",
    "en": "jjyuc"
  },
  {
    "kr": "쯐",
    "en": "jjyuk"
  },
  {
    "kr": "쯑",
    "en": "jjyut"
  },
  {
    "kr": "쯒",
    "en": "jjyup"
  },
  {
    "kr": "쯓",
    "en": "jjyuh"
  },
  {
    "kr": "쯔",
    "en": "jjeu"
  },
  {
    "kr": "쯕",
    "en": "jjeug"
  },
  {
    "kr": "쯖",
    "en": "jjeugg"
  },
  {
    "kr": "쯗",
    "en": "jjeugs"
  },
  {
    "kr": "쯘",
    "en": "jjeun"
  },
  {
    "kr": "쯙",
    "en": "jjeunj"
  },
  {
    "kr": "쯚",
    "en": "jjeunh"
  },
  {
    "kr": "쯛",
    "en": "jjeud"
  },
  {
    "kr": "쯜",
    "en": "jjeul"
  },
  {
    "kr": "쯝",
    "en": "jjeulg"
  },
  {
    "kr": "쯞",
    "en": "jjeulm"
  },
  {
    "kr": "쯟",
    "en": "jjeulb"
  },
  {
    "kr": "쯠",
    "en": "jjeuls"
  },
  {
    "kr": "쯡",
    "en": "jjeult"
  },
  {
    "kr": "쯢",
    "en": "jjeulp"
  },
  {
    "kr": "쯣",
    "en": "jjeulh"
  },
  {
    "kr": "쯤",
    "en": "jjeum"
  },
  {
    "kr": "쯥",
    "en": "jjeub"
  },
  {
    "kr": "쯦",
    "en": "jjeubs"
  },
  {
    "kr": "쯧",
    "en": "jjeus"
  },
  {
    "kr": "쯨",
    "en": "jjeuss"
  },
  {
    "kr": "쯩",
    "en": "jjeung"
  },
  {
    "kr": "쯪",
    "en": "jjeuj"
  },
  {
    "kr": "쯫",
    "en": "jjeuc"
  },
  {
    "kr": "쯬",
    "en": "jjeuk"
  },
  {
    "kr": "쯭",
    "en": "jjeut"
  },
  {
    "kr": "쯮",
    "en": "jjeup"
  },
  {
    "kr": "쯯",
    "en": "jjeuh"
  },
  {
    "kr": "쯰",
    "en": "jjyi"
  },
  {
    "kr": "쯱",
    "en": "jjyig"
  },
  {
    "kr": "쯲",
    "en": "jjyigg"
  },
  {
    "kr": "쯳",
    "en": "jjyigs"
  },
  {
    "kr": "쯴",
    "en": "jjyin"
  },
  {
    "kr": "쯵",
    "en": "jjyinj"
  },
  {
    "kr": "쯶",
    "en": "jjyinh"
  },
  {
    "kr": "쯷",
    "en": "jjyid"
  },
  {
    "kr": "쯸",
    "en": "jjyil"
  },
  {
    "kr": "쯹",
    "en": "jjyilg"
  },
  {
    "kr": "쯺",
    "en": "jjyilm"
  },
  {
    "kr": "쯻",
    "en": "jjyilb"
  },
  {
    "kr": "쯼",
    "en": "jjyils"
  },
  {
    "kr": "쯽",
    "en": "jjyilt"
  },
  {
    "kr": "쯾",
    "en": "jjyilp"
  },
  {
    "kr": "쯿",
    "en": "jjyilh"
  },
  {
    "kr": "찀",
    "en": "jjyim"
  },
  {
    "kr": "찁",
    "en": "jjyib"
  },
  {
    "kr": "찂",
    "en": "jjyibs"
  },
  {
    "kr": "찃",
    "en": "jjyis"
  },
  {
    "kr": "찄",
    "en": "jjyiss"
  },
  {
    "kr": "찅",
    "en": "jjying"
  },
  {
    "kr": "찆",
    "en": "jjyij"
  },
  {
    "kr": "찇",
    "en": "jjyic"
  },
  {
    "kr": "찈",
    "en": "jjyik"
  },
  {
    "kr": "찉",
    "en": "jjyit"
  },
  {
    "kr": "찊",
    "en": "jjyip"
  },
  {
    "kr": "찋",
    "en": "jjyih"
  },
  {
    "kr": "찌",
    "en": "jji"
  },
  {
    "kr": "찍",
    "en": "jjig"
  },
  {
    "kr": "찎",
    "en": "jjigg"
  },
  {
    "kr": "찏",
    "en": "jjigs"
  },
  {
    "kr": "찐",
    "en": "jjin"
  },
  {
    "kr": "찑",
    "en": "jjinj"
  },
  {
    "kr": "찒",
    "en": "jjinh"
  },
  {
    "kr": "찓",
    "en": "jjid"
  },
  {
    "kr": "찔",
    "en": "jjil"
  },
  {
    "kr": "찕",
    "en": "jjilg"
  },
  {
    "kr": "찖",
    "en": "jjilm"
  },
  {
    "kr": "찗",
    "en": "jjilb"
  },
  {
    "kr": "찘",
    "en": "jjils"
  },
  {
    "kr": "찙",
    "en": "jjilt"
  },
  {
    "kr": "찚",
    "en": "jjilp"
  },
  {
    "kr": "찛",
    "en": "jjilh"
  },
  {
    "kr": "찜",
    "en": "jjim"
  },
  {
    "kr": "찝",
    "en": "jjib"
  },
  {
    "kr": "찞",
    "en": "jjibs"
  },
  {
    "kr": "찟",
    "en": "jjis"
  },
  {
    "kr": "찠",
    "en": "jjiss"
  },
  {
    "kr": "찡",
    "en": "jjing"
  },
  {
    "kr": "찢",
    "en": "jjij"
  },
  {
    "kr": "찣",
    "en": "jjic"
  },
  {
    "kr": "찤",
    "en": "jjik"
  },
  {
    "kr": "찥",
    "en": "jjit"
  },
  {
    "kr": "찦",
    "en": "jjip"
  },
  {
    "kr": "찧",
    "en": "jjih"
  },
  {
    "kr": "차",
    "en": "ca"
  },
  {
    "kr": "착",
    "en": "cag"
  },
  {
    "kr": "찪",
    "en": "cagg"
  },
  {
    "kr": "찫",
    "en": "cags"
  },
  {
    "kr": "찬",
    "en": "can"
  },
  {
    "kr": "찭",
    "en": "canj"
  },
  {
    "kr": "찮",
    "en": "canh"
  },
  {
    "kr": "찯",
    "en": "cad"
  },
  {
    "kr": "찰",
    "en": "cal"
  },
  {
    "kr": "찱",
    "en": "calg"
  },
  {
    "kr": "찲",
    "en": "calm"
  },
  {
    "kr": "찳",
    "en": "calb"
  },
  {
    "kr": "찴",
    "en": "cals"
  },
  {
    "kr": "찵",
    "en": "calt"
  },
  {
    "kr": "찶",
    "en": "calp"
  },
  {
    "kr": "찷",
    "en": "calh"
  },
  {
    "kr": "참",
    "en": "cam"
  },
  {
    "kr": "찹",
    "en": "cab"
  },
  {
    "kr": "찺",
    "en": "cabs"
  },
  {
    "kr": "찻",
    "en": "cas"
  },
  {
    "kr": "찼",
    "en": "cass"
  },
  {
    "kr": "창",
    "en": "cang"
  },
  {
    "kr": "찾",
    "en": "caj"
  },
  {
    "kr": "찿",
    "en": "cac"
  },
  {
    "kr": "챀",
    "en": "cak"
  },
  {
    "kr": "챁",
    "en": "cat"
  },
  {
    "kr": "챂",
    "en": "cap"
  },
  {
    "kr": "챃",
    "en": "cah"
  },
  {
    "kr": "채",
    "en": "cae"
  },
  {
    "kr": "책",
    "en": "caeg"
  },
  {
    "kr": "챆",
    "en": "caegg"
  },
  {
    "kr": "챇",
    "en": "caegs"
  },
  {
    "kr": "챈",
    "en": "caen"
  },
  {
    "kr": "챉",
    "en": "caenj"
  },
  {
    "kr": "챊",
    "en": "caenh"
  },
  {
    "kr": "챋",
    "en": "caed"
  },
  {
    "kr": "챌",
    "en": "cael"
  },
  {
    "kr": "챍",
    "en": "caelg"
  },
  {
    "kr": "챎",
    "en": "caelm"
  },
  {
    "kr": "챏",
    "en": "caelb"
  },
  {
    "kr": "챐",
    "en": "caels"
  },
  {
    "kr": "챑",
    "en": "caelt"
  },
  {
    "kr": "챒",
    "en": "caelp"
  },
  {
    "kr": "챓",
    "en": "caelh"
  },
  {
    "kr": "챔",
    "en": "caem"
  },
  {
    "kr": "챕",
    "en": "caeb"
  },
  {
    "kr": "챖",
    "en": "caebs"
  },
  {
    "kr": "챗",
    "en": "caes"
  },
  {
    "kr": "챘",
    "en": "caess"
  },
  {
    "kr": "챙",
    "en": "caeng"
  },
  {
    "kr": "챚",
    "en": "caej"
  },
  {
    "kr": "챛",
    "en": "caec"
  },
  {
    "kr": "챜",
    "en": "caek"
  },
  {
    "kr": "챝",
    "en": "caet"
  },
  {
    "kr": "챞",
    "en": "caep"
  },
  {
    "kr": "챟",
    "en": "caeh"
  },
  {
    "kr": "챠",
    "en": "cya"
  },
  {
    "kr": "챡",
    "en": "cyag"
  },
  {
    "kr": "챢",
    "en": "cyagg"
  },
  {
    "kr": "챣",
    "en": "cyags"
  },
  {
    "kr": "챤",
    "en": "cyan"
  },
  {
    "kr": "챥",
    "en": "cyanj"
  },
  {
    "kr": "챦",
    "en": "cyanh"
  },
  {
    "kr": "챧",
    "en": "cyad"
  },
  {
    "kr": "챨",
    "en": "cyal"
  },
  {
    "kr": "챩",
    "en": "cyalg"
  },
  {
    "kr": "챪",
    "en": "cyalm"
  },
  {
    "kr": "챫",
    "en": "cyalb"
  },
  {
    "kr": "챬",
    "en": "cyals"
  },
  {
    "kr": "챭",
    "en": "cyalt"
  },
  {
    "kr": "챮",
    "en": "cyalp"
  },
  {
    "kr": "챯",
    "en": "cyalh"
  },
  {
    "kr": "챰",
    "en": "cyam"
  },
  {
    "kr": "챱",
    "en": "cyab"
  },
  {
    "kr": "챲",
    "en": "cyabs"
  },
  {
    "kr": "챳",
    "en": "cyas"
  },
  {
    "kr": "챴",
    "en": "cyass"
  },
  {
    "kr": "챵",
    "en": "cyang"
  },
  {
    "kr": "챶",
    "en": "cyaj"
  },
  {
    "kr": "챷",
    "en": "cyac"
  },
  {
    "kr": "챸",
    "en": "cyak"
  },
  {
    "kr": "챹",
    "en": "cyat"
  },
  {
    "kr": "챺",
    "en": "cyap"
  },
  {
    "kr": "챻",
    "en": "cyah"
  },
  {
    "kr": "챼",
    "en": "cyae"
  },
  {
    "kr": "챽",
    "en": "cyaeg"
  },
  {
    "kr": "챾",
    "en": "cyaegg"
  },
  {
    "kr": "챿",
    "en": "cyaegs"
  },
  {
    "kr": "첀",
    "en": "cyaen"
  },
  {
    "kr": "첁",
    "en": "cyaenj"
  },
  {
    "kr": "첂",
    "en": "cyaenh"
  },
  {
    "kr": "첃",
    "en": "cyaed"
  },
  {
    "kr": "첄",
    "en": "cyael"
  },
  {
    "kr": "첅",
    "en": "cyaelg"
  },
  {
    "kr": "첆",
    "en": "cyaelm"
  },
  {
    "kr": "첇",
    "en": "cyaelb"
  },
  {
    "kr": "첈",
    "en": "cyaels"
  },
  {
    "kr": "첉",
    "en": "cyaelt"
  },
  {
    "kr": "첊",
    "en": "cyaelp"
  },
  {
    "kr": "첋",
    "en": "cyaelh"
  },
  {
    "kr": "첌",
    "en": "cyaem"
  },
  {
    "kr": "첍",
    "en": "cyaeb"
  },
  {
    "kr": "첎",
    "en": "cyaebs"
  },
  {
    "kr": "첏",
    "en": "cyaes"
  },
  {
    "kr": "첐",
    "en": "cyaess"
  },
  {
    "kr": "첑",
    "en": "cyaeng"
  },
  {
    "kr": "첒",
    "en": "cyaej"
  },
  {
    "kr": "첓",
    "en": "cyaec"
  },
  {
    "kr": "첔",
    "en": "cyaek"
  },
  {
    "kr": "첕",
    "en": "cyaet"
  },
  {
    "kr": "첖",
    "en": "cyaep"
  },
  {
    "kr": "첗",
    "en": "cyaeh"
  },
  {
    "kr": "처",
    "en": "ceo"
  },
  {
    "kr": "척",
    "en": "ceog"
  },
  {
    "kr": "첚",
    "en": "ceogg"
  },
  {
    "kr": "첛",
    "en": "ceogs"
  },
  {
    "kr": "천",
    "en": "ceon"
  },
  {
    "kr": "첝",
    "en": "ceonj"
  },
  {
    "kr": "첞",
    "en": "ceonh"
  },
  {
    "kr": "첟",
    "en": "ceod"
  },
  {
    "kr": "철",
    "en": "ceol"
  },
  {
    "kr": "첡",
    "en": "ceolg"
  },
  {
    "kr": "첢",
    "en": "ceolm"
  },
  {
    "kr": "첣",
    "en": "ceolb"
  },
  {
    "kr": "첤",
    "en": "ceols"
  },
  {
    "kr": "첥",
    "en": "ceolt"
  },
  {
    "kr": "첦",
    "en": "ceolp"
  },
  {
    "kr": "첧",
    "en": "ceolh"
  },
  {
    "kr": "첨",
    "en": "ceom"
  },
  {
    "kr": "첩",
    "en": "ceob"
  },
  {
    "kr": "첪",
    "en": "ceobs"
  },
  {
    "kr": "첫",
    "en": "ceos"
  },
  {
    "kr": "첬",
    "en": "ceoss"
  },
  {
    "kr": "청",
    "en": "ceong"
  },
  {
    "kr": "첮",
    "en": "ceoj"
  },
  {
    "kr": "첯",
    "en": "ceoc"
  },
  {
    "kr": "첰",
    "en": "ceok"
  },
  {
    "kr": "첱",
    "en": "ceot"
  },
  {
    "kr": "첲",
    "en": "ceop"
  },
  {
    "kr": "첳",
    "en": "ceoh"
  },
  {
    "kr": "체",
    "en": "ce"
  },
  {
    "kr": "첵",
    "en": "ceg"
  },
  {
    "kr": "첶",
    "en": "cegg"
  },
  {
    "kr": "첷",
    "en": "cegs"
  },
  {
    "kr": "첸",
    "en": "cen"
  },
  {
    "kr": "첹",
    "en": "cenj"
  },
  {
    "kr": "첺",
    "en": "cenh"
  },
  {
    "kr": "첻",
    "en": "ced"
  },
  {
    "kr": "첼",
    "en": "cel"
  },
  {
    "kr": "첽",
    "en": "celg"
  },
  {
    "kr": "첾",
    "en": "celm"
  },
  {
    "kr": "첿",
    "en": "celb"
  },
  {
    "kr": "쳀",
    "en": "cels"
  },
  {
    "kr": "쳁",
    "en": "celt"
  },
  {
    "kr": "쳂",
    "en": "celp"
  },
  {
    "kr": "쳃",
    "en": "celh"
  },
  {
    "kr": "쳄",
    "en": "cem"
  },
  {
    "kr": "쳅",
    "en": "ceb"
  },
  {
    "kr": "쳆",
    "en": "cebs"
  },
  {
    "kr": "쳇",
    "en": "ces"
  },
  {
    "kr": "쳈",
    "en": "cess"
  },
  {
    "kr": "쳉",
    "en": "ceng"
  },
  {
    "kr": "쳊",
    "en": "cej"
  },
  {
    "kr": "쳋",
    "en": "cec"
  },
  {
    "kr": "쳌",
    "en": "cek"
  },
  {
    "kr": "쳍",
    "en": "cet"
  },
  {
    "kr": "쳎",
    "en": "cep"
  },
  {
    "kr": "쳏",
    "en": "ceh"
  },
  {
    "kr": "쳐",
    "en": "cyeo"
  },
  {
    "kr": "쳑",
    "en": "cyeog"
  },
  {
    "kr": "쳒",
    "en": "cyeogg"
  },
  {
    "kr": "쳓",
    "en": "cyeogs"
  },
  {
    "kr": "쳔",
    "en": "cyeon"
  },
  {
    "kr": "쳕",
    "en": "cyeonj"
  },
  {
    "kr": "쳖",
    "en": "cyeonh"
  },
  {
    "kr": "쳗",
    "en": "cyeod"
  },
  {
    "kr": "쳘",
    "en": "cyeol"
  },
  {
    "kr": "쳙",
    "en": "cyeolg"
  },
  {
    "kr": "쳚",
    "en": "cyeolm"
  },
  {
    "kr": "쳛",
    "en": "cyeolb"
  },
  {
    "kr": "쳜",
    "en": "cyeols"
  },
  {
    "kr": "쳝",
    "en": "cyeolt"
  },
  {
    "kr": "쳞",
    "en": "cyeolp"
  },
  {
    "kr": "쳟",
    "en": "cyeolh"
  },
  {
    "kr": "쳠",
    "en": "cyeom"
  },
  {
    "kr": "쳡",
    "en": "cyeob"
  },
  {
    "kr": "쳢",
    "en": "cyeobs"
  },
  {
    "kr": "쳣",
    "en": "cyeos"
  },
  {
    "kr": "쳤",
    "en": "cyeoss"
  },
  {
    "kr": "쳥",
    "en": "cyeong"
  },
  {
    "kr": "쳦",
    "en": "cyeoj"
  },
  {
    "kr": "쳧",
    "en": "cyeoc"
  },
  {
    "kr": "쳨",
    "en": "cyeok"
  },
  {
    "kr": "쳩",
    "en": "cyeot"
  },
  {
    "kr": "쳪",
    "en": "cyeop"
  },
  {
    "kr": "쳫",
    "en": "cyeoh"
  },
  {
    "kr": "쳬",
    "en": "cye"
  },
  {
    "kr": "쳭",
    "en": "cyeg"
  },
  {
    "kr": "쳮",
    "en": "cyegg"
  },
  {
    "kr": "쳯",
    "en": "cyegs"
  },
  {
    "kr": "쳰",
    "en": "cyen"
  },
  {
    "kr": "쳱",
    "en": "cyenj"
  },
  {
    "kr": "쳲",
    "en": "cyenh"
  },
  {
    "kr": "쳳",
    "en": "cyed"
  },
  {
    "kr": "쳴",
    "en": "cyel"
  },
  {
    "kr": "쳵",
    "en": "cyelg"
  },
  {
    "kr": "쳶",
    "en": "cyelm"
  },
  {
    "kr": "쳷",
    "en": "cyelb"
  },
  {
    "kr": "쳸",
    "en": "cyels"
  },
  {
    "kr": "쳹",
    "en": "cyelt"
  },
  {
    "kr": "쳺",
    "en": "cyelp"
  },
  {
    "kr": "쳻",
    "en": "cyelh"
  },
  {
    "kr": "쳼",
    "en": "cyem"
  },
  {
    "kr": "쳽",
    "en": "cyeb"
  },
  {
    "kr": "쳾",
    "en": "cyebs"
  },
  {
    "kr": "쳿",
    "en": "cyes"
  },
  {
    "kr": "촀",
    "en": "cyess"
  },
  {
    "kr": "촁",
    "en": "cyeng"
  },
  {
    "kr": "촂",
    "en": "cyej"
  },
  {
    "kr": "촃",
    "en": "cyec"
  },
  {
    "kr": "촄",
    "en": "cyek"
  },
  {
    "kr": "촅",
    "en": "cyet"
  },
  {
    "kr": "촆",
    "en": "cyep"
  },
  {
    "kr": "촇",
    "en": "cyeh"
  },
  {
    "kr": "초",
    "en": "co"
  },
  {
    "kr": "촉",
    "en": "cog"
  },
  {
    "kr": "촊",
    "en": "cogg"
  },
  {
    "kr": "촋",
    "en": "cogs"
  },
  {
    "kr": "촌",
    "en": "con"
  },
  {
    "kr": "촍",
    "en": "conj"
  },
  {
    "kr": "촎",
    "en": "conh"
  },
  {
    "kr": "촏",
    "en": "cod"
  },
  {
    "kr": "촐",
    "en": "col"
  },
  {
    "kr": "촑",
    "en": "colg"
  },
  {
    "kr": "촒",
    "en": "colm"
  },
  {
    "kr": "촓",
    "en": "colb"
  },
  {
    "kr": "촔",
    "en": "cols"
  },
  {
    "kr": "촕",
    "en": "colt"
  },
  {
    "kr": "촖",
    "en": "colp"
  },
  {
    "kr": "촗",
    "en": "colh"
  },
  {
    "kr": "촘",
    "en": "com"
  },
  {
    "kr": "촙",
    "en": "cob"
  },
  {
    "kr": "촚",
    "en": "cobs"
  },
  {
    "kr": "촛",
    "en": "cos"
  },
  {
    "kr": "촜",
    "en": "coss"
  },
  {
    "kr": "총",
    "en": "cong"
  },
  {
    "kr": "촞",
    "en": "coj"
  },
  {
    "kr": "촟",
    "en": "coc"
  },
  {
    "kr": "촠",
    "en": "cok"
  },
  {
    "kr": "촡",
    "en": "cot"
  },
  {
    "kr": "촢",
    "en": "cop"
  },
  {
    "kr": "촣",
    "en": "coh"
  },
  {
    "kr": "촤",
    "en": "cwa"
  },
  {
    "kr": "촥",
    "en": "cwag"
  },
  {
    "kr": "촦",
    "en": "cwagg"
  },
  {
    "kr": "촧",
    "en": "cwags"
  },
  {
    "kr": "촨",
    "en": "cwan"
  },
  {
    "kr": "촩",
    "en": "cwanj"
  },
  {
    "kr": "촪",
    "en": "cwanh"
  },
  {
    "kr": "촫",
    "en": "cwad"
  },
  {
    "kr": "촬",
    "en": "cwal"
  },
  {
    "kr": "촭",
    "en": "cwalg"
  },
  {
    "kr": "촮",
    "en": "cwalm"
  },
  {
    "kr": "촯",
    "en": "cwalb"
  },
  {
    "kr": "촰",
    "en": "cwals"
  },
  {
    "kr": "촱",
    "en": "cwalt"
  },
  {
    "kr": "촲",
    "en": "cwalp"
  },
  {
    "kr": "촳",
    "en": "cwalh"
  },
  {
    "kr": "촴",
    "en": "cwam"
  },
  {
    "kr": "촵",
    "en": "cwab"
  },
  {
    "kr": "촶",
    "en": "cwabs"
  },
  {
    "kr": "촷",
    "en": "cwas"
  },
  {
    "kr": "촸",
    "en": "cwass"
  },
  {
    "kr": "촹",
    "en": "cwang"
  },
  {
    "kr": "촺",
    "en": "cwaj"
  },
  {
    "kr": "촻",
    "en": "cwac"
  },
  {
    "kr": "촼",
    "en": "cwak"
  },
  {
    "kr": "촽",
    "en": "cwat"
  },
  {
    "kr": "촾",
    "en": "cwap"
  },
  {
    "kr": "촿",
    "en": "cwah"
  },
  {
    "kr": "쵀",
    "en": "cwae"
  },
  {
    "kr": "쵁",
    "en": "cwaeg"
  },
  {
    "kr": "쵂",
    "en": "cwaegg"
  },
  {
    "kr": "쵃",
    "en": "cwaegs"
  },
  {
    "kr": "쵄",
    "en": "cwaen"
  },
  {
    "kr": "쵅",
    "en": "cwaenj"
  },
  {
    "kr": "쵆",
    "en": "cwaenh"
  },
  {
    "kr": "쵇",
    "en": "cwaed"
  },
  {
    "kr": "쵈",
    "en": "cwael"
  },
  {
    "kr": "쵉",
    "en": "cwaelg"
  },
  {
    "kr": "쵊",
    "en": "cwaelm"
  },
  {
    "kr": "쵋",
    "en": "cwaelb"
  },
  {
    "kr": "쵌",
    "en": "cwaels"
  },
  {
    "kr": "쵍",
    "en": "cwaelt"
  },
  {
    "kr": "쵎",
    "en": "cwaelp"
  },
  {
    "kr": "쵏",
    "en": "cwaelh"
  },
  {
    "kr": "쵐",
    "en": "cwaem"
  },
  {
    "kr": "쵑",
    "en": "cwaeb"
  },
  {
    "kr": "쵒",
    "en": "cwaebs"
  },
  {
    "kr": "쵓",
    "en": "cwaes"
  },
  {
    "kr": "쵔",
    "en": "cwaess"
  },
  {
    "kr": "쵕",
    "en": "cwaeng"
  },
  {
    "kr": "쵖",
    "en": "cwaej"
  },
  {
    "kr": "쵗",
    "en": "cwaec"
  },
  {
    "kr": "쵘",
    "en": "cwaek"
  },
  {
    "kr": "쵙",
    "en": "cwaet"
  },
  {
    "kr": "쵚",
    "en": "cwaep"
  },
  {
    "kr": "쵛",
    "en": "cwaeh"
  },
  {
    "kr": "최",
    "en": "coe"
  },
  {
    "kr": "쵝",
    "en": "coeg"
  },
  {
    "kr": "쵞",
    "en": "coegg"
  },
  {
    "kr": "쵟",
    "en": "coegs"
  },
  {
    "kr": "쵠",
    "en": "coen"
  },
  {
    "kr": "쵡",
    "en": "coenj"
  },
  {
    "kr": "쵢",
    "en": "coenh"
  },
  {
    "kr": "쵣",
    "en": "coed"
  },
  {
    "kr": "쵤",
    "en": "coel"
  },
  {
    "kr": "쵥",
    "en": "coelg"
  },
  {
    "kr": "쵦",
    "en": "coelm"
  },
  {
    "kr": "쵧",
    "en": "coelb"
  },
  {
    "kr": "쵨",
    "en": "coels"
  },
  {
    "kr": "쵩",
    "en": "coelt"
  },
  {
    "kr": "쵪",
    "en": "coelp"
  },
  {
    "kr": "쵫",
    "en": "coelh"
  },
  {
    "kr": "쵬",
    "en": "coem"
  },
  {
    "kr": "쵭",
    "en": "coeb"
  },
  {
    "kr": "쵮",
    "en": "coebs"
  },
  {
    "kr": "쵯",
    "en": "coes"
  },
  {
    "kr": "쵰",
    "en": "coess"
  },
  {
    "kr": "쵱",
    "en": "coeng"
  },
  {
    "kr": "쵲",
    "en": "coej"
  },
  {
    "kr": "쵳",
    "en": "coec"
  },
  {
    "kr": "쵴",
    "en": "coek"
  },
  {
    "kr": "쵵",
    "en": "coet"
  },
  {
    "kr": "쵶",
    "en": "coep"
  },
  {
    "kr": "쵷",
    "en": "coeh"
  },
  {
    "kr": "쵸",
    "en": "cyo"
  },
  {
    "kr": "쵹",
    "en": "cyog"
  },
  {
    "kr": "쵺",
    "en": "cyogg"
  },
  {
    "kr": "쵻",
    "en": "cyogs"
  },
  {
    "kr": "쵼",
    "en": "cyon"
  },
  {
    "kr": "쵽",
    "en": "cyonj"
  },
  {
    "kr": "쵾",
    "en": "cyonh"
  },
  {
    "kr": "쵿",
    "en": "cyod"
  },
  {
    "kr": "춀",
    "en": "cyol"
  },
  {
    "kr": "춁",
    "en": "cyolg"
  },
  {
    "kr": "춂",
    "en": "cyolm"
  },
  {
    "kr": "춃",
    "en": "cyolb"
  },
  {
    "kr": "춄",
    "en": "cyols"
  },
  {
    "kr": "춅",
    "en": "cyolt"
  },
  {
    "kr": "춆",
    "en": "cyolp"
  },
  {
    "kr": "춇",
    "en": "cyolh"
  },
  {
    "kr": "춈",
    "en": "cyom"
  },
  {
    "kr": "춉",
    "en": "cyob"
  },
  {
    "kr": "춊",
    "en": "cyobs"
  },
  {
    "kr": "춋",
    "en": "cyos"
  },
  {
    "kr": "춌",
    "en": "cyoss"
  },
  {
    "kr": "춍",
    "en": "cyong"
  },
  {
    "kr": "춎",
    "en": "cyoj"
  },
  {
    "kr": "춏",
    "en": "cyoc"
  },
  {
    "kr": "춐",
    "en": "cyok"
  },
  {
    "kr": "춑",
    "en": "cyot"
  },
  {
    "kr": "춒",
    "en": "cyop"
  },
  {
    "kr": "춓",
    "en": "cyoh"
  },
  {
    "kr": "추",
    "en": "cu"
  },
  {
    "kr": "축",
    "en": "cug"
  },
  {
    "kr": "춖",
    "en": "cugg"
  },
  {
    "kr": "춗",
    "en": "cugs"
  },
  {
    "kr": "춘",
    "en": "cun"
  },
  {
    "kr": "춙",
    "en": "cunj"
  },
  {
    "kr": "춚",
    "en": "cunh"
  },
  {
    "kr": "춛",
    "en": "cud"
  },
  {
    "kr": "출",
    "en": "cul"
  },
  {
    "kr": "춝",
    "en": "culg"
  },
  {
    "kr": "춞",
    "en": "culm"
  },
  {
    "kr": "춟",
    "en": "culb"
  },
  {
    "kr": "춠",
    "en": "culs"
  },
  {
    "kr": "춡",
    "en": "cult"
  },
  {
    "kr": "춢",
    "en": "culp"
  },
  {
    "kr": "춣",
    "en": "culh"
  },
  {
    "kr": "춤",
    "en": "cum"
  },
  {
    "kr": "춥",
    "en": "cub"
  },
  {
    "kr": "춦",
    "en": "cubs"
  },
  {
    "kr": "춧",
    "en": "cus"
  },
  {
    "kr": "춨",
    "en": "cuss"
  },
  {
    "kr": "충",
    "en": "cung"
  },
  {
    "kr": "춪",
    "en": "cuj"
  },
  {
    "kr": "춫",
    "en": "cuc"
  },
  {
    "kr": "춬",
    "en": "cuk"
  },
  {
    "kr": "춭",
    "en": "cut"
  },
  {
    "kr": "춮",
    "en": "cup"
  },
  {
    "kr": "춯",
    "en": "cuh"
  },
  {
    "kr": "춰",
    "en": "cweo"
  },
  {
    "kr": "춱",
    "en": "cweog"
  },
  {
    "kr": "춲",
    "en": "cweogg"
  },
  {
    "kr": "춳",
    "en": "cweogs"
  },
  {
    "kr": "춴",
    "en": "cweon"
  },
  {
    "kr": "춵",
    "en": "cweonj"
  },
  {
    "kr": "춶",
    "en": "cweonh"
  },
  {
    "kr": "춷",
    "en": "cweod"
  },
  {
    "kr": "춸",
    "en": "cweol"
  },
  {
    "kr": "춹",
    "en": "cweolg"
  },
  {
    "kr": "춺",
    "en": "cweolm"
  },
  {
    "kr": "춻",
    "en": "cweolb"
  },
  {
    "kr": "춼",
    "en": "cweols"
  },
  {
    "kr": "춽",
    "en": "cweolt"
  },
  {
    "kr": "춾",
    "en": "cweolp"
  },
  {
    "kr": "춿",
    "en": "cweolh"
  },
  {
    "kr": "췀",
    "en": "cweom"
  },
  {
    "kr": "췁",
    "en": "cweob"
  },
  {
    "kr": "췂",
    "en": "cweobs"
  },
  {
    "kr": "췃",
    "en": "cweos"
  },
  {
    "kr": "췄",
    "en": "cweoss"
  },
  {
    "kr": "췅",
    "en": "cweong"
  },
  {
    "kr": "췆",
    "en": "cweoj"
  },
  {
    "kr": "췇",
    "en": "cweoc"
  },
  {
    "kr": "췈",
    "en": "cweok"
  },
  {
    "kr": "췉",
    "en": "cweot"
  },
  {
    "kr": "췊",
    "en": "cweop"
  },
  {
    "kr": "췋",
    "en": "cweoh"
  },
  {
    "kr": "췌",
    "en": "cwe"
  },
  {
    "kr": "췍",
    "en": "cweg"
  },
  {
    "kr": "췎",
    "en": "cwegg"
  },
  {
    "kr": "췏",
    "en": "cwegs"
  },
  {
    "kr": "췐",
    "en": "cwen"
  },
  {
    "kr": "췑",
    "en": "cwenj"
  },
  {
    "kr": "췒",
    "en": "cwenh"
  },
  {
    "kr": "췓",
    "en": "cwed"
  },
  {
    "kr": "췔",
    "en": "cwel"
  },
  {
    "kr": "췕",
    "en": "cwelg"
  },
  {
    "kr": "췖",
    "en": "cwelm"
  },
  {
    "kr": "췗",
    "en": "cwelb"
  },
  {
    "kr": "췘",
    "en": "cwels"
  },
  {
    "kr": "췙",
    "en": "cwelt"
  },
  {
    "kr": "췚",
    "en": "cwelp"
  },
  {
    "kr": "췛",
    "en": "cwelh"
  },
  {
    "kr": "췜",
    "en": "cwem"
  },
  {
    "kr": "췝",
    "en": "cweb"
  },
  {
    "kr": "췞",
    "en": "cwebs"
  },
  {
    "kr": "췟",
    "en": "cwes"
  },
  {
    "kr": "췠",
    "en": "cwess"
  },
  {
    "kr": "췡",
    "en": "cweng"
  },
  {
    "kr": "췢",
    "en": "cwej"
  },
  {
    "kr": "췣",
    "en": "cwec"
  },
  {
    "kr": "췤",
    "en": "cwek"
  },
  {
    "kr": "췥",
    "en": "cwet"
  },
  {
    "kr": "췦",
    "en": "cwep"
  },
  {
    "kr": "췧",
    "en": "cweh"
  },
  {
    "kr": "취",
    "en": "cwi"
  },
  {
    "kr": "췩",
    "en": "cwig"
  },
  {
    "kr": "췪",
    "en": "cwigg"
  },
  {
    "kr": "췫",
    "en": "cwigs"
  },
  {
    "kr": "췬",
    "en": "cwin"
  },
  {
    "kr": "췭",
    "en": "cwinj"
  },
  {
    "kr": "췮",
    "en": "cwinh"
  },
  {
    "kr": "췯",
    "en": "cwid"
  },
  {
    "kr": "췰",
    "en": "cwil"
  },
  {
    "kr": "췱",
    "en": "cwilg"
  },
  {
    "kr": "췲",
    "en": "cwilm"
  },
  {
    "kr": "췳",
    "en": "cwilb"
  },
  {
    "kr": "췴",
    "en": "cwils"
  },
  {
    "kr": "췵",
    "en": "cwilt"
  },
  {
    "kr": "췶",
    "en": "cwilp"
  },
  {
    "kr": "췷",
    "en": "cwilh"
  },
  {
    "kr": "췸",
    "en": "cwim"
  },
  {
    "kr": "췹",
    "en": "cwib"
  },
  {
    "kr": "췺",
    "en": "cwibs"
  },
  {
    "kr": "췻",
    "en": "cwis"
  },
  {
    "kr": "췼",
    "en": "cwiss"
  },
  {
    "kr": "췽",
    "en": "cwing"
  },
  {
    "kr": "췾",
    "en": "cwij"
  },
  {
    "kr": "췿",
    "en": "cwic"
  },
  {
    "kr": "츀",
    "en": "cwik"
  },
  {
    "kr": "츁",
    "en": "cwit"
  },
  {
    "kr": "츂",
    "en": "cwip"
  },
  {
    "kr": "츃",
    "en": "cwih"
  },
  {
    "kr": "츄",
    "en": "cyu"
  },
  {
    "kr": "츅",
    "en": "cyug"
  },
  {
    "kr": "츆",
    "en": "cyugg"
  },
  {
    "kr": "츇",
    "en": "cyugs"
  },
  {
    "kr": "츈",
    "en": "cyun"
  },
  {
    "kr": "츉",
    "en": "cyunj"
  },
  {
    "kr": "츊",
    "en": "cyunh"
  },
  {
    "kr": "츋",
    "en": "cyud"
  },
  {
    "kr": "츌",
    "en": "cyul"
  },
  {
    "kr": "츍",
    "en": "cyulg"
  },
  {
    "kr": "츎",
    "en": "cyulm"
  },
  {
    "kr": "츏",
    "en": "cyulb"
  },
  {
    "kr": "츐",
    "en": "cyuls"
  },
  {
    "kr": "츑",
    "en": "cyult"
  },
  {
    "kr": "츒",
    "en": "cyulp"
  },
  {
    "kr": "츓",
    "en": "cyulh"
  },
  {
    "kr": "츔",
    "en": "cyum"
  },
  {
    "kr": "츕",
    "en": "cyub"
  },
  {
    "kr": "츖",
    "en": "cyubs"
  },
  {
    "kr": "츗",
    "en": "cyus"
  },
  {
    "kr": "츘",
    "en": "cyuss"
  },
  {
    "kr": "츙",
    "en": "cyung"
  },
  {
    "kr": "츚",
    "en": "cyuj"
  },
  {
    "kr": "츛",
    "en": "cyuc"
  },
  {
    "kr": "츜",
    "en": "cyuk"
  },
  {
    "kr": "츝",
    "en": "cyut"
  },
  {
    "kr": "츞",
    "en": "cyup"
  },
  {
    "kr": "츟",
    "en": "cyuh"
  },
  {
    "kr": "츠",
    "en": "ceu"
  },
  {
    "kr": "측",
    "en": "ceug"
  },
  {
    "kr": "츢",
    "en": "ceugg"
  },
  {
    "kr": "츣",
    "en": "ceugs"
  },
  {
    "kr": "츤",
    "en": "ceun"
  },
  {
    "kr": "츥",
    "en": "ceunj"
  },
  {
    "kr": "츦",
    "en": "ceunh"
  },
  {
    "kr": "츧",
    "en": "ceud"
  },
  {
    "kr": "츨",
    "en": "ceul"
  },
  {
    "kr": "츩",
    "en": "ceulg"
  },
  {
    "kr": "츪",
    "en": "ceulm"
  },
  {
    "kr": "츫",
    "en": "ceulb"
  },
  {
    "kr": "츬",
    "en": "ceuls"
  },
  {
    "kr": "츭",
    "en": "ceult"
  },
  {
    "kr": "츮",
    "en": "ceulp"
  },
  {
    "kr": "츯",
    "en": "ceulh"
  },
  {
    "kr": "츰",
    "en": "ceum"
  },
  {
    "kr": "츱",
    "en": "ceub"
  },
  {
    "kr": "츲",
    "en": "ceubs"
  },
  {
    "kr": "츳",
    "en": "ceus"
  },
  {
    "kr": "츴",
    "en": "ceuss"
  },
  {
    "kr": "층",
    "en": "ceung"
  },
  {
    "kr": "츶",
    "en": "ceuj"
  },
  {
    "kr": "츷",
    "en": "ceuc"
  },
  {
    "kr": "츸",
    "en": "ceuk"
  },
  {
    "kr": "츹",
    "en": "ceut"
  },
  {
    "kr": "츺",
    "en": "ceup"
  },
  {
    "kr": "츻",
    "en": "ceuh"
  },
  {
    "kr": "츼",
    "en": "cyi"
  },
  {
    "kr": "츽",
    "en": "cyig"
  },
  {
    "kr": "츾",
    "en": "cyigg"
  },
  {
    "kr": "츿",
    "en": "cyigs"
  },
  {
    "kr": "칀",
    "en": "cyin"
  },
  {
    "kr": "칁",
    "en": "cyinj"
  },
  {
    "kr": "칂",
    "en": "cyinh"
  },
  {
    "kr": "칃",
    "en": "cyid"
  },
  {
    "kr": "칄",
    "en": "cyil"
  },
  {
    "kr": "칅",
    "en": "cyilg"
  },
  {
    "kr": "칆",
    "en": "cyilm"
  },
  {
    "kr": "칇",
    "en": "cyilb"
  },
  {
    "kr": "칈",
    "en": "cyils"
  },
  {
    "kr": "칉",
    "en": "cyilt"
  },
  {
    "kr": "칊",
    "en": "cyilp"
  },
  {
    "kr": "칋",
    "en": "cyilh"
  },
  {
    "kr": "칌",
    "en": "cyim"
  },
  {
    "kr": "칍",
    "en": "cyib"
  },
  {
    "kr": "칎",
    "en": "cyibs"
  },
  {
    "kr": "칏",
    "en": "cyis"
  },
  {
    "kr": "칐",
    "en": "cyiss"
  },
  {
    "kr": "칑",
    "en": "cying"
  },
  {
    "kr": "칒",
    "en": "cyij"
  },
  {
    "kr": "칓",
    "en": "cyic"
  },
  {
    "kr": "칔",
    "en": "cyik"
  },
  {
    "kr": "칕",
    "en": "cyit"
  },
  {
    "kr": "칖",
    "en": "cyip"
  },
  {
    "kr": "칗",
    "en": "cyih"
  },
  {
    "kr": "치",
    "en": "ci"
  },
  {
    "kr": "칙",
    "en": "cig"
  },
  {
    "kr": "칚",
    "en": "cigg"
  },
  {
    "kr": "칛",
    "en": "cigs"
  },
  {
    "kr": "친",
    "en": "cin"
  },
  {
    "kr": "칝",
    "en": "cinj"
  },
  {
    "kr": "칞",
    "en": "cinh"
  },
  {
    "kr": "칟",
    "en": "cid"
  },
  {
    "kr": "칠",
    "en": "cil"
  },
  {
    "kr": "칡",
    "en": "cilg"
  },
  {
    "kr": "칢",
    "en": "cilm"
  },
  {
    "kr": "칣",
    "en": "cilb"
  },
  {
    "kr": "칤",
    "en": "cils"
  },
  {
    "kr": "칥",
    "en": "cilt"
  },
  {
    "kr": "칦",
    "en": "cilp"
  },
  {
    "kr": "칧",
    "en": "cilh"
  },
  {
    "kr": "침",
    "en": "cim"
  },
  {
    "kr": "칩",
    "en": "cib"
  },
  {
    "kr": "칪",
    "en": "cibs"
  },
  {
    "kr": "칫",
    "en": "cis"
  },
  {
    "kr": "칬",
    "en": "ciss"
  },
  {
    "kr": "칭",
    "en": "cing"
  },
  {
    "kr": "칮",
    "en": "cij"
  },
  {
    "kr": "칯",
    "en": "cic"
  },
  {
    "kr": "칰",
    "en": "cik"
  },
  {
    "kr": "칱",
    "en": "cit"
  },
  {
    "kr": "칲",
    "en": "cip"
  },
  {
    "kr": "칳",
    "en": "cih"
  },
  {
    "kr": "카",
    "en": "ka"
  },
  {
    "kr": "칵",
    "en": "kag"
  },
  {
    "kr": "칶",
    "en": "kagg"
  },
  {
    "kr": "칷",
    "en": "kags"
  },
  {
    "kr": "칸",
    "en": "kan"
  },
  {
    "kr": "칹",
    "en": "kanj"
  },
  {
    "kr": "칺",
    "en": "kanh"
  },
  {
    "kr": "칻",
    "en": "kad"
  },
  {
    "kr": "칼",
    "en": "kal"
  },
  {
    "kr": "칽",
    "en": "kalg"
  },
  {
    "kr": "칾",
    "en": "kalm"
  },
  {
    "kr": "칿",
    "en": "kalb"
  },
  {
    "kr": "캀",
    "en": "kals"
  },
  {
    "kr": "캁",
    "en": "kalt"
  },
  {
    "kr": "캂",
    "en": "kalp"
  },
  {
    "kr": "캃",
    "en": "kalh"
  },
  {
    "kr": "캄",
    "en": "kam"
  },
  {
    "kr": "캅",
    "en": "kab"
  },
  {
    "kr": "캆",
    "en": "kabs"
  },
  {
    "kr": "캇",
    "en": "kas"
  },
  {
    "kr": "캈",
    "en": "kass"
  },
  {
    "kr": "캉",
    "en": "kang"
  },
  {
    "kr": "캊",
    "en": "kaj"
  },
  {
    "kr": "캋",
    "en": "kac"
  },
  {
    "kr": "캌",
    "en": "kak"
  },
  {
    "kr": "캍",
    "en": "kat"
  },
  {
    "kr": "캎",
    "en": "kap"
  },
  {
    "kr": "캏",
    "en": "kah"
  },
  {
    "kr": "캐",
    "en": "kae"
  },
  {
    "kr": "캑",
    "en": "kaeg"
  },
  {
    "kr": "캒",
    "en": "kaegg"
  },
  {
    "kr": "캓",
    "en": "kaegs"
  },
  {
    "kr": "캔",
    "en": "kaen"
  },
  {
    "kr": "캕",
    "en": "kaenj"
  },
  {
    "kr": "캖",
    "en": "kaenh"
  },
  {
    "kr": "캗",
    "en": "kaed"
  },
  {
    "kr": "캘",
    "en": "kael"
  },
  {
    "kr": "캙",
    "en": "kaelg"
  },
  {
    "kr": "캚",
    "en": "kaelm"
  },
  {
    "kr": "캛",
    "en": "kaelb"
  },
  {
    "kr": "캜",
    "en": "kaels"
  },
  {
    "kr": "캝",
    "en": "kaelt"
  },
  {
    "kr": "캞",
    "en": "kaelp"
  },
  {
    "kr": "캟",
    "en": "kaelh"
  },
  {
    "kr": "캠",
    "en": "kaem"
  },
  {
    "kr": "캡",
    "en": "kaeb"
  },
  {
    "kr": "캢",
    "en": "kaebs"
  },
  {
    "kr": "캣",
    "en": "kaes"
  },
  {
    "kr": "캤",
    "en": "kaess"
  },
  {
    "kr": "캥",
    "en": "kaeng"
  },
  {
    "kr": "캦",
    "en": "kaej"
  },
  {
    "kr": "캧",
    "en": "kaec"
  },
  {
    "kr": "캨",
    "en": "kaek"
  },
  {
    "kr": "캩",
    "en": "kaet"
  },
  {
    "kr": "캪",
    "en": "kaep"
  },
  {
    "kr": "캫",
    "en": "kaeh"
  },
  {
    "kr": "캬",
    "en": "kya"
  },
  {
    "kr": "캭",
    "en": "kyag"
  },
  {
    "kr": "캮",
    "en": "kyagg"
  },
  {
    "kr": "캯",
    "en": "kyags"
  },
  {
    "kr": "캰",
    "en": "kyan"
  },
  {
    "kr": "캱",
    "en": "kyanj"
  },
  {
    "kr": "캲",
    "en": "kyanh"
  },
  {
    "kr": "캳",
    "en": "kyad"
  },
  {
    "kr": "캴",
    "en": "kyal"
  },
  {
    "kr": "캵",
    "en": "kyalg"
  },
  {
    "kr": "캶",
    "en": "kyalm"
  },
  {
    "kr": "캷",
    "en": "kyalb"
  },
  {
    "kr": "캸",
    "en": "kyals"
  },
  {
    "kr": "캹",
    "en": "kyalt"
  },
  {
    "kr": "캺",
    "en": "kyalp"
  },
  {
    "kr": "캻",
    "en": "kyalh"
  },
  {
    "kr": "캼",
    "en": "kyam"
  },
  {
    "kr": "캽",
    "en": "kyab"
  },
  {
    "kr": "캾",
    "en": "kyabs"
  },
  {
    "kr": "캿",
    "en": "kyas"
  },
  {
    "kr": "컀",
    "en": "kyass"
  },
  {
    "kr": "컁",
    "en": "kyang"
  },
  {
    "kr": "컂",
    "en": "kyaj"
  },
  {
    "kr": "컃",
    "en": "kyac"
  },
  {
    "kr": "컄",
    "en": "kyak"
  },
  {
    "kr": "컅",
    "en": "kyat"
  },
  {
    "kr": "컆",
    "en": "kyap"
  },
  {
    "kr": "컇",
    "en": "kyah"
  },
  {
    "kr": "컈",
    "en": "kyae"
  },
  {
    "kr": "컉",
    "en": "kyaeg"
  },
  {
    "kr": "컊",
    "en": "kyaegg"
  },
  {
    "kr": "컋",
    "en": "kyaegs"
  },
  {
    "kr": "컌",
    "en": "kyaen"
  },
  {
    "kr": "컍",
    "en": "kyaenj"
  },
  {
    "kr": "컎",
    "en": "kyaenh"
  },
  {
    "kr": "컏",
    "en": "kyaed"
  },
  {
    "kr": "컐",
    "en": "kyael"
  },
  {
    "kr": "컑",
    "en": "kyaelg"
  },
  {
    "kr": "컒",
    "en": "kyaelm"
  },
  {
    "kr": "컓",
    "en": "kyaelb"
  },
  {
    "kr": "컔",
    "en": "kyaels"
  },
  {
    "kr": "컕",
    "en": "kyaelt"
  },
  {
    "kr": "컖",
    "en": "kyaelp"
  },
  {
    "kr": "컗",
    "en": "kyaelh"
  },
  {
    "kr": "컘",
    "en": "kyaem"
  },
  {
    "kr": "컙",
    "en": "kyaeb"
  },
  {
    "kr": "컚",
    "en": "kyaebs"
  },
  {
    "kr": "컛",
    "en": "kyaes"
  },
  {
    "kr": "컜",
    "en": "kyaess"
  },
  {
    "kr": "컝",
    "en": "kyaeng"
  },
  {
    "kr": "컞",
    "en": "kyaej"
  },
  {
    "kr": "컟",
    "en": "kyaec"
  },
  {
    "kr": "컠",
    "en": "kyaek"
  },
  {
    "kr": "컡",
    "en": "kyaet"
  },
  {
    "kr": "컢",
    "en": "kyaep"
  },
  {
    "kr": "컣",
    "en": "kyaeh"
  },
  {
    "kr": "커",
    "en": "keo"
  },
  {
    "kr": "컥",
    "en": "keog"
  },
  {
    "kr": "컦",
    "en": "keogg"
  },
  {
    "kr": "컧",
    "en": "keogs"
  },
  {
    "kr": "컨",
    "en": "keon"
  },
  {
    "kr": "컩",
    "en": "keonj"
  },
  {
    "kr": "컪",
    "en": "keonh"
  },
  {
    "kr": "컫",
    "en": "keod"
  },
  {
    "kr": "컬",
    "en": "keol"
  },
  {
    "kr": "컭",
    "en": "keolg"
  },
  {
    "kr": "컮",
    "en": "keolm"
  },
  {
    "kr": "컯",
    "en": "keolb"
  },
  {
    "kr": "컰",
    "en": "keols"
  },
  {
    "kr": "컱",
    "en": "keolt"
  },
  {
    "kr": "컲",
    "en": "keolp"
  },
  {
    "kr": "컳",
    "en": "keolh"
  },
  {
    "kr": "컴",
    "en": "keom"
  },
  {
    "kr": "컵",
    "en": "keob"
  },
  {
    "kr": "컶",
    "en": "keobs"
  },
  {
    "kr": "컷",
    "en": "keos"
  },
  {
    "kr": "컸",
    "en": "keoss"
  },
  {
    "kr": "컹",
    "en": "keong"
  },
  {
    "kr": "컺",
    "en": "keoj"
  },
  {
    "kr": "컻",
    "en": "keoc"
  },
  {
    "kr": "컼",
    "en": "keok"
  },
  {
    "kr": "컽",
    "en": "keot"
  },
  {
    "kr": "컾",
    "en": "keop"
  },
  {
    "kr": "컿",
    "en": "keoh"
  },
  {
    "kr": "케",
    "en": "ke"
  },
  {
    "kr": "켁",
    "en": "keg"
  },
  {
    "kr": "켂",
    "en": "kegg"
  },
  {
    "kr": "켃",
    "en": "kegs"
  },
  {
    "kr": "켄",
    "en": "ken"
  },
  {
    "kr": "켅",
    "en": "kenj"
  },
  {
    "kr": "켆",
    "en": "kenh"
  },
  {
    "kr": "켇",
    "en": "ked"
  },
  {
    "kr": "켈",
    "en": "kel"
  },
  {
    "kr": "켉",
    "en": "kelg"
  },
  {
    "kr": "켊",
    "en": "kelm"
  },
  {
    "kr": "켋",
    "en": "kelb"
  },
  {
    "kr": "켌",
    "en": "kels"
  },
  {
    "kr": "켍",
    "en": "kelt"
  },
  {
    "kr": "켎",
    "en": "kelp"
  },
  {
    "kr": "켏",
    "en": "kelh"
  },
  {
    "kr": "켐",
    "en": "kem"
  },
  {
    "kr": "켑",
    "en": "keb"
  },
  {
    "kr": "켒",
    "en": "kebs"
  },
  {
    "kr": "켓",
    "en": "kes"
  },
  {
    "kr": "켔",
    "en": "kess"
  },
  {
    "kr": "켕",
    "en": "keng"
  },
  {
    "kr": "켖",
    "en": "kej"
  },
  {
    "kr": "켗",
    "en": "kec"
  },
  {
    "kr": "켘",
    "en": "kek"
  },
  {
    "kr": "켙",
    "en": "ket"
  },
  {
    "kr": "켚",
    "en": "kep"
  },
  {
    "kr": "켛",
    "en": "keh"
  },
  {
    "kr": "켜",
    "en": "kyeo"
  },
  {
    "kr": "켝",
    "en": "kyeog"
  },
  {
    "kr": "켞",
    "en": "kyeogg"
  },
  {
    "kr": "켟",
    "en": "kyeogs"
  },
  {
    "kr": "켠",
    "en": "kyeon"
  },
  {
    "kr": "켡",
    "en": "kyeonj"
  },
  {
    "kr": "켢",
    "en": "kyeonh"
  },
  {
    "kr": "켣",
    "en": "kyeod"
  },
  {
    "kr": "켤",
    "en": "kyeol"
  },
  {
    "kr": "켥",
    "en": "kyeolg"
  },
  {
    "kr": "켦",
    "en": "kyeolm"
  },
  {
    "kr": "켧",
    "en": "kyeolb"
  },
  {
    "kr": "켨",
    "en": "kyeols"
  },
  {
    "kr": "켩",
    "en": "kyeolt"
  },
  {
    "kr": "켪",
    "en": "kyeolp"
  },
  {
    "kr": "켫",
    "en": "kyeolh"
  },
  {
    "kr": "켬",
    "en": "kyeom"
  },
  {
    "kr": "켭",
    "en": "kyeob"
  },
  {
    "kr": "켮",
    "en": "kyeobs"
  },
  {
    "kr": "켯",
    "en": "kyeos"
  },
  {
    "kr": "켰",
    "en": "kyeoss"
  },
  {
    "kr": "켱",
    "en": "kyeong"
  },
  {
    "kr": "켲",
    "en": "kyeoj"
  },
  {
    "kr": "켳",
    "en": "kyeoc"
  },
  {
    "kr": "켴",
    "en": "kyeok"
  },
  {
    "kr": "켵",
    "en": "kyeot"
  },
  {
    "kr": "켶",
    "en": "kyeop"
  },
  {
    "kr": "켷",
    "en": "kyeoh"
  },
  {
    "kr": "켸",
    "en": "kye"
  },
  {
    "kr": "켹",
    "en": "kyeg"
  },
  {
    "kr": "켺",
    "en": "kyegg"
  },
  {
    "kr": "켻",
    "en": "kyegs"
  },
  {
    "kr": "켼",
    "en": "kyen"
  },
  {
    "kr": "켽",
    "en": "kyenj"
  },
  {
    "kr": "켾",
    "en": "kyenh"
  },
  {
    "kr": "켿",
    "en": "kyed"
  },
  {
    "kr": "콀",
    "en": "kyel"
  },
  {
    "kr": "콁",
    "en": "kyelg"
  },
  {
    "kr": "콂",
    "en": "kyelm"
  },
  {
    "kr": "콃",
    "en": "kyelb"
  },
  {
    "kr": "콄",
    "en": "kyels"
  },
  {
    "kr": "콅",
    "en": "kyelt"
  },
  {
    "kr": "콆",
    "en": "kyelp"
  },
  {
    "kr": "콇",
    "en": "kyelh"
  },
  {
    "kr": "콈",
    "en": "kyem"
  },
  {
    "kr": "콉",
    "en": "kyeb"
  },
  {
    "kr": "콊",
    "en": "kyebs"
  },
  {
    "kr": "콋",
    "en": "kyes"
  },
  {
    "kr": "콌",
    "en": "kyess"
  },
  {
    "kr": "콍",
    "en": "kyeng"
  },
  {
    "kr": "콎",
    "en": "kyej"
  },
  {
    "kr": "콏",
    "en": "kyec"
  },
  {
    "kr": "콐",
    "en": "kyek"
  },
  {
    "kr": "콑",
    "en": "kyet"
  },
  {
    "kr": "콒",
    "en": "kyep"
  },
  {
    "kr": "콓",
    "en": "kyeh"
  },
  {
    "kr": "코",
    "en": "ko"
  },
  {
    "kr": "콕",
    "en": "kog"
  },
  {
    "kr": "콖",
    "en": "kogg"
  },
  {
    "kr": "콗",
    "en": "kogs"
  },
  {
    "kr": "콘",
    "en": "kon"
  },
  {
    "kr": "콙",
    "en": "konj"
  },
  {
    "kr": "콚",
    "en": "konh"
  },
  {
    "kr": "콛",
    "en": "kod"
  },
  {
    "kr": "콜",
    "en": "kol"
  },
  {
    "kr": "콝",
    "en": "kolg"
  },
  {
    "kr": "콞",
    "en": "kolm"
  },
  {
    "kr": "콟",
    "en": "kolb"
  },
  {
    "kr": "콠",
    "en": "kols"
  },
  {
    "kr": "콡",
    "en": "kolt"
  },
  {
    "kr": "콢",
    "en": "kolp"
  },
  {
    "kr": "콣",
    "en": "kolh"
  },
  {
    "kr": "콤",
    "en": "kom"
  },
  {
    "kr": "콥",
    "en": "kob"
  },
  {
    "kr": "콦",
    "en": "kobs"
  },
  {
    "kr": "콧",
    "en": "kos"
  },
  {
    "kr": "콨",
    "en": "koss"
  },
  {
    "kr": "콩",
    "en": "kong"
  },
  {
    "kr": "콪",
    "en": "koj"
  },
  {
    "kr": "콫",
    "en": "koc"
  },
  {
    "kr": "콬",
    "en": "kok"
  },
  {
    "kr": "콭",
    "en": "kot"
  },
  {
    "kr": "콮",
    "en": "kop"
  },
  {
    "kr": "콯",
    "en": "koh"
  },
  {
    "kr": "콰",
    "en": "kwa"
  },
  {
    "kr": "콱",
    "en": "kwag"
  },
  {
    "kr": "콲",
    "en": "kwagg"
  },
  {
    "kr": "콳",
    "en": "kwags"
  },
  {
    "kr": "콴",
    "en": "kwan"
  },
  {
    "kr": "콵",
    "en": "kwanj"
  },
  {
    "kr": "콶",
    "en": "kwanh"
  },
  {
    "kr": "콷",
    "en": "kwad"
  },
  {
    "kr": "콸",
    "en": "kwal"
  },
  {
    "kr": "콹",
    "en": "kwalg"
  },
  {
    "kr": "콺",
    "en": "kwalm"
  },
  {
    "kr": "콻",
    "en": "kwalb"
  },
  {
    "kr": "콼",
    "en": "kwals"
  },
  {
    "kr": "콽",
    "en": "kwalt"
  },
  {
    "kr": "콾",
    "en": "kwalp"
  },
  {
    "kr": "콿",
    "en": "kwalh"
  },
  {
    "kr": "쾀",
    "en": "kwam"
  },
  {
    "kr": "쾁",
    "en": "kwab"
  },
  {
    "kr": "쾂",
    "en": "kwabs"
  },
  {
    "kr": "쾃",
    "en": "kwas"
  },
  {
    "kr": "쾄",
    "en": "kwass"
  },
  {
    "kr": "쾅",
    "en": "kwang"
  },
  {
    "kr": "쾆",
    "en": "kwaj"
  },
  {
    "kr": "쾇",
    "en": "kwac"
  },
  {
    "kr": "쾈",
    "en": "kwak"
  },
  {
    "kr": "쾉",
    "en": "kwat"
  },
  {
    "kr": "쾊",
    "en": "kwap"
  },
  {
    "kr": "쾋",
    "en": "kwah"
  },
  {
    "kr": "쾌",
    "en": "kwae"
  },
  {
    "kr": "쾍",
    "en": "kwaeg"
  },
  {
    "kr": "쾎",
    "en": "kwaegg"
  },
  {
    "kr": "쾏",
    "en": "kwaegs"
  },
  {
    "kr": "쾐",
    "en": "kwaen"
  },
  {
    "kr": "쾑",
    "en": "kwaenj"
  },
  {
    "kr": "쾒",
    "en": "kwaenh"
  },
  {
    "kr": "쾓",
    "en": "kwaed"
  },
  {
    "kr": "쾔",
    "en": "kwael"
  },
  {
    "kr": "쾕",
    "en": "kwaelg"
  },
  {
    "kr": "쾖",
    "en": "kwaelm"
  },
  {
    "kr": "쾗",
    "en": "kwaelb"
  },
  {
    "kr": "쾘",
    "en": "kwaels"
  },
  {
    "kr": "쾙",
    "en": "kwaelt"
  },
  {
    "kr": "쾚",
    "en": "kwaelp"
  },
  {
    "kr": "쾛",
    "en": "kwaelh"
  },
  {
    "kr": "쾜",
    "en": "kwaem"
  },
  {
    "kr": "쾝",
    "en": "kwaeb"
  },
  {
    "kr": "쾞",
    "en": "kwaebs"
  },
  {
    "kr": "쾟",
    "en": "kwaes"
  },
  {
    "kr": "쾠",
    "en": "kwaess"
  },
  {
    "kr": "쾡",
    "en": "kwaeng"
  },
  {
    "kr": "쾢",
    "en": "kwaej"
  },
  {
    "kr": "쾣",
    "en": "kwaec"
  },
  {
    "kr": "쾤",
    "en": "kwaek"
  },
  {
    "kr": "쾥",
    "en": "kwaet"
  },
  {
    "kr": "쾦",
    "en": "kwaep"
  },
  {
    "kr": "쾧",
    "en": "kwaeh"
  },
  {
    "kr": "쾨",
    "en": "koe"
  },
  {
    "kr": "쾩",
    "en": "koeg"
  },
  {
    "kr": "쾪",
    "en": "koegg"
  },
  {
    "kr": "쾫",
    "en": "koegs"
  },
  {
    "kr": "쾬",
    "en": "koen"
  },
  {
    "kr": "쾭",
    "en": "koenj"
  },
  {
    "kr": "쾮",
    "en": "koenh"
  },
  {
    "kr": "쾯",
    "en": "koed"
  },
  {
    "kr": "쾰",
    "en": "koel"
  },
  {
    "kr": "쾱",
    "en": "koelg"
  },
  {
    "kr": "쾲",
    "en": "koelm"
  },
  {
    "kr": "쾳",
    "en": "koelb"
  },
  {
    "kr": "쾴",
    "en": "koels"
  },
  {
    "kr": "쾵",
    "en": "koelt"
  },
  {
    "kr": "쾶",
    "en": "koelp"
  },
  {
    "kr": "쾷",
    "en": "koelh"
  },
  {
    "kr": "쾸",
    "en": "koem"
  },
  {
    "kr": "쾹",
    "en": "koeb"
  },
  {
    "kr": "쾺",
    "en": "koebs"
  },
  {
    "kr": "쾻",
    "en": "koes"
  },
  {
    "kr": "쾼",
    "en": "koess"
  },
  {
    "kr": "쾽",
    "en": "koeng"
  },
  {
    "kr": "쾾",
    "en": "koej"
  },
  {
    "kr": "쾿",
    "en": "koec"
  },
  {
    "kr": "쿀",
    "en": "koek"
  },
  {
    "kr": "쿁",
    "en": "koet"
  },
  {
    "kr": "쿂",
    "en": "koep"
  },
  {
    "kr": "쿃",
    "en": "koeh"
  },
  {
    "kr": "쿄",
    "en": "kyo"
  },
  {
    "kr": "쿅",
    "en": "kyog"
  },
  {
    "kr": "쿆",
    "en": "kyogg"
  },
  {
    "kr": "쿇",
    "en": "kyogs"
  },
  {
    "kr": "쿈",
    "en": "kyon"
  },
  {
    "kr": "쿉",
    "en": "kyonj"
  },
  {
    "kr": "쿊",
    "en": "kyonh"
  },
  {
    "kr": "쿋",
    "en": "kyod"
  },
  {
    "kr": "쿌",
    "en": "kyol"
  },
  {
    "kr": "쿍",
    "en": "kyolg"
  },
  {
    "kr": "쿎",
    "en": "kyolm"
  },
  {
    "kr": "쿏",
    "en": "kyolb"
  },
  {
    "kr": "쿐",
    "en": "kyols"
  },
  {
    "kr": "쿑",
    "en": "kyolt"
  },
  {
    "kr": "쿒",
    "en": "kyolp"
  },
  {
    "kr": "쿓",
    "en": "kyolh"
  },
  {
    "kr": "쿔",
    "en": "kyom"
  },
  {
    "kr": "쿕",
    "en": "kyob"
  },
  {
    "kr": "쿖",
    "en": "kyobs"
  },
  {
    "kr": "쿗",
    "en": "kyos"
  },
  {
    "kr": "쿘",
    "en": "kyoss"
  },
  {
    "kr": "쿙",
    "en": "kyong"
  },
  {
    "kr": "쿚",
    "en": "kyoj"
  },
  {
    "kr": "쿛",
    "en": "kyoc"
  },
  {
    "kr": "쿜",
    "en": "kyok"
  },
  {
    "kr": "쿝",
    "en": "kyot"
  },
  {
    "kr": "쿞",
    "en": "kyop"
  },
  {
    "kr": "쿟",
    "en": "kyoh"
  },
  {
    "kr": "쿠",
    "en": "ku"
  },
  {
    "kr": "쿡",
    "en": "kug"
  },
  {
    "kr": "쿢",
    "en": "kugg"
  },
  {
    "kr": "쿣",
    "en": "kugs"
  },
  {
    "kr": "쿤",
    "en": "kun"
  },
  {
    "kr": "쿥",
    "en": "kunj"
  },
  {
    "kr": "쿦",
    "en": "kunh"
  },
  {
    "kr": "쿧",
    "en": "kud"
  },
  {
    "kr": "쿨",
    "en": "kul"
  },
  {
    "kr": "쿩",
    "en": "kulg"
  },
  {
    "kr": "쿪",
    "en": "kulm"
  },
  {
    "kr": "쿫",
    "en": "kulb"
  },
  {
    "kr": "쿬",
    "en": "kuls"
  },
  {
    "kr": "쿭",
    "en": "kult"
  },
  {
    "kr": "쿮",
    "en": "kulp"
  },
  {
    "kr": "쿯",
    "en": "kulh"
  },
  {
    "kr": "쿰",
    "en": "kum"
  },
  {
    "kr": "쿱",
    "en": "kub"
  },
  {
    "kr": "쿲",
    "en": "kubs"
  },
  {
    "kr": "쿳",
    "en": "kus"
  },
  {
    "kr": "쿴",
    "en": "kuss"
  },
  {
    "kr": "쿵",
    "en": "kung"
  },
  {
    "kr": "쿶",
    "en": "kuj"
  },
  {
    "kr": "쿷",
    "en": "kuc"
  },
  {
    "kr": "쿸",
    "en": "kuk"
  },
  {
    "kr": "쿹",
    "en": "kut"
  },
  {
    "kr": "쿺",
    "en": "kup"
  },
  {
    "kr": "쿻",
    "en": "kuh"
  },
  {
    "kr": "쿼",
    "en": "kweo"
  },
  {
    "kr": "쿽",
    "en": "kweog"
  },
  {
    "kr": "쿾",
    "en": "kweogg"
  },
  {
    "kr": "쿿",
    "en": "kweogs"
  },
  {
    "kr": "퀀",
    "en": "kweon"
  },
  {
    "kr": "퀁",
    "en": "kweonj"
  },
  {
    "kr": "퀂",
    "en": "kweonh"
  },
  {
    "kr": "퀃",
    "en": "kweod"
  },
  {
    "kr": "퀄",
    "en": "kweol"
  },
  {
    "kr": "퀅",
    "en": "kweolg"
  },
  {
    "kr": "퀆",
    "en": "kweolm"
  },
  {
    "kr": "퀇",
    "en": "kweolb"
  },
  {
    "kr": "퀈",
    "en": "kweols"
  },
  {
    "kr": "퀉",
    "en": "kweolt"
  },
  {
    "kr": "퀊",
    "en": "kweolp"
  },
  {
    "kr": "퀋",
    "en": "kweolh"
  },
  {
    "kr": "퀌",
    "en": "kweom"
  },
  {
    "kr": "퀍",
    "en": "kweob"
  },
  {
    "kr": "퀎",
    "en": "kweobs"
  },
  {
    "kr": "퀏",
    "en": "kweos"
  },
  {
    "kr": "퀐",
    "en": "kweoss"
  },
  {
    "kr": "퀑",
    "en": "kweong"
  },
  {
    "kr": "퀒",
    "en": "kweoj"
  },
  {
    "kr": "퀓",
    "en": "kweoc"
  },
  {
    "kr": "퀔",
    "en": "kweok"
  },
  {
    "kr": "퀕",
    "en": "kweot"
  },
  {
    "kr": "퀖",
    "en": "kweop"
  },
  {
    "kr": "퀗",
    "en": "kweoh"
  },
  {
    "kr": "퀘",
    "en": "kwe"
  },
  {
    "kr": "퀙",
    "en": "kweg"
  },
  {
    "kr": "퀚",
    "en": "kwegg"
  },
  {
    "kr": "퀛",
    "en": "kwegs"
  },
  {
    "kr": "퀜",
    "en": "kwen"
  },
  {
    "kr": "퀝",
    "en": "kwenj"
  },
  {
    "kr": "퀞",
    "en": "kwenh"
  },
  {
    "kr": "퀟",
    "en": "kwed"
  },
  {
    "kr": "퀠",
    "en": "kwel"
  },
  {
    "kr": "퀡",
    "en": "kwelg"
  },
  {
    "kr": "퀢",
    "en": "kwelm"
  },
  {
    "kr": "퀣",
    "en": "kwelb"
  },
  {
    "kr": "퀤",
    "en": "kwels"
  },
  {
    "kr": "퀥",
    "en": "kwelt"
  },
  {
    "kr": "퀦",
    "en": "kwelp"
  },
  {
    "kr": "퀧",
    "en": "kwelh"
  },
  {
    "kr": "퀨",
    "en": "kwem"
  },
  {
    "kr": "퀩",
    "en": "kweb"
  },
  {
    "kr": "퀪",
    "en": "kwebs"
  },
  {
    "kr": "퀫",
    "en": "kwes"
  },
  {
    "kr": "퀬",
    "en": "kwess"
  },
  {
    "kr": "퀭",
    "en": "kweng"
  },
  {
    "kr": "퀮",
    "en": "kwej"
  },
  {
    "kr": "퀯",
    "en": "kwec"
  },
  {
    "kr": "퀰",
    "en": "kwek"
  },
  {
    "kr": "퀱",
    "en": "kwet"
  },
  {
    "kr": "퀲",
    "en": "kwep"
  },
  {
    "kr": "퀳",
    "en": "kweh"
  },
  {
    "kr": "퀴",
    "en": "kwi"
  },
  {
    "kr": "퀵",
    "en": "kwig"
  },
  {
    "kr": "퀶",
    "en": "kwigg"
  },
  {
    "kr": "퀷",
    "en": "kwigs"
  },
  {
    "kr": "퀸",
    "en": "kwin"
  },
  {
    "kr": "퀹",
    "en": "kwinj"
  },
  {
    "kr": "퀺",
    "en": "kwinh"
  },
  {
    "kr": "퀻",
    "en": "kwid"
  },
  {
    "kr": "퀼",
    "en": "kwil"
  },
  {
    "kr": "퀽",
    "en": "kwilg"
  },
  {
    "kr": "퀾",
    "en": "kwilm"
  },
  {
    "kr": "퀿",
    "en": "kwilb"
  },
  {
    "kr": "큀",
    "en": "kwils"
  },
  {
    "kr": "큁",
    "en": "kwilt"
  },
  {
    "kr": "큂",
    "en": "kwilp"
  },
  {
    "kr": "큃",
    "en": "kwilh"
  },
  {
    "kr": "큄",
    "en": "kwim"
  },
  {
    "kr": "큅",
    "en": "kwib"
  },
  {
    "kr": "큆",
    "en": "kwibs"
  },
  {
    "kr": "큇",
    "en": "kwis"
  },
  {
    "kr": "큈",
    "en": "kwiss"
  },
  {
    "kr": "큉",
    "en": "kwing"
  },
  {
    "kr": "큊",
    "en": "kwij"
  },
  {
    "kr": "큋",
    "en": "kwic"
  },
  {
    "kr": "큌",
    "en": "kwik"
  },
  {
    "kr": "큍",
    "en": "kwit"
  },
  {
    "kr": "큎",
    "en": "kwip"
  },
  {
    "kr": "큏",
    "en": "kwih"
  },
  {
    "kr": "큐",
    "en": "kyu"
  },
  {
    "kr": "큑",
    "en": "kyug"
  },
  {
    "kr": "큒",
    "en": "kyugg"
  },
  {
    "kr": "큓",
    "en": "kyugs"
  },
  {
    "kr": "큔",
    "en": "kyun"
  },
  {
    "kr": "큕",
    "en": "kyunj"
  },
  {
    "kr": "큖",
    "en": "kyunh"
  },
  {
    "kr": "큗",
    "en": "kyud"
  },
  {
    "kr": "큘",
    "en": "kyul"
  },
  {
    "kr": "큙",
    "en": "kyulg"
  },
  {
    "kr": "큚",
    "en": "kyulm"
  },
  {
    "kr": "큛",
    "en": "kyulb"
  },
  {
    "kr": "큜",
    "en": "kyuls"
  },
  {
    "kr": "큝",
    "en": "kyult"
  },
  {
    "kr": "큞",
    "en": "kyulp"
  },
  {
    "kr": "큟",
    "en": "kyulh"
  },
  {
    "kr": "큠",
    "en": "kyum"
  },
  {
    "kr": "큡",
    "en": "kyub"
  },
  {
    "kr": "큢",
    "en": "kyubs"
  },
  {
    "kr": "큣",
    "en": "kyus"
  },
  {
    "kr": "큤",
    "en": "kyuss"
  },
  {
    "kr": "큥",
    "en": "kyung"
  },
  {
    "kr": "큦",
    "en": "kyuj"
  },
  {
    "kr": "큧",
    "en": "kyuc"
  },
  {
    "kr": "큨",
    "en": "kyuk"
  },
  {
    "kr": "큩",
    "en": "kyut"
  },
  {
    "kr": "큪",
    "en": "kyup"
  },
  {
    "kr": "큫",
    "en": "kyuh"
  },
  {
    "kr": "크",
    "en": "keu"
  },
  {
    "kr": "큭",
    "en": "keug"
  },
  {
    "kr": "큮",
    "en": "keugg"
  },
  {
    "kr": "큯",
    "en": "keugs"
  },
  {
    "kr": "큰",
    "en": "keun"
  },
  {
    "kr": "큱",
    "en": "keunj"
  },
  {
    "kr": "큲",
    "en": "keunh"
  },
  {
    "kr": "큳",
    "en": "keud"
  },
  {
    "kr": "클",
    "en": "keul"
  },
  {
    "kr": "큵",
    "en": "keulg"
  },
  {
    "kr": "큶",
    "en": "keulm"
  },
  {
    "kr": "큷",
    "en": "keulb"
  },
  {
    "kr": "큸",
    "en": "keuls"
  },
  {
    "kr": "큹",
    "en": "keult"
  },
  {
    "kr": "큺",
    "en": "keulp"
  },
  {
    "kr": "큻",
    "en": "keulh"
  },
  {
    "kr": "큼",
    "en": "keum"
  },
  {
    "kr": "큽",
    "en": "keub"
  },
  {
    "kr": "큾",
    "en": "keubs"
  },
  {
    "kr": "큿",
    "en": "keus"
  },
  {
    "kr": "킀",
    "en": "keuss"
  },
  {
    "kr": "킁",
    "en": "keung"
  },
  {
    "kr": "킂",
    "en": "keuj"
  },
  {
    "kr": "킃",
    "en": "keuc"
  },
  {
    "kr": "킄",
    "en": "keuk"
  },
  {
    "kr": "킅",
    "en": "keut"
  },
  {
    "kr": "킆",
    "en": "keup"
  },
  {
    "kr": "킇",
    "en": "keuh"
  },
  {
    "kr": "킈",
    "en": "kyi"
  },
  {
    "kr": "킉",
    "en": "kyig"
  },
  {
    "kr": "킊",
    "en": "kyigg"
  },
  {
    "kr": "킋",
    "en": "kyigs"
  },
  {
    "kr": "킌",
    "en": "kyin"
  },
  {
    "kr": "킍",
    "en": "kyinj"
  },
  {
    "kr": "킎",
    "en": "kyinh"
  },
  {
    "kr": "킏",
    "en": "kyid"
  },
  {
    "kr": "킐",
    "en": "kyil"
  },
  {
    "kr": "킑",
    "en": "kyilg"
  },
  {
    "kr": "킒",
    "en": "kyilm"
  },
  {
    "kr": "킓",
    "en": "kyilb"
  },
  {
    "kr": "킔",
    "en": "kyils"
  },
  {
    "kr": "킕",
    "en": "kyilt"
  },
  {
    "kr": "킖",
    "en": "kyilp"
  },
  {
    "kr": "킗",
    "en": "kyilh"
  },
  {
    "kr": "킘",
    "en": "kyim"
  },
  {
    "kr": "킙",
    "en": "kyib"
  },
  {
    "kr": "킚",
    "en": "kyibs"
  },
  {
    "kr": "킛",
    "en": "kyis"
  },
  {
    "kr": "킜",
    "en": "kyiss"
  },
  {
    "kr": "킝",
    "en": "kying"
  },
  {
    "kr": "킞",
    "en": "kyij"
  },
  {
    "kr": "킟",
    "en": "kyic"
  },
  {
    "kr": "킠",
    "en": "kyik"
  },
  {
    "kr": "킡",
    "en": "kyit"
  },
  {
    "kr": "킢",
    "en": "kyip"
  },
  {
    "kr": "킣",
    "en": "kyih"
  },
  {
    "kr": "키",
    "en": "ki"
  },
  {
    "kr": "킥",
    "en": "kig"
  },
  {
    "kr": "킦",
    "en": "kigg"
  },
  {
    "kr": "킧",
    "en": "kigs"
  },
  {
    "kr": "킨",
    "en": "kin"
  },
  {
    "kr": "킩",
    "en": "kinj"
  },
  {
    "kr": "킪",
    "en": "kinh"
  },
  {
    "kr": "킫",
    "en": "kid"
  },
  {
    "kr": "킬",
    "en": "kil"
  },
  {
    "kr": "킭",
    "en": "kilg"
  },
  {
    "kr": "킮",
    "en": "kilm"
  },
  {
    "kr": "킯",
    "en": "kilb"
  },
  {
    "kr": "킰",
    "en": "kils"
  },
  {
    "kr": "킱",
    "en": "kilt"
  },
  {
    "kr": "킲",
    "en": "kilp"
  },
  {
    "kr": "킳",
    "en": "kilh"
  },
  {
    "kr": "킴",
    "en": "kim"
  },
  {
    "kr": "킵",
    "en": "kib"
  },
  {
    "kr": "킶",
    "en": "kibs"
  },
  {
    "kr": "킷",
    "en": "kis"
  },
  {
    "kr": "킸",
    "en": "kiss"
  },
  {
    "kr": "킹",
    "en": "king"
  },
  {
    "kr": "킺",
    "en": "kij"
  },
  {
    "kr": "킻",
    "en": "kic"
  },
  {
    "kr": "킼",
    "en": "kik"
  },
  {
    "kr": "킽",
    "en": "kit"
  },
  {
    "kr": "킾",
    "en": "kip"
  },
  {
    "kr": "킿",
    "en": "kih"
  },
  {
    "kr": "타",
    "en": "ta"
  },
  {
    "kr": "탁",
    "en": "tag"
  },
  {
    "kr": "탂",
    "en": "tagg"
  },
  {
    "kr": "탃",
    "en": "tags"
  },
  {
    "kr": "탄",
    "en": "tan"
  },
  {
    "kr": "탅",
    "en": "tanj"
  },
  {
    "kr": "탆",
    "en": "tanh"
  },
  {
    "kr": "탇",
    "en": "tad"
  },
  {
    "kr": "탈",
    "en": "tal"
  },
  {
    "kr": "탉",
    "en": "talg"
  },
  {
    "kr": "탊",
    "en": "talm"
  },
  {
    "kr": "탋",
    "en": "talb"
  },
  {
    "kr": "탌",
    "en": "tals"
  },
  {
    "kr": "탍",
    "en": "talt"
  },
  {
    "kr": "탎",
    "en": "talp"
  },
  {
    "kr": "탏",
    "en": "talh"
  },
  {
    "kr": "탐",
    "en": "tam"
  },
  {
    "kr": "탑",
    "en": "tab"
  },
  {
    "kr": "탒",
    "en": "tabs"
  },
  {
    "kr": "탓",
    "en": "tas"
  },
  {
    "kr": "탔",
    "en": "tass"
  },
  {
    "kr": "탕",
    "en": "tang"
  },
  {
    "kr": "탖",
    "en": "taj"
  },
  {
    "kr": "탗",
    "en": "tac"
  },
  {
    "kr": "탘",
    "en": "tak"
  },
  {
    "kr": "탙",
    "en": "tat"
  },
  {
    "kr": "탚",
    "en": "tap"
  },
  {
    "kr": "탛",
    "en": "tah"
  },
  {
    "kr": "태",
    "en": "tae"
  },
  {
    "kr": "택",
    "en": "taeg"
  },
  {
    "kr": "탞",
    "en": "taegg"
  },
  {
    "kr": "탟",
    "en": "taegs"
  },
  {
    "kr": "탠",
    "en": "taen"
  },
  {
    "kr": "탡",
    "en": "taenj"
  },
  {
    "kr": "탢",
    "en": "taenh"
  },
  {
    "kr": "탣",
    "en": "taed"
  },
  {
    "kr": "탤",
    "en": "tael"
  },
  {
    "kr": "탥",
    "en": "taelg"
  },
  {
    "kr": "탦",
    "en": "taelm"
  },
  {
    "kr": "탧",
    "en": "taelb"
  },
  {
    "kr": "탨",
    "en": "taels"
  },
  {
    "kr": "탩",
    "en": "taelt"
  },
  {
    "kr": "탪",
    "en": "taelp"
  },
  {
    "kr": "탫",
    "en": "taelh"
  },
  {
    "kr": "탬",
    "en": "taem"
  },
  {
    "kr": "탭",
    "en": "taeb"
  },
  {
    "kr": "탮",
    "en": "taebs"
  },
  {
    "kr": "탯",
    "en": "taes"
  },
  {
    "kr": "탰",
    "en": "taess"
  },
  {
    "kr": "탱",
    "en": "taeng"
  },
  {
    "kr": "탲",
    "en": "taej"
  },
  {
    "kr": "탳",
    "en": "taec"
  },
  {
    "kr": "탴",
    "en": "taek"
  },
  {
    "kr": "탵",
    "en": "taet"
  },
  {
    "kr": "탶",
    "en": "taep"
  },
  {
    "kr": "탷",
    "en": "taeh"
  },
  {
    "kr": "탸",
    "en": "tya"
  },
  {
    "kr": "탹",
    "en": "tyag"
  },
  {
    "kr": "탺",
    "en": "tyagg"
  },
  {
    "kr": "탻",
    "en": "tyags"
  },
  {
    "kr": "탼",
    "en": "tyan"
  },
  {
    "kr": "탽",
    "en": "tyanj"
  },
  {
    "kr": "탾",
    "en": "tyanh"
  },
  {
    "kr": "탿",
    "en": "tyad"
  },
  {
    "kr": "턀",
    "en": "tyal"
  },
  {
    "kr": "턁",
    "en": "tyalg"
  },
  {
    "kr": "턂",
    "en": "tyalm"
  },
  {
    "kr": "턃",
    "en": "tyalb"
  },
  {
    "kr": "턄",
    "en": "tyals"
  },
  {
    "kr": "턅",
    "en": "tyalt"
  },
  {
    "kr": "턆",
    "en": "tyalp"
  },
  {
    "kr": "턇",
    "en": "tyalh"
  },
  {
    "kr": "턈",
    "en": "tyam"
  },
  {
    "kr": "턉",
    "en": "tyab"
  },
  {
    "kr": "턊",
    "en": "tyabs"
  },
  {
    "kr": "턋",
    "en": "tyas"
  },
  {
    "kr": "턌",
    "en": "tyass"
  },
  {
    "kr": "턍",
    "en": "tyang"
  },
  {
    "kr": "턎",
    "en": "tyaj"
  },
  {
    "kr": "턏",
    "en": "tyac"
  },
  {
    "kr": "턐",
    "en": "tyak"
  },
  {
    "kr": "턑",
    "en": "tyat"
  },
  {
    "kr": "턒",
    "en": "tyap"
  },
  {
    "kr": "턓",
    "en": "tyah"
  },
  {
    "kr": "턔",
    "en": "tyae"
  },
  {
    "kr": "턕",
    "en": "tyaeg"
  },
  {
    "kr": "턖",
    "en": "tyaegg"
  },
  {
    "kr": "턗",
    "en": "tyaegs"
  },
  {
    "kr": "턘",
    "en": "tyaen"
  },
  {
    "kr": "턙",
    "en": "tyaenj"
  },
  {
    "kr": "턚",
    "en": "tyaenh"
  },
  {
    "kr": "턛",
    "en": "tyaed"
  },
  {
    "kr": "턜",
    "en": "tyael"
  },
  {
    "kr": "턝",
    "en": "tyaelg"
  },
  {
    "kr": "턞",
    "en": "tyaelm"
  },
  {
    "kr": "턟",
    "en": "tyaelb"
  },
  {
    "kr": "턠",
    "en": "tyaels"
  },
  {
    "kr": "턡",
    "en": "tyaelt"
  },
  {
    "kr": "턢",
    "en": "tyaelp"
  },
  {
    "kr": "턣",
    "en": "tyaelh"
  },
  {
    "kr": "턤",
    "en": "tyaem"
  },
  {
    "kr": "턥",
    "en": "tyaeb"
  },
  {
    "kr": "턦",
    "en": "tyaebs"
  },
  {
    "kr": "턧",
    "en": "tyaes"
  },
  {
    "kr": "턨",
    "en": "tyaess"
  },
  {
    "kr": "턩",
    "en": "tyaeng"
  },
  {
    "kr": "턪",
    "en": "tyaej"
  },
  {
    "kr": "턫",
    "en": "tyaec"
  },
  {
    "kr": "턬",
    "en": "tyaek"
  },
  {
    "kr": "턭",
    "en": "tyaet"
  },
  {
    "kr": "턮",
    "en": "tyaep"
  },
  {
    "kr": "턯",
    "en": "tyaeh"
  },
  {
    "kr": "터",
    "en": "teo"
  },
  {
    "kr": "턱",
    "en": "teog"
  },
  {
    "kr": "턲",
    "en": "teogg"
  },
  {
    "kr": "턳",
    "en": "teogs"
  },
  {
    "kr": "턴",
    "en": "teon"
  },
  {
    "kr": "턵",
    "en": "teonj"
  },
  {
    "kr": "턶",
    "en": "teonh"
  },
  {
    "kr": "턷",
    "en": "teod"
  },
  {
    "kr": "털",
    "en": "teol"
  },
  {
    "kr": "턹",
    "en": "teolg"
  },
  {
    "kr": "턺",
    "en": "teolm"
  },
  {
    "kr": "턻",
    "en": "teolb"
  },
  {
    "kr": "턼",
    "en": "teols"
  },
  {
    "kr": "턽",
    "en": "teolt"
  },
  {
    "kr": "턾",
    "en": "teolp"
  },
  {
    "kr": "턿",
    "en": "teolh"
  },
  {
    "kr": "텀",
    "en": "teom"
  },
  {
    "kr": "텁",
    "en": "teob"
  },
  {
    "kr": "텂",
    "en": "teobs"
  },
  {
    "kr": "텃",
    "en": "teos"
  },
  {
    "kr": "텄",
    "en": "teoss"
  },
  {
    "kr": "텅",
    "en": "teong"
  },
  {
    "kr": "텆",
    "en": "teoj"
  },
  {
    "kr": "텇",
    "en": "teoc"
  },
  {
    "kr": "텈",
    "en": "teok"
  },
  {
    "kr": "텉",
    "en": "teot"
  },
  {
    "kr": "텊",
    "en": "teop"
  },
  {
    "kr": "텋",
    "en": "teoh"
  },
  {
    "kr": "테",
    "en": "te"
  },
  {
    "kr": "텍",
    "en": "teg"
  },
  {
    "kr": "텎",
    "en": "tegg"
  },
  {
    "kr": "텏",
    "en": "tegs"
  },
  {
    "kr": "텐",
    "en": "ten"
  },
  {
    "kr": "텑",
    "en": "tenj"
  },
  {
    "kr": "텒",
    "en": "tenh"
  },
  {
    "kr": "텓",
    "en": "ted"
  },
  {
    "kr": "텔",
    "en": "tel"
  },
  {
    "kr": "텕",
    "en": "telg"
  },
  {
    "kr": "텖",
    "en": "telm"
  },
  {
    "kr": "텗",
    "en": "telb"
  },
  {
    "kr": "텘",
    "en": "tels"
  },
  {
    "kr": "텙",
    "en": "telt"
  },
  {
    "kr": "텚",
    "en": "telp"
  },
  {
    "kr": "텛",
    "en": "telh"
  },
  {
    "kr": "템",
    "en": "tem"
  },
  {
    "kr": "텝",
    "en": "teb"
  },
  {
    "kr": "텞",
    "en": "tebs"
  },
  {
    "kr": "텟",
    "en": "tes"
  },
  {
    "kr": "텠",
    "en": "tess"
  },
  {
    "kr": "텡",
    "en": "teng"
  },
  {
    "kr": "텢",
    "en": "tej"
  },
  {
    "kr": "텣",
    "en": "tec"
  },
  {
    "kr": "텤",
    "en": "tek"
  },
  {
    "kr": "텥",
    "en": "tet"
  },
  {
    "kr": "텦",
    "en": "tep"
  },
  {
    "kr": "텧",
    "en": "teh"
  },
  {
    "kr": "텨",
    "en": "tyeo"
  },
  {
    "kr": "텩",
    "en": "tyeog"
  },
  {
    "kr": "텪",
    "en": "tyeogg"
  },
  {
    "kr": "텫",
    "en": "tyeogs"
  },
  {
    "kr": "텬",
    "en": "tyeon"
  },
  {
    "kr": "텭",
    "en": "tyeonj"
  },
  {
    "kr": "텮",
    "en": "tyeonh"
  },
  {
    "kr": "텯",
    "en": "tyeod"
  },
  {
    "kr": "텰",
    "en": "tyeol"
  },
  {
    "kr": "텱",
    "en": "tyeolg"
  },
  {
    "kr": "텲",
    "en": "tyeolm"
  },
  {
    "kr": "텳",
    "en": "tyeolb"
  },
  {
    "kr": "텴",
    "en": "tyeols"
  },
  {
    "kr": "텵",
    "en": "tyeolt"
  },
  {
    "kr": "텶",
    "en": "tyeolp"
  },
  {
    "kr": "텷",
    "en": "tyeolh"
  },
  {
    "kr": "텸",
    "en": "tyeom"
  },
  {
    "kr": "텹",
    "en": "tyeob"
  },
  {
    "kr": "텺",
    "en": "tyeobs"
  },
  {
    "kr": "텻",
    "en": "tyeos"
  },
  {
    "kr": "텼",
    "en": "tyeoss"
  },
  {
    "kr": "텽",
    "en": "tyeong"
  },
  {
    "kr": "텾",
    "en": "tyeoj"
  },
  {
    "kr": "텿",
    "en": "tyeoc"
  },
  {
    "kr": "톀",
    "en": "tyeok"
  },
  {
    "kr": "톁",
    "en": "tyeot"
  },
  {
    "kr": "톂",
    "en": "tyeop"
  },
  {
    "kr": "톃",
    "en": "tyeoh"
  },
  {
    "kr": "톄",
    "en": "tye"
  },
  {
    "kr": "톅",
    "en": "tyeg"
  },
  {
    "kr": "톆",
    "en": "tyegg"
  },
  {
    "kr": "톇",
    "en": "tyegs"
  },
  {
    "kr": "톈",
    "en": "tyen"
  },
  {
    "kr": "톉",
    "en": "tyenj"
  },
  {
    "kr": "톊",
    "en": "tyenh"
  },
  {
    "kr": "톋",
    "en": "tyed"
  },
  {
    "kr": "톌",
    "en": "tyel"
  },
  {
    "kr": "톍",
    "en": "tyelg"
  },
  {
    "kr": "톎",
    "en": "tyelm"
  },
  {
    "kr": "톏",
    "en": "tyelb"
  },
  {
    "kr": "톐",
    "en": "tyels"
  },
  {
    "kr": "톑",
    "en": "tyelt"
  },
  {
    "kr": "톒",
    "en": "tyelp"
  },
  {
    "kr": "톓",
    "en": "tyelh"
  },
  {
    "kr": "톔",
    "en": "tyem"
  },
  {
    "kr": "톕",
    "en": "tyeb"
  },
  {
    "kr": "톖",
    "en": "tyebs"
  },
  {
    "kr": "톗",
    "en": "tyes"
  },
  {
    "kr": "톘",
    "en": "tyess"
  },
  {
    "kr": "톙",
    "en": "tyeng"
  },
  {
    "kr": "톚",
    "en": "tyej"
  },
  {
    "kr": "톛",
    "en": "tyec"
  },
  {
    "kr": "톜",
    "en": "tyek"
  },
  {
    "kr": "톝",
    "en": "tyet"
  },
  {
    "kr": "톞",
    "en": "tyep"
  },
  {
    "kr": "톟",
    "en": "tyeh"
  },
  {
    "kr": "토",
    "en": "to"
  },
  {
    "kr": "톡",
    "en": "tog"
  },
  {
    "kr": "톢",
    "en": "togg"
  },
  {
    "kr": "톣",
    "en": "togs"
  },
  {
    "kr": "톤",
    "en": "ton"
  },
  {
    "kr": "톥",
    "en": "tonj"
  },
  {
    "kr": "톦",
    "en": "tonh"
  },
  {
    "kr": "톧",
    "en": "tod"
  },
  {
    "kr": "톨",
    "en": "tol"
  },
  {
    "kr": "톩",
    "en": "tolg"
  },
  {
    "kr": "톪",
    "en": "tolm"
  },
  {
    "kr": "톫",
    "en": "tolb"
  },
  {
    "kr": "톬",
    "en": "tols"
  },
  {
    "kr": "톭",
    "en": "tolt"
  },
  {
    "kr": "톮",
    "en": "tolp"
  },
  {
    "kr": "톯",
    "en": "tolh"
  },
  {
    "kr": "톰",
    "en": "tom"
  },
  {
    "kr": "톱",
    "en": "tob"
  },
  {
    "kr": "톲",
    "en": "tobs"
  },
  {
    "kr": "톳",
    "en": "tos"
  },
  {
    "kr": "톴",
    "en": "toss"
  },
  {
    "kr": "통",
    "en": "tong"
  },
  {
    "kr": "톶",
    "en": "toj"
  },
  {
    "kr": "톷",
    "en": "toc"
  },
  {
    "kr": "톸",
    "en": "tok"
  },
  {
    "kr": "톹",
    "en": "tot"
  },
  {
    "kr": "톺",
    "en": "top"
  },
  {
    "kr": "톻",
    "en": "toh"
  },
  {
    "kr": "톼",
    "en": "twa"
  },
  {
    "kr": "톽",
    "en": "twag"
  },
  {
    "kr": "톾",
    "en": "twagg"
  },
  {
    "kr": "톿",
    "en": "twags"
  },
  {
    "kr": "퇀",
    "en": "twan"
  },
  {
    "kr": "퇁",
    "en": "twanj"
  },
  {
    "kr": "퇂",
    "en": "twanh"
  },
  {
    "kr": "퇃",
    "en": "twad"
  },
  {
    "kr": "퇄",
    "en": "twal"
  },
  {
    "kr": "퇅",
    "en": "twalg"
  },
  {
    "kr": "퇆",
    "en": "twalm"
  },
  {
    "kr": "퇇",
    "en": "twalb"
  },
  {
    "kr": "퇈",
    "en": "twals"
  },
  {
    "kr": "퇉",
    "en": "twalt"
  },
  {
    "kr": "퇊",
    "en": "twalp"
  },
  {
    "kr": "퇋",
    "en": "twalh"
  },
  {
    "kr": "퇌",
    "en": "twam"
  },
  {
    "kr": "퇍",
    "en": "twab"
  },
  {
    "kr": "퇎",
    "en": "twabs"
  },
  {
    "kr": "퇏",
    "en": "twas"
  },
  {
    "kr": "퇐",
    "en": "twass"
  },
  {
    "kr": "퇑",
    "en": "twang"
  },
  {
    "kr": "퇒",
    "en": "twaj"
  },
  {
    "kr": "퇓",
    "en": "twac"
  },
  {
    "kr": "퇔",
    "en": "twak"
  },
  {
    "kr": "퇕",
    "en": "twat"
  },
  {
    "kr": "퇖",
    "en": "twap"
  },
  {
    "kr": "퇗",
    "en": "twah"
  },
  {
    "kr": "퇘",
    "en": "twae"
  },
  {
    "kr": "퇙",
    "en": "twaeg"
  },
  {
    "kr": "퇚",
    "en": "twaegg"
  },
  {
    "kr": "퇛",
    "en": "twaegs"
  },
  {
    "kr": "퇜",
    "en": "twaen"
  },
  {
    "kr": "퇝",
    "en": "twaenj"
  },
  {
    "kr": "퇞",
    "en": "twaenh"
  },
  {
    "kr": "퇟",
    "en": "twaed"
  },
  {
    "kr": "퇠",
    "en": "twael"
  },
  {
    "kr": "퇡",
    "en": "twaelg"
  },
  {
    "kr": "퇢",
    "en": "twaelm"
  },
  {
    "kr": "퇣",
    "en": "twaelb"
  },
  {
    "kr": "퇤",
    "en": "twaels"
  },
  {
    "kr": "퇥",
    "en": "twaelt"
  },
  {
    "kr": "퇦",
    "en": "twaelp"
  },
  {
    "kr": "퇧",
    "en": "twaelh"
  },
  {
    "kr": "퇨",
    "en": "twaem"
  },
  {
    "kr": "퇩",
    "en": "twaeb"
  },
  {
    "kr": "퇪",
    "en": "twaebs"
  },
  {
    "kr": "퇫",
    "en": "twaes"
  },
  {
    "kr": "퇬",
    "en": "twaess"
  },
  {
    "kr": "퇭",
    "en": "twaeng"
  },
  {
    "kr": "퇮",
    "en": "twaej"
  },
  {
    "kr": "퇯",
    "en": "twaec"
  },
  {
    "kr": "퇰",
    "en": "twaek"
  },
  {
    "kr": "퇱",
    "en": "twaet"
  },
  {
    "kr": "퇲",
    "en": "twaep"
  },
  {
    "kr": "퇳",
    "en": "twaeh"
  },
  {
    "kr": "퇴",
    "en": "toe"
  },
  {
    "kr": "퇵",
    "en": "toeg"
  },
  {
    "kr": "퇶",
    "en": "toegg"
  },
  {
    "kr": "퇷",
    "en": "toegs"
  },
  {
    "kr": "퇸",
    "en": "toen"
  },
  {
    "kr": "퇹",
    "en": "toenj"
  },
  {
    "kr": "퇺",
    "en": "toenh"
  },
  {
    "kr": "퇻",
    "en": "toed"
  },
  {
    "kr": "퇼",
    "en": "toel"
  },
  {
    "kr": "퇽",
    "en": "toelg"
  },
  {
    "kr": "퇾",
    "en": "toelm"
  },
  {
    "kr": "퇿",
    "en": "toelb"
  },
  {
    "kr": "툀",
    "en": "toels"
  },
  {
    "kr": "툁",
    "en": "toelt"
  },
  {
    "kr": "툂",
    "en": "toelp"
  },
  {
    "kr": "툃",
    "en": "toelh"
  },
  {
    "kr": "툄",
    "en": "toem"
  },
  {
    "kr": "툅",
    "en": "toeb"
  },
  {
    "kr": "툆",
    "en": "toebs"
  },
  {
    "kr": "툇",
    "en": "toes"
  },
  {
    "kr": "툈",
    "en": "toess"
  },
  {
    "kr": "툉",
    "en": "toeng"
  },
  {
    "kr": "툊",
    "en": "toej"
  },
  {
    "kr": "툋",
    "en": "toec"
  },
  {
    "kr": "툌",
    "en": "toek"
  },
  {
    "kr": "툍",
    "en": "toet"
  },
  {
    "kr": "툎",
    "en": "toep"
  },
  {
    "kr": "툏",
    "en": "toeh"
  },
  {
    "kr": "툐",
    "en": "tyo"
  },
  {
    "kr": "툑",
    "en": "tyog"
  },
  {
    "kr": "툒",
    "en": "tyogg"
  },
  {
    "kr": "툓",
    "en": "tyogs"
  },
  {
    "kr": "툔",
    "en": "tyon"
  },
  {
    "kr": "툕",
    "en": "tyonj"
  },
  {
    "kr": "툖",
    "en": "tyonh"
  },
  {
    "kr": "툗",
    "en": "tyod"
  },
  {
    "kr": "툘",
    "en": "tyol"
  },
  {
    "kr": "툙",
    "en": "tyolg"
  },
  {
    "kr": "툚",
    "en": "tyolm"
  },
  {
    "kr": "툛",
    "en": "tyolb"
  },
  {
    "kr": "툜",
    "en": "tyols"
  },
  {
    "kr": "툝",
    "en": "tyolt"
  },
  {
    "kr": "툞",
    "en": "tyolp"
  },
  {
    "kr": "툟",
    "en": "tyolh"
  },
  {
    "kr": "툠",
    "en": "tyom"
  },
  {
    "kr": "툡",
    "en": "tyob"
  },
  {
    "kr": "툢",
    "en": "tyobs"
  },
  {
    "kr": "툣",
    "en": "tyos"
  },
  {
    "kr": "툤",
    "en": "tyoss"
  },
  {
    "kr": "툥",
    "en": "tyong"
  },
  {
    "kr": "툦",
    "en": "tyoj"
  },
  {
    "kr": "툧",
    "en": "tyoc"
  },
  {
    "kr": "툨",
    "en": "tyok"
  },
  {
    "kr": "툩",
    "en": "tyot"
  },
  {
    "kr": "툪",
    "en": "tyop"
  },
  {
    "kr": "툫",
    "en": "tyoh"
  },
  {
    "kr": "투",
    "en": "tu"
  },
  {
    "kr": "툭",
    "en": "tug"
  },
  {
    "kr": "툮",
    "en": "tugg"
  },
  {
    "kr": "툯",
    "en": "tugs"
  },
  {
    "kr": "툰",
    "en": "tun"
  },
  {
    "kr": "툱",
    "en": "tunj"
  },
  {
    "kr": "툲",
    "en": "tunh"
  },
  {
    "kr": "툳",
    "en": "tud"
  },
  {
    "kr": "툴",
    "en": "tul"
  },
  {
    "kr": "툵",
    "en": "tulg"
  },
  {
    "kr": "툶",
    "en": "tulm"
  },
  {
    "kr": "툷",
    "en": "tulb"
  },
  {
    "kr": "툸",
    "en": "tuls"
  },
  {
    "kr": "툹",
    "en": "tult"
  },
  {
    "kr": "툺",
    "en": "tulp"
  },
  {
    "kr": "툻",
    "en": "tulh"
  },
  {
    "kr": "툼",
    "en": "tum"
  },
  {
    "kr": "툽",
    "en": "tub"
  },
  {
    "kr": "툾",
    "en": "tubs"
  },
  {
    "kr": "툿",
    "en": "tus"
  },
  {
    "kr": "퉀",
    "en": "tuss"
  },
  {
    "kr": "퉁",
    "en": "tung"
  },
  {
    "kr": "퉂",
    "en": "tuj"
  },
  {
    "kr": "퉃",
    "en": "tuc"
  },
  {
    "kr": "퉄",
    "en": "tuk"
  },
  {
    "kr": "퉅",
    "en": "tut"
  },
  {
    "kr": "퉆",
    "en": "tup"
  },
  {
    "kr": "퉇",
    "en": "tuh"
  },
  {
    "kr": "퉈",
    "en": "tweo"
  },
  {
    "kr": "퉉",
    "en": "tweog"
  },
  {
    "kr": "퉊",
    "en": "tweogg"
  },
  {
    "kr": "퉋",
    "en": "tweogs"
  },
  {
    "kr": "퉌",
    "en": "tweon"
  },
  {
    "kr": "퉍",
    "en": "tweonj"
  },
  {
    "kr": "퉎",
    "en": "tweonh"
  },
  {
    "kr": "퉏",
    "en": "tweod"
  },
  {
    "kr": "퉐",
    "en": "tweol"
  },
  {
    "kr": "퉑",
    "en": "tweolg"
  },
  {
    "kr": "퉒",
    "en": "tweolm"
  },
  {
    "kr": "퉓",
    "en": "tweolb"
  },
  {
    "kr": "퉔",
    "en": "tweols"
  },
  {
    "kr": "퉕",
    "en": "tweolt"
  },
  {
    "kr": "퉖",
    "en": "tweolp"
  },
  {
    "kr": "퉗",
    "en": "tweolh"
  },
  {
    "kr": "퉘",
    "en": "tweom"
  },
  {
    "kr": "퉙",
    "en": "tweob"
  },
  {
    "kr": "퉚",
    "en": "tweobs"
  },
  {
    "kr": "퉛",
    "en": "tweos"
  },
  {
    "kr": "퉜",
    "en": "tweoss"
  },
  {
    "kr": "퉝",
    "en": "tweong"
  },
  {
    "kr": "퉞",
    "en": "tweoj"
  },
  {
    "kr": "퉟",
    "en": "tweoc"
  },
  {
    "kr": "퉠",
    "en": "tweok"
  },
  {
    "kr": "퉡",
    "en": "tweot"
  },
  {
    "kr": "퉢",
    "en": "tweop"
  },
  {
    "kr": "퉣",
    "en": "tweoh"
  },
  {
    "kr": "퉤",
    "en": "twe"
  },
  {
    "kr": "퉥",
    "en": "tweg"
  },
  {
    "kr": "퉦",
    "en": "twegg"
  },
  {
    "kr": "퉧",
    "en": "twegs"
  },
  {
    "kr": "퉨",
    "en": "twen"
  },
  {
    "kr": "퉩",
    "en": "twenj"
  },
  {
    "kr": "퉪",
    "en": "twenh"
  },
  {
    "kr": "퉫",
    "en": "twed"
  },
  {
    "kr": "퉬",
    "en": "twel"
  },
  {
    "kr": "퉭",
    "en": "twelg"
  },
  {
    "kr": "퉮",
    "en": "twelm"
  },
  {
    "kr": "퉯",
    "en": "twelb"
  },
  {
    "kr": "퉰",
    "en": "twels"
  },
  {
    "kr": "퉱",
    "en": "twelt"
  },
  {
    "kr": "퉲",
    "en": "twelp"
  },
  {
    "kr": "퉳",
    "en": "twelh"
  },
  {
    "kr": "퉴",
    "en": "twem"
  },
  {
    "kr": "퉵",
    "en": "tweb"
  },
  {
    "kr": "퉶",
    "en": "twebs"
  },
  {
    "kr": "퉷",
    "en": "twes"
  },
  {
    "kr": "퉸",
    "en": "twess"
  },
  {
    "kr": "퉹",
    "en": "tweng"
  },
  {
    "kr": "퉺",
    "en": "twej"
  },
  {
    "kr": "퉻",
    "en": "twec"
  },
  {
    "kr": "퉼",
    "en": "twek"
  },
  {
    "kr": "퉽",
    "en": "twet"
  },
  {
    "kr": "퉾",
    "en": "twep"
  },
  {
    "kr": "퉿",
    "en": "tweh"
  },
  {
    "kr": "튀",
    "en": "twi"
  },
  {
    "kr": "튁",
    "en": "twig"
  },
  {
    "kr": "튂",
    "en": "twigg"
  },
  {
    "kr": "튃",
    "en": "twigs"
  },
  {
    "kr": "튄",
    "en": "twin"
  },
  {
    "kr": "튅",
    "en": "twinj"
  },
  {
    "kr": "튆",
    "en": "twinh"
  },
  {
    "kr": "튇",
    "en": "twid"
  },
  {
    "kr": "튈",
    "en": "twil"
  },
  {
    "kr": "튉",
    "en": "twilg"
  },
  {
    "kr": "튊",
    "en": "twilm"
  },
  {
    "kr": "튋",
    "en": "twilb"
  },
  {
    "kr": "튌",
    "en": "twils"
  },
  {
    "kr": "튍",
    "en": "twilt"
  },
  {
    "kr": "튎",
    "en": "twilp"
  },
  {
    "kr": "튏",
    "en": "twilh"
  },
  {
    "kr": "튐",
    "en": "twim"
  },
  {
    "kr": "튑",
    "en": "twib"
  },
  {
    "kr": "튒",
    "en": "twibs"
  },
  {
    "kr": "튓",
    "en": "twis"
  },
  {
    "kr": "튔",
    "en": "twiss"
  },
  {
    "kr": "튕",
    "en": "twing"
  },
  {
    "kr": "튖",
    "en": "twij"
  },
  {
    "kr": "튗",
    "en": "twic"
  },
  {
    "kr": "튘",
    "en": "twik"
  },
  {
    "kr": "튙",
    "en": "twit"
  },
  {
    "kr": "튚",
    "en": "twip"
  },
  {
    "kr": "튛",
    "en": "twih"
  },
  {
    "kr": "튜",
    "en": "tyu"
  },
  {
    "kr": "튝",
    "en": "tyug"
  },
  {
    "kr": "튞",
    "en": "tyugg"
  },
  {
    "kr": "튟",
    "en": "tyugs"
  },
  {
    "kr": "튠",
    "en": "tyun"
  },
  {
    "kr": "튡",
    "en": "tyunj"
  },
  {
    "kr": "튢",
    "en": "tyunh"
  },
  {
    "kr": "튣",
    "en": "tyud"
  },
  {
    "kr": "튤",
    "en": "tyul"
  },
  {
    "kr": "튥",
    "en": "tyulg"
  },
  {
    "kr": "튦",
    "en": "tyulm"
  },
  {
    "kr": "튧",
    "en": "tyulb"
  },
  {
    "kr": "튨",
    "en": "tyuls"
  },
  {
    "kr": "튩",
    "en": "tyult"
  },
  {
    "kr": "튪",
    "en": "tyulp"
  },
  {
    "kr": "튫",
    "en": "tyulh"
  },
  {
    "kr": "튬",
    "en": "tyum"
  },
  {
    "kr": "튭",
    "en": "tyub"
  },
  {
    "kr": "튮",
    "en": "tyubs"
  },
  {
    "kr": "튯",
    "en": "tyus"
  },
  {
    "kr": "튰",
    "en": "tyuss"
  },
  {
    "kr": "튱",
    "en": "tyung"
  },
  {
    "kr": "튲",
    "en": "tyuj"
  },
  {
    "kr": "튳",
    "en": "tyuc"
  },
  {
    "kr": "튴",
    "en": "tyuk"
  },
  {
    "kr": "튵",
    "en": "tyut"
  },
  {
    "kr": "튶",
    "en": "tyup"
  },
  {
    "kr": "튷",
    "en": "tyuh"
  },
  {
    "kr": "트",
    "en": "teu"
  },
  {
    "kr": "특",
    "en": "teug"
  },
  {
    "kr": "튺",
    "en": "teugg"
  },
  {
    "kr": "튻",
    "en": "teugs"
  },
  {
    "kr": "튼",
    "en": "teun"
  },
  {
    "kr": "튽",
    "en": "teunj"
  },
  {
    "kr": "튾",
    "en": "teunh"
  },
  {
    "kr": "튿",
    "en": "teud"
  },
  {
    "kr": "틀",
    "en": "teul"
  },
  {
    "kr": "틁",
    "en": "teulg"
  },
  {
    "kr": "틂",
    "en": "teulm"
  },
  {
    "kr": "틃",
    "en": "teulb"
  },
  {
    "kr": "틄",
    "en": "teuls"
  },
  {
    "kr": "틅",
    "en": "teult"
  },
  {
    "kr": "틆",
    "en": "teulp"
  },
  {
    "kr": "틇",
    "en": "teulh"
  },
  {
    "kr": "틈",
    "en": "teum"
  },
  {
    "kr": "틉",
    "en": "teub"
  },
  {
    "kr": "틊",
    "en": "teubs"
  },
  {
    "kr": "틋",
    "en": "teus"
  },
  {
    "kr": "틌",
    "en": "teuss"
  },
  {
    "kr": "틍",
    "en": "teung"
  },
  {
    "kr": "틎",
    "en": "teuj"
  },
  {
    "kr": "틏",
    "en": "teuc"
  },
  {
    "kr": "틐",
    "en": "teuk"
  },
  {
    "kr": "틑",
    "en": "teut"
  },
  {
    "kr": "틒",
    "en": "teup"
  },
  {
    "kr": "틓",
    "en": "teuh"
  },
  {
    "kr": "틔",
    "en": "tyi"
  },
  {
    "kr": "틕",
    "en": "tyig"
  },
  {
    "kr": "틖",
    "en": "tyigg"
  },
  {
    "kr": "틗",
    "en": "tyigs"
  },
  {
    "kr": "틘",
    "en": "tyin"
  },
  {
    "kr": "틙",
    "en": "tyinj"
  },
  {
    "kr": "틚",
    "en": "tyinh"
  },
  {
    "kr": "틛",
    "en": "tyid"
  },
  {
    "kr": "틜",
    "en": "tyil"
  },
  {
    "kr": "틝",
    "en": "tyilg"
  },
  {
    "kr": "틞",
    "en": "tyilm"
  },
  {
    "kr": "틟",
    "en": "tyilb"
  },
  {
    "kr": "틠",
    "en": "tyils"
  },
  {
    "kr": "틡",
    "en": "tyilt"
  },
  {
    "kr": "틢",
    "en": "tyilp"
  },
  {
    "kr": "틣",
    "en": "tyilh"
  },
  {
    "kr": "틤",
    "en": "tyim"
  },
  {
    "kr": "틥",
    "en": "tyib"
  },
  {
    "kr": "틦",
    "en": "tyibs"
  },
  {
    "kr": "틧",
    "en": "tyis"
  },
  {
    "kr": "틨",
    "en": "tyiss"
  },
  {
    "kr": "틩",
    "en": "tying"
  },
  {
    "kr": "틪",
    "en": "tyij"
  },
  {
    "kr": "틫",
    "en": "tyic"
  },
  {
    "kr": "틬",
    "en": "tyik"
  },
  {
    "kr": "틭",
    "en": "tyit"
  },
  {
    "kr": "틮",
    "en": "tyip"
  },
  {
    "kr": "틯",
    "en": "tyih"
  },
  {
    "kr": "티",
    "en": "ti"
  },
  {
    "kr": "틱",
    "en": "tig"
  },
  {
    "kr": "틲",
    "en": "tigg"
  },
  {
    "kr": "틳",
    "en": "tigs"
  },
  {
    "kr": "틴",
    "en": "tin"
  },
  {
    "kr": "틵",
    "en": "tinj"
  },
  {
    "kr": "틶",
    "en": "tinh"
  },
  {
    "kr": "틷",
    "en": "tid"
  },
  {
    "kr": "틸",
    "en": "til"
  },
  {
    "kr": "틹",
    "en": "tilg"
  },
  {
    "kr": "틺",
    "en": "tilm"
  },
  {
    "kr": "틻",
    "en": "tilb"
  },
  {
    "kr": "틼",
    "en": "tils"
  },
  {
    "kr": "틽",
    "en": "tilt"
  },
  {
    "kr": "틾",
    "en": "tilp"
  },
  {
    "kr": "틿",
    "en": "tilh"
  },
  {
    "kr": "팀",
    "en": "tim"
  },
  {
    "kr": "팁",
    "en": "tib"
  },
  {
    "kr": "팂",
    "en": "tibs"
  },
  {
    "kr": "팃",
    "en": "tis"
  },
  {
    "kr": "팄",
    "en": "tiss"
  },
  {
    "kr": "팅",
    "en": "ting"
  },
  {
    "kr": "팆",
    "en": "tij"
  },
  {
    "kr": "팇",
    "en": "tic"
  },
  {
    "kr": "팈",
    "en": "tik"
  },
  {
    "kr": "팉",
    "en": "tit"
  },
  {
    "kr": "팊",
    "en": "tip"
  },
  {
    "kr": "팋",
    "en": "tih"
  },
  {
    "kr": "파",
    "en": "pa"
  },
  {
    "kr": "팍",
    "en": "pag"
  },
  {
    "kr": "팎",
    "en": "pagg"
  },
  {
    "kr": "팏",
    "en": "pags"
  },
  {
    "kr": "판",
    "en": "pan"
  },
  {
    "kr": "팑",
    "en": "panj"
  },
  {
    "kr": "팒",
    "en": "panh"
  },
  {
    "kr": "팓",
    "en": "pad"
  },
  {
    "kr": "팔",
    "en": "pal"
  },
  {
    "kr": "팕",
    "en": "palg"
  },
  {
    "kr": "팖",
    "en": "palm"
  },
  {
    "kr": "팗",
    "en": "palb"
  },
  {
    "kr": "팘",
    "en": "pals"
  },
  {
    "kr": "팙",
    "en": "palt"
  },
  {
    "kr": "팚",
    "en": "palp"
  },
  {
    "kr": "팛",
    "en": "palh"
  },
  {
    "kr": "팜",
    "en": "pam"
  },
  {
    "kr": "팝",
    "en": "pab"
  },
  {
    "kr": "팞",
    "en": "pabs"
  },
  {
    "kr": "팟",
    "en": "pas"
  },
  {
    "kr": "팠",
    "en": "pass"
  },
  {
    "kr": "팡",
    "en": "pang"
  },
  {
    "kr": "팢",
    "en": "paj"
  },
  {
    "kr": "팣",
    "en": "pac"
  },
  {
    "kr": "팤",
    "en": "pak"
  },
  {
    "kr": "팥",
    "en": "pat"
  },
  {
    "kr": "팦",
    "en": "pap"
  },
  {
    "kr": "팧",
    "en": "pah"
  },
  {
    "kr": "패",
    "en": "pae"
  },
  {
    "kr": "팩",
    "en": "paeg"
  },
  {
    "kr": "팪",
    "en": "paegg"
  },
  {
    "kr": "팫",
    "en": "paegs"
  },
  {
    "kr": "팬",
    "en": "paen"
  },
  {
    "kr": "팭",
    "en": "paenj"
  },
  {
    "kr": "팮",
    "en": "paenh"
  },
  {
    "kr": "팯",
    "en": "paed"
  },
  {
    "kr": "팰",
    "en": "pael"
  },
  {
    "kr": "팱",
    "en": "paelg"
  },
  {
    "kr": "팲",
    "en": "paelm"
  },
  {
    "kr": "팳",
    "en": "paelb"
  },
  {
    "kr": "팴",
    "en": "paels"
  },
  {
    "kr": "팵",
    "en": "paelt"
  },
  {
    "kr": "팶",
    "en": "paelp"
  },
  {
    "kr": "팷",
    "en": "paelh"
  },
  {
    "kr": "팸",
    "en": "paem"
  },
  {
    "kr": "팹",
    "en": "paeb"
  },
  {
    "kr": "팺",
    "en": "paebs"
  },
  {
    "kr": "팻",
    "en": "paes"
  },
  {
    "kr": "팼",
    "en": "paess"
  },
  {
    "kr": "팽",
    "en": "paeng"
  },
  {
    "kr": "팾",
    "en": "paej"
  },
  {
    "kr": "팿",
    "en": "paec"
  },
  {
    "kr": "퍀",
    "en": "paek"
  },
  {
    "kr": "퍁",
    "en": "paet"
  },
  {
    "kr": "퍂",
    "en": "paep"
  },
  {
    "kr": "퍃",
    "en": "paeh"
  },
  {
    "kr": "퍄",
    "en": "pya"
  },
  {
    "kr": "퍅",
    "en": "pyag"
  },
  {
    "kr": "퍆",
    "en": "pyagg"
  },
  {
    "kr": "퍇",
    "en": "pyags"
  },
  {
    "kr": "퍈",
    "en": "pyan"
  },
  {
    "kr": "퍉",
    "en": "pyanj"
  },
  {
    "kr": "퍊",
    "en": "pyanh"
  },
  {
    "kr": "퍋",
    "en": "pyad"
  },
  {
    "kr": "퍌",
    "en": "pyal"
  },
  {
    "kr": "퍍",
    "en": "pyalg"
  },
  {
    "kr": "퍎",
    "en": "pyalm"
  },
  {
    "kr": "퍏",
    "en": "pyalb"
  },
  {
    "kr": "퍐",
    "en": "pyals"
  },
  {
    "kr": "퍑",
    "en": "pyalt"
  },
  {
    "kr": "퍒",
    "en": "pyalp"
  },
  {
    "kr": "퍓",
    "en": "pyalh"
  },
  {
    "kr": "퍔",
    "en": "pyam"
  },
  {
    "kr": "퍕",
    "en": "pyab"
  },
  {
    "kr": "퍖",
    "en": "pyabs"
  },
  {
    "kr": "퍗",
    "en": "pyas"
  },
  {
    "kr": "퍘",
    "en": "pyass"
  },
  {
    "kr": "퍙",
    "en": "pyang"
  },
  {
    "kr": "퍚",
    "en": "pyaj"
  },
  {
    "kr": "퍛",
    "en": "pyac"
  },
  {
    "kr": "퍜",
    "en": "pyak"
  },
  {
    "kr": "퍝",
    "en": "pyat"
  },
  {
    "kr": "퍞",
    "en": "pyap"
  },
  {
    "kr": "퍟",
    "en": "pyah"
  },
  {
    "kr": "퍠",
    "en": "pyae"
  },
  {
    "kr": "퍡",
    "en": "pyaeg"
  },
  {
    "kr": "퍢",
    "en": "pyaegg"
  },
  {
    "kr": "퍣",
    "en": "pyaegs"
  },
  {
    "kr": "퍤",
    "en": "pyaen"
  },
  {
    "kr": "퍥",
    "en": "pyaenj"
  },
  {
    "kr": "퍦",
    "en": "pyaenh"
  },
  {
    "kr": "퍧",
    "en": "pyaed"
  },
  {
    "kr": "퍨",
    "en": "pyael"
  },
  {
    "kr": "퍩",
    "en": "pyaelg"
  },
  {
    "kr": "퍪",
    "en": "pyaelm"
  },
  {
    "kr": "퍫",
    "en": "pyaelb"
  },
  {
    "kr": "퍬",
    "en": "pyaels"
  },
  {
    "kr": "퍭",
    "en": "pyaelt"
  },
  {
    "kr": "퍮",
    "en": "pyaelp"
  },
  {
    "kr": "퍯",
    "en": "pyaelh"
  },
  {
    "kr": "퍰",
    "en": "pyaem"
  },
  {
    "kr": "퍱",
    "en": "pyaeb"
  },
  {
    "kr": "퍲",
    "en": "pyaebs"
  },
  {
    "kr": "퍳",
    "en": "pyaes"
  },
  {
    "kr": "퍴",
    "en": "pyaess"
  },
  {
    "kr": "퍵",
    "en": "pyaeng"
  },
  {
    "kr": "퍶",
    "en": "pyaej"
  },
  {
    "kr": "퍷",
    "en": "pyaec"
  },
  {
    "kr": "퍸",
    "en": "pyaek"
  },
  {
    "kr": "퍹",
    "en": "pyaet"
  },
  {
    "kr": "퍺",
    "en": "pyaep"
  },
  {
    "kr": "퍻",
    "en": "pyaeh"
  },
  {
    "kr": "퍼",
    "en": "peo"
  },
  {
    "kr": "퍽",
    "en": "peog"
  },
  {
    "kr": "퍾",
    "en": "peogg"
  },
  {
    "kr": "퍿",
    "en": "peogs"
  },
  {
    "kr": "펀",
    "en": "peon"
  },
  {
    "kr": "펁",
    "en": "peonj"
  },
  {
    "kr": "펂",
    "en": "peonh"
  },
  {
    "kr": "펃",
    "en": "peod"
  },
  {
    "kr": "펄",
    "en": "peol"
  },
  {
    "kr": "펅",
    "en": "peolg"
  },
  {
    "kr": "펆",
    "en": "peolm"
  },
  {
    "kr": "펇",
    "en": "peolb"
  },
  {
    "kr": "펈",
    "en": "peols"
  },
  {
    "kr": "펉",
    "en": "peolt"
  },
  {
    "kr": "펊",
    "en": "peolp"
  },
  {
    "kr": "펋",
    "en": "peolh"
  },
  {
    "kr": "펌",
    "en": "peom"
  },
  {
    "kr": "펍",
    "en": "peob"
  },
  {
    "kr": "펎",
    "en": "peobs"
  },
  {
    "kr": "펏",
    "en": "peos"
  },
  {
    "kr": "펐",
    "en": "peoss"
  },
  {
    "kr": "펑",
    "en": "peong"
  },
  {
    "kr": "펒",
    "en": "peoj"
  },
  {
    "kr": "펓",
    "en": "peoc"
  },
  {
    "kr": "펔",
    "en": "peok"
  },
  {
    "kr": "펕",
    "en": "peot"
  },
  {
    "kr": "펖",
    "en": "peop"
  },
  {
    "kr": "펗",
    "en": "peoh"
  },
  {
    "kr": "페",
    "en": "pe"
  },
  {
    "kr": "펙",
    "en": "peg"
  },
  {
    "kr": "펚",
    "en": "pegg"
  },
  {
    "kr": "펛",
    "en": "pegs"
  },
  {
    "kr": "펜",
    "en": "pen"
  },
  {
    "kr": "펝",
    "en": "penj"
  },
  {
    "kr": "펞",
    "en": "penh"
  },
  {
    "kr": "펟",
    "en": "ped"
  },
  {
    "kr": "펠",
    "en": "pel"
  },
  {
    "kr": "펡",
    "en": "pelg"
  },
  {
    "kr": "펢",
    "en": "pelm"
  },
  {
    "kr": "펣",
    "en": "pelb"
  },
  {
    "kr": "펤",
    "en": "pels"
  },
  {
    "kr": "펥",
    "en": "pelt"
  },
  {
    "kr": "펦",
    "en": "pelp"
  },
  {
    "kr": "펧",
    "en": "pelh"
  },
  {
    "kr": "펨",
    "en": "pem"
  },
  {
    "kr": "펩",
    "en": "peb"
  },
  {
    "kr": "펪",
    "en": "pebs"
  },
  {
    "kr": "펫",
    "en": "pes"
  },
  {
    "kr": "펬",
    "en": "pess"
  },
  {
    "kr": "펭",
    "en": "peng"
  },
  {
    "kr": "펮",
    "en": "pej"
  },
  {
    "kr": "펯",
    "en": "pec"
  },
  {
    "kr": "펰",
    "en": "pek"
  },
  {
    "kr": "펱",
    "en": "pet"
  },
  {
    "kr": "펲",
    "en": "pep"
  },
  {
    "kr": "펳",
    "en": "peh"
  },
  {
    "kr": "펴",
    "en": "pyeo"
  },
  {
    "kr": "펵",
    "en": "pyeog"
  },
  {
    "kr": "펶",
    "en": "pyeogg"
  },
  {
    "kr": "펷",
    "en": "pyeogs"
  },
  {
    "kr": "편",
    "en": "pyeon"
  },
  {
    "kr": "펹",
    "en": "pyeonj"
  },
  {
    "kr": "펺",
    "en": "pyeonh"
  },
  {
    "kr": "펻",
    "en": "pyeod"
  },
  {
    "kr": "펼",
    "en": "pyeol"
  },
  {
    "kr": "펽",
    "en": "pyeolg"
  },
  {
    "kr": "펾",
    "en": "pyeolm"
  },
  {
    "kr": "펿",
    "en": "pyeolb"
  },
  {
    "kr": "폀",
    "en": "pyeols"
  },
  {
    "kr": "폁",
    "en": "pyeolt"
  },
  {
    "kr": "폂",
    "en": "pyeolp"
  },
  {
    "kr": "폃",
    "en": "pyeolh"
  },
  {
    "kr": "폄",
    "en": "pyeom"
  },
  {
    "kr": "폅",
    "en": "pyeob"
  },
  {
    "kr": "폆",
    "en": "pyeobs"
  },
  {
    "kr": "폇",
    "en": "pyeos"
  },
  {
    "kr": "폈",
    "en": "pyeoss"
  },
  {
    "kr": "평",
    "en": "pyeong"
  },
  {
    "kr": "폊",
    "en": "pyeoj"
  },
  {
    "kr": "폋",
    "en": "pyeoc"
  },
  {
    "kr": "폌",
    "en": "pyeok"
  },
  {
    "kr": "폍",
    "en": "pyeot"
  },
  {
    "kr": "폎",
    "en": "pyeop"
  },
  {
    "kr": "폏",
    "en": "pyeoh"
  },
  {
    "kr": "폐",
    "en": "pye"
  },
  {
    "kr": "폑",
    "en": "pyeg"
  },
  {
    "kr": "폒",
    "en": "pyegg"
  },
  {
    "kr": "폓",
    "en": "pyegs"
  },
  {
    "kr": "폔",
    "en": "pyen"
  },
  {
    "kr": "폕",
    "en": "pyenj"
  },
  {
    "kr": "폖",
    "en": "pyenh"
  },
  {
    "kr": "폗",
    "en": "pyed"
  },
  {
    "kr": "폘",
    "en": "pyel"
  },
  {
    "kr": "폙",
    "en": "pyelg"
  },
  {
    "kr": "폚",
    "en": "pyelm"
  },
  {
    "kr": "폛",
    "en": "pyelb"
  },
  {
    "kr": "폜",
    "en": "pyels"
  },
  {
    "kr": "폝",
    "en": "pyelt"
  },
  {
    "kr": "폞",
    "en": "pyelp"
  },
  {
    "kr": "폟",
    "en": "pyelh"
  },
  {
    "kr": "폠",
    "en": "pyem"
  },
  {
    "kr": "폡",
    "en": "pyeb"
  },
  {
    "kr": "폢",
    "en": "pyebs"
  },
  {
    "kr": "폣",
    "en": "pyes"
  },
  {
    "kr": "폤",
    "en": "pyess"
  },
  {
    "kr": "폥",
    "en": "pyeng"
  },
  {
    "kr": "폦",
    "en": "pyej"
  },
  {
    "kr": "폧",
    "en": "pyec"
  },
  {
    "kr": "폨",
    "en": "pyek"
  },
  {
    "kr": "폩",
    "en": "pyet"
  },
  {
    "kr": "폪",
    "en": "pyep"
  },
  {
    "kr": "폫",
    "en": "pyeh"
  },
  {
    "kr": "포",
    "en": "po"
  },
  {
    "kr": "폭",
    "en": "pog"
  },
  {
    "kr": "폮",
    "en": "pogg"
  },
  {
    "kr": "폯",
    "en": "pogs"
  },
  {
    "kr": "폰",
    "en": "pon"
  },
  {
    "kr": "폱",
    "en": "ponj"
  },
  {
    "kr": "폲",
    "en": "ponh"
  },
  {
    "kr": "폳",
    "en": "pod"
  },
  {
    "kr": "폴",
    "en": "pol"
  },
  {
    "kr": "폵",
    "en": "polg"
  },
  {
    "kr": "폶",
    "en": "polm"
  },
  {
    "kr": "폷",
    "en": "polb"
  },
  {
    "kr": "폸",
    "en": "pols"
  },
  {
    "kr": "폹",
    "en": "polt"
  },
  {
    "kr": "폺",
    "en": "polp"
  },
  {
    "kr": "폻",
    "en": "polh"
  },
  {
    "kr": "폼",
    "en": "pom"
  },
  {
    "kr": "폽",
    "en": "pob"
  },
  {
    "kr": "폾",
    "en": "pobs"
  },
  {
    "kr": "폿",
    "en": "pos"
  },
  {
    "kr": "퐀",
    "en": "poss"
  },
  {
    "kr": "퐁",
    "en": "pong"
  },
  {
    "kr": "퐂",
    "en": "poj"
  },
  {
    "kr": "퐃",
    "en": "poc"
  },
  {
    "kr": "퐄",
    "en": "pok"
  },
  {
    "kr": "퐅",
    "en": "pot"
  },
  {
    "kr": "퐆",
    "en": "pop"
  },
  {
    "kr": "퐇",
    "en": "poh"
  },
  {
    "kr": "퐈",
    "en": "pwa"
  },
  {
    "kr": "퐉",
    "en": "pwag"
  },
  {
    "kr": "퐊",
    "en": "pwagg"
  },
  {
    "kr": "퐋",
    "en": "pwags"
  },
  {
    "kr": "퐌",
    "en": "pwan"
  },
  {
    "kr": "퐍",
    "en": "pwanj"
  },
  {
    "kr": "퐎",
    "en": "pwanh"
  },
  {
    "kr": "퐏",
    "en": "pwad"
  },
  {
    "kr": "퐐",
    "en": "pwal"
  },
  {
    "kr": "퐑",
    "en": "pwalg"
  },
  {
    "kr": "퐒",
    "en": "pwalm"
  },
  {
    "kr": "퐓",
    "en": "pwalb"
  },
  {
    "kr": "퐔",
    "en": "pwals"
  },
  {
    "kr": "퐕",
    "en": "pwalt"
  },
  {
    "kr": "퐖",
    "en": "pwalp"
  },
  {
    "kr": "퐗",
    "en": "pwalh"
  },
  {
    "kr": "퐘",
    "en": "pwam"
  },
  {
    "kr": "퐙",
    "en": "pwab"
  },
  {
    "kr": "퐚",
    "en": "pwabs"
  },
  {
    "kr": "퐛",
    "en": "pwas"
  },
  {
    "kr": "퐜",
    "en": "pwass"
  },
  {
    "kr": "퐝",
    "en": "pwang"
  },
  {
    "kr": "퐞",
    "en": "pwaj"
  },
  {
    "kr": "퐟",
    "en": "pwac"
  },
  {
    "kr": "퐠",
    "en": "pwak"
  },
  {
    "kr": "퐡",
    "en": "pwat"
  },
  {
    "kr": "퐢",
    "en": "pwap"
  },
  {
    "kr": "퐣",
    "en": "pwah"
  },
  {
    "kr": "퐤",
    "en": "pwae"
  },
  {
    "kr": "퐥",
    "en": "pwaeg"
  },
  {
    "kr": "퐦",
    "en": "pwaegg"
  },
  {
    "kr": "퐧",
    "en": "pwaegs"
  },
  {
    "kr": "퐨",
    "en": "pwaen"
  },
  {
    "kr": "퐩",
    "en": "pwaenj"
  },
  {
    "kr": "퐪",
    "en": "pwaenh"
  },
  {
    "kr": "퐫",
    "en": "pwaed"
  },
  {
    "kr": "퐬",
    "en": "pwael"
  },
  {
    "kr": "퐭",
    "en": "pwaelg"
  },
  {
    "kr": "퐮",
    "en": "pwaelm"
  },
  {
    "kr": "퐯",
    "en": "pwaelb"
  },
  {
    "kr": "퐰",
    "en": "pwaels"
  },
  {
    "kr": "퐱",
    "en": "pwaelt"
  },
  {
    "kr": "퐲",
    "en": "pwaelp"
  },
  {
    "kr": "퐳",
    "en": "pwaelh"
  },
  {
    "kr": "퐴",
    "en": "pwaem"
  },
  {
    "kr": "퐵",
    "en": "pwaeb"
  },
  {
    "kr": "퐶",
    "en": "pwaebs"
  },
  {
    "kr": "퐷",
    "en": "pwaes"
  },
  {
    "kr": "퐸",
    "en": "pwaess"
  },
  {
    "kr": "퐹",
    "en": "pwaeng"
  },
  {
    "kr": "퐺",
    "en": "pwaej"
  },
  {
    "kr": "퐻",
    "en": "pwaec"
  },
  {
    "kr": "퐼",
    "en": "pwaek"
  },
  {
    "kr": "퐽",
    "en": "pwaet"
  },
  {
    "kr": "퐾",
    "en": "pwaep"
  },
  {
    "kr": "퐿",
    "en": "pwaeh"
  },
  {
    "kr": "푀",
    "en": "poe"
  },
  {
    "kr": "푁",
    "en": "poeg"
  },
  {
    "kr": "푂",
    "en": "poegg"
  },
  {
    "kr": "푃",
    "en": "poegs"
  },
  {
    "kr": "푄",
    "en": "poen"
  },
  {
    "kr": "푅",
    "en": "poenj"
  },
  {
    "kr": "푆",
    "en": "poenh"
  },
  {
    "kr": "푇",
    "en": "poed"
  },
  {
    "kr": "푈",
    "en": "poel"
  },
  {
    "kr": "푉",
    "en": "poelg"
  },
  {
    "kr": "푊",
    "en": "poelm"
  },
  {
    "kr": "푋",
    "en": "poelb"
  },
  {
    "kr": "푌",
    "en": "poels"
  },
  {
    "kr": "푍",
    "en": "poelt"
  },
  {
    "kr": "푎",
    "en": "poelp"
  },
  {
    "kr": "푏",
    "en": "poelh"
  },
  {
    "kr": "푐",
    "en": "poem"
  },
  {
    "kr": "푑",
    "en": "poeb"
  },
  {
    "kr": "푒",
    "en": "poebs"
  },
  {
    "kr": "푓",
    "en": "poes"
  },
  {
    "kr": "푔",
    "en": "poess"
  },
  {
    "kr": "푕",
    "en": "poeng"
  },
  {
    "kr": "푖",
    "en": "poej"
  },
  {
    "kr": "푗",
    "en": "poec"
  },
  {
    "kr": "푘",
    "en": "poek"
  },
  {
    "kr": "푙",
    "en": "poet"
  },
  {
    "kr": "푚",
    "en": "poep"
  },
  {
    "kr": "푛",
    "en": "poeh"
  },
  {
    "kr": "표",
    "en": "pyo"
  },
  {
    "kr": "푝",
    "en": "pyog"
  },
  {
    "kr": "푞",
    "en": "pyogg"
  },
  {
    "kr": "푟",
    "en": "pyogs"
  },
  {
    "kr": "푠",
    "en": "pyon"
  },
  {
    "kr": "푡",
    "en": "pyonj"
  },
  {
    "kr": "푢",
    "en": "pyonh"
  },
  {
    "kr": "푣",
    "en": "pyod"
  },
  {
    "kr": "푤",
    "en": "pyol"
  },
  {
    "kr": "푥",
    "en": "pyolg"
  },
  {
    "kr": "푦",
    "en": "pyolm"
  },
  {
    "kr": "푧",
    "en": "pyolb"
  },
  {
    "kr": "푨",
    "en": "pyols"
  },
  {
    "kr": "푩",
    "en": "pyolt"
  },
  {
    "kr": "푪",
    "en": "pyolp"
  },
  {
    "kr": "푫",
    "en": "pyolh"
  },
  {
    "kr": "푬",
    "en": "pyom"
  },
  {
    "kr": "푭",
    "en": "pyob"
  },
  {
    "kr": "푮",
    "en": "pyobs"
  },
  {
    "kr": "푯",
    "en": "pyos"
  },
  {
    "kr": "푰",
    "en": "pyoss"
  },
  {
    "kr": "푱",
    "en": "pyong"
  },
  {
    "kr": "푲",
    "en": "pyoj"
  },
  {
    "kr": "푳",
    "en": "pyoc"
  },
  {
    "kr": "푴",
    "en": "pyok"
  },
  {
    "kr": "푵",
    "en": "pyot"
  },
  {
    "kr": "푶",
    "en": "pyop"
  },
  {
    "kr": "푷",
    "en": "pyoh"
  },
  {
    "kr": "푸",
    "en": "pu"
  },
  {
    "kr": "푹",
    "en": "pug"
  },
  {
    "kr": "푺",
    "en": "pugg"
  },
  {
    "kr": "푻",
    "en": "pugs"
  },
  {
    "kr": "푼",
    "en": "pun"
  },
  {
    "kr": "푽",
    "en": "punj"
  },
  {
    "kr": "푾",
    "en": "punh"
  },
  {
    "kr": "푿",
    "en": "pud"
  },
  {
    "kr": "풀",
    "en": "pul"
  },
  {
    "kr": "풁",
    "en": "pulg"
  },
  {
    "kr": "풂",
    "en": "pulm"
  },
  {
    "kr": "풃",
    "en": "pulb"
  },
  {
    "kr": "풄",
    "en": "puls"
  },
  {
    "kr": "풅",
    "en": "pult"
  },
  {
    "kr": "풆",
    "en": "pulp"
  },
  {
    "kr": "풇",
    "en": "pulh"
  },
  {
    "kr": "품",
    "en": "pum"
  },
  {
    "kr": "풉",
    "en": "pub"
  },
  {
    "kr": "풊",
    "en": "pubs"
  },
  {
    "kr": "풋",
    "en": "pus"
  },
  {
    "kr": "풌",
    "en": "puss"
  },
  {
    "kr": "풍",
    "en": "pung"
  },
  {
    "kr": "풎",
    "en": "puj"
  },
  {
    "kr": "풏",
    "en": "puc"
  },
  {
    "kr": "풐",
    "en": "puk"
  },
  {
    "kr": "풑",
    "en": "put"
  },
  {
    "kr": "풒",
    "en": "pup"
  },
  {
    "kr": "풓",
    "en": "puh"
  },
  {
    "kr": "풔",
    "en": "pweo"
  },
  {
    "kr": "풕",
    "en": "pweog"
  },
  {
    "kr": "풖",
    "en": "pweogg"
  },
  {
    "kr": "풗",
    "en": "pweogs"
  },
  {
    "kr": "풘",
    "en": "pweon"
  },
  {
    "kr": "풙",
    "en": "pweonj"
  },
  {
    "kr": "풚",
    "en": "pweonh"
  },
  {
    "kr": "풛",
    "en": "pweod"
  },
  {
    "kr": "풜",
    "en": "pweol"
  },
  {
    "kr": "풝",
    "en": "pweolg"
  },
  {
    "kr": "풞",
    "en": "pweolm"
  },
  {
    "kr": "풟",
    "en": "pweolb"
  },
  {
    "kr": "풠",
    "en": "pweols"
  },
  {
    "kr": "풡",
    "en": "pweolt"
  },
  {
    "kr": "풢",
    "en": "pweolp"
  },
  {
    "kr": "풣",
    "en": "pweolh"
  },
  {
    "kr": "풤",
    "en": "pweom"
  },
  {
    "kr": "풥",
    "en": "pweob"
  },
  {
    "kr": "풦",
    "en": "pweobs"
  },
  {
    "kr": "풧",
    "en": "pweos"
  },
  {
    "kr": "풨",
    "en": "pweoss"
  },
  {
    "kr": "풩",
    "en": "pweong"
  },
  {
    "kr": "풪",
    "en": "pweoj"
  },
  {
    "kr": "풫",
    "en": "pweoc"
  },
  {
    "kr": "풬",
    "en": "pweok"
  },
  {
    "kr": "풭",
    "en": "pweot"
  },
  {
    "kr": "풮",
    "en": "pweop"
  },
  {
    "kr": "풯",
    "en": "pweoh"
  },
  {
    "kr": "풰",
    "en": "pwe"
  },
  {
    "kr": "풱",
    "en": "pweg"
  },
  {
    "kr": "풲",
    "en": "pwegg"
  },
  {
    "kr": "풳",
    "en": "pwegs"
  },
  {
    "kr": "풴",
    "en": "pwen"
  },
  {
    "kr": "풵",
    "en": "pwenj"
  },
  {
    "kr": "풶",
    "en": "pwenh"
  },
  {
    "kr": "풷",
    "en": "pwed"
  },
  {
    "kr": "풸",
    "en": "pwel"
  },
  {
    "kr": "풹",
    "en": "pwelg"
  },
  {
    "kr": "풺",
    "en": "pwelm"
  },
  {
    "kr": "풻",
    "en": "pwelb"
  },
  {
    "kr": "풼",
    "en": "pwels"
  },
  {
    "kr": "풽",
    "en": "pwelt"
  },
  {
    "kr": "풾",
    "en": "pwelp"
  },
  {
    "kr": "풿",
    "en": "pwelh"
  },
  {
    "kr": "퓀",
    "en": "pwem"
  },
  {
    "kr": "퓁",
    "en": "pweb"
  },
  {
    "kr": "퓂",
    "en": "pwebs"
  },
  {
    "kr": "퓃",
    "en": "pwes"
  },
  {
    "kr": "퓄",
    "en": "pwess"
  },
  {
    "kr": "퓅",
    "en": "pweng"
  },
  {
    "kr": "퓆",
    "en": "pwej"
  },
  {
    "kr": "퓇",
    "en": "pwec"
  },
  {
    "kr": "퓈",
    "en": "pwek"
  },
  {
    "kr": "퓉",
    "en": "pwet"
  },
  {
    "kr": "퓊",
    "en": "pwep"
  },
  {
    "kr": "퓋",
    "en": "pweh"
  },
  {
    "kr": "퓌",
    "en": "pwi"
  },
  {
    "kr": "퓍",
    "en": "pwig"
  },
  {
    "kr": "퓎",
    "en": "pwigg"
  },
  {
    "kr": "퓏",
    "en": "pwigs"
  },
  {
    "kr": "퓐",
    "en": "pwin"
  },
  {
    "kr": "퓑",
    "en": "pwinj"
  },
  {
    "kr": "퓒",
    "en": "pwinh"
  },
  {
    "kr": "퓓",
    "en": "pwid"
  },
  {
    "kr": "퓔",
    "en": "pwil"
  },
  {
    "kr": "퓕",
    "en": "pwilg"
  },
  {
    "kr": "퓖",
    "en": "pwilm"
  },
  {
    "kr": "퓗",
    "en": "pwilb"
  },
  {
    "kr": "퓘",
    "en": "pwils"
  },
  {
    "kr": "퓙",
    "en": "pwilt"
  },
  {
    "kr": "퓚",
    "en": "pwilp"
  },
  {
    "kr": "퓛",
    "en": "pwilh"
  },
  {
    "kr": "퓜",
    "en": "pwim"
  },
  {
    "kr": "퓝",
    "en": "pwib"
  },
  {
    "kr": "퓞",
    "en": "pwibs"
  },
  {
    "kr": "퓟",
    "en": "pwis"
  },
  {
    "kr": "퓠",
    "en": "pwiss"
  },
  {
    "kr": "퓡",
    "en": "pwing"
  },
  {
    "kr": "퓢",
    "en": "pwij"
  },
  {
    "kr": "퓣",
    "en": "pwic"
  },
  {
    "kr": "퓤",
    "en": "pwik"
  },
  {
    "kr": "퓥",
    "en": "pwit"
  },
  {
    "kr": "퓦",
    "en": "pwip"
  },
  {
    "kr": "퓧",
    "en": "pwih"
  },
  {
    "kr": "퓨",
    "en": "pyu"
  },
  {
    "kr": "퓩",
    "en": "pyug"
  },
  {
    "kr": "퓪",
    "en": "pyugg"
  },
  {
    "kr": "퓫",
    "en": "pyugs"
  },
  {
    "kr": "퓬",
    "en": "pyun"
  },
  {
    "kr": "퓭",
    "en": "pyunj"
  },
  {
    "kr": "퓮",
    "en": "pyunh"
  },
  {
    "kr": "퓯",
    "en": "pyud"
  },
  {
    "kr": "퓰",
    "en": "pyul"
  },
  {
    "kr": "퓱",
    "en": "pyulg"
  },
  {
    "kr": "퓲",
    "en": "pyulm"
  },
  {
    "kr": "퓳",
    "en": "pyulb"
  },
  {
    "kr": "퓴",
    "en": "pyuls"
  },
  {
    "kr": "퓵",
    "en": "pyult"
  },
  {
    "kr": "퓶",
    "en": "pyulp"
  },
  {
    "kr": "퓷",
    "en": "pyulh"
  },
  {
    "kr": "퓸",
    "en": "pyum"
  },
  {
    "kr": "퓹",
    "en": "pyub"
  },
  {
    "kr": "퓺",
    "en": "pyubs"
  },
  {
    "kr": "퓻",
    "en": "pyus"
  },
  {
    "kr": "퓼",
    "en": "pyuss"
  },
  {
    "kr": "퓽",
    "en": "pyung"
  },
  {
    "kr": "퓾",
    "en": "pyuj"
  },
  {
    "kr": "퓿",
    "en": "pyuc"
  },
  {
    "kr": "픀",
    "en": "pyuk"
  },
  {
    "kr": "픁",
    "en": "pyut"
  },
  {
    "kr": "픂",
    "en": "pyup"
  },
  {
    "kr": "픃",
    "en": "pyuh"
  },
  {
    "kr": "프",
    "en": "peu"
  },
  {
    "kr": "픅",
    "en": "peug"
  },
  {
    "kr": "픆",
    "en": "peugg"
  },
  {
    "kr": "픇",
    "en": "peugs"
  },
  {
    "kr": "픈",
    "en": "peun"
  },
  {
    "kr": "픉",
    "en": "peunj"
  },
  {
    "kr": "픊",
    "en": "peunh"
  },
  {
    "kr": "픋",
    "en": "peud"
  },
  {
    "kr": "플",
    "en": "peul"
  },
  {
    "kr": "픍",
    "en": "peulg"
  },
  {
    "kr": "픎",
    "en": "peulm"
  },
  {
    "kr": "픏",
    "en": "peulb"
  },
  {
    "kr": "픐",
    "en": "peuls"
  },
  {
    "kr": "픑",
    "en": "peult"
  },
  {
    "kr": "픒",
    "en": "peulp"
  },
  {
    "kr": "픓",
    "en": "peulh"
  },
  {
    "kr": "픔",
    "en": "peum"
  },
  {
    "kr": "픕",
    "en": "peub"
  },
  {
    "kr": "픖",
    "en": "peubs"
  },
  {
    "kr": "픗",
    "en": "peus"
  },
  {
    "kr": "픘",
    "en": "peuss"
  },
  {
    "kr": "픙",
    "en": "peung"
  },
  {
    "kr": "픚",
    "en": "peuj"
  },
  {
    "kr": "픛",
    "en": "peuc"
  },
  {
    "kr": "픜",
    "en": "peuk"
  },
  {
    "kr": "픝",
    "en": "peut"
  },
  {
    "kr": "픞",
    "en": "peup"
  },
  {
    "kr": "픟",
    "en": "peuh"
  },
  {
    "kr": "픠",
    "en": "pyi"
  },
  {
    "kr": "픡",
    "en": "pyig"
  },
  {
    "kr": "픢",
    "en": "pyigg"
  },
  {
    "kr": "픣",
    "en": "pyigs"
  },
  {
    "kr": "픤",
    "en": "pyin"
  },
  {
    "kr": "픥",
    "en": "pyinj"
  },
  {
    "kr": "픦",
    "en": "pyinh"
  },
  {
    "kr": "픧",
    "en": "pyid"
  },
  {
    "kr": "픨",
    "en": "pyil"
  },
  {
    "kr": "픩",
    "en": "pyilg"
  },
  {
    "kr": "픪",
    "en": "pyilm"
  },
  {
    "kr": "픫",
    "en": "pyilb"
  },
  {
    "kr": "픬",
    "en": "pyils"
  },
  {
    "kr": "픭",
    "en": "pyilt"
  },
  {
    "kr": "픮",
    "en": "pyilp"
  },
  {
    "kr": "픯",
    "en": "pyilh"
  },
  {
    "kr": "픰",
    "en": "pyim"
  },
  {
    "kr": "픱",
    "en": "pyib"
  },
  {
    "kr": "픲",
    "en": "pyibs"
  },
  {
    "kr": "픳",
    "en": "pyis"
  },
  {
    "kr": "픴",
    "en": "pyiss"
  },
  {
    "kr": "픵",
    "en": "pying"
  },
  {
    "kr": "픶",
    "en": "pyij"
  },
  {
    "kr": "픷",
    "en": "pyic"
  },
  {
    "kr": "픸",
    "en": "pyik"
  },
  {
    "kr": "픹",
    "en": "pyit"
  },
  {
    "kr": "픺",
    "en": "pyip"
  },
  {
    "kr": "픻",
    "en": "pyih"
  },
  {
    "kr": "피",
    "en": "pi"
  },
  {
    "kr": "픽",
    "en": "pig"
  },
  {
    "kr": "픾",
    "en": "pigg"
  },
  {
    "kr": "픿",
    "en": "pigs"
  },
  {
    "kr": "핀",
    "en": "pin"
  },
  {
    "kr": "핁",
    "en": "pinj"
  },
  {
    "kr": "핂",
    "en": "pinh"
  },
  {
    "kr": "핃",
    "en": "pid"
  },
  {
    "kr": "필",
    "en": "pil"
  },
  {
    "kr": "핅",
    "en": "pilg"
  },
  {
    "kr": "핆",
    "en": "pilm"
  },
  {
    "kr": "핇",
    "en": "pilb"
  },
  {
    "kr": "핈",
    "en": "pils"
  },
  {
    "kr": "핉",
    "en": "pilt"
  },
  {
    "kr": "핊",
    "en": "pilp"
  },
  {
    "kr": "핋",
    "en": "pilh"
  },
  {
    "kr": "핌",
    "en": "pim"
  },
  {
    "kr": "핍",
    "en": "pib"
  },
  {
    "kr": "핎",
    "en": "pibs"
  },
  {
    "kr": "핏",
    "en": "pis"
  },
  {
    "kr": "핐",
    "en": "piss"
  },
  {
    "kr": "핑",
    "en": "ping"
  },
  {
    "kr": "핒",
    "en": "pij"
  },
  {
    "kr": "핓",
    "en": "pic"
  },
  {
    "kr": "핔",
    "en": "pik"
  },
  {
    "kr": "핕",
    "en": "pit"
  },
  {
    "kr": "핖",
    "en": "pip"
  },
  {
    "kr": "핗",
    "en": "pih"
  },
  {
    "kr": "하",
    "en": "ha"
  },
  {
    "kr": "학",
    "en": "hag"
  },
  {
    "kr": "핚",
    "en": "hagg"
  },
  {
    "kr": "핛",
    "en": "hags"
  },
  {
    "kr": "한",
    "en": "han"
  },
  {
    "kr": "핝",
    "en": "hanj"
  },
  {
    "kr": "핞",
    "en": "hanh"
  },
  {
    "kr": "핟",
    "en": "had"
  },
  {
    "kr": "할",
    "en": "hal"
  },
  {
    "kr": "핡",
    "en": "halg"
  },
  {
    "kr": "핢",
    "en": "halm"
  },
  {
    "kr": "핣",
    "en": "halb"
  },
  {
    "kr": "핤",
    "en": "hals"
  },
  {
    "kr": "핥",
    "en": "halt"
  },
  {
    "kr": "핦",
    "en": "halp"
  },
  {
    "kr": "핧",
    "en": "halh"
  },
  {
    "kr": "함",
    "en": "ham"
  },
  {
    "kr": "합",
    "en": "hab"
  },
  {
    "kr": "핪",
    "en": "habs"
  },
  {
    "kr": "핫",
    "en": "has"
  },
  {
    "kr": "핬",
    "en": "hass"
  },
  {
    "kr": "항",
    "en": "hang"
  },
  {
    "kr": "핮",
    "en": "haj"
  },
  {
    "kr": "핯",
    "en": "hac"
  },
  {
    "kr": "핰",
    "en": "hak"
  },
  {
    "kr": "핱",
    "en": "hat"
  },
  {
    "kr": "핲",
    "en": "hap"
  },
  {
    "kr": "핳",
    "en": "hah"
  },
  {
    "kr": "해",
    "en": "hae"
  },
  {
    "kr": "핵",
    "en": "haeg"
  },
  {
    "kr": "핶",
    "en": "haegg"
  },
  {
    "kr": "핷",
    "en": "haegs"
  },
  {
    "kr": "핸",
    "en": "haen"
  },
  {
    "kr": "핹",
    "en": "haenj"
  },
  {
    "kr": "핺",
    "en": "haenh"
  },
  {
    "kr": "핻",
    "en": "haed"
  },
  {
    "kr": "핼",
    "en": "hael"
  },
  {
    "kr": "핽",
    "en": "haelg"
  },
  {
    "kr": "핾",
    "en": "haelm"
  },
  {
    "kr": "핿",
    "en": "haelb"
  },
  {
    "kr": "햀",
    "en": "haels"
  },
  {
    "kr": "햁",
    "en": "haelt"
  },
  {
    "kr": "햂",
    "en": "haelp"
  },
  {
    "kr": "햃",
    "en": "haelh"
  },
  {
    "kr": "햄",
    "en": "haem"
  },
  {
    "kr": "햅",
    "en": "haeb"
  },
  {
    "kr": "햆",
    "en": "haebs"
  },
  {
    "kr": "햇",
    "en": "haes"
  },
  {
    "kr": "했",
    "en": "haess"
  },
  {
    "kr": "행",
    "en": "haeng"
  },
  {
    "kr": "햊",
    "en": "haej"
  },
  {
    "kr": "햋",
    "en": "haec"
  },
  {
    "kr": "햌",
    "en": "haek"
  },
  {
    "kr": "햍",
    "en": "haet"
  },
  {
    "kr": "햎",
    "en": "haep"
  },
  {
    "kr": "햏",
    "en": "haeh"
  },
  {
    "kr": "햐",
    "en": "hya"
  },
  {
    "kr": "햑",
    "en": "hyag"
  },
  {
    "kr": "햒",
    "en": "hyagg"
  },
  {
    "kr": "햓",
    "en": "hyags"
  },
  {
    "kr": "햔",
    "en": "hyan"
  },
  {
    "kr": "햕",
    "en": "hyanj"
  },
  {
    "kr": "햖",
    "en": "hyanh"
  },
  {
    "kr": "햗",
    "en": "hyad"
  },
  {
    "kr": "햘",
    "en": "hyal"
  },
  {
    "kr": "햙",
    "en": "hyalg"
  },
  {
    "kr": "햚",
    "en": "hyalm"
  },
  {
    "kr": "햛",
    "en": "hyalb"
  },
  {
    "kr": "햜",
    "en": "hyals"
  },
  {
    "kr": "햝",
    "en": "hyalt"
  },
  {
    "kr": "햞",
    "en": "hyalp"
  },
  {
    "kr": "햟",
    "en": "hyalh"
  },
  {
    "kr": "햠",
    "en": "hyam"
  },
  {
    "kr": "햡",
    "en": "hyab"
  },
  {
    "kr": "햢",
    "en": "hyabs"
  },
  {
    "kr": "햣",
    "en": "hyas"
  },
  {
    "kr": "햤",
    "en": "hyass"
  },
  {
    "kr": "향",
    "en": "hyang"
  },
  {
    "kr": "햦",
    "en": "hyaj"
  },
  {
    "kr": "햧",
    "en": "hyac"
  },
  {
    "kr": "햨",
    "en": "hyak"
  },
  {
    "kr": "햩",
    "en": "hyat"
  },
  {
    "kr": "햪",
    "en": "hyap"
  },
  {
    "kr": "햫",
    "en": "hyah"
  },
  {
    "kr": "햬",
    "en": "hyae"
  },
  {
    "kr": "햭",
    "en": "hyaeg"
  },
  {
    "kr": "햮",
    "en": "hyaegg"
  },
  {
    "kr": "햯",
    "en": "hyaegs"
  },
  {
    "kr": "햰",
    "en": "hyaen"
  },
  {
    "kr": "햱",
    "en": "hyaenj"
  },
  {
    "kr": "햲",
    "en": "hyaenh"
  },
  {
    "kr": "햳",
    "en": "hyaed"
  },
  {
    "kr": "햴",
    "en": "hyael"
  },
  {
    "kr": "햵",
    "en": "hyaelg"
  },
  {
    "kr": "햶",
    "en": "hyaelm"
  },
  {
    "kr": "햷",
    "en": "hyaelb"
  },
  {
    "kr": "햸",
    "en": "hyaels"
  },
  {
    "kr": "햹",
    "en": "hyaelt"
  },
  {
    "kr": "햺",
    "en": "hyaelp"
  },
  {
    "kr": "햻",
    "en": "hyaelh"
  },
  {
    "kr": "햼",
    "en": "hyaem"
  },
  {
    "kr": "햽",
    "en": "hyaeb"
  },
  {
    "kr": "햾",
    "en": "hyaebs"
  },
  {
    "kr": "햿",
    "en": "hyaes"
  },
  {
    "kr": "헀",
    "en": "hyaess"
  },
  {
    "kr": "헁",
    "en": "hyaeng"
  },
  {
    "kr": "헂",
    "en": "hyaej"
  },
  {
    "kr": "헃",
    "en": "hyaec"
  },
  {
    "kr": "헄",
    "en": "hyaek"
  },
  {
    "kr": "헅",
    "en": "hyaet"
  },
  {
    "kr": "헆",
    "en": "hyaep"
  },
  {
    "kr": "헇",
    "en": "hyaeh"
  },
  {
    "kr": "허",
    "en": "heo"
  },
  {
    "kr": "헉",
    "en": "heog"
  },
  {
    "kr": "헊",
    "en": "heogg"
  },
  {
    "kr": "헋",
    "en": "heogs"
  },
  {
    "kr": "헌",
    "en": "heon"
  },
  {
    "kr": "헍",
    "en": "heonj"
  },
  {
    "kr": "헎",
    "en": "heonh"
  },
  {
    "kr": "헏",
    "en": "heod"
  },
  {
    "kr": "헐",
    "en": "heol"
  },
  {
    "kr": "헑",
    "en": "heolg"
  },
  {
    "kr": "헒",
    "en": "heolm"
  },
  {
    "kr": "헓",
    "en": "heolb"
  },
  {
    "kr": "헔",
    "en": "heols"
  },
  {
    "kr": "헕",
    "en": "heolt"
  },
  {
    "kr": "헖",
    "en": "heolp"
  },
  {
    "kr": "헗",
    "en": "heolh"
  },
  {
    "kr": "험",
    "en": "heom"
  },
  {
    "kr": "헙",
    "en": "heob"
  },
  {
    "kr": "헚",
    "en": "heobs"
  },
  {
    "kr": "헛",
    "en": "heos"
  },
  {
    "kr": "헜",
    "en": "heoss"
  },
  {
    "kr": "헝",
    "en": "heong"
  },
  {
    "kr": "헞",
    "en": "heoj"
  },
  {
    "kr": "헟",
    "en": "heoc"
  },
  {
    "kr": "헠",
    "en": "heok"
  },
  {
    "kr": "헡",
    "en": "heot"
  },
  {
    "kr": "헢",
    "en": "heop"
  },
  {
    "kr": "헣",
    "en": "heoh"
  },
  {
    "kr": "헤",
    "en": "he"
  },
  {
    "kr": "헥",
    "en": "heg"
  },
  {
    "kr": "헦",
    "en": "hegg"
  },
  {
    "kr": "헧",
    "en": "hegs"
  },
  {
    "kr": "헨",
    "en": "hen"
  },
  {
    "kr": "헩",
    "en": "henj"
  },
  {
    "kr": "헪",
    "en": "henh"
  },
  {
    "kr": "헫",
    "en": "hed"
  },
  {
    "kr": "헬",
    "en": "hel"
  },
  {
    "kr": "헭",
    "en": "helg"
  },
  {
    "kr": "헮",
    "en": "helm"
  },
  {
    "kr": "헯",
    "en": "helb"
  },
  {
    "kr": "헰",
    "en": "hels"
  },
  {
    "kr": "헱",
    "en": "helt"
  },
  {
    "kr": "헲",
    "en": "help"
  },
  {
    "kr": "헳",
    "en": "helh"
  },
  {
    "kr": "헴",
    "en": "hem"
  },
  {
    "kr": "헵",
    "en": "heb"
  },
  {
    "kr": "헶",
    "en": "hebs"
  },
  {
    "kr": "헷",
    "en": "hes"
  },
  {
    "kr": "헸",
    "en": "hess"
  },
  {
    "kr": "헹",
    "en": "heng"
  },
  {
    "kr": "헺",
    "en": "hej"
  },
  {
    "kr": "헻",
    "en": "hec"
  },
  {
    "kr": "헼",
    "en": "hek"
  },
  {
    "kr": "헽",
    "en": "het"
  },
  {
    "kr": "헾",
    "en": "hep"
  },
  {
    "kr": "헿",
    "en": "heh"
  },
  {
    "kr": "혀",
    "en": "hyeo"
  },
  {
    "kr": "혁",
    "en": "hyeog"
  },
  {
    "kr": "혂",
    "en": "hyeogg"
  },
  {
    "kr": "혃",
    "en": "hyeogs"
  },
  {
    "kr": "현",
    "en": "hyeon"
  },
  {
    "kr": "혅",
    "en": "hyeonj"
  },
  {
    "kr": "혆",
    "en": "hyeonh"
  },
  {
    "kr": "혇",
    "en": "hyeod"
  },
  {
    "kr": "혈",
    "en": "hyeol"
  },
  {
    "kr": "혉",
    "en": "hyeolg"
  },
  {
    "kr": "혊",
    "en": "hyeolm"
  },
  {
    "kr": "혋",
    "en": "hyeolb"
  },
  {
    "kr": "혌",
    "en": "hyeols"
  },
  {
    "kr": "혍",
    "en": "hyeolt"
  },
  {
    "kr": "혎",
    "en": "hyeolp"
  },
  {
    "kr": "혏",
    "en": "hyeolh"
  },
  {
    "kr": "혐",
    "en": "hyeom"
  },
  {
    "kr": "협",
    "en": "hyeob"
  },
  {
    "kr": "혒",
    "en": "hyeobs"
  },
  {
    "kr": "혓",
    "en": "hyeos"
  },
  {
    "kr": "혔",
    "en": "hyeoss"
  },
  {
    "kr": "형",
    "en": "hyeong"
  },
  {
    "kr": "혖",
    "en": "hyeoj"
  },
  {
    "kr": "혗",
    "en": "hyeoc"
  },
  {
    "kr": "혘",
    "en": "hyeok"
  },
  {
    "kr": "혙",
    "en": "hyeot"
  },
  {
    "kr": "혚",
    "en": "hyeop"
  },
  {
    "kr": "혛",
    "en": "hyeoh"
  },
  {
    "kr": "혜",
    "en": "hye"
  },
  {
    "kr": "혝",
    "en": "hyeg"
  },
  {
    "kr": "혞",
    "en": "hyegg"
  },
  {
    "kr": "혟",
    "en": "hyegs"
  },
  {
    "kr": "혠",
    "en": "hyen"
  },
  {
    "kr": "혡",
    "en": "hyenj"
  },
  {
    "kr": "혢",
    "en": "hyenh"
  },
  {
    "kr": "혣",
    "en": "hyed"
  },
  {
    "kr": "혤",
    "en": "hyel"
  },
  {
    "kr": "혥",
    "en": "hyelg"
  },
  {
    "kr": "혦",
    "en": "hyelm"
  },
  {
    "kr": "혧",
    "en": "hyelb"
  },
  {
    "kr": "혨",
    "en": "hyels"
  },
  {
    "kr": "혩",
    "en": "hyelt"
  },
  {
    "kr": "혪",
    "en": "hyelp"
  },
  {
    "kr": "혫",
    "en": "hyelh"
  },
  {
    "kr": "혬",
    "en": "hyem"
  },
  {
    "kr": "혭",
    "en": "hyeb"
  },
  {
    "kr": "혮",
    "en": "hyebs"
  },
  {
    "kr": "혯",
    "en": "hyes"
  },
  {
    "kr": "혰",
    "en": "hyess"
  },
  {
    "kr": "혱",
    "en": "hyeng"
  },
  {
    "kr": "혲",
    "en": "hyej"
  },
  {
    "kr": "혳",
    "en": "hyec"
  },
  {
    "kr": "혴",
    "en": "hyek"
  },
  {
    "kr": "혵",
    "en": "hyet"
  },
  {
    "kr": "혶",
    "en": "hyep"
  },
  {
    "kr": "혷",
    "en": "hyeh"
  },
  {
    "kr": "호",
    "en": "ho"
  },
  {
    "kr": "혹",
    "en": "hog"
  },
  {
    "kr": "혺",
    "en": "hogg"
  },
  {
    "kr": "혻",
    "en": "hogs"
  },
  {
    "kr": "혼",
    "en": "hon"
  },
  {
    "kr": "혽",
    "en": "honj"
  },
  {
    "kr": "혾",
    "en": "honh"
  },
  {
    "kr": "혿",
    "en": "hod"
  },
  {
    "kr": "홀",
    "en": "hol"
  },
  {
    "kr": "홁",
    "en": "holg"
  },
  {
    "kr": "홂",
    "en": "holm"
  },
  {
    "kr": "홃",
    "en": "holb"
  },
  {
    "kr": "홄",
    "en": "hols"
  },
  {
    "kr": "홅",
    "en": "holt"
  },
  {
    "kr": "홆",
    "en": "holp"
  },
  {
    "kr": "홇",
    "en": "holh"
  },
  {
    "kr": "홈",
    "en": "hom"
  },
  {
    "kr": "홉",
    "en": "hob"
  },
  {
    "kr": "홊",
    "en": "hobs"
  },
  {
    "kr": "홋",
    "en": "hos"
  },
  {
    "kr": "홌",
    "en": "hoss"
  },
  {
    "kr": "홍",
    "en": "hong"
  },
  {
    "kr": "홎",
    "en": "hoj"
  },
  {
    "kr": "홏",
    "en": "hoc"
  },
  {
    "kr": "홐",
    "en": "hok"
  },
  {
    "kr": "홑",
    "en": "hot"
  },
  {
    "kr": "홒",
    "en": "hop"
  },
  {
    "kr": "홓",
    "en": "hoh"
  },
  {
    "kr": "화",
    "en": "hwa"
  },
  {
    "kr": "확",
    "en": "hwag"
  },
  {
    "kr": "홖",
    "en": "hwagg"
  },
  {
    "kr": "홗",
    "en": "hwags"
  },
  {
    "kr": "환",
    "en": "hwan"
  },
  {
    "kr": "홙",
    "en": "hwanj"
  },
  {
    "kr": "홚",
    "en": "hwanh"
  },
  {
    "kr": "홛",
    "en": "hwad"
  },
  {
    "kr": "활",
    "en": "hwal"
  },
  {
    "kr": "홝",
    "en": "hwalg"
  },
  {
    "kr": "홞",
    "en": "hwalm"
  },
  {
    "kr": "홟",
    "en": "hwalb"
  },
  {
    "kr": "홠",
    "en": "hwals"
  },
  {
    "kr": "홡",
    "en": "hwalt"
  },
  {
    "kr": "홢",
    "en": "hwalp"
  },
  {
    "kr": "홣",
    "en": "hwalh"
  },
  {
    "kr": "홤",
    "en": "hwam"
  },
  {
    "kr": "홥",
    "en": "hwab"
  },
  {
    "kr": "홦",
    "en": "hwabs"
  },
  {
    "kr": "홧",
    "en": "hwas"
  },
  {
    "kr": "홨",
    "en": "hwass"
  },
  {
    "kr": "황",
    "en": "hwang"
  },
  {
    "kr": "홪",
    "en": "hwaj"
  },
  {
    "kr": "홫",
    "en": "hwac"
  },
  {
    "kr": "홬",
    "en": "hwak"
  },
  {
    "kr": "홭",
    "en": "hwat"
  },
  {
    "kr": "홮",
    "en": "hwap"
  },
  {
    "kr": "홯",
    "en": "hwah"
  },
  {
    "kr": "홰",
    "en": "hwae"
  },
  {
    "kr": "홱",
    "en": "hwaeg"
  },
  {
    "kr": "홲",
    "en": "hwaegg"
  },
  {
    "kr": "홳",
    "en": "hwaegs"
  },
  {
    "kr": "홴",
    "en": "hwaen"
  },
  {
    "kr": "홵",
    "en": "hwaenj"
  },
  {
    "kr": "홶",
    "en": "hwaenh"
  },
  {
    "kr": "홷",
    "en": "hwaed"
  },
  {
    "kr": "홸",
    "en": "hwael"
  },
  {
    "kr": "홹",
    "en": "hwaelg"
  },
  {
    "kr": "홺",
    "en": "hwaelm"
  },
  {
    "kr": "홻",
    "en": "hwaelb"
  },
  {
    "kr": "홼",
    "en": "hwaels"
  },
  {
    "kr": "홽",
    "en": "hwaelt"
  },
  {
    "kr": "홾",
    "en": "hwaelp"
  },
  {
    "kr": "홿",
    "en": "hwaelh"
  },
  {
    "kr": "횀",
    "en": "hwaem"
  },
  {
    "kr": "횁",
    "en": "hwaeb"
  },
  {
    "kr": "횂",
    "en": "hwaebs"
  },
  {
    "kr": "횃",
    "en": "hwaes"
  },
  {
    "kr": "횄",
    "en": "hwaess"
  },
  {
    "kr": "횅",
    "en": "hwaeng"
  },
  {
    "kr": "횆",
    "en": "hwaej"
  },
  {
    "kr": "횇",
    "en": "hwaec"
  },
  {
    "kr": "횈",
    "en": "hwaek"
  },
  {
    "kr": "횉",
    "en": "hwaet"
  },
  {
    "kr": "횊",
    "en": "hwaep"
  },
  {
    "kr": "횋",
    "en": "hwaeh"
  },
  {
    "kr": "회",
    "en": "hoe"
  },
  {
    "kr": "획",
    "en": "hoeg"
  },
  {
    "kr": "횎",
    "en": "hoegg"
  },
  {
    "kr": "횏",
    "en": "hoegs"
  },
  {
    "kr": "횐",
    "en": "hoen"
  },
  {
    "kr": "횑",
    "en": "hoenj"
  },
  {
    "kr": "횒",
    "en": "hoenh"
  },
  {
    "kr": "횓",
    "en": "hoed"
  },
  {
    "kr": "횔",
    "en": "hoel"
  },
  {
    "kr": "횕",
    "en": "hoelg"
  },
  {
    "kr": "횖",
    "en": "hoelm"
  },
  {
    "kr": "횗",
    "en": "hoelb"
  },
  {
    "kr": "횘",
    "en": "hoels"
  },
  {
    "kr": "횙",
    "en": "hoelt"
  },
  {
    "kr": "횚",
    "en": "hoelp"
  },
  {
    "kr": "횛",
    "en": "hoelh"
  },
  {
    "kr": "횜",
    "en": "hoem"
  },
  {
    "kr": "횝",
    "en": "hoeb"
  },
  {
    "kr": "횞",
    "en": "hoebs"
  },
  {
    "kr": "횟",
    "en": "hoes"
  },
  {
    "kr": "횠",
    "en": "hoess"
  },
  {
    "kr": "횡",
    "en": "hoeng"
  },
  {
    "kr": "횢",
    "en": "hoej"
  },
  {
    "kr": "횣",
    "en": "hoec"
  },
  {
    "kr": "횤",
    "en": "hoek"
  },
  {
    "kr": "횥",
    "en": "hoet"
  },
  {
    "kr": "횦",
    "en": "hoep"
  },
  {
    "kr": "횧",
    "en": "hoeh"
  },
  {
    "kr": "효",
    "en": "hyo"
  },
  {
    "kr": "횩",
    "en": "hyog"
  },
  {
    "kr": "횪",
    "en": "hyogg"
  },
  {
    "kr": "횫",
    "en": "hyogs"
  },
  {
    "kr": "횬",
    "en": "hyon"
  },
  {
    "kr": "횭",
    "en": "hyonj"
  },
  {
    "kr": "횮",
    "en": "hyonh"
  },
  {
    "kr": "횯",
    "en": "hyod"
  },
  {
    "kr": "횰",
    "en": "hyol"
  },
  {
    "kr": "횱",
    "en": "hyolg"
  },
  {
    "kr": "횲",
    "en": "hyolm"
  },
  {
    "kr": "횳",
    "en": "hyolb"
  },
  {
    "kr": "횴",
    "en": "hyols"
  },
  {
    "kr": "횵",
    "en": "hyolt"
  },
  {
    "kr": "횶",
    "en": "hyolp"
  },
  {
    "kr": "횷",
    "en": "hyolh"
  },
  {
    "kr": "횸",
    "en": "hyom"
  },
  {
    "kr": "횹",
    "en": "hyob"
  },
  {
    "kr": "횺",
    "en": "hyobs"
  },
  {
    "kr": "횻",
    "en": "hyos"
  },
  {
    "kr": "횼",
    "en": "hyoss"
  },
  {
    "kr": "횽",
    "en": "hyong"
  },
  {
    "kr": "횾",
    "en": "hyoj"
  },
  {
    "kr": "횿",
    "en": "hyoc"
  },
  {
    "kr": "훀",
    "en": "hyok"
  },
  {
    "kr": "훁",
    "en": "hyot"
  },
  {
    "kr": "훂",
    "en": "hyop"
  },
  {
    "kr": "훃",
    "en": "hyoh"
  },
  {
    "kr": "후",
    "en": "hu"
  },
  {
    "kr": "훅",
    "en": "hug"
  },
  {
    "kr": "훆",
    "en": "hugg"
  },
  {
    "kr": "훇",
    "en": "hugs"
  },
  {
    "kr": "훈",
    "en": "hun"
  },
  {
    "kr": "훉",
    "en": "hunj"
  },
  {
    "kr": "훊",
    "en": "hunh"
  },
  {
    "kr": "훋",
    "en": "hud"
  },
  {
    "kr": "훌",
    "en": "hul"
  },
  {
    "kr": "훍",
    "en": "hulg"
  },
  {
    "kr": "훎",
    "en": "hulm"
  },
  {
    "kr": "훏",
    "en": "hulb"
  },
  {
    "kr": "훐",
    "en": "huls"
  },
  {
    "kr": "훑",
    "en": "hult"
  },
  {
    "kr": "훒",
    "en": "hulp"
  },
  {
    "kr": "훓",
    "en": "hulh"
  },
  {
    "kr": "훔",
    "en": "hum"
  },
  {
    "kr": "훕",
    "en": "hub"
  },
  {
    "kr": "훖",
    "en": "hubs"
  },
  {
    "kr": "훗",
    "en": "hus"
  },
  {
    "kr": "훘",
    "en": "huss"
  },
  {
    "kr": "훙",
    "en": "hung"
  },
  {
    "kr": "훚",
    "en": "huj"
  },
  {
    "kr": "훛",
    "en": "huc"
  },
  {
    "kr": "훜",
    "en": "huk"
  },
  {
    "kr": "훝",
    "en": "hut"
  },
  {
    "kr": "훞",
    "en": "hup"
  },
  {
    "kr": "훟",
    "en": "huh"
  },
  {
    "kr": "훠",
    "en": "hweo"
  },
  {
    "kr": "훡",
    "en": "hweog"
  },
  {
    "kr": "훢",
    "en": "hweogg"
  },
  {
    "kr": "훣",
    "en": "hweogs"
  },
  {
    "kr": "훤",
    "en": "hweon"
  },
  {
    "kr": "훥",
    "en": "hweonj"
  },
  {
    "kr": "훦",
    "en": "hweonh"
  },
  {
    "kr": "훧",
    "en": "hweod"
  },
  {
    "kr": "훨",
    "en": "hweol"
  },
  {
    "kr": "훩",
    "en": "hweolg"
  },
  {
    "kr": "훪",
    "en": "hweolm"
  },
  {
    "kr": "훫",
    "en": "hweolb"
  },
  {
    "kr": "훬",
    "en": "hweols"
  },
  {
    "kr": "훭",
    "en": "hweolt"
  },
  {
    "kr": "훮",
    "en": "hweolp"
  },
  {
    "kr": "훯",
    "en": "hweolh"
  },
  {
    "kr": "훰",
    "en": "hweom"
  },
  {
    "kr": "훱",
    "en": "hweob"
  },
  {
    "kr": "훲",
    "en": "hweobs"
  },
  {
    "kr": "훳",
    "en": "hweos"
  },
  {
    "kr": "훴",
    "en": "hweoss"
  },
  {
    "kr": "훵",
    "en": "hweong"
  },
  {
    "kr": "훶",
    "en": "hweoj"
  },
  {
    "kr": "훷",
    "en": "hweoc"
  },
  {
    "kr": "훸",
    "en": "hweok"
  },
  {
    "kr": "훹",
    "en": "hweot"
  },
  {
    "kr": "훺",
    "en": "hweop"
  },
  {
    "kr": "훻",
    "en": "hweoh"
  },
  {
    "kr": "훼",
    "en": "hwe"
  },
  {
    "kr": "훽",
    "en": "hweg"
  },
  {
    "kr": "훾",
    "en": "hwegg"
  },
  {
    "kr": "훿",
    "en": "hwegs"
  },
  {
    "kr": "휀",
    "en": "hwen"
  },
  {
    "kr": "휁",
    "en": "hwenj"
  },
  {
    "kr": "휂",
    "en": "hwenh"
  },
  {
    "kr": "휃",
    "en": "hwed"
  },
  {
    "kr": "휄",
    "en": "hwel"
  },
  {
    "kr": "휅",
    "en": "hwelg"
  },
  {
    "kr": "휆",
    "en": "hwelm"
  },
  {
    "kr": "휇",
    "en": "hwelb"
  },
  {
    "kr": "휈",
    "en": "hwels"
  },
  {
    "kr": "휉",
    "en": "hwelt"
  },
  {
    "kr": "휊",
    "en": "hwelp"
  },
  {
    "kr": "휋",
    "en": "hwelh"
  },
  {
    "kr": "휌",
    "en": "hwem"
  },
  {
    "kr": "휍",
    "en": "hweb"
  },
  {
    "kr": "휎",
    "en": "hwebs"
  },
  {
    "kr": "휏",
    "en": "hwes"
  },
  {
    "kr": "휐",
    "en": "hwess"
  },
  {
    "kr": "휑",
    "en": "hweng"
  },
  {
    "kr": "휒",
    "en": "hwej"
  },
  {
    "kr": "휓",
    "en": "hwec"
  },
  {
    "kr": "휔",
    "en": "hwek"
  },
  {
    "kr": "휕",
    "en": "hwet"
  },
  {
    "kr": "휖",
    "en": "hwep"
  },
  {
    "kr": "휗",
    "en": "hweh"
  },
  {
    "kr": "휘",
    "en": "hwi"
  },
  {
    "kr": "휙",
    "en": "hwig"
  },
  {
    "kr": "휚",
    "en": "hwigg"
  },
  {
    "kr": "휛",
    "en": "hwigs"
  },
  {
    "kr": "휜",
    "en": "hwin"
  },
  {
    "kr": "휝",
    "en": "hwinj"
  },
  {
    "kr": "휞",
    "en": "hwinh"
  },
  {
    "kr": "휟",
    "en": "hwid"
  },
  {
    "kr": "휠",
    "en": "hwil"
  },
  {
    "kr": "휡",
    "en": "hwilg"
  },
  {
    "kr": "휢",
    "en": "hwilm"
  },
  {
    "kr": "휣",
    "en": "hwilb"
  },
  {
    "kr": "휤",
    "en": "hwils"
  },
  {
    "kr": "휥",
    "en": "hwilt"
  },
  {
    "kr": "휦",
    "en": "hwilp"
  },
  {
    "kr": "휧",
    "en": "hwilh"
  },
  {
    "kr": "휨",
    "en": "hwim"
  },
  {
    "kr": "휩",
    "en": "hwib"
  },
  {
    "kr": "휪",
    "en": "hwibs"
  },
  {
    "kr": "휫",
    "en": "hwis"
  },
  {
    "kr": "휬",
    "en": "hwiss"
  },
  {
    "kr": "휭",
    "en": "hwing"
  },
  {
    "kr": "휮",
    "en": "hwij"
  },
  {
    "kr": "휯",
    "en": "hwic"
  },
  {
    "kr": "휰",
    "en": "hwik"
  },
  {
    "kr": "휱",
    "en": "hwit"
  },
  {
    "kr": "휲",
    "en": "hwip"
  },
  {
    "kr": "휳",
    "en": "hwih"
  },
  {
    "kr": "휴",
    "en": "hyu"
  },
  {
    "kr": "휵",
    "en": "hyug"
  },
  {
    "kr": "휶",
    "en": "hyugg"
  },
  {
    "kr": "휷",
    "en": "hyugs"
  },
  {
    "kr": "휸",
    "en": "hyun"
  },
  {
    "kr": "휹",
    "en": "hyunj"
  },
  {
    "kr": "휺",
    "en": "hyunh"
  },
  {
    "kr": "휻",
    "en": "hyud"
  },
  {
    "kr": "휼",
    "en": "hyul"
  },
  {
    "kr": "휽",
    "en": "hyulg"
  },
  {
    "kr": "휾",
    "en": "hyulm"
  },
  {
    "kr": "휿",
    "en": "hyulb"
  },
  {
    "kr": "흀",
    "en": "hyuls"
  },
  {
    "kr": "흁",
    "en": "hyult"
  },
  {
    "kr": "흂",
    "en": "hyulp"
  },
  {
    "kr": "흃",
    "en": "hyulh"
  },
  {
    "kr": "흄",
    "en": "hyum"
  },
  {
    "kr": "흅",
    "en": "hyub"
  },
  {
    "kr": "흆",
    "en": "hyubs"
  },
  {
    "kr": "흇",
    "en": "hyus"
  },
  {
    "kr": "흈",
    "en": "hyuss"
  },
  {
    "kr": "흉",
    "en": "hyung"
  },
  {
    "kr": "흊",
    "en": "hyuj"
  },
  {
    "kr": "흋",
    "en": "hyuc"
  },
  {
    "kr": "흌",
    "en": "hyuk"
  },
  {
    "kr": "흍",
    "en": "hyut"
  },
  {
    "kr": "흎",
    "en": "hyup"
  },
  {
    "kr": "흏",
    "en": "hyuh"
  },
  {
    "kr": "흐",
    "en": "heu"
  },
  {
    "kr": "흑",
    "en": "heug"
  },
  {
    "kr": "흒",
    "en": "heugg"
  },
  {
    "kr": "흓",
    "en": "heugs"
  },
  {
    "kr": "흔",
    "en": "heun"
  },
  {
    "kr": "흕",
    "en": "heunj"
  },
  {
    "kr": "흖",
    "en": "heunh"
  },
  {
    "kr": "흗",
    "en": "heud"
  },
  {
    "kr": "흘",
    "en": "heul"
  },
  {
    "kr": "흙",
    "en": "heulg"
  },
  {
    "kr": "흚",
    "en": "heulm"
  },
  {
    "kr": "흛",
    "en": "heulb"
  },
  {
    "kr": "흜",
    "en": "heuls"
  },
  {
    "kr": "흝",
    "en": "heult"
  },
  {
    "kr": "흞",
    "en": "heulp"
  },
  {
    "kr": "흟",
    "en": "heulh"
  },
  {
    "kr": "흠",
    "en": "heum"
  },
  {
    "kr": "흡",
    "en": "heub"
  },
  {
    "kr": "흢",
    "en": "heubs"
  },
  {
    "kr": "흣",
    "en": "heus"
  },
  {
    "kr": "흤",
    "en": "heuss"
  },
  {
    "kr": "흥",
    "en": "heung"
  },
  {
    "kr": "흦",
    "en": "heuj"
  },
  {
    "kr": "흧",
    "en": "heuc"
  },
  {
    "kr": "흨",
    "en": "heuk"
  },
  {
    "kr": "흩",
    "en": "heut"
  },
  {
    "kr": "흪",
    "en": "heup"
  },
  {
    "kr": "흫",
    "en": "heuh"
  },
  {
    "kr": "희",
    "en": "hyi"
  },
  {
    "kr": "흭",
    "en": "hyig"
  },
  {
    "kr": "흮",
    "en": "hyigg"
  },
  {
    "kr": "흯",
    "en": "hyigs"
  },
  {
    "kr": "흰",
    "en": "hyin"
  },
  {
    "kr": "흱",
    "en": "hyinj"
  },
  {
    "kr": "흲",
    "en": "hyinh"
  },
  {
    "kr": "흳",
    "en": "hyid"
  },
  {
    "kr": "흴",
    "en": "hyil"
  },
  {
    "kr": "흵",
    "en": "hyilg"
  },
  {
    "kr": "흶",
    "en": "hyilm"
  },
  {
    "kr": "흷",
    "en": "hyilb"
  },
  {
    "kr": "흸",
    "en": "hyils"
  },
  {
    "kr": "흹",
    "en": "hyilt"
  },
  {
    "kr": "흺",
    "en": "hyilp"
  },
  {
    "kr": "흻",
    "en": "hyilh"
  },
  {
    "kr": "흼",
    "en": "hyim"
  },
  {
    "kr": "흽",
    "en": "hyib"
  },
  {
    "kr": "흾",
    "en": "hyibs"
  },
  {
    "kr": "흿",
    "en": "hyis"
  },
  {
    "kr": "힀",
    "en": "hyiss"
  },
  {
    "kr": "힁",
    "en": "hying"
  },
  {
    "kr": "힂",
    "en": "hyij"
  },
  {
    "kr": "힃",
    "en": "hyic"
  },
  {
    "kr": "힄",
    "en": "hyik"
  },
  {
    "kr": "힅",
    "en": "hyit"
  },
  {
    "kr": "힆",
    "en": "hyip"
  },
  {
    "kr": "힇",
    "en": "hyih"
  },
  {
    "kr": "히",
    "en": "hi"
  },
  {
    "kr": "힉",
    "en": "hig"
  },
  {
    "kr": "힊",
    "en": "higg"
  },
  {
    "kr": "힋",
    "en": "higs"
  },
  {
    "kr": "힌",
    "en": "hin"
  },
  {
    "kr": "힍",
    "en": "hinj"
  },
  {
    "kr": "힎",
    "en": "hinh"
  },
  {
    "kr": "힏",
    "en": "hid"
  },
  {
    "kr": "힐",
    "en": "hil"
  },
  {
    "kr": "힑",
    "en": "hilg"
  },
  {
    "kr": "힒",
    "en": "hilm"
  },
  {
    "kr": "힓",
    "en": "hilb"
  },
  {
    "kr": "힔",
    "en": "hils"
  },
  {
    "kr": "힕",
    "en": "hilt"
  },
  {
    "kr": "힖",
    "en": "hilp"
  },
  {
    "kr": "힗",
    "en": "hilh"
  },
  {
    "kr": "힘",
    "en": "him"
  },
  {
    "kr": "힙",
    "en": "hib"
  },
  {
    "kr": "힚",
    "en": "hibs"
  },
  {
    "kr": "힛",
    "en": "his"
  },
  {
    "kr": "힜",
    "en": "hiss"
  },
  {
    "kr": "힝",
    "en": "hing"
  },
  {
    "kr": "힞",
    "en": "hij"
  },
  {
    "kr": "힟",
    "en": "hic"
  },
  {
    "kr": "힠",
    "en": "hik"
  },
  {
    "kr": "힡",
    "en": "hit"
  },
  {
    "kr": "힢",
    "en": "hip"
  },
  {
    "kr": "힣",
    "en": "hih"
  }
];