import {
  Box,
  Button,
  Center,
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
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <Flex padding={8} spacing={2}>
      <Box padding={4} borderRadius={16}>
        {/* <Table variant="striped" color="teal">
          <Tbody> */}
        {cartItems.map((c) => (
          <Flex direction={["column", "row"]}>
            <Box h="300px" padding={6}>
              <Image width="100%" height="80%" src={c.image} />
            </Box>
            <Box padding={6}>
              <VStack>
                <Text>{c.title.substring(0, 40) + "..."}</Text>
                <HStack>
                  <Text>Qty</Text>
                  <Select
                    size="xs"
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
                <Text>{(c.price * c.count).toFixed(2)}</Text>
                <Button
                  // position="relative"
                  // right="10px"
                  // top="10px"
                  width="100%"
                  onClick={() => {
                    console.log(c.id);
                    dispatch(removeFromCart({ id: c.id }));
                  }}
                  leftIcon={<MdDelete />}
                >
                  remove
                </Button>
              </VStack>
            </Box>
          </Flex>
          // <Tr>
          //   <Td>
          //     <VStack>
          //       <Image src={c.image} height="100px" width="100px" />
          //     </VStack>
          //   </Td>
          //   <Td>{c.title.substring(0, 40) + "..."}</Td>
          //   <Td>
          //     <VStack>
          //       <HStack>
          //         <Text>Qty</Text>
          //         <Select
          //           onChange={(e) => {
          //             dispatch(
          //               updateCart({
          //                 id: c.id,
          //                 count: Number(e.target.value),
          //               })
          //             );
          //           }}
          //         >
          //           <option value="1" selected={c.count === 1}>
          //             1
          //           </option>
          //           <option value="2" selected={c.count === 2}>
          //             2
          //           </option>
          //           <option value="3" selected={c.count === 3}>
          //             3
          //           </option>
          //           <option value="4" selected={c.count === 4}>
          //             4
          //           </option>
          //           <option value="5" selected={c.count === 5}>
          //             5
          //           </option>
          //         </Select>
          //       </HStack>
          //       <Text>{(c.price * c.count).toFixed(2)}</Text>
          //     </VStack>
          //   </Td>

          //   <Td>
          //     <IconButton
          //       onClick={() => {
          //         console.log(c.id);
          //         dispatch(removeFromCart({ id: c.id }));
          //       }}
          //       icon={<MdDelete />}
          //       bg="transparent"
          //     />
          //   </Td>
          // </Tr>
        ))}
        {/* </Tbody>
        </Table> */}
      </Box>
      <Spacer />
      <Box width="40%">
        <VStack padding={4} position="sticky" top="100px">
          <Text as="b">Amout to be Paid: {cartTotal}</Text>
          <Button w="100%" onClick={() => navigate("/payment")}>
            {" "}
            Proceed to pay{" "}
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Checkout;
