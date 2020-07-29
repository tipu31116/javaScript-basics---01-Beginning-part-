function Product(
    productName,
    productPrice,
    productQulality,
    productIsAviable,
)
{

    this.productName=productName
    this.productPrice=productPrice
    this.productQulality=productQulality
    this.productIsAviable=productIsAviable
}
const product=new Product('Rice',50,8,true)
console.log(product);