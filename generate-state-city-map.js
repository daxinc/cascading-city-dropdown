const data = require('./Final_CSV_States with cities_towns_buroughs_townships.json');
const fs = require('fs');

const result = {};

function addCity(state, city) {
  if (!result[state]) {
    result[state] = [];
  }
  result[state].push(city);
}
data.forEach((d) => {
  addCity(d.StateID, d.CityName);
});

fs.writeFileSync('state2city-map.json', JSON.stringify(result));
