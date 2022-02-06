import React, { useState } from 'react';
import people from './data'
import { FaChevronLeft, FaChevronRight,FaQuoteRight } from "react-icons/fa";
import "./review.css";
const Review = () => {
  const [index, setindex] = useState(0);
  const adding = () => { 
    if (index === people.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }
  const subtracting = () => {
    if (index === 0) {
      setindex(people.length - 1);
    } else {
      setindex(index - 1);
    }
  }
 

  const{ id,name,image,price,rating}=people[index];
  return (
    <div className="card">
      <FaChevronLeft
        onClick={() => {
          adding();
        }}
      />
      <div>
        <img src={image} alt="" width="300px" height="330px" />
        <h3>{name}</h3>
        <p>{price}</p>
      </div>

      <FaChevronRight
        onClick={() => {
          subtracting();
        }}
      />
    </div>
  );
};

export default Review;
