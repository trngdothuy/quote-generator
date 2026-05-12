const quoteElement = document.getElementById('quote');
const button = document.getElementById('new-quote-btn');

async function fetchQuote() {
  try {
    const response = await fetch('http://127.0.0.1:3000');

    const data = await response.json();
    
    //   res.send(`"${quote.quote}" -${quote.author}`);
    quoteElement.textContent = data.quote;
    quoteElement.textContent = '"' + data.quote + '" - ' + data.author;
  } catch (error) {
    console.error(error);

    quoteElement.textContent = 'Failed to load quote.';
  }
}

button.addEventListener('click', fetchQuote);

fetchQuote();