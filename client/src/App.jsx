import { useState } from 'react'
import './App.css'
import NavigationBar from './NavigationBar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import CreateProject from './components/CreateProject';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Deatails from './components/Deatails';
import DisplayByNames from './components/DisplayByNames';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/createproject' element={<CreateProject />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/details/:id' element={<Deatails />} />
          <Route path="/displaybynames/:name" element={<DisplayByNames/>} />

          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
  
      </Routes>
    </BrowserRouter>
  )
}

export default App
