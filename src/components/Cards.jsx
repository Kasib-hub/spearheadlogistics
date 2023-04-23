import Logo from '../assets/smallLogo.png'
import Vision from '../assets/vision.png'
import Employment from '../assets/employment.png'
import Training from '../assets/training.png'
import Values from '../assets/values.png'
import Service from '../assets/service.png'
import './Cards.css'

function Cards() {

  return (
    <>
    <div className='box-row'>
      <div className="card">
        <img src={Logo} alt="spearhead logo" className="card-img"/>
        <p className='label'>Mission</p>
      </div>
      <div className="card">
        <img src={Vision} alt="longroad" className="card-img"/>
        <p className='label'>Vision</p>
      </div>
      <div className="card">
        <img src={Values} alt="longroad" className="card-img"/>
        <p className='label'>Values</p>
      </div>
      <div className="card">
        <img src={Service} alt="manLooking" className="card-img"/>
        <p className='label'>Services</p>
      </div>
      <div className="card">
        <img src={Employment} alt="truck_driver" className="card-img"/>
        <p className='label'>Employment</p>
      </div>
      <div className="card">
        <img src={Training} alt="truck_driver" className="card-img"/>
        <p className='label'>Training</p>
      </div>
    </div>

    </>
  );
}

export default Cards;