import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Components/Layout";
import MovieContext from "../utils/Context";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MovieContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MovieContext>
    </ChakraProvider>
  );
}

export default MyApp;
