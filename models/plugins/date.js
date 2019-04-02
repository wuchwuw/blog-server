const { formatDate } = require('../../common/tools')

module.exports = function (friendly) {
  return (schema) => {
    schema.pre('save', next => {
      this.update_at = new Date()
      next()
    })
  
    schema.virtual('create_at_format').get(() => {
      return formatDate(this.create_at, friendly)
    })
  
    schema.virtual('update_at_format').get(() => {
      return formatDate(this.update_at, friendly)
    })
  }
}