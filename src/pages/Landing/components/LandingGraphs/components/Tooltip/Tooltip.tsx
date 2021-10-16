import Paper from '@mui/material/Paper'
import InfoIcon from '@mui/icons-material/Info'
import Typography from '@mui/material/Typography'
import { formatShortNumber } from 'shared/utils'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = ({ value, label }: TooltipProps) => (
  <Paper elevation={6} sx={{ p: 2, display: 'inline-flex', alignItems: 'center' }}>
    <InfoIcon sx={{ mr: 1 }} />
    <Typography variant="body1" component="span">
      {`${label}:`}
    </Typography>
    <Typography variant="body1" component="span" sx={{ ml: 0.5 }}>
      <b>{formatShortNumber(value)}</b>
    </Typography>
  </Paper>
)
