import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  align-self: start;
  width: 95px;
`;
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #1e633f;
  padding: 1rem 3rem;
  position: relative;
  @media (max-width: 704px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const NavLinkWrapper = styled.div`
  @media (max-width: 704px) {
    display: ${(props) => (props.active ? "block" : "none")};
    text-align: center;
    padding: 2rem 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.3s;
  color: white;
  margin-left: 2rem;
  font-size: 1rem;
  line-height: 2;

  &.${(props) => props.activeclassname} {
    color: #ff479a;
  }

  &:hover {
    color: #ff479a;
  }

  @media (max-width: 704px) {
    display: block;
    margin: 2rem auto;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 21px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  @media (max-width: 704px) {
    display: block;
  }
`;

const CartIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 48px;
  top: 21px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  @media (max-width: 704px) {
    right: 80px;
  }
`;

const UserProfile = styled(FontAwesomeIcon)`
  position: absolute;
  right: 80px;
  top: 21px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  @media (max-width: 704px) {
    right: 50px;
  }
`;

export {
  LogoImg,
  NavbarWrapper,
  NavLinkWrapper,
  StyledNavLink,
  StyledFontAwesomeIcon,
  CartIcon,
  UserProfile,
};
