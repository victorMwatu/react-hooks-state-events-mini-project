import React, { useState } from "react";

function CategoryFilter({ categories, onCategory }) {
  const [isSelected, setIsSelected] = useState(null);
  function handleClick(e) {
    onCategory(e.target.value);
    
    setIsSelected(e.target.value);
  
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( (category) => <button key={category} value={category} onClick={handleClick} className= {isSelected === category ? 'selected':''}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
