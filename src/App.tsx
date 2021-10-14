import { HashRouter as Router } from 'react-router-dom'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import { lightTheme } from 'themes'
import { Routing } from './routing'

export const App = () => (
  <MuiThemeProvider theme={lightTheme}>
    <ScThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Router>
        <Routing />
      </Router>
    </ScThemeProvider>
  </MuiThemeProvider>
)
