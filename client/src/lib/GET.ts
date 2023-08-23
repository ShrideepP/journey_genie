export async function fetchFeaturedDestinations() {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/destination/featured`);

  if(!response.ok) {
    throw new Error('There was an error while getting the data.');
  };

  const data = await response.json();
  
  return data;
};

export async function fetchMoreDestinations() {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/destination`);
  
  if(!response.ok) {
    throw new Error('There was an error while getting the data.');
  };

  const data = await response.json();

  return data;
};
