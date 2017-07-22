import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {EXPECTED_CHANGE} from './game';

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Injectable()
export class GameService {
  game$: Observable<any>;

  constructor(private store: Store<any>) {
    this.game$ = store.select('game');
  }

  changeExpected(value: number) {
    this.store.dispatch({
      type: EXPECTED_CHANGE,
      payload: {
        expected: value
      }
    });
  }

  randomExpected() {
    const value = getRandomIntInclusive(1, 10);
    this.changeExpected(value);
  }
}
