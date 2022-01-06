import React from "react";
import { GoSearch } from "react-icons/go";

export default function Search(props) {
  return (
    <div className="search">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-gray-300 ml-2 mt-2" viewBox="0 0 20 20">
            <GoSearch />
          </svg>
        </span>
        <input
          className="placeholder:text-gray-400 block w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          name="search"
          placeholder="Search a city..."
          onChange={() => props.weather()}
        />
      </label>
    </div>
  );
}
