import { Box, Flex, Link, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <Box bg="black" p={4} boxShadow="md" position="fixed" top="0" width="100%" zIndex="1000">
      <Flex justify="space-around" as={motion.div} initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <Link as={NavLink} to="/" color="cyan.400" fontWeight="bold" whileHover={{ scale: 1.1 }}>Home</Link>
        <Link as={NavLink} to="/about" color="cyan.400" fontWeight="bold" whileHover={{ scale: 1.1 }}>About</Link>
        <Link as={NavLink} to="/contact" color="cyan.400" fontWeight="bold" whileHover={{ scale: 1.1 }}>Contact</Link>
        <Link as={NavLink} to="/terms" color="cyan.400" fontWeight="bold" whileHover={{ scale: 1.1 }}>Terms</Link>
        <Link as={NavLink} to="/common-terms" color="cyan.400" fontWeight="bold" whileHover={{ scale: 1.1 }}>Common Terms</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;