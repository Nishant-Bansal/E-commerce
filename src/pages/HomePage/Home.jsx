import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { commonAction } from "../../redux/commonAction";
import "./Home.css";
import StarRatings from "react-star-ratings";
import { viewProductAction } from "../../redux/viewProduct/viewProductAction";

export const Home = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [heading, setHeading] = useState('All Products')

  useEffect(() => {
    dispatch(
      commonAction("/products/categories", (response) => {
        setCategory(response.data);
      })
    );

    dispatch(
      commonAction("/products", (response) => {
        setProducts(response.data);
      })
    );
  }, []);

  const handelRadioButton = (event) => {
    console.log(event.target.value);
    dispatch(
      commonAction(`/products/category/${event.target.value}`, (response) => {
        console.log("reponse ==>", response);
        setProducts(response.data);
        setHeading(event.target.value)
      })
    );
  };

  

  const handleViewProductClick = (e, product) => {
    console.log(e);
    console.log(product);
    dispatch(viewProductAction(product))
    window.localStorage.setItem('productId', product.id)
    window.localStorage.setItem('productCategory', product.category)
    window.open('/product-detail-page', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="home-page-container">
        <div className="home-page-heading-container">
          <div className="home-category-container">
            <div className="heading">Categories</div>

            {category.map((item) => {
              return (
                <div className="radio-container">
                  <input
                    id={item}
                    type={"radio"}
                    name={"category"}
                    value={item}
                    onChange={(e) => handelRadioButton(e)}
                  />
                  <label style={{ marginLeft: "5px" }} for={item}>
                    {item}
                  </label>
                  <br />
                </div>
              );
            })}
          </div>
          <div className="home-product-container">
            <div className="heading">{heading}</div>
            {products.map((item) => {
              return (
                <div className="each-product-box">
                  <div>
                    <img
                      src={item.image}
                      alt="google advertising"
                      width={"350px"}
                      height={"350px"}
                    />
                  </div>
                  <div className="product-description-container">
                    <div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Category :{" "}
                        </label>
                        <label className="sub-heading-value-container">
                          {item.category}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Title :{" "}
                        </label>
                        <label className="sub-heading-value-title-container">
                          {item.title}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Description :{" "}
                        </label>
                        <label className="sub-heading-value-container">
                          {item.description}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Price :{" "}
                        </label>
                        <label className="sub-heading-value-price-container">
                          {item.price}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Count :{" "}
                        </label>
                        <label className="sub-heading-value-container">
                          {item.rating.count}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Rating :{" "}
                        </label>
                        <StarRatings
                          rating={item.rating.rate}
                          starRatedColor="yellow"
                          numberOfStars={5}
                          name="rating"
                        />
                      </div>
                    </div>
                    <div >
                      <button
                      className="button-styling"
                        type="button"
                        onClick={(e) => {
                          handleViewProductClick(e, item);
                        }}
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
