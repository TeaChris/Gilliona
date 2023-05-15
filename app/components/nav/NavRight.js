import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { ImBehance } from 'react-icons/im'
import { BsInstagram, BsDribbble } from 'react-icons/bs'
import { motion } from 'framer-motion'

import Image from 'next/image'
import lips from '../../assets/lips.jpeg'
import about from '../../assets/about.png'
import story from '../../assets/story.jpg'
import color from '../../assets/color.jpg'
import nav from '../../assets/navlogo.png'

const NavRight = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="navRight">
      {/* top */}
      <div className="navRightTop">
        {/* left */}
        <div className="navTopLeft">
          <ul className="navTopNumbers">
            <div className="navTopLinks">
              <p>01</p>
              <li>LIPSLOVE</li>
            </div>
            <div className="navTopLinks">
              <p>02</p>
              <li className="imageDisplay">
                <p>ABOUT US</p>
                <div className="imageHover">
                  <Image src={about} alt="aboutUs" />
                </div>
              </li>
            </div>
            <div className="navTopLinks">
              <p>03</p>
              <li className="imageDisplay">
                <p>STORY FOUNDER</p>
                <div className="imageHover">
                  <Image src={story} alt="aboutUs" />
                </div>
              </li>
            </div>
            <div className="navTopLinks">
              <p>04</p>
              <li className="imageDisplay">
                <p>COLOR CARE</p>
                <div className="imageHover">
                  <Image src={color} alt="aboutUs" />
                </div>
              </li>
            </div>
          </ul>
        </div>
        {/* right */}
        <div className="navTopRight">
          <Image src={lips} alt="lips love" className="navTopimage" />
        </div>
      </div>
      {/* bottom */}

      <div className="navTopBotton">
        <div className="navLogo">
          <Image src={nav} alt="logo" className="navBottomLogo" />
          <div className="museMind">
            <small>{currentYear} musemind</small>
            <small>All right reserved</small>
          </div>
        </div>
        {/* about */}
        <div className="navBottomAbout">
          <small>Dhaka, Bangladesh</small>
          <small>+127 234 543 567</small>
        </div>
        {/* website */}
        <div className="navBottomWebsite">
          <small>www.musemind.com.au</small>
          <small>musemind.aol@mail.com</small>
        </div>
        {/* socials */}
        <div className="navBottomSocials">
          <div className="navSocials">
            <FaFacebookF
              style={{
                color: '#000',
                fontSize: '1rem',
              }}
            />
          </div>
          <div className="navSocials">
            <ImBehance
              style={{
                color: '#000',
                fontSize: '1rem',
              }}
            />
          </div>
          <div className="navSocials">
            <FaLinkedinIn
              style={{
                color: '#000',
                fontSize: '1rem',
              }}
            />
          </div>
          <div className="navSocials">
            <BsInstagram
              style={{
                color: '#000',
                fontSize: '1.4rem',
              }}
            />
          </div>
          <div className="navSocials">
            <BsDribbble
              style={{
                color: '#000',
                fontSize: '1rem',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default NavRight
