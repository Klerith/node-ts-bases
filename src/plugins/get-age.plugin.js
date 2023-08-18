// const getAgePlugin = require('get-age');


const getAge = (birthdate) => {
  if ( !birthdate ) return new Error('birthdate is required');

  // return getAgePlugin(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}


module.exports = {
  getAge,
}