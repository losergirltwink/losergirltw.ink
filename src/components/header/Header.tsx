import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import ErrorPage from '../error/Error';

const Header: React.FC<{}> = () => {
    return (
        <Navbar fixed='top' expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand>losergirltw.ink</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav.Link href='/'>home</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
