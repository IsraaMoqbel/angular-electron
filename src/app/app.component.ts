import { Component } from '@angular/core';
import  { Observable } from 'rxjs/Observable';

// import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Electron Timer';
  max=1;
  current=0;

start(){
  // const interval1 = interval(100);
this.current = 0;
  interval(100)
  .takeWhile(_ => !this.isFinished)
  .do(i => this.current += 0.1)
  .subscribe()

}

finish() {
  this.current = this.max;
}

reset(){
  this.current = 0;

}
resetAndStart(){
  this.current = 0;
  interval(100)
  .takeWhile(_ => !this.isFinished)
  .do(i => this.current += 0.1)
  .subscribe()
}

  get maxVal() {
    return isNaN(this.max) || this.max< 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current< 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.current >= this.max
  }
}
