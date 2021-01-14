import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { getProductsBySlug } from "../../redux/actions";
import "./styles.scss";

function ProductListPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const { slug } = props.match.params;
    console.log(slug);
    dispatch(getProductsBySlug(slug));
  }, []);
  return (
    <Layout>
      <div className="card">
        <div className="cardHeader">
          <div>Samsung Mobile Under 10k</div>
          <button>View All</button>
        </div>
        <div>
          <div className="productContainer">
            <div className="productImgContainer">
              <img
                src="http://localhost:5000/public/VycvaFMd-W-galaxy-m31-sm-m315f-ds-samsung-original-imafyz8xgpzkzdqz.jpeg"
                alt=""
              />
            </div>
            <div className="productInfo">
              <div>Samsung Galaxy 4gb phone</div>
              <div>
                <span>4.3</span>
                <span>3353</span>
              </div>
              <div className="productPrice">5000</div>
            </div>
          </div>
          <div className="productContainer">
            <div className="productImgContainer">
              <img
                src="http://localhost:5000/public/VycvaFMd-W-galaxy-m31-sm-m315f-ds-samsung-original-imafyz8xgpzkzdqz.jpeg"
                alt=""
              />
            </div>
            <div className="productInfo">
              <div>Samsung Galaxy 4gb phone</div>
              <div>
                <span>4.3</span>&nbsp;
                <span>3353</span>
              </div>
              <div className="productPrice">5000</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListPage;
