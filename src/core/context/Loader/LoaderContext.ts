import React from 'react'

import { LoaderContextProps } from './LoaderContext.types'

export const LoaderContext = React.createContext<LoaderContextProps>({
    loaderState: false,
    setLoaderState: () => {
        throw new Error()
    },
})
