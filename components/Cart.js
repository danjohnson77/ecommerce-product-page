import styles from "../styles/Cart.module.scss";

const Cart = ({ open, cartItems, setCartItems }) => {
  const handleDelete = (id) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const renderItems = () => {
    if (cartItems.length > 0) {
      const list = cartItems.map((item, i) => {
        const { price, quantity, id, name } = item;
        return (
          <span className={styles.item} key={i}>
            <img src="/images/image-product-1-thumbnail.jpg" alt="" />
            <span className={styles.info}>
              <p className={styles.name}>{name}</p>
              <p className={styles.price}>
                {price} x {quantity} <span>{`$${price * quantity}.00`}</span>
              </p>
            </span>
            <span
              onClick={() => {
                handleDelete(id);
              }}
            >
              <img src="/images/icon-delete.svg" alt="" />
            </span>
          </span>
        );
      });

      return (
        <>
          {list}
          <button className={styles.checkout}>
            <p>Checkout</p>
          </button>
        </>
      );
    } else {
      return (
        <span className={styles.empty}>
          <p>Your cart is empty</p>
        </span>
      );
    }
  };

  return (
    <span className={styles.cart} style={{ display: open ? "flex" : "none" }}>
      <span className={styles.header}>
        <p>Cart</p>
      </span>
      <span className={styles.main}>{renderItems()}</span>
    </span>
  );
};

export default Cart;
