import React from 'react'
import Image from 'next/image'
import Styles from "./index.module.css"

function Top() {
    return (
        <div className={Styles.container}>
            <Image alt="Liberontissauri Silhouete" src="/profile.png" width="300px" height="300px"></Image>
            <h1 className={Styles.title}>Liberontissauri</h1>
        </div>
    )
}

export default Top
