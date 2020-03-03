const axios = require("axios");

const apikey = ;

const getWeather = async locationObj => {
  const { lat, lng, location } = locationObj;
  const URL = `https://api.darksky.net/forecast/${apikey}/${lat},${lng}`;
  try {
    const response = await axios.get(URL);
    console.log(
      `The weather in ${location} is ${
        response.data.currently.summary
      } and the temperature is ${(
        (response.data.currently.temperature - 32) *
        (5 / 9)
      ).toFixed(2)}`
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getWeather
};
