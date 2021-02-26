import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";
import services from "../services";
import PropTypes from "prop-types";
import Fallback from "../Loader/Loader";
import FallbackError from "../FallbackView/FallbackView";
import Button from "../Button";

class ImageGallery extends Component {
  state = {
    gallery: [],
    error: null,
    isLoading: false,
    currentPaga: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchGalleryImage();
      this.ressetState();
    }
  }

  ressetState = () => {
    if (this.props.searchQuery)
      this.setState({ currentPaga: 1, gallery: [], error: null });
  };

  fetchGalleryImage = () => {
    const { currentPaga } = this.state;
    const { searchQuery } = this.props;
    const option = { searchQuery, currentPaga };

    this.setState({ isLoading: true });

    services
      .fetchImageGalleryWithQuery(option)

      .then((data) =>
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...data.hits],
          currentPaga: prevState.currentPaga + 1,
        }))
      )

      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  render() {
    const { gallery, error, isLoading } = this.state;

    const errorMessage = error && <FallbackError message={error.message} />;
    const fallBack = isLoading && <Fallback />;
    const showLoadMore = gallery.length > 0 && !isLoading && (
      <Button className={s.btnContainer} loadMore={this.fetchGalleryImage} />
    );

    return (
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem gallery={gallery} />
        </ul>
        {showLoadMore}
        {fallBack}
        {errorMessage}
      </>
    );
  }
}

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
