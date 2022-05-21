import styled, { keyframes } from "styled-components";

export const appear = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Icon = styled.div`
  width: 50px;
  height: 100px;
  background-color: rgba(218, 246, 219, 0.4);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 50px);
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transition: all ease-in-out 0.4s;
  animation: ${appear} 1s ease-in;
  display: none;
  z-index: 2;
  &:hover {
    background-color: rgba(166, 208, 233, 0.6);
  }
  & > .icon {
    transition: all ease-in-out 0.4s;
    color: rgba(113, 236, 116, 0.8);
    &:hover {
      color: rgba(57, 228, 63, 0.8);
    }
  }
`;

export const WrapperSlider = styled.div`
  max-height: 600px;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 40px 0;
  position: relative;
  overflow: hidden;
  &:hover ${Icon} {
    display: flex;
  }
`;

export const ListSlider = styled.div`
  display: flex;
  width: 500%;
  transition: all ease-in-out 1.5s;
  transform: translateX(${props => props.slideNumber * -20}%);
  z-index: 2;
`;
export const SliderItem = styled.div`
  width: 100%;
  transition: all ease-in .4s;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
`;
export const SliderImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
