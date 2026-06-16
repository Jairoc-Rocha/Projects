import { useState, useEffect } from "react";

import Button from "../components/Button";
import { apiFetch } from "../services/api.js";
import { formatterPrice } from "../utils/formatterPrice.js";

import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    try {
      const response = await apiFetch("/get-products");
      const data = await response.json();

      console.log("Produtos recebidos da API:", data);

      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.log("Erro ao buscar produtos:");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <main className="home-page">
        <section className="hero">
          <div className="hero-content">
            <span className="hero-label">BURGER LAB</span>
            <h1>
              Experimente. <br /> Descubra. <br /> Vicie-se.
            </h1>
            <p>
              Hambúrgueres artesanais criados como experiências de laboratório:
              ingredientes selecionados, combinações intensas e sabor de
              verdade.
            </p>
            <div className="hero-actions">
              <Button title="Ver cardápio" />
              <Button title="Criar conta" variant="outline" />
            </div>
          </div>
          <div className="hero-card">
            <span className="hero-card-tag">Mais pedido</span>
            <div className="hero-burger-icon">🍔</div>
            <h2>Lab Smash</h2>
            <p>
              Burger artesanal com cheddar, cebola caramelizada e molho especial
              da casa.
            </p>
            <strong>R$ 29,90</strong>
          </div>
        </section>

        <section className="products-section">
          <div className="section-heading">
            <span>Cardápio</span>
            <h2>Experimentos disponíveis</h2>
            <p>Escolha seu burger, porção ou bebida favorita.</p>
          </div>

          {loading ? (
            <p className="products-feedback">Carregando produtos...</p>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">🍔</div>
                  <div className="product-info">
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-footer">
                      <strong>{formatterPrice(product.price)}</strong>
                      <Button title={`Adicionar`} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
