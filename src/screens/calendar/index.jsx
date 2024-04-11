/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { EventData } from "../../data/EventsData";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useIsCollapsedContext } from "../../middleware/IsCollapsed";
import CalendarComponent from "./calendar";
import EventList from "./eventList";

const Calendar = ({ setSelected }) => {
  setSelected("Calendar");
  const navigate = useNavigate();
  const EventData = JSON.parse(localStorage.getItem("EventData")) || [];
  const { isCollapsed } = useIsCollapsedContext();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState(EventData);

  useEffect(() => {
    setCurrentEvents(EventData);
  }, []);

  const handleDateClick = (selected) => {
    let startDate = selected.startStr;
    let endDate = selected.endStr;

    navigate("/CreateEvent", { state: { startDate, endDate } });
  };

  const handleEventClick = (selected) => {
    let id = selected.event._def.publicId;
    handleEventDetails(id);
  };

  const handleEventDetails = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <Box m={"20px"} position={"relative"}>
      <Header
        title={"CALENDAR"}
        subtitle={"Change and add events to your Calendar"}
      ></Header>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        position={"absolute"}
        width={isCollapsed ? "90vw" : "100%"}
      >
        {/* Calendar Sidebar */}
        <EventList currentEvents={currentEvents} />

        {/* Calendar */}
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
          <CalendarComponent
            currentEvents={currentEvents}
            handleDateClick={handleDateClick}
            setCurrentEvents={setCurrentEvents}
            handleEventClick={handleEventClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
