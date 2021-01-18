import React from "react";
import { Helmet } from "react-helmet";

export default function Header({ title, description }) {
  return (
    <>
      <Helmet
        title={title ? `${title} | UCLA StudyBuddies` : "UCLA StudyBuddies"}
        meta={[
          {
            name: "description",
            content: description
              ? description
              : "Get paired with study buddies in your class at UCLA. We only match you with people we know you will vibe with.",
          },
          {
            name: "og:title",
            content: title
              ? `${title} | UCLA StudyBuddies`
              : "UCLA StudyBuddies",
          },
          {
            name: "og:description",
            content: description
              ? description
              : "Get paired with study buddies in your class at UCLA. We only match you with people we know you will vibe with.",
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
            content: title
              ? `${title} | UCLA StudyBuddies`
              : "UCLA StudyBuddies",
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
        <link rel="canonical" href="https://ucla.studybuddies.ai" />
      </Helmet>
    </>
  );
}
