"use client";

import React, { useState } from "react";

type Props = {
  className?: string;
};

export default function SearchBar({ className }: Props) {
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setSearchBarValue(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchBarValue}
        className={className}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}
