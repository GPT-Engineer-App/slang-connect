import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <Box bg="brand.900" p={4} boxShadow="md">
      <Flex justify="space-around" as={motion.div} initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <Link as={NavLink} to="/" color="brand.600" fontWeight="bold" whileHover={{ scale: 1.1 }}>Home</Link>
        <Link as={NavLink} to="/about" color="brand.600" fontWeight="bold" whileHover={{ scale: 1.1 }}>About</Link>
        <Link as={NavLink} to="/contact" color="brand.600" fontWeight="bold" whileHover={{ scale: 1.1 }}>Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;