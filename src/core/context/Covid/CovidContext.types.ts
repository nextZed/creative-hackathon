import { Feature, Geometry } from 'geojson'
import { covidAll, covidCountry } from 'shared/api'

export interface GeoCountry {
  iso_n3: string
  iso_a3: string
}
export type CovidFeature = Feature<Geometry, covidCountry & GeoCountry>
export type CovidFeatures = CovidFeature[]
export type DataToShow = CovidFeature | covidAll

export interface CovidContextProps {
  regions?: CovidFeatures
  total?: covidAll

  chosenRegion?: CovidFeature
  setChosenRegion: (feature?: CovidFeature) => void
}
