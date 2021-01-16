import React, { useState } from "react";
import {
  NavContainer,
  NavContent,
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
} from "./Navbar.styles";

interface Props {
  submitSearch: (searchValue: string) => void;
  setSearchValue: (value: string) => void;
  searchValue: string;
}

export const Navbar: React.FC<Props> = ({
  submitSearch,
  searchValue,
  setSearchValue,
}) => {
  const handleInput = (inputEvent: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(inputEvent.target.value);
  };

  console.log("inside navbar");

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (searchValue) {
      submitSearch(searchValue);
    }
  };

  return (
    <NavContainer>
      <NavContent>
        <Title>Myndaleit</Title>
        <form onSubmit={(e) => handleSubmit(e)}>
          <SearchContainer>
            <SearchInput
              placeholder="Leitarorð"
              onChange={(e) => handleInput(e)}
            />
            <SearchButton onClick={(e) => handleSubmit(e)}>
              <SearchIcon />
            </SearchButton>
          </SearchContainer>
        </form>
      </NavContent>
    </NavContainer>
  );
};
