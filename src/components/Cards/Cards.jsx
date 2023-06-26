import Logo from '../../assets/smallLogo.png'
import Vision from '../../assets/vision.png'
import Employment from '../../assets/employment.png'
import Training from '../../assets/training.png'
import Values from '../../assets/values.png'
import Service from '../../assets/service.png'
import './Cards.css'
import { useNavigate } from 'react-router-dom'

function Cards() {

  const navigate = useNavigate();

  return (
    <>
    <div className='box-row'>
      <div className="card" onClick={() => navigate('/mission')}>
        <img src={Logo} alt="spearhead logo" className="card-img"/>
        <p className='label'>Mission</p>
      </div>
      <div className="card" onClick={() => navigate('/vision')}>
        <img src={Vision} alt="longroad" className="card-img"/>
        <p className='label'>Vision</p>
      </div>
      <div className="card" onClick={() => navigate('/values')}>
        <img src={Values} alt="hands-clasped" className="card-img"/>
        <p className='label'>Values</p>
      </div>
      <div className="card" onClick={() => navigate('/services')}>
        <img src={Service} alt="man-looking" className="card-img"/>
        <p className='label'>Services</p>
      </div>
      <div className="card" onClick={() => navigate('/employment')}>
        <img src={Employment} alt="truck-driver" className="card-img"/>
        <p className='label'>Careers</p>
      </div>
      <div className="card" onClick={() => navigate('/training')}>
        <img src={Training} alt="man-mask" className="card-img"/>
        <p className='label'>Training</p>
      </div>
    </div>

    </>
  );
}

export default Cards;