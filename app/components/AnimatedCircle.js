import { BsArrowsAngleExpand } from 'react-icons/bs'

export default function AnimatedCircle({
  roundedText,
  
}) {
  const createRoundedText = () => {
    let roundedText = 'beauty that keeps up with you'
    let text = roundedText
    text = text
      .split(' ')
      .map(
        (char, i) =>
          `<span style="transform: rotate(${i * 30}deg)">${char}</span>`
      )
      .join(' ')
    return { __html: text }
  }
  return (
    <a className="roundedTextContainer">
      <div className="circle">
        <div className="logo">
          <BsArrowsAngleExpand style={{fontSize:'1.5rem'}}/>
        </div>
        <div className="roundedText">
          <p
            dangerouslySetInnerHTML={createRoundedText()}
          ></p>
        </div>
      </div>
    </a>
  )
}
