const object=[
    {
        productName:'Rice',
        productPrice:23,
        productIsAvaible:true,
        productQulality:7,
    },
    
    {
        productName:'Banana',
        productPrice:26,
        productIsAvaible:false,
        productQulality:6,
    
    }
    
    ];
    // for (let element2 in object1){
    //     console.log(object1[element2])
    // }
    // for(let element1 in object){
    //     console.log(object[element1]);
    // }
    const showObject=object=>{
     
    let objectInfo='';
    for(let el1 of object){
        console.log(object);
    objectInfo+=`
    productName    -${el1.productName}
    productPrice   -${el1.productPrice}
    productIsAvaibl-${el1.productIsAvaible}
    productQulality-${el1.productQulality}
    IN-stock
    `;
    }
    return objectInfo
    
}
    console.log(showObject(object));