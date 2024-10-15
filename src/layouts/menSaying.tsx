import { Box, Flex, Heading } from "@chakra-ui/react";
import Testimony from "../components/testimony";

// Array of testimonies
const testimonies = [
  {
    head: "Julius Abhulimen",
    body: `I recommend working with Tony on this path because you will
not only learn the technical part of trucking which is driving
and diagnostics, he will teach you the business side of things.`,
  },
  {
    head: "Omar Mohammed",
    body: `With Tony’s guidance and support, I was able to navigate
the complexities of relocating and getting my commercial
driver’s license and securing my first trucking job.`,
  },
  {
    head: "Julius Abhulimen",
    body: `I recommend working with Tony on this path because you will
not only learn the technical part of trucking which is driving
and diagnostics, he will teach you the business side of things.`,
  },
  {
    head: "Omar Mohammed",
    body: `With Tony’s guidance and support, I was able to navigate
the complexities of relocating and getting my commercial
driver’s license and securing my first trucking job.`,
  },
  {
    head: "Julius Abhulimen",
    body: `I recommend working with Tony on this path because you will
not only learn the technical part of trucking which is driving
and diagnostics, he will teach you the business side of things.`,
  },
  {
    head: "Omar Mohammed",
    body: `With Tony’s guidance and support, I was able to navigate
the complexities of relocating and getting my commercial
driver’s license and securing my first trucking job.`,
  },
];

const MenSaying = () => {
  return (
    <Box my={20}>
      <Heading textAlign={"center"}>
        What other men are saying about Tony
      </Heading>
      <Flex
        bg={"#013463"}
        gap={10}
        p={20}
        m={{ lg: 10, md: 10, sm: 5, base: 5 }}
        borderRadius={20}
        overflowX={"scroll"}
      >
        {testimonies.map((testimony, index) => (
          <Testimony key={index} head={testimony.head} body={testimony.body} />
        ))}
      </Flex>
    </Box>
  );
};

export default MenSaying;
