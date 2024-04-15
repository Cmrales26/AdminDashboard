/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useEffect } from "react";
import Header from "../../components/Header";
import Geo from "../../components/GeographyChart";
import { useIsCollapsedContext } from "../../middleware/IsCollapsed";

const GeographyChart = ({ setSelected }) => {
  const { isCollapsed } = useIsCollapsedContext();
  useEffect(() => {
    setSelected("Geography Chart");
  }, [setSelected]);
  return (
    <Box m={"20px"}>
      <Header title={"GEOGRAPHY CHART"} subtitle={"Sales for County"}></Header>
      <Box width={isCollapsed ? "100%" : "99%"} height={"72vh"} color={"black"}>
        <Geo></Geo>
      </Box>
    </Box>
  );
};

export default GeographyChart;
