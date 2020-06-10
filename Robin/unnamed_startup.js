/*  They will take the first letter of each of their names, capitalized, and sorted in alphabetical order - this will be the name of the startup.
 */
function createName(names) {
  const firstL = names.map(name => name.charAt(0).toUpperCase());
  return firstL.sort().join('');
}
console.log(createName(['bob', 'andy', 'kevin', 'lee']))
