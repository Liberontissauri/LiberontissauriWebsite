import React from 'react'
import Image from 'next/image'
import Styles from "./index.module.css"
import ProjectCard from "../../ProjectCard"

function Projects() {
    return (
        <div className={Styles.container}>
            <h2 className={Styles.title}>Projects</h2>
            <div className={Styles.cardDiv}>
                <ProjectCard title="Brainfuck Interpreter" src="/brain.png"></ProjectCard>
                <ProjectCard title="Ultimate Tic Tac Toe" src="/tictactoe.png"></ProjectCard>
                <ProjectCard title="Ball Physics Simulation" src="/balls.png"></ProjectCard>
            </div>
            <button className={Styles.button}>Check More Projects</button>
        </div>
    )
}

export default Projects
