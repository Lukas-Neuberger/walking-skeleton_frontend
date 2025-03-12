import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MoveRequestComponent} from "./move-request/move-request.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'move', component: MoveRequestComponent },
];
