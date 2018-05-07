import { LoginComponent } from "./pages/login/login.component";
import { MapComponent } from "./pages/map/map.component";
import { RingComponent } from "./pages/ring/ring.component";
import { RoomComponent } from "./pages/room/room.component";
import { InventoryComponent } from "./pages/inventory/inventory.component";
import { SpellComponent } from "./pages/spells/spell.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "map", component: MapComponent },
  { path: "ring/:id", component: RingComponent },
  { path: "room/:id", component: RoomComponent },
  { path: "inventory", component: InventoryComponent},
  { path: "spell", component: SpellComponent }
];

export const navigatableComponents = [
  LoginComponent,
  MapComponent,
  RingComponent,
  RoomComponent,
  InventoryComponent,
  SpellComponent
];