import React from "react";
import Layout from "../../components/Layout";
import ProductStore from "./ProductStore";
import "./styles.scss";

function ProductListPage(props) {
  return (
    <Layout>
      <ProductStore {...props} />
    </Layout>
  );
}

export default ProductListPage;
