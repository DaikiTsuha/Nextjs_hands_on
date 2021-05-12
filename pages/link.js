import React from 'react'
import Link from 'next/link'

export default () => (
  <>
    <h2>link</h2>
    <ul>
      <li><Link href='/example'><a>example</a></Link></li>
      <li><Link href='/link'><a>link</a></Link></li>
    </ul>
  </>
)
