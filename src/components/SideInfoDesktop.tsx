import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StaticImage } from "gatsby-plugin-image";
import { Avatar, CardHeader } from "@mui/material";
import styled from "styled-components";

interface Cell {
  image: string;
  temperature: number;
  windDirection: number;
  windSpeed: number;
}

interface Data {
  day: string;
  six: Cell;
  ten: Cell;
  fourteen: Cell;
  eighteen: Cell;
  twentytwo: Cell;
  two: Cell;
}

function createData({
  day,
  six,
  ten,
  fourteen,
  eighteen,
  twentytwo,
  two,
}: Data) {
  return { day, six, ten, fourteen, eighteen, twentytwo, two };
}

const rows = [
  createData({
    day: "Today",
    six: {
      image: "../images/scattered-clouds.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    ten: {
      image: "../images/scattered-clouds.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    fourteen: {
      image: "../images/scattered-clouds.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    eighteen: {
      image: "../images/scattered-clouds.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    twentytwo: {
      image: "../images/scattered-clouds.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    two: {
      image: "../images/scattered-clouds.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
  }),
  createData({
    day: "Tuesday",
    six: {
      image: "../images/clear.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    ten: {
      image: "../images/clear.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    fourteen: {
      image: "../images/clear.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    eighteen: {
      image: "../images/clear.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    twentytwo: {
      image: "../images/clear.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
    two: {
      image: "../images/clear.png",
      temperature: 5,
      windDirection: 1,
      windSpeed: 5,
    },
  }),
];

export default function SideInfoDesktop() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">
              <Time>06:00</Time>
            </TableCell>
            <TableCell align="center">
              <Time>10:00</Time>
            </TableCell>
            <TableCell align="center">
              <Time>14:00</Time>
            </TableCell>
            <TableCell align="center">
              <Time>18:00</Time>
            </TableCell>
            <TableCell align="center">
              <Time>22:00</Time>
            </TableCell>
            <TableCell align="center">
              <Time>02:00</Time>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.day}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Day>{row.day}</Day>
              </TableCell>

              <TableCell align="right">
                <CellContainer>
                  <Now>Now</Now>
                  <StaticImage
                    src={"../images/clear.png"}
                    width={38}
                    objectFit="contain"
                    alt="clear"
                  />
                  <Temperature>3°</Temperature>
                  <WindSpeed>
                    <StaticImage
                      src="../images/wind-direction.png"
                      height={17.18}
                      objectFit="contain"
                      alt="wind direction"
                    />
                    &nbsp;8ms
                  </WindSpeed>
                </CellContainer>
              </TableCell>

              <TableCell align="right">
                <CellContainer>
                  <Now></Now>
                  <StaticImage
                    src="../images/clear.png"
                    width={38}
                    objectFit="contain"
                    alt="clear"
                  />
                  <Temperature>3°</Temperature>
                  <WindSpeed>
                    <StaticImage
                      src="../images/wind-direction.png"
                      height={17.18}
                      objectFit="contain"
                      alt="wind direction"
                    />
                    &nbsp;8ms
                  </WindSpeed>
                </CellContainer>
              </TableCell>

              <TableCell align="right">
                <CellContainer>
                  <Now></Now>
                  <StaticImage
                    src="../images/clear.png"
                    width={38}
                    objectFit="contain"
                    alt="clear"
                  />
                  <Temperature>3°</Temperature>
                  <WindSpeed>
                    <StaticImage
                      src="../images/wind-direction.png"
                      height={17.18}
                      objectFit="contain"
                      alt="wind direction"
                    />
                    &nbsp;8ms
                  </WindSpeed>
                </CellContainer>
              </TableCell>

              <TableCell align="right">
                <CellContainer>
                  <Now></Now>
                  <StaticImage
                    src="../images/clear.png"
                    width={38}
                    objectFit="contain"
                    alt="clear"
                  />
                  <Temperature>3°</Temperature>
                  <WindSpeed>
                    <StaticImage
                      src="../images/wind-direction.png"
                      height={17.18}
                      objectFit="contain"
                      alt="wind direction"
                    />
                    &nbsp;8ms
                  </WindSpeed>
                </CellContainer>
              </TableCell>

              <TableCell align="right">
                <CellContainer>
                  <Now></Now>
                  <StaticImage
                    src="../images/clear.png"
                    width={38}
                    objectFit="contain"
                    alt="clear"
                  />
                  <Temperature>3°</Temperature>
                  <WindSpeed>
                    <StaticImage
                      src="../images/wind-direction.png"
                      height={17.18}
                      objectFit="contain"
                      alt="wind direction"
                    />
                    &nbsp;8ms
                  </WindSpeed>
                </CellContainer>
              </TableCell>

              <TableCell align="right">
                <CellContainer>
                  <Now></Now>
                  <StaticImage
                    src="../images/clear.png"
                    width={38}
                    objectFit="contain"
                    alt="clear"
                  />
                  <Temperature>3°</Temperature>
                  <WindSpeed>
                    <StaticImage
                      src="../images/wind-direction.png"
                      height={17.18}
                      objectFit="contain"
                      alt="wind direction"
                    />
                    &nbsp;8ms
                  </WindSpeed>
                </CellContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Day = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: ${({ theme: { colors } }) => colors.darkGrey};
`;

const Time = styled(Day)``;

const Now = styled.div`
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 12px;
  min-height: 16.67px;
  margin-bottom: 10px;
`;

const CellContainer = styled.div`
  text-align: center;
  padding: 0 15px;
  padding-bottom: 25px;
  border-bottom: 10px solid ${({ theme: { colors } }) => colors.primary}; ;
`;

const Temperature = styled.div`
  font-size: 25px;
  color: ${({ theme: { colors } }) => colors.lightestGrey};
  text-align: center;
  padding: 15px 0;
  padding-bottom: 20px;
`;

const WindSpeed = styled.div`
  display: flex;
  font-size: 15px;
  color: ${({ theme: { colors } }) => colors.lightestGrey};
  text-align: center;
`;
