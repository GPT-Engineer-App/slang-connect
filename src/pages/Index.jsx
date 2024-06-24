import { Container, Text, VStack, Input, IconButton, Box, Heading } from "@chakra-ui/react";
import { FaSearch, FaMicrophone } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Slang Term App</Heading>
        <Text fontSize="xl">Discover the latest trending slang terms</Text>
        <Box display="flex" alignItems="center" width="100%">
          <Input placeholder="Search for slang terms..." />
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <IconButton aria-label="Voice Search" icon={<FaMicrophone />} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;