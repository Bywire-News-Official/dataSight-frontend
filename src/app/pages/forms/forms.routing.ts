import { Routes } from "@angular/router";

import { FormsComponentsComponent } from "./components/components.component";
import { ElementsComponent } from "./elements/elements.component";
import { ValidationComponent } from "./validation/validation.component";

export const FormsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "components",
        component: FormsComponentsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "elements",
        component: ElementsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "validation",
        component: ValidationComponent
      }
    ]
  }
];
