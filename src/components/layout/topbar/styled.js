import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Input } from "../../../styles/GlobalStyles.styled";

export const ContainerTopbar = styled(Container)`
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #fff;
`;

export const NavTop = styled.nav`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: ${(props) => (props.isScroll ? "0" : "10px 10px 10px 0")};
`;
export const NavLogo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.img`
  max-width: 90px;
  cursor: pointer;
`;
export const ListNav = styled.ul`
  flex: 3;
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  gap: 50px;
`;
export const ItemNav = styled.li`
  cursor: pointer;
  transition: all ease-in 0.4s;
  border-bottom: 1px solid transparent;
  &:hover {
    color: #eb301e;
    border-bottom: 1px solid #eb301e;
  }
`;
export const NavSearch = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  border-radius: 20px;
  padding: 0 10px;
  background-color: #edece8;

  & > .icon {
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
`;
export const NavInput = styled(Input)`
  width: 100%;
  background-color: transparent;
`;
