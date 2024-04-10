import { useState } from "react";
import { EventData } from "../../data/EventsData";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useIsCollapsedContext } from "../../middleware/IsCollapsed";
import CalendarComponent from "./calendar";
import EventList from "./eventList";

const Calendar = () => {
  const { isCollapsed } = useIsCollapsedContext();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState(EventData);

  const handleDateClick = (selected) => {
    console.log(selected.start);
    // const title = prompt("Please enter a new title for your event");
    // const calendarApi = selected.view.calendar;
    // calendarApi.unselect();
    // if (title) {
    //   calendarApi.addEvent({
    //     id: `${selected.dateStr}-${title}`,
    //     title,
    //     start: selected.startStr,
    //     end: selected.endStr,
    //     allDay: selected.allDay,
    //   });
    // }
  };

  const handleEventClick = (selected) => {
    let id = selected.event._def.publicId;
    handleEventDetails(id);
  };

  const handleEventDetails = (id) => {
    window.location.href = `/event/${id}`;
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
