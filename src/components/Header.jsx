import Logo from '../assets/logoCircle.png';

function Header({titleText}) {

  return (
    <>
      <div class="image-container">
        <img src={Logo} alt='company logo'/>
        <div class="overlay">
          <h1 className="title">{titleText}</h1>
        </div>     
      </div>
      <button className='return-btn'>click here</button>
    </>
    
  );
}

export default Header;