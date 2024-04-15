/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useEffect } from "react";
import Header from "../../components/Header";
import Line from "../../components/LineChart";
import { useIsCollapsedContext } from "../../middleware/IsCollapsed";

const LineChart = ({ setSelected }) => {
  const { isCollapsed } = useIsCollapsedContext();
  useEffect(() => {
    setSelected("Line Chart");
  }, [setSelected]);
  return (
    <Box m={"20px"}>
      <Header title={"LINE CHART"} subtitle={"Sales Data"}></Header>
      <Box width={isCollapsed ? "100%" : "99%"} height={"72vh"} color={"black"}>
        <Line></Line>
      </Box>
    </Box>
  );
};

export default LineChart;
