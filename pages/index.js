import { useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";
import Slidebox from "../components/Slidebox";

import Lightbox from "../components/Lightbox";

export default function Home({ product }) {
  const { id, company, name, description, fullPrice, discount, images } = product;

  const [quantity, setQuantity] = useState(0);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = () => {
    const add = { ...product, quantity, price: fullPrice * discount };
    quantity > 0 && setCartItems([add]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sneakers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/favicon-32x32.png" />
      </Head>

      <Nav
        overlayOpen={overlayOpen}
        setOverlayOpen={setOverlayOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <main className={styles.main}>
        <Lightbox
          images={images}
          overlayOpen={overlayOpen}
          setOverlayOpen={setOverlayOpen}
          open={lightboxOpen}
          setOpen={setLightboxOpen}
        />
        <section className={styles.slideshow}>
          <h2>Product Image Carousel</h2>
          <Slidebox
            images={images}
            overlayOpen={overlayOpen}
            setOverlayOpen={setOverlayOpen}
            lightboxOpen={lightboxOpen}
            setLightboxOpen={setLightboxOpen}
          />
        </section>
        <section className={styles.info}>
          <h2>{company}</h2>
          <h3>{name}</h3>
          <p>{description}</p>

          <span className={styles.price}>{discount ? `$${fullPrice * discount}` : `$${fullPrice}`}.00</span>
          {discount && (
            <span className={styles.discount}>
              <span>{discount * 100}%</span>
            </span>
          )}
          <span className={styles.fullPrice}>{`$${fullPrice}.00`}</span>

          <div className={styles.quantity}>
            <div
              onClick={() => {
                quantity > 0 && setQuantity(quantity - 1);
              }}
            >
              <img src="/images/icon-minus.svg" alt="" />
            </div>
            <span>{quantity}</span>
            <div
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              <img src="/images/icon-plus.svg" alt="" />
            </div>
          </div>
          <button className={styles.add} onClick={handleAdd}>
            <img src="/images/icon-cart-white.svg" alt="" />
            <span>Add to cart</span>
          </button>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const product = {
    id: 1,
    company: "SNEAKER COMPANY",
    name: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
    they'll withstand everything the weather can offer.`,
    fullPrice: 250,
    discount: 0.5,

    images: [
      "/images/image-product-1.jpg",
      "/images/image-product-2.jpg",
      "/images/image-product-3.jpg",
      "/images/image-product-4.jpg",
    ],
  };
  return {
    props: { product },
  };
}
