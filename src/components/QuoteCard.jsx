import React from "react"
import ShareButton from "./ShareButton"
import "../assets/styles/QuoteCard.css"

const QuoteCard = ({quoteObject}) => {
  const {quote, author} = quoteObject;
  return (
    <div className="quote-card">
      <p className="quote-content">{quote}</p>
      <p className="quote-author">{author}</p>
      <ShareButton quote={quote} />
    </div>
  )
};

export default QuoteCard;
