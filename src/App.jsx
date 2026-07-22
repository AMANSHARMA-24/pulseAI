import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FirstAid from "./pages/FirstAid";
import PdfAssistant from "./pages/PdfAssistant";
import EmergencyContacts from "./pages/EmergencyContacts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/first-aid" element={<FirstAid />} />

      <Route path="/pdf-assistant" element={<PdfAssistant />} />

      <Route
        path="/emergency-contacts"
        element={<EmergencyContacts />}
      />

      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;