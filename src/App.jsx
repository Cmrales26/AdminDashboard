import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./screens/global/Topbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SideBar from "./screens/global/Sidebar";
import Dashboard from "./screens/dashboard/index";
import Team from "./screens/team/index";
import Invoices from "./screens/invoices/index";
import Contacts from "./screens/contacts/index";
import { IsCollapsedProvider } from "./middleware/IsCollapsed";
import Form from "./screens/profileForm/index";
import Calendar from "./screens/calendar/index";
import Event from "./screens/calendar/CalendarEvents/events";
import CreateEvent from "./screens/calendar/CalendarEvents/CreateEvent";
import FAQ from "./screens/FAQ/index";
// import Bar from "./screens/Bar";
// import Line from "./screens/Line";
// import Pie from "./screens/Pie";
// import Geography from "./screens/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [selected, setSelected] = useState("Dashboard");
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <IsCollapsedProvider>
          <CssBaseline />
          <div className="app">
            <SideBar selected={selected} setSelected={setSelected} />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/team"
                  element={<Team setSelected={setSelected} />}
                />
                <Route
                  path="/contacts"
                  element={<Contacts setSelected={setSelected} />}
                />
                <Route
                  path="/invoices"
                  element={<Invoices setSelected={setSelected} />}
                />
                <Route
                  path="/form"
                  element={<Form setSelected={setSelected} />}
                />
                <Route
                  path="/calendar"
                  element={<Calendar setSelected={setSelected} />}
                />
                <Route path="/CreateEvent" element={<CreateEvent />} />
                <Route path="/event/:eventId" element={<Event />} />
                <Route
                  path="/faq"
                  element={<FAQ setSelected={setSelected} />}
                />
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </div>
        </IsCollapsedProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
