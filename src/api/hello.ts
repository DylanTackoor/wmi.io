import { APIGatewayProxyHandler } from 'aws-lambda'

const helloWorld: APIGatewayProxyHandler = async event => {
	const subject = `World`
	// event.queryStringParameters.name

	return {
		body: `Hello ${subject}!!!`,
		statusCode: 200,
	}
}

export const handler = helloWorld
