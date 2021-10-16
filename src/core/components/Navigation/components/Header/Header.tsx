import AppBar from '@mui/material/AppBar'
// import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import MenuIcon from '@mui/icons-material/Menu'
import { DEFAULT_SPACE } from 'shared/const'
import { CountrySelector } from '../CountrySelector'
// import { HeaderProps } from './Header.types'

const appBarSx = { mb: DEFAULT_SPACE }
// const iconBarSc = { mr: 2 }

export const Header = () => (
  <AppBar position="sticky" color="default" sx={appBarSx}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* <IconButton */}
      {/*  color="inherit" */}
      {/*  aria-label="open drawer" */}
      {/*  edge="start" */}
      {/*  onClick={onDrawerToggle} */}
      {/*  sx={iconBarSc} */}
      {/* > */}
      {/*  <MenuIcon /> */}
      {/* </IconButton> */}
      <Typography variant="h5" noWrap component="div">
        corona.
        <Typography component="span" variant="h5" color="primary">
          virus
        </Typography>
      </Typography>
      <CountrySelector />
    </Toolbar>
  </AppBar>
)
