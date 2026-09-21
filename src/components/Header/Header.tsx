import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    onLogout: () => void;
}

const Header = ({ onLogout }: HeaderProps) => {
    return (
        <div className="header">
            <p>4Langs Admin dashboard</p>
            <button className='logout__button' onClick={onLogout}>
                Logout
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
            
        </div>
    )
}

export default Header;