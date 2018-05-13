import { Player } from "./models/Player";
import { Item } from "./models/Item";
import { Spell } from "./models/spell";
import { Room } from "./models/Room";
import { Ring } from "./models/Ring";
import { Injectable } from "@angular/core";

import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "application-settings";

@Injectable()
export class SaveManager {
    savePlayer(player: Player): Boolean {
        let str = JSON.stringify(player);
        setString("player", str);
        return true;
    }

    loadPlayer(): Player {
        //get string from save  
        let str = getString("player");
        return JSON.parse(str);
    }

    loadItems(): Item[] {
        let items = [];
        let itemJson = require('./Assets/items.json');

        for (let i = 0; i < itemJson.length; i++){
            items.push(new Item(itemJson[i].name, i));
        }

        console.log(JSON.stringify(items));
        return items;
    }

    saveSpells(spell: Spell[]): Boolean {
        let str = JSON.stringify(spell);
        setString("spell", str);
        console.log(str);
        return true;
    }

    loadSpells(): Spell[] {
        let str = getString("spell");
        return JSON.parse(str);
    }

    // saveClearedRooms(room: Room): Boolean {
    //     let str = JSON.stringify(room);
    //     setString("room", str);
    //     console.log(str);
    //     return true;
    // }

    // loadClearedRooms(): number[] {
    //     let str = getString("room");
    //     return JSON.parse(str)
    // }

<<<<<<< HEAD
    // saveClearedRings(zone: Ring): Boolean {
    //     let str = JSON.stringify(zone);
    //     setString("zone", str);
    //     console.log(str)
    //     return true;
    // }

    // loadClearedRings(): number[] {
    //     let str = getString("zone");
    //     return JSON.parse(str);
    // }
=======
    saveClearedRings(ring: Ring): Boolean {
        let str = JSON.stringify(ring);
        setString("ring", str);
        console.log(str)
        return true;
    }

    loadClearedRings(): number[] {
        let str = getString("ring");
        return JSON.parse(str);
    }
>>>>>>> separateroombyid
}