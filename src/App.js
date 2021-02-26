import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGallery from "./Components/ImageGallery";
import Container from "./Components/container";
import Searchbar from "./Components/Searchbar";
import ToastFallBack from "./Components/Toast";

class App extends Component {
  state = {
    searchQuery: "",
  };

  onHadleSubmit = (searchQuery) => {
    this.setState({
      searchQuery: searchQuery,
    });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onHadleSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <ToastFallBack />
      </Container>
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
