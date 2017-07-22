import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameStore: Observable<any>;
  constructor(private store: Store<any>) {
    this.gameStore = store.select('game')
  }
}
