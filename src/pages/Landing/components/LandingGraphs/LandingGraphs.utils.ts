import { CovidFeature } from 'core/context'
import { covidCountry } from 'shared/api'
import { FUNNEL_LABELS } from 'shared/i18n'


export const createStep = (data: CovidFeature, key: keyof covidCountry, divider?: number) => ({
  id: key,
  value: divider ? data.properties[key] as number / divider : data.properties[key] as number,
  label: FUNNEL_LABELS?.[key] || '',
})
