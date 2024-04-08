import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./screens/global/Topbar";
import { Routes, Route } from "react-router-dom";
import SideBar from "./screens/global/Sidebar";
import Dashboard from "./screens/dashboard/index";
import Team from "./screens/team/index";
import Invoices from "./screens/invoices/index";
import Contacts from "./screens/contacts/index";
// import Bar from "./screens/Bar";
// import Form from "./screens/Form";
// import Line from "./screens/Line";
// import Pie from "./screens/Pie";
// import FAQ from "./screens/faq";
// import Geography from "./screens/geography";
// import Calendar from "./screens/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
