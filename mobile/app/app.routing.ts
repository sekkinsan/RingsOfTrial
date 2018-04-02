import { LoginComponent } from "./pages/login/login.component";
import { MapComponent } from "./pages/map/map.component";
import { ZoneComponent } from "./pages/zone/zone.component";
import { RoomComponent } from "./pages/room/room.component";
import { InventoryComponent } from "./pages/inventory/inventory.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "map", component: MapComponent },
  { path: "zone", component: ZoneComponent },
  { path: "room", component: RoomComponent },
  { path: "inventory", component: InventoryComponent}
];

export const navigatableComponents = [
  LoginComponent,
  MapComponent,
  ZoneComponent,
  RoomComponent,
  InventoryComponent
];