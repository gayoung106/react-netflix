import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Link from "./Link";
import { useState } from "react";

const links = [
  { path: "/", text: "홈" },
  { path: "/series", text: "시리즈" },
  { path: "/movie", text: "영화" },
  { path: "/trend", text: "NEW! 요즘 대세 컨텐츠" },
  { path: "/favorite", text: "내가 찜한 컨텐츠" },
  { path: "/language", text: "언어별로 찾아보기" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [scroll, setScroll] = useState(false);

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  //console.log(user.email);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    // <nav
    //   className={`bg-${
    //     scroll ? "gray" : "white"
    //   } transition-all duration-500 ease-in-out shadow-lg fixed top-0 left-0 w-full z-10`}
    // >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex top-0 items-center justify-between p-4 z-[100] w-full absolute z-9999">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-red-700 text-4xl font-bold cursor-pointer">
                NETFLIX
              </h1>
            </Link>
            {/* <div className="ml-6 flex items-center ">
              {links.map((link) => (
                <Link key={link.path} to={link.path}>
                  {link.text}
                </Link>
              ))}
            </div> */}
          </div>

          {user?.email ? (
            <div>
              <Link to="/account">
                <button className="text-white pr-4">계정</button>
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="text-white pr-4">로그인</button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                  회원가입
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    // </nav>
  );
};

export default Navbar;
