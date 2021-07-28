import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div>
          <div className="display-4 text-warning ">{this.props.ketQua}</div>
        <div className="display-4 text-success ">
          Số Bàn Thắng:
          <span className="text-warning"> {this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success playgame ">
          Tổng Số Bàn Chơi:
          <span className="text-warning"> {this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    ketQua: state.gameReducer.ketQua,
    soBanThang: state.gameReducer.soBanThang,
    soBanChoi: state.gameReducer.soBanChoi,
  };
};
export default connect(mapStatetoProps, null)(Result);
