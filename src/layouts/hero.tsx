import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Play } from "iconsax-react";

const Hero = () => {
  return (
    <Box p={{ lg: 20, md: 10, sm: 5, base: 5 }}>
      <Flex
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={25}
      >
        <Box width={"100%"}>
          <Heading fontSize={{ lg: 60, md: 40, sm: 40, base: 40 }}>
            Master &amp; Monetise the $39 Billion Canadian Truck Driving
            Industry
          </Heading>
          <Text fontSize={25}>
            With The Canadian Truck-Driving Profit Masterclass TM
          </Text>
          <Text>
            Discover how to transition into the $39 billion Canadian/US trucking
            driving industry… &amp; land high- paying jobs that settles you for
            life… as an aspiring or active immigrant truck driver… all in less
            than 90 minutes!
          </Text>
        </Box>
        <Box
          bg={"#013463"}
          p={10}
          borderRadius={20}
          width={"100%"}
          height={"100%"}
          color={"#fff"}
        >
          <Heading fontSize={{ lg: 40, md: 25, sm: 25, base: 25 }}>
            Join The FREE Master Class Now
          </Heading>
          <Box>
            <FormControl mt={3}>
              <FormLabel>First Name</FormLabel>
              <Input
                py={6}
                bg={"#fff"}
                color={"#013463"}
                placeholder="Your First Name"
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Email Address</FormLabel>
              <Input
                py={6}
                bg={"#fff"}
                color={"#013463"}
                placeholder="you@gmail.com"
              />
            </FormControl>
            <Button
              bg={"#fff"}
              _hover={{ bg: "#fff" }}
              color={"#013463"}
              width={"100%"}
              leftIcon={<Play variant="Bulk" size={25} />}
              py={7}
              mt={5}
              borderRadius={5}
            >
              Join Now
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
