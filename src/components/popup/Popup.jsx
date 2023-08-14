import React from "react";
import "./popup.css";
import ProductMissingPopup from "./ProductMissingPopup";
import ProductEditPopup from "./ProductEditPopup";
import AddProduct from "../addProduct/AddProduct";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className={`box ${props.content}`}>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content === "missing" ? (
          <ProductMissingPopup handleClose={props.handleClose} />
        ) : props.content === "edit" ? (
          <ProductEditPopup handleClose={props.handleClose} />
        ) : (
          <AddProduct handleClose={props.handleClose} />
        )}
      </div>
    </div>
  );
};

export default Popup;
