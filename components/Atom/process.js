
const sublevels =   [
  { limit:   0, layer: 1, e: "s", min: 2, },
  { limit:   2, layer: 2, e: "s", min: 2, },
  { limit:   4, layer: 2, e: "p", min: 6, },
  { limit:  10, layer: 3, e: "s", min: 2, },
  { limit:  12, layer: 3, e: "p", min: 6, },
  { limit:  18, layer: 4, e: "s", min: 2, },
  { limit:  20, layer: 3, e: "d", min: 10,},
  { limit:  30, layer: 4, e: "p", min: 6, },
  { limit:  36, layer: 5, e: "s", min: 2, },
  { limit:  38, layer: 4, e: "d", min: 10,},
  { limit:  48, layer: 5, e: "p", min: 6, },
  { limit:  54, layer: 6, e: "s", min: 2, },
  { limit:  56, layer: 4, e: "f", min: 14,},
  { limit:  70, layer: 5, e: "d", min: 10,},
  { limit:  80, layer: 6, e: "p", min: 6, },
  { limit:  86, layer: 7, e: "s", min: 2, },
  { limit:  88, layer: 5, e: "f", min: 14,},
  { limit: 102, layer: 6, e: "d", min: 10,},
  { limit: 112, layer: 7, e: "p", min: 6, },
]

export const distribution = (num) => {
  const result = {
    distribution: [],
    layersNum: [0, 0, 0, 0, 0, 0, 0]
  }
  function min(min, n) {
    if(n > min) { return min }
    else { return n }
  }
  sublevels.forEach(s => {
    if(num > s.limit) {
      result.distribution.push([s.layer + s.e, min(s.min, num - s.limit)])
      result.layersNum[s.layer - 1] = result.layersNum[s.layer + 1] + min(s.min, num - s.limit)
    }
  })
  return result
}

export const circuit = (num, size) => {
  const div = 360 / num;
  const electrons = new Array
  for (var i = 1; i <= num; ++i) {
    var y = Math.sin(div * i * (Math.PI / 180)) * size;
    var x = Math.cos(div * i * (Math.PI / 180)) * size;
    electrons.push({
      top: (y + 218).toString() + "px",
      left: (x + 218).toString() + "px"
    })
  }
  console.log(electrons)
  return electrons
}