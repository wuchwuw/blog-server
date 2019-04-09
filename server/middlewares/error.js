module.exports = async function handleError (ctx, next) {
  try {
    await next()
  } catch (err) {
    // todo 细化错误处理
    ctx.status = err.status || 500
    if (ctx.status === 400) {
      ctx.type = 'json'
      ctx.body = {
        success: false,
        data: err.data
      }
    }
    ctx.app.emit('error', err, ctx)
  }
}