import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Link from "./Link";
import { useState } from "react";
import DropdownMenu from "./DropDownMenu";
import { AiFillCaretDown } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi2";
import SearchBar from "./SearchBar";

const links = [
  { path: "/", text: "홈" },
  { path: "/series", text: "시리즈" },
  { path: "/movie", text: "영화" },
  { path: "/trend", text: "NEW! 요즘 대세 컨텐츠" },
  { path: "/account", text: "내가 찜한 컨텐츠" },
  { path: "/language", text: "언어별로 찾아보기" },
];

const menuItems = [
  "프로필 관련",
  "프로필에서 나가기",
  "프로필 이전",
  "계정",
  "고객센터",
];

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
    <div className="bg-opacity-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="flex items-center justify-between h-16">
        <div className="flex left-2 items-center justify-between z-[100] w-full absolute z-9999">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-red-700 text-4xl font-bold cursor-pointer">
                NETFLIX
              </h1>
            </Link>
            <div className="ml-6 flex items-center ">
              {links.map((link) => (
                <Link key={link.path} to={link.path}>
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {user?.email ? (
            <div className="relative mr-24">
              <div className="px-4 flex">
                <button>
                  <SearchBar />
                </button>

                <button className="text-white text-xl">
                  <HiOutlineBell />
                </button>
                <button
                  className=" text-white font-medium py-2 px-4 rounded flex"
                  onClick={toggleDropdown}
                >
                  {" "}
                  아이콘
                  <AiFillCaretDown className="mt-[5px]" />
                </button>
              </div>

              {isOpen && (
                <DropdownMenu
                  items={menuItems}
                  onLogout={handleLogout}
                  isOpen={isOpen}
                  toggleDropdown={toggleDropdown}
                />
              )}
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
