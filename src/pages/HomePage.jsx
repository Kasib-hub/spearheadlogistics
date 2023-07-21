import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';

import './HomePage.css'

function HomePage() {

  return (
    <div className='body-page-text'>
      <h1 className="title">Spearhead of All Logistics</h1>
      <p className='p-text'>A non-emergency medical transportation business in San Antonio, Texas.</p>
      <p className='p-text'>"You Don't Wait On Us, We Wait On You."</p>
      {/* <button className='red-btn-lg'>Book Now</button> */}
      <Cards /><br />
      {/* <p className='credit'>built by <a href='https://github.com/Kasib-hub'>Kasib Abdullah</a></p> */}
      <Footer />
    </div>
  );
}

export default HomePage;