import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { formatShortNumber } from 'shared/utils'
import Typography from '@mui/material/Typography'
// import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { CounterProps } from './Counter.types'

export const Counter = ({ label, value, icon: Icon, color }: CounterProps) => (
  <Paper elevation={6} sx={{ height: '100%' }}>
    <Card>
      <CardContent>
        <Typography
          variant="caption"
          sx={{ textTransform: 'lowercase', display: 'block' }}
        >
          {label}
        </Typography>
        <Box
          sx={{
            fontSize: (theme) => theme.typography.fontSize * 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {value ? (
            <>
              <Icon sx={{ color, mr: 1 }} fontSize="inherit" />
              <Typography variant="body1" fontSize="inherit" sx={{ color }}>
                {formatShortNumber(value)}
              </Typography>
            </>
          ) : (
            <Typography variant="body1" sx={{ mt: 1 }}>данных нет</Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  </Paper>
)
