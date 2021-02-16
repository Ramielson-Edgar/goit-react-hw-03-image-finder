import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, imageModal }) => {
  return (
    <div>
      <ul className={s.ImageGallery}>
        {gallery.map(({ id, webformatURL }) => (
          <ImageGalleryItem
            key={webformatURL}
            webformatURL={webformatURL}
            imageModal={imageModal}
            id={id}
          />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      id: PropTypes.number,
    })
  ),
  imageModal: PropTypes.func,
};

export default ImageGallery;
