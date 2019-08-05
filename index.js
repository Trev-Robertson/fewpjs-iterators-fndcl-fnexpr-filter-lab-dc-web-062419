// Code your solution here

function findMatching(drivers, string){
    let match = drivers.filter(d => {
        return d.toLowerCase() === string.toLowerCase()
    })
    return match
}



function fuzzyMatch(drivers, string) {


}


function matchName(drivers, string){


}