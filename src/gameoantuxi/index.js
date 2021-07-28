import React, { Component } from "react";
import Computer from "./computer";
import "./game.css";
import Player from "./player";
import Result from "./result";
import { connect } from "react-redux";

class Game extends Component {
  render() {
    return (
      <div
        className="game"
        style={{ backgroundImage: `url(./img/bgGame.jpg)` }}
      >
        <div id="overlay" style={{display:"none"}}>
          <div className="content">
            <img src="./img/giphy.gif" />
            <h1>LOADING...</h1>
          </div>
        </div>
        <div className="row text-center item">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4 ">
            <Result />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn mt-5 play"
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    playGame: () => {
      document.getElementById("overlay").style.display = "block";
      let count = 1;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 10) {
          document.getElementById("overlay").style.display = "none";
          clearInterval(randomComputerItem);
          dispatch({
            type: "ENDGAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProp)(Game);
