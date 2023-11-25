
import { useNavigate } from 'react-router-dom';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  const userName = sessionStorage.getItem('name');
  const userEmail = sessionStorage.getItem('email');

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav className="header">
      <Image src={logo} className='logo' />
      <div className="content">
        {isLoggedIn && (
          <div className="user-info">
            <span><b>Usuário: </b>{userName} </span>
            <span><b>Email: </b>{userEmail} </span>
            <BoxArrowRight
              color='#15d38d'
              onClick={handleLogout} 
              style={{ cursor: 'pointer'}}
            />
            
          </div>
        )}
        Global Solution 2023 - Engenharia de Software
      </div>
    </nav>
  );
};

export default Header;