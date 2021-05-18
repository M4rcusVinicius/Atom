export const circuit = (num, size) => {
  console.log('num:', num)
  console.log('size:', size)
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