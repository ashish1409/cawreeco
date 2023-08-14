import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Title = styled.div`
  font-size: 10px;
  color: #5b4949;
  width: 100%;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  float: left;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0rem 3rem;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  @media (max-width: 704px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
const OrderBlock = styled.div`
  display: grid;
  width: 100%;
`;

const OrderInner = styled.div`
  display: block;
  width: 100%;
`;
const OrderAction = styled.div`
  float: right;
  display: flex;
`;

const BoxShadow = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .orderBlock {
    display: grid;
    width: 100%;
  }
  .orderInner {
    display: block;
    width: 100%;
  }

  .orderAction {
    float: right;
    display: flex;
  }
`;

const Card = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 30px 0;
  .boxBlock {
    width: 100%;
    display: flex;
    padding: 10px 0px;
    overflow: auto !important;
    border-radius: 10px;
  }
  .boxBlock > * {
    width: calc(100% / 3);
    padding: 10px;
  }
  .boxInner {
    background-color: #ffffff;
    border-right: 1px solid#d6d4d4;
  }
  .boxInner:last-child {
    border-right: none;
  }
  .heading {
    font-size: 14px;
    color: #a3a3a3;
    margin-bottom: 5px;
  }
  .subHeading {
    font-size: 14px;
    color: #06355c;
    font-weight: 700;
  }
  .iconAdjestContainer {
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .iconAdjust {
    width: 31.33%;
    float: left;
    text-align: center;
  }
  .orderInner {
    display: block;
    width: 100%;
  }
  .orderNumber {
    font-size: 20px;
    float: left;
  }
  .orderAction {
    float: right;
    display: flex;
  }
  @media (max-width: 704px) {
    .columns-3 {
      width: 100%;
    }
    .heading {
      font-size: 10px;
      margin-bottom: 2px;
    }
    .subHeading {
      font-size: 12px;
      color: #06355c;
    }
  }
  @media (max-width: 800px) {
    .heading {
      font-size: 10px;
      margin-bottom: 2px;
    }
    .subHeading {
      font-size: 14px;
      color: #06355c;
    }
  }
`;
const Gap20 = styled.div`
  height: 20px;
`;
const Gap30 = styled.div`
  height: 30px;
`;
const AwesomeIcon = styled(FontAwesomeIcon)`
  color: #a3a3a3;
  font-size: 20px;
  margin: 5px;
  @media (max-width: 704px) {
    display: block;
  }
`;
export {
  Wrapper,
  OrderBlock,
  OrderInner,
  OrderAction,
  Title,
  SubTitle,
  BoxShadow,
  Card,
  Gap20,
  Gap30,
  AwesomeIcon,
};
