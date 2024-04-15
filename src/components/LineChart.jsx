/* eslint-disable react/prop-types */
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { mockLineData as data } from "../data/mockData";
import { tokens } from "../theme";
const Line = ({ isDashboard = false }) => {
  const theme = useTheme();
  const Colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: Colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: Colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: Colors.grey[100],
              strokeWidth: 2,
            },
            text: {
              fill: Colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: Colors.grey[100],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { datum: "color" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "0",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      curve="catmullRom"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Mouth",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -55,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      defs={[]}
      fill={[]}
      role=""
      crosshairType="bottom-left"
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 30,
          itemOpacity: 0.75,
          symbolSize: 20,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
    />
  );
};

export default Line;
