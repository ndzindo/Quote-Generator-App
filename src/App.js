import React, { useState, useEffect } from 'react';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
   
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
   
    fetchQuote();
  };



  return (
    <div id="quote-box" style={{ textAlign: 'center' }}>
      <div id="text">{quote}</div>
      <div id="author">{author}</div>
      <button id="new-quote" onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteMachine;