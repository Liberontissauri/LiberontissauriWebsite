import Head from 'next/head'
import Image from 'next/image'
import Top from "../components/Sections/Top"
import AboutMe from '../components/Sections/AboutMe'
import styles from '../styles/Home.module.css'
import Projects from '../components/Sections/Projects'
import { useState, useEffect } from 'react'
import Granim from 'granim'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [hasSetBackground, setHasSetBackground] = useState(false)
  const [hasSetScroll, setHasSetScroll] = useState(false)
  const [background, setBackground] = useState("")
  const [SelectedSection, setSelectedSection] = useState(0)
  const Sections = ["Intro", "About", "Projects"]

  useEffect(() => {
    if(!hasSetBackground) {
      setBackground(new Granim({
        element: '#background',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    [{color: '#63A2DD'},
                     {color: '#fff'}],
                    [{color: '#298DE9'},
                     {color: '#ED84B7'}],
                ],
                transitionSpeed: 20000
            }
      }}));
      setHasSetBackground(true);
    }
    if(!hasSetScroll) {
      window.onwheel = onPageScroll;
      setHasSetScroll(true)
    }
    
  });
  function onPageScroll(e) {
    e.preventDefault()
    const direction = e.deltaY;
    console.log(direction)
    if(direction < 0 && SelectedSection > 0) {
      SelectedSection -= 1
    } else if(direction > 0 && SelectedSection < Sections.length - 1) {
      SelectedSection += 1
    }
    router.push(`/#${Sections[SelectedSection]}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <canvas id="background" className={styles.background_gradient}></canvas>
        <svg width="100%" height="100vh">
          <pattern id="pattern-checkers" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse" >
            <rect fill="none" x="0" y="30" width="105" height="105" transform="rotate(-45 50 50)" opacity="20%" stroke="white"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100vh" fill="url(#pattern-checkers)" />
        </svg>
      </div>
      <Top></Top>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  )
}
