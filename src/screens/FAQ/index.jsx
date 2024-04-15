/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useEffect } from "react";
import FaqCard from "../../components/FaqCard";
import { FAQ } from "../../data/FAQData";
const faq = ({ setSelected }) => {
  useEffect(() => {
    setSelected("FAQ Page");
  }, [setSelected]);

  return (
    <Box m={"20px"} position={"Relative"}>
      <Header title={"FAQ"} subtitle={"frequently asked questions"}></Header>
      <Box>
        <FaqCard FAQinfo={FAQ}></FaqCard>
      </Box>
    </Box>
  );
};

export default faq;
