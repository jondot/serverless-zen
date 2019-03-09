/*
// Use a tracing enabled AWS, other goodies.
import createAWS from './aws'
const AWS = createAWS()

// Use local S3
const S3local = new AWS.S3({
  s3ForcePathStyle: true,
  endpoint: new AWS.Endpoint('http://localhost:4577'),
});
S3.putObject({
    Bucket: 'local-bucket',
    Key: '1234',
    Body: new Buffer('abcd')
  }, () => {} );

*/
import createLambdaApi, { Request, Response, NextFunction } from 'lambda-api'
import uuid from 'uuid'
import { keephot } from './middleware'
// Use a tracing enabled AWS, other goodies.
import createAWS from './aws'

// TODO local or not should be more ergonomic. I don't want to rig S3 myself.
const { S3, DynamoDB } = createAWS({
  tracing: true,
  local: !!process.env.IS_OFFLINE
})

const api = createLambdaApi()
console.log('using services: ', {
  dynamo: process.env.DYNAMODB_TABLE,
  bucket: process.env.BUCKET
})

api.use(keephot)
api.get(
  '/hello',
  async (_req?: Request, res?: Response, _next?: NextFunction) => {
    try {
      await S3.putObject({
        Bucket: process.env.BUCKET,
        Key: '1234',
        Body: Buffer.from('abcd')
      }).promise()

      const ts = new Date().getTime()
      const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
          id: uuid.v1(),
          text: 'testing 1,2,3',
          checked: false,
          createdAt: ts,
          updatedAt: ts
        }
      }

      // write the todo to the database
      await DynamoDB.put(params).promise()
    } catch (err) {
      console.log('error', err)
      if (res) {
        return res.error('nope.')
      }
    }

    return {
      hello: 'world'
    }
  }
)

// Declare your Lambda handler
exports.hello = api.run.bind(api)
