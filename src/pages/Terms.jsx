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
  { term: "BFF", definition: "Best Friends Forever" },
  { term: "DM", definition: "Direct Message" },
  { term: "FOMO", definition: "Fear Of Missing Out" },
  { term: "GOAT", definition: "Greatest Of All Time" },
  { term: "ICYMI", definition: "In Case You Missed It" },
  { term: "JK", definition: "Just Kidding" },
  { term: "LMK", definition: "Let Me Know" },
  { term: "NBD", definition: "No Big Deal" },
  { term: "NSFW", definition: "Not Safe For Work" },
  { term: "OOTD", definition: "Outfit Of The Day" },
  { term: "POTD", definition: "Picture Of The Day" },
  { term: "RN", definition: "Right Now" },
  { term: "SMH", definition: "Shaking My Head" },
  { term: "TBT", definition: "Throwback Thursday" },
  { term: "TL;DR", definition: "Too Long; Didn't Read" },
  { term: "YOYO", definition: "You're On Your Own" },
  { term: "AFAIK", definition: "As Far As I Know" },
  { term: "B4", definition: "Before" },
  { term: "BC", definition: "Because" },
  { term: "BF", definition: "Boyfriend" },
  { term: "BFFL", definition: "Best Friends For Life" },
  { term: "CYA", definition: "See You" },
  { term: "DIY", definition: "Do It Yourself" },
  { term: "F2F", definition: "Face To Face" },
  { term: "FB", definition: "Facebook" },
  { term: "FWIW", definition: "For What It's Worth" },
  { term: "FYI", definition: "For Your Information" },
  { term: "GG", definition: "Good Game" },
  { term: "GL", definition: "Good Luck" },
  { term: "GR8", definition: "Great" },
  { term: "GTG", definition: "Got To Go" },
  { term: "HBD", definition: "Happy Birthday" },
  { term: "IDC", definition: "I Don't Care" },
  { term: "IDK", definition: "I Don't Know" },
  { term: "ILY", definition: "I Love You" },
  { term: "IMHO", definition: "In My Humble Opinion" },
  { term: "IRL", definition: "In Real Life" },
  { term: "JK", definition: "Just Kidding" },
  { term: "L8R", definition: "Later" },
  { term: "LMAO", definition: "Laughing My Ass Off" },
  { term: "LOL", definition: "Laugh Out Loud" },
  { term: "NVM", definition: "Never Mind" },
  { term: "OMG", definition: "Oh My God" },
  { term: "PLZ", definition: "Please" },
  { term: "ROFL", definition: "Rolling On the Floor Laughing" },
  { term: "SRSLY", definition: "Seriously" },
  { term: "TMI", definition: "Too Much Information" },
  { term: "TY", definition: "Thank You" },
  { term: "WTF", definition: "What The F***" },
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