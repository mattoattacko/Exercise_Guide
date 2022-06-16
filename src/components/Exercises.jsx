import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material/'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 6;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }

  //this useEffect is what allows our Horizontal Scrollbar to scroll to the correct body part when we click on a body part
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all') { //starts as all
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else { //shows the exercises for the clicked icon
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData); //sets the exercises to the fetched data
    }

    fetchExercisesData(); //calls the fetchExerciseData function
  }, [bodyPart]);
  //recalled anytime a body part changes

  return (
    <Box
      id='exercises'
      sx={{ mt: { lg: '110px' }}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Search Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' }}}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 6 && (
          <Pagination 
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises

//map over all the exercises and return a list of exercises

//check if the amount of exercises in the array is greater than 9, if so we implement pagination

//the pagination component immediately passes the event and value of the current page we click on. This is done behind the scenes by Material UI