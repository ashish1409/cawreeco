import styled, { css } from "styled-components";

const ProductAddWrapper = styled.div`
  padding: 30px;
`;

const AddProductTitle = styled.div`
  font-size: 14px;
  color: #06355c;
  font-weight: 700;
  margin-bottom: 10px;
`;

const AddProductSubTitle = styled.div`
  font-size: 12px;
  color: #a3a3a3;
  margin-bottom: 5px;
  margin-bottom: 10px;
`;

const AddProductSearch = styled.div`
  margin-bottom: 30px;
  display: flex;
`;
const ProductOrderBlock = styled.div`
  display: grid;
  width: 100%;
`;

const ProductOrderInner = styled.div`
  display: block;
  width: 100%;
`;
const ProductOrderAction = styled.div`
  float: left;
  display: flex;
`;
const TableContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;
`;
const TableWraper = styled.div`
  overflow-x: auto;
  table tbody tr:nth-of-type(even) > * {
    background: none !important;
  }
  .table-wrapper::-webkit-scrollbar {
    height: 8px;
  }

  .table-wrapper::-webkit-scrollbar-thumb {
    background: #1b4965;
    border-radius: 40px;
  }

  .table-wrapper::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 40px;
  }

  table {
    margin: 0px 0 20px;
    border-collapse: collapse;
    text-align: center;
    width: 100%;
  }

  table th,
  table td {
    padding: 10px;
    min-width: 75px;
    text-align: left;
    font-size: 14px;
  }
  table td {
    font-size: 12px;
  }
  table td.details {
    width: 200px;
  }

  table th {
    color: #ffffff;
    background: #1b4965;
  }
  table td img {
    height: 30px;
    width: 30px;
  }

  table tbody tr:nth-of-type(even) > * {
    background: #edf2f4;
  }

  table td:first-child {
    display: grid;
    grid-template-columns: 25px 1fr;
    grid-gap: 10px;
    text-align: left;
  }
  table td:last-child,
  table td#addStatus {
    background-color: #f9f9f9;
  }
`;
const ProductTable = styled.table``;
const ProductTableThead = styled.thead``;
const ProductTableTh = styled.th``;
const ProductTableRow = styled.tr``;
const ProductTableTbody = styled.tbody``;
const ProductTableTd = styled.td``;

export {
  ProductAddWrapper,
  AddProductTitle,
  AddProductSubTitle,
  AddProductSearch,
  ProductOrderBlock,
  ProductOrderInner,
  ProductOrderAction,
  TableContainer,
  TableWraper,
  ProductTable,
  ProductTableThead,
  ProductTableTh,
  ProductTableRow,
  ProductTableTbody,
  ProductTableTd,
};
