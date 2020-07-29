// const rate =100;
// let freeprice = true;
// let handpick = false;
// switch (rate) 
// {
//     case 100 :
//         freeprice= true;
//         handpick= false;
//         break;
//     case 99 :
//         freeprice= false;
//         handpick=true;
//         break;

//     default:
//         freeprice= false;
//         handpick= false;

// }
// console.log(freeprice);
// console.log(handpick);




//switch statemnet
const productPrice = 50;
let freeShopping = true;
let handPick = false;

switch (productPrice) {
    case (productPrice >= 100 && productPrice):
        freeShipping = true;
        handPick = false;
        break;

    case (productPrice >= 60 && productPrice):
        freeShipping = false;
        handPick = true;
        break;
    default:
        freeShipping = false;
        handPick = true;

}
console.log(freeShipping);
console.log(handPick);

///exersie:
const personAge = 20;
let personName = 'Josna';
let personName1 = 'Tipu';
let personName2 = 'Dipu';
let personName3 = 'Apu';
switch (personAge) {
    case (personAge >= 30 && personAge):
        console.log(personName);
        break;
    case (personAge >= 25 && personAge):
        console.log(personName1);
        break;
    case (personAge >= 20 && personAge):
        console.log(personName2);
        break;
    case (personAge >= 15 && personAge):
        console.log(personName3);
        break;
    default:
        console.log('Not a Person');


}
//Day of switch() statement
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wendnesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
       
}
console.log(day);





// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log(day)