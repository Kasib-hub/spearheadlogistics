
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MissionPage from './pages/MissionPage'
import VisionPage from './pages/VisionPage'
import ValuesPage from './pages/ValuesPage'
import ServicesPage from './pages/ServicesPage'
import EmploymentPage from './pages/EmploymentPage'
import TrainingPage from './pages/TrainingPage'

function App() {

  return (
    <div className="App">
      <Router>
        {/* <NavigationBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/employment" element={<EmploymentPage />} />
          <Route path="/training" element={<TrainingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
