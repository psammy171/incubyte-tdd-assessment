const getCustomDelimiters = (expression: string): string | undefined => {
	const customDelimiterRegEx = expression.match(/\/\/(.)\n/)

	return customDelimiterRegEx ? customDelimiterRegEx[1] : undefined
}

const getDelimiterRegExPattern = (expression: string): RegExp => {
	const defaultDelimiters = ['\n', ',']

	const customDelimiter = getCustomDelimiters(expression)

	if (customDelimiter) {
		defaultDelimiters.push(customDelimiter)
	}

	const escapedDelimiters = defaultDelimiters.map((d) =>
		d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
	)

	const ignoreStart = customDelimiter
		? `(?:^//${escapedDelimiters[escapedDelimiters.length - 1]}\\n)?`
		: ''

	const pattern = `${ignoreStart}[${escapedDelimiters.join('')}]`

	return new RegExp(pattern, 'g')
}

const add = (expression: string): number => {
	if (!expression.trim()) return 0

	const delimiterRegExPattern = getDelimiterRegExPattern(expression)

	const customDelimiter = expression.match(/\/\/(.)\n/)

	const updatedExpression = customDelimiter
		? expression.slice(customDelimiter[0].length)
		: expression

	const numbersArray = updatedExpression
		.split(delimiterRegExPattern)
		.map((num) => Number(num))

	const negativeNumbers = numbersArray.filter((num) => num < 0)

	if (negativeNumbers.length > 0) {
		throw new Error(
			`negative numbers not allowed ${negativeNumbers.join(',')}`,
		)
	}

	return numbersArray.reduce((sum, n) => sum + n, 0)
}

export { add }
