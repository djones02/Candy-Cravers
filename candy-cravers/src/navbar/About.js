import React from "react";

function About() {
  return (
    <div className="about-container" style={{ paddingTop: "80px" }}>
      <div
        className="group-about"
        style={{ display: "flex", marginBottom: "30px" }}
      >
        <div
          className="container"
          style={{
            padding: "16px 48px",
            marginTop: "12px",
            maxWidth: "700px",
            background: "#fafaf9",
            borderRadius: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
            marginLeft: "50px",
            boxShadow: "20px 10px 10px grey",
            borderTopLeftRadius: "30px",
          }}
        >
          <h3 className="about-primary-header" style={{ fontWeight: "500" }}>
            At Candy Cravers, we are on a mission to uplift humanity one sweet
            bite at a time.
          </h3>
          <h2 className="about-secondary-header">
            Candy is nostalgic ~ It brings joy ~ it brings us together.
          </h2>
          <p className="about-candy-text">
            Opening that colorful candy wrapper is like unwrapping a gift on
            Christmas! You know there is something good inside. Decadently
            smooth chocolate, wild-sour tart, or sweet fruity goodness, candy is
            as diverse as every shade of the rainbow. And we want you to be able
            to taste them all. We’re suckers for sweets and love making sure we
            get them into your hands.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            marginTop: "25px",
          }}
          className="container"
        >
          <img
            className="about-img"
            src="https://media.istockphoto.com/id/537927163/photo/candid-candy-floss.jpg?s=612x612&w=0&k=20&c=huL6x7jVb0VllgavkJ8xRy7gyp5OTdF8dleRCKJWZjg="
          ></img>
          <img
            style={{ rotate: "25deg" }}
            className="about-img"
            src="https://images.unsplash.com/photo-1584144051148-8b694c1eb452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMHdpdGglMjBjYW5keXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          ></img>
          <img
            className="about-img"
            src="https://images.unsplash.com/photo-1515121240746-1fc801ba75a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHx3b21hbiUyMHdpdGglMjBjYW5keXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
