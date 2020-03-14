//Componente Raiz
import React from "react"; //todo lugar que vai usar JSX precisa importar o React
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
