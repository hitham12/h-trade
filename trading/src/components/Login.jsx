import "./login.css";
import { useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
const Login = () => {
  const [allUsers, setAllUsers] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  /////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /////
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    axios.get("http://localhost:4001/trading/api").then((res) => {
      setAllUsers(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const found = allUsers.find((f) => f.email === email);
      if (found) {
        if (found.password === password) {
          console.log("sababa login");
          setIsLoggedIn(false);
        } else {
          setPasswordErrorMessage("Invalid passeord");
        }
      } else {
        setPasswordErrorMessage("Invalid email");
      }
    } else {
      setPasswordErrorMessage("Please fill in all inputs!");
    }

    ////////////////////////////
    // e.preventDefault();

    // let tempUser = allUsers.filter(
    //   (item) =>
    //     item.email === emailRef.current.value &&
    //     item.password === passwordRef.current.value
    // );

    // if (emailRef.current.value.length === 0) {
    //   setEmailErrorMessage("Please Enter An Email");
    //   setTimeout(() => {
    //     setEmailErrorMessage("");
    //   }, 3000);
    // } else if (passwordRef.current.value.length === 0) {
    //   setPasswordErrorMessage("Please Enter A Password");
    //   setTimeout(() => {
    //     setPasswordErrorMessage("");
    //   }, 3000);
    // } else if (!tempUser.length) {
    //   setWrongEmailOrPassword("Wrong Email Or Password");
    //   setTimeout(() => {
    //     setWrongEmailOrPassword("");
    //   }, 3000);
    // } else if (tempUser.length) {
    //   setIsLoggedIn(false);
    // }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="allLogin">
          <div className="containerForAll">
            <form autoComplete="off">
              <h2>Login Form</h2>
              <div className="containerLogin">
                <label htmlFor="uname">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  ref={emailRef}
                  name="uname"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span style={{ color: "red", fontSize: "12px" }}>
                  {emailErrorMessage}
                </span>{" "}
                <br />
                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  ref={passwordRef}
                  name="psw"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span style={{ color: "red", fontSize: "12px" }}>
                  {passwordErrorMessage}
                </span>{" "}
                <br />
                <span style={{ color: "red", fontSize: "12px" }}>
                  {wrongEmailOrPassword}
                </span>{" "}
                <br />
                <button type="submit" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="containerForLogginAccepted">
          <p className="thanks">'Wellcome to H-Trade'</p>
          <div>
            <p className="finsihText"></p>
            <div className="thankYou">
              Thank you for choosing us to trade in the most correct and
              efficient way possible
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
