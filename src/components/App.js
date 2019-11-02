import React from "react";
import Card from "./Card";
import Genre from "./Genre";
import axios from "axios";
import { endpoints, getImageUrl } from "../config";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      genres: [],
      id: 28,
      selected: []
    };
  }

  componentDidMount() {
    this.updateList();
    axios.get(endpoints.genres()).then(data => {
      this.setState({ genres: data.data.genres });
    });
  }

  updateList = () => {
    axios.get(endpoints.genreMovies(this.state.id)).then(data => {
      this.setState({ list: data.data.results });
    });
  };

  updatedSelected = getID => {
    const list = this.state.selected;
    if (list.includes(getID)) {
      const newList = list.filter(id => id !== getID);
      this.setState({ selected: newList });
    } else {
      list.push(getID);
      this.setState({ selected: list });
    }
  };

  checkLiked = id => {
    if (this.state.selected.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  changeID = newID => {
    this.setState({ id: newID }, () => {
      this.updateList();
    });
  };

  render() {
    return (
      <div>
        <div className="genres">
          {this.state.genres.map(genres => (
            <Genre
              title={genres.name}
              id={genres.id}
              selectID={this.changeID.bind(this)}
              key={genres.id}
            />
          ))}
        </div>
        {this.state.list.map(card => (
          <Card
            title={card.original_title}
            backgroundImage={getImageUrl(card.backdrop_path)}
            date={card.release_date}
            votes={card.vote_count}
            describtion={card.overview}
            id={card.id}
            selected={this.updatedSelected.bind(this)}
            liked={this.checkLiked(card.id)}
            key={card.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
