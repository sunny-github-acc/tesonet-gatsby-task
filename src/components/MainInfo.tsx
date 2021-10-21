import SearchIcon from "@mui/icons-material/Search";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const MainInfo = () => {
  return (
    <Container>
      <Title>weather</Title>

      <SearchContainer>
        <Search placeholder="Vilnius" />
        <SearchIconContainer>
          <SearchIconWidth />
        </SearchIconContainer>
      </SearchContainer>

      <WeatherTemperature>
        <StaticImage
          src="../images/clear-mono.png"
          height={85.26}
          objectFit="contain"
          alt="clear"
        />
        <Temperature>5°</Temperature>
      </WeatherTemperature>

      <WeatherCondition>now it's moderate-rain</WeatherCondition>

      <WeatherExtra>
        <WeatherExtraColumn>
          <WeatherExtraItem>
            <WeatherExtraImageContainer>
              <StaticImage
                src="../images/wind-speed.png"
                height={17.18}
                objectFit="contain"
                alt="wind speed"
              />
            </WeatherExtraImageContainer>
            <WeatherExtraItemText>Wind speed: 6ms</WeatherExtraItemText>
          </WeatherExtraItem>

          <WeatherExtraItem>
            <WeatherExtraImageContainer>
              <StaticImage
                src="../images/wind-gust.png"
                alt="wind gust"
                height={17.18}
                objectFit="contain"
              />
            </WeatherExtraImageContainer>
            <WeatherExtraItemText>Wind gust: 6ms</WeatherExtraItemText>
          </WeatherExtraItem>

          <WeatherExtraItem>
            <Rotated>
              <WeatherExtraImageContainer>
                <StaticImage
                  src="../images/wind-direction-mono.png"
                  height={17.18}
                  objectFit="contain"
                  alt="wind direction"
                />
              </WeatherExtraImageContainer>
            </Rotated>
            <WeatherExtraItemText>Wind direction: 6ms</WeatherExtraItemText>
          </WeatherExtraItem>
        </WeatherExtraColumn>

        <WeatherExtraColumn>
          <WeatherExtraItem>
            <WeatherExtraImageContainer>
              <StaticImage
                src="../images/cloud-cover.png"
                height={17.18}
                objectFit="contain"
                alt="cloud cover"
              />
            </WeatherExtraImageContainer>
            <WeatherExtraItemText>Cloud cover: 6ms</WeatherExtraItemText>
          </WeatherExtraItem>

          <WeatherExtraItem>
            <WeatherExtraImageContainer>
              <StaticImage
                src="../images/sea-level-pressure.png"
                height={17.18}
                objectFit="contain"
                alt="sea level pressure"
              />
            </WeatherExtraImageContainer>
            <WeatherExtraItemText>Sea level pressure: 6ms</WeatherExtraItemText>
          </WeatherExtraItem>

          <WeatherExtraItem>
            <WeatherExtraImageContainer>
              <StaticImage
                src="../images/total-precipitation.png"
                height={17.18}
                objectFit="contain"
                alt="total precipitation"
              />
            </WeatherExtraImageContainer>
            <WeatherExtraItemText>
              Total precipitation: 6ms
            </WeatherExtraItemText>
          </WeatherExtraItem>
        </WeatherExtraColumn>
      </WeatherExtra>
    </Container>
  );
};

export default MainInfo;

const Container = styled.main`
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding: 0 24px;
  color: ${({ theme: { colors } }) => colors.white};
`;

const Title = styled.div`
  padding-top: 27px;
  font-weight: bold;
  font-size: 35px;
  font-family: ${({ theme: { fonts } }) => fonts.nunito};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  width: 100%;
  padding-top: 27px;
`;

const Search = styled.input`
  background-color: ${({ theme: { colors } }) => colors.white};
  border: unset;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  margin-right: -29.45px;
  padding: 13px;
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 0;
  height: 100%;
  margin-right: 29.45px;
`;

const SearchIconWidth = styled(SearchIcon)`
  width: 21.45px !important;
  color: ${({ theme: { colors } }) => colors.primary};
  &:hover {
    cursor: pointer;
  }
`;

const WeatherTemperature = styled.div`
  padding-top: 37px;
  display: flex;
  font-weight: bold;
  font-size: 69px;
`;

const Temperature = styled.div`
  padding: 0 15px;
`;

const WeatherCondition = styled.div`
  padding-top: 27px;
  font-size: 25px;
  font-weight: bold;
  text-transform: capitalize;
`;

const WeatherExtra = styled.div`
  padding: 37px 0;
  display: flex;
`;

const WeatherExtraColumn = styled.div`
  margin-right: 30px;
`;

const WeatherExtraItem = styled.div`
  display: flex;
  padding: 10px 0;
`;

const WeatherExtraImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
`;

const WeatherExtraItemText = styled.div`
  padding-left: 5px;
  font-size: 13px;
`;

const Rotated = styled.div`
  transform: matrix(0.93, -0.36, 0.36, 0.93, 0, 0);
`;
