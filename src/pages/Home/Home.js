import React from "react";
import { Clients, Footer, Header, Services, Works } from "../../components";

const Home = ({ openModel }) => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
