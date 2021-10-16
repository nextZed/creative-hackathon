// import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
// import DialogContentText from '@mui/material/DialogContentText';
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import SaveIcon from '@mui/icons-material/Save'
import { formatCountry, MESSAGES } from 'shared/i18n'
import sortBy from 'lodash.sortby'
import { useCallback, useContext, useMemo, useState } from 'react'
import { CovidContext } from 'core/context'
import Button from '@mui/material/Button'
import { allWorldId } from 'core/components/Navigation/components/CountryDialog/CountryDialog.const'
import { Value } from 'core/components/Navigation/components/CountryDialog/CountryDialog.types'

export const CountryDialog = (props: DialogProps) => {
  const { regions, setChosenRegion } = useContext(CovidContext)
  const [value, setValue] = useState<Value>(null)

  const options = useMemo(
    () => [
      { id: allWorldId, label: MESSAGES.ALL_WORLD },
      ...sortBy(
        regions?.map(({ properties }) => ({
          id: properties.iso_n3,
          label: formatCountry(properties.iso_n3),
        })) || [],
        (el) => el.label
      ),
    ],
    [regions]
  )

  const handleChange = useCallback((e: any, newValue: Value) => {
    setValue(newValue)
  }, [])

  const handleSave = useCallback(() => {
    if (!value || value.id === allWorldId) {
      setChosenRegion(undefined)
    } else {
      setChosenRegion(regions?.find((rg) => rg.properties.iso_n3 === value.id))
    }

    props.onClose?.({}, 'escapeKeyDown')
  }, [value, setChosenRegion, regions])

  return (
    <Dialog {...props}>
      <DialogTitle>{MESSAGES.CHOOSE_LOCATION_FOR_INFO}</DialogTitle>
      <DialogContent>
        <Autocomplete
          id="countrySelect"
          options={options}
          sx={{ mt: 1, mb: 1 }}
          fullWidth
          onChange={handleChange}
          value={value}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              handleSave()
              ev.preventDefault()
            }
          }}
          renderInput={(params) => (
            <TextField {...params} label={MESSAGES.LOCATION} autoFocus />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} endIcon={<SaveIcon />}>
          {MESSAGES.SAVE}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
