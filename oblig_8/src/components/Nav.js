import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/actors">Actors</NavLink>
      </li>
    </ul>
  )
}

export default Nav
