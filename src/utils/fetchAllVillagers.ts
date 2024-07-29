export default async function fetchAllVillagers() {
  const baseURl = 'https://api.nookipedia.com/villagers';
  const apiKey = process.env.REACT_NEXT_ANIMAL_CROSSING_API;

  // Check if the API key is defined
  if (!apiKey) {
    console.error('API key is not defined');
    return Promise.reject('API key is not defined');
  }

  try {
    return await fetch(baseURl, {
      headers: { 'X-API-Key': apiKey },
    })
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.log('Error fetching villagers: ', error);
  }
}
