import { HiMenuAlt2 } from 'react-icons/hi'
import { FaSuitcase } from 'react-icons/fa'
import { motion } from 'framer-motion'

import './navbar.css'

import NavRight from './NavRight'

export const Navigation = ({ isOpen, setIsOpen }) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const handleCloseMenu = () => {
    setIsOpen(false)
  }
  return (
    <div className="navigation">
      {/* left */}
      <div className="navLeft">
        <button className="navLeftIcon" onClick={handleCloseMenu}>
          <HiMenuAlt2
            style={{
              fontSize: '2rem',
              width: '2rem',
              height: '2rem',
              cursor: 'pointer',
              fontWeight: '100',
            }}
          />
        </button>
        <div className="navFreeshipping">
          <FaSuitcase
            style={{
              fontSize: '1.5rem',
              fontWeight: '100',
              color: 'rgb(51, 51, 51)',
            }}
          />
          <h4>Freeshipping</h4>
        </div>
        <div className="navYear">
          <h4>{currentYear}</h4>
        </div>
      </div>
      {/* right */}
      <NavRight />
    </div>
  )
}
