import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../StudyBuddyLogo.png";
import Header from "../components/Header";
import CountUp from "react-countup";
import { Button, UserCount } from "../components/styles"; // styles used for shared styles
import ReactGA from 'react-ga';

const Heading = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  padding: 10px;
  font-weight: 400;
`;

const Logo = styled.img`
  max-height: 40vh;
  margin-top: 30px;
`;

const Section = styled.section`
  text-align: center;
  padding: 50px;
  color: #333;
  background-color: ${(props) => props.backgroundColor};
`;

const TextDiv = styled.div`
  max-width: 40em;
  margin: 0 auto;
  font-size: 18px;
  text-align: justify;
  text-justify: inter-word;
`;

export default function Home() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzwc7T1NUAcXzwqXvGu7BpFmQtJudGhWMYSV47Y9Z8kRXi8aIQ/exec"
    )
      .then((snapshot) => snapshot.json())
      .then((num) => setUserCount(parseInt(num.number)));
  });

  return (
    <>
      <Header />
      <div className="App" style={{ height: "88vh", minHeight: "88vh" }}>
        <Logo src={logo} />
        <Heading>UCLA StudyBuddies</Heading>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          <div>Like a dating site but for finding a study group</div>
          {/* <div>Join</div>
          <UserCount>
            <CountUp start={0} end={userCount} />
          </UserCount>
          <div>Bruins</div> */}
        </div>
        <Button
          onClick={() => {
            ReactGA.event({
              category: "Navigation",
              action: "Click",
              label: "Find your Buddy",
            });
          }}
          href="/form"
        >
          Find your Buddies
        </Button>
      </div>
      <Section backgroundColor="#fefefe">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>What is this?</h1>
          <p>
            We realize Zoom University makes it kinda hard to — you know —
            actually make friends in your classes. And let’s face it, every
            class is more bearable when you have friends with fire explanations
            the day before your midterm.{" "}
          </p>
          <p>
            So, we created this study buddy matching service to make sure being
            virtual doesn’t stop you from finding the friends that can help you
            get that shiny A.
          </p>
        </TextDiv>
      </Section>
      <Section backgroundColor="#f2f2f2">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>How does it work?</h1>
          <p>
            Once you complete the form by entering your class and some of your
            study habits (due October 3rd at noon!), we will let you know your
            Study Buddies via email by October 5th.
          </p>
          <p>
            We know that it's pretty hard to study with someone who you aren't
            friends with so we have also included a few personality questions.
            We will use this data to match you up so you can dominate the class
            together.
          </p>
          <p>
            All of this data will be completely private, so you have nothing to
            worry about.
          </p>
        </TextDiv>
      </Section>
      <Section backgroundColor="#FFFFF">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>FAQ</h1>

          <p>
            <b>Can I fill the form out for more than one class?</b>
          </p>
          <p>
            Yes! You’re encouraged to. We’d love to give you a group of
            studybuddies for every class you’re taking this semester.
          </p>
          <p>
            <b>When is the last day I can fill this out?</b>
          </p>
          <p>
            The form will close on October 3rd at noon because we want to get
            you your StudyBuddies by October 5th.
          </p>
        </TextDiv>
      </Section>
    </>
  );
}
