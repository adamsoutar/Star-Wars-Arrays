const StarWarsArray = require('./index')

const media = new StarWarsArray()

media.push('A New Hope')
media.push('Empire Strikes Back')
media.push('Return of the Jedi')

media.push('The Phantom Menace')
media.push('Attack of the Clones')
media.push('Revenge of the Sith')

media.push('The Force Awakens')
media.push('The Last Jedi')
media.push('The Rise of Skywalker')

media.push('Heir to the Empire')

console.log(media[4]) // A New Hope
console.log(media[5]) // Empire Strikes Back
console.log(media[6]) // Return of the Jedi

console.log(media[1]) // The Phantom Menace
console.log(media[2]) // Attack of the Clones
console.log(media[3]) // Revenge of the Sith

console.log(media[7]) // The Force Awakens
console.log(media[8]) // The Last Jedi
console.log(media[9]) // The Rise of Skywalker

console.log(media.legends[0]) // Heir to the Empire
