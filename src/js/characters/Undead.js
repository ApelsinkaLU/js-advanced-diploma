import Character from './Character';

export default class Undead extends Character {
  constructor(level) {
    super('undead');
    this.level = level;
    this.attack = 40;
    this.defence = 10;
  }
}