import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css',
})
export class PromiseComponent implements OnInit {
  dellLaptop() {
    return true;
  }

  hpLaptop() {
    return true;
  }

  ngOnInit(): void {
    // let buyLaptop = new Promise((resolve, reject) => {
    //   if (this.dellLaptop()) {
    //     setTimeout(() => {
    //       resolve('Dell is purchased');
    //     }, 3000);
    //   } else if (this.hpLaptop()) {
    //     setTimeout(() => {
    //       resolve('HP is purchased');
    //     }, 3000);
    //   } else {
    //     reject('No laptop is available');
    //   }
    // });
    // buyLaptop
    //   .then((res) => {
    //     console.log('success then =>' + res);
    //   })
    //   .catch((res) => {
    //     console.log('catch =>' + res);
    //   });
  }

  myFunction() {
    console.log('Clicked ');
  }
}
