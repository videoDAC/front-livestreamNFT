import * as React from "react";

// 1. import 'ChakraProvider' component
import { ChakraProvider } from "@chakra-ui/react";
export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider >
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }