'use client'

import Image from 'next/image'
import logo from '../../assets/logo.png'
import Link from 'next/link'

import { TbMenu } from 'react-icons/tb'

import './navbar.css'
import { Navigation } from './Navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="navbar">
      <nav>
        <div className="container navContainer">
          {/* logo */}
          <div className="logo">
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          {/* hambuger */}
          <div className="btnHambuger">
            <button className="hambuger" onClick={toggleMenu}>
              <TbMenu
                style={{
                  fontSize: '2rem',
                  cursor: 'pointer',
                  fontWeight: '200',
                }}
              />
            </button>
          </div>

          {/* profile */}
          <div className="profile">
            <ul className="signup">
              <li>signup/in</li>
              <li>cart</li>
            </ul>
            <div className="cartNumber">
              <span>3</span>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className=""
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {isOpen && <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default Navbar
