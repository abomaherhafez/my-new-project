import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  base,
  tathbetllacountvaldite,
  elibdibadelfih,
  elelemen,
} from "../../App";
import "./Signin.css";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const { vv, setvv } = useContext(tathbetllacountvaldite);
  const { valditon, setvalditon } = useContext(elibdibadelfih);
  const { elemnt, setelemnt } = useContext(elelemen);
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  const { lista, setlsita } = useContext(base);
  const handleClick = () => {
    const res = lista.find((e) => {
      if (e.email === user.email && e.password === user.password) {
        setvv([...vv, e.posts]);
        setvalditon(true);
        // setelemnt(e);
        console.log("this is e" + vv);
        //console.log(e.posts);

        return true;
      } else {
        return false;
      }
    });

    if (res != undefined) {
      history.push("/HomeAcount");
    }

    //  console.log("this is vv");
    //console.log(vv);
    //console.log(vv.im[0].im);
  };
  //console.log("this is valdtion");

  // console.log(valditon);
  return (
    <div class="login-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1>Login</h1>
        <div class="content">
          <div class="input-field">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            :
          </div>
          <div class="input-field">
            <input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
          </div>
        </div>
        <div class="action">
          <button>
            <Link to="/createAccount">Register</Link>
          </button>

          <button onClick={handleClick}> Sign in</button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
