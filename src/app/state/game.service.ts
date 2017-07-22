import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {EXPECTED_CHANGE} from './game';

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
}
