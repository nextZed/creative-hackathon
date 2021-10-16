import { getValueFormatter } from '@nivo/core'

export const formatShortNumber = (value: any) => getValueFormatter('>-.4s')(value)
