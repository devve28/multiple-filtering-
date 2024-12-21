import React from 'react';


const COLOR_OPTIONS = ['Белый', 'Красный', 'Синий', 'Голубой', 'Зеленый'];

const FilterByColor = ({ selectedColors, setSelectedColors }) => {
  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="color-filter">
      <label>Цвета:</label>
      <div>
        {COLOR_OPTIONS.map((color, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={color}
              checked={selectedColors.includes(color)} 
              onChange={() => handleColorChange(color)} 
            />
            <label htmlFor={color}>{color}</label> {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByColor;
