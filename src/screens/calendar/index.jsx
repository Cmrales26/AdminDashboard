import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import listPlugin from "@fullcalendar/list";
import { EventData } from "../../data/EventsData";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useIsCollapsedContext } from "../../middleware/IsCollapsed";

const Calendar = () => {
  const { isCollapsed } = useIsCollapsedContext();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCalendarSelected, setIsCalendarSelected] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(EventData);
  const [eventSelected, setEventSelected] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    console.log(selected.event);
    // if (
    //   window.confirm(
    //     `Are you sure you want to remove this event ${selected.event.title}`
    //   )
    // ) {
    //   selected.event.remove();
    // }
  };

  const handleEventDetails = (id) => {
    setIsCalendarSelected(false);
    const selectedEvent = currentEvents.find((event) => event.id === id);
    const { _def, _instance } = selectedEvent;
    const EventData = {
      title: selectedEvent.title,
      start: selectedEvent.start,
      end: selectedEvent.end,
      allDay: selectedEvent.allDay,
      id: selectedEvent.id,
      _def: _def,
      _instance: _instance,
    };
    setEventSelected(EventData);
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
        width={isCollapsed ? "90vw" : "80vw"}
      >
        {/* Calendar Sidebar */}
        <Box
          height={"75vh"}
          overflow={"auto"}
          flex="1 1 40%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="5px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
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
                  onClick={() => handleEventDetails(event.id)}
                />
              </ListItem>
            ))}
          </List>
        </Box>

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
          {isCalendarSelected ? (
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              // dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={currentEvents}
              nowIndicator={true}
            />
          ) : (
            <Box
              backgroundColor={colors.primary[400]}
              p={"10px"}
              borderRadius={"5px"}
            >
              <Box
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <IconButton
                  type="button"
                  sx={{ p: 1 }}
                  title="Go back to Calendar"
                  onClick={() => setIsCalendarSelected(true)}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="h3" color={colors.greenAccent[400]}>
                  Event Details
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
