const axios = require("axios");

const mapboxkey =
  ;

const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapboxkey}`;

const getLocation = async location => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxkey}`;
  try {
    const response = await axios.get(URL);
    return {
      lat: response.data.features[0].center[1],
      lng: response.data.features[0].center[0],
      location: response.data.features[0].place_name
    };
    console.log(response.data.features[0].center[1]);
    console.log(response.data.features[0].center[0]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getLocation
};
