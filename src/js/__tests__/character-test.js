import Character from '../characters/Character';

test('testing that an exception is thrown when creating an object of the Character class', () => {
    expect(() => new Character('zombie')).toThrow(new Error('Parent constructor <Character> can not be envoked directly!'));
  });