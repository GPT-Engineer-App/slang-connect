import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0A2342", // Deep Navy Blue
    800: "#2CA6A4", // Bright Teal
    700: "#D9DCD6", // Soft Gray
    600: "#FFFFFF", // White
    500: "#4B7BEC", // Electric Blue
  },
  dynamic: {
    primary: "#2CA6A4", // Bright Teal
    secondary: "#4B7BEC", // Electric Blue
    accent: "#D9DCD6", // Soft Gray
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "brand.900",
        color: "brand.600",
      },
      a: {
        color: "dynamic.primary",
        _hover: {
          color: "dynamic.secondary",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);