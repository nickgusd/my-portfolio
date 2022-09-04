import React from "react"

import { Button } from "./button";

import styles from "./about.module.css";

export const About = () => {
    return (
        <div className={styles.wrapper}>
                <p>Hello, my name is</p>
                <h1>Nick Guimarais</h1>
                <h2>I am a Software Engineer</h2>
                <div>
                    I specialize in building User Interfaces for web applications! Currently I am working
                    As a Front End Engineer for a big data startup called <span>DemystData.</span>  I started at this company 
                    By helping build a Banker’s Portal for one of their Banking clients, but now for the last
                    8 months I have been working as one of the main UI developers for <span><a href="https://www.demyst.com" target="_blank" >Demyst.com.</a></span>
                </div>
                <Button />
        </div>
    )
}