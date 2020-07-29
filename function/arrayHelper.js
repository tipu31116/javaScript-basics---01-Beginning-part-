const  arr=['I','am','IOS','developer'];
const arryFunciton=arr.map(function(element){
    return element.toUpperCase();
});
console.log(arryFunciton);



//arrow funciton
const array1=['Looking','so','Hot'];
const arrayFunction=array1.map((element1) =>  element1.toUpperCase());
console.log(arrayFunction);


//exersise
const arrExersise=['I','am','deveploer'];
const arrMap=arrExersise.map(function(params) {
  
    let finalElement=[];
    if(params.length){
        let updatElement='!';
        let newElement=params.split();
        finalElement=newElement+updatElement;
    }
    else{
        console.log(params);
    }
    return finalElement;

    
});
console.log(arrMap);



//
const arrayValue=['Live','Long','alive'];
const showValue=arrayValue.map(number=>{
    if(number ==='alive'){
        return number +'!';
    }else if(number==='Long'){
        return number+'?';
    }else if(number==='Live'){
        return '#'+number;
    }else{
        return number;
    }
});
console.log(showValue);

//ternay operator
const arrayname=['Who','I','Am','?'];
const showName=arrayname.map(value=>{
  return value==='Who' ? '#= '  +value: value;
})
console.log(showName);


//single line expression
const value=['name','age','roll','cgpa'];
const show1=value.map(e=>(e === 'roll' ? e+'!':e));
console.log(show1);