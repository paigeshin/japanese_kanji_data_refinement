const fs = require('fs');
const kanjiTestData = fs.readFileSync('kanji_v12.json');
const kanjis = JSON.parse(kanjiTestData);

for (let i = 0; i < 20; i++) {
    const randomNumber = parseInt(Math.random() * 2200 + 1);
    console.log(kanjis[randomNumber]);
}

console.log(kanjis.length);