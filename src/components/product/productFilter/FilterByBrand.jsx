
import React from 'react';

const FilterByBrand = ({ selectedBrand, setSelectedBrand, brands }) => { 
  return (
    <div className="brand-filter">
      <label>Бренд:</label>
      <select 
        value={selectedBrand} 
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="">Все бренды</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByBrand;
