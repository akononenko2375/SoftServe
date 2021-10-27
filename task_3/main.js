//!! Meeting

let s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

const meeting = (s) => {
  return s
    .toUpperCase()
    .split(';')
    .map((name) => name.split(':').reverse())
    .sort()
    .reduce((acc, name) => (acc += `(${name[0]}, ${name[1]})`), '');
};

console.log(meeting(s));

//!! Find a Chair

function findChair(room, need) {
  if (!need) return "Game On";
  const result = [];

  for (let i = 0; i < room.length; i++) {
    if (need > 0) {
      let availableSeats = room[i][1] - room[i][0].length;
      let rightAmount = availableSeats > need ? need : availableSeats;
      result.push(availableSeats > 0 ? rightAmount : 0);

      if (availableSeats > 0) {
        need -= availableSeats;
      }
    } else {
      return result;
    }
  }

  return need <= 0 ? result : "Not enough!";
}

console.log(findChair([["XXX", 3], ["XXXXX", 6], ["XXXXXX", 9]], 4)); //[0, 1, 3]
console.log(findChair([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)); //[0, 0, 1, 2, 2]
console.log(findChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)); //'Game On'

//!! Task 3
