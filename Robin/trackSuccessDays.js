/* You want to track how often your daily caloric intake is lower than the day before and daily hours spent excercising exceeds those from the previous day. If so, you will mark it as a success day. Create a function that returns the total number of success days.


 */
function trackSuccessDays(trackData) {
  let count = 0;
  for (i = 1; i < trackData.length; i++) {
    if (trackData[i][0] < trackData[i - 1][0] && trackData[i][1] > trackData[i - 1][1]) {
      count++;
    }
  }
  return count;
}

let data = [[100, 100], [90, 110], [80, 120], [70, 130], [60, 140]];
console.log(trackSuccessDays(data));

/*
const routine = {
  calories: [2000, 1800, 1900, 1700, 2500],
  workouts: [1, 2, 0, 3, 5],
};
function successDay(routine) {
  let successDay = 0;
  for (let i = 1; i < routine.calories.length; i++) {
    if (
      routine.calories[i] < routine.calories[i - 1] &&
      routine.workouts[i] > routine.workouts[i - 1]
    ) {
      successDay++;
    }
  }
  return successDay;
}
console.log(successDay(routine));
 */
