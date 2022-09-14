import { createSlice } from '@reduxjs/toolkit'

const initialState: GameInterface = {
  point: 1
}

export const Game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPoint (state, action) {
      state.point = action.payload;
    }
  }
});

export const { setPoint } = Game.actions;
export default Game.reducer;
