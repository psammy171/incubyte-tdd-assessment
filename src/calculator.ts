const add = (expression: string): number => {
	if (!expression.trim()) return 0

	// Split by comma, convert each part to number, then sum
	return expression
		.split(',')
		.map((num) => Number(num))
		.reduce((sum, n) => sum + n, 0)
}

export { add }
