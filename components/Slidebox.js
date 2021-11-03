import { useState } from "react";
import styles from "../styles/Slidebox.module.scss";

const Slidebox = ({
  images,
  overlayOpen,
  setOverlayOpen,
  lightbox = false,
  lightboxOpen,
  setLightboxOpen,
  lightboxStyles = null,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [active, setActive] = useState(0);

  const handleSelect = (src) => {
    setCurrentImage(src);
    setActive(src);
  };

  const renderThumbnails = (images) => {
    const thumbs = images.map((item, i) => {
      const split = item.split(".");
      const src = `${split[0]}-thumbnail.${split[1]}`;
      return (
        <li
          key={i}
          onClick={() => {
            handleSelect(i);
          }}
          className={active === i ? styles.active.toString() : undefined}
        >
          <img src={src} alt="" />
        </li>
      );
    });

    return thumbs;
  };

  const handleSlide = (direction) => {
    if (direction === "next") {
      if (currentImage === images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    } else if (direction === "prev") {
      if (currentImage === 0) {
        setCurrentImage(images.length - 1);
      } else {
        setCurrentImage(currentImage - 1);
      }
    } else {
      return null;
    }
    setActive(currentImage);
  };

  return (
    <div className={styles.slidebox} style={{ overflow: lightbox ? "visible" : "hidden" }}>
      <div
        className={styles.images}
        onClick={() => {
          if (!lightbox && typeof window !== "undefined" && window.innerWidth > 720) {
            setOverlayOpen(!overlayOpen);
            setLightboxOpen(!lightboxOpen);
          }
        }}
      >
        <img src={images[currentImage]} className={styles.currentImage} />
        <div className={`${lightbox ? lightboxStyles.buttons : styles.buttons}`}>
          <span
            onClick={() => {
              handleSlide("prev");
            }}
          >
            <img src="/images/icon-previous.svg" alt="" />
          </span>
          <span
            onClick={() => {
              handleSlide("next");
            }}
          >
            <img src="/images/icon-next.svg" alt="" />
          </span>
        </div>
      </div>

      <div className={styles.thumbnails}>
        <ul>{renderThumbnails(images)}</ul>
      </div>
    </div>
  );
};

export default Slidebox;
