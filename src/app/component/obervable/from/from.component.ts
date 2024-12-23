import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent implements OnInit,AfterViewInit{

  @ViewChild('addVideoBtn') addVideoBtn!: ElementRef;
  videoList:any[]=[];
  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addVideoBtn.nativeElement,'click').subscribe(res=>{
      
      this.videoList.push('Video : '+count);
      console.log('Video : '+count++);

    });
  }
}
