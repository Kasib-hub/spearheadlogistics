import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function ValuesPage() {

  const navigate = useNavigate();

  return (
    <>
      <Header 
        titleText='Values' 
      />
      <h2>You don’t wait on us, Spearhead waits on you</h2>
      <ol>
        <li>
          <strong>Compassion: </strong> We focus on providing caring and empathetic transportation services to our clients, recognizing the challenges they may be facing in their health journeys.
        </li>
        <li>
          <strong>Safety: </strong> Our commitment to the safety and wellbeing of passengers during transport, including maintaining clean and well-maintained vehicles, following safety protocols, and training drivers to handle any potential medical issues that may arise.
        </li>
        <li>
          <strong>Reliability: </strong> Our dedication to providing dependable and punctual transportation services, recognizing the importance of timely access to medical care.
        </li>
        <li>
          <strong>Accessibility: </strong>Our goal is to provide transportation services to anyone who needs access to care, regardless of age, race, gender, religion, mobility, or health condition.
        </li>
        <li>
          <strong>Respect: </strong>Our belief in treating everyone with dignity and respect, regardless of their background or circumstances.
        </li>
        <li>
          <strong>Professionalism: </strong>Our team is committed to maintaining a high standard of professionalism in all interactions with everyone to include clients, healthcare providers, and other stakeholders.
        </li>
        <li>
          <strong>Collaboration: </strong>We will work closely with healthcare providers, insurance companies, and other organizations to ensure that our clients transportation needs are met as it relates to access to health care.
        </li>
        <li>
          <strong>Innovation: </strong>We will continue to adopt new technologies and approaches to improve the quality and efficiency of transportation services, while maintaining a focus on our clients’ needs. 
        </li>
        <li>
          <strong>Sustainability: </strong>We will maintain trained drivers and ensure they stay within regulatory compliance.
        </li>
        <li>
          <strong>Community: </strong>We believe we are an important part of our community therefore, giving back through charitable donations, volunteer work, or other initiatives in the community will always be a priority. 
        </li>
      </ol>
      <button className='return-btn' onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

export default ValuesPage;