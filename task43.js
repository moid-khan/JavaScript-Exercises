let magicianNames = ["John", "Eric", "Jack"];
let showMagicians = (magicianNames) => {
    for (magicianName of magicianNames) {
      console.log(magicianName);
    }
  };

let makeGreat = (magicianNames) =>{
    let greatMagicians = [];
    for(let magicianName of magicianNames){
        greatMagicians.push(`The G.O.A.T ${magicianName}`)
    }
    return greatMagicians;
}
let greatMagicians = makeGreat(magicianNames)
showMagicians(greatMagicians);

let greatMagiciansNew = makeGreat(magicianNames);
console.log(`Array with G.O.A.T`);
showMagicians(greatMagiciansNew);
console.log(`Real array`);
showMagicians(magicianNames);