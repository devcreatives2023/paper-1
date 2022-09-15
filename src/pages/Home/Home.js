import React from "react";
import { Clients, Footer, Header, Services, Works } from "../../components";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Clients />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
