// Code your solution here
const findMatching = function(array, checkName){

    let matchingDriver = array.filter(elem => elem.toLowerCase() === checkName.toLowerCase())
    return matchingDriver
}

function fuzzyMatch(array, checkName){
    let matchingDriver = array.filter(elem => elem[1] === checkName[1])
    return matchingDriver
}

const matchName = function(array, checkName){
    let matchingDriver = array.filter(elem => elem.name === checkName)
    return matchingDriver
}