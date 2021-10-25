import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertModule } from "ngx-bootstrap/alert";
import { ModalModule } from "ngx-bootstrap/modal";
import { ClipboardModule } from "ngx-clipboard";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { RouterModule } from "@angular/router";
import { ComponentsRoutes } from "./components.routing";

import { ButtonsComponent } from "./buttons/buttons.component";
import { GridComponent } from "./grid/grid.component";
import { IconsComponent } from "./icons/icons.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { CardsComponent } from "./cards/cards.component";
import { ComponentsComponent } from "./components/components.component";
import { TypographyComponent } from "./typography/typography.component";

@NgModule({
  declarations: [
    ButtonsComponent,
    GridComponent,
    NotificationsComponent,
    IconsComponent,
    CardsComponent,
    ComponentsComponent,
    TypographyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    ClipboardModule
  ]
})
export class ComponentsModule {}
