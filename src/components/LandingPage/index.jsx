import { useRef } from "react"
import { Link as ScrollLink } from "react-scroll"
import Nav from './Nav'
import Introduction from "./Introduction"
import QuickContact from "./QuickContact"
import arrowDown from './images/arrow-down.svg'
import { Container, ContainerBackground, InViewScrollController, More } from './index.style'

const LandingPage = ({ id }) => {
  const backgroundRef = useRef()
  const moreRef = useRef()

  const handleScroll = (entry) => {
    const background = backgroundRef.current
    const more = moreRef.current

    if (entry.intersectionRatio === 1) {
      background.style.backgroundPosition = "75% 80%"
      background.style.filter = "brightness(0.7)"
      more.style.opacity = 1
      more.style.visibility = 'visible'
    } else {
      background.style.backgroundPosition = "75% 100%"
      background.style.filter = "brightness(0.4)"
      more.style.opacity = 0
      more.style.visibility = 'hidden'
    }
  }

  return (
    <Container indicators="all" id={id}>
      <ContainerBackground ref={backgroundRef} />
      <InViewScrollController
        onChange={(inView, entry) => handleScroll(entry)}
        threshold={[
          0,
          0.5,
          1
        ]}
      />
      <Nav />
      <Introduction />
      <QuickContact />
      <More ref={moreRef}>
        <ScrollLink to="Projects" smooth={true} duration={500}>
          <img src={arrowDown} alt="arrow pointing down" />
          <span> Find out more about me </span>
        </ScrollLink>
      </More>
    </Container>
  )
}

export default LandingPage