import styles from '../styles/Layout.module.css';
import Navbar from '../components/Navbar';
import { Container } from '@material-ui/core';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <Container maxWidth="lg">
                {children}
        </Container>
        <Footer/>
        </>
    )
}
export default Layout