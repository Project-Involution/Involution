import { Container } from "@chakra-ui/react";
import NavBar from "../components/flex/navBar";
import type { NextPage } from "next";
import SignupPanel from "../components/flex/signupPanel";

const IndexPage: NextPage = () => {
  return (
    <Container maxW="container.2xl" p={0}>
      <NavBar />
      <SignupPanel />
    </Container>
  );
};

export default IndexPage;
