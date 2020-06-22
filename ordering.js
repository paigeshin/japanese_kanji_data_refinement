/*
    한자들을 순서대로 정렬해줌

    "kanji": "一",
    "level": 4,
    "kun": "ひと,ひとつ",
    "on": "いち,いつ",
    "meaning": "one, one radical (no.1)",
    "kr": "한 일",
    "words": [],
    "meaning_kr": "하나",
    "meaning_fr": "un, un radical (no.1)",
    "index": 2
*
* */

const fs = require('fs');

const kanjiData = fs.readFileSync('kanji_v7.json');
const kanjiJson = JSON.parse(kanjiData);

console.log(kanjiJson.length);

//p1 - json data
//p2 - 원하는 field 순서, ordering 하려면 필수
//p3 - 안넣어도 된다. 그냥 읽기 편하게 format해줌
const data = JSON.stringify( kanjiJson, ['index' ,'kanji', 'level', 'on', 'kun', 'kr', 'meaning', 'meaning_kr', 'meaning_fr', 'words', 'word', 'reading'], 5);
console.log(data);
fs.writeFileSync('kanji_v8.json', data);

