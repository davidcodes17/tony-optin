import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ArrowUp } from "iconsax-react";

const Footer = () => {
  return (
    <Box bg={"#013463"} p={10} color={"#fff"}>
      <Flex
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "center",
          base: "center",
        }}
        flexWrap={"wrap"}
        gap={10}
      >
        <Box>
          <Image src="/logo-white.png" width={200} />
          <Text mt={3}>&copy; All rights reserved Tony Trucking 2024</Text>
        </Box>
        <Button
          as={Link}
          href="#"
          bg={"#fff"}
          color={"#013463"}
          rightIcon={<ArrowUp />}
        >
          Back to Top
        </Button>
      </Flex>
    </Box>
  );
};

export default Footer;
