import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../../icons/Icons";
import NotifyTop from "../../notifyTop/NotifyTop";
import {
  ContainerTopbar,
  NavTop,
  NavLogo,
  LogoImg,
  ListNav,
  ItemNav,
  NavSearch,
  NavInput,
} from "./styled";

export const Topbar = () => {
  
  return (
    <>
      <NotifyTop />
      <ContainerTopbar className="box-shadow">
        <NavTop>
          <NavLogo>
            <LogoImg src="assets/imgs/LogoFoodcom.png" />
          </NavLogo>
          <ListNav>
            <ItemNav>TRANG CHỦ</ItemNav>
            <ItemNav>SẢN PHẨM</ItemNav>
            <ItemNav>SIÊU SALE</ItemNav>
            <ItemNav>TUYỂN CTV</ItemNav>
            <ItemNav>LIÊN HỆ</ItemNav>
            <NavSearch>
              <NavInput placeholder="Tìm sản phẩm..." />
              <FontAwesomeIcon
                className="icon"
                color="#a3a0a0"
                icon={faMagnifyingGlass}
              />
            </NavSearch>
          </ListNav>
        </NavTop>
      </ContainerTopbar>
      <Icons />
    </>
  );
};
