import { Box, Text, Heading } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4} bg="black">
    <Heading as="h2" size="xl" mb={4} color="neon.cyan">Contact Us</Heading>
    <Text fontSize="lg" color="neon.cyan">Have questions or feedback? Reach out to us at contact@slangtermapp.com.</Text>
  </Box>
);

export default Contact;