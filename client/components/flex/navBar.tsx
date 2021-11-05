import { Box, Button, Flex, HStack, Heading } from "@chakra-ui/react";

import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <Flex
      w="full"
      pos="fixed"
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
      bg="white"
      justify="space-between"
    >
      <Box my="auto">
        <Heading size="md">
          <a href="/">Involution</a>
        </Heading>
      </Box>
      <HStack spacing={3}>
        <Button colorScheme="pink" onClick={() => router.push("/login")}>
          Log In
        </Button>
        <Button colorScheme="purple" onClick={() => router.push("/signup")}>
          Sign Up
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
