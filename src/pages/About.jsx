import { Box, Text, Heading } from '@chakra-ui/react';

const About = () => (
  <Box p={4} bg="black">
    <Heading as="h2" size="xl" mb={4} color="neon.cyan">About Slang Term App</Heading>
    <Text fontSize="lg" color="neon.cyan">The Slang Term App is your go-to resource for discovering and understanding the latest slang terms. Whether you're looking to stay updated with trending terms or want to contribute your own, we've got you covered.</Text>
  </Box>
);

export default About;