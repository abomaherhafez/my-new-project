import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Pages/Home.jsx";
import SignIn from "./Components/Pages/SignIN.jsx";
import NavBar from "./Components/Navbar/NavBar";
import Register from "./Register";
import { createContext } from "react";
import HomeAcount from "./Components/Account things/HomeAcount.jsx";
import { Switch } from "react-router-dom";
import Createpost from "./Components/Account things/Createpost.jsx";
import Threecards from "./Components/Account things/Threecards.jsx";
import Footer from "./Components/Footer/Footer.jsx";
export const tathbetllacountvaldite = createContext({});
export const elelemen = createContext({});

export const base = createContext({});
export const elibdibadelfih = createContext({});
function App() {
  const [valditon, setvalditon] = useState(false);
  const [elemnt, setelemnt] = useState({});

  const [lista, setlista] = useState([
    {
      name: "ahmed",
      lastname: "abo7med",
      email: "ahmed@ahmed.com",
      password: "ahmed123",
      posts: [
        {
          im: "https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?pid=ImgDet&rs=1",
          title: "heelo word",
          des: "qhnlqksdnqjdokazbjd jkffjpiaz,",
        },
        {
          im: "https://img-19.commentcamarche.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
          title: "sciencre",
          des: "gfsqhkgjlfdkuglq cksdhqsl :dbuvqshb ibc iqhsd",
        },
        {
          im: "https://img-19.commentcamarche.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
          title: "sciencre",
          des: "gfsqhkgjlfdkuglq cksdhqsl :dbuvqshb ibc iqhsd",
        },
        {
          im: "https://img-19.commentcamarche.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
          title: "sciencre",
          des: "gfsqhkgjlfdkuglq cksdhqsl :dbuvqshb ibc iqhsd",
        },
      ],
    },
    {
      name: "mohammad",
      lastname: "abo7med",
      email: "mohammad@ahmed.com",
      password: "mohammd123",
      posts: [
        {
          im: "https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?pid=ImgDet&rs=1",
          title: "hesqddsqo word",
          des: "qhnlqkhgjhkjsdlkms qqqqqqqqq qqqqqqqqqqqqz,",
        },
        {
          im: "https://img-19.commentcamarche.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
          title: "sqknqqqqqqqqq",
          des: "gfsqhkgjlfdkuglq ckbvn slqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqq",
        },
      ],
    },
  ]);

  const [vv, setvv] = useState([]);
  return (
    <>
      <tathbetllacountvaldite.Provider value={{ vv, setvv }}>
        <base.Provider value={{ lista, setlista }}>
          <elibdibadelfih.Provider value={{ valditon, setvalditon }}>
            <elelemen.Provider value={{ elemnt, setelemnt }}>
              <Router>
                <NavBar />

                <div className="pages">
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/sign-in">
                      <SignIn />
                    </Route>

                    <Route path="/createAccount">
                      <Register />
                    </Route>
                    <Route path="/createpost">
                      <Createpost />
                    </Route>
                    <Route path="/HomeAcount">
                      <HomeAcount />
                    </Route>
                    <Route path="/ssssssss">
                      <Threecards />
                    </Route>
                  </Switch>
                </div>
                <Footer />
              </Router>
            </elelemen.Provider>
          </elibdibadelfih.Provider>
        </base.Provider>
      </tathbetllacountvaldite.Provider>
    </>
  );
}

export default App;
