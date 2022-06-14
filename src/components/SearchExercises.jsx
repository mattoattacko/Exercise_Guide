import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData'; //the 'exerciseOptions' are what authorizes us to make the API request.

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {

      //gets our data using our utils
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      //once we get the data, we spread all the body parts data
      setBodyParts(['all', ...bodyPartsData ]);
    }

    //call it as soon as the app loads
    fetchExerciseData();
  }, [])
  

  //if a search exists, then we fetch exercise data
  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch(''); //clears search

      setExercises(searchedExercises); //adds searched exercises to state
    }
  }

  return (
    <Stack
      alignItems="center"
      mt='37px'
      justifyContent="center"
      p='20px'
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
        mb='50px'
        textAlign='center'
      >
        Awesome Butts You <br />
        Should Know
      </Typography>

      <Box 
        position='relative'
        mb='72px'
      >
        <TextField 
          sx={{
            input: {
              fontWeight: '700', 
              border: 'none', 
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())} // toLowerCase() to make it case insensitive. So searching 'Squat' will be the same as 'squat'.
          placeholder='Search Butts'
          type='text'
        />
        <Button 
          className='search-btn'
          sx={{
            position: 'absolute',
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none', 
            width: { lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'},
            height: '56px',
            right: '0', //because position is absolute, we need to add 'right: 0' else the text bar will span the screen on the right side
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px'  }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyParts={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises