import { Document } from 'mongoose'

export interface ArticleData {
  title: string,
  content: string,
  tag: string
}

export interface ArticleFindParams {
  tag?: string,
  page: number,
  pageSize: number
}

export interface ArticleInterface extends Document {
  title: string,
  content: string,
  tag: string,
  create_at: Date,
  update_at: Date,
  create_at_format?: string,
  update_at_format?: string
}

export interface TagInterface extends Document {
  name: string,
  articles: any[],
  create_at: Date,
  update_at: Date,
  create_at_format?: string,
  update_at_format?: string
}

export interface TagData {
  name: string,
  articles: string
}
