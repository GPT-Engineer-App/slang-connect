import { useState, useEffect } from "react";
import { Container, Text, VStack, Input, IconButton, Box, Heading, List, ListItem, Spinner, Badge, HStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Textarea, Image, Code, useClipboard } from "@chakra-ui/react";
import { FaSearch, FaMicrophone, FaTrophy, FaPlus, FaCopy } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';

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
  const { hasCopied, onCopy } = useClipboard('<iframe src="https://yourwebsite.com/embed" width="600" height="400"></iframe>');

  useEffect(() => {
    // Mock API call to fetch trending keywords
    setTrendingKeywords(["Lit", "Flex", "Bet", "Cap", "Slay", "Vibe", "Fam", "GOAT"]);
  }, []);

  useEffect(() => {
    // Initialize baguetteBox for the gallery
    baguetteBox.run('.gallery');
  }, [definitions]);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.urbandictionary.com/v0/define?term=${searchTerm}`);
      const definitionsWithImages = response.data.list.map(def => ({
        ...def,
        image_url: `https://source.unsplash.com/random/200x150?${def.word}`
      }));
      setDefinitions(definitionsWithImages);
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
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="brand.900">
      <VStack spacing={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading as="h1" size="2xl" color="brand.500">Slang Term App</Heading>
        <Text fontSize="xl" color="brand.500">Discover the latest trending slang terms</Text>
        <Box display="flex" alignItems="center" width="100%">
          <Input
            placeholder="Search for slang terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="brand.700"
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: "xl" }}
            as={motion.input}
            whileFocus={{ scale: 1.05 }}
            color="brand.600"
          />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} colorScheme="teal" as={motion.button} whileHover={{ scale: 1.1 }} />
          <IconButton aria-label="Voice Search" icon={<FaMicrophone />} colorScheme="teal" as={motion.button} whileHover={{ scale: 1.1 }} />
        </Box>
        {loading && <Spinner />}
        {error && <Text color="red.500">{error}</Text>}
        <HStack spacing={2} wrap="wrap" justify="center">
          {trendingKeywords.map((keyword, index) => (
            <Badge key={index} colorScheme="teal" p={2} borderRadius="md" as={motion.div} whileHover={{ scale: 1.1 }} onClick={() => handleKeywordClick(keyword)}>
              {keyword}
            </Badge>
          ))}
        </HStack>
        <Box width="100%" mt={4} p={4} bg="brand.600" color="brand.900" borderRadius="md" boxShadow="lg" maxHeight="300px" overflowY="auto">
          <List spacing={3} width="100%">
            {definitions.map((definition, index) => (
              <ListItem key={index} p={4} borderWidth="1px" borderRadius="md" width="100%" bg="brand.500" color="brand.900" boxShadow="lg" border="1px solid" borderColor="brand.800" as={motion.div} whileHover={{ scale: 1.02 }}>
                <Text fontWeight="bold">{definition.word}</Text>
                <Text>{definition.definition}</Text>
                <Text fontStyle="italic" color="gray.500">{definition.example}</Text>
                {definition.image_url && (
                  <Image src={definition.image_url} alt={definition.word} borderRadius="md" mt={2} />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box mt={4} width="100%">
          <Heading as="h3" size="lg" color="brand.500" mb={2}>Recent Searches</Heading>
          <HStack spacing={2} wrap="wrap" justify="center">
            {recentSearches.map((term, index) => (
              <Badge key={index} colorScheme="teal" p={2} borderRadius="md" as={motion.div} whileHover={{ scale: 1.1 }} onClick={() => handleKeywordClick(term)}>
                {term}
              </Badge>
            ))}
          </HStack>
        </Box>
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={() => setIsModalOpen(true)}>Submit New Word</Button>
        <Box mt={8} p={4} bg="brand.700" borderRadius="md" boxShadow="lg" width="100%">
          <Heading as="h3" size="lg" color="brand.500" mb={4}>Embed This Tool</Heading>
          <Code p={4} bg="brand.600" borderRadius="md" width="100%" whiteSpace="pre-wrap">
            &lt;iframe src="https://yourwebsite.com/embed" width="600" height="400"&gt;&lt;/iframe&gt;
          </Code>
          <Button leftIcon={<FaCopy />} colorScheme="teal" mt={2} onClick={onCopy}>
            {hasCopied ? "Copied" : "Copy Code"}
          </Button>
        </Box>
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
              <Button colorScheme="teal" mr={3} onClick={handleNewWordSubmit}>Submit</Button>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
};

export default Index;