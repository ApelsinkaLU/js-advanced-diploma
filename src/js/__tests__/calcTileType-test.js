import { calcTileType } from '../utils';

test.each([
    [0, 8, 'top-left'],
    [1, 8, 'top'],
    [63, 8, 'bottom-right'],
    [7, 8, 'top-right'],
    [56, 8, 'bottom-left'],
    [60, 8, 'bottom'],
    [39, 8, 'right'],
    [16, 8, 'left'],
    [25, 8, 'center']
])('testing the correctness of the drawing of the 8x8 playing field', (index, boardSize, expected) => {
    expect(calcTileType(index, boardSize)).toBe(expected);
});