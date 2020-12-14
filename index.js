const indexMap = { 4: 0, 5: 1, 6: 2, 1: 3, 2: 4, 3: 5, 7: 6, 8: 7, 9: 8 }
const isStarWarsIndex = (i) => Object.keys(indexMap).includes(i)

function getLegendsProxy (target, receiver) {
  return new Proxy([], {
    get: function (_, prop, __) {
      return Reflect.get(target, parseInt(prop) + 9, receiver)
    }
  })
}

const proxyHandler = {
  get: function (target, prop, receiver) {
    if (isStarWarsIndex(prop)) {
      return Reflect.get(target, indexMap[prop], receiver)
    } else if (prop === 'legends') {
      return getLegendsProxy(target, receiver)
    }
    return Reflect.get(...arguments)
  }
}

module.exports = function StarWarsArray () {
  return new Proxy([], proxyHandler)
}
