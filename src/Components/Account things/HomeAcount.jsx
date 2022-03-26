import React, { useState } from "react";
import Card from "./Card";
import { useContext, useEffect } from "react";
import "../Account things/HomeAcount.css";
import { base, tathbetllacountvaldite } from "../../App";
function getValue() {
  return localStorage.getItem("nameOfItem");
}
getValue();
var username = localStorage.getItem("nameOfItem"); // get the key
console.log(username);
export default function HomeAcount() {
  const { vv, setvv } = useContext(tathbetllacountvaldite);
  const { lista, setlsita } = useContext(base);
  React.useEffect(() => {
    console.log("component updated");
  });

  useEffect(
    (vv) => {
      if (vv) {
        setvv(vv);
      }
    },
    [vv]
  );
  return (
    <div className="cont-tarki7">
      <h2>you'r posts</h2>
      <Card vv={vv} />
    </div>
  );
}
