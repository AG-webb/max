import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue !== "") {
      // dispatch(searchChats({ query: inputValue }));
    }
  };

  return (
    <form className="chat-search">
      <div className="w-full h-9">
        <input
          className="w-full bg-dark-tertiary outline-none h-full px-3 text-[15px] rounded-xl font-normal"
          type="text"
          name="searchQuery"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.code === "Enter") handleSearch();
          }}
          value={inputValue}
          placeholder="Search"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default Search;
