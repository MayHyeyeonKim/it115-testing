const utils = require('./math');


test('adds 3 + 4 to equal 7', () => {
    expect(utils.add(3,4)).toBe(7);

});

test('subtracts 3 from 7 to equal 4', () => {
    expect(utils.sub(7,3)).toBe(4);

});

test('multiples 6 * 4 to equal 24', () => {
    expect(utils.mult(6,4)).toBe(24);

});

test('divides 17 / 3 to equal 5.666... ', () => {
    expect(utils.div(17,3)).toBeCloseTo(5.667);

});

test('should return:"6 is greater then 4"', () => {
    expect(utils.between(6,4)).toBe("6 is greater than 4");

});

test('should return:"6 is greater then 4"', () => {
    expect(utils.between(4,6)).toBe("6 is greater than 4");

});

test('should return:"4 is equal to 4"', () => {
    expect(utils.between(4,4)).toBe("4 is equal to 4");

});

test('should return: "I love purple"', () => {
    expect(utils.colors("purple")).toBe("I love purple");
});

test('should return: "red is okay"', () => {
    expect(utils.colors("red")).toBe("red is okay");
});

test('should return: "I hate green"', () => {
    expect(utils.colors("green")).toBe("I hate green");
});