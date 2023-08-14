import styled, { css } from "styled-components";

export const ReecoButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e633f !important;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  font-size: 14;
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 6px 10px;
  margin: 3px;

  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: #1e633f11;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: #1e633f;
      color: white;
      &:hover {
        background-color: #0e713e;
      }
    `}
`;
