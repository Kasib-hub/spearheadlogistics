import Phone from '../assets/phone.svg'
import './Footer.css'

function Footer() {

  return (
    <>
      <div className='contact'>
        <img src={Phone} alt='phone' /><span>*phone here*</span>
      </div>
      
    </>
  );
}

export default Footer;