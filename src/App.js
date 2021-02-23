import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";
import ImageGallery from "./ImageGallery";
import Container from "./container";
import Searchbar from "./Searchbar";

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

// <ToastContainer
//   position="top-left"
//   autoClose={3000}
//   hideProgressBar={false}
//   newestOnTop={false}
//   closeOnClick
//   rtl={false}
//   pauseOnFocusLoss
//   draggable
//   pauseOnHover
// />;
