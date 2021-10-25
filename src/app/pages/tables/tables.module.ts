import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";

import { NgxDatatablesComponent } from "./ngxdatatables/ngxdatatables.component";
import { TablesComponent } from "./tables/tables.component";
import { SortableComponent } from "./sortable/sortable.component";

import { RouterModule } from "@angular/router";
import { TablesRoutes } from "./tables.routing";

@NgModule({
  declarations: [NgxDatatablesComponent, SortableComponent, TablesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule
  ]
})
export class TablesModule {}
