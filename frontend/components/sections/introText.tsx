import {
  Button,
  FormControl,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Intro = () => {
  const colSpan = useBreakpointValue({ base: 4, md: 3 });
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      align={{ base: "center", lg: "flex-start" }}
    >
      <VStack spacing={3} align="flex-start">
        <Heading w="full" size="lg">
          No matter what you want to learn,
        </Heading>
        <Heading w="full" size="lg">
          We get you accompany.
        </Heading>
        <Spacer />
        <Text w="full" fontWeight="semibold">
          Involution serves as an online study group platform. It provides an
          efficient way for you to find peers and join in a group when you want
          to learn some skills or prepare for tests.
        </Text>
        <Spacer />
        <SimpleGrid
          w="full"
          maxW={{ base: "full", lg: "md" }}
          columns={4}
          columnGap={3}
          rowGap={3}
        >
          <GridItem colSpan={colSpan}>
            <FormControl>
              <Input size="sm" placeholder="Email Address"></Input>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <Button size="sm" colorScheme="purple">
                Sign Up For Involution
              </Button>
            </FormControl>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Intro;
