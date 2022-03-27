import React, { useEffect, useRef, useState } from "react";
import "../Pages/Signin.css";
import { base, tathbetllacountvaldite, elibdibadelfih } from "../../App";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Cards.css";

/*{
    im: "https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?pid=ImgDet&rs=1",
    title: "heelo word",
    des: "qhnlqksdnqjdokazbjd jkffjpiaz,",
  }*/
export default function Createpost() {
  const [post, setpost] = useState({ im: "", title: "", des: "" });
  const { vv, setvv } = useContext(tathbetllacountvaldite);
  const history = useHistory();
  const [im, setFile] = useState("");

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    console.log(im);
    console.log("/file/");
  };
  const handleClick = (event) => {
    event.preventDefault();

    //setvv({ ...vv, post });
    setpost({ ...post, im: prevent });
    setvv([...vv, post]);
    console.log(vv);
    //console.log(vv.post);
    console.log(post);
    // history.push("/HomeAcount");
  };
  const [prevent, setprevent] = useState();
  const [image, setimage] = useState();
  const handleimage = () => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setprevent(reader.result);
        reader.readAsDataURL(image);
      };
    }
  };

  /* useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setprevent(reader.result);
      };
      reader.readAsDataURL(image);
    }
    setpost({ ...post, im: prevent });
  }, [image]);*/
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setprevent(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);
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
                onChange={
                  /*
                  handleChange */ (event) => {
                    const file = event.target.files[0];
                    if (file) {
                      setimage(file);
                    } else {
                    }
                  }
                }
              />
            </div>
          </div>
          <div className="action">
            <button onClick={handleClick}>Register</button>
          </div>
        </form>
        <img src={prevent} />
        <img src={im} />
        {post != undefined ? (
          <div className="bb">
            <section>
              <img className="image" src={post.im} />
              <h1>{post.title}</h1>
              <p className="text-text">{post.des}</p>
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
