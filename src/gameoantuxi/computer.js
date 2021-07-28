import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
        0% {top: -10px;}
        25% {top: 10px;}
        50% {top: -10px;}
        75% {top: 10px;}
        100% {top: 0;}
      }`;
    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            style={{
              left: "25%",
              position: "absolute",
              animation: `randomItem${Date.now()} 100ms`,
              transform: "rotate(270deg)",
            }}
            className="mt-5"
            width={100}
            height={100}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/playerComputer.png"
          alt="./img/playerComputer.png"
        />
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    computer: state.gameReducer.computer,
  };
};
export default connect(mapStatetoProps, null)(Computer);
