const PageLayout = async ({ children }) => {
  const response = await fetch("http://localhost:3001/products");
  const products = await response.json();
  console.log(products);

  return <>{children}</>;
};

export default PageLayout;
