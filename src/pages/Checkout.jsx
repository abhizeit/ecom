import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Select,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCart } from "../redux/cart/cart.actions";
import { MdDelete } from "react-icons/md";
import EmptyCart from "../components/EmptyCart";

const Checkout = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const getcartTotal = () =>
    cartItems
      .map((i) => Number(i.price) * Number(i.count))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);

  useEffect(() => {
    setCartTotal(getcartTotal());
  }, [cartItems]);

  if (!cartItems.length) {
    return <EmptyCart />;
  }

  return (
    <Flex paddingY={16}>
      <Box width="20%" padding={6}>
        <VStack position="sticky" top="100px">
          <Text as="b">Amout to be Paid: {cartTotal}</Text>
          <Button w="100%"> Proceed to pay </Button>
        </VStack>
      </Box>
      <Spacer />
      <Box padding={6} borderRadius={16} width="80%" shadow="base">
        <Table variant="striped" color="teal">
          <Tbody>
            {cartItems.map((c) => (
              <Tr>
                <Td>
                  <VStack>
                    <Image src={c.image} height="100px" width="100px" />
                  </VStack>
                </Td>
                <Td>{c.title}</Td>
                <Td>
                  <HStack>
                    <Text>Qty</Text>
                    <Select
                      onChange={(e) => {
                        dispatch(
                          updateCart({
                            id: c.id,
                            count: Number(e.target.value),
                          })
                        );
                      }}
                    >
                      <option value="1" selected={c.count === 1}>
                        1
                      </option>
                      <option value="2" selected={c.count === 2}>
                        2
                      </option>
                      <option value="3" selected={c.count === 3}>
                        3
                      </option>
                      <option value="4" selected={c.count === 4}>
                        4
                      </option>
                      <option value="5" selected={c.count === 5}>
                        5
                      </option>
                    </Select>
                  </HStack>
                </Td>
                <Td>{c.price * c.count}</Td>
                <Td>
                  <IconButton
                    onClick={() => {
                      console.log(c.id);
                      dispatch(removeFromCart({ id: c.id }));
                    }}
                    icon={<MdDelete />}
                    bg="transparent"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Checkout;
