let quotes = [
    { 
        quote : " Together we can change the world, just one random act of kindness at a time.",
        author : "- Ron Hall"
    },
    { 
        quote : "Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.",
        author : "- A. P. J. Abdul Kalam"
    },
    {
        quote :"The greatness of art is not to find what is common but what is unique.",
        author : "- Isaac Bashevis Singer"
    },
    {
        quote :"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author : "- Oprah Winfrey"
    },
    {
        quote :"The way to get started is to quit talking and begin doing.",
        author : "- Walt Disney"
    },
    {
        quote :"Always remember that you are absolutely unique. Just like everyone else.",
        author : "- Margaret Mead"
    },
    {
        quote :"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
        author : "- Steve Jobs"
    },
    {
        quote :"The future belongs to those who believe in the beauty of their dreams.",
        author : "- Eleanor Roosevelt"
    },
    {
        quote :"Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author : "- Winston S. Churchill"
    },
    {
        quote :"If you really look closely, most overnight successes took a long time.",
        author :"- Steve Jobs"
    }

];
let quote = document.querySelector(".quote-text");
let quoteAuthor = document.querySelector(".quote-author");
function randomQuotes(){
    let data = Math.floor(Math.random() * quotes.length);
    randomIndex = quotes[data];
   quote.innerHTML = randomIndex['quote'] ;
   quoteAuthor.innerHTML = randomIndex['author'] ;
   
}
setInterval(randomQuotes,3000);

