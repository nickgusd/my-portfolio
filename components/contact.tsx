import React from "react"
import Image from "next/image"

import styles from "./contact.module.css"
import picture from "../public/assets/LinkedinSoft.png"


export const Contact = () => {
    const handleMail = () =>  window.open(`mailto:nick.guimarais@gmail.com`)
    return (
        <div className={styles.wrapper}>
            <Image src={picture} width={316} height={316} alt="portait" />
            <div className={styles.content}>
                <span onClick={handleMail}>Email: nick.guimarais@gmail.com</span>
                <span>Phone: (818) 235-8076 </span>
            </div>
        </div>
    )
}