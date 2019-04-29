interface Validator {
  (data: any, rules: Rules): Promise<any>
}

interface Strategies {
  [propName: string]: (val: string | number, errorMsg: string) => string | void
}

interface Rules {
  [propName: string]: { rule: string, errorMsg: string }[]
}

const strategies: Strategies = {
  required (val, errorMsg) {
    if (val === '') {
      return errorMsg
    }
  }
}

export const validator: Validator = (data, rules) => {
  return new Promise((resolve, reject) => {
    let formKeys = Object.keys(data)
    let err
    for (let i = 0; i < formKeys.length; i++) {
      let rule = rules[formKeys[i]]
      let val = data[formKeys[i]]
      for (let i = 0; i < rule.length; i++) {
        let arr = rule[i].rule.split(':')
        let strategy = arr.shift() as string
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
    if (err) {
      reject(err)
    } else {
      resolve()
    }
  })
}
