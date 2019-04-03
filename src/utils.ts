import { basename } from 'path'

export function getLambdaURL(filePath: string): string {
	const fileName = basename(filePath)
		.split('.')
		.slice(0, -1)
		.join('.')

	return `https://wmi.io/.netlify/functions/${fileName}`
}
