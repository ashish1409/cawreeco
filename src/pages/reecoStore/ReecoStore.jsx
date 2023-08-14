import React from "react";
import {
  Wrapper,
  BoxShadow,
  Card,
  Gap30,
  AwesomeIcon,
  Title,
  SubTitle,
  OrderBlock,
  OrderInner,
  OrderAction,
} from "../../styles/ReecoStore.styled";
import {
  faBars,
  faBowlFood,
  faSnowflake,
  faCarrot,
  faBurger,
  faFishFins,
} from "@fortawesome/free-solid-svg-icons";

import Tbl from "../../components/table/Tbl";
import { useNavigate } from "react-router-dom";
import { ReecoButton } from "../../components/button/Button.styled";
export const ReecoStore = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <BoxShadow>
        <OrderBlock>
          <Title>Order &gt; Order3245234ABC</Title>
          <OrderInner>
            <SubTitle>Order3245234ABC</SubTitle>
            <OrderAction>
              <ReecoButton
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </ReecoButton>
              <ReecoButton primary>Approve Order</ReecoButton>
            </OrderAction>
          </OrderInner>
        </OrderBlock>
      </BoxShadow>
      <Gap30></Gap30>
      <Card>
        <div className="boxBlock">
          <div className="boxInner">
            <div className="heading">Supplier</div>
            <div className="subHeading">East Coast fruits & vegetables</div>
          </div>
          <div className="boxInner">
            <div className="heading">Supplier</div>
            <div className="subHeading">East Coast fruits & vegetables</div>
          </div>
          <div className="boxInner">
            <div className="heading">Shipping date</div>
            <div className="subHeading">Thu, Feb 10</div>
          </div>
          <div className="boxInner">
            <div className="heading">Total</div>
            <div className="subHeading">$ 15,028.3</div>
          </div>
          <div className="boxInner">
            <div className="heading">Category</div>
            <div className="subHeading">
              <ul className="iconAdjestContainer">
                <li className="iconAdjust">
                  <AwesomeIcon icon={faBars} />{" "}
                </li>
                <li className="iconAdjust">
                  <AwesomeIcon icon={faSnowflake} />{" "}
                </li>
                <li className="iconAdjust">
                  <AwesomeIcon icon={faBowlFood} />{" "}
                </li>
                <li className="iconAdjust">
                  <AwesomeIcon icon={faCarrot} />{" "}
                </li>
                <li className="iconAdjust">
                  <AwesomeIcon icon={faBurger} />{" "}
                </li>

                <li className="iconAdjust">
                  <AwesomeIcon icon={faFishFins} />{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="boxInner">
            <div className="heading">Department</div>
            <div className="subHeading">300-444-678</div>
          </div>

          <div className="boxInner">
            <div className="heading">Status</div>
            <div className="subHeading">Awaiting your approvel</div>
          </div>
        </div>
      </Card>
      <Gap30></Gap30>
      <Card>
        <Tbl />
      </Card>
    </Wrapper>
  );
};
