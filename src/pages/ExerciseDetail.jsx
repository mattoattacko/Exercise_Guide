import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})

  const { id } = useParams() //id of exercise. Gives us access to the # we are on in the URL

  useEffect(() => {
    const fetchExercisesData = async () => {
      //lots of API calls here, so first we set up the URLs of the APIs we are going to call
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      //API calls. We fetch the data then set it to the state. 
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }

    fetchExercisesData();
  }, [id]) //dependency array has 'id' because we want to recall this anytime the 'id' changes.

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail

//useParams is used to determine the id of the exercise that is being viewed, allowing us to get more info about it