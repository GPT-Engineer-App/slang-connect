import { useState, useEffect } from "react";
import { Box, Text, Heading, Button, SimpleGrid, List, ListItem, Spinner } from "@chakra-ui/react";
import axios from "axios";

const AlphabeticalTerms = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(false);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    if (selectedLetter) {
      fetchTerms(selectedLetter);
    }
  }, [selectedLetter]);

  const fetchTerms = async (letter) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://slang.net/list/${letter.toLowerCase()}`);
      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, "text/html");
      const termElements = doc.querySelectorAll(".term");
      const fetchedTerms = Array.from(termElements).map(termElement => {
        const word = termElement.querySelector(".word").textContent;
        const definition = termElement.querySelector(".definition").textContent;
        return { word, definition };
      });
      setTerms(fetchedTerms);
    } catch (error) {
      console.error("Error fetching terms:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={4} bg="brand.900" color="brand.600">
      <Heading as="h2" size="xl" mb={4} color="brand.500">Browse Slang Alphabetically</Heading>
      <SimpleGrid columns={7} spacing={2} mb={4}>
        {alphabet.map((letter) => (
          <Button key={letter} onClick={() => setSelectedLetter(letter)} colorScheme="teal">
            {letter}
          </Button>
        ))}
      </SimpleGrid>
      {loading ? (
        <Spinner />
      ) : (
        <List spacing={3}>
          {terms.map((term, index) => (
            <ListItem key={index} p={4} borderWidth="1px" borderRadius="md" bg="brand.700" color="brand.600" boxShadow="lg" border="1px solid" borderColor="brand.800">
              <Text fontWeight="bold">{term.word}</Text>
              <Text>{term.definition}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default AlphabeticalTerms;