import React from "react";
import Theme from "./Theme";
import Solutions from "./Solutions";
import SimpleMail from "./SimpleMail";
import Events from "./Events";
import Counts from "./Counts";
import Testimonials from "./Testmonials";
import Talk from "./Talk";

const Home = () => {
  return (
    <div>
      <Theme />
      <Solutions />
      <SimpleMail />
      <Events />
      <Counts />
      <Testimonials />
      <Talk />
    </div>
  );
};

export default Home;
