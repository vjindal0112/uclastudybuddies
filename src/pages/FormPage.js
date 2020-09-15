import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import "../App.css";

export default function FormPage() {
  return (
    <>
      <Header title="Form" description="Fill out this form to get paired with study buddies in your class at UCLA. We only match you with people we know you will vibe with."/>

      {/* <Banner>Only open for SM 203!</Banner> */}
      <div className="App">
        <Form />
      </div>
    </>
  );
}
