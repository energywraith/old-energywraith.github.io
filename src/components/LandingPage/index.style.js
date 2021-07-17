import styled, { keyframes } from "styled-components"
import backgroundImage from './images/splash.webp'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-height: -webkit-fill-available;
  color: white;
  display: grid;
  grid-template: auto 1fr auto / auto auto;
  align-items: center;
  justify-content: space-between;
  font-family: Rubik;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0%;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) 75% 75% no-repeat;
    
    filter: brightness(0.7);
  }
`

const BreathAnimation = keyframes`
  from {
    transform: scale(0.85)
  }
  to {
    transform: scale(1)
  }
`

export const More = styled.div`
  cursor: pointer;
  width: fit-content;

  & a {
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 1em;
    padding: 2em;

    &:not(:hover) > img {
      animation: ${BreathAnimation} 0.5s infinite alternate-reverse;
    }

    & > img {
      height: 1.5em;
      width: 1.5em;
      filter: invert(1);

      &:hover {
        transform: scale(1);
      }
    }
  }

  @media(max-width: 600px) {
    width: 100%;
    grid-column: 1/3;

    & a {
      padding: 2em 0;
      width: 100%;
      justify-content: center;
    }
  }
`