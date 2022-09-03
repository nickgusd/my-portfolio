// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

import { ThemeProvider, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    primary: '#0f3443',
    secondary: '#34e89e',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
