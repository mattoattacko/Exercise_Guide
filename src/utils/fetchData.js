//our connection to RapidAPI
// if we use 'fetch' without 'Axios' we must also extract the data
export const exerciseOptions = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    // 'X-RapidAPI-Key': '229f753b2cmshf0d1c81f49d91f8p1c7171jsnf13d6709e53d',
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

  