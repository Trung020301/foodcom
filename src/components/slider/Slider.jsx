import { sliders } from "../../data/slider";
import { Container } from "../../styles/GlobalStyles.styled";
import {
  WrapperSlider,
  Icon,
  ListSlider,
  SliderItem,
  SliderImg,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  // Click next slide
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideNumber(slideNumber > 0 ? slideNumber - 1 : 4);
    } else {
      setSlideNumber(slideNumber < 4 ? slideNumber + 1 : 0);
    }
  };
  // Auto slideShow
  let slideInterval;
  const autoShow = () => {
    slideInterval = setInterval(() => {
        setSlideNumber(slideNumber !== sliders.length - 1 ? slideNumber + 1 : 0)
    },3000)
  }

  useEffect(()=>{
      autoShow();
      return () => {
          clearInterval(slideInterval)
      }

  })
  return (
    <Container className="overflowh">
      <WrapperSlider>
        <Icon left="0" onClick={() => handleClick("left")}>
          <FontAwesomeIcon
            fontSize="30px"
            className="icon"
            color="rgba(128, 124, 126, 0.8)"
            icon={faCircleArrowLeft}
          />
        </Icon>
        <Icon right="0" onClick={() => handleClick("right")}>
          <FontAwesomeIcon
            fontSize="30px"
            className="icon"
            color="rgba(128, 124, 126, 0.8)"
            icon={faCircleArrowRight}
          />
        </Icon>
        <ListSlider slideNumber={slideNumber}>
          {sliders.map((slider) => (
            <SliderItem key={slider.id}>
              <SliderImg src={slider.src} />
            </SliderItem>
          ))}
        </ListSlider>
      </WrapperSlider>
    </Container>
  );
};

export default Slider;
