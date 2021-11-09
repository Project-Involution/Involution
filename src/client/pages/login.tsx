import { Container } from "@chakra-ui/react";
import NavBar from "../components/flex/navBar";
import type { NextPage } from "next";
import LoginPanel from "../components/flex/loginPanel";

const IndexPage: NextPage = () => {
  return (
    <Container maxW="container.2xl" p={0}>
      <NavBar />
      <LoginPanel />
    </Container>
  );
};

export default IndexPage;
