// console.log('destructuring');
//
// const person = {
//   age: 28,
//   location: {
//     city: 'Chicago',
//     temp: 35
//   }
// };
//
// const { name = 'Unknown', age } = person;
//
// console.log(`${name} is ${age}`);
//
// const {city, temp: temperature} = person.location;
//
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Harry Potter',
//   author: 'JK Rowling',
//   publisher: {
//     //name: 'Random House'
//   }
// }
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const [item, , mediumPrice] = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

console.log(`A medium ${item} costs ${mediumPrice}`);
