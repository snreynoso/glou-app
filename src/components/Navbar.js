import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to='budget-creation'>Create New Budget</Link>
            {/* <Link to='/'>Logout</Link> */}
        </div>
    );
}

export default Navbar; 