import React from "react";
import { Clients, Footer, Header, Services, Works } from "../../components";
import { motion } from "framer-motion";
const Home = ({ openModel }) => {
  return (
    <motion.div>
      <Header
        open={openModel}
        title=" We Are Techboom"
        text="   Of is het nu Lorum Ipsem, Lorum Ipsom, Lorem Ipsom? Nee, officieel
        is het “Lorum Ipsem”."
        btn="Lets Talk"
      />
      <Services />
      <Clients />
      <Works />
      <Footer />
    </motion.div>
  );
};

export default Home;
