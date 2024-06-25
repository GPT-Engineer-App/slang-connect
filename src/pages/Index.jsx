import { useState, useEffect } from "react";
import { Container, Text, VStack, Input, IconButton, Box, Heading, List, ListItem, Spinner, Badge, HStack, Image } from "@chakra-ui/react";
import backgroundImage from "../public/images/background.jpg";
import { FaSearch, FaMicrophone, FaTrophy } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trendingKeywords, setTrendingKeywords] = useState([]);

  useEffect(() => {
    // Mock API call to fetch trending keywords
    setTrendingKeywords(["YOLO", "FOMO", "Lit", "Bae"]);
  }, []);

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
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage={`url(${backgroundImage})`} bgSize="cover" bgPosition="center">
      <VStack spacing={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading as="h1" size="2xl" color="white">Slang Term App</Heading>
        <Text fontSize="xl" color="white">Discover the latest trending slang terms</Text>
        <Box display="flex" alignItems="center" width="100%">
          <Input
            placeholder="Search for slang terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: "xl" }}
            as={motion.input}
            whileFocus={{ scale: 1.05 }}
          />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} colorScheme="teal" as={motion.button} whileHover={{ scale: 1.1 }} />
          <IconButton aria-label="Voice Search" icon={<FaMicrophone />} colorScheme="teal" as={motion.button} whileHover={{ scale: 1.1 }} />
        </Box>
        {loading && <Spinner />}
        {error && <Text color="red.500">{error}</Text>}
        <HStack spacing={2} wrap="wrap" justify="center">
          {trendingKeywords.map((keyword, index) => (
            <Badge key={index} colorScheme="teal" p={2} borderRadius="md" as={motion.div} whileHover={{ scale: 1.1 }}>
              {keyword}
            </Badge>
          ))}
        </HStack>
        <List spacing={3} width="100%">
          {definitions.map((definition, index) => (
            <ListItem key={index} p={4} borderWidth="1px" borderRadius="md" width="100%" bg="white" boxShadow="md" as={motion.div} whileHover={{ scale: 1.02 }}>
              <Text fontWeight="bold">{definition.word}</Text>
              <Text>{definition.definition}</Text>
              <Text fontStyle="italic" color="gray.500">{definition.example}</Text>
            </ListItem>
          ))}
        </List>
        <HStack spacing={4} mt={4}>
          <FaTrophy size="24px" color="gold" />
          <Text color="white">Earn badges for discovering new slang terms!</Text>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;