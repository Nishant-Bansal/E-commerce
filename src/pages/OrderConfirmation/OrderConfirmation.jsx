import React from "react"
import './OrderConfirmation.css'
import { useSelector } from "react-redux/es/exports";
import StarRatings from "react-star-ratings";

export const OrderConfirmation = () => {
    const { cartData } = useSelector((state) => ({
        cartData: state.addTocartData.cartData,
      }));
    return (
        <>
            <div className="confirmation-heading">
                Order Placed Successfully.....
            </div>
            <div className="order-heading-container">
                Order details : 
            </div>

            <div className="product-box">
                  <div>
                    <img
                      src={cartData.image}
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
                          {cartData.category}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Title :{" "}
                        </label>
                        <label className="sub-heading-value-title-container">
                          {cartData.title}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Description :{" "}
                        </label>
                        <label className="sub-heading-value-container">
                          {cartData.description}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Price :{" "}
                        </label>
                        <label className="sub-heading-value-price-container">
                          {cartData.price}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Count :{" "}
                        </label>
                        <label className="sub-heading-value-container">
                          {cartData.rating.count}
                        </label>
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                        <label className="sub-heading-key-container">
                          Rating :{" "}
                        </label>
                        <StarRatings
                          rating={cartData.rating.rate}
                          starRatedColor="yellow"
                          numberOfStars={5}
                          name="rating"
                        />
                      </div>
                      <div style={{ marginTop: "1vh" }}>
                      <label className="sub-heading-key-container">
                          Delivery Date :{" "}
                        </label>
                        <label className="sub-heading-value-container">
                          20th July 2022
                        </label>
                      </div>
                    </div>
                    
                  </div>
                </div>
        </>
    )
}