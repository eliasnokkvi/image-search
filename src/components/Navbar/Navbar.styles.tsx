import React, { useState } from "react";
import styled from "styled-components";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 16px 0px;
  position: relative;
  border-bottom: 2px solid #dfe1e5;
`;

export const Title = styled.h1`
  font-weight: 600;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;

  padding: 0px 8px;
  border: 1px solid #dfe1e5;
  border-radius: 22px;

  background: #fff;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  line-height: 36px;
  height: 36px;

  font-size: 16px;
  outline: none;

  background: transparent;
  border: none;
  flex: 1;
`;

export const SearchButton = styled.button`
  width: 40px;
  padding: 16px;

  border: none;
  background: transparent;
  outline: none;
`;

export const SearchIcon = styled(SearchAlt)`
  width: 20px;
  height: 20px;

  :hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    transition: transform 0.1s ease-in-out;
  }
`;
