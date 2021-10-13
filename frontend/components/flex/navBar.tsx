import { Box, Button, Flex, HStack, Heading } from "@chakra-ui/react";

const NavBar: React.FC = () => {
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
        <Button>Log In</Button>
        <Button colorScheme="purple">Sign Up</Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
