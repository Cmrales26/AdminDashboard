/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { useIsCollapsedContext } from "../../middleware/IsCollapsed";
import { useEffect } from "react";
const BarChar = ({ setSelected }) => {
  useEffect(() => {
    setSelected("Bar Chart");
  }, [setSelected]);
  const { isCollapsed } = useIsCollapsedContext();
  return (
    <Box m={"20px"} position={"relative"}>
      <Header title={"BAR CHART"} subtitle={"Sales Data"}></Header>
      <Box width={isCollapsed ? "100%" : "99%"} height={"75vh"} color={"black"}>
        <BarChart></BarChart>
      </Box>
    </Box>
  );
};

export default BarChar;
