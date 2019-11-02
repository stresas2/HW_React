import React, { Component } from "react";

export default class Genre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      id: props.id
    };
  }

  sendID = () => {
    this.props.selectID(this.state.id);
  };

  render() {
    const { title } = this.state;
    return (
      <div className="genre" onClick={this.sendID}>
        {title}
      </div>
    );
  }
}
