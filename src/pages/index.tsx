import { Box } from "@chakra-ui/react";
import Header from "../layouts/header";
import Hero from "../layouts/hero";
import MenSaying from "../layouts/menSaying";
import EarnMoney from "../layouts/earnMoney";
import JoinFree from "../layouts/joinFree";
import AboutTony from "../layouts/aboutTony";
import Footer from "../layouts/footer";

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <MenSaying />
      <EarnMoney />
      <AboutTony />
      <JoinFree />
      <Footer />
    </Box>
  );
};

export default Home;
