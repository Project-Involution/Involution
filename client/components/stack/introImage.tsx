import { Image, VStack } from "@chakra-ui/react";

const IntroImage: React.FC = () => {
  return (
    <VStack w="full" h="full" spacing={10} px={20} mt={10} align="center">
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
