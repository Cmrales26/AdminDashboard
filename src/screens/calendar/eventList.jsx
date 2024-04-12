/* eslint-disable react-hooks/rules-of-hooks */
import { formatDate } from "@fullcalendar/core";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { tokens } from "../../theme";
import { useState } from "react";

const eventList = ({ currentEvents }) => {
  // FILTERS
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filter, setFilter] = useState("all");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filterEvents =
    filter === "all"
      ? currentEvents
      : currentEvents.filter((event) => event.status === filter);

  return (
    <Box
      maxHeight={"75vh"}
      overflow={"auto"}
      flex="1 1 40%"
      backgroundColor={colors.primary[400]}
      p="20px"
      borderRadius="5px"
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Typography variant="h5">Events</Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Filter
            <FilterAltIcon />
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value={"all"}>all</MenuItem>
            <MenuItem value={"completed"}>completed</MenuItem>
            <MenuItem value={"in progress"}>in progress</MenuItem>
            <MenuItem value={"pending"}>pending</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <List>
        {filterEvents.map((event) => (
          // eslint-disable-next-line react/jsx-key
          <Link
            to={`/event/${event.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={event.id}
          >
            <ListItem
              key={event.id}
              sx={{
                backgroundColor:
                  event.status === "pending"
                    ? colors.redAccent[500]
                    : event.status === "completed"
                    ? colors.greenAccent[600]
                    : event.status === "in progress"
                    ? colors.blueAccent[500]
                    : colors.grey[400],
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
                    {"-"}
                    {formatDate(event.end, {
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
