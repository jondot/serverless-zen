const get = () => [
  {
    path: '/hello',
    headers: {
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, lzma, sdch, br',
      'Accept-Language': 'en-US,en;q=0.8',
      'CloudFront-Forwarded-Proto': 'https',
      'CloudFront-Is-Desktop-Viewer': 'true',
      'CloudFront-Is-Mobile-Viewer': 'false',
      'CloudFront-Is-SmartTV-Viewer': 'false',
      'CloudFront-Is-Tablet-Viewer': 'false',
      'CloudFront-Viewer-Country': 'US',
      Host: 'wt6mne2s9k.execute-api.us-west-2.amazonaws.com',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48',
      Via: '1.1 fb7cca60f0ecd82ce07790c9c5eef16c.cloudfront.net (CloudFront)',
      'X-Amz-Cf-Id': 'nBsWBOrSHMgnaROZJK1wGCZ9PcRcSpq_oSXZNQwQ10OTZL4cimZo3g==',
      'X-Forwarded-For': '192.168.100.1, 192.168.1.1',
      'X-Forwarded-Port': '443',
      'X-Forwarded-Proto': 'https'
    },
    multiValueHeaders: {
      accept: [
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      ],
      'accept-encoding': ['gzip, deflate, lzma, sdch, br'],
      'accept-language': ['en-US,en;q=0.8'],
      'cloudfront-forwarded-proto': ['https'],
      'cloudfront-is-desktop-viewer': ['true'],
      'cloudfront-is-mobile-viewer': ['false'],
      'cloudfront-is-smarttv-viewer': ['false'],
      'cloudfront-is-tablet-viewer': ['false'],
      'cloudfront-viewer-country': ['US'],
      host: ['wt6mne2s9k.execute-api.us-west-2.amazonaws.com'],
      'upgrade-insecure-requests': ['1'],
      'user-agent': [
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48'
      ],
      via: ['1.1 fb7cca60f0ecd82ce07790c9c5eef16c.cloudfront.net (CloudFront)'],
      'x-amz-cf-id': [
        'nBsWBOrSHMgnaROZJK1wGCZ9PcRcSpq_oSXZNQwQ10OTZL4cimZo3g=='
      ],
      'x-forwarded-for': ['192.168.100.1, 192.168.1.1'],
      'x-forwarded-port': ['443'],
      'x-forwarded-proto': ['https'],
      'test-header': ['val1', 'val2']
    },
    pathParameters: {
      proxy: 'hello'
    },
    requestContext: {
      accountId: '123456789012',
      resourceId: 'us4z18',
      stage: 'test',
      requestId: '41b45ea3-70b5-11e6-b7bd-69b5aaebc7d9',
      identity: {
        cognitoIdentityPoolId: '',
        accountId: '',
        cognitoIdentityId: '',
        caller: '',
        apiKey: '',
        sourceIp: '192.168.100.12',
        cognitoAuthenticationType: '',
        cognitoAuthenticationProvider: '',
        userArn: '',
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48',
        user: ''
      },
      resourcePath: '/{proxy+}',
      httpMethod: 'GET',
      apiId: 'wt6mne2s9k'
    },
    resource: '/{proxy+}',
    httpMethod: 'GET',
    queryStringParameters: {
      qs1: 'foo',
      qs2: 'bar'
    },
    multiValueQueryStringParameters: {
      qs2: ['foo', 'bar'],
      qs3: ['bat', 'baz']
    },
    stageVariables: {
      stageVarName: 'stageVarValue'
    }
  },
  {
    callbackWaitsForEmptyEventLoop: false,
    logGroupName: '/aws/lambda/test-apigateway',
    logStreamName: '2018/12/22/[$LATEST]21a094d27de15adeaceaf073140d5aca',
    functionName: 'test-alb',
    memoryLimitInMB: '1024',
    functionVersion: '$LATEST',
    invokeid: '59327015-07f1-11e9-a63e-9f9eb869059e',
    awsRequestId: '59327015-07f1-11e9-a63e-9f9eb869059e',
    invokedFunctionArn:
      'arn:aws:lambda:us-east-1:XXXXXXXXXX:function:test-apigateway'
  }
]
export { get }
