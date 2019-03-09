import { Request, Response, Middleware } from 'lambda-api'

const keephot = (req: Request, res: Response, _next: Middleware): void => {
  // eslint-disable-next-line
  const ev = (req.app as any)._event
  if (ev.source === 'aws.events') {
    res.json({ ok: true })
  }
  ;(_next as any)()
}

// eslint-disable-next-line
export { keephot }
