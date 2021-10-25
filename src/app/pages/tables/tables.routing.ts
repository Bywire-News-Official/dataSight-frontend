import { Routes } from "@angular/router";

import { NgxDatatablesComponent } from "./ngxdatatables/ngxdatatables.component";
import { SortableComponent } from "./sortable/sortable.component";
import { TablesComponent } from "./tables/tables.component";

export const TablesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "ngx-datatable",
        component: NgxDatatablesComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "sortable",
        component: SortableComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "tables",
        component: TablesComponent
      }
    ]
  }
];
