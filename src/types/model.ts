import { Document } from 'mongoose'

export interface ArticleData {
  title: string,
  content: string,
  tags: string[]
}

export interface ArticleInterface extends Document {
  title: string,
  content: string,
  tags: any,
  create_at: Date,
  update_at: Date
}

export interface TagInterface extends Document {
  name: string,
  articles: any[],
  create_at: Date,
  update_at: Date
}
