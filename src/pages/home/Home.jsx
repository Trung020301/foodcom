import "./styled";
import GlobalStyles, { Container, Hr } from "../../styles/GlobalStyles.styled";
import { Topbar } from "../../components/layout/topbar/Topbar";
import Theme from "../../Theme";
import Slider from "../../components/slider/Slider";
import About from "../../components/aboutme/About";
const Home = () => {
  return (
    <Theme>
      <GlobalStyles />
        <Topbar />
        <Slider />
          <About />
    </Theme>
  );
};

export default Home;
