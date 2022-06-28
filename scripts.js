const data = require("./sightings.json");

function getMonthlySightings(data) {
  const months = {
    "January": 0,
    "February": 0,
    "March": 0,
    "April": 0,
    "May": 0,
    "June": 0,
    "July": 0,
    "August": 0,
    "September": 0,
    "October": 0,
    "November": 0,
    "December": 0
  };

  let key;
  let month;

  for(let sighting=0; sighting<data.length; sighting+=1) {
    month = parseInt(data[sighting]["datetime"].slice(0,2));
    key = Object.keys(months)[month-1];
    months[key] += 1;
  }
  return months;
}

function getColorMentions(data) {
  const colors = {
    "red": 0,
    "orange": 0,
    "yellow": 0,
    "green": 0,
    "blue": 0,
    "purple": 0,
    "white": 0,
    "black": 0,
    "gray": 0
  }

  let key;
  let comments;

  for(let sighting=0; sighting<data.length; sighting+=1) {
    comments = String(data[sighting]["comments"]);
    // comments = comments.toLowerCase;
    for(let color=0; color<Object.keys(colors).length; color+=1) {
      key = Object.keys(colors)[color];
      if(comments.includes(key)) {
        colors[key] += 1;
      }
    }
  }

  return colors;
}

console.log(getColorMentions(data));