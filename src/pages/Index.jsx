import { useState, useEffect } from "react";
import { Container, Text, VStack, Input, IconButton, Box, Heading, List, ListItem, Spinner, Badge, HStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import backgroundImage from "../../public/images/background.jpg"; // Updated background image import
import { FaSearch, FaMicrophone, FaTrophy, FaPlus } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trendingKeywords, setTrendingKeywords] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWord, setNewWord] = useState("");
  const [newDefinition, setNewDefinition] = useState("");

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
      setRecentSearches((prevSearches) => [searchTerm, ...prevSearches.slice(0, 4)]);
    } catch (err) {
      setError("Failed to fetch definitions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeywordClick = (keyword) => {
    setSearchTerm(keyword);
    handleSearch();
  };

  const handleNewWordSubmit = () => {
    // Logic to submit new word
    console.log("New word submitted:", newWord, newDefinition);
    setIsModalOpen(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage={`url(${backgroundImage})`} bgSize="cover" bgPosition="center">
      <VStack spacing={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading as="h1" size="2xl" color="brand.600">Slang Term App</Heading>
        <Text fontSize="xl" color="brand.600">Discover the latest trending slang terms</Text>
        <Box display="flex" alignItems="center" width="100%">
          <Input
            placeholder="Search for slang terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="brand.600"
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: "xl" }}
            as={motion.input}
            whileFocus={{ scale: 1.05 }}
            color="black"
          />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} colorScheme="dynamic.primary" as={motion.button} whileHover={{ scale: 1.1 }} />
          <IconButton aria-label="Voice Search" icon={<FaMicrophone />} colorScheme="dynamic.primary" as={motion.button} whileHover={{ scale: 1.1 }} />
        </Box>
        {loading && <Spinner />}
        {error && <Text color="red.500">{error}</Text>}
        <HStack spacing={2} wrap="wrap" justify="center">
          {trendingKeywords.map((keyword, index) => (
            <Badge key={index} colorScheme="dynamic.primary" p={2} borderRadius="md" as={motion.div} whileHover={{ scale: 1.1 }} onClick={() => handleKeywordClick(keyword)}>
              {keyword}
            </Badge>
          ))}
        </HStack>
        <Box width="100%" mt={4} p={4} bg="black" color="white" borderRadius="md" boxShadow="lg" maxHeight="300px" overflowY="auto">
          <List spacing={3} width="100%">
            {definitions.map((definition, index) => (
              <ListItem key={index} p={4} borderWidth="1px" borderRadius="md" width="100%" bg="black" color="white" boxShadow="lg" border="1px solid" borderColor="gray.200" as={motion.div} whileHover={{ scale: 1.02 }}>
                <Text fontWeight="bold">{definition.word}</Text>
                <Text>{definition.definition}</Text>
                <Text fontStyle="italic" color="gray.500">{definition.example}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box mt={4} width="100%">
          <Heading as="h3" size="lg" color="brand.600" mb={2}>Recent Searches</Heading>
          <HStack spacing={2} wrap="wrap" justify="center">
            {recentSearches.map((term, index) => (
              <Badge key={index} colorScheme="dynamic.primary" p={2} borderRadius="md" as={motion.div} whileHover={{ scale: 1.1 }} onClick={() => handleKeywordClick(term)}>
                {term}
              </Badge>
            ))}
          </HStack>
        </Box>
        <Button leftIcon={<FaPlus />} colorScheme="dynamic.primary" onClick={() => setIsModalOpen(true)}>Submit New Word</Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Submit New Word</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Word</FormLabel>
                <Input value={newWord} onChange={(e) => setNewWord(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Definition</FormLabel>
                <Textarea value={newDefinition} onChange={(e) => setNewDefinition(e.target.value)} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleNewWordSubmit}>Submit</Button>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
};

export default Index;