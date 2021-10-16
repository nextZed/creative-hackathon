import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'

export const useMobile = () => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('sm'))
}
