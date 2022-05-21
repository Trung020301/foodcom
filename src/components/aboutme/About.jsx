import { Heading } from "../../styles/GlobalStyles.styled";
import "./styled";
import {
  ContainerAbout,
  ButtonAbout,
  ContentAbout,
  DescAbout,
  TitleAbout,
  WrapperAbout,
  HrAbout,
} from "./styled";
const About = () => {
  return (
    <>
      <Heading>
        Thương hiệu Foodcom
        <HrAbout />
      </Heading>
      <ContainerAbout>
        <WrapperAbout>
          <ContentAbout>
            <TitleAbout></TitleAbout>
            <DescAbout></DescAbout>
            <ButtonAbout>Xem thêm</ButtonAbout>
          </ContentAbout>
        </WrapperAbout>
      </ContainerAbout>
    </>
  );
};

export default About;
