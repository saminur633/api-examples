const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = qoute => {
    const blockQuote = document.getElementById('quote');
    console.log(qoute);
    blockQuote.innerHTML = quote.qoute;
}
loadQuote();