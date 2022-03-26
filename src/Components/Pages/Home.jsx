import React from "react";
import Cardsforhomr from "../Account things/Cardsforhomr";
import OurTeam from "../Account things/OurTeam";
import Threecards from "../Account things/Threecards";
import "./Home.css";

export default function Home() {
  return (
    <div className="tarki7elifiwesto">
      <h2 className="fo9ta7t">welcome to blog-blog</h2>
      <h2>who we are </h2>
      <Threecards />
      <h2>some of our users post </h2>
      <Cardsforhomr />

      <OurTeam />
    </div>
  );
}
