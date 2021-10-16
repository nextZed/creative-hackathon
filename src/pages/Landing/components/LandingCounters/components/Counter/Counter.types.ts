import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon/'

export interface CounterProps {
  color: string,
  icon:  OverridableComponent<SvgIconTypeMap>
  label: string
  value?: number
}
