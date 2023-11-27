import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginFieldSet from "../components/LoginFieldSet.jsx";
import LoginLogo from "../components/LoginLogo.jsx";
import { getCookie, saveCookie } from "../utils/CookieUtils.js";
//import '../assets/css/admin/login.css';

const LoginForm = () => {
  const history = useNavigate();
  const [lgnId, setLgnId] = useState("");
  //  const [pwd, setPwd] = useState("");
  const [, setSaveId] = useState(false);

  useEffect(() => {
    const savedID = getCookie("EMP_ID");
    setLgnId(savedID || "");
    setSaveId(savedID !== "");
  }, []);

  const fLoginProc = (loginId, password, saveId) => {
    console.log("Proc login,,,");
    saveCookie("EMP_ID", loginId, saveId ? 7 : -1);
    // Replace the axios.post call with your preferred HTTP request method
    // and handle the response accordingly.
    // The following code is a placeholder.
    console.log("Simulating login...");
    setTimeout(() => {
      const data = { result: "SUCCESS" }; // Simulated response
      if (data.result === "SUCCESS") {
        console.log("Login successful");
        // Handle successful login
        history.push("/dashboard/home");
      } else {
        alert("ID 혹은 비밀번호가 틀립니다");
      }
    }, 1000);
  };

  return (
    <form id="myForm" action="" method="post">
      <div id="background_board">
        <div className="login_form shadow" align="center">
          <div className="login-form-right-side" style={{ fontSize: "15px" }}>
            <LoginLogo />
          </div>
          <div className="login-form-left-side">
            <LoginFieldSet savedId={lgnId} LoginFunction={fLoginProc} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
