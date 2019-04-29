export interface ServerConfig {
  debug: boolean,
  port: number,
  db: string
}

export interface Validator {
  (data: any, rule: object[]): Promise<any>
}