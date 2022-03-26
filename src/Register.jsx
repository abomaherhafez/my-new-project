import React from "react";
import "./Register.css";
import { useState, useContext } from "react";
import { base } from "./App";
import { useHistory } from "react-router-dom";

export default function Register() {
  const { lista, setlista } = useContext(base);
  const history = useHistory();

  const [data, setdata] = useState({
    nome: "",
    firstname: "",
    email: "",
    passwoed: "",
  });
  const handleClick = () => {
    if (
      data.nome != null &&
      data.firstname != null &&
      data.email != null &&
      data.passwoed != null
    ) {
      setlista([
        ...lista,
        {
          name: data.firstname,
          lastname: data.nome,
          email: data.email,
          password: data.passwoed,
          posts: [],
        },
      ]);
    }
    history.push("/sign-in");

    console.log(lista);
  };
  return (
    <div className="ss">
      <div className="login-form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h1>Register</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                placeholder="First Name"
                onChange={(event) =>
                  setdata({ ...data, firstname: event.target.value })
                }
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Last Name"
                onChange={(event) =>
                  setdata({ ...data, nome: event.target.value })
                }
              />
            </div>
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                onChange={(event) =>
                  setdata({ ...data, email: event.target.value })
                }
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                onChange={(event) =>
                  setdata({ ...data, passwoed: event.target.value })
                }
              />
            </div>
          </div>
          <div className="action">
            <button onClick={handleClick}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
