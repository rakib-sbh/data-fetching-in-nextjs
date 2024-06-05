//? route level config
// export const fetchCache = "default-cache";

import { cookies } from "next/headers";

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

const ProductPage = async () => {
  const response = await fetch("http://localhost:3001/products", {
    next: {
      revalidate: 10,
    },
  });
  const products = await response.json();

  // const cookieStore = cookies();
  // cookieStore.get("theme");

  // const detailsResponse = await fetch("http://localhost:3001/products/1");
  // const details = await detailsResponse.json();
  return (
    <>
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

      {/* <div style={productStyle}>{details.description}</div> */}
    </>
  );
};

export default ProductPage;

/**
 * ! Though here is the details fetching `no-cache` option is configured, but second request response is not cached
 * ! To overcome this we can use route level configuration
 */
