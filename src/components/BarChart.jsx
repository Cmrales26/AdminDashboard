/* eslint-disable react/prop-types */
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const labels = Object.keys(data[0]);
  const keys = labels.slice(1);
  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 2,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={keys}
      indexBy={labels[0]}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      // Si quiero que esté Agrupado o no (Nodificar con configuradores)
      groupMode={null}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "set2" }}
      axisBottom={{
        tickSize: 6,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : labels[0],
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      // Or false by configuration
      enableLabel={false}
      enableGridY={true}
      legends={
        isDashboard
          ? undefined
          : [
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 35,
                itemDirection: "left-to-right",
                symbolSize: 30,
              },
            ]
      }
      role="application"
    />
  );
};

export default BarChart;
