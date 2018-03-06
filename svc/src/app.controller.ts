import { Get, Controller, Param } from '@nestjs/common';
import { Spell } from './entity/Spell';
import { Player } from './entity/Player';
import { Inventory } from './entity/Inventory';
import { Item } from './entity/Item';
import { createConnection } from 'typeorm';

@Controller()
export class AppController {
	@Get()
	root(): void {
    createConnection().then(async connection => {

      console.log("Inserting a new user into the database...");
      const user = new Player();
      user.name = "TESTER";
      user.health = 20;
      user.mana = 20;
      user.currentRing = 0;
      user.currentZone = 0;
      user.currentRoom = 0;

      await connection.manager.save(user);
      console.log("Saved a new user with id: " + user.id);
      
      console.log("Loading users from the database...");
      const users = await connection.manager.find(Player);
      console.log("Loaded users: ", users);
       
      console.log("Here you can setup and run express/koa/any other framework.")
  }).catch(error => console.log(error));
  }

  
  @Get('seed')
  seed(): void {
    createConnection().then(async connection => {
    const player1 = new Player();
    player1.name = "TestSubject"
    player1.health = 20;
    player1.mana = 20;
    player1.currentRing = 1;
    player1.currentZone = 2;
    player1.currentRoom = 2;

    
    const spell1 = new Spell();
    spell1.name = "Fire";
    spell1.damage = 5;
    spell1.mana = 5;
    spell1.player = player1;
    await connection.manager.save(spell1);

    //loading spells into player
    player1.spells = [];
    player1.spells.push(spell1);

    const item1 = new Item();
    item1.name = "sword";
    await connection.manager.save(item1);
    
    const inventory = new Inventory();
    inventory.name = "my items";
    inventory.player = player1;
    await connection.manager.save(inventory);

    player1.inventory.items = [];
    player1.inventory.items.push(item1);

    await connection.manager.save(player1);

    
  }).catch(error => console.log(error));
}

  // @Get('spells')
  // getSpells(): Spell[] {
  //   return [{name: 'Fireball', mana: 3, damage: 2}, {name: 'Hurt', mana: 3, damage: 2}, {name: 'Heal', mana: 3, damage: 2}];
  // }

  // @Get('spells/tier/:tier')
  // getSpellsByTier(@Param('tier') tier: number): Spell[] {
  //   if (tier == 2){
  //     return [{name: 'Fireballs', mana: 3, damage: 3}, {name: 'HurtMore', mana: 3, damage: 3}, {name: 'HealMore', mana: 3, damage: 3}];
  //   }
  //   else
  //   {
  //     return [{name: 'Fireball', mana: 3, damage: 2}, {name: 'Hurt', mana: 3, damage: 2}, {name: 'Heal', mana: 3, damage: 2}];
  //   }
  // }
}
