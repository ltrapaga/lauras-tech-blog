module.exports = {
    // take something that looks like 001930:00 GMT to 7:30PM
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
        // returning new object for DATE, passing in the date value ex(2/2/2023) breaking it down to look like <=
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() 
      }`;
    },
  };