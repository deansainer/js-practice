const person = {
    firstName: 'Denys',
    surName: 'Vlasiuk',
    age:  21,
    haveGf:  false,
}
function getInfo(obj){
    return obj.firstName
}
document.write(getInfo(person))