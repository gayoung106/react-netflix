import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative">
      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        {visible && (
          <div className="relative">
            <input
              type="text"
              placeholder="title, person, genre"
              className="p-2 border-wihte bg-transparent pl-10"
            />
            <button
              className="absolute inset-y-0 left-0 flex items-center justify-center p-2 text-white"
              onClick={toggleVisible}
            >
              <HiMagnifyingGlass size={20} />
            </button>
          </div>
        )}
        {!visible && (
          <button className="text-white text-xl mr-4" onClick={toggleVisible}>
            <HiMagnifyingGlass size={20} />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
