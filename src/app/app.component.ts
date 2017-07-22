import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { GameService } from './state/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game$: Observable<any>;
  level$: Observable<string>;
  expected: number;

  constructor(private gameService: GameService) {
    this.game$ = gameService.game$;
    this.level$ = this.game$
    .map(game => game.expected > 5 ? 'Hard' : 'Easy');

    this.gameService.randomExpected();
  }

}
