import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Texth4 = styled.h4`
  max-width: 50%;
  font-size: 22px;
  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 20px;
  }
`;

const Texth1 = styled.h4`
  max-width: 50%;
  font-size: 40px;
  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 32px;
    font-weight: 300;
  }
`;

const Link = styled.link`
  color: white;
  text-decoration: underline;
  }
`;

const Feedback = () => {
  let url = useLocation();

  useEffect(() => {
    pushEmailToSheets();
  });

  function pushEmailToSheets() {
    var formData = new FormData();

    if (url.search != "") {
      formData.append(
        "uniqname",
        url.search
          .substr(1, url.search.indexOf("&") - 1)
          .toLowerCase()
          .trim()
      );
      formData.append(
        "vote",
        url.search
          .substr(url.search.indexOf("&") + 1)
          .toLowerCase()
          .trim()
      );
    }
    fetch(
      "https://script.google.com/macros/s/AKfycbyob70ehjc2iFIa52kNCSeWww8XsIzpirzJEjNKnk1ERQol8RqZsKtATw/exec",
      { method: "POST", body: formData }
    );
    return true;
  }

  return (
    <>
      <Header title="Feedback" />
      <div className="App" style={{ padding: "4px" }}>
        <Texth1>You've been added to the raffle!</Texth1>
        <Texth4>
          We'll use your feedback to improve the StudyBuddies matches for future 
          quarters. <br /> <br />
        </Texth4>
        <Texth4>
          Check out our{" "}
          <a
            href="https://ucla.studybuddies.ai/raffle"
            style={{ color: "#FFF", textDecoration: "underline" }}
          >
            raffle page
          </a>{" "}
          to see who wins!
        </Texth4>
      </div>
    </>
  );
};
export default Feedback;
