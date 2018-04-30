import { Component, OnInit } from '@angular/core';
import { Ball } from '../model/ball';
import { BallService } from '../service/ball.service';

@Component({
  selector: 'app-ball-list',
  templateUrl: './ball-list.component.html',
  styleUrls: ['./ball-list.component.css']
})
export class BallListComponent implements OnInit {

  title: string = 'Ball List';
  balls: Ball[] = [];
  
  constructor(private ballSvc: BallService) { }

  ngOnInit() {
    if (this.balls.length==0) {
      let str = this.ballSvc.initializeList();
      this.balls = this.ballSvc.ballList;
    }
  }

}
