import styles from '../styles/Layout.module.css';
import Navbar from '../components/Navbar';
import { Container } from '@material-ui/core';

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <Container>
                {children}
        </Container>
        </>
    )
}
export default Layout