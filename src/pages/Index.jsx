import { useState } from "react";
import { Container, Text, VStack, Input, IconButton, Box, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { FaSearch, FaMicrophone } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.urbandictionary.com/v0/define?term=${searchTerm}`);
      setDefinitions(response.data.list);
    } catch (err) {
      setError("Failed to fetch definitions. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Slang Term App</Heading>
        <Text fontSize="xl">Discover the latest trending slang terms</Text>
        <Box display="flex" alignItems="center" width="100%">
          <Input
            placeholder="Search for slang terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
          <IconButton aria-label="Voice Search" icon={<FaMicrophone />} />
        </Box>
      {loading && <Spinner />}
        {error && <Text color="red.500">{error}</Text>}
        <List spacing={3} width="100%">
          {definitions.map((definition, index) => (
            <ListItem key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Text fontWeight="bold">{definition.word}</Text>
              <Text>{definition.definition}</Text>
              <Text fontStyle="italic" color="gray.500">{definition.example}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;