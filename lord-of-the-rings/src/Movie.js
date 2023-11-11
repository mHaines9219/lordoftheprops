import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>
          {this.props.hours + " hours and " + this.props.minutes + " minutes."}
        </p>
      </>
    );
  }
}

export default Movie;
