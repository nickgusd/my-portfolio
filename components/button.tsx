import styles from "./button.module.css"

export const Button = () => {
    return (
        <div className={styles.wrapper} onClick={() => alert("testing")}>
             Check out my Portfolio
        </div>
    )
}