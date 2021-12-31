import React from 'react'
import Image from 'next/image'
import Styles from "./index.module.css"

function AboutMe() {
    return (
        <div id="About" className={Styles.container}>
            <h2 className={Styles.title}>Who am I?</h2>
            <p className={Styles.text}>Heyo, my name is João Liberato, and I’ve been 
                learning software development for the last 4 years
                 or so! I’m currently into web development, from frontend to 
                 backend, but sometimes I also do modding for various games.
            </p>
        </div>
    )
}

export default AboutMe
