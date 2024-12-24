import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  standalone: true,
  imports: [],
  templateUrl: './toarray.component.html',
  styleUrl: './toarray.component.css',
})
export class ToarrayComponent implements OnInit {
  sourceSub!: Subscription;

  users = [
    { name: 'Alice', skill: 'JavaScript' },
    { name: 'Bob', skill: 'Python' },
    { name: 'Charlie', skill: 'Java' },
    { name: 'Diana', skill: 'C++' },
    { name: 'Eve', skill: 'HTML/CSS' },
  ];

  ngOnInit(): void {
    // Example 01
    // const source = interval(1000);
    // this.sourceSub = source.pipe(take(8), toArray()).subscribe((res) => {
    //   // console.log(res);
    // });

    // Example 02
    const source02 = from(this.users);
    source02.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    // Example 03
    const source03 = of(this.users);
    source03.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
