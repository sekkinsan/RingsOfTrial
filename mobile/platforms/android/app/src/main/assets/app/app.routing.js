"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var map_component_1 = require("./pages/map/map.component");
var ring_component_1 = require("./pages/ring/ring.component");
var room_component_1 = require("./pages/room/room.component");
var inventory_component_1 = require("./pages/inventory/inventory.component");
var spell_component_1 = require("./pages/spells/spell.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "map", component: map_component_1.MapComponent },
    { path: "ring/:id", component: ring_component_1.RingComponent },
    { path: "room/:id", component: room_component_1.RoomComponent },
    { path: "inventory", component: inventory_component_1.InventoryComponent },
    { path: "spell", component: spell_component_1.SpellComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    map_component_1.MapComponent,
    ring_component_1.RingComponent,
    room_component_1.RoomComponent,
    inventory_component_1.InventoryComponent,
    spell_component_1.SpellComponent
];
