import { APIGatewayProxyHandler } from 'aws-lambda'

const helloWorld: APIGatewayProxyHandler = async event => {
	const { queryStringParameters } = event
	const subject = queryStringParameters ? queryStringParameters.name : `World`

	return {
		body: `Hello ${subject}!!!`,
		statusCode: 200,
	}
}

export const handler = helloWorld
