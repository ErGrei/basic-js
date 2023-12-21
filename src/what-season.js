const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
   if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  const manth = date.getMonth();
  if ((manth < 2) || (manth === 11) ) {
    return 'winter';
  } else if (manth < 5) {
    return 'spring';
  } else if (manth < 8) {
    return 'summer';
  } else (manth < 11) 
  return 'autumn';
  
}

module.exports = {
  getSeason
};
