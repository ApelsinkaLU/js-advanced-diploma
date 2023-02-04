/* eslint-disable linebreak-style */
import themes from './themes';
import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import Swordsman from './characters/Swordsman';
import Bowman from './characters/Bowman';
import Magician from './characters/Magician';
import Daemon from './characters/Daemon';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import GamePlay from './GamePlay';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;

    this.gameOptions = {
      maxLevel: 4, // Максимальный уровень персонажа
      teamCount: 2, // Число персонажей в команде
      playerTeamTypes: [Swordsman, Bowman, Magician], // Персонажи, доступные для игрока
      enemyTeamTypes: [Daemon, Undead, Vampire], // Вражеские персонажи
      playerPositions: [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57], // Стартовые позиции для игрока
      enemyPositions: [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63], // Стартовые позиции для врагов
    };

    this.characterPositions = [];
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);

    // Генератор рандомных позиций из возможных
    function* positionRandomizer(allowedPositions) {
      while (true) {
        const indexPositions = Math.floor(Math.random() * allowedPositions.length);
        const newPosition = allowedPositions[indexPositions];
        allowedPositions.splice(indexPositions, 1);

        yield newPosition;
      }
    }

    // Инициализация и рсположение команды игрока
    this.playerTeam = generateTeam(this.gameOptions.playerTeamTypes, this.gameOptions.maxLevel, this.gameOptions.teamCount);
    this.playerTeam.characters.forEach((character, characterIndex) => {
      const generatePlayerPosition = positionRandomizer(this.gameOptions.playerPositions);
      const positionedCharacter = new PositionedCharacter(character, generatePlayerPosition.next().value);
      this.playerTeam.characters[characterIndex] = positionedCharacter;
    });

    // Инициализация и рсположение команды врага
    this.enemyTeam = generateTeam(this.gameOptions.enemyTeamTypes, this.gameOptions.maxLevel, this.gameOptions.teamCount);
    this.enemyTeam.characters.forEach((character, characterIndex) => {
      const generateEnemyPosition = positionRandomizer(this.gameOptions.enemyPositions);
      const positionedCharacter = new PositionedCharacter(character, generateEnemyPosition.next().value);
      this.enemyTeam.characters[characterIndex] = positionedCharacter;
    });


    // Массив всех персонажей на поле
    this.allCharactersOnField = [...this.playerTeam.characters, ...this.enemyTeam.characters];
    // Координаты всех персонажей в массиве координат
    this.charactersPositions = this.allCharactersOnField.map((character) => character.position);
    // Размещение персонажей на поле
    this.gamePlay.redrawPositions(this.allCharactersOnField);

    
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
