import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { RouterModule } from "@angular/router";
import { MapsRoutes } from "./maps.routing";

import { GoogleComponent } from "./google/google.component";
import { VectorComponent } from "./vector/vector.component";
import { DxVectorMapModule, DxPieChartModule } from 'devextreme-angular';

@NgModule({
  declarations: [GoogleComponent, VectorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    ComponentsModule,
    DxVectorMapModule,
    DxPieChartModule
  ]
})
export class MapsModule {}
