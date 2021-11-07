//Import php var
const wordsByLetter = JSON.parse(document.querySelector('#phpVarWords').textContent);

if (wordsByLetter[0].length === 0) {
    location.reload();
}

//var for DOM manipulation
let twoWordsContainer = document.querySelector('.two-words-container');
let threeWordsContainer = document.querySelector('.three-words-container');
let fourWordsContainer = document.querySelector('.four-words-container');
let fiveWordsContainer = document.querySelector('.five-words-container');
let sixWordsContainer = document.querySelector('.six-words-container');
let sevenWordsContainer = document.querySelector('.seven-words-container');
let whiteSquareTotal = document.querySelectorAll('.white-square-total');

//display white square and total
let counterWhiteSquareTotal = -1;
wordsByLetter.forEach((words) => {
    words.forEach((word) => {
        let wordContainer = document.createElement('div');
        wordContainer.classList.add("word-container");
        let letters = word.split('');
        wordContainer.innerHTML = letters.map((letter) => {
            return "<div class=\"white-square\">" + letter + "</div>";
        });
        wordContainer.innerHTML = wordContainer.innerHTML.replaceAll(',', '');
        if (words[0] === word) {
            counterWhiteSquareTotal += 1;
            whiteSquareTotal[counterWhiteSquareTotal].textContent = word.length + " letters 0/" + words.length;
        }
        placeInDiv(wordContainer);
    });
});

function placeInDiv(arg) {
    switch (arg.textContent.length) {
        case 2:
            return twoWordsContainer.appendChild(arg);
        case 3:
            return threeWordsContainer.appendChild(arg);
        case 4:
            return fourWordsContainer.appendChild(arg);
        case 5:
            return fiveWordsContainer.appendChild(arg);
        case 6:
            return sixWordsContainer.appendChild(arg);
        default:
            sevenWordsContainer.appendChild(arg);
    }
}