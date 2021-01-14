import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { getProductsBySlug } from "../../redux/actions";

function ProductListPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const { slug } = props.match.params;
    console.log(slug);
    dispatch(getProductsBySlug(slug));
  }, []);
  return <Layout>ProductListPage</Layout>;
}

export default ProductListPage;
