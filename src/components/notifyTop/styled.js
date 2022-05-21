import styled, {css} from "styled-components";


export const ContainerNotifyTop = styled.div`
  background-color: #f0ebeb;
  display: flex;
  justify-content: center;
`;

export const WrapperNotifyTop = styled.div`
  padding: 4px 10px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TextNotifyTop = styled.p`
    ${({theme}) => css`
        font-size: ${theme.fontSize.normal}
    `};
    font-style: italic;
    & > span{
        color: #1877F2;
    }
    & > strong{
      font-weight: normal;
      text-decoration: underline;
      cursor: pointer;
      &:hover{
        color: red;
      }
    }

`;
export const ListNotifyTop = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 20px;
`;
export const ItemNotifyTop = styled.li`
    cursor: pointer;
    transition: all ease .3s;
    &:hover{
        opacity: 0.7;
    }
`;
