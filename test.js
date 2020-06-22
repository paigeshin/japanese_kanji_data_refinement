const fs = require('fs');
const kanjiTestData = fs.readFileSync('./Data/UpdatedData/kanji_v6.json');
const kanjis = JSON.parse(kanjiTestData);

for (let i = 0; i < 20; i++) {
    const randomNumber = parseInt(Math.random() * 2200 + 1);
    console.log(kanjis[randomNumber]);
}