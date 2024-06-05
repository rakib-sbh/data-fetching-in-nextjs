"use client";

const { useState, useEffect } = require("react");

const productStyle = {
  backgroundColor: "wheat",
  color: "black",
  padding: "10px",
  margin: "10px",
};

const headingStyle = {
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
  padding: "10px",
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError(error);
        }
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error in loading data</h1>;
  }

  return (
    <div>
      <h1 style={headingStyle}>All Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id} style={productStyle}>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;

/**
 * * as this component is a client component, there will not be caching, revalidation and request memoization features.
 * * to get those feature use TanStack Query library
 */
