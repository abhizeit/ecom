import { Box, Button, Center, Input } from "@chakra-ui/react";
import React from "react";

const Payment = () => {
  return (
    <Box w="60vw" h="100vh" margin="auto">
      <Box p={8} shadow="base" borderRadius="20px">
        <Input type="text" placeholder="Card Number" />
        <Input type="text" placeholder="Card Holder's Name" />
        <Input type="month" placeholder="Expiry" />
        <Input type="number" placeholder="CVV" />
        <Button>Make Payment</Button>
      </Box>
    </Box>
  );
};

export default Payment;
