import React from "react";
import Image from "next/image"

import styles from "./sidebar.module.css"

import linkedin from "../public/assets/linkedin.png"
import github from "../public/assets/github-logo.png"
import facebook from "../public/assets/facebook.png"
import instagram from "../public/assets/instagram.png"


export const Sidebar = () => {
    const sideBarItems = [linkedin, github, facebook, instagram]
    return (
        <div className={styles.wrapper}>
            {sideBarItems.map((item, idx) => (
                <a key={idx} className={styles.sidebarItem}>
                    <Image src={item} width={30} height={30}/>
                </a>
            ))}
        </div>
    ) 
}