import styles from '../styles/Layout.module.css';

const Cities = ({ cities }) => {
    return (
        <>

        <div className={styles.container}>
            <main className={styles.main}>

                {cities}
            </main>
        </div>
        </>
    )
}
export default Cities