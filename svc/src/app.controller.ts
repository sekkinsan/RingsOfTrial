import { Get, Controller, Param } from '@nestjs/common';
import { Spell } from './entity/Spell';
import { Player } from './entity/Player';
import { Inventory } from './entity/Inventory';
import { Item } from './entity/Item';
import { createConnection } from 'typeorm';
import { Enemy } from './entity/Enemy';

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

    const player1 = new Player();
    player1.name = "TestSubject"
    player1.health = 20;
    player1.mana = 20;
    player1.currentRing = 1;
    player1.currentZone = 2;
    player1.currentRoom = 2;
    

    const enemy1 = new Enemy();
    enemy1.name = "Boss"
    enemy1.health = 20;
    enemy1.mana = 20;
    enemy1.currentRing = 1;
    enemy1.currentZone = 2;
    enemy1.currentRoom = 2;

    
    const spell1 = new Spell();
    spell1.name = "Fire";
    spell1.damage = 5;
    spell1.mana = 5;
   // spell1.player = player1;
   // await connection.manager.save(spell1);

    //loading spells into player
    player1.spells = [];
    player1.spells.push(spell1);

    //loading spells into enemy
    enemy1.spells = [];
    enemy1.spells.push(spell1);

    const item1 = new Item();
    item1.name = "sword";
    //await connection.manager.save(item1);

    const item2 = new Item();
    item2.name = "key";
   // await connection.manager.save(item2);
    
    const playerInventory = new Inventory();
    playerInventory.name = "my items";
    //playerInventory.player = player1;
    player1.inventory = playerInventory;
   // await connection.manager.save(playerInventory);

    const enemyInventory = new Inventory();
    enemyInventory.name = "boss items";
    //enemyInventory.player = enemy1;
    //await connection.manager.save(enemyInventory);

    player1.inventory.items = [];
    player1.inventory.items.push(item1);
   // enemy1.inventory.items = [];
    //enemy1.inventory.items.push(item2);
    //when enemy1 health = 0, push key to player1 inventory

    //await connection.manager.save(player1);
    //await connection.manager.save(enemy1);
    console.log(JSON.stringify(player1));

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
