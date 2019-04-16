import React from 'react'
import 'css-doodle'

export default ({ rule = ''}) => (
  <css-doodle style={{position:'absolute', left: '0', top: '0', right: '0', bottom: '0'}}>{ rule }</css-doodle>
)