import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import useTheme from '@mui/material/styles/useTheme'
import { parsePx } from 'shared/utils'
import { useContext, useMemo } from 'react'
import { CovidContext } from 'core/context'
import { ResponsivePie } from '@nivo/pie'
import { createStep } from './LandingGraphs.utils'
import { Tooltip } from './components'

export const LandingGraphs = () => {
  const { chosenRegion } = useContext(CovidContext)
  const theme = useTheme()
  const mg = parsePx(theme.spacing(4))
  console.log(chosenRegion)
  const data = useMemo(
    () =>
      chosenRegion
        ? [
            createStep(chosenRegion, 'casesPerOneMillion'),
            createStep(chosenRegion, 'deathsPerOneMillion'),
            createStep(chosenRegion, 'recoveredPerOneMillion'),
          ]
        : undefined,
    [chosenRegion]
  )

  console.log(data)

  return (
    <Paper elevation={6}>
      <Card>
        <CardHeader title="Россия" />
        <CardContent sx={{ height: '400px' }} id="pie">
          {data && (
            <ResponsivePie
              data={data}
              margin={{ top: mg, right: mg, bottom: mg, left: mg }}
              valueFormat=">-.4s"
              colors={[theme.palette.warning.main, theme.palette.error.main, theme.palette.success.main]}
              motionConfig="wobbly"
              enableArcLabels={false}
              arcLinkLabel="label"
              innerRadius={0.5}
              padAngle={1}
              cornerRadius={4}
              activeOuterRadiusOffset={8}
              tooltip={(p) => <Tooltip value={p.datum.value} label={p.datum.label}/>}
            />
          )}
        </CardContent>
      </Card>
    </Paper>
  )
}
