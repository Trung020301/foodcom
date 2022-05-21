import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";
const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        scroll-behavior: smooth;
    }


`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  &.box-shadow {
    -webkit-box-shadow: 0px 9px 15px -4px rgba(0, 0, 0, 0.36);
    box-shadow: 0px 9px 15px -4px rgba(0, 0, 0, 0.36);
  }

  &.overflowh {
    overflow: hidden;
  }
`;

export const Input = styled.input`
  border: none;
  padding: 10px;
  outline: none;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.normal};
  `}
`;

export const Hr = styled.hr`
  border: 1px solid #000;
  opacity: 0.8;
  width: 100%;
`;
export const Heading = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.big};
    color: ${theme.colors.heading};
  `};
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  margin: auto; 
`;

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.button};
    background-color: ${theme.bg.button};
  `};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    background-color: #adcdff;
    color: #000;
  }
`;

export const Title = styled.title`
  font-size: 32px;
  color: #000;
  font-weight: 500;
`;


export default GlobalStyles;
