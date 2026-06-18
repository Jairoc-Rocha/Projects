import "./App.css";
import Header from "./components/Header";
import WeatherBar from "./components/WeatherBar";

function App() {
  return (
    <div className="min-h-screen bg-verde-950 text-white">
      <WeatherBar />
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-4xl font-bold">Projeto Forest</h1>
        <p className="mt-4 text-verde-200">
          Estamos criando este projeto com React e Tailwind CSS.
        </p>
      </main>
    </div>
  );
}

export default App;
