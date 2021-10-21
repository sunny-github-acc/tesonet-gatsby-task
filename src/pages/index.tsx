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
        <Title>weather</Title>
        <Container>
          <MainInfo />
          <SideInfo />
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default IndexPage;

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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Nunito, Arial, sans-serif;
    background: #D8DCE2;  
    max-width: 1679px; 
    display: flex;  
    flex-direction: column; 
    align-content: center;
    justify-content: center;
    margin: 0;
    padding: 0; 
    
    @media (max-width: 376px) {
      display: block;
    }
  }  
`;

const Title = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: bold;
  font-size: 35px;
  padding: 27px 40px;

  @media (max-width: 376px) {
    padding: 0 24px;
    padding-top: 27px;
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    margin-bottom: -1px;
  }
`;

const Container = styled.main`
  display: flex;
  padding: 27px 40px;
  background: ${({ theme: { colors } }) => colors.bgMain};
  overflow-x: scroll;

  @media (max-width: 376px) {
    display: unset;
    padding: 0;
  }
`;
