import { LoginComponent } from "./pages/login/login.component";
import { MapComponent } from "./pages/map/map.component";
import { ZoneComponent } from "./pages/zone/zone.component";
import { RoomComponent } from "./pages/room/room.component";
import { InventoryComponent } from "./pages/inventory/inventory.component";
import { SpellComponent } from "./pages/spells/spell.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "map", component: MapComponent },
  { path: "zone", component: ZoneComponent },
  { path: "room/:id", component: RoomComponent },
  { path: "inventory", component: InventoryComponent},
  { path: "spell", component: SpellComponent }
];

export const navigatableComponents = [
  LoginComponent,
  MapComponent,
  ZoneComponent,
  RoomComponent,
  InventoryComponent,
  SpellComponent
];