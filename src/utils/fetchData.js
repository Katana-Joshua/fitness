export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'e450f37e2fmsh3b0037513e5ed83p1c11ecjsn11958a296288',
  },
};

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'e450f37e2fmsh3b0037513e5ed83p1c11ecjsn11958a296288',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

// process.env.REACT_APP_RAPID_API_KEY
