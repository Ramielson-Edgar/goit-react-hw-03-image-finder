import React, { Component } from "react";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";
import services from "../services";

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

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.onSubmit}>
            <button
              type="submit"
              className={s.SearchFormButton}
              onClick={this.addnewImg}
            >
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
