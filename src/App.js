import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import "./App.css";
import shuffle from "./Util/shuffle";

class App extends React.Component {
  state = {
    images,
    clicked: [],
    score: 0
  };

  jumbleImages = () => {
    this.setState(shuffle(images));
  };

  handleClick = id => {
    if (this.state.clicked.includes(id)) {
      this.handleLoss();
    } else {
      const clickedLocal = this.state.clicked.concat(id);
      const scoreLocal = this.state.score + 1;
      this.setState({
        clicked: clickedLocal,
        score: scoreLocal
      });
      this.jumbleImages();
    }
  };

  handleLoss = () => {
    this.setState({
      score: 0,
      clicked: []
    });
    alert("Wow, you're pretty stupid huh. That's ok, try again!");
    this.jumbleImages();
  };

  componentDidUpdate = () => {
    const winCond = this.state.images.length
    if (this.state.score === winCond) {
      this.setState({
        score: 0,
        clicked: []
      });
      alert("You won, great job. Really great. So impressed.");
      this.jumbleImages();
    }
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Click an Image!</h1>
        <h2 className="subtitle"> But don't hit the same one twice!</h2>
        <h3>Score: {this.state.score}</h3>
        <div className="row">
          {this.state.images.map((image, i) => (
            <ImageCard
              key={i}
              id={image.id}
              imageSrc={image.path}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
