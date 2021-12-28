import Image from 'next/image'
import React from 'react'
import Styles from "./index.module.css"

function ProjectCard(props) {
    return (
        <div className={Styles.container}>
            <h3 className={Styles.title}>{props.title}</h3>
            <Image className={Styles.cover} alt={props.title} width="250px" height="250px" objectFit="cover" src={props.src}></Image>
        </div>
    )
}

export default ProjectCard
