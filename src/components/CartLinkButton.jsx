import { Box, Circle, IconButton } from "@chakra-ui/react";
import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartLinkButton = ({ count }) => {
  return (
    <Box position="relative">
      <Circle
        zIndex="1"
        size="23px"
        bg="tomato"
        color="white"
        position="absolute"
        right="0px"
      >
        {count}
      </Circle>
      <Link to="/checkout">
        <IconButton
          borderRadius="50%"
          bg="transparent"
          size="lg"
          icon={<HiShoppingBag />}
        />
      </Link>
    </Box>
  );
};

export default CartLinkButton;
