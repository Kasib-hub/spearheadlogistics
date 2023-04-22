import logo from '../assets/logo.jpeg'
import './Cards.css'

function Cards() {

  return (
    <>
    <div className='box-row'>
      <div className="card">
        <img src={logo} alt="spearhead logo" className="logo"/>
        <p className='label'>Mission</p>
      </div>
      <div className="card">
        <img src={logo} alt="spearhead logo" className="logo"/>
        <p className='label'>Mission</p>
      </div>
    </div>

    </>
  );
}

export default Cards;