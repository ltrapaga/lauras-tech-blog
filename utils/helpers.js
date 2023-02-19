module.exports = {
  // Take in a timestamp
  format_time: (date) => {
    // Return a string with only the time
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
};
