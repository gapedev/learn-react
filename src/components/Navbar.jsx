import { Link } from 'react-router-dom'
import ROUTES from '../services/routes'

const Navbar = () => {
  return (
    <header className='header'>
      <div>
        <h1><span>G</span>apedev</h1>
      </div>
      <div>
        <nav className='navbar'>
          <ul>
            {ROUTES.map((route) =>
              <li key={route.id}>
                <Link to={route.path}>{route.name}</Link>
              </li>)}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
