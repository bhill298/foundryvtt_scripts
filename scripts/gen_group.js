const BASE_POTRAIT_PATH = "files/images/race_gen"

const GENDER = [
"Male",
"Female"
]

const LOCATIONS = [
"Arthoum",
"Ash Ridge",
"Askalet",
"Ausabbason",
"Blackgate",
"Bloomridge",
"Brampton",
"Eastway",
"Heapside",
"Manorborn",
"Norchapel",
"Rivington",
"Seatower",
"Tumbledown",
"Whitkeep",
"Beregost",
"Borlyth",
"Bowshot",
"Calandor",
"Calyaun",
"CloakWood",
"Daggerford",
"Delimbiyran",
"Eldelorr",
"Elembar",
"Harpshield",
"Haunghdannar",
"Imnestream",
"Julkoun",
"Kheldrivver",
"Loravatha",
"Melairrin",
"Northfurrow",
"Phalorm",
"Raerest",
"Shavinar",
"Sklorn",
"Steelbreeze",
"Thelve",
"Torzac",
"Unglur",
"Vainglory",
"Vellosk",
"Wayfork",
"Zazesspur"
]

const RACES = [
"Human",
"Halfling",
"Gnome",
"Dragonborn", 
"Dwarf",
"Elf",
"Half-orc",
"Half-elf",
"Tiefling",
]

// sizes: tiny/sm/med/lg (system.traits.size)
// speed: # (system.attributes.movement.walk)
// darkvision: # (system.attributes.senses.darkvision)
// everything else note in system.details.biography.value
const RACE_ABILITIES = {
    Human: {
        speed: 30,
        size: "med",
        darkvision: 0,
        details: ""
    },
    Halfling: {
        speed: 25,
        size: "sm",
        darkvision: 0,
        details: "<ul><li>Can move through larger creature's size</li><li>Advantage on frightened saves</li><li>Reroll 1s once per roll on attack, ability, saving throw</li></ul>"
    },
    Gnome: {
        speed: 25,
        size: "sm",
        darkvision: 60,
        details: "<ul><li>Advantage of INT/WIS/CHA saving throws against magic</li></ul>"
    },
    Dragonborn: {
        speed: 30,
        size: "med",
        darkvision: 0,
        // resistance and breath weapon (black=acid;DEX, blue=lightning;DEX, brass=fire;DEX, bronze=lightning;DEX, copper=acid;DEX, gold=fire;DEX, green=poison;CON, red=fire;DEX, silver=cold;CON, white=cold;CON); DC=8+CON+PROF, CR1=2d6,3=3d6,6=4d6,7=5d6
        // <color> dragon dragonborn; <element> + ...
        // save DC=8+CON+PROF, CR1=2d6,CR3=3d6,CR6=4d6,CR7=5d6.
        // replace {{save_type}} {{save}} {{damage}} {{area}}
        details: " resistance and breath</li><li>Breath weapon action once per short rest, save {{save}} {{save_type}} for half, {{damage}} damage in a {{area}}</li></ul>"
    },
    Dwarf: {
        speed: 25,
        size: "med",
        darkvision: 60,
        details: "<ul><li>Resistance to poison damage and advantage against poison saves</li><ul>"
    },
    Elf: {
        speed: 30,
        size: "med",
        darkvision: 60,
        details: "<ul><li>Advantage on saving throws against charmed and cannot be put to sleep</li><li>Don't need to sleep, instead meditate for 4 hours per day</li></ul>"
    },
    "Half-orc": {
        speed: 30,
        size: "med",
        darkvision: 60,
        details: "<ul><li>Reduced to 1 HP instead of 0 once per long rest</li></ul>"
    },
    "Half-elf": {
        speed: 30,
        size: "med",
        darkvision: 60,
        details: "<ul><li>Advantage on saving throws against charmed and cannot be put to sleep</li></ul>"
    },
    Tiefling: {
        speed: 30,
        size: "med",
        darkvision: 60,
        // spell save 8 + CHA + PROF
        // replace {{save}}
        details: "<ul><li>Thaumaturgy cantrip</li><li>Hellish rebuke@2nd level (3d10 fire damage as reaction to damage, Dex save) and darkness (10m conc. 15ft radius @60ft) once per long rest each (Save {{save}})</li><li>Resistance to fire damage</li></ul>"
    },
}

const DRAGONBORN_ANCESTRY = [
"Black",
"Blue",
"Brass",
"Bronze",
"Copper",
"Gold",
"Green",
"Red", 
"Silver",
"White"
]

const DRAGONBORN_ANCESTRY_ELEMENT = {
    Black: "Acid",
    Blue: "Lightning",
    Brass: "Fire",
    Bronze: "Lightning",
    Copper: "Acid",
    Gold: "Fire",
    Green: "Poison",
    Red: "Fire", 
    Silver: "Cold",
    White: "Cold"
}

const DRAGONBORN_ANCESTRY_SAVE_AND_RANGE = {
    Black: ["DEX", "5 by 30 ft. line"],
    Blue: ["DEX", "5 by 30 ft. line"],
    Brass: ["DEX", "5 by 30 ft. line"],
    Bronze: ["DEX", "5 by 30 ft. line"],
    Copper: ["DEX", "5 by 30 ft. line"],
    Gold: ["DEX", "15 ft. cone"],
    Green: ["CON", "15 ft. cone"],
    Red: ["DEX", "15 ft. cone"],
    Silver: ["CON", "15 ft. cone"],
    White: ["CON", "15 ft. cone"],
}

const GROUP_ALIGNMENT = [
"Lawful Good",
"Lawful Neutral",
"Lawful Evil",
"Neutral Good",
"Neutral",
"Neutral Evil",
"Chaotic Good",
"Chaotic Neutral", 
"Chaotic Evil"
]

const GROUP_TRAIT = [
"Cautious",
"Opportunist",
"Greedy",
"Self-Righteous",
"Compassionate",
"Loyal",
"Treacherous",
"Survivors"
]

const NAME_ADJ = [
"Reasonable",
"Last",
"Crimson",
"Platinum",
"LOC",
"LOC",
"LOC",
"Desperate",
"Brass",
"Jolly",
"Curious",
"Gilded",
"Snarling"
]

const NAME_NOUN = [
"Chaps",
"Laugh",
"Jesters",
"Fist",
"Sneer",
"Gang",
"Fellowship",
"Minstrels",
"Knights",
"Curs",
"Company"
]

const PARTY_DEFENDER = [
["Berserker", "Knight"],
["Gladiator"],
["Champion"]
]

const PARTY_SUPPORTER = [
["Priest", "Druid", "Bard (Legacy)"],
["Illusionist (Legacy)", "Enchanter (Legacy)"],
["War Priest (Legacy)", "Diviner (Legacy)"]
]

const PARTY_MARTIAL = [
["Spy", "Noble", "Scout"],
["Bandit Captain", "Archer"],
["Assassin"]
]

const PARTY_SPELLCASTER = [
["Cult Fanatic"],
["Mage", "Warlock of the Great Old One (Legacy)"],
["Evoker (Legacy)", "Necromancer (Legacy)"]
]
const PORTRAITS = {
    Human: {
        Male: [
],
        Female: [
]
    },
    Halfling: {
        Male: [
],
        Female: [
]
    },
    Gnome: {
        Male: [
],
        Female: [
]
    },
    Dragonborn: {
        Black: [
],
        Blue: [
],
        Brass: [
],
        Bronze: [
],
        Copper: [
],
        Gold: [
],
        Green: [
],
        Red: [
],
        Silver: [
],
        White: [
],
    },
    Dwarf: {
        Male: [
],
        Female: [
]
    },
    Elf: {
        Male: [
],
        Female: [
]
    },
    "Half-orc": {
        Male: [
],
        Female: [
]
    },
    "Half-elf": {
        Male: [
],
        Female: [
]
    },
    Tiefling: {
        Male: [
],
        Female: [

]
    }
};


const CHAR_NAMES = {
    Human: {
        Male: ["Reibeim Dhahlu",
"Kheihnud Biner",
"Stokvid Blazeslayer",
"Nevum Monsterbane",
"Fosin Ketsk",
"Ven Darnav",
"Valdam Wiselight",
"Eth Embershaper",
"Kihkato Rindranzift",
"Bah-zik ralahd",
"Dosdadjat Notvatvube",
"Tondoor Navzalbu",
"Tobrules Vumabre",
"Zitan Zesoldur",
"Urem Shima",
"Esun Rheiham",
"Nordadd Whitsurge",
"Rugril Spiritwood",
"Kargem Buz",
"Fan Kevritsk",
"Stronneth Pyreshot",
"Or Alpenmourn",
"Hitheoza Jandacrot",
"Kozir Mivim",
"Jinzesdesk Rontildyeka",
"Vlendec Vovremu",
"Shup Hiaoy",
"Rinchaimiez Resqala",
"Grordor Zelbornen",
"Jezeir Khassar",
"Mukhen Khimem",
"Mellalm Crowbinder",
"Tengom Shieldscream",
"Grergor Notsk",
"Gor Vinodz",
"Zuldorth Tarrenflower",
"Frem Flintwhisper",
"Geon-vijo bildrekdald",
"Hirheoh Laltrak",
"Borvomod Yelburkadi",
"Felvisk Zuryami",
"Sunienraiz Jebreval",
"Mintor Hilirnul",
"Morkan Threeoak",
"Troth Dayhand",
"Judecho Vivuhreft",
"Rinesdic Tredzediku",
"Jervoot Mabega",
"Mearcean Uldadre",
"Nehlum Rhassur",
"Brel Namiv",
],
        Female: ["Ruromah Bhuhad",
"Ozel Shesso",
"Larurru Marbleorb",
"Tezne Foreshade",
"Ralrelri Pinehide",
"Bivro Hawkhelm",
"Sufepho Zacrivruhd",
"Kizhe Zinkrikt",
"Fiveris Huthovitho",
"Yudha Tradamzi",
"Lientd Suzadra",
"Letd Jibrelor",
"Catopal Sheihrir",
"Kusranoll Windblight",
"Tusvai Burningkeep",
"Kana Butsk",
"Olostro Runestalker",
"Vilri Distantvigor",
"Kusathus Nekruprohr",
"Zirseldri Zildugavya",
"Fefri Merigu",
"Anc Juldonzon",
"Fiert Rulorge",
"Foshehroh Jane",
"Zohreih Huhla",
"Selzarvi Lonesoar",
"Rirli Hellmark",
"Zetha Reg",
"Ca Kadredz",
"Levefli Eaglewhisk",
"Kono Winterfire",
"Zofosha Nuekruuhkuhr",
"Tishi Zinskald",
"Yirsilmish Dunyaduba",
"Tenre Chibuki",
"Dalmf Virgistal",
"Eiml Hozarin",
"Cenosmuh Cokhu",
"Nihmal Hodim",
"Lolzaldru Alpenbreeze",
"Toldrih Flinttrapper",
"Waflatho Wyvernshield",
"Zene Forestroot",
"Cuzenos Razruezihd",
"Chohi Soldrufk",
"Nilmemvish Zanungonzi",
"Meldran Tibega",
"Eld Sadrelde",
"Olmd Senzildel",
"Nehlohlol Rhuhri",
"Carih Mened",
"Suchusvuh Horsewater",
"Ilzal Freetrack",
"Cesholro Eventoe",
"Cestra Pinesprinter",
"Nashafi Felruuhpuhr",
"Hazru Raltrahk",
"Larrafu Elzudolda",
"Ruchu Hatrelma",
"Lem Ildalis",
"Mancm Oldoven"
]
    },
    Halfling: {
        Male: ["Ulrich Grassdew",
"Flyneon Whisperbrace",
"Rimo Softbrush",
"Rihace Springglide",
"Finvias Fastflower",
"Neorin Swiftlade",
"Zalpos Mildearth",
"Sanlan Cherryeye",
"Zalpher Hillace",
"Xolos Amberheart",
"Barlos Whisperwater",
"Garhace Goldmeadow",
"Kaspos Commongather",
"Meramin Fastfoot",
"Pimnad Twilightcrest",
"Lasire Hogdance",
"Larin Warmkettle",
"Baryver Thistlebrush",
"Gofer Brushbottle",
"Faleon Embertop",
"Mardak Longgrove",
"Irabin Embermouse",
"Tarwrick Stoutwoods",
"Belver Fernhand",
"Faltran Eartheye",
"Sanret Dustsurge",
"Joumo Greeneyes",
"Gorich Silentdew",
"Lasire Summerspirit",
"Flynder Glenfinger",
"Goos Ravencreek",
"Tehace Talldance",
"Valnan Deepspark",
"Zalwan Silentwoods",
"Yarorin Leafbrush",
"Kortran Earthbranch",
"Arhace Teaseeker",
"Falfire Foremouse",
"Garyver Freelade",
"Wenver Cloudcheeks",
"Xanumo Grassbough",
"Tarpher Heartcobble",
"Cororin Tenfeet",
"Teyver Freestep",
"Riczu Laughingstride",
"Urizu Clearblossom",
"Riclos Ravenbloom",
"Quozin Fatmouse",
"Flynace Proudsun",
"Garder Leafmane",
],
        Female: ["Zefsica Stoutmeadow",
"Therlile Grandwood",
"Belhaly Mossspark",
"Xida Elderbeam",
"Trynlile Mildwater",
"Erarana Brightgather",
"Theryra Cherrydance",
"Welgwen Lonespell",
"Fenna Proudkettle",
"Idaleigh Littlemantle",
"Uviwyn Stillhands",
"Gramita Littlesky",
"Malgrace Deepbrand",
"Uvialyn Shadowtop",
"Qubrix Lightbarrel",
"Xiwyse Clearglide",
"Wisira Keenace",
"Hakath Summerfingers",
"Uviula Lonebluff",
"Diawyn Amberbranch",
"Trynwyn Emberbarrel",
"Fenbyn Bramblebranch",
"Hilalyn Keenman",
"Marvyre Leacheeks",
"Yessys Cinderbottle",
"Lebyn Hilllade",
"Weleni Rivergrove",
"Elilyse Marblecreek",
"Pruda Grassrabbit",
"Uvisys Hogfeet",
"Veryola Warmfellow",
"Salile Flintbranch",
"Gracaryn Glowmane",
"Odiphina Swiftearth",
"Maltina Mossvale",
"Fayda Applebrand",
"Jilwyse Bronzelade",
"Calmia Fatstride",
"Jilleigh Shadowwoods",
"Shaenys Commongather",
"Zenlie Mildstep",
"Pruda Fatbrand",
"Xiri Strongman",
"Xizana Wildtop",
"Eoeni Goldfeet",
"Rimia Elderbridge",
"Elitrix Brushmane",
"Isada Glensun",
"Isala Fogdew",
"Xanni Glowdream",
]
    },
    Gnome: {
        Male: ["Nini Starkbelch",
"Dorkur Gobblehide",
"Vallen Tinkertop",
"Sahim Cobbleligt",
"Uriben Twinriver",
"Horcorin Gegglereggle",
"Niner Elkadera",
"Panahik Gonggereten",
"Uriben Simplederis",
"Zillin Dambleremble",
"Umpip Thunderdrop",
"Trazu Silverflight",
"Jorkur Quillbell",
"Dorbis Swiftmask",
"Grapos Starkblock",
"Xalpip Homberanan",
"Urifan Sebbledobble",
"Kelkur Peplemiple",
"Tanrick Zernanoda",
"Briryn Belkutina",
"Sarug Deeppatch",
"Saldon Thundercollar",
"Dorkas Quicktrick",
"Albis Stoutdust",
"Yezu Fappletwist",
"Davwin Tapplenepple",
"Felrick Unnedase",
"Quaziver Ragglan",
"Yeser Lemplezemple",
"Sinwor Nusgranober",
"Bilkas Bafflebottom",
"Sinrick Singlefern",
"Panaxif Puddlemane",
"Corros Kindspring",
"Saldri Swiftspell",
"Merhik Dimmadosel",
"Kasbar Dorkedonel",
"Ipaybar Norcede",
"Valcryn Orgaroseck",
"Kelziver Paddleriddle",
"Yemin Twinkind",
"Lojin Quickcraft",
"Quamop Quillfern",
"Zancryn Strongcollar",
"Lokur Puddleflow",
"Dorlen Peglefegle",
"Davver Tulwobenemp",
"Erfiz Talkoner",
"Wrenan Larnibig",
"Merybar Aenpubarar",
],
        Female: ["Uridysa Quietshield",
"Lorina Singletrick",
"Krila Bellowligt",
"Spidysa Goldcollar",
"Helza Fapplebranch",
"Daphimila Talkiders",
"Celmyn Heplegiple",
"Inanoa Resgras",
"Arisany Tinbeben",
"Triroe Zurnemp",
"Hellin Stouthand",
"Uferhana Shadowhand",
"Primyn Silverhold",
"Triyaris Whistlecase",
"Jelna Flukediggles",
"Taqaryn Halboll",
"Tifadysa Dengall",
"Tifayore Lirgeso",
"Nisys Ummlotoben",
"Eiliza Burresitel",
"Xarhana Tosslecollar",
"Mymiphi Stoutdust",
"Ylomila Boonsong",
"Tamila Broadcase",
"Spixi Finefern",
"Zinkasys Ribblezobble",
"Daphigani Nommlorobors",
"Welmila Hekkirobell",
"Kloyore Bopplemepple",
"Daphili Hunggatidomp",
"Dogani Starktop",
"Heswyse Palespark",
"Banssa Kindhide",
"Zanina Bafflestone",
"Orwyse Darkcloak",
"Loridira Aebbleni",
"Domila Meblelable",
"Helyaris Tercitan",
"Grenroe Remblewomble",
"Yofyx Dirnabiner",
"Priniana Ironback",
"Aripine Fappleshield",
"Banxi Wobbleriver",
"Carbi Fiddlehold",
"Caryaris Squigglelob",
"Nyhani Bogglegeggle",
"Orzyre Gemblewemble",
"Loriyore Pomporetemp",
"Nysany Feglefegle",
"Doci Ponpedan",
]
    },
    Dragonborn: {
        Male: ["Thexor Rasvull",
"Veaphinkojeal Lumivull",
"Gardikeash Nesqiroth",
"Kimphecaak Trouqull",
"Vuulrosh Sulwunax",
"Niaceath Wuturim",
"Klinxith Vraklasar",
"Alxishkmumel Shavull",
"Myithteranded Zorxan",
"Lilthud Vyuwarum",
"Yapashteler Ravocrath",
"Nyiathtuuth Caerbarum",
"Dambith Hedaar",
"Kialthaajen Pavarax",
"Shempanthok Nadaar",
"Caphinkan Rhociar",
"Kupiruush Nafras",
"Estixiardic Krivbroth",
"Tocid Dravroth",
"Clamphak Helasar",
"Alxul Udoziros",
"Funxash Drafras",
"Vilthendrardal Saxan",
"Vencinthid Worqull",
"Ilxuth Dralasar",
"Tirdil Jinhazar",
"Kraarrhakmear Durrakas",
"Liankeashkmac Drabor",
"Thirthar Kildhall",
"Prelkeranash Zrarinn",
"Therthishkmamoth Kilskan",
"Nilkekmeroth Calubarum",
"Vuumpathaner Natrin",
"Myearen Durnaar",
"Drethtash Jarwunax",
"Myombath Orlakris",
"Meraalirron Beljurn",
"Myiccikmerith Zorvarax",
"Exosh Vyulin",
"Alxad Ghevull",
"Nyericmaac Ravomash",
"Clembalomuath Krivcrath",
"Priccaarad Lorhadur",
"Myearrhucirgian Balghull",
"Clumten Jartrin",
"Tompinkundial Hiturim",
"Vunxaaneth Ravoskan",
"Nyalthas Frodorim",
"Nyulmec Tozavur",
"Thealthakergid Arzavur",
],
        Female: ["Gaaldrixuurgar Arithibra",
"Klerthas Malqwen",
"Dupac Grixiris",
"Thephiantherrir Yrvayla",
"Gachuunthaamon Wrawyn",
"Shilran Oriyassa",
"Nyelthicun Rairith",
"Viphesec Fenfyire",
"Vacil Ophicys",
"Shiarthunshturec Thabith",
"Nyaathted Erlivys",
"Limpecmesh Dadalynn",
"Uumterin Bixora",
"Demtocnas Kelsira",
"Myankeanshtek Ahime",
"Yonxuundic Thernorae",
"Ustish Yrqorel",
"Clapuucarduus Phimeila",
"Apaac Sudrith",
"Iccastak Ushiyassa",
"Tuammikmaandis Phizys",
"Geracish Vyrathibra",
"Kilthethimuar Arixiris",
"Kuardocirdath Quilqorel",
"Linkudaac Irlymyse",
"Thancus Malliann",
"Drealrinthiallik Eshdrith",
"Krecucnargath Lilowyn",
"Therthandrash Zenfyire",
"Umpial Neskaryn",
"Myombocmac Hinrish",
"Klencunedel Qibirith",
"Pruxiniarrer Gridalynn",
"Primpinkamel Xythibra",
"Therasuun Valgissa",
"Eacar Gurdrith",
"Praachad Lorarith",
"Nyixath Lilogil",
"Nyastethis Oribis",
"Cirrhanshtinal Gurxiris",
"Craarrher Fenthibra",
"Nuarjenthunith Belwyn",
"Ankud Grizita",
"Krolkenthel Irienys",
"Prornuatirguad Afyire",
"Alxeric Crisvyre",
"Vurdoshtas Belshann",
"Lurdad Hameila",
"Gealmuth Xisgil",
"Cildritajul Cristhyra",
]
    },
    Dwarf: {
        Male: ["Urmmek Frozenstone",
"Berron Stormbleeder",
"Dardrom Darkstrike",
"Gulgran Keenforce",
"Tharbrek Bravebraid",
"Gralren Bollert",
"Emkam Faldurk",
"Kromdohr Glazzom",
"Rannus Foduvam",
"Darkohm Grarthenn",
"Berdram Bronzekin",
"Gulrak Stonebreath",
"Gralnyl Thunderstrike",
"Huldain Smugforge",
"Kromkuhm Frostmane",
"Gralrigg Straefdoln",
"Brumgrom Grorthirerr",
"Thaldrom Grutguguln",
"Baermund Grulbrart",
"Thurdur Straellohok",
"Bhelmin Boldhorn",
"Gardain Moltenbane",
"Bhaldrom Bloodmantle",
"Emiggs Frozenstand",
"Malthran Truefound",
"Galthrum Strohan",
"Thuldur Tuhahr",
"Baernur Carthinirt",
"Bhelryl Hullehk",
"Gerkuhm Dronkek",
"Bromtharn Bravefist",
"Baerkahm Broadfeast",
"Grilnus Bigbelch",
"Banryl Gianthead",
"Baerdus Bravefinder",
"Gerdrom Mudihr",
"Melmor Strartherug",
"Thomiir Drebrarr",
"Gremdrak Drurthuk",
"Gimnir Molden",
"Daermur Mightbranch",
"Kramdur Flintfall",
"Hurmund Bigbelt",
"Fardain Marblestorm",
"Grandrum Kindreach",
"Kharmiir Latgark",
"Kharthrum Remnik",
"Melkuhm Cudarark",
"Bhalkam Lollek",
"Bhalthran Monkirr",
],
        Female: ["Lesryn Lasthold",
"Nyssora Evensong",
"Lesslen Everpass",
"Kathtin Stoutblood",
"Raenryl Brightflight",
"Jinryl Talbrivohr",
"Karmyl Brotguvuk",
"Myrnys Brenkehr",
"Tazglian Mungohaln",
"Tornip Bangurahk",
"Naslyl Silveraxe",
"Belma Burrowguard",
"Mysva Hammerfront",
"Arnyss Goldheart",
"Dearthiel Firekind",
"Lassglia Gaemnanok",
"Mysva Mabrokurk",
"Brylledryn Botguhk",
"Brilthiel Cahenak",
"Lyesris Strorunahk",
"Nassnar Fireshaper",
"Elnas Hammertankard",
"Anmura Coldkin",
"Tisvian Evenmantle",
"Maevglia Stoutsong",
"Jennera Gruthgag",
"Belris Gruzzuhek",
"Rynros Drullihk",
"Brylmera Gladonehk",
"Reynlynn Coronn",
"Ednis Sternbreaker",
"Nassnora Truefall",
"Brulbera Boldgrace",
"Arnis Broadfront",
"Branbera Goldkin",
"Nasswin Luzzohen",
"Rundora Cordivirt",
"Daerla Glolbrogek",
"Einniss Graheck",
"Belnora Thruthgik",
"Bretlyn Lightbrow",
"Ranma Ironbranch",
"Raennia Frostdelver",
"Ingros Goldenbleeder",
"Karniss Brightaxe",
"Einvia Mereck",
"Tazdryn Mahegem",
"Rednis Straldann",
"Nisthiel Raelbrehig",
"Lesri Harekeck",
]
    },
    Elf: {
        Male: ["Waesmaer Silverlight",
"Herquinal Mosswalker",
"Zumyarus Stillgleam",
"Daesalor Sunguard",
"Genric Greenvale",
"Fardithas Medronesh",
"Sylyarus Seminthraea",
"Traneiros Hathrisesh",
"Aeran Huresh",
"Iliwarin Flarniith",
"Yinlar Aspenlight",
"Iliydark Willowdream",
"Petzumin Emberlight",
"Beinorin Springheel",
"Aefir Shadowkind",
"Leonorin Sivi",
"Glynren Hiardiscihal",
"Traceran Culphe",
"Farlar Yievis",
"Norpeiros Ciphana",
"Aejor Aspencloud",
"Yinzumin Diamondspark",
"Daeven Cedarsinger",
"Dorsalor Featherfall",
"Valar Birchcloud",
"Aeqen Sheyshothrosh",
"Virfaren Dreystre",
"Fenzeiros Elthondronn",
"Morwarin Cimindrirrath",
"Kealar Deyldier",
"Qinlen Sagesinger",
"Uriberos Silentshadow",
"Ilipetor Gembrook",
"Elazeiros Starfond",
"Carkian Swiftspirit",
"Pettoris Ixiltiso",
"Aehorn Quecenariir",
"Wranwraek Ivo",
"Aejor Tiphidrannes",
"Zinhice Feidrinna",
"Dorneiros Emberflight",
"Leomaris Silverbeam",
"Carqen Hazelseeker",
"Zinberos Windbeam",
"Wranmyar Winterwalker",
"Farsalor Irnal",
"Genric Thelle",
"Sarsandoral Bustrevieth",
"Yinsalor Shusherethrith",
"Vawarin Kaldanno",
],
        Female: ["Ulahana Elderguard",
"Qihana Willowspark",
"Holavaris Firdream",
"Cairel Lunardream",
"Holagwyn Spiritsmile",
"Neriyra Sheltia",
"Wysara Drannish",
"Ravarie Yevascihant",
"Presmys Callaea",
"Faeroris Xeltirra",
"Phina Diamondwish",
"Xyrsys Stonestar",
"Holasatra Summergazer",
"Sharel Winterwish",
"Presra Aspenshadow",
"Caibella Thadrennoma",
"Zylthana Udrephel",
"Krisfina Walel",
"Olazorwyn Tunno",
"Joxisys Rassiphissos",
"Venthana Greenflow",
"Chaena Greensinger",
"Jomys Poplargazer",
"Holalynn Sunshine",
"Caisatra Oceanwatcher",
"Daecaryn Flalornelke",
"Olacyne Thidriremi",
"Vencaryn Flaphith",
"Iarthyra Vuphascesi",
"Presna Durnothran",
"Adxina Flowervale",
"Mialeth Fogseeker",
"Xilyra Willowfate",
"Liarona Eagerbreath",
"Ravadove Elderbirth",
"Ravazorwyn Shonnistiith",
"Cairona Liemedrennii",
"Helewenys Laldrothrin",
"Zinlana Hustris",
"Valfiel Cothi",
"Adnala Featherkind",
"Reyfina Lunarsmile",
"Xyrynore Boldgrove",
"Wysabella Bronzemind",
"Faebanise Alderfond",
"Chaebanise Laelice",
"Kriscyne Eyrisash",
"Wysana Tenestanniish",
"Iarbella Ciliho",
"Quiwenys Eshaea",
]
    },
    "Half-orc": {
        Male: ["Kurabak",
"Okurall",
"Ukratur",
"Urthamarsh",
"Mugobur",
"Kelimar",
"Kamimar",
"Gretar",
"Mararak",
"Kilaruk",
"Ogguedak",
"Urtharall",
"Maloburk",
"Zavotar",
"Tanutar",
"Kalozur",
"Horagark",
"Therotur",
"Kilan",
"Renebak",
"Therudall",
"Gogark",
"Ukagar",
"Cogak",
"Renarimm",
"Zarazur",
"Aggadark",
"Oguidall",
"Okadak",
"Sararim",
"Gorurall",
"Budash",
"Barabak",
"Galabar",
"Kamidurk",
"Kalanars",
"Zoradim",
"Arnezur",
"Thurugall",
"Thuromur",
"Kurabash",
"Beluz",
"Kilebar",
"Gnaedar",
"Ukonar",
"Mukirsh",
"Goribark",
"Thaglar",
"Barotar",
"Makamash",
],
        Female: ["Nerook",
"Semadar",
"Sumati",
"Garezara",
"Zunagh",
"Sanez",
"Zoneki",
"Tuada",
"Laganar",
"Rawamar",
"Kinur",
"Rogur",
"Gryenir",
"Laguz",
"Tamigar",
"Alotur",
"Vanigu",
"Lagogu",
"Zanuri",
"Gryame",
"Rahkaz",
"Gine",
"Tuuti",
"Sinune",
"Rawozura",
"Semiri",
"Hurotir",
"Kotuzi",
"Mani",
"Puyunir",
"Temani",
"Fulatir",
"Kiritur",
"Shayuzur",
"Rashuwar",
"Gijogume",
"Gajadar",
"Keradar",
"Shayad",
"Kotune",
"Goridur",
"Zenerel",
"Gajiner",
"Puyetur",
"Aligri",
"Arid",
"Elash",
"Samener",
"Gajadur",
"Laganir",
]
    },
    "Half-elf": {
        Male: ["Yorwarith",
"Barros",
"Sardeyr",
"Frilovar",
"Wilorin",
"Nilcoril",
"Davneak",
"Gaerdithas",
"Petvalor",
"Davcoril",
"Kriwarith",
"Corphanis",
"Eircoril",
"Yenparin",
"Lorneak",
"Vantorin",
"Gaermorn",
"Corminar",
"Gaerparin",
"Iloelor",
"Xanavor",
"Oriparin",
"Eirqarim",
"Yordithas",
"Iloben",
"Iandeyr",
"Walsariph",
"Dorfyr",
"Iloreak",
"Horenas",
"Davparin",
"Trafaelor",
"Rafvoril",
"Vanneak",
"Osvalor",
"Uanenas",
"Jamlamir",
"Gaerneiros",
"Walril",
"Wilxian",
"Vanword",
"Vanhomin",
"Lorvalor",
"Halfaelor",
"Tralanann",
"Marcraes",
"Belphanis",
"Uanlamir",
"Halparin",
"Meiovar",
],
        Female: ["Phayehana",
"Phayeyra",
"Dellynn",
"Quewalyn",
"Darphira",
"Jenfine",
"Relnys",
"Darnoa",
"Loracharis",
"Jilwalyn",
"Alustine",
"Alybwynn",
"Elienyphe",
"Vylqwyn",
"Quediane",
"Quetheris",
"Noryra",
"Venhana",
"Winhophe",
"Caryra",
"Saeldove",
"Elitheris",
"Galrora",
"Vengalyn",
"Aluona",
"Carnalore",
"Tylvyre",
"Faewalyn",
"Krikilia",
"Cozenya",
"Norxaris",
"Safmae",
"Olfine",
"Saftihne",
"Yllwaris",
"Saelcharis",
"Brenqarin",
"Wolyaries",
"Cogalyn",
"Tylnys",
"Arkaen",
"Delzenya",
"Tylqwyn",
"Winxaris",
"Tyldove",
"Quedove",
"Leselor",
"Therkilia",
"Phayefine",
"Ophinys",
]
    },
    Tiefling: {
        Male: ["Garros",
"Ebxius",
"Eklius",
"Thexes",
"Kyshoon",
"Lokeakos",
"Arkadius",
"Salvenom",
"Ebemon",
"Malreus",
"Valnon",
"Zherxes",
"Salmos",
"Kaimong",
"Iacis",
"Rerias",
"Koscis",
"Themenos",
"Kaiil",
"Thyakos",
"Skacis",
"Arreus",
"Akthos",
"Shachar",
"Nephthos",
"Maldos",
"Rolmos",
"Malethor",
"Urimus",
"Zherxire",
"Skaron",
"Koszer",
"Carris",
"Zorus",
"Kamong",
"Karus",
"Kyxus",
"Malmeros",
"Kaxes",
"Ebmenos",
"Barcius",
"Valmus",
"Morlius",
"Aetil",
"Barzer",
"Aetxius",
"Thynevir",
"Karon",
"Urxius",
"Aetmus",
],
        Female: ["Zaifaris",
"Crefirith",
"Sarvari",
"Vallith",
"Eapione",
"Hisborys",
"Brilypsis",
"Valki",
"Aramine",
"Shabis",
"Dasolis",
"Dorsolis",
"Lilrissa",
"Afspira",
"Initari",
"Rovine",
"Lillith",
"Qusolis",
"Yurissa",
"Marmaia",
"Nethdoris",
"Aravari",
"Zaimeia",
"Nepunith",
"Nithsolis",
"Maseis",
"Iniyis",
"Aninarei",
"Griki",
"Levari",
"Seiritish",
"Valnarei",
"Zaphi",
"Dalies",
"Mithmeia",
"Yalypsis",
"Marnarei",
"Histish",
"Pesvari",
"Levlista",
"Marnirith",
"Ealypsis",
"Nexibis",
"Daloth",
"Dimtari",
"Aniphi",
"Dorki",
"Agnekaria",
"Brilaia",
"Nethbis",
]
    }
};

function Roll(max) {
  return Math.floor((Math.random() * max) + 1);
}

function ArrayRandom(arr) {
    return arr[Roll(arr.length) - 1];
}

function GenerateGroupName() {
    let adj = ArrayRandom(NAME_ADJ);
    let noun = ArrayRandom(NAME_NOUN);
    if (adj === "LOC") {
        adj = ArrayRandom(LOCATIONS) + "'s";
    }
    return adj + " " + noun;
}

async function readDir(dir) {
    let files = new FilePicker();
    // dir goes to data dir, can be prefixed with slash or not
    try {
        // .dirs array of strings, , files array of strings
        let result = await files.constructor.browse("data", dir);
        return {dirs: result.dirs, files: result.files};
    }
    catch (error) {
        return {dirs: [], files: []};
    }
}

function htmlEscapeQuotes(content) {
    return content.replaceAll('"', "&quot;");
}

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function textWindow(title, content) {
    content = htmlEscapeQuotes(content);
    let guid = guidGenerator();
    //<script>document.getElementById("${guid}").select(); document.execCommand('copy'); window.getSelection().removeAllRanges(); </script>
    new Dialog({
        title: title,
        content: `<p id="${guid}" style="user-select: text">${content}</p> <script> navigator.clipboard.writeText($("#${guid}").html().replaceAll("<br>", "\\n")) </script>`,
        buttons: {}
    }).render(true, {width: 1200});
}

async function genGroup(level) {
    // 0=Amateur (levels 1-3), 1=Veteran (4-7), 2=Elite (8+, but usually not 12+)
    // pixels per square
    const canvasScale = canvas.scene.getDimensions().size;
    // this is the center of the current view (round to canvas scale)
    const viewPos = canvas.scene._viewPosition;
    const startX = Math.round(viewPos.x / canvasScale) * canvasScale;
    const startY = Math.round(viewPos.y / canvasScale) * canvasScale;
    let groupName = GenerateGroupName();
    let groupTrait = ArrayRandom(GROUP_TRAIT);
    let groupAlignment = ArrayRandom(GROUP_ALIGNMENT);
    let tokens = [];
    let tokenAbilities = [];
    let groupInfo = `"${groupName}" with trait "${groupTrait}" and alignment "${groupAlignment}."`;
    let groupInfoFull = groupInfo + "<br><br>Members:";
    let actorNames = [
        ArrayRandom(PARTY_DEFENDER[level]),
        ArrayRandom(PARTY_SUPPORTER[level]),
        ArrayRandom(PARTY_MARTIAL[level]),
        ArrayRandom(PARTY_SPELLCASTER[level])
    ];
    for (let i = 0; i < actorNames.length; i++) {
        let actorType = actorNames[i];
        let race = ArrayRandom(RACES);
        let gender = ArrayRandom(GENDER);
        let charName = ArrayRandom(CHAR_NAMES[race][gender]);
        let dragonbornAncestry = undefined;
        let dragonbornElement = undefined;
        let tokenPath = "";
        let raceString = "";
        // copy it to not modify the original structure
        let abilities = JSON.parse(JSON.stringify(RACE_ABILITIES[race]));
        abilities.race = race;
        if (race === "Dragonborn") {
            dragonbornAncestry = ArrayRandom(DRAGONBORN_ANCESTRY);
            dragonbornElement = DRAGONBORN_ANCESTRY_ELEMENT[dragonbornAncestry];
            tokenPath = BASE_POTRAIT_PATH + "/" + race.toLowerCase() + "/" + dragonbornAncestry.toLowerCase();
            abilities.details = `<ul><li>${dragonbornElement}` + abilities.details;
            abilities.details = abilities.details.replace("{{save_type}}", DRAGONBORN_ANCESTRY_SAVE_AND_RANGE[dragonbornAncestry][0]);
            abilities.details = abilities.details.replace("{{area}}", DRAGONBORN_ANCESTRY_SAVE_AND_RANGE[dragonbornAncestry][1]);
            raceString = `${dragonbornAncestry} ${race}`;
        }
        else {
            tokenPath = BASE_POTRAIT_PATH + "/" + race.toLowerCase() + "/" + gender.toLowerCase();
            raceString = race;
        }
        abilities.details = `Part of the ${groupInfo}<br><br>${charName} the ${gender} ${raceString} (token: ${actorType})<br>${abilities.details}`
        // image path is relative to FoundryVTT/Data dir (can add or omit leading slash)
        let tokenImg = ArrayRandom((await readDir(tokenPath)).files);
        let actor = game.actors.getName(actorType);
        tokens.push(await actor.getTokenDocument({x: startX, y: startY + (canvasScale * i), name: charName, hidden: true, texture: {src: tokenImg}}));
        tokenAbilities.push(abilities);
        groupInfoFull += `<br>"${charName}" the "${raceString}" with token type "${actorType} (image: ${tokenImg})"`;
    }
    // add the list of tokens to the scene
    textWindow("Group info", groupInfoFull);
    let documents = await canvas.scene.createEmbeddedDocuments("Token", tokens);
    // now we can edit the system properties
    for (let i = 0; i < documents.length; i++) {
        if (tokenAbilities[i].race === "Dragonborn") {
            let save = 8 + documents[i].actor.system.attributes.prof + documents[i].actor.system.abilities.con.mod;
            let damage = undefined;
            let challenge = documents[i].actor.system.details.cr;
            if (challenge <= 1) {
                damage = "2d6";
            }
            else if (challenge <= 3) {
                damage = "3d6";
            }
            else if (challenge <= 6) {
                damage = "4d6";
            }
            else if (challenge <= 7) {
                damage = "5d6";
            }
            tokenAbilities[i].details = tokenAbilities[i].details.replace("{{save}}", save);
            tokenAbilities[i].details = tokenAbilities[i].details.replace("{{damage}}", damage);
        }
        else if (tokenAbilities[i].race === "Tiefling") {
            let save = 8 + documents[i].actor.system.attributes.prof + documents[i].actor.system.abilities.cha.mod;
            tokenAbilities[i].details = tokenAbilities[i].details.replace("{{save}}", save);
        }
        documents[i].actor.updateSource({
            "system.details.biography.value": tokenAbilities[i].details,
            "system.traits.size": tokenAbilities[i].size,
            "system.attributes.senses.darkvision": tokenAbilities[i].darkvision,
            "system.attributes.movement.walk": tokenAbilities[i].speed,
            "img": documents[i].texture.src,
            "name": documents[i].name});
        // show HP, but hide names
        documents[i].update({
            "bar1.attribute": "attributes.hp",
            "bar2.attribute": "None",
            "displayName": CONST.TOKEN_DISPLAY_MODES.OWNER,
            "displayBars": CONST.TOKEN_DISPLAY_MODES.ALWAYS});
    }
}

let dialogEditor = new Dialog({
  title: `Select Party CR`,
  buttons: {
    amateur: {
      label: `Amateur (dungeon levels 1-3)`,
      callback: () => {
          genGroup(0);
      }
    },
    veteran: {
      label: `Veteran (dungeon levels 4-7)`,
      callback: () => {
          genGroup(1);
      }
    },
    elite: {
      label: `Elite (dungeon levels 8+, but usually not 12+)`,
      callback: () => {
          genGroup(2);
      }
    },
    close: {
      label: `Exit`
    },
  },
  default: "close",
  close: () => {}
});
await dialogEditor.render(true, {width: 650});