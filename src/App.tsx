import { HashRouter as Router } from 'react-router-dom'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { lightTheme } from 'themes'
import { Routing } from 'routing'
import { Navigation, Main } from 'core/components'
import './App.css'
import { CovidContextProvider, LoaderContextProvider } from 'core/context'

export const App = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />

    <LoaderContextProvider>
      <CovidContextProvider>
        <Router>
          <Navigation />
          <Main>
            <Routing />
          </Main>
        </Router>
      </CovidContextProvider>
    </LoaderContextProvider>
  </ThemeProvider>
)
