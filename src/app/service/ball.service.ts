import { Ball } from '../model/ball';
import { Injectable } from '@angular/core';

@Injectable()
export class BallService {
    ballList: Ball[] = [];
    nextId: number = 1;
    
    // Build an initial list
    initializeList(): string {
        let b1: Ball = new Ball("red", "large");
        let b2: Ball = new Ball("blue", "medium");
        let b3: Ball = new Ball("green", "small");
        console.log('adding b1:  '+this.add(b1));
        console.log('adding b2:  '+this.add(b2));
        console.log('adding b3:  '+this.add(b3));
        return('ballList initialized!');
    }
  
  add(ball: Ball): string {
        ball.id = this.nextId++;
        this.ballList.push(ball);
        return "success";
    }
    
    list(): Ball[] {
        return this.ballList;
    }
    
    remove(id: number): string {
        let index: number = -1;
		for(let idx: number = 0; idx < this.ballList.length; idx++) {
            if(id == this.ballList[idx].id) {
                index = idx;
                break;
            }
		}
		this.ballList.splice(index, 1);
		return "Removed.";
    }
    
    get(id: number): Ball {
        let b: Ball;
        for(let idx: number = 0; idx < this.ballList.length; idx++) {
            if(id == this.ballList[idx].id) {
                b = this.ballList[idx];
                break;
            }
		}
        return b;
    }
}