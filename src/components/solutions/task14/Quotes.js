import React, { useState } from "react";

function Quotes({ quotes }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const randomGenerator = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].quote;
    const author = quotes[randomIndex].author;
    setQuote(randomQuote);
    setAuthor(author);
  };
  return (
    <div className="quote-container">
      {quote === "" ? (
        <button className="quote-button" onClick={randomGenerator}>
          Generate a random quote
        </button>
      ) : (
        <>
          <h1 className="quote-text">"{quote}"</h1>
          <h1 className="quote-author">-{author}</h1>
          <button className="quote-button" onClick={randomGenerator}>
            Generate a random quote
          </button>
        </>
      )}
    </div>
  );
}

export default Quotes;
