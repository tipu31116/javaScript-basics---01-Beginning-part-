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
    this.showThisProduct=function(){
        
        return `${productName} - ${productPrice} -${productQulality} - ${productIsAviable}`
    }
}

const product=new Product('Rice',50,8,true)
const product1=new Product('Benana',80,9,false)
const product2=new Product('Tea',50,9,true)

console.log(product);
//console.log(product.showThisProduct('hello'));
console.log(product1)
console.log(product2)