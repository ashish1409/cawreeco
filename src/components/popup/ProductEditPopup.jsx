import React from "react";
import "./popup.css";
import { ReecoButton } from "../button/Button.styled";
const ProductEditPopup = (props) => {
  return (
    <>
      <div className="missingProductWraper">
        <div className="productHeading">
          <div className="title">
            Chicken Breast Fillets, Boneless Marinated 6 Ounce Raw, Invivid...
          </div>
          <div className="subTitle">American Roland</div>
        </div>

        <div className="editBody">
          <div>
            <div style={{ float: "left" }}>
              <div className="productImage">
                <img
                  style={{ width: "100%" }}
                  src="https://i.dummyjson.com/data/products/25/thumbnail.jpg"
                />
              </div>
            </div>
            <div style={{ float: "left", marginLeft: "40px" }}>
              <table>
                <tr>
                  <td>
                    <div className="productPrice">Price ($)</div>
                  </td>
                  <td>
                    <div className="productValue">
                      <input
                        className="productValueInner"
                        type="number"
                        value="60.5"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="productQuantityText">Quantity</div>
                  </td>
                  <td>
                    <div className="productActionsWrapper">
                      <button className="productActionsBtn1">-</button>
                      <input
                        className="productActionsInput"
                        type="number"
                        value="15"
                      />
                      <button className="productActionsBtn2">+</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="productTotalText">Total</div>
                  </td>
                  <td>
                    <div className="productTotalPrice">907.5</div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="productOption">
          <div>
            Choose reason <span>Optinal</span>
          </div>
          <div className=" statusToggle">
            <div className="statusLabel active">Missing product</div>
            <div className="statusLabel">Quanity is not the same</div>
            <div className="statusLabel">Price is not same</div>
            <div className="statusLabel">Other</div>
          </div>

          <div className="orderAction">
            <ReecoButton onClick={props.handleClose}>Cancel</ReecoButton>
            <ReecoButton primary onClick={props.handleClose}>
              Send
            </ReecoButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEditPopup;
