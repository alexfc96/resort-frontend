import React, { Component } from "react";

export default class ResortsForm extends Component {
  state = {
    name: "",
    latitude: "",
    longitude: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const {handleSubmit} = this.props
    handleSubmit(this.state)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
          <label htmlFor="latitude">Lat</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            onChange={this.handleChange}
          />
          <label htmlFor="longitude">Lon</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}