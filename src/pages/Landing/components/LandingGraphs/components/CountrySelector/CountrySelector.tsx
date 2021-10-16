import { useCallback, useContext, useMemo, useState } from 'react'
import Typography from '@mui/material/Typography'
import { CovidContext } from 'core/context'
import { formatCountry, MESSAGES } from 'shared/i18n'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useMobile } from 'shared/hooks'
import { CountryDialog } from '../CountryDialog'

export const CountrySelector = () => {
  const [open, setOpen] = useState(false)
  const { chosenRegion } = useContext(CovidContext)
  const isMobile = useMobile()

  const handleOpenChange = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const currentTitle = useMemo(
    () => formatCountry(chosenRegion?.properties.iso_n3) || MESSAGES.ALL_WORLD,
    [chosenRegion]
  )

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="outlined" onClick={handleOpenChange}>{MESSAGES.LOCATION}</Button>
        <Typography variant="h6" sx={{ ml: 1 }}>{currentTitle}</Typography>
        <Typography variant="caption" color="gray" ml="auto">({MESSAGES.ALL_TIME})</Typography>
      </Box>
      <CountryDialog fullScreen={isMobile} open={open} onClose={handleOpenChange}/>
    </>
  )
}
