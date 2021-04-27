import { useCallback, useState } from 'react'
import { LayoutView } from './LayoutView'

export const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  return (
    <LayoutView isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}>
      {children}
    </LayoutView>
  )
}
