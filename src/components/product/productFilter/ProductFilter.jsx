import React from "react";
import { useDispatch } from "react-redux";
import "./ProductFilter.scss";
import { CLEAR_FILTERS } from "../../../utils/cleareBtn";
import FilterByPrice from './FilterByPrice';
import FilterByColor from './FilterByColor';
import FilterByCategory from './FilterByCategory';
import FilterByBrand from './FilterByBrand';

const ProductFilter = ({
  priceRange,
  setPriceRange,
  setSortCriteria,
  selectedColors,
  setSelectedColors,
  selectedCategory,
  setSelectedCategory,
  categories,
  selectedBrand,
  setSelectedBrand,
  brands,
  sortCriteria 
}) => {
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(CLEAR_FILTERS());
   
    setPriceRange([0, 100000]); 
    setSortCriteria("default"); 
    setSelectedColors([]); 
    setSelectedCategory(""); 
    setSelectedBrand(""); 
  };

  return (
    <div className="filter">
      <FilterByCategory 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <FilterByBrand 
        selectedBrand={selectedBrand} 
        setSelectedBrand={setSelectedBrand} 
        brands={brands}
      />
      <FilterByPrice priceRange={priceRange} setPriceRange={setPriceRange} />
      <FilterByColor selectedColors={selectedColors} setSelectedColors={setSelectedColors} />

      <div className="sort select">
        <label>Сортировать по:</label>
        <select onChange={(e) => setSortCriteria(e.target.value)} value={sortCriteria}>
          <option value="default">Сортировать</option>
          <option value="priceAsc">Цена: от низкой к высокой</option>
          <option value="priceDesc">Цена: от высокой к низкой</option>
          <option value="nameAsc">Имя: A до Z</option>
          <option value="nameDesc">Имя: Z до A</option>
          <option value="rating">Рейтинг</option>
        </select>
      </div>

      <button className="--btn-small --bg-green" onClick={handleClearFilters}>
        Очистить фильтры
      </button>
    </div>
  );
};

export default ProductFilter;
