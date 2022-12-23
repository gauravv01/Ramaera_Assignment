import Container from 'react-bootstrap/Container';
import {Nav , Navbar} from 'react-bootstrap';
import Image from '../../Reusable/Image';
import constants from '../../../Data/Constants/Constants';
import SearchIcon from '../../../Data/img/Search-icon.png';
import './Topbar.css';

function Topbar() {
  return (
    <Navbar  className='navbar_outer_div' expand="lg">
        <Navbar.Text as='div'  >{constants.HOME}</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-button' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Container className='container-class'>
            <Nav.Item >{constants.OUR_INDUSTRIES}</Nav.Item>
            <Nav.Item >{constants.OUR_COMPANIES}</Nav.Item>
            </Container>
            <Container  >
            <Nav.Item >{constants.CAREER}</Nav.Item>
            <Nav.Item >{constants.CONTACT}</Nav.Item>
            <Nav.Item ><Image src={SearchIcon} alt='Search-icon' styles={{height: '1.5rem' , width:'1.5rem' , marginRight:'1rem'}}/></Nav.Item>
            </Container>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;