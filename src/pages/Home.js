import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../StudyBuddyLogo.png";
import { Helmet } from "react-helmet";
import CountUp from "react-countup";

const Button = styled.a`
  border: 4px solid #ffcb05;
  padding: 12px;
  margin: 24px;
  color: #fafafa;

  transition: all 0.5s;
  &:hover {
    background-color: #ffcb05;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  padding: 10px;
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

const UserCount = styled.div`
  margin: 0px 8px;
  color: #ffcb05;
  font-weight: 800;
`;

const drop = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }

  20% {
    height: 40px;
    opacity: 1;
  }

  90% {
    height: 40px;
    opacity: 1;
  }

  100% {
    height: 0px;
    opacity: 0;
    display: none;
  }
`;

const Banner = styled.div`
  position: absolute;
  top:0%;
  width: 100%;
  background-color: #FFCB05;
  color: #00274C;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${drop} 6s ease-out;
  opacity: 0;
`



export default function Home() {
  const [userCount, setUserCount] = useState(6000);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxP3gykUXOcNunlc7uvzvwPiBcL1h44XzxSjsn3Vvu1vW0XB7U/exec"
    )
      .then((snapshot) => snapshot.json())
      .then((num) => setUserCount(parseInt(num.number)));
  });

  return (
    <>
      <Helmet
        title="UCLA StudyBuddies"
        meta={[
          {
            name: "description",
            content:
              "Get paired with 2 other study buddies in your class at the University of Michigan. We only match you with people we know you will vibe with.",
          },
          {
            name: "og:title",
            content: "UCLA StudyBuddies",
          },
          {
            name: "og:description",
            content:
              "Get paired with 2 other study buddies in your class at the University of Michigan. We only match you with people we know you will vibe with.",
          },
          { name: "og:url", content: "https://ucla.studybuddies.ai" },
          {
            name: "og:image",
            content: "https://ucla.studybuddies.ai/SocialSharing.png",
          },
          {
            name: "twitter:url",
            content: "https://ucla.studybuddies.ai",
          },
          {
            name: "twitter:title",
            content: "UCLA StudyBuddies",
          },
          {
            name: "twitter:description",
            content: "Find study buddies in your classes",
          },
          {
            name: "twitter:image",
            content: "https://ucla.studybuddies.ai/SocialSharing.png",
          },
        ]}
      >
        {/* <link rel="canonical" href="https://umichstudybuddies.com/" /> */}
      </Helmet>
      {/* <Banner>Only Open for SM 203!</Banner> */}
      <div className="App" style={{ height: "88vh", minHeight: "88vh" }}>
        <Logo src={logo} />
        <Heading>UCLA StudyBuddies</Heading>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Join</div>
          <UserCount>
            <CountUp start={6000} end={userCount} />
          </UserCount>
          <div>Bruins</div>
        </div>
        <Button href="/form">Find your Buddy</Button>
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
            study habits (due October 3rd at noon!), we will let you know your Study
            Buddies via email by October 5th.
          </p>
          <p>
            We know that it's pretty hard to study with someone who you aren't
            friends with so we have also included a few personality questions.
            We will use this data to match you up so you can dominate the class
            together.
          </p>
          <p>
            All of this data will be completely private, so you
            have nothing to worry about.
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
            The form will close on October 3rd at noon because we want to
            get you your StudyBuddies by October 5th.
          </p>
        </TextDiv>
      </Section>
    </>
  );
}
