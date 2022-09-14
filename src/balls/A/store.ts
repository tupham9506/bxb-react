import { createSlice } from '@reduxjs/toolkit'

const initialState: BallInterface = {
  name: 'Em Ơi',
  hp: 200,
  current_hp: 200
};

export const A = createSlice({
  name: 'A',
  initialState,
  reducers: {
    setPlayer (state, payload) {
      state.player = payload.payload;
    }
  }
});

export const { setPlayer } = A.actions;
export default A.reducer;
