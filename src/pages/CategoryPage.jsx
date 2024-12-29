import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import QuoteCard from '../components/QuoteCard'
import axios from "axios";
import "../assets/styles/CategoryPage.css"

const CategoryPage = () => {
  const {category} = useParams();
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    axios.get(`http://localhost:3000/${category}`).
      then(response => {
        setQuotes(response.data)
        setLoading(false)
      }).
      catch(error => {
        console.log(`Error while fetching ${category} type quotes`, error)
        setLoading(false)
      })
  }, [category])

  if(loading){
    return <div className="loading">Loading</div>
  }

  if(quotes.length === 0){
    return <div className="no-quotes">No quotes available in the category {category}</div>
  }
  return (
    <div className="quotes-container">
      <h1>Category : {category.toUpperCase()}</h1>
      <div className="quote-list">
        {
          quotes.map((quote, index) => 
            <QuoteCard key={index} quoteObject={quote}/>
          )
        }
      </div>
    </div>
  )
};

export default CategoryPage;
