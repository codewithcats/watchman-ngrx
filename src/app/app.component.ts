import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { EXPECTED_CHANGE } from './state/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game$: Observable<any>;
  expected: number;
  constructor(private store: Store<any>) {
    this.game$ = store.select('game');
    const action = {
      type: EXPECTED_CHANGE,
      payload: {
        expected: 10
      }
    };
    store.dispatch(action);
  }

  onClick() {
    const action = {
      type: EXPECTED_CHANGE,
      payload: {
        expected: this.expected
      }
    };
    this.store.dispatch(action);
  }
}
