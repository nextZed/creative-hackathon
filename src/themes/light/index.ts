import createTheme from '@mui/material/styles/createTheme'
import { palette } from './palette'
import { shadows } from './shadows'
import { shape } from './shape'

// TODO затайпить тему
export const lightTheme = createTheme({
  palette,
  shape,
  shadows,
})
