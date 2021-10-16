import { useCallback, useState } from 'react'
import { Drawer, Header } from './components'

export const Navigation = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  return (
    <>
      <Header onDrawerToggle={handleDrawerToggle} />
      <Drawer onDrawerToggle={handleDrawerToggle} open={open} />
    </>
  )
}
