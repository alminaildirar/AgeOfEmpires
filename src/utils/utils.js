export const getCostKeys = (data) => {
    let costKeys = []
   data.units.map(unit => 
        unit.cost && Object.keys(unit.cost).map((key) => costKeys.push(key.toLowerCase()))
)
return  costKeys.filter((x, i, a) => a.indexOf(x) === i);
}