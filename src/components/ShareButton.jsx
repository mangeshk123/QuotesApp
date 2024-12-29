import React from "react"
import "../assets/styles/ShareButton.css"

const ShareButton = ({quote}) => {
  const encodedQuote = encodeURIComponent(quote)
  const whatsappUrl = `https://wa.me/?text=${encodedQuote}`
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button>Share</button>
    </a>
  )
};

export default ShareButton;