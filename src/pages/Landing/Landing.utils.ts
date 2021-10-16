// Аксессоры
export const lat = (feature: any) => feature?.properties?.countryInfo?.lat
export const lng = (feature: any) => feature?.properties?.countryInfo?.lng
export const population = (feature: any) => feature?.properties?.population
export const cases = (feature: any) => feature?.properties?.cases
export const casesPercent = (feature: any) => (cases(feature) / population(feature)) * 100
