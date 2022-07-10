import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { commonAction } from "../../redux/commonAction";
import StarRatings from "react-star-ratings";
import "./ProductDetail.css";
import { cartAction } from "../../redux/addTocart/cartAction";
import { useNavigate } from "react-router-dom";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [showProduct, setShowProduct] = useState(false);
  const productId = window.localStorage.getItem("productId");
  const productCategory = window.localStorage.getItem("productCategory");

  useEffect(() => {
    dispatch(
      commonAction(`/products/category/${productCategory}`, (response) => {
        console.log(response);
        response.data.map((item) => {
          if (item.id.toString() === productId) {
            setProduct(item);
            setShowProduct(true);
          }
        });
      })
    );
  }, []);

  const handleAddToCartClick = (e) => {
    console.log(e);
    dispatch(cartAction(product))
  };

  const handleCheckOutButton = (e) => {
    console.log(e);
    dispatch(cartAction(product))
    navigate('/check-out-page')
  }

  console.log("product ==>", product);

  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-heading-container">
          Product Details :
        </div>
        {showProduct && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="product-detail-title-container">
                {product.title}
              </div>
              <div>
                <button
                  type="button"
                  className="button-styling"
                  onClick={(e) => {
                    handleAddToCartClick(e);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-detail-image-container">
              <img
                src={product.image}
                alt="google advertising"
                width={"500px"}
                height={"500px"}
              />
            </div>
            <div>
              <label className="sub-heading-product-key-container">
                Rating :{" "}
              </label>
              <StarRatings
                rating={product.rating.rate}
                starRatedColor="yellow"
                numberOfStars={5}
                name="rating"
              />
            </div>
            <div style={{ marginTop: "3vh" }}>
              <label className="sub-heading-product-key-container">
                Description :{" "}
              </label>
              <div className="sub-heading-product-value-container">
                {product.description}
              </div>
            </div>
            <div style={{ marginTop: "3vh", display: "flex" , justifyContent: 'space-between'}}>
              <div style={{display: "flex" }}>
                <label className="sub-heading-product-key-container">
                  Price :{" "}
                </label>
                <div className="sub-heading-product-value-price-container">
                  {product.price}
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="checkout-button-styling"
                  onClick={(e) => {
                    handleCheckOutButton(e);
                  }}
                >
                  Checkout/ Countinue
                </button>
                </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
