let person = {}

person.name = "Mohan";
person.lastName = "Bheesetty";
person.middleName = "Santosh"


let middleName = person['middleName']
if(middleName) {
    console.log(middleName.toUpperCase());
}
else {
    console.log("My middle name does not exits");
}