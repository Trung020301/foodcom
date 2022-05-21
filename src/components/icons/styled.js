import styled, { keyframes } from "styled-components";

// Keyframes
export const appear = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const rotate = keyframes`
    0% { transform: rotate(0);}
    50% { transform: rotate(-45deg)}
    100% {transform: rotate(0)}
    `;

export const scale = keyframes`
    0% { transform: scale(0.5); opacity: 0;}
    50% { transform: scale(1); opacity: 1;}
    100%{transform: scale(1.3); opacity: 0;}
    `;

// Icon Animaiton
export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.3s;
  position: fixed;
  right: 27px;
`;

export const IconToTop = styled(Icon)`
  bottom: 200px;
  animation: ${appear} ease 1s;
  display: ${(props) => (props.show ? "flex" : "none")};
  z-index: 100;
  &:hover {
    background-color: #ff7503;
  }
`;

export const IconCall = styled(Icon)`
  bottom: 120px;
  z-index: 9;
  animation: ${rotate} linear 0.6s infinite;
  &:hover {
    background-color: #0f5c0c;
  }
  &::before {
    content: "";
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    border: 2px solid ${(props) => props.bg};
    position: absolute;
    border-radius: 50%;
    animation: ${scale} linear 1.5s infinite;
  }

  &::after {
    content: "";
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    border: 2px solid ${(props) => props.bg};
    position: absolute;
    border-radius: 50%;
    animation: ${scale} linear 1.5s infinite;
    animation-delay: 0.5s;
  }
`;
