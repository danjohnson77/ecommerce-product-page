import { useState } from "react";
import styles from "../styles/Nav.module.scss";
import Cart from "../components/Cart";

const Nav = ({ overlayOpen, setOverlayOpen, cartItems, setCartItems }) => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.overlay}
          style={{
            height: overlayOpen ? "100vh" : "0vh",
            opacity: overlayOpen ? "0.9" : "0",
            transition: "height 0ms 0ms, opacity 600ms 0ms",
          }}
        ></div>
        <div className={styles.menuOpen}>
          <input
            type="checkbox"
            name="open"
            className={styles.toggle}
            onClick={() => {
              setOpen(!open);
              setOverlayOpen(!overlayOpen);
            }}
            aria-label="Open Navigation Menu"
          />
          <img src={`../images/icon-${open ? "close" : "menu"}.svg`} alt="Menu Icon" aria-label="Menu Icon" />
        </div>
        <img src="../images/logo.svg" alt="Sneakers Logo" aria-label="Sneakers Logo" />
        <span
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
          className={styles.cartIcon}
        >
          <span className={styles.quantityWrap}>
            <span className={styles.quantity} style={{ display: cartItems.length > 0 ? "inline" : "none" }}>
              {cartItems[0]?.quantity}
            </span>
          </span>
          <img src="../images/icon-cart.svg" alt="Shopping Cart Icon" aria-label="Shopping Cart Icon" />
          <Cart open={cartOpen} cartItems={cartItems} setCartItems={setCartItems} />
        </span>
        <span className={styles.avatar}>
          <img src="../images/image-avatar.png" alt="User Avatar" aria-label="User Avatar" />
        </span>

        <nav style={{ transform: open && "none" }}>
          <ul>
            <li>
              <a>Collections</a>
            </li>
            <li>
              <a>Men</a>
            </li>
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
