import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  sendID = () => {
    this.props.selected(this.props.id);
  };

  render() {
    const { show } = this.state;
    const { title, backgroundImage, describtion, date, votes } = this.props;
    return (
      <div className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        ></div>

        <div className="card__title">{title}</div>

        <div className="card__like">
          <i
            className={this.props.liked ? "fa fa-heart" : "fa fa-heart-o"}
            onClick={this.sendID}
          ></i>
        </div>

        <div className="card__subtitle">
          <span>{date}</span>
          <span>{votes}</span>
        </div>

        <div className="card-info">
          <div className="card-info__header">Summary</div>
          <button
            onClick={() => {
              this.setState({ show: !show });
            }}
          >
            Toggle
          </button>
          <div className="card-info__description">
            {show ? describtion : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
