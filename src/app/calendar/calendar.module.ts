import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent} from './calendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {RouterModule} from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
])


@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule.forChild([
      {path: '', component: CalendarComponent}
      ])
  ],
  exports: [
    RouterModule
  ]
})
export class CalendarModule { }
