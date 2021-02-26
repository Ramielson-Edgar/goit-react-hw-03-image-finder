import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";
import Item from "./Item/Item";
import Modal from "../Modal";

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    option: {},
  };

  toogleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  largeImageModal = (id, tags, largeImageURL) => {
    const option = {
      id,
      tags,
      largeImageURL,
    };

    this.setState({
      option: option,
    });
    this.toogleModal();
  };

  render() {
    const { isModalOpen, option } = this.state;
    const { gallery } = this.props;

    return (
      <>
        {isModalOpen && <Modal option={option} onClose={this.toogleModal} />}
        <Item gallery={gallery} largeImageModal={this.largeImageModal} />
      </>
    );
  }
}

ImageGalleryItem.defaultProps = {
  webformatURL:
    "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  id: PropTypes.number,
  imageModal: PropTypes.func,
  tags: PropTypes.string,
};

export default ImageGalleryItem;

// const values = Object.keys(option);
// console.log(values);

// // const imgUrl = gallery.find((el) => el.id === id);
// // console.log(imgUrl);

// if (largeImageURL !== "") {
//   this.setState({ largeImageURL: option.largeImageURL });
//   this.toogleModal();
// }
