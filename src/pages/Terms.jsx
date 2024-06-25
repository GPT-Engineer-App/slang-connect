import { useState } from 'react';
import { Box, Text, Heading, List, ListItem, Collapse, Button } from '@chakra-ui/react';

const terms = [
  { term: "AFK", definition: "Away From Keyboard", example: "I'll be AFK for a few minutes." },
  { term: "BRB", definition: "Be Right Back", example: "BRB, need to grab something." },
  { term: "BTW", definition: "By The Way", example: "BTW, did you see the latest episode?" },
  { term: "IDK", definition: "I Don't Know", example: "IDK what you're talking about." },
  { term: "IMO", definition: "In My Opinion", example: "IMO, this is the best option." },
  { term: "IRL", definition: "In Real Life", example: "Let's meet IRL sometime." },
  { term: "LOL", definition: "Laugh Out Loud", example: "That joke made me LOL." },
  { term: "OMG", definition: "Oh My God", example: "OMG, I can't believe it!" },
  { term: "ROFL", definition: "Rolling On the Floor Laughing", example: "That meme had me ROFL." },
  { term: "SMH", definition: "Shaking My Head", example: "SMH at the situation." },
  { term: "TBH", definition: "To Be Honest", example: "TBH, I didn't like the movie." },
  { term: "TTYL", definition: "Talk To You Later", example: "Gotta go, TTYL." },
  { term: "YOLO", definition: "You Only Live Once", example: "Just do it, YOLO!" },
  { term: "BFF", definition: "Best Friends Forever", example: "She's my BFF." },
  { term: "DM", definition: "Direct Message", example: "Send me a DM." },
  { term: "FOMO", definition: "Fear Of Missing Out", example: "I have FOMO about the event." },
  { term: "GOAT", definition: "Greatest Of All Time", example: "He's the GOAT of basketball." },
  { term: "ICYMI", definition: "In Case You Missed It", example: "ICYMI, here's the update." },
  { term: "JK", definition: "Just Kidding", example: "I'm not serious, JK." },
  { term: "LMK", definition: "Let Me Know", example: "LMK if you need help." },
  { term: "NBD", definition: "No Big Deal", example: "It's NBD, don't worry." },
  { term: "NSFW", definition: "Not Safe For Work", example: "That video is NSFW." },
  { term: "OOTD", definition: "Outfit Of The Day", example: "Check out my OOTD." },
  { term: "POTD", definition: "Picture Of The Day", example: "Here's my POTD." },
  { term: "RN", definition: "Right Now", example: "I'm busy RN." },
  { term: "SMH", definition: "Shaking My Head", example: "SMH at the situation." },
  { term: "TBT", definition: "Throwback Thursday", example: "Here's a TBT photo." },
  { term: "TL;DR", definition: "Too Long; Didn't Read", example: "TL;DR: It was a great day." },
  { term: "YOYO", definition: "You're On Your Own", example: "You're on your own, YOYO." },
  { term: "AFAIK", definition: "As Far As I Know", example: "AFAIK, it's correct." },
  { term: "B4", definition: "Before", example: "I'll be there B4 noon." },
  { term: "BC", definition: "Because", example: "I did it BC I wanted to." },
  { term: "BF", definition: "Boyfriend", example: "He's my BF." },
  { term: "BFFL", definition: "Best Friends For Life", example: "We're BFFL." },
  { term: "CYA", definition: "See You", example: "CYA later!" },
  { term: "DIY", definition: "Do It Yourself", example: "I love DIY projects." },
  { term: "F2F", definition: "Face To Face", example: "Let's meet F2F." },
  { term: "FB", definition: "Facebook", example: "Add me on FB." },
  { term: "FWIW", definition: "For What It's Worth", example: "FWIW, I think it's great." },
  { term: "FYI", definition: "For Your Information", example: "FYI, the meeting is at 3." },
  { term: "GG", definition: "Good Game", example: "GG, well played." },
  { term: "GL", definition: "Good Luck", example: "GL with your exam." },
  { term: "GR8", definition: "Great", example: "That's GR8 news!" },
  { term: "GTG", definition: "Got To Go", example: "I GTG now." },
  { term: "HBD", definition: "Happy Birthday", example: "HBD to you!" },
  { term: "IDC", definition: "I Don't Care", example: "IDC about it." },
  { term: "IDK", definition: "I Don't Know", example: "IDK what you're talking about." },
  { term: "ILY", definition: "I Love You", example: "ILY so much." },
  { term: "IMHO", definition: "In My Humble Opinion", example: "IMHO, it's the best choice." },
  { term: "IRL", definition: "In Real Life", example: "Let's meet IRL sometime." },
  { term: "JK", definition: "Just Kidding", example: "I'm not serious, JK." },
  { term: "L8R", definition: "Later", example: "See you L8R." },
  { term: "LMAO", definition: "Laughing My Ass Off", example: "That joke made me LMAO." },
  { term: "LOL", definition: "Laugh Out Loud", example: "That joke made me LOL." },
  { term: "NVM", definition: "Never Mind", example: "NVM, it's okay." },
  { term: "OMG", definition: "Oh My God", example: "OMG, I can't believe it!" },
  { term: "PLZ", definition: "Please", example: "Help me, PLZ." },
  { term: "ROFL", definition: "Rolling On the Floor Laughing", example: "That meme had me ROFL." },
  { term: "SRSLY", definition: "Seriously", example: "SRSLY, that's amazing." },
  { term: "TMI", definition: "Too Much Information", example: "That's TMI." },
  { term: "TY", definition: "Thank You", example: "TY for your help." },
  { term: "WTF", definition: "What The F***", example: "WTF just happened?" },
];

const Terms = () => {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleTermClick = (term) => {
    setSelectedTerm(selectedTerm === term ? null : term);
  };

  return (
    <Box p={4} bg="black">
      <Heading as="h2" size="xl" mb={4} color="neon.cyan">Slang Terms</Heading>
      <List spacing={3}>
        {terms.map((item, index) => (
          <ListItem key={index} p={4} borderWidth="1px" borderRadius="md" bg="gray.800" color="white" boxShadow="lg" border="1px solid" borderColor="gray.600">
            <Text fontWeight="bold" onClick={() => handleTermClick(item.term)} cursor="pointer">
              {item.term}
            </Text>
            <Text>{item.definition}</Text>
            <Collapse in={selectedTerm === item.term} animateOpacity>
              <Box mt={4} p={4} bg="gray.700" borderRadius="md">
                <Text fontStyle="italic" color="gray.300">Example: {item.example}</Text>
              </Box>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Terms;