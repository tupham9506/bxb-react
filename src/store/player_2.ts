import { createSlice } from "@reduxjs/toolkit";

const initialState: PlayerInterface = {
  ball: null,
  ctrl : {
    up: 'ARROWUP',
    left: 'ARROWLEFT',
    right: 'ARROWRIGHT',
    key1: '1',
    key2: '2',
    key3: '3',
    key4: '6',
  },
  x: 180,
  y: 80,
  scale: {
    x: -1,
    y: 1
  },
  move_ctrl: null,

}

export const Player_2 = createSlice({
  name: 'player_2',
  initialState,
  reducers: {
    setBall (state, action) {
      state.ball = action.payload;
    }
  }
});

export const { setBall } = Player_2.actions;
export default Player_2.reducer;
