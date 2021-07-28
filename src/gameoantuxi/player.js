import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: "rotate(270deg)" }}
            className="mt-5"
            width={100}
            height={100}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/player.png"
          alt="./img/player.png"
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = null;
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }
            return (
              <div className="col-4" key={index}>
                <button
                  onClick={() => this.props.datCuoc(item.ma)}
                  className="btnItem"
                  style={border}
                >
                  <img
                    width={50}
                    height={50}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    mangDatCuoc: state.gameReducer.mangDatCuoc,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "SELECT",
        maCuoc,
      });
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Player);
