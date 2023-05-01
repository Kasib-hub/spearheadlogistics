
import Cards from '../components/Cards';
import Footer from '../components/Footer'

function HomePage() {

  return (
    <>
      <h1 className="title">Spearhead of All Logistics</h1>
      <p className='p-text'>A non-emergency medical transportation business in San Antonio, Texas.</p>
      <p className='p-text'>"You Don't Wait On Us, We Wait On You."</p>
      <Cards /><br />
      <Footer />
      {/* <p className='credit'>built by <a href='https://github.com/Kasib-hub'>Kasib Abdullah</a></p> */}
    </>
  );
}

export default HomePage;