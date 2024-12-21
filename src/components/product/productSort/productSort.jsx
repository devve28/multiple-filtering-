

const productSort = (products, sortCriteria) => {
  const sortedProducts = [...products];
  switch (sortCriteria) {
    case "priceAsc":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "priceDesc":
      return sortedProducts.sort((a, b) => b.price - a.price);
    case "nameAsc":
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case "nameDesc":
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    case "rating":
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    default:
      return sortedProducts; 
  }
};

export default productSort;
