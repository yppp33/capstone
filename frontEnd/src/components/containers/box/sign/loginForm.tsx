"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { loginFormType } from "@components/model/interfaceModel";
import Link from "next/link";
import "@styles/loginPage.css";

export default function LoginForm() {
  const router = useRouter();

  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputID(e.target.value);
  };
  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPW(e.target.value);
  };

  //   입력을 전달한다.

  function login({ id, password, onSuccess, onFail }: loginFormType) {
    let baseUrl = "https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io";
    let url = baseUrl + "/login";

    let body = {
      id: id,
      password: password,
    };

    axios.post(url, body).then((response) => {
      if (response.status == 200) {
        onSuccess();
      } else {
        onFail();
      }
    });
  }

  const loginFun = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    login({
      id: inputID,
      password: inputPW,
      onSuccess: () => {
        alert("login success");

        /** 사용자 로그인
         *
         * to Back : 로그인 정보
         * return : 사용자 정보를 반영한 -> 카테고리 목록
         */

        console.log("api 주세오 ");

        router.push(`/`);
      },
      onFail: () => {
        alert("fail");
      },
    });
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <form className="borderBox">
          <h1>Login</h1>
          <div className="row">
            <input
              type="text"
              className="login"
              placeholder="id"
              value={inputID}
              onChange={handleInputId}
            ></input>
          </div>

          <div className="row">
            <input
              className="login"
              type="password"
              placeholder="password"
              value={inputPW}
              onChange={handleInputPw}
            ></input>
          </div>
          <Link className="form_btn" href={"./signUp"}>
            회원가입
          </Link>

          <button type="submit" onClick={loginFun} className="form_btn">
            login
          </button>
        </form>
      </div>
    </div>
  );
}
