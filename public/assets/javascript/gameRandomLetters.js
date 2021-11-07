//Import php var
const randomLetters = JSON.parse(document.querySelector('#phpVarLetters').textContent);

//var for DOM manipulation
let lettersContainer = document.querySelector('.lettersContainer');

randomLetters.map((e) =>{
    let letter = document.createElement('div');
    letter.classList.add('big-tiles');
    letter.innerHTML = e;
    lettersContainer.appendChild(letter);
})