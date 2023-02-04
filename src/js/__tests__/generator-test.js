import Bowman from '../characters/Bowman';
import Swordsman from '../characters/Swordsman';
import Magician from '../characters/Magician';
import Vampire from '../characters/Vampire';
import Undead from '../characters/Undead';
import Daemon from '../characters/Daemon';
import { characterGenerator, generateTeam } from '../generators';
import Character from '../characters/Character';

const characterClasses = [
    Swordsman,
    Bowman,
    Magician,
    Daemon,
    Undead,
    Vampire
];

const newCharacterGenerator = characterGenerator(characterClasses, 4);

const testArray = [];
for (let i = 0; i <= 15; i += 1) {
    testArray.push(newCharacterGenerator.next().value);
}

test.each([
    testArray
])('выдаёт ли генератор characterGenerator бесконечно новые персонажи из списка (учёт аргумента allowedTypes)', (call) => {
    expect(call).toBeInstanceOf(Character);
});

test.each([
    [generateTeam(characterClasses, 4, 1), 4]
])('в нужном ли количестве и диапазоне уровней (учёт аргумента maxLevel) создаются персонажи при вызове generateTeam', (call, maxLevel) => {
    expect(call.characters[0].level).toBeLessThanOrEqual(maxLevel);
});