import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";

const SignupPanel: React.FC = () => {
  return (
    <Flex h={{ base: "100vh", lg: "80vh" }} justify="center" align="center">
      <VStack w={{ base: "md", lg: "xl" }} spacing={5}>
        <Heading size="lg">Sign Up</Heading>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input size="sm" placeholder="Email Address" type="email"></Input>
        </FormControl>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input size="sm" placeholder="Username"></Input>
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input size="sm" placeholder="Password" type="password"></Input>
        </FormControl>
        <Spacer />
        <Button size="md" colorScheme="purple">
          Submit
        </Button>
      </VStack>
    </Flex>
  );
};

export default SignupPanel;
