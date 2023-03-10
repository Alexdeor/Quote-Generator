const button = document.querySelector('button').addEventListener('click', randomQuote);
const quoteOne = document.querySelector('.quote-1');
const quoteAuthor = document.querySelector('.quotes-author');
const randomNum = Math.floor((Math.random() * 5) + 1);

function randomQuote(){
const randomNum = Math.floor((Math.random() * 5) + 1);
if(randomNum === 1){
    quoteOne.innerText = 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.';
    quoteAuthor.innerText = '-Oprah Winfrey';
    } 

if(randomNum === 2){
quoteOne.innerText = 'Life is what happens when you\'re busy making other plans.';
quoteAuthor.innerText = '-James Cameron';
}
 if(randomNum === 3){
    quoteOne.innerText = 'Life is what happens when you\'re busy making other plans.';
    quoteAuthor.innerText = '-John Lennon';
}
if(randomNum === 4){
    quoteOne.innerText = 'If life were predictable it would cease to be life, and be without flavor.';
    quoteAuthor.innerText = '-Eleanor Roosevelt';
}
if(randomNum === 5){
    quoteOne.innerText = 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.';
    quoteAuthor.innerText = '-Steve Jobs';
}

}
if(randomNum === 1){
    quoteOne.innerText = 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.';
    quoteAuthor.innerText = '-Oprah Winfrey';
    } 

if(randomNum === 2){
quoteOne.innerText = 'Life is what happens when you\'re busy making other plans.';
quoteAuthor.innerText = '-James Cameron';
}
 if(randomNum === 3){
    quoteOne.innerText = 'Life is what happens when you\'re busy making other plans.';
    quoteAuthor.innerText = '-John Lennon';
}
if(randomNum === 4){
    quoteOne.innerText = 'If life were predictable it would cease to be life, and be without flavor.';
    quoteAuthor.innerText = '-Eleanor Roosevelt';
}
if(randomNum === 5){
    quoteOne.innerText = 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.';
    quoteAuthor.innerText = '-Steve Jobs';
}




