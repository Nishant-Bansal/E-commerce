import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import "./Checkout.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { cartAction } from "../../redux/addTocart/cartAction";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [pricingData, setPricingData] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { cartData } = useSelector((state) => ({
    cartData: state.addTocartData.cartData,
  }));

  useEffect(() => {
    setPricingData(cartData.price);
  }, []);

  useEffect(() => {
    setPricingData(cartData.price * quantity);
  }, [quantity]);

  const handleRemoveFromCartClick = (e) => {
    console.log(e);
    dispatch(cartAction({}));
    setShowMessage(true);
  };

  const handleMakePayment = (e) => {
    const sendData = {
      category: cartData.category,
      description: cartData.description,
      id: cartData.id,
      image: cartData.image,
      price: pricingData,
      rating: {
        count: cartData.rating.count,
        rate: cartData.rating.rate,
      },
      quantity: quantity,
    };
    navigate("/order-confirmation-page");
    dispatch(cartAction(sendData));
  };

  console.log("cartData ==>", cartData);
  return (
    <div className="check-out-detail-container">
      {!showMessage ? (
        <>
          <div className="check-out-heading-container">Check out Details :</div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="check-out-title-container">{cartData.title}</div>
            <div>
              <button
                type="button"
                className="button-styling"
                onClick={(e) => {
                  handleRemoveFromCartClick(e);
                }}
              >
                Remove from Cart
              </button>
            </div>
          </div>

          <div className="check-out-container">
            <div className="check-out-image-container">
              <img
                src={cartData.image}
                alt="google advertising"
                width={"300px"}
                height={"300px"}
              />
            </div>
            <div className="check-out-data-container">
              <div>
                <label className="sub-heading-product-key-container">
                  Rating :{" "}
                </label>
                <StarRatings
                  rating={cartData.rating.rate}
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
                  {cartData.description}
                </div>
              </div>
              <div
                style={{
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <label className="sub-heading-product-key-container">
                    Quantity :
                  </label>
                  <div style={{ display: "flex", marginLeft: "10px" }}>
                    <div>
                      <button
                        type="button"
                        // className="button-styling"
                        onClick={(e) => setQuantity(quantity - 1)}
                      >
                        -
                      </button>
                    </div>
                    <div style={{ marginLeft: "5px", marginRight: "5px" }}>
                      {quantity}
                    </div>
                    <div>
                      <button
                        type="button"
                        // className="button-styling"
                        onClick={(e) => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <label className="sub-heading-product-key-container">
                    Price :{" "}
                  </label>
                  <div className="sub-heading-product-value-price-container">
                    {pricingData}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button
              type="button"
              className="make-payment-button-styling"
              onClick={(e) => {
                handleMakePayment(e);
              }}
            >
              Make Payment
            </button>
          </div>
        </>
      ) : (
        <div className="show-message-check-out-container">
          <div className="label-check-out-container">
            Please Add something into cart. Then check out to this page.
          </div>
        </div>
      )}
    </div>
  );
};
