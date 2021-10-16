import { Feature, Geometry } from 'geojson'
import { covidAll, covidCountry } from 'shared/api'

export type CovidFeature = Feature<Geometry, covidCountry>
export type CovidFeatures = CovidFeature[]

export interface CovidContextProps {
  regions?: CovidFeatures
  total?: covidAll

  chosenRegion?: CovidFeature
  setChosenRegion: (feature?: CovidFeature) => void
}
