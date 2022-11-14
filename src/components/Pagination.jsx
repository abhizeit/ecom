import { Center, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ page, handlePage }) => {
  return (
    <Center>
      <IconButton
        m={6}
        disabled={page === 1}
        onClick={() => handlePage(-1)}
        icon={<AiOutlineLeft />}
      />
      <Text as="b">{page}</Text>
      <IconButton
        m={6}
        disabled={page === 4}
        onClick={() => handlePage(+1)}
        icon={<AiOutlineRight />}
      />
    </Center>
  );
};

export default Pagination;
