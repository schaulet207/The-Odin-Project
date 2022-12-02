const ftoc = function(temp) {
  let celsius = (temp - 32) * (5 / 9);
  celsius = celsius.toFixed(1);
  return +(Math.round(celsius + "e+2")  + "e-2");
};

// (x − 32) × (5/9)

const ctof = function(temp) {
  let fahrenheit = (temp * (9 / 5) + 32);
  fahrenheit = fahrenheit.toFixed(1);
  return +(Math.round(fahrenheit + "e+2")  + "e-2");
  return 
};

// (x × (9/5) + 32)   

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
