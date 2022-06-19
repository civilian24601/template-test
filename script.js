const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



let apiQuotes = []

// Show Loading

const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
const complete = () => {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
const newQuote = () => {
    loading();

    //  pick random quote from apiQuotes array
    const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // check if quote has author

    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = randomQuote.author;
    }

    //  Check Quote Length to determine styling
    if (randomQuote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');  
    }
    //  Set Quote, Hide Loader
        quoteText.textContent = randomQuote.text; 
        complete()
}

// Get Quotes from API

const getQuotes = async () => {
    loading();
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote()
        // return apiQuotes;
    } catch (error) {
        // Catch Error Here
        console.log(error);
    }
}

//  Tweet Quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ~ ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);





// On Load  
getQuotes();
