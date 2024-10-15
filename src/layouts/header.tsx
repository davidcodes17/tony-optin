import { Box, Button, Flex } from "@chakra-ui/react";
import Logo from "../components/logo";
import { Play } from "iconsax-react";

const Header = () => {
  return (
    <Box>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        py={5}
        px={{ lg: 20, md: 10, sm: 5, base: 5 }}
      >
        <Logo />
        <Button
          bg={"#013463"}
          _hover={{ bg: "#013463" }}
          color={"#fff"}
          borderRadius={100}
          alignItems={"center"}
          leftIcon={<Play variant="Bulk" size={15} />}
          px={8}
          py={6}
          fontSize={12}
          fontWeight={500}
        >
          Join Now!
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
