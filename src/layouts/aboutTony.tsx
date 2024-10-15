import { Box, Flex, Image, Text } from "@chakra-ui/react";

const AboutTony = () => {
  return (
    <Box p={{ lg: 20, md: 20, sm: 5, base: 5 }} my={20}>
      <Flex
        gap={{ lg: 20, md: 20, sm: 10, base: 10 }}
        alignItems={"center"}
        flexWrap={{ lg: "nowrap", md: "wrap", sm: "wrap", base: "wrap" }}
      >
        <Image
          src="/tony.jpg"
          width={"100%"}
          boxShadow={"sm"}
          height={{ lg: 600, md: 600, sm: 400, base: 400 }}
          objectFit={"cover"}
          borderRadius={20}
        />
        <Box width={"100%"}>
          <Text lineHeight={"30px"} noOfLines={20}>
            <b>Hi there!</b> <br /> I’M ANTHONY OCHANG I&#39;m a truck driver
            and truck business owner, operating in Canada, the US, and Mexico.
            I’ve been in the trucking industry for 14 years, driving trucks
            around Canada, the US, and Mexico. I’ve helped hundreds of truck
            drivers secure high-paying jobs and relocate successfully. And I’ve
            made over $1million dollars in this business. Funny thing is, before
            now, I knew nothing about the trucking industry in Canada/US.
            Infact, when my friend — who was already making a lot of money from
            the industry — first told me about it, I scoffed. I used to see
            truck driving as a job for people who didn’t go to school — a dirty,
            physical &amp; a low-paying job not suitable for a family man like
            me. However after much persuasion from him, I decided to give it a
            try, and I was completely blown away. Could you believe that he was
            making 6 times more than the money I was making as a storekeeper? It
            was unbelievable. The thing is, before I relocated to Canada —with
            my pregnant wife and son, I used to work for a logistics company
            back in Nigeria. There, I managed over 300 trucks everyday. And I
            did this for 5 years. But getting into the trucking industry in
            Canada, I discovered their trucks were so different from what I was
            used to in Nigeria. The operations were organized and structured,
            with drivers being well taken care of and able to be their own
            bosses. All this made me realize that truck driving in Canada is not
            only a serious business but a highly profitable one that can settle
            you for life — financially. Truck driving changed my life; it can
            change yours too. And you’re going to learn how in this FREE
            Masterclass. This Masterclass is perfect for YOU if… you’re an
            immigrant living in Canada/US struggling to get truck driving jobs…
            or you want to relocate to Canada/US but you’re not sure you’ll get
            any truck driving job. My goal is to help you land not just any job,
            but high-paying trucking jobs that pays you up to $10k/monthly…
            while you work on your terms with a lot of free time for yourself
            &amp; your family…
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutTony;
