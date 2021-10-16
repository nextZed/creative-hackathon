import { HashRouter as Router } from 'react-router-dom'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { lightTheme } from 'themes'
import { Routing } from 'routing'
import { Navigation, Main } from 'core/components'
import './App.css'

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Router>
      <Navigation />
      <Main>
        <Routing />
      </Main>
    </Router>
  </ThemeProvider>
)
