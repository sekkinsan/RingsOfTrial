import { Get, Controller, Param } from '@nestjs/common';
import { Spell } from '../../shared/spell';

@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'Hello World!';
  }

  @Get('spells')
  getSpells(): Spell[] {
    return [{name: 'Fireball', mana: 3}, {name: 'Hurt', mana: 3}, {name: 'Heal', mana: 3}];
  }

  @Get('spells/tier/:tier')
  getSpellsByTier(@Param('tier') tier: number): Spell[] {
    if (tier == 2){
      return [{name: 'Fireballs', mana: 3}, {name: 'HurtMore', mana: 3}, {name: 'HealMore', mana: 3}];
    }
    else
    {
      return [{name: 'Fireball', mana: 3}, {name: 'Hurt', mana: 3}, {name: 'Heal', mana: 3}];
    }
  }
}
