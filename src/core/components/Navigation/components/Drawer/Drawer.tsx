import { DRAWER_WIDTH } from 'shared/const'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material'
import { DrawerProps } from './Drawer.types'
import { Menu } from '../Menu'

const boxSx = { width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }
const muiDrawerSx: SxProps<Theme> = {
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    minWidth: DRAWER_WIDTH,
  },
}

export const Drawer = ({ open, onDrawerToggle }: DrawerProps) => {
  const container =
    window !== undefined ? () => window.document.body : undefined

  return (
    <Box component="nav" sx={boxSx}>
      <MuiDrawer
        container={container}
        variant="temporary"
        open={open}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={muiDrawerSx}
      >
        <Menu />
      </MuiDrawer>
    </Box>
  )
}
