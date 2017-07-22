import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { GameService } from './state/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game$: Observable<any>;
  expected: number;

  constructor(private gameService: GameService) {
    this.game$ = gameService.game$;
  }

  onClick() {
    this.gameService.changeExpected(this.expected);
  }
}
