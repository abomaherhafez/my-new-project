import React, { useEffect, useRef, useState } from "react";
import "../Pages/Signin.css";
import { base, tathbetllacountvaldite, elibdibadelfih } from "../../App";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

/*{
    im: "https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?pid=ImgDet&rs=1",
    title: "heelo word",
    des: "qhnlqksdnqjdokazbjd jkffjpiaz,",
  }*/
export default function Createpost() {
  const [post, setpost] = useState({ im: "", title: "", des: "" });
  const { lista, setlsita } = useContext(base);
  const { vv, setvv } = useContext(tathbetllacountvaldite);
  const history = useHistory();

  const handleClick = (event, handleimage) => {
    event.preventDefault();

    //setvv({ ...vv, post });
    setvv([...vv, post]);
    console.log(vv);
    //console.log(vv.post);
    console.log(post);
    // history.push("/HomeAcount");
  };
  const [prevent, setprevent] = useState();
  const [image, setimage] = useState();
  /*const handleimage = () => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setprevent(reader.result);
      };
      reader.readAsDataURL(image);
    }
    setpost({ ...post, im: prevent });
  };*/
  /* useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setprevent(reader.result);
        reader.readAsDataURL(image);
      };
    }
    setpost({ ...post, im: prevent });
  }, [image]);*/
  //console.log(prevent);
  return (
    <div className="ss">
      <div className="login-form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h1>create post</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Title"
                onChange={(event) =>
                  setpost({ ...post, title: event.target.value })
                }
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="description"
                onChange={(event) =>
                  setpost({ ...post, des: event.target.value })
                }
              />
            </div>
            <div className="input-field">
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    reader.readAsDataURL(file);
                    setprevent(reader.result);

                    setpost({ ...post, im: prevent });
                  };
                }}
              />
            </div>
          </div>
          <div className="action">
            <button onClick={handleClick}>Register</button>
          </div>
        </form>
        <img src={post.im} />
      </div>
    </div>
  );
}
