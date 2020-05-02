import React, { Component } from "react";
import apiClient from "../services/resorts";
import ResortsForm from "../services/ResortsForm";

export default class AddResort extends Component {
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

  handleSubmit = (data) => {
    // e.preventDefault();  ya esta comprobado en el form
    const { history } = this.props;
    const { name, longitude, latitude } = data;
    apiClient
      .createResort({ name, latitude, longitude })
      .then((res) => {
        history.push("/resorts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <ResortsForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
