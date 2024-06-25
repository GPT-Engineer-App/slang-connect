import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Terms from "./pages/Terms.jsx";
import { Box } from "@chakra-ui/react";
import GeneralSlang from "./pages/GeneralSlang.jsx";
import AlphabeticalTerms from "./pages/AlphabeticalTerms.jsx";

function App() {
  return (
    <Box bg="brand.900">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/alphabetical-terms" element={<AlphabeticalTerms />} />
        <Route exact path="/general-slang" element={<GeneralSlang />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;