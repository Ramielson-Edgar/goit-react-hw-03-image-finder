import React from "react";
import s from "./item.module.css";

const Item = ({ gallery, largeImageModal }) => {
  return (
    <>
      {gallery.map(({ webformatURL, id, tags, largeImageURL }, index) => (
        <li
          key={index}
          className={s.ImageGalleryItem}
          onClick={() => largeImageModal(id, tags, largeImageURL)}
        >
          <img
            src={webformatURL}
            alt={tags}
            className={s.ImageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
};

export default Item;
