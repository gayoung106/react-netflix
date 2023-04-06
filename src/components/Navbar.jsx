import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Link from "./Link";

const links = [
  { path: "/", text: "홈" },
  { path: "/pick", text: "Pick!" },
];

const Navbar = () => {
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

  return (
    <div className="bg-opacity-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="flex items-center justify-between h-16">
        <div className="flex pr-5 left-2 items-center justify-between z-[100] w-full absolute z-9999">
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
            <div>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
              >
                logout
              </button>
            </div>
          ) : (
            <div className="flex">
              <Link to="/login">
                <button className="text-white ">LOGIN</button>
              </Link>
              <Link to="/signup">
                <button className="text-white">JOIN</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
