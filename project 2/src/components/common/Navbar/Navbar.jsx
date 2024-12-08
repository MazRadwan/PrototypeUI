import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPlane } from 'react-icons/fa';
import NavLinks from './NavLinks';
import SignInButton from './SignInButton';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <FaPlane className={styles.icon} />
          <span className={styles.text}>AEROTRAQ</span>
        </Link>

        <NavLinks onLinkClick={() => setIsOpen(false)} />
        
        <div className={styles.actions}>
          <SignInButton />
          <button 
            className={styles.hamburger} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <NavLinks onLinkClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;