---
to: src/<%= name %>.js
---
import createLambdaApi, { Request, Response, NextFunction } from 'lambda-api'
import { keephot } from './middleware'
const api = createLambdaApi()

api.use(keephot)
api.get(
  '/<%= name %>',
  async (_req?: Request, res?: Response, _next?: NextFunction) => {
    try {
        // your code here
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
exports.<%= name %> = api.run.bind(api)
