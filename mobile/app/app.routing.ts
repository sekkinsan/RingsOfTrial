import { LoginComponent } from "./pages/login/login.component";
import { MapComponent } from "./pages/map/map.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "../app/pages/map", component: MapComponent }
];

export const navigatableComponents = [
  LoginComponent,
  MapComponent
];