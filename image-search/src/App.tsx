import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar/Navbar";
import { Main } from "./pages/Main";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/index";
import GlobalStyle from "./theme/GlobalStyle";

const App = () => {
  return <Main />;
};

export default App;
