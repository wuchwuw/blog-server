

const strategies = {
  required (val, errorMsg) {
    if (val === '') {
      return errorMsg
    }
  }
}

export function validator (ctx, data, rules) {
  let formKeys = Object.keys(data)
  let err
  for (let i = 0; i < formKeys.length; i++) {
    let rule = rules[formKeys[i]]
    let val = data[formKeys[i]]
    for (let i = 0; i < rule.length; i++) {
      let arr = rule[i].rule.split(':')
      let strategy = arr.shift()
      arr.push(rule[i].errorMsg)
      arr.unshift(val)
      err = strategies[strategy].apply(null, arr)
      if (err) {
        break
      }
    }
    if (err) {
      break
    }
  }
  ctx.throw(400, {
    data: {
      message: err
    }
  })
}