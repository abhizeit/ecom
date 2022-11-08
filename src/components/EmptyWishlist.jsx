import { Center, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const EmptyWishlist = () => {
  return (
    <Center h="80vh">
      <VStack>
        <Image src="https://danapointjewelers.com/assets/images/empty-wishlist.png" />
        <Text w="bold" fontSize="20px">
          Your wishlist is empty
        </Text>
      </VStack>
    </Center>
  );
};

export default EmptyWishlist;
