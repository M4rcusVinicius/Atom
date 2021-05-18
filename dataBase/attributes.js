import db from './db'

const Attributes = (number) => {
  const atom = db[number]
  console.log(atom)
  return atom
}

export default Attributes