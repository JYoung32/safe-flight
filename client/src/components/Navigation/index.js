import React, { useState } from 'react';
import "./style.scss"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const history = useHistory();

    const handleLogout = () => {
        console.log("logout clicked");
        localStorage.clear();
        history.push("/");
    };

    return (
        <div>
            <Navbar className="nav" expand="md">
            <FontAwesomeIcon icon="map-marked-alt" />
                <NavbarBrand href="/">Destination Estimation</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/flights">Flights</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={handleLogout}>Log Out</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;

