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
      setTerms(response.data);
    } catch (error) {
      console.error("Error fetching terms:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={4} bg="black" color="white">
      <Heading as="h2" size="xl" mb={4} color="neon.cyan">Browse Slang Alphabetically</Heading>
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
            <ListItem key={index} p={4} borderWidth="1px" borderRadius="md" bg="gray.800" color="white" boxShadow="lg" border="1px solid" borderColor="gray.600">
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