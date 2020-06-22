/*
* 한자 데이터들을 업데이트 시켜줌. kun, on, kr
* 1. 먼저 json으로 모든 데이터들을 읽어온다.  'formatted_kanji_for_updates.json', 'kanji'
* 2. count가 맞는지 확인한다
* 3. kanji를 기준으로 조건문을 걸어주고 데이터를 업데이트 시켜준다
* */

const fs = require('fs');
const kanjiRawData = fs.readFileSync('kanji.json');
const kanjis = JSON.parse(kanjiRawData);

const kanjiRawDataForUpdate = fs.readFileSync('formatted_kanji_for_updates.json');
const updateKanjis = JSON.parse(kanjiRawDataForUpdate);

const updatedKanjis = [];

//1차 safe 처리, 두 개의 데이터의 길이는 같아야함.
console.log(`kanji.length: ${kanjis.length}`);
console.log(`updateKanjis.length: ${updateKanjis.length}`);
if(kanjis.length === updateKanjis.length) {
    for (let i = 0; i < kanjis.length; i++) {
        //2차 safe 처리, 한자가 같아야함.
        if (kanjis[i].kanji === updateKanjis[i].kanji) {
            kanjis[i].kun = updateKanjis[i].kun;
            kanjis[i].on = updateKanjis[i].on;
            kanjis[i].kr = updateKanjis[i].kr;
            updatedKanjis.push(kanjis[i]);
        }
    }
    const data = JSON.stringify(updatedKanjis);
    fs.writeFileSync('kanji_v5.json', data);
}