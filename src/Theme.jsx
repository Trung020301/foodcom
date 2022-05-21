import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ddd",
    heading: "#f73d05",
  },
  fontSize: {
    small: "12px",
    normal: "14px",
    large: "16px",
    big: "24px",
    button: "18px",
  },
  bg: {
    button: "#1e73fc",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
