import { Routes } from "@angular/router";

import { GoogleComponent } from "./google/google.component";
import { VectorComponent } from "./vector/vector.component";

export const MapsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "google",
        component: GoogleComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "vector",
        component: VectorComponent
      }
    ]
  }
];
