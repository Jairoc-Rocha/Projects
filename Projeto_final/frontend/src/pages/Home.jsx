import { useEffect, useState } from "react";
import Product from "../components/Product";
import { ArrowRight, Star, Clock3, Flame } from "lucide-react";

const Home = () => {
  const [category, setCategory] = useState("Hamburger");
  const [products, setProducts] = useState([]);

  const handleChangeCategory = (newCategory) => setCategory(newCategory);

  const getCategoryClass = (categoryName) => {
    const baseClass = "category-button";
    return category === categoryName ? `${baseClass} category-button-active` : baseClass;
  };

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProduct = products.filter((product) => product.category === category);
  const featured = filteredProduct[0] || products[0];

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <main className="page-container home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="hero-eyebrow"><Flame size={16} /> cozinha experimental</span>
          <h1>Experimente. Descubra. Vicie-se.</h1>
          <p>
            Burgers autorais desenvolvidos como experimentos de sabor: ingredientes selecionados, combinações ousadas e pedidos feitos na hora.
          </p>
          <button className="hero-button" type="button">
            Fazer pedido <ArrowRight size={18} />
          </button>
        </div>

        <div className="hero-product">
          <img src={`./${featured?.img || "duplo-da-casa.png"}`} alt="Produto em destaque" />
          <div className="floating-rating">
            <Star size={16} />
            <strong>4.9</strong>
            <span>favorito dos clientes</span>
          </div>
        </div>
      </section>

      <section className="quick-stats">
        <div><Clock3 size={18} /><strong>25 min</strong><span>tempo médio</span></div>
        <div><Star size={18} /><strong>4.9</strong><span>avaliação</span></div>
        <div><Flame size={18} /><strong>100%</strong><span>feito na hora</span></div>
      </section>

      <section className="menu-section" id="cardapio">
        <div className="menu-heading">
          <div>
            <span className="section-eyebrow">Cardápio experimental</span>
            <h2>{category}</h2>
          </div>

          <div className="categories categories-home">
            <div className={getCategoryClass("Hamburger")} onClick={() => handleChangeCategory("Hamburger")}>
              Hamburger
            </div>
            <div className={getCategoryClass("Bebida")} onClick={() => handleChangeCategory("Bebida")}>
              Bebida
            </div>
            <div className={getCategoryClass("Porção")} onClick={() => handleChangeCategory("Porção")}>
              Porção
            </div>
          </div>
        </div>

        <div className="product-list">
          {filteredProduct.map((product) => (
            <Product
              id={product.id}
              description={product.description}
              img={product.img}
              name={product.name}
              price={product.price}
              category={product.category}
              key={product.id}
              setProducts={setProducts}
            />
          ))}
          {filteredProduct.length === 0 && <p className="empty-state">Não há produtos desta categoria</p>}
        </div>
      </section>
    </main>
  );
};

export default Home;
