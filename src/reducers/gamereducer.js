const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: true },
  ],
  ketQua: "Game Oẳn Tù Xì",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png" },
};

const gameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SELECT": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let randomNumber = Math.floor(Math.random() * 3);
      let random = state.mangDatCuoc[randomNumber];
      state.computer = random;

      return { ...state };
    }
    case "ENDGAME": {
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa Nhau!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua Rồi!!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, i love you 3000 !!!";
          }
          break;
        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "Hòa Nhau!!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "Thua Rồi!!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, i love you 3000 !!!";
          }
          break;
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hòa Nhau!!!";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua Rồi!!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm iron man, i love you 3000 !!!";
          }
          break;
        default:
          state.ketQua = "";
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default gameReducer;
