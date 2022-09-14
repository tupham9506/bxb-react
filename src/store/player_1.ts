import { createSlice } from "@reduxjs/toolkit";

const initialState: PlayerInterface = {
  ball: null,
  ctrl : {
    up: 'W',
    left: 'A',
    right: 'D',
    key1: 'G',
    key2: 'H',
    key3: 'J',
    key4: 'K',
  },
  x: 20,
  y: 80,
  scale: {
    x: 1,
    y: 1
  },
  move_ctrl: null,
}

export const Player_1 = createSlice({
  name: 'player_1',
  initialState,
  reducers: {
    setBall (state, action) {
      state.ball = action.payload;
    }
  }
});

export const { setBall } = Player_1.actions;
export default Player_1.reducer;
