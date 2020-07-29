const aObject={
    a:10
}
function passByReference(a){
    let bObject=aObject
    console.log(aObject);
    bObject.a=20
    console.log(bObject);

}
passByReference();
console.log(aObject);