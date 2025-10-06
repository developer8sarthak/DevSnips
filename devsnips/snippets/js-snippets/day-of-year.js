/* Snippet Name: Day of Year | Use Case: Get the day number of the year for a given date | Description: Calculates the day of the year (1-366) from a Date object. */
const dayOfYear = (d) => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
