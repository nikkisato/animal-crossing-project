export default async function fetchAllVillagers() {
  const baseURl = 'https://api.nookipedia.com/villagers';
  const apiKey = process.env.REACT_NEXT_ANIMAL_CROSSING_API;

  // Check if the API key is defined
  if (!apiKey) {
    console.error('API key is not defined');
    return Promise.reject('API key is not defined');
  }

  try {
    const response = await fetch(baseURl, {
      headers: { 'X-API-Key': apiKey },
    });

    if (!response.ok) {
      throw new Error(`Error fetching villagers: ${response.statusText}`);
    }

    // Need to await for the response
    const data = response.json();
    return data;
  } catch (error) {
    console.log('Error fetching villagers: ', error);
    throw error;
  }
}
