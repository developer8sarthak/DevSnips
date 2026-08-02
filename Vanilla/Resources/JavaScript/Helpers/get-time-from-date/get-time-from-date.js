/* Snippet Name: Get Time from Date | Use Case: Get the time from a Date object | Description: A one-liner to get the time in hh:mm:ss format from a Date object. */
const getTimeFromDate = (date) => date.toTimeString().slice(0, 8);
