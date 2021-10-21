import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Helmet from "../components/Helmet";
import { ThemeProvider } from "styled-components";
import MainInfo from "../components/MainInfo";
import SideInfo from "../components/SideInfo";

const IndexPage = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Helmet />
      <ThemeProvider theme={theme}>
        {/* <MainInfo /> */}
        <SideInfo />
      </ThemeProvider>
    </Fragment>
  );
};

export default IndexPage;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:Nunito, Arial, sans-serif
  } 
  
  @media (max-width: 376px) {}
`;

const theme = {
  colors: {
    bgBody: "#D8DCE2",
    bgMain: "#F5F6FA",
    primary: "#5FA6F1",
    border: "#E8E8E8",
    white: "#FFFFFF",
    darkerGrey: "#5A5A5A",
    grey: "#707070",
    lightGrey: "#797979",
    lightestGrey: "#959595",
    black: "#000000",
  },
  fonts: {
    nunito: "Nunito, Arial, sans-serif",
    futura: "Futura, Arial, sans-serif",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  borderRadius: "13px",
};
