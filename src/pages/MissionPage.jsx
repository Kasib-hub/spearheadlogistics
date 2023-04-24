import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


function MissionPage() {

  const navigate = useNavigate();

  return (
    <>
      <Header 
        titleText='Mission'
        pText='Our mission at Spearhead is to provide safe, dependable, and compassionate transportation services to those with medical needs. We strive to create a comfortable and stress-free experience for our clients, ensuring their timely arrival at medical appointments, treatment facilities, and other necessary destinations. Our team of skilled and compassionate drivers provides the highest level of customer service, with a focus on meeting the unique needs of each individual client. At Spearhead we are committed to serving the greater San Antonio community and improving the quality of life for those in need of medical transportation services.' 
      />
      <button className='return-btn' onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

export default MissionPage;