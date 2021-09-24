var score = Number(document.querySelector('.score').textContent);
var givenNumber = Math.floor(Math.random() * 20 + 1);
// console.log(givenNumber);
var inputValue;


function checkNumber() {
    inputValue = document.querySelector('input').valueAsNumber;
    // console.log(inputValue);
    if (score > 0) {
        if (inputValue === givenNumber) {
            document.querySelector('.message').textContent = 'Correct! ';
            document.querySelector('body').style.backgroundColor = '#008D00';
            document.querySelector('.score').textContent = score.toString();
            if (score >= Number(document.querySelector('.high-score').textContent)) document.querySelector('.high-score').textContent = score.toString();
            document.querySelector('.number').textContent = givenNumber.toString();
        } else {
            if (inputValue > givenNumber) {
                score--;
                document.querySelector('.score').textContent = score.toString();
                document.querySelector('.message').textContent = 'Your number is too BIG...';
            } else {
                if (inputValue < givenNumber) {
                    score--;
                    document.querySelector('.score').textContent = score.toString();
                    document.querySelector('.message').textContent = 'Your number is too SMALL...';
                }
            }
        }
    }
    if (score === 0) document.querySelector('.message').textContent = 'Game over!';

}

document.querySelector(".btn-again").addEventListener('click', function() {
    givenNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('input').value = " ";
    score = 20;
    document.querySelector('.score').textContent = '20';
    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
});