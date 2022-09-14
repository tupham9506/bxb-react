import { configureStore } from '@reduxjs/toolkit'
import story from './story';
import game from './game';
import A from '../balls/A/store';
import B from '../balls/B/store';
import player_1 from './player_1';
import player_2 from './player_2';

export const store = configureStore({
  reducer: {
    story,
    game,
    player_1,
    player_2,
    A,
    B
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
