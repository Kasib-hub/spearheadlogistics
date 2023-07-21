import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import Marker from '../../assets/marker.svg'
import './Footer.css'

function Footer() {

  return (
    <div className='contact'>
      <p><strong>Contact Us</strong></p>
      <div>
        <img src={Phone} alt='phone' /><span>210-419-6216</span>
      </div>
      <div>
        <img src={Email} alt='email' /><span>spearheadofalllogistics@gmail.com</span>
      </div>
      <div>
        <img src={Marker} alt='marker' /><span>San Antonio, Texas</span>
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default Footer;