import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/auth.actions";
import logo from "../images/wrdrb.png";
import CartLinkButton from "./CartLinkButton";
import { AiFillHeart } from "react-icons/ai";

const Navbar = () => {
  const [buttonText, setButtonText] = useState("login");
  const { isAuth, token } = useSelector((store) => store.auth);
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuth ? setButtonText("Logout") : setButtonText("Login");
  }, [isAuth, token]);

  const handleClick = () => {
    isAuth ? dispatch(logout()) : navigate("/login");
  };

  return (
    <Box
      px={16}
      py={2}
      position="sticky"
      top="0px"
      bg="white"
      zIndex="1"
      mb={6}
    >
      <Flex>
        <Link to="/home">
          <Image src={logo} height="50px" width="100px" />
        </Link>

        <Spacer />
        <HStack spacing={6}>
          <Link to="/wishlist">
            {" "}
            <IconButton
              borderRadius="50%"
              bg="transparent"
              size="lg"
              icon={<AiFillHeart />}
            />
          </Link>
          <CartLinkButton count={cartItems.length || 0} />
          {/* <Link to="/checkout">
            <IconButton size="lg" icon={<HiShoppingBag />} />
          </Link> */}

          <Button variant="outline" size="lg" onClick={handleClick}>
            {buttonText}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
