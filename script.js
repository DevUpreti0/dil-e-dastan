const text = document.querySelector('.quote');
const auth = document.querySelector('.author');
const button = document.querySelector('.twitter-share-button');
const nextBtn = document.querySelector('.next');
const loader = document.querySelector('.loader');

const getQuote = async () => {
    loader.classList.remove('hide');
    const res = await fetch(`dukuapi.html`);
    const quotes = await res.json();
    loader.classList.add('hide');
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const author = item.author;
    text.innerText = quote;
    auth.innerText = author;
    button.href = `whatsapp://send?text=${quote} - ${author}`
}

nextBtn.addEventListener('click', getQuote);

getQuote();