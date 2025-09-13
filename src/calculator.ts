const getDelimiters = (
	customDelimiterRegExMatchArray: RegExpMatchArray | null,
): string[] => {
	const delimiters = ['\n', ',']

	if (customDelimiterRegExMatchArray) {
		delimiters.push(customDelimiterRegExMatchArray[1]!)
	}

	return delimiters
}

const getDelimiterRegExp = (
	customDelimiterRegExMatchArray: RegExpMatchArray | null,
): RegExp => {
	const delimiters = getDelimiters(customDelimiterRegExMatchArray)

	const escapedDelimiters = delimiters.map((d) =>
		d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
	)

	const pattern = `[${escapedDelimiters.join('')}]`

	return new RegExp(pattern, 'g')
}

const checkIfNegativeNumbersPresent = (numbersArray: number[]): void => {
	const negativeNumbers = numbersArray.filter((num) => num < 0)

	if (negativeNumbers.length > 0) {
		throw new Error(
			`negative numbers not allowed ${negativeNumbers.join(',')}`,
		)
	}
}

const getUpdatedExpression = (
	expression: string,
	customDelimiterRegExMatchArray: RegExpMatchArray | null,
): string => {
	return customDelimiterRegExMatchArray
		? expression.slice(customDelimiterRegExMatchArray[0].length)
		: expression
}

const getNumbersArray = (
	expression: string,
	delimiterRegExp: RegExp,
): number[] => {
	return expression
		.split(delimiterRegExp)
		.map((num) => Number(num))
		.filter((num) => !isNaN(num) && num <= 1000)
}

const add = (expression: string): number => {
	if (!expression.trim()) return 0

	const customDelimiterRegExMatchArray = expression.match(/\/\/(.)\n/)

	const delimiterRegExp = getDelimiterRegExp(customDelimiterRegExMatchArray)

	const updatedExpression = getUpdatedExpression(
		expression,
		customDelimiterRegExMatchArray,
	)

	const numbersArray = getNumbersArray(updatedExpression, delimiterRegExp)

	checkIfNegativeNumbersPresent(numbersArray)

	return numbersArray.reduce((sum, n) => sum + n, 0)
}

export { add }
