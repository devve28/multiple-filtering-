import React from 'react';

const FilterByCategory = ({ selectedCategory, setSelectedCategory, categories }) => { 
  return (
    <div className="category-filter">
      <label>Категория:</label>
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Все категории</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
