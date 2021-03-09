import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import ProductStore from "./ProductStore";
import ProductPage from "./ProductPage";
import "./styles.scss";

function ProductListPage(props) {
  const renderProduct = () => {
    console.log("ProductListPage props", props);
    const params = getParams(props.location.search);
    console.log("ProductListPage params", params);
    let content = null;

    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        console.log("I am from productStore");
        break;
      case "page":
        content = <ProductPage {...props} />;
        console.log("I am from productPage");
        break;
      default:
        content = null;
        console.log("I am the default Page");
    }
    return content;
  };
  return (
    <Layout>
      <ProductStore {...props} />
      {renderProduct()}
    </Layout>
  );
}

export default ProductListPage;
