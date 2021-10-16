import { useCallback, useContext, useMemo, useState } from 'react'
import { CovidContext } from 'core/context'
import { formatCountry, MESSAGES } from 'shared/i18n'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useMobile } from 'shared/hooks'
import { CountryDialog } from 'core/components/Navigation/components/CountryDialog'

export const CountrySelector = () => {
  const [open, setOpen] = useState(false)
  const { chosenRegion } = useContext(CovidContext)
  const isMobile = useMobile()

  const handleOpenChange = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const currentTitle = useMemo(
    () => {
      const formattedCountry = formatCountry(chosenRegion?.properties.iso_n3)
      if (!formattedCountry) return MESSAGES.ALL_WORLD
      // Мне за это стыдно, но времени нет
      if (formattedCountry === 'КНР (Китайская Народная Республика)') return 'КНР'
      return formatCountry(chosenRegion?.properties.iso_n3)
    },
    [chosenRegion]
  )

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="outlined" onClick={handleOpenChange}>{currentTitle}</Button>
      </Box>
      <CountryDialog fullScreen={isMobile} open={open} onClose={handleOpenChange}/>
    </>
  )
}
