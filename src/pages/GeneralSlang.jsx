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
    <Box p={4} bg="brand.900" color="brand.600">
      <Heading as="h2" size="xl" mb={4} color="brand.500">General Slang</Heading>
      <Text fontSize="lg" mb={6} color="brand.500">
        Many slang terms are used both online and offline, such as in spoken conversation. The following list includes general shorthand and slang terms that are not specifically used online or in text messaging.
      </Text>
      {loading ? (
        <Spinner />
      ) : (
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th color="brand.500">Slang Term</Th>
              <Th color="brand.500">Meaning</Th>
              <Th color="brand.500">Votes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {terms.map((term, index) => (
              <Tr key={index}>
                <Td color="brand.600">{term.term}</Td>
                <Td color="brand.600">{term.meaning}</Td>
                <Td color="brand.600">{term.votes}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default GeneralSlang;