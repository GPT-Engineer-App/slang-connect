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
  neon: {
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    yellow: "#FFFF00",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bgImage: "url('/images/solid-background.jpg')",
        bgSize: "cover",
        color: "brand.600",
      },
      a: {
        color: "neon.cyan",
        _hover: {
          color: "neon.magenta",
        },
      },
      "*:focus": {
        outline: "2px solid",
        outlineColor: "brand.500",
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