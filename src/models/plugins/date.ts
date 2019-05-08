import { formatDate } from '../../common/tools'
import { Schema } from 'mongoose'

export default function (friendly: boolean) {
  return function (schema: Schema) {
    schema.pre('save', function (this: any, next) {
      this.update_at = new Date()
      next()
    })
  
    schema.virtual('create_at_format').get(function (this: any) {
      return formatDate(this.create_at, friendly)
    })
  
    schema.virtual('update_at_format').get(function (this: any) {
      return formatDate(this.update_at, friendly)
    })
  }
}