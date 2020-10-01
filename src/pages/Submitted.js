import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Button } from "../components/styles"; // styles used for shared styles
import ReactGA from "react-ga";

const Texth4 = styled.h4`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Submitted = () => {
  return (
    <>
      <Header title="Submitted" />
      <div className="App">
        <h1>Congrats, and good luck!</h1>
        <Texth4>
          You will hear back from us via email on October 8th with your study
          buddies!
        </Texth4>
        <Button
          onClick={() => {
            ReactGA.event({
              category: "Navigation",
              action: "Click",
              label: "Another Class",
            });
          }}
          href="/form"
        >
          Another Class
        </Button>
      </div>
    </>
  );
};
export default Submitted;
