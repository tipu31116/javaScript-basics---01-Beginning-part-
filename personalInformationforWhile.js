const Person=[
    {
        personName:'Tipu Sultan',
        personAge:23,
        personHight:5.9,
        personProfession:'studen',
        personskill:'android developer',
        personCurrentCity:'brabhamanbaria',
        persionDepartment:'Computer Science & Enginnering'

    },
    {
        personName:'Dipu',
        personAge:20,
        personHight:5.7,
        personProfession:'studen',
        personskill:'Bussiness Man',
        personCurrentCity:'brabhamanbaria',
        persionDepartment:'AIS'

    },
    {
        personName:'Apu',
        personAge:18,
        personHight:5.8,
        personProfession:'studen',
        personskill:'UI Deginer',
        personCurrentCity:'brabhamanbaria',
        persionDepartment:'Information Comminication'

    },
    {
        personName:'Josna',
        personAge:26,
        personHight:5.8,
        personProfession:'HouseWife',
        personskill:'duifsiud',
        personCurrentCity:'brabhamanbaria',
        persionDepartment:'Commerce'


    }

];
console.log(Person.length);

function showAllPersonInformation(Person){
  
  let numberOfPerson = '';
    let index=0;
    while(index<Person.length){
        console.log(index);
   
        numberOfPerson += `

        PersonName    -${Person[index].personName}
        PersonAge     -${Person[index].personAge}
        PersonHight   -${Person[index].personHight}
        PersonProfession-${Person[index].personProfession}
        PersonSkill   -${Person[index].personskill}
        PersonCurrentCity-${Person[index].personCurrentCity}
        PersonDepartment-${Person[index].persionDepartment}

        `;


        console.log(numberOfPerson);
        index++;
    }
   // return `
    // PersonName    -${Person[index].personName}
    // PersonAge     -${Person[index].personAge}
    // PersonHight   -${Person[index].personHight}
    // PersonProfession-${Person[index].personProfession}
    // PersonSkill   -${Person[index].personskill}
    // PersonCurrentCity-${Person[index].personCurrentCity}
    // PersonDepartment-${Person[index].persionDepartment}

    // `;
    return numberOfPerson;
    
    
   
}
const personInfo=showAllPersonInformation(Person);
console.log(personInfo);