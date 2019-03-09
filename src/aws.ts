// Features:
//
// * default keep-alive - https://hackernoon.com/lambda-optimization-tip-enable-http-keep-alive-6dc503f6f114
// * tracing - AWS docs
//

const createAWS = ({ local = false, tracing = false, keepAlive = true }) => {
  const AWSXRay = require('aws-xray-sdk-core')
  const AWS =
    !local && tracing
      ? AWSXRay.captureAWS(require('aws-sdk'))
      : require('aws-sdk')

  if (!local && keepAlive) {
    const https = require('https')
    const sslAgent = new https.Agent({
      keepAlive: true,
      maxSockets: 50,
      rejectUnauthorized: true
    })
    sslAgent.setMaxListeners(0)
    AWS.config.update({
      httpOptions: {
        agent: sslAgent
      }
    })
  }

  const S3 = local
    ? new AWS.S3({
        s3ForcePathStyle: true,
        endpoint: new AWS.Endpoint('http://localhost:4577'),
        credentials: new AWS.Credentials({
          accessKeyId: 'minio-access',
          secretAccessKey: 'minio-secret'
        })
      })
    : new AWS.S3()

  const DynamoDB = local
    ? new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      })
    : new AWS.DynamoDB.DocumentClient()
  return {
    AWS,
    S3,
    DynamoDB
  }
}

export default createAWS
