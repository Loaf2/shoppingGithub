import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import "./App.css";

export const CounterContext = React.createContext();

export default function App() {
  const [amount, setAmount] = useState(0);


  return (
    <CounterContext.Provider value={{ amount, setAmount }}>
      <Header />
      <Content />
    </CounterContext.Provider>
  );
}
