/*
 * Author: Apache X692 Attack Helicopter
 * Created on: 15/07/2024
 */
const _words = [
    "apple", "badge", "chair", "dance", "eagle",
    "flour", "grape", "house", "ivory", "joker",
    "knife", "lemon", "magic", "nurse", "olive",
    "peach", "queen", "river", "stone", "tiger",
    "uncle", "viper", "whale", "x-ray", "yeast",
    "zebra", "angel", "beach", "clock", "dream",
    "earth", "flame", "ghost", "honey", "index",
    "judge", "knight", "laser", "maple", "night",
    "ocean", "paint", "quiet", "robot", "scale",
    "table", "unity", "valid", "windy", "xylol",
    "yacht", "zebra", "actor", "brave", "crate",
    "ditch", "elbow", "fight", "green", "heart",
    "inner", "joint", "label", "mount", "novel",
    "oasis", "phase", "quirk", "route", "sweet",
    "trust", "urban", "visit", "watch", "yield",
    "zebra", "aroma", "blaze", "chant", "drift",
    "enemy", "freak", "giant", "horse", "input",
    "jolly", "kneel", "loyal", "metal", "north",
    "onion", "plate", "quilt", "royal", "sheet",
    "toast", "upper", "venue", "wrack", "xenon"
];

const _defaultGlobals = {
    currentCursorPosition: 0,
    currentRow: 0,
    currentScore: 0,

    maxRowsGrid: 5,
    maxColsGrid: 5,
    word: null
};

let globals = null;

function resetGlobals(defaultGlobals = _defaultGlobals) {
    let data = JSON.parse(JSON.stringify(defaultGlobals));
    data.word = _words[Math.floor(Math.random() * _words.length)];

    console.log(data.word);
    return data;
}

globals = resetGlobals();
