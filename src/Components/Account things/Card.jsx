import "./Cards.css";
import React, { useState } from "react";
import { tathbetllacountvaldite } from "../../App";
import { useContext } from "react";
import "../Account things/HomeAcount.css";

export default function Card(props) {
  return (
    <div className="cont-tarki7">
      {props.vv[0] != undefined
        ? props.vv[0].map((e) => (
            <div className="bb">
              <section>
                <img className="image" src={e.im} />
                <h1>{e.title}</h1>
                <p className="text-text">{e.des}</p>
              </section>
            </div>
          ))
        : ""}
      {props.vv[1] != undefined
        ? props.vv.map((e) => (
            <div className="bb">
              <section>
                <img className="image" src={e.im} />
                <h1>{e.title}</h1>
                <p className="text-text">{e.des}</p>
              </section>
            </div>
          ))
        : ""}
      {props.vv[2] != undefined ? (
        <div className="bb">
          <section>
            <img className="image" src={props.vv[2].im} />
            <h1>{props.vv[2].title}</h1>
            <p className="text-text">{props.vv[2].des}</p>
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
