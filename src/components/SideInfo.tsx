import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import SideInfoDesktop from "./SideInfoDesktop";

export default function SideInfo() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Mobile>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          disablePadding={true}
        >
          <ListItemContainer>
            <Time>18:00</Time>
            <ListItemIcon>
              <StaticImage
                src="../images/scattered-clouds.png"
                width={38}
                objectFit="contain"
                alt="scattered clouds"
              />
            </ListItemIcon>
            <Temperature>3°</Temperature>
            <Wind>
              <WindImage>
                <StaticImage
                  src="../images/wind-direction.png"
                  height={16.2}
                  objectFit="contain"
                  alt="scattered clouds"
                />
              </WindImage>
              <WindSpeed>8ms</WindSpeed>
            </Wind>
          </ListItemContainer>

          <ListItemContainer>
            <Time>18:00</Time>
            <ListItemIcon>
              <StaticImage
                src="../images/scattered-clouds.png"
                width={38}
                objectFit="contain"
                alt="scattered clouds"
              />
            </ListItemIcon>
            <Temperature>3°</Temperature>
            <Wind>
              <WindImage>
                <StaticImage
                  src="../images/wind-direction.png"
                  height={16.2}
                  objectFit="contain"
                  alt="scattered clouds"
                />
              </WindImage>
              <WindSpeed>8ms</WindSpeed>
            </Wind>
          </ListItemContainer>

          <WeekdayButton onClick={handleClick}>
            <Weekday>Tuesday</Weekday>
            {open ? <ExpandLess /> : <ExpandMore />}
          </WeekdayButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemContainer>
                <Time>18:00</Time>
                <ListItemIcon>
                  <StaticImage
                    src="../images/scattered-clouds.png"
                    width={38}
                    objectFit="contain"
                    alt="scattered clouds"
                  />
                </ListItemIcon>
                <Temperature>3°</Temperature>
                <Wind>
                  <WindImage>
                    <StaticImage
                      src="../images/wind-direction.png"
                      height={16.2}
                      objectFit="contain"
                      alt="scattered clouds"
                    />
                  </WindImage>
                  <WindSpeed>8ms</WindSpeed>
                </Wind>
              </ListItemContainer>

              <ListItemContainer>
                <Time>18:00</Time>
                <ListItemIcon>
                  <StaticImage
                    src="../images/scattered-clouds.png"
                    width={38}
                    objectFit="contain"
                    alt="scattered clouds"
                  />
                </ListItemIcon>
                <Temperature>3°</Temperature>
                <Wind>
                  <WindImage>
                    <StaticImage
                      src="../images/wind-direction.png"
                      height={16.2}
                      objectFit="contain"
                      alt="scattered clouds"
                    />
                  </WindImage>
                  <WindSpeed>8ms</WindSpeed>
                </Wind>
              </ListItemContainer>
            </List>
          </Collapse>
        </List>
      </Mobile>

      <Desktop>
        <SideInfoDesktop />
      </Desktop>
    </>
  );
}

const Mobile = styled.main`
  background-color: ${({ theme: { colors } }) => colors.white};
  font-weight: bold;
  display: none;

  @media (max-width: 376px) {
    display: block;
  }
`;

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 24px;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  margin-bottom: -1px;
`;

const Time = styled.div`
  font-size: 15px;
  color: ${({ theme: { colors } }) => colors.darkGrey};
`;

const Temperature = styled.div`
  font-size: 25px;
  color: ${({ theme: { colors } }) => colors.lightestGrey};
`;

const Wind = styled.div`
  display: flex;
`;

const WindImage = styled.div`
  transform: matrix(0.99, -0.1, 0.1, 0.99, 0, 0);
  margin-right: 5px;
`;

const WindSpeed = styled.div`
  font-size: 15px;
  color: ${({ theme: { colors } }) => colors.lightestGrey};
`;

const WeekdayButton = styled(ListItemButton)`
  background: ${({ theme: { colors } }) => colors.bgMain} 0% 0% no-repeat
    padding-box !important;
  padding: 30px 24px !important;
  display: flex !important;
  justify-content: space-between !important;
`;

const Weekday = styled.div`
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.darkGrey};
`;

const Desktop = styled.main`
  background-color: ${({ theme: { colors } }) => colors.white};
  font-weight: bold;
  display: block;
  margin: 0 30px;

  @media (max-width: 376px) {
    display: none;
  }
`;
