import { basename } from 'path'
import { name as domain } from '../package.json'

export function getLambdaURL(filePath: string): string {
	const fileName = basename(filePath)
		.split('.')
		.slice(0, -1)
		.join('.')

	return `https://${domain}/.netlify/functions/${fileName}`
}
