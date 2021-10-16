import { FC, memo, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import { LoaderContext } from './LoaderContext'

export const LoaderContextProvider: FC = memo(({ children }) => {
  const [loaderState, setLoaderState] = useState<boolean>(false)

  return (
    <LoaderContext.Provider value={{ loaderState, setLoaderState }}>
      {loaderState && (
        <Box
          sx={{
            top: 0,
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: (theme => theme.zIndex.appBar - 1)
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {children}
    </LoaderContext.Provider>
  )
})
