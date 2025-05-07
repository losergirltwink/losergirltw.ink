import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ErrorPage from '../error/Error';

interface HeaderProps {
    props?: any;
}

const Header: React.FC<HeaderProps> = ({ props }) =>{
    if(props.error) {
        <ErrorPage errorMessage={"fake error message"}/>
    }
    return (
        <Navbar fixed='top' expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand>losergirltw.ink</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav.Link>home</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;