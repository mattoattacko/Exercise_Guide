import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material' //like a div with extra styling

import './App.css'

import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto' > 
      {/* without the sx and m values, our hero-image will stack on top of the Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App