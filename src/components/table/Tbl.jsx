import React, { useState } from "react";
import "../../styles/table.css";
import { BoxShadow, AwesomeIcon } from "../../styles/ReecoStore.styled";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Popup from "../popup/Popup";
import { Orders } from "../../pages/order/Orders";
import TblHeader from "./TblHeader";
import { ReecoButton } from "../button/Button.styled";
import { StoreTable } from "./StoreTable";

const Tbl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupName, setPopupName] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleClickApprove = (name) => {
    alert(name);
  };
  const handleClick = (name) => {
    togglePopup();
    setPopupName(name);
  };

  const printData = () => {
    myWindow = window.open("", "", "width=500,height=500");
    myWindow.document.close(); //missing code
    myWindow.focus();
    myWindow.print();
  };
  return (
    <div>
      <div className="container">
        <div className="table-wrapper">
          <BoxShadow>
            <div className="orderBlock">
              <div className="orderInner">
                <div className="orderNumber">
                  <form>
                    <input type="search" placeholder="Search..." />
                    <button type="submit">Search</button>
                  </form>
                </div>
                <div className="orderAction">
                  <ReecoButton onClick={handleClick.bind(this, "addItem")}>
                    Add Item
                  </ReecoButton>
                  <div>
                    <AwesomeIcon
                      className="first"
                      onClick={printData.bind(printData)}
                      icon={faPrint}
                    />
                  </div>
                </div>
              </div>
            </div>
          </BoxShadow>
          <table>
            <thead>
              <TblHeader />
            </thead>
            <tbody>
              <StoreTable />
            </tbody>
          </table>
        </div>
      </div>
      {isOpen && <Popup content={popupName} handleClose={togglePopup} />}
    </div>
  );
};

export default Tbl;
