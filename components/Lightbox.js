import React from "react";
import styles from "../styles/Lightbox.module.scss";
import Slidebox from "./Slidebox";

const Lightbox = ({ images, open, setOpen, overlayOpen, setOverlayOpen }) => {
  return (
    <div className={styles.lightbox} style={{ display: open ? "flex" : "none" }}>
      <div className={styles.wrap}>
        <button
          className={styles.closeButton}
          onClick={() => {
            setOpen(!open);
            setOverlayOpen(!overlayOpen);
          }}
        >
          <img src="/images/icon-close.svg" />
        </button>
        <Slidebox images={images} lightbox={true} lightboxStyles={styles} />
      </div>
    </div>
  );
};

export default Lightbox;
