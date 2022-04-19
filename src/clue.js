// ITERATION 1

// Suspects Array

/* All of six possible suspects in Clue have a first name, 
last name, occupation, age, description, image and color.*/

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'red'
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  }
];


// Rooms Array
/* There are a total of nine weapons. Each of them has a different name and weight. */
const roomsArray = [
  { name: 'Dining Room'
  },   
  {
    name: 'Conservatory'
  },
  {
    name: 'Kitchen'
  },
  {
    name: 'Study'
  },  
  {
    name: 'Library'
  },
  {
    name: 'Billiard Room'
  },
  {
    name: 'Lounge'
  },
  {
    name: 'Ballroom'
  },
  {
    name: 'Hall',
  },
  {
    name: 'Spa',
  },
  {
    name: 'Living Room',
  },
  {
    name: 'Observatory',
  },
  {
    name: 'Theater',
  },
  {
    name: 'Guest House',
  },
  {
    name: 'Patio',
  },

];

// Weapons Array
/* There are a total of nine weapons. Each of them has a different name and weight.*/

const weaponsArray = [
  {
    name: 'rope',
    wieght: 10
  },   
  {
    name: 'knife',
    wieght: 8
  },
  {
    name: 'candlestick',
    wieght: 2
  },
  {
    name: 'dumbbell',
    wieght: 30
  },  
  {
    name: 'poison',
    wieght: 2
  },
  {
    name: 'axe',
    wieght: 15
  },
  {
    name: 'bat',
    wieght: 13
  },
  {
    name: 'trophy',
    wieght: 25
  },
  {
    name: 'pistol',
    wieght: 20
  }

];


// ITERATION 2

/*At the beginning of the game, players shuffle each of the card stacks to create a combination of suspect, weapon and room. This will be the mystery to solve.*/

//Random selector

/*Declare a function named selectRandom to randomly select one element from a card stack. The function should expect an array as an argument, and should return a random element from the array.*/

function selectRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
 
  const result = arr[randomIndex];
  
  return result;
}

//Create the mystery

/*Declare a function named pickMystery that takes no arguments and returns an object with three properties: suspect, weapon and room, each holding as a value a card of that specific type. You can get a random card of each type by calling selectRandom on each card stack.*/

function pickMystery(arr) {
  let suspectRandom = selectRandom(suspectsArray);
  let weaponRandom = selectRandom(weaponsArray);
  let roomRandom = selectRandom(roomsArray);

  return { 
    suspect: suspectRandom, 
    weapon: weaponRandom, 
    room: roomRandom 
  };

}

// ITERATION 3 

/*Declare a function named `revealMystery` that receives an _envelope_ `object` 
(with the shape of the object returned by `pickMystery`) as the single argument, 
and returns a reveal message in the following format: */

// **\<FIRST NAME\> \<LAST NAME\> killed Mr. Boddy using the \<WEAPON\> in the \<ROOM\>!**

function revealMystery (envelope) {
  
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;

}