import React, { useEffect, useState } from 'react';

const CarCategory = () => {
  const [category, setCategory] = useState([])
  useEffect( () => {
    fetch('http://localhost:5000/allToys')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  } , [])
  return (
    <div>
      CarCategory
    </div>
  );
};

export default CarCategory;