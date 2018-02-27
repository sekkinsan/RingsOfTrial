import { Get, Controller, Param } from '@nestjs/common';
import { Spell } from '../../shared/spell';
import { Player } from './entity/Player';
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
    //put in all code to seed my database, in a way I can trigger any time conveniently 2/26
  }

  @Get('spells')
  getSpells(): Spell[] {
    return [{name: 'Fireball', mana: 3, damage: 2}, {name: 'Hurt', mana: 3, damage: 2}, {name: 'Heal', mana: 3, damage: 2}];
  }

  @Get('spells/tier/:tier')
  getSpellsByTier(@Param('tier') tier: number): Spell[] {
    if (tier == 2){
      return [{name: 'Fireballs', mana: 3, damage: 3}, {name: 'HurtMore', mana: 3, damage: 3}, {name: 'HealMore', mana: 3, damage: 3}];
    }
    else
    {
      return [{name: 'Fireball', mana: 3, damage: 2}, {name: 'Hurt', mana: 3, damage: 2}, {name: 'Heal', mana: 3, damage: 2}];
    }
  }
}
