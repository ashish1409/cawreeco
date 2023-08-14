import React, { useState, useEffect } from "react";
// import "../../styles/table.css";
import {
  ProductAddWrapper,
  AddProductTitle,
  AddProductSubTitle,
  AddProductSearch,
  ProductOrderBlock,
  ProductOrderInner,
  ProductOrderAction,
  TableWraper,
  ProductTable,
  ProductTableThead,
  ProductTableRow,
  ProductTableTh,
  ProductTableTd,
  ProductTableTbody,
  TableContainer,
} from "./AddProduct.styled";

import { Card } from "../../styles/ReecoStore.styled";
import {
  getAllReeco,
  getLoading,
  fetchAllProductList,
} from "../../features/reeco/reecoSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReecoButton } from "../button/Button.styled";
import { CustomImage } from "../image/Image.styled";
const AddProduct = (props) => {
  const handleSubmit = (data) => {
    var obj = {
      data: [
        {
          image: data.image,
          name: data.name,
          brand: data.brand,
          date: data.date,
          price: data.price,
          Quantity: data.Quantity,
        },
      ],
    };

    alert(JSON.stringify(obj, null, 4));
  };

  const allReecoData = useSelector(getAllReeco);
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();
  console.log(allReecoData, "data");
  let contentToRender = "";
  useEffect(() => {
    dispatch(fetchAllProductList());
  }, []);

  const [query, setquery] = useState("");
  const [state, setstate] = useState({
    query: "",
    list: [],
  });
  const handleChange = (e) => {
    const results = allReecoData.filter((item) => {
      if (e.target.value === "") return allReecoData;
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  contentToRender =
    apiStatus === "pandding" ? (
      <div>Loading</div>
    ) : (
      <>
        {" "}
        {allReecoData.map((productList) => (
          <ProductTableRow>
            <ProductTableTd>
              <CustomImage img={productList.image}></CustomImage>
            </ProductTableTd>
            <ProductTableTd>{productList.name}</ProductTableTd>
            <ProductTableTd>{productList.brand}</ProductTableTd>
            <ProductTableTd>{productList.date}</ProductTableTd>
            <ProductTableTd>{productList.price}</ProductTableTd>
            <ProductTableTd>{productList.Quantity}</ProductTableTd>
            <ProductTableTd>
              <ProductOrderAction>
                <ReecoButton onClick={props.handleClose}>Cancel</ReecoButton>
                <ReecoButton primary onClick={() => handleSubmit(productList)}>
                  Add
                </ReecoButton>
              </ProductOrderAction>
            </ProductTableTd>
          </ProductTableRow>
        ))}
      </>
    );

  return (
    <TableContainer>
      <TableWraper>
        <Card>
          <ProductAddWrapper>
            <ProductOrderBlock>
              <AddProductTitle>
                Add product from sysco's catalog
              </AddProductTitle>
              <AddProductSubTitle>
                Search product from Sysco's catalog and add quantity
              </AddProductSubTitle>
              <ProductOrderInner>
                <AddProductSearch className="orderNumber addProductSearch">
                  <form>
                    <input
                      type="search"
                      onChange={handleChange}
                      value={state.query}
                    />
                    <button type="submit">Search</button>
                  </form>
                </AddProductSearch>
              </ProductOrderInner>
            </ProductOrderBlock>

            <ProductTable>
              <ProductTableThead>
                <ProductTableTh></ProductTableTh>
                <ProductTableTh>Product name</ProductTableTh>
                <ProductTableTh>Brand</ProductTableTh>
                <ProductTableTh>Packing</ProductTableTh>
                <ProductTableTh>Price(S)</ProductTableTh>
                <ProductTableTh>Qt.</ProductTableTh>
                <ProductTableTh>Action</ProductTableTh>
              </ProductTableThead>
              <ProductTableTbody>{contentToRender}</ProductTableTbody>
            </ProductTable>
          </ProductAddWrapper>
        </Card>
      </TableWraper>
    </TableContainer>
  );
};

export default AddProduct;
