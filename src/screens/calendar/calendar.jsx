/* eslint-disable react/prop-types */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const CalendarComponent = ({
  handleDateClick,
  handleEventClick,
  currentEvents,
  setCurrentEvents,
}) => {
  return (
    <FullCalendar
      height="75vh"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
      }}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      select={handleDateClick}
      eventClick={handleEventClick}
      eventsSet={(events) => setCurrentEvents(events)}
      initialEvents={currentEvents}
      nowIndicator={true}
    />
  );
};

export default CalendarComponent;
