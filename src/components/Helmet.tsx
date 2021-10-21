import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

const Helmet = () => {
  return (
    <ReactHelmet>
      <title>Tesonet Gatsby Weather App Task</title>
      <meta
        name="Tesonet Weather App"
        content="Tesonet Gatsby Weather App Task"
      />
      <meta name="referrer" content="origin" />
      <link
        rel="icon"
        href="https://tesonet.com/wp-content/themes/tesonet-theme/dist/images/favicon/favicon-32x32.png"
      />
    </ReactHelmet>
  );
};

export default Helmet;
