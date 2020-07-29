const allProduct={
    productName:'Wide',
    productPrice:34,
    productQuantity:5,
    productIsAvaible:true
}
function showAllProduct(productName,productPrice,productQuantity,productIsAvaible){
    return{
        productName,
        productPrice,
        productQuantity,
        productIsAvaible
    }

}
console.log(showAllProduct('Wide',34,5,true));