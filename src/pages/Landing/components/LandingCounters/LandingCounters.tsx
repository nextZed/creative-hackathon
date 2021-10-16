import Grid from '@mui/material/Grid'
import { useContext } from 'react'
import { CovidContext } from 'core/context'
import { MESSAGES } from 'shared/i18n'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import CoronavirusIcon from '@mui/icons-material/Coronavirus'
import ClearIcon from '@mui/icons-material/Clear'
import useTheme from '@mui/material/styles/useTheme'
import { Counter } from './components'

export const LandingCounters = () => {
  const theme = useTheme()
  const { total, chosenRegion } = useContext(CovidContext)
  const { todayCases, todayRecovered, todayDeaths } =
    chosenRegion?.properties || total || {}

  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={4}>
        <Counter
          color={theme.palette.success.main}
          icon={LocalHospitalIcon}
          label={MESSAGES.TODAY_RECOVERED}
          value={todayRecovered}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Counter
          color={theme.palette.warning.main}
          icon={CoronavirusIcon}
          label={MESSAGES.TODAY_CASES}
          value={todayCases}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Counter
          color={theme.palette.error.main}
          icon={ClearIcon}
          label={MESSAGES.TODAY_DEATHS}
          value={todayDeaths}
        />
      </Grid>
    </Grid>
  )
}
