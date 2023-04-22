
import logo from '../assets/logo.jpeg'
// homepage will have a slew of buttons to click on that navigate to other pages
// so it will be a card=div with an image, title, and as a link

function HomePage() {

  return (
    <>
      <h1 className="title">Spearhead of All Logistics</h1>
      <p className='p-text'>A non-emergency medical transportation business in San Antonio, Texas.</p>
      <p className='p-text'>"You Don't Wait On Us, We Wait On You."</p>
      <img src={logo} alt="spearhead logo" className="logo"/>
      {/* import the card */}
    </>
  );
}

export default HomePage;