import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="black" p={4} boxShadow="md" position="fixed" top="0" width="100%" zIndex="1000">
      <Flex justify="space-between" align="center">
        <Link as={NavLink} to="/" color="brand.600" fontWeight="bold" whileHover={{ scale: 1.1 }}>Home</Link>
        <Menu>
          <MenuButton as={IconButton} icon={<FaBars />} variant="outline" color="cyan.400" />
          <MenuList>
            <MenuItem as={NavLink} to="/about" color="brand.600">About</MenuItem>
            <MenuItem as={NavLink} to="/contact" color="brand.600">Contact</MenuItem>
            <MenuItem as={NavLink} to="/terms" color="brand.600">Terms</MenuItem>
            <MenuItem as={NavLink} to="/alphabetical-terms" color="brand.600">Alphabetical Terms</MenuItem>
            <MenuItem as={NavLink} to="/general-slang" color="brand.600">General Slang</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;