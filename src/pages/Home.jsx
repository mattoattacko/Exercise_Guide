import React, { useState } from 'react'
import { Box } from '@mui/material'

import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {

  //we move this from 'SearchExercises' to 'Home' because changes in these states will be seen across the entire application
  const [bodyPart, setBodyPart] = useState('all')

   //we need to add our exercises to the state so that we can display them
   const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />      
    </Box>
  )
}

export default Home