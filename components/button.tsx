import styles from "./button.module.css"

export const Button = () => {
    return (
        <div className={styles.wrapper} onClick={() => alert("testing")}>
            <p>Check out my Portfolio</p>
        </div>
    )
}