import React, { Component } from "react";
import PropTypes from "prop-types";

export default class index extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
