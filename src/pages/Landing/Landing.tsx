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
import useMediaQuery from '@mui/material/useMediaQuery'
import { DEFAULT_SPACE } from 'shared/const'
import { scaleLinear } from 'd3-scale'
import { formatCountry } from 'shared/i18n'
import { casesPercent } from './Landing.utils'
import { POV_CHANGE_DUR } from './Landing.const'
import { LandingGraphs } from './components'

export const Landing = () => {
  const [configured, setConfigured] = useState(false)
  const { regions, setChosenRegion } = useContext(CovidContext)
  const { setLoaderState } = useContext(LoaderContext)
  const theme = useTheme()
  const globeRef = useRef<GlobeMethods>()
  const globeOuterRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const maxVal = useMemo(
    () => regions && Math.max(...regions.map(casesPercent)),
    [regions]
  )

  const colorScale = scaleLinear<string>()
    .domain([0, maxVal || 0])
    .range([theme.palette.primary.light, theme.palette.primary.dark])

  const handlePolygonClick = useCallback(
    (feature: any) => {
      const lat = feature?.properties?.countryInfo?.lat
      const lng = feature?.properties?.countryInfo?.long
      if (lat && lng) {
        setChosenRegion(feature as CovidFeature)
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
    },
    [setChosenRegion, globeRef.current]
  )

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
      <Grid item xs={12} sm={6} id="globe" ref={globeOuterRef}>
        <Globe
          showGlobe={false}
          showAtmosphere={false}
          width={globeOuterRef.current?.clientWidth}
          height={isMobile ? window.innerWidth : window.innerHeight - 200}
          backgroundColor={theme.palette.background.default}
          onGlobeReady={() => setLoaderState(false)}
          ref={globeRef}
          polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
          polygonCapColor={(f: any) => colorScale(casesPercent(f))}
          polygonsData={regions}
          polygonStrokeColor={() => theme.palette.background.default}
          polygonLabel={({ properties }: any) => `<div id="globeTooltip">${formatCountry(properties.iso_n3)}</div>`}
          onPolygonClick={handlePolygonClick}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <LandingGraphs />
      </Grid>
    </Grid>
  ) : null
}
