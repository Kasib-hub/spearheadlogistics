import Header from '../components/Header/Header';
import { useNavigate } from 'react-router-dom';

function TrainingPage() {

  const navigate = useNavigate();

  return (
    <div className='body-page-text'>
      <Header 
        titleText='Training'
      />
      <p><strong>TRAINING AND CERTIFICATIONS</strong></p>
      <ul>
        <li>Adult/Child First Aid and CPR</li>
        <li>Defensive Driving</li>
        <li>Passenger Assistance and Safety</li>
        <li>Lift and Transfer Training</li>
        <li>Wheelchair and Mobility Assistance</li>
        <li>ADA (American Disability ACT) Understanding Clients With Disabilities</li>
        <li>Fire Safety</li>
        <li>Disaster Preparedness</li>
        <li>Client Sensitivity/Cultural Awareness</li>
        <li>Sexual Harassment and Response Training</li>
        <li>Client Confidentiality (HIPPA)</li>
        <li>Mandated Reporting</li>
        <li>Car-Seat Safety</li>
        <li>Patient Communication</li>
        <li>Emergency Response</li>
        <li>Company Policies and Procedures</li>
      </ul>
      <button className='return-btn' onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
}

export default TrainingPage;