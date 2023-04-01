import React from "react";

function DropdownMenu({ items, onLogout, isOpen, toggleDropdown }) {
  return (
    <>
      {isOpen && (
        <ul className="absolute bg-black/90 text-white rounded mt-1 w-[200px] mr-[100px]">
          {items.map((item) => (
            <li
              key={item}
              className="p-2 font-thin text-sm hover:underline transition-all duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
          <hr />
          <li className="p-2 font-thin text-sm hover:underline transition-all duration-300 cursor-pointer m-2 flex justify-center">
            <button onClick={onLogout}>넷플릭스에서 로그아웃</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default DropdownMenu;
