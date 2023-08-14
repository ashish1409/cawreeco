import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../../components/popup/Popup";
import "../../styles/table.css";
import {
  getAllReeco,
  getLoading,
  fetchAllReecoApi,
} from "../../features/reeco/reecoSlice";
import { AwesomeIcon } from "../../styles/ReecoStore.styled";
import { faCheck, faClose, faEdit } from "@fortawesome/free-solid-svg-icons";

export const StoreTable = () => {
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
  const allReecoData = useSelector(getAllReeco);
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();
  let contentToRender = "";
  useEffect(() => {
    dispatch(fetchAllReecoApi());
  }, []);
  contentToRender =
    apiStatus === "pandding" ? (
      <div>Loading</div>
    ) : (
      <>
        {" "}
        {allReecoData.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.image}></img>
            </td>
            <td className="details">{product.details}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td>{product.Quantity}</td>
            <td>{product.Total}</td>
            <td id="addStatus">
              <div className="statusLabel statusMissing ">Missing</div>
              <div className="statusLabel statusMissingUrgent ">
                Missing - Urgent
              </div>
              <div className="statusLabel statusApprove ">Approved</div>
            </td>
            <td>
              <AwesomeIcon
                id="Approved"
                className="first"
                onClick={handleClickApprove.bind(this, "approve")}
                icon={faCheck}
              />

              <AwesomeIcon
                className="first"
                onClick={handleClick.bind(this, "missing")}
                icon={faClose}
              />

              <AwesomeIcon
                className="first"
                onClick={handleClick.bind(this, "edit")}
                icon={faEdit}
              />
            </td>
          </tr>

          // <div key={product.id}>{product.id}</div>
        ))}
        {isOpen && <Popup content={popupName} handleClose={togglePopup} />}
      </>
    );
  return <>{contentToRender}</>;
};
