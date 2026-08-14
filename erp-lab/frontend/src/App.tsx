import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 px-6 py-10">
        <h2 className="text-3xl font-bold">Bem-vindo ao ERP Lab</h2>

        <p className="mt-3 text-slate-300">Sistema de estoque e vendas</p>
      </main>

      <Footer />
    </div>
  );
}
