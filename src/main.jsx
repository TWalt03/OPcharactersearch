import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css'
import App from './Containers/App.jsx'
import Home from './Containers/home.jsx'
import Info from './Containers/Info.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/characters' element = {<App/>}/>
        <Route path ='/info/:id' element = {<Info/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
