import Box from '@mui/material/Box'
import { ReactChildren, ReactNode } from 'react'
import { LoaderContextProvider } from 'core/context'
import { DEFAULT_SPACE } from 'shared/const'
import { CovidContextProvider } from 'core/context/Covid/CovidContextProvider'

const boxSx = { px: DEFAULT_SPACE }

export const Main = ({ children }: { children: ReactChildren | ReactNode }) => (
  <LoaderContextProvider>
    <CovidContextProvider>
      <Box component="main" sx={boxSx}>
        {children}
      </Box>
    </CovidContextProvider>
  </LoaderContextProvider>
)
