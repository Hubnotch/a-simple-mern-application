/* eslint-disable no-unused-vars */
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icon';
import {Link} from 'react-router-dom';

function Headers() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to="/login">
                    <FaSignInAlt/> Login
                </Link> 
            </li>
            <li>
                <Link to="/register">
                    <FaUser/> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Headers