import Globe, { GlobeMethods } from 'react-globe.gl'
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import useTheme from '@mui/material/styles/useTheme'
import { CovidContext, CovidFeature, LoaderContext } from 'core/context'
import Grid from '@mui/material/Grid'
import { Store } from 'App.types'
import { scaleLinear } from 'd3-scale'
import { DEFAULT_SPACE } from 'shared/const'
import { formatCountry } from 'shared/i18n'
import { useMobile } from 'shared/hooks'
import { formatShortNumber } from 'shared/utils'
import { casesPercent } from './Landing.utils'
import { POV_CHANGE_DUR } from './Landing.const'
import { LandingGraphs } from './components'

export const Landing = () => {
  const { regions, setChosenRegion, chosenRegion } = useContext(CovidContext)
  const { setLoaderState } = useContext(LoaderContext)
  const [configured, setConfigured] = useState(false)
  const [hoverPolygon, setHoverPolygon] = useState<Store | null>(null)
  const theme = useTheme()
  const isMobile = useMobile()
  const globeRef = useRef<GlobeMethods>()
  const globeOuterRef = useRef<HTMLDivElement>(null)

  const maxVal = useMemo(
    () => regions && Math.max(...regions.map(casesPercent)),
    [regions]
  )

  const colorScale = scaleLinear<string>()
    .domain([0, maxVal || 0])
    .range([theme.palette.primary.light, theme.palette.primary.dark])

  const handlePolygonClick = useCallback(
    (feature: any) => {
      setChosenRegion(feature as CovidFeature)
    },
    [setChosenRegion]
  )

  useEffect(() => {
    const lat = chosenRegion?.properties?.countryInfo?.lat
    const lng = chosenRegion?.properties?.countryInfo?.long
    if (lat && lng) {
      // @ts-ignore
      globeRef.current.controls().autoRotate = false
      globeRef.current?.pointOfView(
        {
          lat,
          lng,
        },
        POV_CHANGE_DUR
      )
    }
  }, [chosenRegion])

  useEffect(() => {
    if (globeRef.current && !configured) {
      // @ts-ignore
      globeRef.current.controls().enableZoom = false
      // @ts-ignore
      globeRef.current.controls().autoRotate = true
      globeRef.current.pointOfView({ lat: 37, lng: 55, altitude: 1.5 })

      setConfigured(true)
    }
  }, [globeRef.current, configured])

  return regions ? (
    <Grid container spacing={DEFAULT_SPACE}>
      <Grid item xs={12} lg={6} id="globe" ref={globeOuterRef}>
        <Globe
          showGlobe={false}
          // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          showAtmosphere={false}
          width={globeOuterRef.current?.clientWidth}
          height={isMobile ? window.innerWidth : window.innerHeight - 200}
          backgroundColor={theme.palette.background.default}
          onGlobeReady={() => setLoaderState(false)}
          ref={globeRef}
          polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
          polygonCapColor={(f: any) =>
            (f === hoverPolygon && !isMobile) ? theme.palette.primary.main : colorScale(casesPercent(f))
          }
          polygonsData={regions}
          polygonStrokeColor={() => theme.palette.background.default}
          polygonLabel={(f: any) =>
            !isMobile
              ? `<div id="globeTooltip">
              ${formatCountry(f.properties.iso_n3)}
              <div>${formatShortNumber(f.properties.cases)}</div>
              <div>${casesPercent(f).toFixed(2)}%</div>
            </div>`
              : ''
          }
          onPolygonClick={handlePolygonClick}
          onPolygonHover={setHoverPolygon}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <LandingGraphs />
      </Grid>
    </Grid>
  ) : null
}
