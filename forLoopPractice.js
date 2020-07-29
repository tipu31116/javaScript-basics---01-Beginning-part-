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
    let infoLibaray='';
   for(let index=0;index<Libaray.length;index++){
       console.log(index);
       infoLibaray +=`
       LibarayName       -${Libaray[index].libarayName}
       LibarayLocation   -${Libaray[index].libarayLocation}
       LibarayIsAvalible -${Libaray[index].bookIsAvalible}
       TotalStudent      -${Libaray[index].totalStudent}
       LibarayCard       -${Libaray[index].libarayCard}
       LibarayReg        -${Libaray[index].libraryReg}

       `;
       console.log(infoLibaray);
    
      
   }
   console.log(infoLibaray);
   //console.log(infoLibaray)
   return infoLibaray;
   
  
   
  
}

const allow=showAllLibaray(Libaray);
console.log(allow);