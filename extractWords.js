/* 각각 한자의 단어를 집어와서 아래있는 단어들을 추출해서 csv file로 만든다. */

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
        {id: 'name', title: 'Name'},
        {id: 'surname', title: 'Surname'},
        {id: 'age', title: 'Age'},
        {id: 'gender', title: 'Gender'},
    ]
});

const data = [];

csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));