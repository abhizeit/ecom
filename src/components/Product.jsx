import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Product = ({
  id,
  title,
  price,
  image,
  inTheCart,
  handleCart,
  inThewishList,
  handleWishList,
}) => {
  return (
    <Box align="center" shadow="lg" borderRadius={8} padding={8} height="400px">
      <Image src={image} alt="product-image" height="200px" width="200px" />
      <Text>{title}</Text>
      <Text>{price}</Text>
      <Button
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        size="lg"
        onClick={() => handleCart(id)}
      >
        {inTheCart ? "remove from cart" : "add to cart"}
      </Button>
      <IconButton
        marginX={8}
        onClick={() => handleWishList(id)}
        icon={inThewishList ? <AiFillHeart /> : <AiOutlineHeart />}
      />
    </Box>
  );
};

export default Product;
