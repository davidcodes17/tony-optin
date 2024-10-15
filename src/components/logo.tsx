import { Box, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box width={{ lg: "200px", md: "200px", sm: "150px", base: "150px" }}>
      <Image src="/logo.png" />
    </Box>
  );
};

export default Logo;
