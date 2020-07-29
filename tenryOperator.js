const price=89;
let shippingFree=false;
let handpick=false;
shippingFree=price>=100?true:false;
handPick=(price>=60) && (price<99)? true:false;
console.log(shippingFree);
console.log(handPick);