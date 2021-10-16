import Box from '@mui/material/Box'
import { ReactChildren, ReactNode } from 'react'
import { DEFAULT_SPACE } from 'shared/const'

const boxSx = { px: DEFAULT_SPACE, pb: DEFAULT_SPACE }

export const Main = ({ children }: { children: ReactChildren | ReactNode }) => (
  <Box component="main" sx={boxSx}>
    {children}
  </Box>
)
