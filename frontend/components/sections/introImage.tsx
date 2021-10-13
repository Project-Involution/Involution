import { Image, VStack } from "@chakra-ui/react";

const IntroImage = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      align={{ base: "center", lg: "flex-end" }}
    >
      <Image
        w="full"
        maxW={{ base: "full", md: "2xl", lg: "md" }}
        src="./intro-image.png"
        alt=""
      />
    </VStack>
  );
};

export default IntroImage;
