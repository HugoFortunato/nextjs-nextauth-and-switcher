import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../contexts/AuthContext'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = () => {
    setDarkMode(prevState => !prevState)
  }
  console.log(darkMode)
  return (
    <AuthProvider>
      <ThemeProvider theme={darkMode ? dark : light}>
        <Component
          setTheme={changeTheme}
          darkMode={darkMode}
          {...pageProps}
        />
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
