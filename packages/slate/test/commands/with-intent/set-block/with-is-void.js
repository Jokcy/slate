/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.setBlocks('image')
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
    
      <image>
        <cursor />word
      </image>
    
  </value>
)