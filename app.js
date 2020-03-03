const figlet = require("figlet");
const { getWeather } = require("./weather");
const { getLocation } = require("./location");

const main = async input => {
  const locationObj = await getLocation(input);
  await getWeather(locationObj);
};

main(process.argv[2]);

figlet(process.argv[2], function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
