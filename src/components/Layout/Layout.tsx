import { useState } from 'react'
import { LayoutView } from './LayoutView'

export const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageRu, setIsLanguageRu] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const toggleLang = () => {
    setIsLanguageRu(!isLanguageRu)
  }
  return (
    <LayoutView
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      isLanguageRu={isLanguageRu}
      toggleLang={toggleLang}
    >
      {children}
    </LayoutView>
  )
}
