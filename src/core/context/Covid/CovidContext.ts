import React from 'react'

import { CovidContextProps } from './CovidContext.types'

export const CovidContext = React.createContext<CovidContextProps>({
  setChosenRegion: () => {
    throw new Error()
  },
})
