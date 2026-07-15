import "./App.css";

// 2 - reaproveitamento de estrura principal com o componente base App
import { Outlet } from "react-router";

// 4 - Navegação entre páginas
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>React router</h1>
      {/* 2 - reaproveitamento de estrura principal com o componente base App*/}
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
