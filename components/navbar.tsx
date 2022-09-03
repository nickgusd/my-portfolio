import React from 'react'
import Image from "next/image";

import logo from "../public/assets/NG-portfolio-logo3.png";

import styles from "./navbar.module.css"

export const Navbar = () => {
    const navItems = ["About", "Portfolio", "Experience", "Resume"];
    return(
        <div className={styles.wrapper}>
            <div>
            <Image 
                src={logo}
                width={55}
                height={55}
                alt="logo"
            />
            </div>
            <div className={styles.linkWrapper}>
                {navItems.map(item => {
                    return (
                        <div className={styles.link} key={item}>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    ) 
}
