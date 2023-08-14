import React from "react";

const ProductMissingPopup = (props) => {
  return (
    <>
      <div className="missingProductWraper">
        <h3>Missing product</h3>
        <p>Is' Chiken Breast Fillets, Boneless ... ' urgent ?</p>
      </div>
      <div>
        <button className="yesAction" onClick={props.handleClose}>
          Yes
        </button>
        <button className="noAction" onClick={props.handleClose}>
          No
        </button>
      </div>
    </>
  );
};

export default ProductMissingPopup;
