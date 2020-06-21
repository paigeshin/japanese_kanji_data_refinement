const fs = require('fs');

fs.readFile('./Kanji/kanji.json', 'utf8', (error, jsonString) => {
    if (error) {
        console.log(error);
        return
    }
    const kanjis = JSON.parse(jsonString);
    var text = "";
    var count = 1;
    for(let kanji of kanjis) {
        text += kanji.kanji;
        // text += `${kanji.kanji}\n`;
        // count++;
    }
    fs.writeFileSync('kanji.txt', text);
});