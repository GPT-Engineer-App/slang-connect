import { Box, Text, Heading, List, ListItem } from '@chakra-ui/react';

const terms = [
  { term: "AFK", definition: "Away From Keyboard" },
  { term: "BRB", definition: "Be Right Back" },
  { term: "BTW", definition: "By The Way" },
  { term: "IDK", definition: "I Don't Know" },
  { term: "IMO", definition: "In My Opinion" },
  { term: "IRL", definition: "In Real Life" },
  { term: "LOL", definition: "Laugh Out Loud" },
  { term: "OMG", definition: "Oh My God" },
  { term: "ROFL", definition: "Rolling On the Floor Laughing" },
  { term: "SMH", definition: "Shaking My Head" },
  { term: "TBH", definition: "To Be Honest" },
  { term: "TTYL", definition: "Talk To You Later" },
  { term: "YOLO", definition: "You Only Live Once" },
];

const Terms = () => (
  <Box p={4} bg="black">
    <Heading as="h2" size="xl" mb={4} color="neon.cyan">Slang Terms</Heading>
    <List spacing={3}>
      {terms.map((item, index) => (
        <ListItem key={index} p={4} borderWidth="1px" borderRadius="md" bg="gray.800" color="white" boxShadow="lg" border="1px solid" borderColor="gray.600">
          <Text fontWeight="bold">{item.term}</Text>
          <Text>{item.definition}</Text>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Terms;