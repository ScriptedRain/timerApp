import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import './index.css'
import Sidebar from './Components/Sidebar'
import { Calendar } from './Pages/Calendar'
import Todo from './Pages/Todo'
import AuthContextProvider from './Contexts/UserContext'
import Settings from './Pages/Settings'

function App() {
  return (
    <div className='App'>
      <div className='flex'>
        <Sidebar />
      </div>
      <Router>
        <AuthContextProvider>
          <firestoreContext>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/todo' element={<Todo />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </firestoreContext>
        </AuthContextProvider>
      </Router>
    </div>
  )
}

export default App
