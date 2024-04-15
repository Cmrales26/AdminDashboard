/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useIsCollapsedContext } from "../../middleware/IsCollapsed";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Pie from "../../components/PieChart";

const PieChart = ({ setSelected }) => {
  useEffect(() => {
    setSelected("Pie Chart");
  }, [setSelected]);
  const { isCollapsed } = useIsCollapsedContext();
  return (
    <Box m={"20px"} position={"relative"}>
      <Header
        title={"PIE CHART"}
        subtitle={"Where our Clients come from"}
      ></Header>
      <Box width={isCollapsed ? "100%" : "99%"} height={"72vh"} color={"black"}>
        <Pie></Pie>
      </Box>
    </Box>
  );
};

export default PieChart;
