import {Action} from './state';

interface GameState {
  expected: number;
  start: number;
  stop: number;
}

export const EXPECTED_CHANGE = 'game/EXPECTED_CHANGE';
export const START_CHANGE = 'game/START_CHANGE';
export const STOP_CHANGE = 'game/STOP_CHANGE';

export function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case START_CHANGE:
    case STOP_CHANGE:
    case EXPECTED_CHANGE:
      return Object.assign({}, state, action.payload);
    default: return state;
  }
}
