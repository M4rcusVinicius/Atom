
export const circuit = (num, size) => {
  const div = 360 / num;
  const electrons = new Array
  for (var i = 1; i <= num; ++i) {
    var y = Math.sin(div * i * (Math.PI / 180)) * size;
    var x = Math.cos(div * i * (Math.PI / 180)) * size;
    electrons.push({
      top: (y + 314).toString() + "px",
      left: (x + 314).toString() + "px"
    })
  }
  return electrons
}

export const size = () => {
  const height = window.innerHeight
  const width = window.window.innerWidth
  if (height < width) { return height }
  return width
}