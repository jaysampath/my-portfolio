import React from "react";
import developer from "../../Assets/home-background.jpg";
import TypeWriter from "./TypeWriter";

function Home() {
  const myStyle = {
    backgroundImage: `url(${developer})`,
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)",
    pointerEvents: "none",
  };
  const textStyle = {
    position: "absolute",
    top: "50%", 
    left: "30%", 
    transform: "translate(-50%, -50%)",
    color: "white", 
    fontSize: "20px",
  };
  return (
    <div style={myStyle}>
      <div style={overlayStyle}></div>
      <div style={textStyle}>
        <h1 style={{ paddingBottom: 15 }}>
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1>
          I'M <strong> Jaya Sampath</strong>{" "}
        </h1>
        <div className="heading-type" style={{ color: "white" }}>
          <TypeWriter />
        </div>
      </div>
    </div>
  );
}

export default Home;
