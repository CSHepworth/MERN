const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

const id3 = pokémon.filter(i => i.id % 3 === 0);
const mapid3 = id3.map(i => i.name);
console.log(mapid3);

const fire = pokémon.filter(f => f.types[0] === "fire" || f.types[1] === "fire");
const mapfire = fire.map(i => i.name);
console.log(mapfire);

const multypes = pokémon.filter(m => m.types.length > 1);
const mapmultypes = multypes.map(i => i.name);
console.log(mapmultypes);

const names = pokémon.map(i => i.name);
console.log(names);

const ninety9 = pokémon.filter(n => n.id > 99);
const names99 = ninety9.map(i => i.name);
console.log(names99);

const onlyPoison = pokémon.filter(p => p.types.length === 1 && p.types[0] === "poison");
const maponlyPoison = onlyPoison.map(i => i.name);
console.log(maponlyPoison);

const flying2 = pokémon.filter(f => f.types[1] === "flying");
const mapflying2 = flying2.map(i => i.types[0]);
console.log(mapflying2);

var normalcount = 0;
for (var i = 0; i < pokémon.length; i++) {
    var u = pokémon[i];
    if (u.types[0] === "normal" || u.types[1] === "normal") {
        normalcount++;
    }
}
console.log(`# of normal: ${normalcount}`);
