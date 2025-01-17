//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const filteredAges = ages.filter((age) => age > 18)
console.log(filteredAges)

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const numbers = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const evenNumbers = numbers.filter((number) => number % 2 === 0)
console.log(evenNumbers)

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamersA = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const lolStreamers = streamersA.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(lolStreamers)

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamersB = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamersU = streamersB.filter((streamer) => streamer.name.includes('u'))
console.log(streamersU)

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const filteredStreamers = streamersB.filter((streamer) => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    if (streamer.age > 35) {
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
      }
    }
  }
})

console.log(filteredStreamers)
