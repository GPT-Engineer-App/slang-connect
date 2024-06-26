import { Box, Text, Heading } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4} bg="brand.900">
    <Heading as="h2" size="xl" mb={4} color="brand.500">Contact Us</Heading>
    <Text fontSize="lg" color="brand.500">Have questions or feedback? Reach out to us at contact@slangtermapp.com.</Text>
  </Box>
);

export default Contact;