import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent implements OnInit{

  randomString: string = '';
  videoSubscription!: Subscription;
  constructor(){}

  ngOnInit(): void {
    // const broadcastVideos = interval(300);          // Only need the scheduler i.e. interval between two emit
    const broadcastVideos = timer(3000,300);          // Need both delay and interval i.e. process will start after delay time
    this.videoSubscription = broadcastVideos.subscribe(res=>{
      this.randomString ="Video : "+res;
      console.log(this.randomString);
      if(res >=15){
        this.videoSubscription.unsubscribe();
      }
    })
  }
}
