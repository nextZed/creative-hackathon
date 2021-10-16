import { covidAll } from 'shared/api'
import { FUNNEL_LABELS } from 'shared/i18n'


export const createStep = (data: Partial<covidAll>, key: keyof covidAll) => ({
  id: key,
  value: data[key],
  label: FUNNEL_LABELS?.[key] || '',
})
