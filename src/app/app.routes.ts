import { Routes } from '@angular/router';
import { PromiseComponent } from './component/promise/promise.component';
import { Observable } from 'rxjs';
import { ObervableComponent } from './component/obervable/obervable.component';
import { FromComponent } from './component/obervable/from/from.component';
import { ListComponent } from './component/obervable/list/list.component';
import { IntervalComponent } from './component/obervable/interval/interval.component';
import { OfFromComponent } from './component/obervable/of-from/of-from.component';

export const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObervableComponent, children:[
    {path:'',component: ListComponent},
    {path:'fromevent',component: FromComponent},
    {path:'interval',component: IntervalComponent},
    {path:'of-from',component: OfFromComponent}
  ]},
  { path: '**', redirectTo: 'observable' },
];
