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
        text += `${kanji.kanji}\n`;
        count++;
    }
    console.log(text);
});