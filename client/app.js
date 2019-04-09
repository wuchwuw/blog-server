const React = require('react')
const { useState } = require('react')

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>server side render {count}</div>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  )
}

module.exports = App