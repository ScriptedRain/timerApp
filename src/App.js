import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import './index.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/team'>{/* <Team /> */}</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
