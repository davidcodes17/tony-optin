import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { TickCircle } from "iconsax-react";

const EarnMoney = () => {
  const points = [
    "Unlock the secrets to thriving in the $39 billion Canadian truck driving industry.",
    "Identify and overcome the obstacles keeping you from landing high-paying truck driving jobs.",
    "Learn proven strategies to transition smoothly into the Canadian trucking industry as an immigrant.",
    "Gain the confidence to ace interviews and secure profitable trucking jobs.",
    "Master the skills needed to qualify for well-paid truck driving jobs in Canada.",
    "Learn how to get the relevant experience that gives you a solid edge when applying for truck driving jobs.",
    "And lots more…",
  ];
  return (
    <Box textAlign={"center"} px={{ lg: 100, md: 100, sm: 10, base: 10 }}>
      <Heading>EARN MORE MONEY GAIN MORE FREEDOM FEEL MORE FULFILLED</Heading>
      <Flex justifyContent={"center"} py={3}>
        <Text width={600}>
          Dear immigrant, you don’t have to keep settling for low-paying jobs in
          Canada/US You can land a highly paid truck driving job that
          financially secures you — &amp; your family — forever. And I want you
          to show you how
        </Text>
      </Flex>
      <Heading fontSize={20}>In this FREE MASTERCLASS, you’ll…</Heading>

      <Flex
        flexWrap={"wrap"}
        gap={{ lg: 20, md: 20, sm: 5, base: 5 }}
        justifyContent={"center"}
        mt={10}
      >
        {points.map((point, key) => (
          <EarnCompo text={point} key={key} />
        ))}
      </Flex>
    </Box>
  );
};

export default EarnMoney;

const EarnCompo = ({ text }: { text: string }) => {
  return (
    <Flex
      width={{ lg: 400, md: "100%", sm: "100%", base: "100%" }}
      textAlign={"left"}
      gap={5}
    >
      <Box
        bg={"#013463"}
        height={"fit-content"}
        borderRadius={1000}
        color={"#fff"}
        p={2}
      >
        <TickCircle size={25} variant="Bold" />
      </Box>
      <Box>
        <Text fontSize={20}>{text}</Text>
      </Box>
    </Flex>
  );
};
