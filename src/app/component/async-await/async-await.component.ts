import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await',
  standalone: true,
  imports: [],
  templateUrl: './async-await.component.html',
  styleUrl: './async-await.component.css'
})
export class AsyncAwaitComponent {
  resultOne:any='Fetching Data ...';
  resultTwo:any='Fetching Data ...';
  resultThree:any='Fetching Data ...';
  dell = {
    brand:"Dell",
    hardDisk:"2 TB",
    color:"Black"
  }

  buyLaptop = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.dell);
    },3000);
  });


  buyLaptopTwo = fetch('https://jsonplaceholder.typicode.com/users')
                  .then(res=>res.json());

  exampleOne(){
    console.log("before promise call");
    this.buyLaptop.then(res=>{
      console.log(res);
      this.resultOne = JSON.stringify(res);
    })
    console.log("after promise call");
  }

  async exampleOTwo(){
    console.log("Before asyncFunction");
    let res = await this.buyLaptop;
    console.log(res);
    this.resultTwo = JSON.stringify(res);
    console.log("After asyncFunction");
  }

  exampleThree(){
    this.buyLaptopTwo.then(res=>{
      console.log(res);
      this.resultThree = JSON.stringify(res);
    });
  }

}
