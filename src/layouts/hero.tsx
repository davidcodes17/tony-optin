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
            With The Canadian Truck-Driving Profit Masterclass
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
          <MasterclassForm />
          {/* <form
            action="https://form.flodesk.com/forms/674058b76c19297e00661ca5/submit"
            method="post"
          >
            <Heading fontSize={{ lg: 40, md: 25, sm: 25, base: 25 }}>
              Join The FREE Masterclass Now
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
                  name="email"
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
                type={"submit"}
                borderRadius={5}
              >
                Join Now
              </Button>
            </Box>
          </form> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;

const MasterclassForm = () => {
  return (
    <Box
      className="ff-674058b76c19297e00661ca5"
      data-ff-el="root"
      data-ff-version="3"
      data-ff-type="inline"
      data-ff-name="inlineNoImage"
      data-ff-stage="default"
      p={6}
      bg="#013463"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading fontSize={{ lg: 40, md: 25, sm: 25, base: 25 }} color="#fff">
        Join The FREE Masterclass Now
      </Heading>
      <Box>
        <form
          action="https://form.flodesk.com/forms/674058b76c19297e00661ca5/submit"
          method="post"
          data-ff-el="form"
        >
          <FormControl mt={3}>
            <FormLabel color="#013463">First Name</FormLabel>
            <Input
              py={6}
              bg="#fff"
              color="#013463"
              name="firstName"
              placeholder="Your First Name"
              required
            />
          </FormControl>

          {/* Email Field */}
          <FormControl mt={3}>
            <FormLabel color="#013463">Email Address</FormLabel>
            <Input
              py={6}
              name="email"
              bg="#fff"
              color="#013463"
              placeholder="you@gmail.com"
              required
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            bg="#fff"
            _hover={{ bg: "#fff" }}
            color="#013463"
            width="100%"
            leftIcon={<Play variant="Bulk" size={25} />}
            py={7}
            mt={5}
            type="submit"
            borderRadius={5}
          >
            Join Now
          </Button>
        </form>
      </Box>
    </Box>
  );
};
