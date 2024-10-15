import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Play } from "iconsax-react";

const JoinFree = () => {
  return (
    <Box mt={{ lg: 20, md: 20, sm: 0, base: 0 }} p={5}>
      <Flex justifyContent={"center"}>
        <Box>
          <Heading>JOIN THE FREE MASTERCLASS NOW</Heading>

          <Box py={5}>
            <FormControl mt={3}>
              <FormLabel>First Name</FormLabel>
              <Input py={6} placeholder="Your First Name" />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Email Address</FormLabel>
              <Input py={6} placeholder="you@gmail.com" />
            </FormControl>
            <Button
              py={7}
              bg={"#013463"}
              color={"#fff"}
              leftIcon={<Play variant="Bulk" size={20} />}
              width={"100%"}
              _hover={{ bg: "#013463" }}
              mt={5}
            >
              Join Now
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default JoinFree;
