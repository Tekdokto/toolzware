import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

// type Props = {
//   children?: ReactNode
//   title?: string
// }

const Layout = ({ toggleTheme, themeMode, children }) => (
  <div>
    <Head>
      <title>Skiltime</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header toggleTheme={toggleTheme} themeMode={themeMode}/>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
