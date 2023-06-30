import Dropdown from '../Dropdown/Dropdown';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="NavigationBar">
      {/* <div className='nav-btn-edge'>
        <span>SPEARHEAD OF ALL LOGISTICS</span>
      </div> */}
      <div>
        <span>Home</span>
        <span>About Us</span>
        <Dropdown />
        <span>Contact</span>
        
      </div>

      
    </nav>
  );
}

export default NavigationBar;