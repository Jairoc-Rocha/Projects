// Aqui importamos as ferramentas de rota.
// O BrowserRouter ativa a navegação no navegador. O Routes agrupa as rotas. O Route cria cada caminho.
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pedidos from "./pages/Pedidos";

function App() {
  return (
    // Aqui começa o sistema de rotas.
    <BrowserRouter>
      {/* Aqui começa o grupo das rotas */}
      <Routes>
        {/* Agora temos as rotas individuais */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
