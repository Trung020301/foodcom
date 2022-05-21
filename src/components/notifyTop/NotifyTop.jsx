import {
  ContainerNotifyTop,
  WrapperNotifyTop,
  TextNotifyTop,
  ListNotifyTop,
  ItemNotifyTop,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faFacebookMessenger, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const NotifyTop = () => {
  return (
    <ContainerNotifyTop>
      <WrapperNotifyTop>
        <TextNotifyTop>Chào mừng bạn đã đến với <span>Foodcom</span> ! <strong>Đăng nhập ngay </strong> đễ nhận ưu đãi đặc biệt.</TextNotifyTop>
        <ListNotifyTop>
          <ItemNotifyTop title="Facebook">
            <FontAwesomeIcon color="#1877F2" icon={faFacebookF} />
          </ItemNotifyTop>
          <ItemNotifyTop title="Messager">
            <FontAwesomeIcon color="#1AB7EA" icon={faFacebookMessenger} />
          </ItemNotifyTop>
          <ItemNotifyTop title="Youtube">
            <FontAwesomeIcon color="#CD201F" icon={faYoutube} />
          </ItemNotifyTop>
          <ItemNotifyTop title="Email">
            <FontAwesomeIcon color="#FF3300" icon={faEnvelope} />
          </ItemNotifyTop>
        </ListNotifyTop>
      </WrapperNotifyTop>
    </ContainerNotifyTop>
  );
};

export default NotifyTop;
