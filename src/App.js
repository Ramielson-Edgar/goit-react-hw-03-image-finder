import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
import Searchbar from "./Searchbar";
import services from "./services/services";
import s from "./App.module.css";

class App extends Component {
  state = {
    gallery: [],
    isLoding: false,
    error: null,
    showModal: false,
    currentPaga: 1,
    searchQuery: "",
    largeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.fetchGallery();
    }
  }

  imageModal = (id) => {
    const { largeImageURL, gallery } = this.state;

    const imgUrl = gallery.find((el) => el.id === id);

    if (largeImageURL !== "") {
      this.setState(
        { largeImageURL: imgUrl.largeImageURL },
        this.toogleModal()
      );
    }
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  searchQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPaga: 1,
      gallery: [],
      error: null,
      largeImageURL: "",
    });
    this.fetchGallery();
  };

  fetchGallery = () => {
    const { currentPaga, searchQuery } = this.state;
    const option = { currentPaga, searchQuery };

    this.setState({ isLoading: true });

    services
      .fetchImageGalleryWithQuery(option)
      .then((dataGallery) =>
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...dataGallery],
          currentPaga: prevState.currentPaga + 1,
          largeImageURL: dataGallery.map((el) => el),
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { gallery, isLoading, error, showModal, largeImageURL } = this.state;

    const loader = isLoading && (
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    );
    const errorMessage = error && <p>Whoops, something went wrong</p>;

    return (
      <div className={s.container}>
        {errorMessage}
        <Searchbar onSubmit={this.searchQuery} />

        <ImageGallery gallery={gallery} imageModal={this.imageModal} />

        {loader}
        {gallery.length > 0 && !isLoading && (
          <Button showMoreGallery={this.fetchGallery} />
        )}

        {showModal && (
          <Modal onClose={this.toogleModal}>
            <div>
              <img src={largeImageURL} alt="image" />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

App.propTypes = {
  searchQuery: PropTypes.string,
  isLoading: PropTypes.bool,
  showModal: PropTypes.bool,
  currentPaga: PropTypes.number,
  largeImageURL: PropTypes.string,
};

export default App;
