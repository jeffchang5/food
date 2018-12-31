import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >rss</a>
        </div>
        <a
          href="mailto:me@jeffchang.io"
          rel="noopener noreferrer"
        >
          email
        </a> &bull;{' '}
        <a
          href="https://github.com/jeffchang5"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://www.quora.com/profile/Jeffrey-Chang-22"
          target="_blank"
          rel="noopener noreferrer">
          quora
        </a>
      </footer>
    )
  }
}

export default Footer
