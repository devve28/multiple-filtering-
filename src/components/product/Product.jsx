import React, { useEffect, useState } from "react";
import ProductFilter from "./productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../customHooks/useFetchCollection";
import {
  STORE_PRODUCTS,
  GENERATE_PRODUCTS,
  selectGeneratedCards,
} from "../../utils/productSlice";

const Product = () => {
  const { data } = useFetchCollection("products");
  const generatedCards = useSelector(selectGeneratedCards);
  const dispatch = useDispatch();

  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortCriteria, setSortCriteria] = useState("default");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  
  const uniqueCategories = [...new Set(generatedCards.map(card => card.category))];
  const uniqueBrands = [...new Set(generatedCards.map(card => card.brand))];

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(STORE_PRODUCTS({ products: data }));
    }
  }, [dispatch, data]);

  useEffect(() => {
    dispatch(GENERATE_PRODUCTS({ count: 1000 }));
  }, [dispatch]);

  const filteredProducts = generatedCards.filter(product =>
    (selectedColors.length === 0 || selectedColors.some(color => product.color.includes(color))) &&
    (selectedCategory === "" || product.category === selectedCategory) &&
    (selectedBrand === "" || product.brand === selectedBrand) &&
    (product.price >= priceRange[0] && product.price <= priceRange[1])
  );

  return (
    <section>
      <div className="product container">
        <aside className="filter-aside">
          <ProductFilter 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            setSortCriteria={setSortCriteria}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={uniqueCategories}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            brands={uniqueBrands}
            sortCriteria={sortCriteria} 
          />
        </aside>
        <div className="content">
          <ProductList 
            products={filteredProducts}
            minPrice={priceRange[0]} 
            maxPrice={priceRange[1]} 
            sortCriteria={sortCriteria} 
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
