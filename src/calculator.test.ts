import { add } from './index'

// Step 1
test('should return 0 when input is ""', () => {
	expect(add('')).toBe(0)
})

test('should return 1 when input is "1"', () => {
	expect(add('1')).toBe(1)
})

test('should return 10 when input is "10"', () => {
	expect(add('10')).toBe(10)
})

test('should return 6 when input is "1,5"', () => {
	expect(add('1,5')).toBe(6)
})

test('should return 5 when input is "2,3"', () => {
	expect(add('2,3')).toBe(5)
})

// Step 2
test('should return 6 when input is "1,2,3"', () => {
	expect(add('1,2,3')).toBe(6)
})

test('should return 9 when input is "2,3,4"', () => {
	expect(add('2,3,4')).toBe(9)
})

test('should return 10 when input is "2,3,5"', () => {
	expect(add('2,3,5')).toBe(10)
})

test('should return 18 when input is "2,3,6,7"', () => {
	expect(add('2,3,6,7')).toBe(18)
})

test('should return 96 when input is "2,3,6,7,10,23,45"', () => {
	expect(add('2,3,6,7,10,23,45')).toBe(96)
})

// Step 3
test('should return 9 when input is "2\\n3,4"', () => {
	expect(add('2\n3,4')).toBe(9)
})

test('should return 9 when input is "2\\n3\\n4"', () => {
	expect(add('2\n3\n4')).toBe(9)
})

test('should return 9 when input is "2,3\\n4"', () => {
	expect(add('2,3\n4')).toBe(9)
})

test('should return 16 when input is "2,3\\n4\\n7"', () => {
	expect(add('2,3\n4\n7')).toBe(16)
})

test('should return 16 when input is "2\\n3\\n4\\n7"', () => {
	expect(add('2\n3\n4\n7')).toBe(16)
})

// Step 4
test('should return 9 when input is "//;\\n2;3,4"', () => {
	expect(add('//;\n2;3,4')).toBe(9)
})

test('should return 9 when input is "//#\\n2\\n3#4"', () => {
	expect(add('//#\n2\n3#4')).toBe(9)
})

test('should return 9 when input is "//@\\n2,3@4"', () => {
	expect(add('//@\n2,3@4')).toBe(9)
})

test('should return 16 when input is "//:\\n2,3:4\\n7"', () => {
	expect(add('//:\n2,3:4\n7')).toBe(16)
})

test('should return 16 when input is "//?\\n2\\n3?4?7"', () => {
	expect(add('//?\n2\n3?4?7')).toBe(16)
})

//Step 5: Throw error when negative numbers are passed
test('should throw error when input is "1,2,3,-5"', () => {
	expect(() => add('1,2,3,-5')).toThrow('negative numbers not allowed -5')
})

test('should throw error when input is "2,-1,3,4"', () => {
	expect(() => add('2,-1,3,4')).toThrow('negative numbers not allowed -1')
})

test('should throw error when input is "2,-3,-5"', () => {
	expect(() => add('2,-3,-5')).toThrow('negative numbers not allowed -3,-5')
})

test('should throw error when input is "2,-3,6,-7"', () => {
	expect(() => add('2,-3,6,-7')).toThrow('negative numbers not allowed -3,-7')
})

test('should throw error when input is "2,3,-6,7,-10,-23,-45"', () => {
	expect(() => add('2,3,-6,7,-10,-23,-45')).toThrow(
		'negative numbers not allowed -6,-10,-23,-45',
	)
})

// Step 6: Exclude numbers greater than 1000
test('should return 9 when input is "//;\\n2;3,4,1001"', () => {
	expect(add('//;\n2;3,4,1001')).toBe(9)
})

test('should return 9 when input is "//#\\n2\\n3#4,3001"', () => {
	expect(add('//#\n2\n3#4,3001')).toBe(9)
})

test('should return 209 when input is "//@\\n2,3@4,200,1001"', () => {
	expect(add('//@\n2,3@4, 200,1001')).toBe(209)
})

test('should return 1016 when input is "//:\\n2,3:4\\n7,1000,1001"', () => {
	expect(add('//:\n2,3:4\n7,1000,1001')).toBe(1016)
})

test('should return 16 when input is "//?\\n2\\n3?4?7,900"', () => {
	expect(add('//?\n2\n3?4?7,900')).toBe(916)
})
