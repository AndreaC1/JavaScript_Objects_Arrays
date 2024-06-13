console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function arraySum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
       sum = sum + numbers[i];
        
    }
    return sum;
}


const numbers = [2, 22, 12, 17, 18, 39, 129];
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {}
    book.title = "Harry Potter and the Prisoner of Azkaban",
    book.pages = 435,
    book.readCount = 5000,
    book.info = function(){
        return this.title + " by J.K. Rowling, " + this.pages + " pages" +  " read " + this.readCount + " times";
    }



console.log(book.info());

//Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";
const sentenceArray = sentence.split(" ");
console.log(sentenceArray);


for (let i = 0; i < sentenceArray.length; i++) {
    let word = sentenceArray[i];
    const characters =word.split("");
    let backwardsWord = characters.reverse().join("");
    sentenceArray[i] =  backwardsWord;   
}
let reversedSentence = sentenceArray.toString().replace(/,/g," ");
console.log(reversedSentence);

//Exercise 4
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(csvData){
    const rows = csvData.split("\n");
    const result = [];
    console.log(rows);
    const headers = rows[0].split(",");
    console.log("headers " + headers);
    for(let i = 1; i <rows.length; i++){
        const values = rows[i].split(",");
        console.log("values " + values);
      
        const object = {};
        for(let j = 0; j <headers.length; j++){
            object[headers[j]] = values[j];
        }
        result.push(object)
    }
    return result;
    
}

console.log(parseCSV(csvData));