import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';
import { AsyncAwaitComponent } from '../async-await/async-await.component';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [AsyncAwaitComponent],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css',
})
export class PromiseComponent implements OnInit {

  promiseVal:any='';
  dell = {
    brand:"Dell",
    hardDisk:"2 TB",
    color:"Black"
  }

  hp = {
    brand:"Hp",
    hardDisk:"1 TB",
    color:"Silver"
  }

  notAvail = {
    brand:"Not Available",
    status:"Failed"
  }

  dellLaptop() {
    return true;
  }

  hpLaptop() {
    return false;
  }

  ngOnInit(): void {
    // let buyLaptop = new Promise((resolve, reject) => {
    //   if (this.dellLaptop()) {
    //     setTimeout(() => {
    //       resolve(this.dell);
    //     }, 3000);
    //   } else if (this.hpLaptop()) {
    //     setTimeout(() => {
    //       resolve(this.hp);
    //     }, 3000);
    //   } else {
    //     reject('No laptop is available');
    //   }
    // });
    // buyLaptop
    //   .then((res) => {
    //     console.log('success then =>' + res);
    //     this.promiseVal = res;
    //   })
    //   .catch((res) => {
    //     console.log('catch =>' + res);
    //     this.promiseVal = res;
    //   });
    //   console.log("init completed")
  }

  myFunction() {
    console.log('Clicked ');
  }
}
