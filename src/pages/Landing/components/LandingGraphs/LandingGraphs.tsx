import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import useTheme from '@mui/material/styles/useTheme'
import { formatShortNumber, parsePx } from 'shared/utils'
import { useContext, useMemo } from 'react'
import { CovidContext } from 'core/context'
import InfoIcon from '@mui/icons-material/Info'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ResponsivePie } from '@nivo/pie'
import { useMobile } from 'shared/hooks'
import { MESSAGES } from 'shared/i18n'
import { createStep } from './LandingGraphs.utils'
import { Tooltip } from './components'

export const LandingGraphs = () => {
  const { chosenRegion, total } = useContext(CovidContext)
  const theme = useTheme()
  const colors = [
    theme.palette.warning.main,
    theme.palette.error.main,
    theme.palette.success.main,
  ]
  const mg = parsePx(theme.spacing(4))
  const isMobile = useMobile()

  const data = useMemo(() => {
    const originData = chosenRegion?.properties || total
    return originData
      ? [
          createStep(originData, 'cases'),
          createStep(originData, 'deaths'),
          createStep(originData, 'recovered'),
        ]
      : undefined
  }, [chosenRegion, total])

  return (
    <Paper elevation={6}>
      <Card>
        <CardContent>
          <Typography
            variant="caption"
            sx={{ textTransform: 'lowercase', display: 'block' }}
          >
            {MESSAGES.TOTAL}
          </Typography>
          {isMobile && (
            <Box sx={{ px: 1, pt: 2, pb: 2 }}>
              {data?.map((el, i) => (
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <InfoIcon sx={{ color: colors[i], mr: 0.5 }} />
                  <Typography>{el.label}: <b>{formatShortNumber(el.value)}</b></Typography>
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
        <CardContent sx={{ height: '400px' }} id="pie">
          {data && (
            <ResponsivePie
              data={data}
              margin={{ top: mg, right: mg, bottom: mg, left: mg }}
              valueFormat=">-.4s"
              colors={colors}
              motionConfig="wobbly"
              enableArcLabels={isMobile}
              arcLinkLabel="label"
              innerRadius={0.5}
              padAngle={1}
              cornerRadius={4}
              activeOuterRadiusOffset={8}
              enableArcLinkLabels={!isMobile}
              tooltip={(p) => (
                <Tooltip value={p.datum.value} label={p.datum.label} disable={isMobile} />
              )}
            />
          )}
        </CardContent>
      </Card>
    </Paper>
  )
}
