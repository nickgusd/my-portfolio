import styles from "./button.module.css"

import { useRouter } from "next/router"

export const Button = () => {
    const router = useRouter()
    return (
        <div className={styles.wrapper} onClick={() => router.push("/portfolio")}>
            <p>Check out my Portfolio</p>
        </div>
    )
}