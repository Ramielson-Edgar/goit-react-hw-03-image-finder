import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  onHandleChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    this.setState({ inputValue: value });
  };

  onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (this.state.inputValue.trim() === "") {
      toast.warn("🔔 Plesae enter something!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.onSubmit}>
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={s.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={inputValue}
              onChange={this.onHandleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}

Searchbar.propTypes = {};

export default Searchbar;
