import { Component, OnInit } from "@angular/core";
import List from "list.js";

@Component({
  selector: "app-sortable",
  templateUrl: "sortable.component.html"
})
export class SortableComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    new List(document.getElementById("first-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
    new List(document.getElementById("second-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
    new List(document.getElementById("third-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
  }
}
