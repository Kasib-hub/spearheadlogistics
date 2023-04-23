import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {

  const navigate = useNavigate();

  return (
    <>
      <Header
        titleText='Services' 
      />
      <ul>
        <li>Ambulatory</li>
        <li>Wheelchair</li>
        <li>Stretcher</li>
        <li>Long-Distance</li>
        <li>Special Needs</li>
      </ul>
      <button className='return-btn' onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

export default ServicesPage;