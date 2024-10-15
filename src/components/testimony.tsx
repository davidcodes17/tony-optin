import { Box, Heading, Text } from "@chakra-ui/react";

const Testimony = ({ head, body }: { head: string; body: string }) => {
  return (
    <Box
      border={"2px solid #ddd"}
      borderRadius={20}
      width={400}
      maxW={400}
      p={5}
      color={"#fff"}
      minW={400}
    >
      <Heading fontSize={20}>{head}</Heading>
      <Text mt={5}>{body}</Text>
    </Box>
  );
};

export default Testimony;
