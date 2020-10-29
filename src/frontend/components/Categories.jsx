import React from 'react';
import '../assets/styles/components/Categories.scss';


const Categories = ({ title }) => (

  <div className="container categories">
    <h3 className="categories__title">{title}</h3>
  </div>
);

export default Categories;