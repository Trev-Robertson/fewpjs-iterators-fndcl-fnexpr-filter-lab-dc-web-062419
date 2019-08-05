// Code your solution here

function findMatching(drivers, string){
    let match = drivers.filter(d => {
        return d.toLowerCase() === string.toLowerCase()
    })
    return match
}



function fuzzyMatch(drivers, string) {
    let match = drivers.filter(d =>{
     return   d.substring(0, string.length) === string
    })
    return match
}


function matchName(drivers, string){
    let match = drivers.filter(d => {
        return d.name === string
    })
        return match


}