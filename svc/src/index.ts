import "reflect-metadata";
import {createConnection} from "typeorm";
import {Player} from "./entity/Player";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new Player();
    user.name = "TESTER";
    user.health = 20;
    user.mana = 20;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    
    console.log("Loading users from the database...");
    const users = await connection.manager.find(Player);
    console.log("Loaded users: ", users);
     
    console.log("Here you can setup and run express/koa/any other framework.");
    
}).catch(error => console.log(error));
