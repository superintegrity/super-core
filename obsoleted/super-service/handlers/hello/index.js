import camelCase from 'camelcase'

/**
 *
 * @type {import('aws-lambda').APIGatewayProxyHandler}
 */
export const handle = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Go Serverless ${camelCase(
          'web pack',
        )}. Your function executed successfully!`,
        input: event,
      },
      null,
      2,
    ),
  }
}
