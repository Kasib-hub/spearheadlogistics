import Header from '../components/Header/Header';
import { useNavigate } from 'react-router-dom';

function VisionPage() {

  const navigate = useNavigate();
  
  return (
    <div className='body-page-text'>
      <Header 
        titleText='Vision'
        pText='Our vision at Spearhead is to become a global leader in the NEMT industry. We aim to achieve this by setting the highest standards for quality, safety, and WORLD CLASS customer transportation services, and constantly striving to exceed our clients’ expectations while also providing peace of mind to their loved ones and caregivers.' 
      />
      <button className='return-btn' onClick={() => navigate('/')}>Go Back</button>
      
    </div>
  );
}

export default VisionPage;