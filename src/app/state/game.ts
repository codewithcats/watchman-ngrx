import {Action} from './state';

interface GameState {
  expected: number;
}

export const EXPECTED_CHANGE = 'game/EXPECTED_CHANGE';

export function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case EXPECTED_CHANGE:
      const {expected} = action.payload;
      return Object.assign({}, state, {expected});
    default: return state;
  }
}
