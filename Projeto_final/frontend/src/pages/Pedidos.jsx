import { useState } from "react";
import CardPedido from "../components/CardPedido";
import { TrendingUp, WalletCards, ClipboardList, ChefHat } from "lucide-react";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");

  const handleChangeCategory = (newCategory) => setCategory(newCategory);

  const getCategoryClass = (categoryName) => {
    const baseClass = "category-button";
    return category === categoryName ? `${baseClass} category-button-active` : baseClass;
  };

  return (
    <main className="page-container orders-page">
      <section className="orders-hero">
        <div>
          <span className="section-eyebrow">Painel Kitchen Lab</span>
          <h1>Controle de pedidos</h1>
          <p>Acompanhe pedidos, faturamento e status da operação em uma tela com cara de dashboard moderno.</p>
        </div>
        <div className="dashboard-metrics">
          <div><ClipboardList size={18} /><strong>23</strong><span>Pedidos hoje</span></div>
          <div><WalletCards size={18} /><strong>R$ 1.256,80</strong><span>Faturamento</span></div>
          <div><ChefHat size={18} /><strong>8</strong><span>Em preparo</span></div>
          <div><TrendingUp size={18} /><strong>4.8</strong><span>Avaliação</span></div>
        </div>
      </section>

      <div className="categories categories-orders">
        <div className={getCategoryClass("Pendente")} onClick={() => handleChangeCategory("Pendente")}>
          Pendente
        </div>
        <div className={getCategoryClass("Retirado")} onClick={() => handleChangeCategory("Retirado")}>
          Retirado
        </div>
        <div className={getCategoryClass("Cancelado")} onClick={() => handleChangeCategory("Cancelado")}>
          Cancelado
        </div>
      </div>

      <div className="orders-grid">
        <CardPedido id={2} name="Odair Michael" date="27/12/2027" orderTime="21:00" deliveredTime="21:15" total={124.75} />
        <CardPedido id={3} name="João Silva" date="27/12/2027" orderTime="21:10" deliveredTime="" total={58.9} />
        <CardPedido id={4} name="Ana Beatriz" date="27/12/2027" orderTime="21:20" deliveredTime="" total={89.4} />
      </div>
    </main>
  );
};

export default Pedidos;
