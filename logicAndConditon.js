const productPrice=888;
let freeShipping=false;
let handPick=false;

if(productPrice>=100){
    freeShipping=true;
    handPick=false;

}
else if(productPrice>=60){
    freeShipping=false;
    handPick=true;
}
else{
    freeShipping=false;
    handPick=false;
}
console.log(freeShipping);
console.log(handPick);