import { Routes } from "@angular/router";

import { ButtonsComponent } from "./buttons/buttons.component";
import { GridComponent } from "./grid/grid.component";
import { IconsComponent } from "./icons/icons.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { CardsComponent } from "./cards/cards.component";
import { ComponentsComponent } from "./components/components.component";
import { TypographyComponent } from "./typography/typography.component";

export const ComponentsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "buttons",
        component: ButtonsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "grid",
        component: GridComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "icons",
        component: IconsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "notifications",
        component: NotificationsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "cards",
        component: CardsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "components",
        component: ComponentsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "typography",
        component: TypographyComponent
      }
    ]
  }
];
