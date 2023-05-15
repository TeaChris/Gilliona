import Image from 'next/image'
import Button from '../Button'
import './header.css'

import bigImage from '../../assets/header1.png'

export default function Header() {
  return (
    <header>
      <div className="container navContainer">
        {/* left */}
        <div className="headerLeft">
          <div className="headerLeftText">
            <h1>
              fashion <br />
              state of
              <br />
              mind
            </h1>
            <p>
              Laborum magna nulla duis ullamco cillum dolor. Voluptate
              exercitation incididunt aliquip deserunt reprehenderit elit.
            </p>
            <Button />
          </div>
          <div className="headerLeftImage">
            <Image src={bigImage} className="headerImageBig" />
          </div>
        </div>
        {/* middle */}

        {/* right */}
        <div className="headerRight">
          <Image src={bigImage} alt="fashion" className="smallHeaderImage" />
        </div>
      </div>
    </header>
  )
}
