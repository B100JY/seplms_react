import React, { useState, useEffect } from "react";
import "../assets/css/admin/login.css";

const LoginFieldSet = ({ savedId, LoginFunction }) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [saveId, setSaveId] = useState(false);

  useEffect(() => {
    //  const savedId = getCookie('EMP_ID');
    setLoginId(savedId || "");
    setSaveId(savedId !== "");
  }, [savedId]);

  const checkCode = (event) => {
    if (event.keyCode === 13) doLogIn();
  };

  const isValidated = () => {
    if (loginId === "") {
      alert("아이디를 입력해주세요");
      return false;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요");
      return false;
    }
    return true;
  };

  const doLogIn = () => {
    if (!isValidated()) return;

    if (LoginFunction) LoginFunction(loginId, password, saveId);
  };

  return (
    <div>
      <fieldset>
        <legend>로그인</legend>
        <p className="id">
          <label htmlFor="user_id">아이디</label>
          <input
            value={loginId}
            id="EMP_ID"
            type="text"
            name="lgn_Id"
            placeholder="아이디"
            style={{ imeMode: "inactive" }}
            onKeyUp={checkCode}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </p>
        <p className="pw">
          <label htmlFor="user_pwd">비밀번호</label>
          <input
            value={password}
            id="EMP_PWD"
            type="password"
            name="pwd"
            placeholder="비밀번호"
            onFocus={(e) => (e.target.placeholder = "")}
            onKeyUp={checkCode}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p className="member_info">
          <input
            checked={saveId}
            id="cb_saveId"
            type="checkbox"
            onChange={() => setSaveId(!saveId)}
          />
          <span className="id_save">ID저장</span>
        </p>
        {/*               <div>
                <a href="/" id="RegisterBtn" name="modal"><strong>[회원가입]</strong></a>
                <a href="/"><strong>[아이디/비밀번호 찾기]</strong></a>
              </div> */}
        <a
          className="btn_login"
          id="btn_login"
          onClick={doLogIn}
          href="{() => false}"
        >
          <strong>Login</strong>
        </a>
      </fieldset>
    </div>
  );
};

export default LoginFieldSet;
