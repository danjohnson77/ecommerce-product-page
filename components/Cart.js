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
          <div className={styles.item} key={i}>
            <img src="/images/image-product-1-thumbnail.jpg" alt="" />
            <div className={styles.info}>
              <p className={styles.name}>{name}</p>
              <p className={styles.price}>
                {price} x {quantity} <span>{`$${price * quantity}.00`}</span>
              </p>
            </div>
            <div
              onClick={() => {
                handleDelete(id);
              }}
            >
              <img src="/images/icon-delete.svg" alt="" />
            </div>
          </div>
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
    <div className={styles.cart} style={{ display: open ? "flex" : "none" }}>
      <div className={styles.header}>
        <p>Cart</p>
      </div>
      <div className={styles.main}>{renderItems()}</div>
    </div>
  );
};

export default Cart;
