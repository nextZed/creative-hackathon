import { useCallback, useState } from 'react'
import { Drawer, Header } from './components'

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev)
  }, [])

  return (
    <>
      <Header onDrawerToggle={handleDrawerToggle} />
      <Drawer onDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
    </>
  )
}
