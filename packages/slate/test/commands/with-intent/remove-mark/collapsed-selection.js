/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.addMark('bold')
  editor.removeMark('bold')
  editor.insertText('a')
}

export const input = (
  <value>
    
      <block>
        <cursor />word
      </block>
    
  </value>
)

export const output = (
  <value>
    
      <block>
        a<cursor />word
      </block>
    
  </value>
)