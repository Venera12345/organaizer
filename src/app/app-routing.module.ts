import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, pathMatch: 'full'},
  {path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)},
  {path: 'day-book', loadChildren: () => import('./day-book/day-book.module').then(m => m.DayBookModule)},
  {path: 'diary', loadChildren: () => import('./diary/diary.module').then(m => m.DiaryModule)},
  {path: 'list-purchase', loadChildren: () => import('./list-purchase/list-purchase.module').then(m => m.ListPurchaseModule)}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
