const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('new-quote-btn');

async function fetchQuote() {
  try {
    const response = await fetch('http://127.0.0.1:3000');

    const data = await response.json();

    quoteElement.textContent = `"${data.quote}"`;
    authorElement.textContent = `- ${data.author}`;

    return data;
  } catch (error) {
    console.error(error);

    quoteElement.textContent = 'Failed to load quote.';
    authorElement.textContent = '';
  }
}

// Button click
button.addEventListener('click', fetchQuote);

// Initial load
async function loadQuotes() {
  const quotes = await fetchQuote();
  console.log(quotes);
}

loadQuotes();