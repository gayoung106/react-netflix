import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hiden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/20daee97-3054-4bd6-9088-13c2fefc1a54/KR-ko-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl">회원가입</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="rounded p-3 my-2 bg-gray-800 border border-gray-800 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-700 focus:border-gray-700 focus:bg-gray-700 focus:z-10 sm:text-sm"
                type="email"
                placeholder="이메일 주소"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="rounded p-3 my-2 bg-gray-800 border border-gray-800 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-700 focus:border-gray-700 focus:bg-gray-700 focus:z-10 sm:text-sm"
                type="password"
                placeholder="비밀번호"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded">회원가입</button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  로그인 정보 저장
                </p>
                <p>도움이 필요하신가요?</p>
              </div>
              <p className="pt-20">
                <span className="text-gray-700 mr-2">
                  이미 Netflix 회원이신가요?
                </span>
                <Link to="/signin">로그인</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
