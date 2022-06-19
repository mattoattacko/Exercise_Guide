import React from 'react'
import { Typography, Stack, Box } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'} }} >
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle groups
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />
        }
      </Stack>
      
      <Typography variant='h3' mb={5}>
        Exercises that use similar equipment
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises

//if targetMuscleExercises exist, then show the HorizontalScrollbar