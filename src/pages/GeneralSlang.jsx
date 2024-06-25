import { useState, useEffect } from "react";
import { Box, Text, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
import axios from "axios";

const GeneralSlang = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTerms = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQL1b6DNU5FGU85iZV5uqc7wML1REvtlU8oRthctAvDzj51FNW-2obsaFnsMgeVwvN0hWAHpqx6ZK1o/pub?output=csv"
        );
        const data = response.data.split("\n").slice(1).map(row => {
          const [term, meaning, votes] = row.split(",");
          return { term, meaning, votes };
        });
        setTerms(data);
      } catch (error) {
        console.error("Error fetching terms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  return (
    <Box p={4} bg="black" color="white">
      <Heading as="h2" size="xl" mb={4} color="neon.cyan">General Slang</Heading>
      <Text fontSize="lg" mb={6} color="neon.cyan">
        Many slang terms are used both online and offline, such as in spoken conversation. The following list includes general shorthand and slang terms that are not specifically used online or in text messaging.
      </Text>
      {loading ? (
        <Spinner />
      ) : (
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th color="neon.cyan">Slang Term</Th>
              <Th color="neon.cyan">Meaning</Th>
              <Th color="neon.cyan">Votes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {terms.map((term, index) => (
              <Tr key={index}>
                <Td color="white">{term.term}</Td>
                <Td color="white">{term.meaning}</Td>
                <Td color="white">{term.votes}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default GeneralSlang;