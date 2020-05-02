import React, { Component } from "react";
import apiClient from "../services/resorts";

export default class Resorts extends Component {
  state = {
    resorts: [],
  };

  loadResorts = () => {
    apiClient
      .getAllResorts()
      .then(({ data }) => {
        this.setState({
          resorts: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.loadResorts();
  }

  handleDelete = (id) => {
    apiClient
      .deleteResort(id)
      .then(() => {
        console.log("done");
        this.loadResorts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderResorts = () => {
    const { resorts } = this.state;
    const { history } = this.props;
    return resorts.map((resort, index) => {
      return (
        <li key={index}>
          {resort.name}|{resort.latitude}|{resort.longitude}
          <button
            onClick={() => {
              history.push(`/resorts/${resort._id}/update`);
              // this.handleUpdate(resort._id);
            }}
          >
            update
          </button>
          <button
            onClick={() => {
              this.handleDelete(resort._id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Listado de pistas</h1>
        <ul>{this.renderResorts()}</ul>
      </div>
    );
  }
}
