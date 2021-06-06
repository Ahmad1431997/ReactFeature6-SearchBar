// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

// Data
import products from "../products";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const searchArray = products.filter((product) =>
    product.name.toUpperCase().includes(query.toUpperCase())
  );
  // console.log({SearchArray});

  const productList = searchArray.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
