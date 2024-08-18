import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{backgroundColor: "blueviolet", display: "flex", flexDirection: "column",  justifyContent: "space-between", gap: "30px"}}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
