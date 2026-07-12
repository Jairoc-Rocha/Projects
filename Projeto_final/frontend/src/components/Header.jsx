import { Link, useLocation } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus, Menu, UserRound } from "lucide-react";
import Cart from "./Cart";
import { CartItemContext } from "../contexts/CartItemsContext";
import BrandMark from "./BrandMark";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartItemContext);
  const location = useLocation();

  const handleAuthUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/me", { credentials: "include" });
      if (response.status !== 200) return;
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        credentials: "include",
        method: "POST",
      });

      if (!response.ok) return;
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-cart-items", { credentials: "include" });
      if (!response.ok) return;
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAuthUser();
    getCartItems();
  }, []);

  const getNavItemClass = (path) => {
    const baseClass = "admin-nav-item";
    return location.pathname === path ? `${baseClass} admin-nav-item-active` : baseClass;
  };

  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {showCart && <Cart setShowCart={setShowCart} showCart={showCart} />}
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo-link">
            <BrandMark compact />
          </Link>

          <nav className="main-nav">
            <Link to="/">Cardápio</Link>
            <Link to="/pedidos">Pedidos</Link>
            <a href="#combos">Combos</a>
            <a href="#sobre">Sobre</a>
          </nav>

          {user ? (
            <div className="header-user-area">
              {user.admin && (
                <div className="admin-nav">
                  <Link to="/">
                    <div className={getNavItemClass("/")}>
                      <Box size={18} />
                    </div>
                  </Link>
                  <Link to="/pedidos">
                    <div className={getNavItemClass("/pedidos")}>
                      <LayoutDashboard size={18} />
                    </div>
                  </Link>
                  <div className="admin-nav-item">
                    <Plus size={18} />
                  </div>
                </div>
              )}

              <button className="cart-icon-wrapper" type="button" onClick={() => setShowCart(!showCart)}>
                <ShoppingCart size={18} />
                <span className="cart-badge">{cartQuantity}</span>
              </button>

              <div className="user-info">
                <UserRound size={18} />
                <p>{user.name}</p>
                <LogOut size={18} className="cursor-pointer" onClick={() => handleLogout()} />
              </div>
            </div>
          ) : (
            <Link to="/login">
              <div className="login-button-header">Entrar</div>
            </Link>
          )}

          <button className="menu-button" type="button">
            <Menu size={20} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
