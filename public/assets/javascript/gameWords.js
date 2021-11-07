//Import php var
const wordsByLetter = JSON.parse(document.querySelector('#phpVarWords').textContent);

if (wordsByLetter[0].length === 0) {
    location.reload();
}

//var for DOM manipulation
let firstWords = document.querySelector('.firstWords');
let secondWords = document.querySelector('.secondWords');
let thirdWords = document.querySelector('.thirdWords');
let fourthWords = document.querySelector('.fourthWords');
let fifthWords = document.querySelector('.fifthWords');
let sixthWords = document.querySelector('.sixth-words');

//display white square and total

wordsByLetter.forEach((words) => {
    words.forEach((word) => {
        let wordContainer = document.createElement('div');
        wordContainer.classList.add("word-container");
        let letters = word.split('');
        wordContainer.innerHTML = letters.map((letter) => {
            return "<div class=\"whiteSquare\">" + letter + "</div>";
        });
        wordContainer.innerHTML = wordContainer.innerHTML.replaceAll(',', '');
        if (words[0] === word) {
            let totalDiv = document.createElement('div');
            totalDiv.classList.add("whiteSquareTotal");
            totalDiv.textContent = "0/" + words.length;
            placeInDiv(totalDiv);
        }
        placeInDiv(wordContainer);
    });
});

function placeInDiv(arg)
{
    if (firstWords.childElementCount <= 20) {
        return firstWords.appendChild(arg);
    } else if (secondWords.childElementCount <= 20) {
        return secondWords.appendChild(arg);
    } else if (thirdWords.childElementCount <= 20) {
        return thirdWords.appendChild(arg);
    } else if (fourthWords.childElementCount <= 20) {
        return fourthWords.appendChild(arg);
    } else if (fifthWords.childElementCount <= 20) {
        return fifthWords.appendChild(arg);
    } else {
        sixthWords.appendChild(arg);
    }
}