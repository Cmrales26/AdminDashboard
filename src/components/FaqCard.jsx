/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const FaqCard = ({ FAQinfo }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      {FAQinfo.map((faq) => (
        <Accordion
          key={faq.id}
          sx={{ backgroundColor: colors.primary[500] }}
          defaultExpanded
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${faq.id}-content`}
            id={`panel${faq.id}-header`}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "500" }}
              color={colors.greenAccent[300]}
            >
              {faq.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{faq.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FaqCard;
