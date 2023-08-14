import styled, { css } from "styled-components";
export const CustomImage = styled.img.attrs((props) => ({ src: props.img }))`
  display: inline;
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;
