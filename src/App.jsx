import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Booking from './pages/Booking'
import Dashboard from './pages/Dashboard'
import NurseProfile from './pages/NurseProfile'

export default function App(){return <BrowserRouter><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/services/:id" element={<ServiceDetail/>}/><Route path="/booking" element={<Booking/>}/><Route path="/profile" element={<NurseProfile/>}/><Route path="/dashboard" element={<Dashboard/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/></BrowserRouter>}
