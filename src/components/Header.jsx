import Logo from '../assets/logoCircle.png';
import { useNavigate } from 'react-router-dom';

function Header({titleText, pText}) {

  const navigate = useNavigate();

  return (
    <>
      <div class="image-container">
        <h1 className="header-title">{titleText}</h1>
        <img src={Logo} alt='company logo' className="header-img"/><br />
        <p className='p-header-text'>{pText}</p>
        
      </div>
    </>
    
  );
}

export default Header;