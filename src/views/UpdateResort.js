import React, { Component } from "react";
import apiClient from "../services/resorts";
import ResortsForm from "../services/ResortsForm";

export default class UpdateResorts extends Component {

  state = {
    resort : "",
    // name: "",
    // latitude: "",
    // longitude: "",
  }

  componentDidMount(){
    const idResort = this.props.match.params.id
    apiClient
    .getOneResort(idResort)
    .then(({ data }) => {
      this.setState({
        resort: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleSubmit = (data) => {
    const { history } = this.props; //esto es da la url(routes)
    const { name, latitude, longitude} = data; //esto viene del componente form
    const {resort} = this.state; //el elemento a modificar. En este caso nos interesa su id
    // console.log('name del sumbit',name)
    apiClient
      .updateResort(resort._id, { name, latitude, longitude })
      .then((res) => {
        console.log(res)
        history.push("/resorts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render(){
    console.log(this.state.resort)
    return(
      <div>
        form
        <ResortsForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

