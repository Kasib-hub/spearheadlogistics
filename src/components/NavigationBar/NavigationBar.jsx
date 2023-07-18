import { Link } from 'react-router-dom'
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="NavigationBar">
      {/* <div className='nav-btn-edge'>
        <span>SPEARHEAD OF ALL LOGISTICS</span>
      </div> */}
      <div className='nav-btns'>
        <Link to='/'><strong>Home</strong></Link>
        <Link to='/about'><strong>About Us</strong></Link>
        <Link to='/contact'><strong>Contact</strong></Link>
        <Link to='/services'><strong>Services</strong></Link>

      </div>
    </nav>
  );
}

export default NavigationBar;