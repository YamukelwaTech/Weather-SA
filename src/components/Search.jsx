import React from "react";
import PrimaryButton from "./button/PrimaryButton";

const Search = ({ city, setCity, onSearch, placeholder, loading }) => {
  return (
    <form className="flex justify-center mb-4 input2" onSubmit={onSearch}>
      <input
        placeholder={placeholder}
        autoComplete="off"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2.5 px-2 bg-white border-none focus:outline-none text-black text-sm"
      />
      <PrimaryButton sx="p-1.5 px-2 inline" disabled={loading} type="submit" />
    </form>
  );
};

export default Search;
