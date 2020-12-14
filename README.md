# Star Wars Arrays

An array whose indecies go `4`, `5`, `6`, `1`, `2`, `3`, `7`, `8`, `9`

Additional items can be found under [legends](https://starwars.fandom.com/wiki/Star_Wars_Legends)

```js
const StarWarsArray = require('star-wars-arrays')

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

media[4] // A New Hope
media[5] // Empire Strikes Back
media[6] // Return of the Jedi

media[1] // The Phantom Menace
media[2] // Attack of the Clones
media[3] // Revenge of the Sith

media[7] // The Force Awakens
media[8] // The Last Jedi
media[9] // The Rise of Skywalker

media.legends[0] // Heir to the Empire
```

The go-to toolkit for interfacing between JavaScript & George Lucas!
