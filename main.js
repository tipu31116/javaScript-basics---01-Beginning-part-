//first basis 
// const productName='potot';
// const productPrice=30;
// const productQulatity=2;
// const productIsAvaible=true;

// console.log(`productName- ${productName}  
//             productPrice- ${productPrice}
//             productQulatiy-${productQulatity}
//             productIsAvaible-${productIsAvaible}`);
//array structure 
// const productInfo=['potato',30,3,true];
// console.log(productInfo[0]);
// console.log(productInfo[1]);
// console.log(productInfo[2]);
// console.log(productInfo[3]);


// console.log(`productName- ${productInfo[0]}  
//             productPrice- ${productInfo[1]}
//             productQulatiy-${productInfo[2]}
//             productIsAvaible-${productInfo[3]}`);


//object
// const productInfoObj={
//     productName: 'potato',
//     productPrice:30,
//     productQuantity: 3,
//     productIsAvaible:true
// };
// console.log(productInfoObj.productName)
// console.log(productInfoObj.productPrice)
// console.log(productInfoObj.productQuantity)
// console.log(productInfoObj.productIsAvaible)

// //another system of obj declar
// //console.log(productInfoObj['productName'])

// //this way of console log
// console.log(`productName- ${productInfoObj.productName}  
//             productPrice- ${productInfoObj.productPrice}
//             productQulatiy-${productInfoObj.productQuantity}
//             productIsAvaible-${productInfoObj.productIsAvaible}`);



///function 
// const productInfoFunction={

//     productName:'Apple',
//     productPrice:200,
//     productQuantity:8,
//     CustomerFollow:null,
//     productIsAvaible:true
// };
// const productInfoFunction1={

//     productName:'Banner',
//     productPrice:80,
//     productQuantity:5,
//     productIsAvaible:false
// };
// const productInfoFunction2={

//     productName:'Rice',
//     productPrice:50,
//     productQuantity:600,
//     productIsAvaible:true
// };
// const productInfoFunction3={

//     productName:'Mango',
//     productPrice:80,
//     productQuantity:5,
//     productIsAvaible:true
// };
// const productInfoFunction4={

//     productName:'Wheat',
//     productPrice:40,
//     productQuantity:5,
//     productIsAvaible:true
// };
// function showProductInfoFunction(productObj){
//     return `
//     ProductName-${productObj.productName}
//     ProductPrice-${productObj.productPrice}
//     ProductQuantity-${productObj.productQuantity}
//     CustomerFollow-${productObj.CustomerFollow}
//     ProductIsAvaible-${productObj.productIsAvaible}
//     `;
// }
// console.log(showProductInfoFunction(productInfoFunction));
// console.log(showProductInfoFunction(productInfoFunction1));
// console.log(showProductInfoFunction(productInfoFunction2));
// console.log(showProductInfoFunction(productInfoFunction3));
// console.log(showProductInfoFunction(productInfoFunction4));


// //object destructure system and rule
// console.log('Objecrt Function Destructure');
// const ProductFunctionObject={

//     productName:'Rice',
//     productPrice:45,
//     productQuantity:12,
//     productCostomer:12,
//     ProductIsAvaible:true,
//     productLon:null

// };


// const ProductFunctionObject1={
//     productName:'Milk',
//     productPrice:60,
//     productQuantity:50,
//     productCostomer:123,
//     ProductIsAvaible:true,
//     productLon:null

// };




// const ProductFunctionObject2={

//     productName:'sogar',
//     productPrice:60,
//     productQuantity:34,
//     productCostomer:12,
//     ProductIsAvaible:true,
//     productLon:null


// };

// const {productName,productPrice,productQuantity,productionCostomer,productIsAvaible,productLon}=ProductFunctionObject2;
// console.log(productName,productPrice,productQuantity,productionCostomer,productIsAvaible,productLon);

// function showProductionOfFunctionObject(
//     { productName,
//       productPrice,
//       productQuantity,
//       productCostomer,
//       ProductIsAvaible,
//       productLon}

// ){
//     //console.log(showProductionOfFunctionObject.NameProduct='Random');
//     //console.log(ObjectFunction)
//     //const {productName,productPrice,productQuantity,productCostomer,ProductIsAvaible,productLon}=ObjectFunction;
//     return `
   
//     ProductionName     - ${productName}
//     ProductionPrice    - ${productPrice}
//     ProductionQuantity - ${productQuantity}
//     ProductionCostomer - ${productCostomer}
//     ProductionIsAvailbe- ${ProductIsAvaible}
//     ProductionLon      - ${productLon}
//     `
// }

// const show1=showProductionOfFunctionObject(ProductFunctionObject);
// console.log(show1);
// const show2=showProductionOfFunctionObject(ProductFunctionObject1);
// console.log(show2);
// const show3=showProductionOfFunctionObject(ProductFunctionObject2);
// console.log(show3);




///object function method
// const Department={

//     departmentName:'CSE',
//     departmentStudnet:250,
//     departmentRunningBatch:5,
//     departmentTeachers:14,
//     departmentBuldng:1,
//     departmentSturf:4,
//     departmentCLassRoom:10,
//     departmentlab:4,
//     showDepartment:function(){
//         return `
//         departmentName    -${this.departmentName}
//         departmentStudent -${this.departmentStudnet}
//         departmentRunningBatch-${this.departmentRunningBatch}
//         departmentTeachers-${this.departmentTeachers}
//         departmentBulding -${this.departmentBuldng}
//         departmentSturf   -${this.departmentSturf}
//         departmentClassRoom-${this.departmentCLassRoom}
//         departmentLab     -${this.departmentlab}
//         `;

//     }
// };
//    const result = Department.showDepartment();
//    console.log(result)


//beter data structure of function

const batch_9th=[
    {
        batchName:'CSE 9th',
        batchStudent:50,
        batchProgramer:5,
        batchPolitics:10,
        batchComillaLocal:27
    }
    ,
    {
        batchName:'ICt 9th',
        batchStudent:49,
        batchProgramer:3,
        batchPolitics:12,
        batchComillaLocal:23

    },
    {
        batchName:'CS',
        batchStudent:100,
        batchProgramer:12,
        batchPolitics:23,
        batchComillaLocal:40
    }
];
function showAllStudentInfomation(){
  //  console.log(main);

  const [batch1,batch2,batch3]=batch_9th;
  //console.log(batch1);
  //console.log(batch2);
  //console.log(batch3);


  
    return `
    BatchName  -${batch1.batchName}
    BatchStudent$-${batch1.batchStudent}
    BatchProgrammer-${batch1.batchProgramer}
    BatchPolictics-${batch1.batchPolitics}
    BatchComillaLocal-${batch1.batchComillaLocal}

    `;
}
const output=showAllStudentInfomation(batch_9th);
console.log(output);


///for loop 
const arrayList=['Tipu',23,true,2];
console.log(arrayList.length);
for(let i=0;i<arrayList.length;i++){
    console.log(arrayList[i]);
    console.log(i);
    
}

//while loop
const arrayList2=['kjdfhusdi','77','fhdfikjf',9,0];
let i=0;
while(i<arrayList2.length){
    console.log(arrayList2[i]);
    i++;
}