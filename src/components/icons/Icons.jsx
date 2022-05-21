import { IconCall, IconToTop } from "./styled";
import { faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Icons = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset > 200 ? true : false);
      return () => window.onscroll === null;
    };
  });
  const clickToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <IconCall as="a" href="tel:0989032869" title="Gọi điện ngay" bg="#21de54">
        <FontAwesomeIcon color="#fff" fontSize="30px" icon={faPhone} />
      </IconCall>
      <IconToTop
        onClick={clickToTop}
        show={scroll ? 1 : 0}
        bg="#fc8b2d"
        title="Lên trên cùng"
      >
        <FontAwesomeIcon color="#fff" fontSize="30px" icon={faArrowUp} />
      </IconToTop>
      <MessengerCustomerChat pageId="184246522457296" appId="425353716096170" />
    </>
  );
};

export default Icons;
