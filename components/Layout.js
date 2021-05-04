import styles from '../styles/Layout.module.css';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <main className={styles.main}>
            
                {children}
            </main>
        </div>
        </>
    )
}
export default Layout