/* eslint-disable react-hooks/rules-of-hooks */
import { useIsCollapsedContext } from "../../../middleware/IsCollapsed";
import Header from "../../../components/Header";
// import { EventData } from "../../../data/EventsData";
import EventList from "../eventList";
import { useEffect, useState } from "react";
import { formatDate } from "@fullcalendar/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { tokens } from "../../../theme";

const events = () => {
  const EventData = JSON.parse(localStorage.getItem("EventData")) || [];
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useIsCollapsedContext();
  const [currentEvents, setCurrentEvents] = useState(EventData);
  const [eventSelected, setEventSelected] = useState([]);

  let { eventId } = useParams();

  useEffect(() => {
    const selectedEvent = EventData.find((event) => event.id === eventId);
    if (selectedEvent === undefined) {
      if (EventData[0] === undefined) {
        window.location.href = "/calendar";
        return;
      }
      window.location.href = `/event/${EventData[0].id}`;
    }
    setEventSelected(selectedEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, currentEvents]);

  const handleEventDelete = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to remove this event ${selected.title}`
      )
    ) {
      const newListEvent = currentEvents.filter((e) => e.id !== selected.id);
      localStorage.setItem("EventData", JSON.stringify(newListEvent));
      setCurrentEvents(newListEvent);
    }
  };
  return (
    <Box m={"20px"} position={"relative"}>
      <Header
        title={"MY EVENTS"}
        subtitle={"Change and add Remove events to your Calendar"}
      ></Header>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        position={"absolute"}
        width={isCollapsed ? "90vw" : "100%"}
      >
        {/* Calendar Sidebar */}
        <EventList currentEvents={currentEvents} />
        <Box
          flex="1 1 100%"
          ml="15px"
          sx={{
            "& .fc-list-day-cushion": {
              backgroundColor: colors.primary[400],
            },
            "& .fc-scrollgrid": {
              backgroundColor: colors.primary[400],
            },
            "& th": {
              backgroundColor: colors.blueAccent[600],
            },
            "& .fc-list-event:hover td": {
              backgroundColor: `${colors.blueAccent[600]} !important `,
            },
          }}
        >
          <Box
            backgroundColor={colors.primary[400]}
            p={"2rem"}
            borderRadius={"5px"}
          >
            <Box className="" display={"flex"} justifyContent={"space-between"}>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Link to={"/calendar"}>
                  <IconButton
                    type="button"
                    sx={{ p: 1 }}
                    title="Go back to Calendar"
                  >
                    <ArrowBackIcon />
                  </IconButton>
                </Link>
                <Typography variant="h3" color={colors.greenAccent[400]}>
                  Event Details
                </Typography>
              </Box>

              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Typography
                  width={"10px"}
                  height={"10px"}
                  backgroundColor={
                    eventSelected.status === "pending"
                      ? colors.redAccent[400]
                      : eventSelected.status === "completed"
                      ? colors.greenAccent[300]
                      : eventSelected.status === "in progress"
                      ? colors.blueAccent[300]
                      : colors.grey[400]
                  }
                  variant="h5"
                  borderRadius={"100%"}
                ></Typography>
                <Typography
                  variant="p"
                  color={
                    eventSelected.status === "pending"
                      ? colors.redAccent[400]
                      : eventSelected.status === "completed"
                      ? colors.greenAccent[300]
                      : eventSelected.status === "in progress"
                      ? colors.blueAccent[300]
                      : colors.grey[400]
                  }
                >
                  {eventSelected.status}
                </Typography>
              </Box>
            </Box>

            {/* EVENT DETAILS */}
            {/* Title */}
            <Box p={"1rem"}>
              <Typography variant="p" color={colors.blueAccent[400]}>
                Event
              </Typography>
              <Typography variant="h3" mt={"10px"}>
                {eventSelected.title}
              </Typography>
              {/* Date */}
              <Box mt={".5rem"}>
                <IconButton
                  style={{
                    color: `${colors.grey[300]}`,
                    padding: "0",
                    marginRight: "10px",
                  }}
                >
                  <AccessTimeIcon style={{ fontSize: 15 }} />
                </IconButton>
                <Typography variant="p" color={colors.grey[300]}>
                  {formatDate(eventSelected.start || eventSelected.date, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}{" "}
                  -
                  {formatDate(eventSelected.end || eventSelected.date, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </Typography>
              </Box>
            </Box>

            {/* Description */}
            <Box px={"1rem"} display={"flex"} flexDirection={"column"}>
              <Typography variant="p" color={colors.blueAccent[400]}>
                Event Description
              </Typography>
              <Typography variant="p" mt={"10px"}>
                {eventSelected.description
                  ? eventSelected.description
                  : "This event haven't a Description"}
              </Typography>
            </Box>

            {/* Delete */}
            <Box mt={"2rem"} display={"flex"} justifyContent={"end"}>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleEventDelete(eventSelected)}
              >
                Delete Event
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default events;
