import { DRAWER_WIDTH } from 'shared/const'
import { Box, Drawer as MuiDrawer } from '@mui/material'
import { DrawerProps } from './Drawer.types'
import { Menu } from '../Menu'

export const Drawer = ({ mobileOpen, onDrawerToggle }: DrawerProps) => {
  const container =
    window !== undefined ? () => window.document.body : undefined

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <MuiDrawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        <Menu />
      </MuiDrawer>
      <MuiDrawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        <Menu />
      </MuiDrawer>
    </Box>
  )
}
