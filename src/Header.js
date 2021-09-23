import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header()
{
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto navbar_link">
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product</Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default Header