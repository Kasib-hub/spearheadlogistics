import Header from '../components/Header/Header';
import { useNavigate } from 'react-router-dom';

function EmploymentPage() {

  const navigate = useNavigate();

  return (
    <>
      <Header 
        titleText='Careers'
      />
      <h2><i>CAN YOU MAKE A DIFFERENCE?</i></h2>
      <p><strong>What are we looking for?</strong></p>
      <ul>
        <li>Employees that have a passion for helping others</li>
        <li>Employees that values life and people</li>
        <li>Employees that enjoy driving</li>
        <li>Employees that can past an extensive background check</li>
        <li>Employees with a clean driving record/ Texas Drivers license/ 5 years experience</li>
        <li>Employees that enjoy working with others</li>
        <li>Employees that are respected in the community</li>
        <li>Employees that enjoy helping others</li>
        <li>Employees that have their own car with insurance</li>
      </ul><br />

      <p><strong>Major Duties of a NEMT Driver</strong></p>
      <ul>
        <li>Assist clients in and out of vehicle</li>
        <li>Safely transport and escort if needed eligible clients to and from their medical appointments on time</li>
        <li>Be available on call during predetermined hours</li>
        <li>Transport clients using the proper equipment and with proper restrains, in accordance to Texas State Law, including children in child safety seats and/or boosters.</li>
        <li>To report any problem stemming from an assignment immediately to the Spearhead of All Logistics Office</li>
        <li>To completely and correctly fill out billing report forms.</li>
        <li>Maintain log books</li>
        <li>Keep the vehicle and equipment clean</li>
        <li>Treat clients and other providers with world class customer service</li>
        <li>Treat clients with care and respect and keep all information confidential</li>
      </ul><br />

      <p><strong>Qualifications of a NEMT Driver</strong></p>
      <ul>
        <li>Have a valid Driver’s License for 5 years</li>
        <li>Have no at fault accidents or traffic violations for 2-years (a Drivers abstract will be provided)</li>
        <li>Must be able to pass a Finger Print FBI and Washington State Criminal History Report</li>
        <li>Pass Drug Screening (Medical Marijuana Cards are not accepted)</li>
        <li>Be Physically able to drive long distances and obtain a Medical Release from physician</li>
      </ul><br />

      <p><strong>For an application packet please <a href='tel:+2104196216' className='contact-email'>call us</a> or <a href='mailto:spearheadofalllogistics@gmail.com' className='contact-email'>email us</a> and we will be in touch with you soon.</strong></p>

      <button className='return-btn' onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

export default EmploymentPage;