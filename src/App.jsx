
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <p>built by <a href='https://github.com/Kasib-hub'>Kasib Abdullah</a></p>
    </div>
  )
}

export default App
