import { formatDate } from "@fullcalendar/core";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import { tokens } from "../../theme";

const eventList = ({ currentEvents }) => {
  // FILTERS
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      maxHeight={"75vh"}
      overflow={"auto"}
      flex="1 1 40%"
      backgroundColor={colors.primary[400]}
      p="15px"
      borderRadius="5px"
    >
      <Typography variant="h5">Events</Typography>
      <List>
        {currentEvents.map((event) => (
          // eslint-disable-next-line react/jsx-key
          <Link
            to={`/event/${event.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={event.id}
          >
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px",
              }}
            >
              <ListItemText
                sx={{ cursor: "pointer" }}
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default eventList;
