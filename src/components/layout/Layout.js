import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './Layout.styled';

const navItems = [
  { href: ' ', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Layout = () => {
    return (
        <div>
            <Header>
            <nav>
                {navItems.map(({ href, text }) => (<Link to={href} key={href}
                style={{ marginRight: "15px" }}>{text}
                </Link>))}
            </nav>
            </Header>
            <Outlet />
        </div>
     );
};

Layout.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.exact({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
  )
}

export default Layout;