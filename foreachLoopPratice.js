const Libaray=[
    {
        libarayName:'Comilla Lib',
        libarayLocation:'Comilla',
        bookIsAvalible:true,
        tatalStudent:100,
        libarayCard:'Yes',
        libraryReg:2444422,

    },
    {
        libarayName:'Dhaka Lib',
        libarayLocation:'Dhaka',
        bookIsAvalible:true,
        tatalStudent:20,
        libarayCard:'Yes',
        libraryReg:2244422,


    },
    {
        libarayName:'Khulna Lib',
        libarayLocation:'Khulna',
        bookIsAvalible:true,
        totalStudent:150,
        libarayCard:'Yes',
        libraryReg:1234422,
    }
];
function showAllLibaray(Libaray){
    console.log(Libaray);
    let infoLibaray= '';
   Libaray.forEach(function(value){
    infoLibaray +=`
           LibarayName       -${value.libarayName}
           LibarayLocation   -${value.libarayLocation}
           LibarayIsAvalible -${value.bookIsAvalible}
           TotalStudent      -${value.totalStudent}
           LibarayCard       -${value.libarayCard}
           LibarayReg        -${value.libraryReg}
    
           `;
          
     });
  
//    for(let index=0;index<Libaray.length;index++){
//        console.log(index);
//        infoLibaray +=`
//        LibarayName       -${Libaray[index].libarayName}
//        LibarayLocation   -${Libaray[index].libarayLocation}
//        LibarayIsAvalible -${Libaray[index].bookIsAvalible}
//        TotalStudent      -${Libaray[index].totalStudent}
//        LibarayCard       -${Libaray[index].libarayCard}
//        LibarayReg        -${Libaray[index].libraryReg}

//        `;
//        console.log(infoLibaray);
    
      
//    }
   
//    //console.log(infoLibaray)
   return infoLibaray;
}

const allow=showAllLibaray(Libaray);
console.log(allow);






//forEach Loop 
const arrs=[
{
    personName:'Babu',
    personAge:23,
    personPression:'student',
    persondept:'CSE',
    personDeptRoll:11708003,
    personUniversityName:'Cou'
},
{
    personName:'Rafiq',
    personAge:27,
    personPression:'student',
    persondept:'CS',
    personDeptRoll:11608044,
    personUniversityName:'Cou'

},
{
    personName:'Dipu',
    personAge:24,
    personPression:'student',
    persondept:'ICT',
    personDeptRoll:1160805,
    personUniversityName:'Cou'

}
];
function showPeronsStatus(arrs){
    console.log(arrs);

    let personinfo='';
    arrs.forEach(function(value){

        personinfo+=`
        personName    -${value.personName}
        personAge     -${value.personAge}
        personPression-${value.personPression}
        persondept    -${value.persondept}
        personDeptRoll-${value.personDeptRoll}
        personUniversity-${value.personUniversityName}
        `;
    });
    return personinfo;
}

const result=showPeronsStatus(arrs);
console.log(result);