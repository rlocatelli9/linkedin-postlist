//Componente Raiz
import React from "react"; //todo lugar que vai usar JSX precisa importar o React
import "./App.css";
import Header from "./components/Header";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <>
      <Header />
      <TimeLine />
    </>
  );
}

export default App;
