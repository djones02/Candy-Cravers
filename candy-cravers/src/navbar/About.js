import React from "react";

function About() {
  return (
    <div>
      <div
        className="container"
        style={{
          padding: "16px 32px",
          marginTop: "100px",
          maxWidth: "660px",
          background: "#fafaf9",
          borderRadius: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <h3 className="about-primary-header">
          At Candy Cravers, We are on a mission to uplift humanity one sweet
          bite at a time.
        </h3>
        <h2 className="about-secondary-header">
          "Candy is nostalgic ~ It brings joy ~ it brings us together."
        </h2>
        <p className="about-candy-text">
          Candy is nostalgic ~ It brings joy ~ it brings us together. Candy is
          nostalgic ~ It brings joy ~ it brings us together. Opening that
          colorful candy wrapper is like unwrapping a gift on Christmas! You
          know there is something good inside. Decadently smooth chocolate,
          wild-sour tart, or sweet fruity goodness, candy is as diverse as every
          shade of the rainbow. And we want you to be able to taste them all.
          We’re suckers for sweets and love making sure we get them into your
          hands.
        </p>
      </div>
    </div>
  );
}

export default About;
