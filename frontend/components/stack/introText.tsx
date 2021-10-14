import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const IntroText: React.FC = () => {
  const colSpan = useBreakpointValue({ base: 5, md: 3 });
  return (
    <VStack w="full" h="full" spacing={10} px={20} mt={10} align="center">
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
          columns={5}
          columnGap={3}
          rowGap={3}
        >
          <GridItem colSpan={colSpan}>
            <FormControl id="email">
              <FormLabel fontSize="xs">Enter Your Email Address Here</FormLabel>
              <Input size="sm" placeholder="Email Address" type="email"></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2} alignSelf="flex-end">
            <Button size="sm" colorScheme="purple">
              Sign Up For Involution
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default IntroText;
