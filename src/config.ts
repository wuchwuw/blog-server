import { ServerConfig } from './types'

const config: ServerConfig = {
  debug: true,
  port: 3001,
  db: 'mongodb://127.0.0.1/blog_dev'
}

export default config