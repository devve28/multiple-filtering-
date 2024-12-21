import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import Search from "../../search/Search";
import Pagination from "../../pagination/Pagination";
import productSort from "../productSort/productSort"; 
import debounce from "../../../utils/debounce"; 

const ProductList = ({ products, minPrice, maxPrice, sortCriteria }) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  
  useEffect(() => {
    const debouncedSetSearch = debounce((value) => {
      setDebouncedSearch(value);
    }, 300);

    debouncedSetSearch(search);

 
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [search]);

  const filteredProducts = products.filter(product => 
    (product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
     product.description.toLowerCase().includes(debouncedSearch.toLowerCase())) &&
    product.price >= minPrice &&
    product.price <= maxPrice
  );


  const sortedProducts = productSort(filteredProducts, sortCriteria);


  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="product-list" id="product">
      <div className="top">
        <p style={{ gap: "5px", display: "flex", alignItems: "flex-end" }}>
          <b>{filteredProducts.length}</b> Products found.
        </p>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="grid">
        {currentProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          currentProducts.map((product) => (
            <div key={product.id} style={{ border: "none", width: "100%" }}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price.toLocaleString()}</p>
              <p>Rating: {product.rating} / 100</p>
            </div>
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
        totalProducts={sortedProducts.length} 
      />
    </div>
  );
};

export default ProductList;
