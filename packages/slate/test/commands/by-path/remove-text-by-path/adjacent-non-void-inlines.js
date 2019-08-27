/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.removeTextByPath([0, 2], 0, 1)
}

export const input = (
  <value>
    <document>
      <paragraph>
        <text />
        <link>one</link>
        <text key="a">a</text>
        <link>two</link>
        <text />
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        <text />
        <link>one</link>
        <text />
        <link>two</link>
        <text />
      </paragraph>
    </document>
  </value>
)