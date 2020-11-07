import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions, FullCalendarComponent} from '@fullcalendar/angular';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: '',
      center: 'title',
      right: ''
    },
    events: [],
    initialView: 'dayGridMonth',
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    eventChange: this.handleChange.bind(this)
  };
  events: {
    title: string,
    date: string,
    uuid: string,
    start: string,
    end: string,
    backgroundColor: string,
    extendedProps: {
      status: string
    }
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calendarOptions.events = this.events;
  }
  handleEventClick(arg) {
   // this.uuidReminder = arg.event._def.extendedProps.uuid;
  //клин по событию
  }

  handleEvents(arg) {
  }

  handleChange(arg) {
  // перенос даты
  }
  goNext() {

  }

  goPrev() {

  }

  goToday() {

  }

}
