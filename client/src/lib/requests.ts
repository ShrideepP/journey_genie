const BASE_URL = process.env.BASE_URL;

export const API_REQUESTS = {
  featuredDestinations: `${BASE_URL}/api/destination/featured`,
  moreDestinations: `${BASE_URL}/api/destination`,
  destinationDetails: (destinationId: string) => {
    return `${BASE_URL}/api/destination/details/${destinationId}`;
  },
  filterDestinations: (temperature: string, flightDuration: string, journeyType: string) => {
    return `${BASE_URL}/api/destination/filter?temperature=${temperature}&flightDuration=${flightDuration}&journeyType=${journeyType}`;
  },
  createDestination: `${BASE_URL}/api/destination/create`,
  removeDestination: (destinationId: string) => {
    return `${BASE_URL}/api/destination/remove/${destinationId}`;
  },
  editDestination: (destinationId: string) => {
    return `${BASE_URL}/api/destination/edit/${destinationId}`;
  },
};
