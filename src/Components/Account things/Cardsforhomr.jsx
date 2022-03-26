import "./Cards.css";
import React from "react";
import { base } from "../../App";
import { useContext } from "react";
import "../Account things/HomeAcount.css";

export default function Cardsforhomr() {
  const { lista, setlsita } = useContext(base);

  return (
    <div className="cont-tarki7">
      {lista.map((e) =>
        e.posts.map((post) => (
          <div className="bb">
            <section>
              <img className="image" src={post.im} />
              <h1>{post.title}</h1>
              <p className="text-text">{post.des}</p>
            </section>
          </div>
        ))
      )}
    </div>
  );
}
