import math from "./math";

test('Test the sum functions', () => {
	console.log('Hello SUM World');
    expect(math.sum(1,2)).toBe(3);
});

test('Test the subtract functions', () => {
	console.log('Hello SUBTRACT World');
    expect(math.subtract(1,2)).toBe(1);
});

test('Test the multiply functions', () => {
	console.log('Hello MULTIPLY World');
    expect(math.multiply(2,4)).toBe(8);
});

test('Test the divide functions', () => {
	console.log('Hello DIVIDE World');
    expect(math.divide(8, 2)).toBe(4);
});