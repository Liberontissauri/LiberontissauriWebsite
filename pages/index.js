import Head from 'next/head'
import Image from 'next/image'
import Top from "../components/Sections/Top"
import AboutMe from '../components/Sections/AboutMe'
import styles from '../styles/Home.module.css'
import Projects from '../components/Sections/Projects'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <svg width="100%" height="100vh">
          <pattern id="pattern-checkers" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse" >
            <rect fill="none" x="0" y="30" width="105" height="105" transform="rotate(-45 50 50)" opacity="40%" stroke="white"/>
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
