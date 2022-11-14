import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Product = ({
  _id,
  title,
  price,
  image,
  inTheCart,
  handleCart,
  inThewishList,
  handleWishList,
}) => {
  return (
    <Box
      align="center"
      shadow="lg"
      borderRadius={8}
      padding={8}
      height="400px"
      position="relative"
    >
      <Box height="300px">
        <Image src={image} alt="product-image" height="200px" width="200px" />
        <Text>{title}</Text>
        <Text>{price}</Text>
      </Box>

      <Button
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        width="100%"
        size="lg"
        onClick={() => handleCart(_id)}
      >
        {inTheCart ? "remove from cart" : "add to cart"}
      </Button>
      <IconButton
        borderRadius="50%"
        background="transparent"
        size="lg"
        position="absolute"
        _hover={{ bg: "none" }}
        top="10px"
        right="10px"
        onClick={() => handleWishList(_id)}
        icon={inThewishList ? <AiFillHeart /> : <AiOutlineHeart />}
      />
    </Box>
  );
};

export default Product;
