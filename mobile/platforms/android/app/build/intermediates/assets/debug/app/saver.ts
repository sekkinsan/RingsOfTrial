import { Player } from "./models/Player";
import { Item } from "./models/Item";

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
}