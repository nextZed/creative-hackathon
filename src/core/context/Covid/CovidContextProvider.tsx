import { useState, FC, memo, useCallback, useContext, useEffect } from 'react'

import { Covid19WorldometersService, covidAll } from 'shared/api'
import { FeatureCollection, Geometry } from 'geojson'
import { LoaderContext } from 'core/context/Loader'
import { CovidContext } from './CovidContext'
import { CovidFeature, CovidFeatures, GeoCountry } from './CovidContext.types'

export const CovidContextProvider: FC = memo(({ children }) => {
  const { setLoaderState } = useContext(LoaderContext)
  const [regions, setRegions] = useState<CovidFeatures>()
  const [total, setTotal] = useState<covidAll>()
  const [chosenRegion, setChosenRegion] = useState<CovidFeature>()

  const fetchAndPrepareData = useCallback(async () => {
    setLoaderState(true)
    try {
      // Чтобы лоадер завис минимум на секунду, для отображения поведения
      // TODO убрать после показа
      await new Promise((res) => setTimeout(res, 1000))

      const geoJson: FeatureCollection<Geometry, GeoCountry> = await fetch(
        '/countries.geo.json'
      ).then((res) => res.json())
      const covidRegionsData =
        await Covid19WorldometersService.getCovid19WorldometersService5({})

      const newCovidFeatures: CovidFeatures =
        geoJson.features.reduce<CovidFeatures>((features, feature) => {
          const countryCovidInfo = covidRegionsData.find(
            (el) => el.countryInfo.iso3 === feature.properties?.iso_a3
          )

          if (!countryCovidInfo) return features

          return [
            ...features,
            {
              ...feature,
              properties: { ...feature.properties, ...countryCovidInfo },
            },
          ]
        }, [])
      await setRegions(newCovidFeatures)

      const covidTotalData =
        await Covid19WorldometersService.getCovid19WorldometersService({})
      setTotal(covidTotalData)
    } finally {
      console.log('covid data ready')
    }
  }, [setLoaderState])

  useEffect(() => {
    fetchAndPrepareData()
  }, [])

  return (
    <CovidContext.Provider
      value={{
        total,
        regions,
        setChosenRegion,
        chosenRegion,
      }}
    >
      {children}
    </CovidContext.Provider>
  )
})
