import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent implements OnInit{
  nameList:any=[];
  nameMsg:any;
  nameListFrom:any=[];
  promiseRes:any='';
  stringres:any=[];

  ngOnInit(): void {
    const observableOne = of('Aanya', 'Arjun', 'Meera', 'Kabir', 'Riya');
    observableOne.subscribe(res=>{
      this.nameList.push(res);
    });

    const observableTwo = of({a:'Aanya', b:'Arjun', c:'Meera', d:'Kabir', e:'Riya'});
    observableTwo.subscribe(res=>{
      this.nameMsg=res;
    });
    
    // From Array
    const observableThree = from(['Aisha', 'Rohan', 'Nia', 'Ved', 'Zara']);
    observableThree.subscribe(res=>{
      this.nameListFrom.push(res);
    });

    // From Promise
    const promise = new Promise( resolve =>{
      setTimeout(()=>{
        resolve('Promise Resolved');
      },3000);
    });
    const obsv4 = from(promise);
    obsv4.subscribe(res=>{
      this.promiseRes= res;
    });

    // From String
    const observableFive = from('SAMPLE STRING');
    observableFive.subscribe(res=>{
      this.stringres.push(res);
    });
  }
  
}
