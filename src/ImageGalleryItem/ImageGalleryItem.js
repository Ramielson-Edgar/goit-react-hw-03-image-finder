import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, id, imageModal }) => {
  return (
    <li className={s.ImageGalleryItem} onClick={() => imageModal(id)}>
      <img src={webformatURL} className={s.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  webformatURL:
    "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  id: PropTypes.number,
  imageModal: PropTypes.func,
};

export default ImageGalleryItem;
