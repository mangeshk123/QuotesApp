import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "../assets/styles/Home.css"

const Home = () => {
  const [categories, setCategories] = useState(["general","life","success","motivational","fun","programming","dream","failure","gaming","birthday","Humorous","travel"])

  useEffect(()=>{
    axios.get('http://localhost:3000/categories').
      then(response => setCategories(response.data)).
      catch(error => {
        console.log('Error fetching data ', error)
        alert('Error fetching category list')
      })
  },[])

  return (
    <div className="home-container">
      <h1>Quote Categories</h1>
      <div className="category-list">
        {
          categories.map((category, index) => 
            <Link 
              key={index}
              className="category-name"
              to={`category/${category}`}
            >
              {category}
            </Link>
          )
        }
      </div>
    </div>
  )
};

export default Home;