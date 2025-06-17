import { Link, NavLink } from 'react-router-dom';
import classes from './navbar.module.scss';
import hamIcon from '/icons/ham.svg';
import { useState } from 'react';
import { Home } from 'lucide-react';

export interface Props {
  title: string;
  menuItems?: string[];
  children?: React.ReactNode;
}

function Navbar({ title, menuItems, children }: Props) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={classes.navbar}>
      <h1 data-testid="navbar">
        <Link to="/" className={classes.home}>
          <Home size={24} />
        </Link>
        {title}
        <a href="/" target="blank">
          <img
            src="https://th.bing.com/th/id/OIP.Phl2LnIGL0jXFoEw9Hm35QHaGc?w=2300&h=2000&rs=1&pid=ImgDetMain"
            alt="github repo"
            className={classes.github}
          />
        </a>
      </h1>

      {children}

      {menuItems ? (
        <>
          <button onClick={() => setToggle(!toggle)}>
            <img src={hamIcon} alt="hamburger" />
          </button>
          <ul data-toggle={toggle}>
            {menuItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/sorting-visualizer/${item}`}
                  className={({ isActive }) => (isActive ? classes.active : '')}
                  onClick={() => setToggle(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </nav>
  );
}

export default Navbar;
