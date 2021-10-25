import { Component, OnInit, AfterViewInit, NgZone, Inject,  PLATFORM_ID} from "@angular/core";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import * as moment from "moment";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-widgets",
  templateUrl: "widgets.component.html"
})
export class WidgetsComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {
    var calendarEl = document.getElementById("widget-calendar");

    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      selectable: true,
      headerToolbar:false,
      contentHeight: "auto",
      buttonIcons: {
        prev: " ni ni-bold-left",
        next: " ni ni-bold-right"
      },
      initialDate: "2018-12-01",
      editable: true,
      events: [
        {
          title: "Call with Dave",
          start: "2018-11-18",
          end: "2018-11-18",
          className: "bg-red"
        },

        {
          title: "Lunch meeting",
          start: "2018-11-21",
          end: "2018-11-22",
          className: "bg-orange"
        },

        {
          title: "All day conference",
          start: "2018-11-29",
          end: "2018-11-29",
          className: "bg-green"
        },

        {
          title: "Meeting with Mary",
          start: "2018-12-01",
          end: "2018-12-01",
          className: "bg-blue"
        },

        {
          title: "Winter Hackaton",
          start: "2018-12-03",
          end: "2018-12-03",
          className: "bg-red"
        },

        {
          title: "Digital event",
          start: "2018-12-07",
          end: "2018-12-09",
          className: "bg-warning"
        },

        {
          title: "Marketing event",
          start: "2018-12-10",
          end: "2018-12-10",
          className: "bg-purple"
        },

        {
          title: "Dinner with Family",
          start: "2018-12-19",
          end: "2018-12-19",
          className: "bg-red"
        },

        {
          title: "Black Friday",
          start: "2018-12-23",
          end: "2018-12-23",
          className: "bg-blue"
        },

        {
          title: "Cyber Week",
          start: "2018-12-02",
          end: "2018-12-02",
          className: "bg-yellow"
        }
      ]
    });

    calendar.render();

    //Display Current Date as Calendar widget header
    var mYear = moment().format("YYYY");
    var mDay = moment().format("dddd, MMM D");
    document.getElementsByClassName(
      "widget-calendar-year"
    )[0].innerHTML = mYear;
    document.getElementsByClassName("widget-calendar-day")[0].innerHTML = mDay;
  }

  ngAfterViewInit() {
    // Chart code goes in here

  }
}
