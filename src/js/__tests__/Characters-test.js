import Bowman from '../characters/Bowman';
import Swordsman from '../characters/Swordsman';
import Magician from '../characters/Magician';
import Vampire from '../characters/Vampire';
import Undead from '../characters/Undead';
import Daemon from '../characters/Daemon';

test('testing the correct characteristics of the Bowman', () => {
    const obj = {
        type: 'bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };
    expect(new Bowman(1)).toEqual(obj);
});

test('testing the correct characteristics of the Swordsman', () => {
    const obj = {
        type: 'swordsman',
        health: 100,
        level: 2,
        attack: 40,
        defence: 10
    };
    expect(new Swordsman(2)).toEqual(obj);
});

test('testing the correct characteristics of the Magician', () => {
    const obj = {
        type: 'magician',
        health: 100,
        level: 3,
        attack: 10,
        defence: 40
    };
    expect(new Magician(3)).toEqual(obj);
});

test('testing the correct characteristics of the Vampire', () => {
    const obj = {
        type: 'vampire',
        health: 100,
        level: 4,
        attack: 25,
        defence: 25
    };
    expect(new Vampire(4)).toEqual(obj);
});

test('testing the correct characteristics of the Undead', () => {
    const obj = {
        type: 'undead',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };
    expect(new Undead(1)).toEqual(obj);
});

test('testing the correct characteristics of the Daemon', () => {
    const obj = {
        type: 'daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 10
    };
    expect(new Daemon(1)).toEqual(obj);
});