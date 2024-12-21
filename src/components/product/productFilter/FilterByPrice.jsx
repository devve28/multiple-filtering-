import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 
import debounce from '../../../utils/debounce'; 

const FilterByPrice = ({ priceRange, setPriceRange }) => {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

 
  useEffect(() => {
    setLocalPriceRange(priceRange);
  }, [priceRange]);

  
  useEffect(() => {
    const handler = debounce((value) => {
      setPriceRange(value);
    }, 300);

    handler(localPriceRange); 

    return () => {
      handler.cancel(); 
    };
  }, [localPriceRange, setPriceRange]); 

  return (
    <div className="price-range">
      <label>Price Range:</label>
      <Slider
        range
        min={0}
        max={100000}
        value={localPriceRange}
        onChange={setLocalPriceRange}
        marks={{ 0: '$0', 100000: '$100,000' }}
        step={100} 
      />
      <p>{`Price: $${localPriceRange[0]} - $${localPriceRange[1]}`}</p>
    </div>
  );
};

export default FilterByPrice;
