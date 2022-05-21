import styled, {css} from "styled-components";
import { Button, Heading, Hr } from "../../styles/GlobalStyles.styled";

export const AboutHeading = styled(Heading)`

`;

export const HrAbout = styled(Hr)`
    ${({theme}) => css`
        border: 1px solid  ${theme.colors.heading};
    `};
    

`

export const ContainerAbout = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("assets/imgs/aboutme.jpg");
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
`;

export const WrapperAbout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.6);
  display: flex;
  justify-content: center;
`;
export const ContentAbout = styled.div`
  width: 100%;
  max-width: 1200px;
`;
export const TitleAbout = styled.h3``;
export const DescAbout = styled.span``;
export const ButtonAbout = styled(Button)``;
