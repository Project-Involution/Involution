import { Container, Flex } from "@chakra-ui/react";

import IntroImage from "../components/stack/introImage";
import IntroText from "../components/stack/introText";
import NavBar from "../components/flex/navBar";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Container maxW="container.2xl" p={0}>
      <NavBar />

      <Flex
        h={{ base: "auto", lg: "full" }}
        py={20}
        direction={{ base: "column-reverse", lg: "row" }}
        align="center"
      >
        <IntroText />
        <IntroImage />
      </Flex>
    </Container>
  );
};

export default IndexPage;
