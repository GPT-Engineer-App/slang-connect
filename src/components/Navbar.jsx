import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={NavLink} to="/" color="white" fontWeight="bold">Home</Link>
        <Link as={NavLink} to="/about" color="white" fontWeight="bold">About</Link>
        <Link as={NavLink} to="/contact" color="white" fontWeight="bold">Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;