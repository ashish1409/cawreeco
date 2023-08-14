import React, { useState } from "react";
import { Logo } from "../common/Logo";
import {
  NavLinkWrapper,
  NavbarWrapper,
  StyledNavLink,
  StyledFontAwesomeIcon,
  CartIcon,
  UserProfile,
} from "../../styles/Navbar.styled";
import {
  faBars,
  faCartShopping,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  const link = [
    {
      page: "Dashboard",
      href: "/",
    },
    { page: "ReecoStore", href: "/ReecoStore" },
    { page: "Orders", href: "/Orders" },
    {
      page: "Analytics",
      href: "/Analytics",
    },
  ];
  return (
    <NavbarWrapper>
      <Logo />
      <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />

      <NavLinkWrapper active={active}>
        {link.map((link) => (
          <StyledNavLink
            activeclassname="active"
            key={link.page}
            to={link.href}
          >
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
      <CartIcon icon={faCartShopping} />
      <UserProfile icon={faUserCircle} />
    </NavbarWrapper>
  );
};
