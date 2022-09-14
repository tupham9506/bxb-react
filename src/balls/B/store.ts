import { createSlice } from '@reduxjs/toolkit'

const initialState: BallInterface = {
  name: 'Cà Xân',
  hp: 200,
  current_hp: 200
};


export const B = createSlice({
  name: 'B',
  initialState,
  reducers: {
    setPlayer (state, payload) {
      state.player = payload.payload;
    }
  }
});

export const { setPlayer } = B.actions;
export default B.reducer;
