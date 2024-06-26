import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Terms from "./pages/Terms.jsx";
import { Box, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import GeneralSlang from "./pages/GeneralSlang.jsx";
import AlphabeticalTerms from "./pages/AlphabeticalTerms.jsx";

function App() {
  return (
    <Box bg="brand.900">
      <Router>
        <Box position="sticky" top="0" zIndex="1000" bg="black" p={4} boxShadow="md">
          <Flex justify="space-between" align="center">
            <Navbar />
            <Box display="flex" alignItems="center">
              <Input
                placeholder="Search for slang terms..."
                bg="brand.700"
                borderRadius="md"
                boxShadow="lg"
                _hover={{ boxShadow: "xl" }}
                color="brand.600"
              />
              <IconButton aria-label="Search" icon={<FaSearch />} colorScheme="teal" />
            </Box>
          </Flex>
        </Box>
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