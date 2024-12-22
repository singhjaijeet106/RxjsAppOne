import { Routes } from '@angular/router';
import { PromiseComponent } from './component/promise/promise.component';

export const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: '**', redirectTo: 'promise' },
];
