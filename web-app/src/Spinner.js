
  /* User Experience while the page loads */
//shows the loading state of the project


import React from "react";
//loader --> alerts the user to wait for an activity to complete
//dimmer --> hides distractions to focus attention on particular content
import { Loader, Dimmer } from "semantic-ui-react";

const Spinner = () => (
  <Dimmer active>
    <Loader size="huge" content={"Preparing Chat..."} />
  </Dimmer>
);

export default Spinner;
