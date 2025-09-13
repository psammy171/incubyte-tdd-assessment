import { add } from './index'

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
